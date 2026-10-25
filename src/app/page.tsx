// ============================================================
// src/app/page.tsx — Trang chủ hiển thị trực tiếp form đăng nhập
// ============================================================

import type { Metadata } from "next";
import { Suspense } from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { LoginForm } from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Đăng nhập | Product Explorer",
  description: "Đăng nhập vào hệ thống Product Explorer.",
  robots: { index: false, follow: false },
};

export default async function RootPage() {
  const session = await auth();
  if (session?.user) {
    redirect("/products");
  }

  return (
    <Suspense fallback={<div className="auth-loading">Đang tải...</div>}>
      <LoginForm />
    </Suspense>
  );
}
