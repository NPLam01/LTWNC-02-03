"use client";

// ============================================================
// src/components/ProductExplorerClient.tsx
// Client Component — wrapper cho toàn bộ Product Explorer UI
// Giữ nguyên logic từ Vite, thêm Nav header cho Next.js
// ============================================================

import { useState, useCallback } from "react";
import { useFilteredProducts } from "@/hooks/useProducts";
import { useDebounce } from "@/hooks/useDebounce";
import { ShopProvider, useShop } from "@/context/ShopContext";
import { SearchBar } from "@/components/SearchBar";
import { FilterBar } from "@/components/FilterBar";
import { ProductList } from "@/components/ProductList";
import { ProductDetail } from "@/components/ProductDetail";
import { CartDrawer } from "@/components/CartDrawer";
import { WishlistDrawer } from "@/components/WishlistDrawer";
import { ToastContainer } from "@/components/ToastContainer";
import type { Product, Category, SortOption } from "@/types/product";
import Link from "next/link";

function formatCompactPrice(price: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(price);
}

function ProductExplorerInner() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState<Category>("All");
  const [sortOption, setSortOption] = useState<SortOption>("price-asc");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const debouncedKeyword = useDebounce(keyword, 300);

  const {
    totalCartCount,
    totalCartPrice,
    totalWishlistCount,
    setIsCartOpen,
    setIsWishlistOpen,
  } = useShop();

  const { filteredProducts, totalCount, loading, error, refetch } =
    useFilteredProducts({ keyword: debouncedKeyword, category, sortOption });

  const handleSelect = useCallback((product: Product) => {
    setSelectedProduct(product);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-inner">
          <div className="header-brand">
            <div>
              <h1 className="header-title">Product Explorer</h1>
              <p className="header-subtitle">Danh sách sản phẩm công nghệ</p>
            </div>
          </div>

          <div className="header-actions">
            <Link href="/dashboard" className="nav-link" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.85rem", fontWeight: 500 }}>
              Tài khoản
            </Link>

            <button
              className="header-action-btn header-wishlist-btn"
              onClick={() => setIsWishlistOpen(true)}
              title="Danh sách yêu thích"
              aria-label="Danh sách yêu thích"
            >
              <span className="header-action-text">Yêu thích</span>
              {totalWishlistCount > 0 && (
                <span className="header-action-badge wishlist-badge">
                  {totalWishlistCount}
                </span>
              )}
            </button>

            <button
              className="header-action-btn header-cart-btn"
              onClick={() => setIsCartOpen(true)}
              title="Giỏ hàng của bạn"
              aria-label="Giỏ hàng của bạn"
            >
              <div className="header-cart-text-group">
                <span className="header-action-text">Giỏ hàng</span>
                {totalCartCount > 0 && (
                  <span className="header-cart-total-mini">
                    {formatCompactPrice(totalCartPrice)}
                  </span>
                )}
              </div>
              {totalCartCount > 0 && (
                <span className="header-action-badge cart-badge">
                  {totalCartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="controls-section">
        <SearchBar
          value={keyword}
          onChange={setKeyword}
          total={totalCount}
          filtered={filteredProducts.length}
        />
        <FilterBar
          category={category}
          sortOption={sortOption}
          onCategoryChange={setCategory}
          onSortChange={setSortOption}
        />
      </div>

      <main className="main-content">
        <ProductList
          products={filteredProducts}
          loading={loading}
          error={error}
          onRetry={refetch}
          onSelect={handleSelect}
        />
      </main>

      {selectedProduct && (
        <ProductDetail product={selectedProduct} onClose={handleClose} />
      )}

      <CartDrawer />
      <WishlistDrawer />
      <ToastContainer />
    </div>
  );
}

export function ProductExplorerClient() {
  return (
    <ShopProvider>
      <ProductExplorerInner />
    </ShopProvider>
  );
}
