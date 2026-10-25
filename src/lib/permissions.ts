// ============================================================
// src/lib/permissions.ts
// Hệ thống phân quyền RBAC tập trung
// ============================================================

import type { Role } from "@/types/next-auth";

/**
 * Ma trận quyền theo vai trò.
 * Mở rộng tại đây khi thêm chức năng mới.
 */
const ROLE_PERMISSIONS: Record<Role, string[]> = {
  admin: [
    "view:dashboard",
    "view:admin",
    "manage:products",
    "manage:users",
    "view:analytics",
    "read:own-data",
  ],
  user: [
    "view:dashboard",
    "read:own-data",
  ],
};

/**
 * Kiểm tra một vai trò có quyền cụ thể không.
 *
 * @example
 * hasPermission("admin", "view:admin") // true
 * hasPermission("user", "view:admin")  // false
 */
export function hasPermission(role: Role, permission: string): boolean {
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
}

/**
 * Kiểm tra vai trò có phải admin không.
 */
export function isAdmin(role: Role): boolean {
  return role === "admin";
}

/**
 * Kiểm tra vai trò hợp lệ.
 */
export function isValidRole(value: unknown): value is Role {
  return value === "admin" || value === "user";
}

/**
 * Lấy danh sách quyền của một vai trò.
 */
export function getPermissions(role: Role): string[] {
  return [...(ROLE_PERMISSIONS[role] ?? [])];
}

/**
 * Kiểm tra nhiều quyền cùng lúc (AND — phải có tất cả).
 */
export function hasAllPermissions(role: Role, permissions: string[]): boolean {
  return permissions.every((p) => hasPermission(role, p));
}
