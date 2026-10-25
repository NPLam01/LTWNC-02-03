// ============================================================
// src/app/403/page.tsx
// Trang Forbidden — Hiển thị khi không có quyền
// ============================================================

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "403 — Không có quyền truy cập",
  robots: { index: false, follow: false },
};

export default function ForbiddenPage() {
  return (
    <div className="error-page">
      <div className="error-code">403</div>
      <h1 className="error-title">Không có quyền truy cập</h1>
      <p className="error-desc">
        Bạn không có quyền truy cập trang này. Chỉ quản trị viên mới có thể
        xem nội dung này.
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="/dashboard" className="btn-primary" style={{ width: "auto", padding: "10px 20px" }}>
          Về Dashboard
        </Link>
        <Link href="/products" className="btn-secondary">
          Sản phẩm
        </Link>
      </div>
    </div>
  );
}
