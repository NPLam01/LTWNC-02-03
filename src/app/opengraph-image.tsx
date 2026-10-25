// ============================================================
// src/app/opengraph-image.tsx
// OG image động cho trang chủ — 1200×630px
// ============================================================

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Product Explorer — Khám phá Sản phẩm Công nghệ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a12 0%, #111120 50%, #16162a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Glow effect */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: "50%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
            transform: "translateX(-50%)",
          }}
        />

        {/* Logo */}
        <div style={{ fontSize: 72, marginBottom: 24 }}>⚡</div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#f1f5f9",
            letterSpacing: "-2px",
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          Product Explorer
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: 700,
            marginBottom: 40,
          }}
        >
          Khám phá Sản phẩm Công nghệ Hàng đầu
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: 16 }}>
          {["💻 Laptop", "📱 Phone", "📟 Tablet", "🎧 Headphone"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(99,102,241,0.2)",
                border: "1px solid rgba(99,102,241,0.4)",
                color: "#a5b4fc",
                padding: "8px 20px",
                borderRadius: 24,
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
