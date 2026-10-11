import { useShop } from "../context/ShopContext";

function formatPrice(price: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(price);
}

export function WishlistDrawer() {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    removeFromWishlist,
    clearWishlist,
    addToCart,
    addAllWishlistToCart,
    totalWishlistCount,
  } = useShop();

  if (!isWishlistOpen) return null;

  const handleClose = () => {
    setIsWishlistOpen(false);
  };

  return (
    <div
      className="drawer-overlay"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Danh sách yêu thích"
    >
      <div
        className="drawer-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="drawer-header">
          <div className="drawer-title-group">
            <span className="drawer-header-icon heart-color">❤️</span>
            <h2>Danh sách yêu thích</h2>
            <span className="drawer-badge wishlist-badge-accent">
              {totalWishlistCount} sản phẩm
            </span>
          </div>
          <button
            className="drawer-close-btn"
            onClick={handleClose}
            aria-label="Đóng danh sách yêu thích"
          >
            ✕
          </button>
        </div>

        {wishlist.length === 0 ? (
          <div className="drawer-empty-state">
            <div className="empty-icon heart-color">🤍</div>
            <h3>Chưa có sản phẩm yêu thích</h3>
            <p>
              Nhấn vào biểu tượng trái tim trên bất kỳ sản phẩm nào để lưu lại danh
              sách mua sắm yêu thích của bạn!
            </p>
            <button
              className="drawer-cta-btn"
              onClick={handleClose}
            >
              Khám phá sản phẩm ngay
            </button>
          </div>
        ) : (
          <>
            <div className="wishlist-top-bar">
              <span className="wishlist-hint">
                Lưu trữ các sản phẩm bạn quan tâm để mua sắm thuận tiện hơn
              </span>
              <div className="wishlist-bulk-actions">
                <button
                  className="wishlist-add-all-btn"
                  onClick={addAllWishlistToCart}
                >
                  🛒 Thêm tất cả vào giỏ
                </button>
                <button
                  className="wishlist-clear-btn"
                  type="button"
                  onClick={clearWishlist}
                  title="Xóa tất cả sản phẩm khỏi danh sách yêu thích"
                >
                  Xóa tất cả
                </button>
              </div>
            </div>

            <div className="drawer-items-list">
              {wishlist.map((product) => (
                <div key={product.id} className="drawer-item-card wishlist-item-card">
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
                        onClick={() => removeFromWishlist(product.id)}
                        title="Xóa khỏi yêu thích"
                        aria-label={`Xóa ${product.name} khỏi yêu thích`}
                      >
                        ✕
                      </button>
                    </div>
                    <h4 className="drawer-item-title">{product.name}</h4>
                    <div className="drawer-item-meta-row">
                      <span className="drawer-item-category-tag">
                        {product.category}
                      </span>
                      <span
                        className={`drawer-stock-pill ${
                          product.stock <= 5 ? "low" : ""
                        }`}
                      >
                        {product.stock <= 5
                          ? `Còn ${product.stock}`
                          : "Còn hàng"}
                      </span>
                    </div>

                    <div className="wishlist-item-footer">
                      <span className="wishlist-price">
                        {formatPrice(product.price)}
                      </span>
                      <button
                        className="wishlist-to-cart-btn"
                        onClick={() => addToCart(product, 1)}
                        disabled={product.stock <= 0}
                      >
                        {product.stock > 0 ? "🛒 Thêm vào giỏ" : "Hết hàng"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="drawer-footer">
              <button
                className="drawer-cta-btn secondary"
                onClick={handleClose}
              >
                Tiếp tục xem sản phẩm khác
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
