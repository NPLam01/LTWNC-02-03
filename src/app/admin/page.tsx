// ============================================================
// src/app/admin/page.tsx
// Admin panel — Protected (admin only)
// Server Component: kiểm tra session + role phía server
// ============================================================

import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { isAdmin } from "@/lib/permissions";
import { MOCK_USERS } from "@/lib/users";
import { UserMenu } from "@/components/UserMenu";
import { AdminActionForm } from "@/components/AdminActionForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin Panel",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  // ── Lớp bảo vệ tại Server Component (Layer 2) ──────────────
  const session = await auth();

  if (!session?.user) {
    redirect("/login?callbackUrl=/admin");
  }

  // Kiểm tra role tại đây — không chỉ dựa vào middleware
  if (!isAdmin(session.user.role)) {
    redirect("/403");
  }

  const { user } = session;

  // ── Lấy dữ liệu quản trị tại tầng server ───────────────────
  // Trong production: thay bằng truy vấn DB có kiểm tra quyền
  const safeUsers = MOCK_USERS.map(({ id, name, email, role, image }) => ({
    id,
    name,
    email,
    role,
    image,
  }));

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
            <Link href="/dashboard" className="nav-link">Dashboard</Link>
            <Link href="/admin" className="nav-link active">
              <span className="nav-badge-admin">Admin</span>
            </Link>
            <UserMenu user={user} />
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="page-main">
        <h1 className="page-title">Admin Panel</h1>
        <p className="page-subtitle">
          Quản trị hệ thống · Đang đăng nhập: <strong>{user.email}</strong>
        </p>

        {/* Stats */}
        <div className="info-cards">
          <div className="info-card">
            <div className="info-card-label">Tổng người dùng</div>
            <div className="info-card-value">{safeUsers.length}</div>
          </div>
          <div className="info-card">
            <div className="info-card-label">Admin</div>
            <div className="info-card-value">
              {safeUsers.filter((u) => u.role === "admin").length}
            </div>
          </div>
          <div className="info-card">
            <div className="info-card-label">Users</div>
            <div className="info-card-value">
              {safeUsers.filter((u) => u.role === "user").length}
            </div>
          </div>
          <div className="info-card">
            <div className="info-card-label">Bảo mật</div>
            <div className="info-card-value" style={{ color: "var(--color-success)", fontSize: "1rem" }}>
              RBAC Active
            </div>
          </div>
        </div>

        {/* Users Table */}
        <h2 style={{ marginBottom: 16, fontSize: "1.1rem", color: "var(--text-secondary)" }}>
          Danh sách người dùng
        </h2>
        <div className="admin-table-wrap" style={{ marginBottom: 32 }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tên</th>
                <th>Email</th>
                <th>Vai trò</th>
              </tr>
            </thead>
            <tbody>
              {safeUsers.map((u) => (
                <tr key={u.id}>
                  <td style={{ fontFamily: "monospace", fontSize: "0.8rem" }}>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>
                    <span className={`role-badge ${u.role}`}>{u.role}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Admin Server Action Form */}
        <AdminActionForm />
      </main>
    </div>
  );
}
