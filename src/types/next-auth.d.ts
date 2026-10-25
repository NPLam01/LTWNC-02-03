// ============================================================
// src/types/next-auth.d.ts
// Mở rộng kiểu TypeScript cho NextAuth/Auth.js v5
// ============================================================

import type { DefaultSession, DefaultUser } from "next-auth";
import type { DefaultJWT } from "next-auth/jwt";

/** Hai vai trò ứng dụng */
export type Role = "admin" | "user";

declare module "next-auth" {
  /**
   * Mở rộng Session.user để bao gồm id và role.
   * Truy cập qua: session.user.id, session.user.role
   */
  interface Session {
    user: {
      id: string;
      role: Role;
    } & DefaultSession["user"];
  }

  /**
   * Mở rộng User (trả về từ authorize() hoặc profile())
   * để bao gồm role.
   */
  interface User extends DefaultUser {
    role: Role;
  }
}

declare module "next-auth/jwt" {
  /**
   * Mở rộng JWT payload để lưu id và role.
   * Dùng trong callback jwt() và session().
   */
  interface JWT extends DefaultJWT {
    id: string;
    role: Role;
  }
}
