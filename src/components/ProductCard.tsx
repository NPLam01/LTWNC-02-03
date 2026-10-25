import { memo } from "react";
import type { Product } from "../types/product";
import { useShop } from "../context/ShopContext";

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(price);
}

function renderStars(rating: number): string {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
}

export const ProductCard = memo(function ProductCard({ product, onClick }: ProductCardProps) {
  const { isWishlisted, toggleWishlist, addToCart } = useShop();
  const isLiked = isWishlisted(product.id);

  return (
    <div
      className="product-card"
      onClick={() => onClick(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(product)}
    >
      <div className="product-card-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image"
          loading="lazy"
        />
        <span className="product-card-category">{product.category}</span>
        <span
          className={`product-card-stock ${product.stock <= 5 ? "low" : ""}`}
        >
          {product.stock <= 0
            ? "Hết hàng"
            : product.stock <= 5
            ? `Còn ${product.stock}`
            : "Còn hàng"}
        </span>

        <button
          className={`product-card-wishlist-btn ${isLiked ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          title={isLiked ? "Bỏ yêu thích" : "Thêm vào yêu thích"}
          aria-label={isLiked ? "Bỏ yêu thích" : "Thêm vào yêu thích"}
        >
          {isLiked ? "Đã lưu" : "Lưu"}
        </button>
      </div>

      <div className="product-card-body">
        <p className="product-card-brand">{product.brand}</p>
        <h3 className="product-card-name" title={product.name}>{product.name}</h3>
        <div className="product-card-rating">
          <span className="product-card-rating-value">{product.rating} / 5</span>
        </div>
        <div className="product-card-footer">
          <span className="product-card-price">{formatPrice(product.price)}</span>
          <div className="product-card-actions">
            <button
              className="product-card-cart-btn"
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product, 1);
              }}
              title="Thêm vào giỏ hàng"
              aria-label="Thêm vào giỏ hàng"
              disabled={product.stock <= 0}
            >
              Thêm
            </button>
            <button
              className="product-card-btn"
              onClick={(e) => {
                e.stopPropagation();
                onClick(product);
              }}
            >
              Chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});
