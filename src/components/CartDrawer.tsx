import { useState } from "react";
import { useShop } from "../context/ShopContext";

function formatPrice(price: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(price);
}

const FREE_SHIPPING_THRESHOLD = 1_000_000;

export function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalCartCount,
    totalCartPrice,
    showToast,
  } = useShop();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isCartOpen) return null;

  const freeShippingProgress = Math.min(
    100,
    Math.round((totalCartPrice / FREE_SHIPPING_THRESHOLD) * 100)
  );

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutSuccess(true);
      clearCart();
    }, 1200);
  };

  const handleClose = () => {
    setIsCartOpen(false);
    setCheckoutSuccess(false);
  };

  return (
    <div
      className="drawer-overlay"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Giỏ hàng"
    >
      <div
        className="drawer-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="drawer-header">
          <div className="drawer-title-group">
            <h2>Giỏ hàng của bạn</h2>
            <span className="drawer-badge">{totalCartCount} sản phẩm</span>
          </div>
          <button
            className="drawer-close-btn"
            onClick={handleClose}
            aria-label="Đóng giỏ hàng"
          >
            ✕
          </button>
        </div>

        {checkoutSuccess ? (
          <div className="drawer-empty-state checkout-success-view">
            <h3>Đặt hàng thành công!</h3>
            <p>
              Cảm ơn bạn đã mua hàng. Đơn hàng của bạn đang được chuẩn bị và sẽ
              được giao trong thời gian sớm nhất!
            </p>
            <button
              className="drawer-cta-btn"
              onClick={handleClose}
            >
              Tiếp tục mua sắm
            </button>
          </div>
        ) : cart.length === 0 ? (
          <div className="drawer-empty-state">
            <h3>Giỏ hàng đang trống</h3>
            <p>Bạn chưa thêm sản phẩm nào. Hãy lựa chọn sản phẩm yêu thích nhé!</p>
            <button
              className="drawer-cta-btn"
              onClick={handleClose}
            >
              Khám phá sản phẩm ngay
            </button>
          </div>
        ) : (
          <>
            {/* Free shipping progress */}
            <div className="shipping-progress-container">
              <div className="shipping-progress-text">
                {totalCartPrice >= FREE_SHIPPING_THRESHOLD ? (
                  <span className="shipping-free-unlocked">
                    🎉 Đơn hàng của bạn được <strong>MIỄN PHÍ VẬN CHUYỂN</strong>!
                  </span>
                ) : (
                  <span>
                    Mua thêm{" "}
                    <strong>
                      {formatPrice(FREE_SHIPPING_THRESHOLD - totalCartPrice)}
                    </strong>{" "}
                    để được miễn phí vận chuyển
                  </span>
                )}
              </div>
              <div className="shipping-progress-bar">
                <div
                  className="shipping-progress-fill"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </div>

            {/* Item list */}
            <div className="drawer-items-list">
              {cart.map(({ product, quantity }) => {
                const isMax = quantity >= product.stock;
                return (
                  <div key={product.id} className="drawer-item-card">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="drawer-item-img"
                    />
                    <div className="drawer-item-info">
                      <div className="drawer-item-top">
                        <span className="drawer-item-brand">{product.brand}</span>
                        <button
                          className="drawer-item-remove"
                          onClick={() => removeFromCart(product.id)}
                          title="Xóa khỏi giỏ hàng"
                          aria-label={`Xóa ${product.name}`}
                        >
                          ✕
                        </button>
                      </div>
                      <h4 className="drawer-item-title">{product.name}</h4>
                      <div className="drawer-item-price-unit">
                        {formatPrice(product.price)}
                      </div>

                      <div className="drawer-item-bottom">
                        <div className="quantity-control">
                          <button
                            className="qty-btn"
                            onClick={() => updateQuantity(product.id, quantity - 1)}
                            aria-label="Giảm số lượng"
                          >
                            −
                          </button>
                          <span className="qty-value">{quantity}</span>
                          <button
                            className={`qty-btn ${isMax ? "disabled" : ""}`}
                            onClick={() => {
                              if (isMax) {
                                showToast(
                                  `Chỉ còn ${product.stock} sản phẩm trong kho!`,
                                  "warning"
                                );
                              } else {
                                updateQuantity(product.id, quantity + 1);
                              }
                            }}
                            disabled={isMax}
                            aria-label="Tăng số lượng"
                          >
                            +
                          </button>
                        </div>

                        <div className="drawer-item-subtotal">
                          {formatPrice(product.price * quantity)}
                        </div>
                      </div>

                      {isMax && (
                        <div className="stock-limit-note">
                          (Đã đạt giới hạn kho: {product.stock})
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="drawer-footer">
              <div className="drawer-summary-row">
                <span>Tạm tính ({totalCartCount} món):</span>
                <span>{formatPrice(totalCartPrice)}</span>
              </div>
              <div className="drawer-summary-row">
                <span>Phí vận chuyển:</span>
                <span>
                  {totalCartPrice >= FREE_SHIPPING_THRESHOLD ? (
                    <span className="text-success">Miễn phí</span>
                  ) : (
                    "30.000 ₫"
                  )}
                </span>
              </div>
              <div className="drawer-summary-row total-row">
                <span>Tổng cộng:</span>
                <span className="drawer-total-price">
                  {formatPrice(
                    totalCartPrice +
                      (totalCartPrice >= FREE_SHIPPING_THRESHOLD ? 0 : 30_000)
                  )}
                </span>
              </div>

              <div className="drawer-actions">
                <button
                  className="drawer-checkout-btn"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                >
                  {isCheckingOut ? "Đang xử lý..." : "Tiến hành thanh toán"}
                </button>
                <button
                  className="drawer-clear-btn"
                  type="button"
                  onClick={clearCart}
                  title="Xóa tất cả sản phẩm trong giỏ hàng"
                >
                  Xóa tất cả
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
