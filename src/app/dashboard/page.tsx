// ============================================================
// src/app/dashboard/page.tsx
// Dashboard cá nhân — Protected (user + admin)
// Server Component: kiểm tra session phía server
// ============================================================

import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { UserMenu } from "@/components/UserMenu";
import Link from "next/link";
import { isAdmin } from "@/lib/permissions";

export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false },
};

export default async function DashboardPage() {
  // ── Lớp bảo vệ tại Server Component (Layer 2) ──────────────
  const session = await auth();

  if (!session?.user) {
    redirect("/login?callbackUrl=/dashboard");
  }

  const { user } = session;
  const userIsAdmin = isAdmin(user.role);

  return (
    <div className="page-container">
      {/* Header */}
      <header className="page-header">
        <div className="page-header-inner">
          <Link href="/products" className="page-nav-brand">
            <span>Product Explorer</span>
          </Link>
          <nav className="page-nav-links">
            <Link href="/products" className="nav-link">Sản phẩm</Link>
            <Link href="/dashboard" className="nav-link active">Dashboard</Link>
            {userIsAdmin && (
              <Link href="/admin" className="nav-link">
                <span className="nav-badge-admin">Admin</span>
              </Link>
            )}
            <UserMenu user={user} />
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="page-main">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">
          Xin chào, <strong>{user.name ?? user.email}</strong>!
        </p>

        {/* Session Info Card */}
        <div className="session-card">
          <h2>Thông tin phiên đăng nhập</h2>
          <div className="session-field">
            <span className="session-field-key">ID</span>
            <span className="session-field-value">{user.id}</span>
          </div>
          <div className="session-field">
            <span className="session-field-key">Email</span>
            <span className="session-field-value">{user.email}</span>
          </div>
          <div className="session-field">
            <span className="session-field-key">Tên</span>
            <span className="session-field-value">{user.name ?? "—"}</span>
          </div>
          <div className="session-field">
            <span className="session-field-key">Vai trò</span>
            <span className="session-field-value">
              <span className={`role-badge ${user.role}`}>{user.role}</span>
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="info-cards">
          <div className="info-card">
            <div className="info-card-label">Giỏ hàng</div>
            <div className="info-card-value">0 sản phẩm</div>
          </div>
          <div className="info-card">
            <div className="info-card-label">Yêu thích</div>
            <div className="info-card-value">0 mục</div>
          </div>
          <div className="info-card">
            <div className="info-card-label">Đơn hàng</div>
            <div className="info-card-value">0 đơn</div>
          </div>
          {userIsAdmin && (
            <div className="info-card">
              <div className="info-card-label">Admin Panel</div>
              <div className="info-card-value">
                <Link href="/admin" style={{ color: "var(--accent-primary)", textDecoration: "none" }}>
                  Quản trị
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div className="session-card" style={{ marginTop: 24 }}>
          <h2>Truy cập nhanh</h2>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
            <Link href="/products" className="btn-primary" style={{ width: "auto", padding: "10px 20px" }}>
              🛍️ Mua sắm tiếp
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
