// ============================================================
// src/app/products/page.tsx
// Trang danh sách sản phẩm (/products) — Public, Server Component
// SEO: canonical, OpenGraph, JSON-LD CollectionPage + ItemList
// ============================================================

import type { Metadata } from "next";
import { Suspense } from "react";
import { JsonLd } from "@/components/JsonLd";
import { ProductExplorerClient } from "@/components/ProductExplorerClient";
import { INITIAL_MOCK_PRODUCTS } from "@/data/mockProducts";

const APP_URL = process.env.NEXTAUTH_URL ?? "http://localhost:3000";
const PAGE_URL = `${APP_URL}/products`;

export const metadata: Metadata = {
  title: "Danh sách Sản phẩm Công nghệ",
  description:
    "Tìm kiếm và lọc hàng trăm sản phẩm công nghệ: Laptop, Điện thoại, Tablet, Màn hình, Bàn phím, Chuột, Tai nghe, Camera, Loa. So sánh giá và đặt hàng ngay.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Danh sách Sản phẩm Công nghệ | Product Explorer",
    description:
      "Khám phá và lọc sản phẩm công nghệ theo danh mục, giá và đánh giá. Hơn 24 sản phẩm hàng đầu.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${APP_URL}/products/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Danh sách sản phẩm công nghệ — Product Explorer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Danh sách Sản phẩm | Product Explorer",
    description: "Tìm kiếm sản phẩm công nghệ phù hợp với nhu cầu của bạn.",
    images: [`${APP_URL}/products/opengraph-image`],
  },
  robots: { index: true, follow: true },
};

/** JSON-LD: CollectionPage */
const collectionPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Danh sách Sản phẩm Công nghệ",
  description:
    "Tìm kiếm và lọc sản phẩm công nghệ: Laptop, Điện thoại, Tablet và nhiều hơn nữa.",
  url: PAGE_URL,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: APP_URL },
      { "@type": "ListItem", position: 2, name: "Sản phẩm", item: PAGE_URL },
    ],
  },
};

/** JSON-LD: ItemList — hiển thị top 5 sản phẩm */
const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Sản phẩm nổi bật",
  url: PAGE_URL,
  numberOfItems: INITIAL_MOCK_PRODUCTS.length,
  itemListElement: INITIAL_MOCK_PRODUCTS.slice(0, 5).map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.name,
    url: `${PAGE_URL}#product-${p.id}`,
    item: {
      "@type": "Product",
      name: p.name,
      brand: { "@type": "Brand", name: p.brand },
      offers: {
        "@type": "Offer",
        priceCurrency: "VND",
        price: p.price,
        availability:
          p.stock > 0
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
      },
    },
  })),
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={collectionPageJsonLd} />
      <JsonLd data={itemListJsonLd} />

      <Suspense
        fallback={
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#94a3b8",
            }}
          >
            <div className="spinner" />
            <span style={{ marginLeft: 12 }}>Đang tải sản phẩm...</span>
          </div>
        }
      >
        <ProductExplorerClient />
      </Suspense>
    </>
  );
}
