import { useState } from "react";
import type { Product } from "../types/product";
import { useShop } from "../context/ShopContext";

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(price);
}

function renderStars(rating: number) {
  const stars = [];
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  for (let i = 0; i < full; i++) {
    stars.push(<span key={`f-${i}`} className="star full">★</span>);
  }
  if (hasHalf) {
    stars.push(<span key="half" className="star half">★</span>);
  }
  for (let i = stars.length; i < 5; i++) {
    stars.push(<span key={`e-${i}`} className="star empty">☆</span>);
  }
  return stars;
}

export function ProductDetail({ product, onClose }: ProductDetailProps) {
  const { addToCart, toggleWishlist, isWishlisted } = useShop();
  const [quantity, setQuantity] = useState(1);
  const isLiked = isWishlisted(product.id);

  const handleAddToCart = () => {
    if (product.stock <= 0) return;
    const ok = addToCart(product, quantity);
    if (ok) {
      // Optional: keep modal open or let user continue browsing
    }
  };

  const handleDecrease = () => {
    setQuantity((q) => Math.max(1, q - 1));
  };

  const handleIncrease = () => {
    setQuantity((q) => Math.min(product.stock, q + 1));
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Chi tiết sản phẩm ${product.name}`}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Đóng"
        >
          ✕
        </button>

        <div className="modal-body">
          <div className="modal-image-section">
            <img
              src={product.image}
              alt={product.name}
              className="modal-image"
            />
            <span className="modal-category-badge">{product.category}</span>
          </div>

          <div className="modal-info-section">
            <p className="modal-brand">{product.brand}</p>
            <h2 className="modal-product-name">{product.name}</h2>

            <div className="modal-rating">
              <div className="modal-stars">
                {renderStars(product.rating)}
              </div>
              <span className="modal-rating-value">{product.rating} / 5.0</span>
            </div>

            <div className="modal-price-section">
              <span className="modal-price">{formatPrice(product.price)}</span>
            </div>

            <div className="modal-meta">
              <div className="modal-meta-item">
                <span className="modal-meta-label">Danh mục</span>
                <span className="modal-meta-value">{product.category}</span>
              </div>
              <div className="modal-meta-item">
                <span className="modal-meta-label">Thương hiệu</span>
                <span className="modal-meta-value">{product.brand}</span>
              </div>
              <div className="modal-meta-item">
                <span className="modal-meta-label">Mã sản phẩm</span>
                <span className="modal-meta-value">#{String(product.id).padStart(5, "0")}</span>
              </div>
              <div className="modal-meta-item">
                <span className="modal-meta-label">Kho hàng</span>
                <span
                  className={`modal-meta-value ${
                    product.stock <= 0
                      ? "stock-low"
                      : product.stock <= 5
                      ? "stock-low"
                      : "stock-ok"
                  }`}
                >
                  {product.stock <= 0
                    ? "Hết hàng"
                    : product.stock <= 5
                    ? `Chỉ còn ${product.stock} sản phẩm`
                    : `Còn ${product.stock} sản phẩm`}
                </span>
              </div>
            </div>

            {/* Quantity Selector */}
            {product.stock > 0 && (
              <div className="modal-quantity-row">
                <span className="modal-quantity-label">Số lượng:</span>
                <div className="quantity-control detail-qty">
                  <button
                    className="qty-btn"
                    onClick={handleDecrease}
                    disabled={quantity <= 1}
                    aria-label="Giảm số lượng"
                  >
                    −
                  </button>
                  <span className="qty-value">{quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={handleIncrease}
                    disabled={quantity >= product.stock}
                    aria-label="Tăng số lượng"
                  >
                    +
                  </button>
                </div>
                <span className="modal-quantity-subtotal">
                  Tổng: <strong>{formatPrice(product.price * quantity)}</strong>
                </span>
              </div>
            )}

            <div className="modal-actions">
              <button
                className="btn-add-cart"
                onClick={handleAddToCart}
                disabled={product.stock <= 0}
              >
                {product.stock <= 0
                  ? "❌ Tạm hết hàng"
                  : `🛒 Thêm vào giỏ hàng (${quantity})`}
              </button>
              <button
                className={`btn-wishlist ${isLiked ? "active" : ""}`}
                onClick={() => toggleWishlist(product)}
                aria-label={isLiked ? "Bỏ yêu thích" : "Yêu thích"}
              >
                {isLiked ? "❤️ Đã thích" : "♡ Yêu thích"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
