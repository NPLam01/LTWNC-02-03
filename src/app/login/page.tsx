// ============================================================
// src/app/login/page.tsx
// Trang đăng nhập — Public, robots: noindex
// ============================================================

import type { Metadata } from "next";
import { Suspense } from "react";
import { LoginForm } from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Đăng nhập vào tài khoản Product Explorer của bạn.",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="auth-loading">Đang tải...</div>}>
      <LoginForm />
    </Suspense>
  );
}
