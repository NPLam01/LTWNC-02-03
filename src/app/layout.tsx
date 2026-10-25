// ============================================================
// src/app/layout.tsx
// Root Layout — Server Component
// ============================================================

import type { Metadata } from "next";
import "../App.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXTAUTH_URL ?? "http://localhost:3000"
  ),
  title: {
    default: "Product Explorer — Khám phá Công nghệ",
    template: "%s | Product Explorer",
  },
  description:
    "Khám phá hàng ngàn sản phẩm công nghệ hàng đầu: Laptop, Điện thoại, Tablet, Tai nghe và nhiều hơn nữa.",
  keywords: ["sản phẩm công nghệ", "mua sắm online", "laptop", "điện thoại", "tablet"],
  authors: [{ name: "Product Explorer Team" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Product Explorer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
