// ============================================================
// src/auth.ts
// Cấu hình Auth.js v5 (next-auth@beta)
// ============================================================

import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { verifyCredentials, findUserById } from "@/lib/users";
import { isValidRole } from "@/lib/permissions";
import type { Role } from "@/types/next-auth";

/** Schema validate form đăng nhập */
const credentialsSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu tối thiểu 6 ký tự"),
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  /**
   * Strategy: JWT (bắt buộc khi dùng Credentials provider
   * vì không có DB adapter).
   */
  session: { strategy: "jwt" },

  /**
   * Secret dùng để ký/mã hoá JWT.
   * Cấu hình biến môi trường AUTH_SECRET.
   */
  secret: process.env.AUTH_SECRET,

  /** Trang đăng nhập tuỳ chỉnh */
  pages: {
    signIn: "/login",
    error: "/login",
  },

  providers: [
    // ── Provider 1: GitHub OAuth ──────────────────────────────
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID ?? "",
      clientSecret: process.env.AUTH_GITHUB_SECRET ?? "",
    }),

    // ── Provider 2: Email + Mật khẩu ─────────────────────────
    Credentials({
      name: "Email & Mật khẩu",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mật khẩu", type: "password" },
      },
      async authorize(rawCredentials) {
        // 1. Validate đầu vào bằng Zod
        const parsed = credentialsSchema.safeParse(rawCredentials);
        if (!parsed.success) return null;

        const { email, password } = parsed.data;

        // 2. Xác thực email + mật khẩu với mock DB
        const user = await verifyCredentials(email, password);
        if (!user) return null;

        // 3. Trả về user object (KHÔNG có passwordHash)
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          image: user.image ?? null,
        };
      },
    }),
  ],

  callbacks: {
    /**
     * Callback jwt(): chạy khi tạo/cập nhật JWT token.
     * Đưa id và role từ nguồn đáng tin cậy vào token.
     */
    async jwt({ token, user, account }) {
      // Lần đăng nhập đầu tiên — user object có đầy đủ thông tin
      if (user) {
        token.id = user.id as string;

        // Với Credentials provider: lấy role từ user object (từ DB)
        // Với OAuth (GitHub): tài khoản mới mặc định role = "user"
        if (isValidRole(user.role)) {
          token.id = user.id as string;
          token.role = user.role as Role;
        } else {
          // OAuth user: tra cứu DB hoặc gán mặc định "user"
          // Trong production: tạo user record trong DB tại đây
          token.role = "user";
        }
      }

      // Refresh token: tra cứu DB để lấy role mới nhất (nếu cần)
      // Chỉ áp dụng cho Credentials; OAuth dùng sub làm id
      if (!user && token.sub && account === null) {
        const dbUser = findUserById(token.id as string);
        if (dbUser) {
          token.role = dbUser.role;
        }
      }

      return token;
    },

    /**
     * Callback session(): cung cấp dữ liệu an toàn cho client.
     * Chỉ trả về những gì client cần — KHÔNG trả role từ client input.
     */
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.role = token.role as Role;
      }
      return session;
    },

    /**
     * Callback signIn(): kiểm soát ai được đăng nhập.
     * Trả false để chặn, trả true hoặc URL để tiếp tục.
     */
    async signIn({ user, account }) {
      // Cho phép tất cả OAuth users đăng nhập
      // (vai trò sẽ được gán trong jwt callback)
      if (account?.provider === "github") {
        return true;
      }

      // Credentials: chỉ cho phép nếu user tồn tại
      return !!user;
    },
  },
});
