import type { Product } from "../types/product";
import { ProductCard } from "./ProductCard";

interface ProductListProps {
  products: Product[];
  onSelect: (product: Product) => void;
  loading?: boolean;
  error?: string | null;
  onRetry?: () => void;
}

export function ProductList({
  products,
  onSelect,
  loading = false,
  error = null,
  onRetry,
}: ProductListProps) {
  if (loading) {
    return (
      <div className="product-grid" aria-label="Đang tải sản phẩm...">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={`skeleton-${index}`} className="skeleton-card">
            <div className="skeleton-image" />
            <div className="skeleton-body">
              <div className="skeleton-line short" />
              <div className="skeleton-line title" />
              <div className="skeleton-line medium" />
              <div
                className="skeleton-line"
                style={{ width: "45%", marginTop: "auto" }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-list-error" role="alert">
        <div className="error-icon">⚠️</div>
        <h3>Lỗi kết nối Mock API</h3>
        <p>{error}</p>
        {onRetry && (
          <button className="retry-btn" onClick={onRetry}>
            🔄 Thử lại
          </button>
        )}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="product-list-empty">
        <div className="empty-icon">📦</div>
        <h3>Không tìm thấy sản phẩm</h3>
        <p>Thử thay đổi từ khóa hoặc bộ lọc danh mục</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={onSelect}
        />
      ))}
    </div>
  );
}
