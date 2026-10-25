// ============================================================
// src/lib/users.ts
// Mock user database — thay bằng Prisma/DB thật nếu cần
// ============================================================

import bcrypt from "bcryptjs";
import type { Role } from "@/types/next-auth";

export interface StoredUser {
  id: string;
  name: string;
  email: string;
  /** Bcrypt hash của mật khẩu. KHÔNG bao giờ trả về trường này về client. */
  passwordHash: string;
  role: Role;
  image?: string;
}

/**
 * Mock database — trong production thay bằng truy vấn DB thật.
 * Mật khẩu được hash bằng bcrypt (cost factor 12).
 *
 * Tài khoản test:
 *   admin@example.com / Admin@123456
 *   user@example.com  / User@123456
 */
export const MOCK_USERS: StoredUser[] = [
  {
    id: "usr_admin_001",
    name: "Admin",
    email: "admin@example.com",
    // Hash của "Admin@123456"
    passwordHash: bcrypt.hashSync("Admin@123456", 12),
    role: "admin",
    image: undefined,
  },
  {
    id: "usr_user_001",
    name: "Nguyễn Văn A",
    email: "user@example.com",
    // Hash của "User@123456"
    passwordHash: bcrypt.hashSync("User@123456", 12),
    role: "user",
    image: undefined,
  },
];

/**
 * Tìm user theo email.
 * Trả về StoredUser hoặc null nếu không tìm thấy.
 * Không trả về bên ngoài tầng server.
 */
export function findUserByEmail(email: string): StoredUser | null {
  return MOCK_USERS.find(
    (u) => u.email.toLowerCase() === email.toLowerCase()
  ) ?? null;
}

/**
 * Tìm user theo id.
 */
export function findUserById(id: string): StoredUser | null {
  return MOCK_USERS.find((u) => u.id === id) ?? null;
}

/**
 * Xác thực email + mật khẩu.
 * Trả về user (không có passwordHash) hoặc null nếu sai.
 */
export async function verifyCredentials(
  email: string,
  password: string
): Promise<Omit<StoredUser, "passwordHash"> | null> {
  const user = findUserByEmail(email);
  if (!user) return null;

  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) return null;

  // KHÔNG trả passwordHash ra ngoài
  const { passwordHash: _omit, ...safeUser } = user;
  void _omit;
  return safeUser;
}
