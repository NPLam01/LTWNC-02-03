// ============================================================
// src/lib/actions.ts
// Server Actions — kiểm tra session + quyền bên trong
// ============================================================

"use server";

import { auth } from "@/auth";
import { isAdmin, hasPermission } from "@/lib/permissions";
import { z } from "zod";

/** Schema validate đầu vào cho admin action */
const adminActionSchema = z.object({
  message: z
    .string()
    .min(1, "Nội dung không được để trống")
    .max(500, "Nội dung tối đa 500 ký tự"),
});

export interface ActionResult {
  success: boolean;
  message: string;
  data?: unknown;
}

/**
 * Server Action: adminBroadcast
 * Chỉ admin mới có thể gọi action này.
 * Kiểm tra session + quyền ngay bên trong hàm.
 */
export async function adminBroadcast(
  formData: FormData
): Promise<ActionResult> {
  // ── Layer 3: Kiểm tra session trong Server Action ───────────
  const session = await auth();

  if (!session?.user) {
    return {
      success: false,
      message: "Bạn chưa đăng nhập. Vui lòng đăng nhập để tiếp tục.",
    };
  }

  // Kiểm tra quyền — KHÔNG tin dữ liệu client gửi lên
  if (!isAdmin(session.user.role)) {
    return {
      success: false,
      message: "Bạn không có quyền thực hiện thao tác này.",
    };
  }

  // Validate dữ liệu đầu vào bằng Zod
  const rawMessage = formData.get("message");
  const parsed = adminActionSchema.safeParse({ message: rawMessage });

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0]?.message ?? "Dữ liệu không hợp lệ.",
    };
  }

  const { message } = parsed.data;

  // Trong production: gửi thông báo, cập nhật DB, v.v.
  console.log(`[ADMIN ACTION] ${session.user.email} broadcast: ${message}`);

  return {
    success: true,
    message: `✅ Đã gửi thông báo: "${message}"`,
    data: {
      actor: session.user.email,
      role: session.user.role,
      timestamp: new Date().toISOString(),
    },
  };
}

/**
 * Server Action: getUserData
 * Chỉ trả dữ liệu của người dùng hiện tại.
 * Không cho phép truy cập dữ liệu người khác.
 */
export async function getUserData(): Promise<ActionResult> {
  // ── Layer 3: Kiểm tra session ───────────────────────────────
  const session = await auth();

  if (!session?.user) {
    return { success: false, message: "Chưa đăng nhập." };
  }

  // Kiểm tra quyền đọc dữ liệu cá nhân
  if (!hasPermission(session.user.role, "read:own-data")) {
    return { success: false, message: "Không có quyền." };
  }

  // ── Layer 4: Tầng dữ liệu — chỉ trả data của user hiện tại ─
  // userId lấy từ session (nguồn đáng tin cậy), KHÔNG từ client
  const userId = session.user.id;

  // Mock: trả thông tin user từ session
  return {
    success: true,
    message: "Lấy dữ liệu thành công.",
    data: {
      id: userId,
      email: session.user.email,
      name: session.user.name,
      role: session.user.role,
    },
  };
}
