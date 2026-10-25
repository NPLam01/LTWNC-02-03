// ============================================================
// src/app/products/opengraph-image.tsx
// OG image động cho trang /products — 1200×630px
// ============================================================

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Danh sách Sản phẩm Công nghệ — Product Explorer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PRODUCTS_PREVIEW = [
  { icon: "💻", name: "MacBook Pro M3", price: "59.990.000 ₫" },
  { icon: "📱", name: "iPhone 15 Pro Max", price: "29.490.000 ₫" },
  { icon: "🎧", name: "Sony WH-1000XM5", price: "6.990.000 ₫" },
  { icon: "📷", name: "Sony Alpha 7 IV", price: "49.990.000 ₫" },
];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a12 0%, #16162a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          padding: 60,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <span style={{ fontSize: 48 }}>🛍️</span>
          <div>
            <div
              style={{ fontSize: 48, fontWeight: 800, color: "#f1f5f9", lineHeight: 1 }}
            >
              Sản phẩm Công nghệ
            </div>
            <div style={{ fontSize: 22, color: "#94a3b8", marginTop: 8 }}>
              Product Explorer · {new Date().getFullYear()}
            </div>
          </div>
        </div>

        {/* Product cards */}
        <div
          style={{
            display: "flex",
            gap: 20,
            width: "100%",
          }}
        >
          {PRODUCTS_PREVIEW.map((p) => (
            <div
              key={p.name}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(99,102,241,0.3)",
                borderRadius: 16,
                padding: "20px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ fontSize: 40 }}>{p.icon}</span>
              <div
                style={{
                  fontSize: 14,
                  color: "#f1f5f9",
                  fontWeight: 600,
                  textAlign: "center",
                  lineHeight: 1.3,
                }}
              >
                {p.name}
              </div>
              <div style={{ fontSize: 13, color: "#06b6d4", fontWeight: 700 }}>
                {p.price}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: 36,
            fontSize: 18,
            color: "#6366f1",
            fontWeight: 600,
          }}
        >
          ⚡ Khám phá ngay tại productexplorer.vn
        </div>
      </div>
    ),
    { ...size }
  );
}
