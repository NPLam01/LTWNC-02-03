// ============================================================
// src/middleware.ts
// Middleware bảo vệ route — lớp bảo mật đầu tiên
// ============================================================

import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Route cần đăng nhập (bất kỳ vai trò nào).
 */
const PROTECTED_ROUTES = ["/dashboard"];

/**
 * Route chỉ dành cho admin.
 */
const ADMIN_ROUTES = ["/admin"];

/**
 * Route dành cho người CHƯA đăng nhập.
 * Nếu đã đăng nhập thì redirect về dashboard.
 */
const AUTH_ROUTES = ["/login"];

export default auth((req: any) => {
  const { nextUrl } = req;
  const session = req.auth;
  const isLoggedIn = !!session?.user;
  const role = session?.user?.role;
  const pathname = nextUrl.pathname;

  // ── 1. Trang auth (login hoặc root) — nếu đã đăng nhập redirect sang /products ──
  const isAuthRoute = AUTH_ROUTES.some((r) => pathname.startsWith(r)) || pathname === "/";
  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/products", nextUrl));
  }

  // ── 2. Route admin — chỉ admin mới được vào ────────────────
  const isAdminRoute = ADMIN_ROUTES.some((r) => pathname.startsWith(r));
  if (isAdminRoute) {
    if (!isLoggedIn) {
      const loginUrl = new URL("/login", nextUrl);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
    if (role !== "admin") {
      return NextResponse.redirect(new URL("/403", nextUrl));
    }
    return NextResponse.next();
  }

  // ── 3. Route protected — cần đăng nhập ─────────────────────
  const isProtectedRoute = PROTECTED_ROUTES.some((r) =>
    pathname.startsWith(r)
  );
  if (isProtectedRoute && !isLoggedIn) {
    const loginUrl = new URL("/login", nextUrl);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
});

/**
 * Matcher: chạy middleware trên tất cả routes TRỪ:
 * - API routes nội bộ Next.js (_next/*)
 * - Static files
 * - Favicon
 */
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
