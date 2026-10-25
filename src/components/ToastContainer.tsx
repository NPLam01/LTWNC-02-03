import { useShop } from "../context/ShopContext";

export function ToastContainer() {
  const { toasts, removeToast } = useShop();

  if (toasts.length === 0) return null;

  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast-item toast-${toast.type}`}
          onClick={() => removeToast(toast.id)}
          role="alert"
        >
          <span className="toast-text">{toast.message}</span>
          <button
            className="toast-close"
            onClick={(e) => {
              e.stopPropagation();
              removeToast(toast.id);
            }}
            aria-label="Đóng thông báo"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
