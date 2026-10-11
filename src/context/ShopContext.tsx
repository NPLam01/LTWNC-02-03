import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import type { Product } from "../types/product";
import type { CartItem } from "../types/cart";

export interface ToastMessage {
  id: string;
  message: string;
  type: "success" | "info" | "warning";
}

interface ShopContextType {
  // Cart
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => boolean;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  totalCartCount: number;
  totalCartPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;

  // Wishlist
  wishlist: Product[];
  toggleWishlist: (product: Product) => boolean;
  isWishlisted: (productId: number) => boolean;
  removeFromWishlist: (productId: number) => void;
  clearWishlist: () => void;
  addAllWishlistToCart: () => void;
  totalWishlistCount: number;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;

  // Toast
  toasts: ToastMessage[];
  showToast: (message: string, type?: "success" | "info" | "warning") => void;
  removeToast: (id: string) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const CART_STORAGE_KEY = "shopping_app_cart_v1";
const WISHLIST_STORAGE_KEY = "shopping_app_wishlist_v1";

function loadFromStorage<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (error) {
    console.error(`Error loading ${key} from localStorage:`, error);
    return fallback;
  }
}

export function ShopProvider({ children }: { children: ReactNode }) {
  // --- Cart State ---
  const [cart, setCart] = useState<CartItem[]>(() =>
    loadFromStorage<CartItem[]>(CART_STORAGE_KEY, [])
  );
  const [isCartOpen, setIsCartOpen] = useState(false);

  // --- Wishlist State ---
  const [wishlist, setWishlist] = useState<Product[]>(() =>
    loadFromStorage<Product[]>(WISHLIST_STORAGE_KEY, [])
  );
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // --- Toast Notifications ---
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Persist Cart
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }, [cart]);

  // Persist Wishlist
  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
    } catch (e) {
      console.error("Failed to save wishlist to localStorage", e);
    }
  }, [wishlist]);

  // Toast actions
  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (message: string, type: "success" | "info" | "warning" = "success") => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, message, type }]);

      setTimeout(() => {
        removeToast(id);
      }, 3000);
    },
    [removeToast]
  );

  // Cart operations
  const addToCart = useCallback(
    (product: Product, quantity: number = 1): boolean => {
      if (product.stock <= 0) {
        showToast(`Sản phẩm "${product.name}" đã hết hàng!`, "warning");
        return false;
      }

      const existingItem = cart.find((item) => item.product.id === product.id);
      const currentQty = existingItem ? existingItem.quantity : 0;
      if (currentQty + quantity > product.stock) {
        showToast(
          `Chỉ còn ${product.stock} sản phẩm trong kho (bạn đã có ${currentQty})!`,
          "warning"
        );
        return false;
      }

      setCart((prev) => {
        const existingIndex = prev.findIndex((item) => item.product.id === product.id);
        if (existingIndex > -1) {
          const updated = [...prev];
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: updated[existingIndex].quantity + quantity,
          };
          return updated;
        } else {
          return [...prev, { product, quantity }];
        }
      });

      showToast(`Đã thêm "${product.name}" (${quantity}) vào giỏ hàng!`, "success");
      return true;
    },
    [cart, showToast]
  );

  const removeFromCart = useCallback(
    (productId: number) => {
      setCart((prev) => {
        const item = prev.find((i) => i.product.id === productId);
        if (item) {
          showToast(`Đã xóa "${item.product.name}" khỏi giỏ hàng`, "info");
        }
        return prev.filter((i) => i.product.id !== productId);
      });
    },
    [showToast]
  );

  const updateQuantity = useCallback(
    (productId: number, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(productId);
        return;
      }

      setCart((prev) =>
        prev.map((item) => {
          if (item.product.id === productId) {
            if (quantity > item.product.stock) {
              showToast(
                `Kho chỉ còn ${item.product.stock} sản phẩm "${item.product.name}"`,
                "warning"
              );
              return { ...item, quantity: item.product.stock };
            }
            return { ...item, quantity };
          }
          return item;
        })
      );
    },
    [removeFromCart, showToast]
  );

  const clearCart = useCallback(() => {
    setCart([]);
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify([]));
    } catch (e) {
      console.error("Failed to clear cart storage", e);
    }
    showToast("Đã dọn sạch giỏ hàng", "info");
  }, [showToast]);

  const totalCartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const totalCartPrice = useMemo(
    () => cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [cart]
  );

  // Wishlist operations
  const isWishlisted = useCallback(
    (productId: number) => {
      return wishlist.some((item) => item.id === productId);
    },
    [wishlist]
  );

  const toggleWishlist = useCallback(
    (product: Product): boolean => {
      const exists = wishlist.some((item) => item.id === product.id);
      if (exists) {
        setWishlist((prev) => prev.filter((item) => item.id !== product.id));
        showToast(`Đã xóa "${product.name}" khỏi danh sách yêu thích`, "info");
        return false;
      } else {
        setWishlist((prev) => [...prev, product]);
        showToast(`Đã thêm "${product.name}" vào danh sách yêu thích ❤️`, "success");
        return true;
      }
    },
    [wishlist, showToast]
  );

  const removeFromWishlist = useCallback(
    (productId: number) => {
      setWishlist((prev) => {
        const item = prev.find((p) => p.id === productId);
        if (item) {
          showToast(`Đã xóa "${item.name}" khỏi danh sách yêu thích`, "info");
        }
        return prev.filter((p) => p.id !== productId);
      });
    },
    [showToast]
  );

  const clearWishlist = useCallback(() => {
    setWishlist([]);
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify([]));
    } catch (e) {
      console.error("Failed to clear wishlist storage", e);
    }
    showToast("Đã dọn sạch danh sách yêu thích", "info");
  }, [showToast]);

  const addAllWishlistToCart = useCallback(() => {
    if (wishlist.length === 0) return;

    let addedCount = 0;
    wishlist.forEach((product) => {
      if (product.stock > 0) {
        addToCart(product, 1);
        addedCount++;
      }
    });

    if (addedCount > 0) {
      showToast(`Đã thêm ${addedCount} sản phẩm từ mục yêu thích vào giỏ hàng!`, "success");
    } else {
      showToast("Tất cả sản phẩm yêu thích đều đã hết hàng!", "warning");
    }
  }, [wishlist, addToCart, showToast]);

  const totalWishlistCount = wishlist.length;

  const value = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalCartCount,
      totalCartPrice,
      isCartOpen,
      setIsCartOpen,
      wishlist,
      toggleWishlist,
      isWishlisted,
      removeFromWishlist,
      clearWishlist,
      addAllWishlistToCart,
      totalWishlistCount,
      isWishlistOpen,
      setIsWishlistOpen,
      toasts,
      showToast,
      removeToast,
    }),
    [
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalCartCount,
      totalCartPrice,
      isCartOpen,
      wishlist,
      toggleWishlist,
      isWishlisted,
      removeFromWishlist,
      clearWishlist,
      addAllWishlistToCart,
      totalWishlistCount,
      isWishlistOpen,
      toasts,
      showToast,
      removeToast,
    ]
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
}
