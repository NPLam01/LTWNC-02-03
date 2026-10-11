import { renderHook, act } from "@testing-library/react";
import { ShopProvider, useShop } from "./ShopContext";
import type { Product } from "../types/product";

const mockProductA: Product = {
  id: 101,
  name: "Bàn phím cơ Keychron Q1",
  category: "Keyboard",
  brand: "Keychron",
  price: 4_200_000,
  rating: 4.8,
  image: "https://example.com/q1.jpg",
  stock: 5,
};

const mockProductB: Product = {
  id: 102,
  name: "Chuột không dây Logitech MX Master 3S",
  category: "Mouse",
  brand: "Logitech",
  price: 2_100_000,
  rating: 4.9,
  image: "https://example.com/mx3.jpg",
  stock: 2,
};

describe("Unit Test: ShopContext (Module Giỏ hàng & Yêu thích)", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("TC01: Khởi tạo giỏ hàng và danh sách yêu thích ban đầu là rỗng", () => {
    const { result } = renderHook(() => useShop(), {
      wrapper: ShopProvider,
    });

    expect(result.current.cart).toEqual([]);
    expect(result.current.totalCartCount).toBe(0);
    expect(result.current.totalCartPrice).toBe(0);
    expect(result.current.wishlist).toEqual([]);
    expect(result.current.totalWishlistCount).toBe(0);
  });

  test("TC02: addToCart thêm mới sản phẩm vào giỏ hàng thành công", () => {
    const { result } = renderHook(() => useShop(), {
      wrapper: ShopProvider,
    });

    let success = false;
    act(() => {
      success = result.current.addToCart(mockProductA, 1);
    });

    expect(success).toBe(true);
    expect(result.current.cart).toHaveLength(1);
    expect(result.current.cart[0].product.id).toBe(101);
    expect(result.current.cart[0].quantity).toBe(1);
    expect(result.current.totalCartCount).toBe(1);
    expect(result.current.totalCartPrice).toBe(4_200_000);
  });

  test("TC03: addToCart tăng số lượng quantity khi thêm lại cùng một sản phẩm", () => {
    const { result } = renderHook(() => useShop(), {
      wrapper: ShopProvider,
    });

    act(() => {
      result.current.addToCart(mockProductA, 1);
    });
    act(() => {
      result.current.addToCart(mockProductA, 2);
    });

    expect(result.current.cart).toHaveLength(1);
    expect(result.current.cart[0].quantity).toBe(3);
    expect(result.current.totalCartCount).toBe(3);
    expect(result.current.totalCartPrice).toBe(4_200_000 * 3);
  });

  test("TC04: addToCart từ chối và cảnh báo khi số lượng vượt quá tồn kho (stock)", () => {
    const { result } = renderHook(() => useShop(), {
      wrapper: ShopProvider,
    });

    // mockProductB có stock = 2
    act(() => {
      result.current.addToCart(mockProductB, 2);
    });

    // Cố gắng thêm tiếp 1 cái nữa (vượt quá stock 2)
    let addedExtra = false;
    act(() => {
      addedExtra = result.current.addToCart(mockProductB, 1);
    });

    expect(addedExtra).toBe(false);
    expect(result.current.cart[0].quantity).toBe(2);
  });

  test("TC05: updateQuantity cập nhật số lượng và tính lại tổng tiền", () => {
    const { result } = renderHook(() => useShop(), {
      wrapper: ShopProvider,
    });

    act(() => {
      result.current.addToCart(mockProductA, 1);
      result.current.updateQuantity(mockProductA.id, 4);
    });

    expect(result.current.cart[0].quantity).toBe(4);
    expect(result.current.totalCartCount).toBe(4);
    expect(result.current.totalCartPrice).toBe(4_200_000 * 4);
  });

  test("TC06: updateQuantity về 0 tự động xóa sản phẩm khỏi giỏ hàng", () => {
    const { result } = renderHook(() => useShop(), {
      wrapper: ShopProvider,
    });

    act(() => {
      result.current.addToCart(mockProductA, 2);
      result.current.updateQuantity(mockProductA.id, 0);
    });

    expect(result.current.cart).toHaveLength(0);
    expect(result.current.totalCartCount).toBe(0);
  });

  test("TC07: removeFromCart xóa đúng sản phẩm được chỉ định", () => {
    const { result } = renderHook(() => useShop(), {
      wrapper: ShopProvider,
    });

    act(() => {
      result.current.addToCart(mockProductA, 1);
      result.current.addToCart(mockProductB, 1);
      result.current.removeFromCart(mockProductA.id);
    });

    expect(result.current.cart).toHaveLength(1);
    expect(result.current.cart[0].product.id).toBe(mockProductB.id);
    expect(result.current.totalCartCount).toBe(1);
  });

  test("TC08: clearCart dọn sạch toàn bộ sản phẩm trong giỏ hàng", () => {
    const { result } = renderHook(() => useShop(), {
      wrapper: ShopProvider,
    });

    act(() => {
      result.current.addToCart(mockProductA, 2);
      result.current.addToCart(mockProductB, 1);
      result.current.clearCart();
    });

    expect(result.current.cart).toEqual([]);
    expect(result.current.totalCartCount).toBe(0);
    expect(result.current.totalCartPrice).toBe(0);
  });

  test("TC09: toggleWishlist thêm và xóa sản phẩm khỏi danh sách yêu thích", () => {
    const { result } = renderHook(() => useShop(), {
      wrapper: ShopProvider,
    });

    // Lần 1: thêm vào yêu thích
    act(() => {
      const added = result.current.toggleWishlist(mockProductA);
      expect(added).toBe(true);
    });
    expect(result.current.isWishlisted(mockProductA.id)).toBe(true);
    expect(result.current.totalWishlistCount).toBe(1);

    // Lần 2: bỏ yêu thích
    act(() => {
      const added = result.current.toggleWishlist(mockProductA);
      expect(added).toBe(false);
    });
    expect(result.current.isWishlisted(mockProductA.id)).toBe(false);
    expect(result.current.totalWishlistCount).toBe(0);
  });

  test("TC10: addAllWishlistToCart chuyển tất cả sản phẩm trong wishlist vào giỏ hàng", () => {
    const { result } = renderHook(() => useShop(), {
      wrapper: ShopProvider,
    });

    act(() => {
      result.current.toggleWishlist(mockProductA);
      result.current.toggleWishlist(mockProductB);
    });

    act(() => {
      result.current.addAllWishlistToCart();
    });

    expect(result.current.cart).toHaveLength(2);
    expect(result.current.totalCartCount).toBe(2);
  });
});
