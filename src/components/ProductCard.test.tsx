import { render, screen, fireEvent } from "@testing-library/react";
import { ProductCard } from "./ProductCard";
import { ShopProvider, useShop } from "../context/ShopContext";
import type { Product } from "../types/product";

const sampleProduct: Product = {
  id: 1,
  name: "Apple MacBook Pro 16",
  category: "Laptop",
  brand: "Apple",
  price: 59_990_000,
  rating: 4.9,
  image: "https://example.com/macbook.jpg",
  stock: 5,
};

const outOfStockProduct: Product = {
  ...sampleProduct,
  id: 2,
  name: "Dell Out of Stock",
  stock: 0,
};

// Component helper to inspect Cart Count in integration test
function TestCartObserver() {
  const { totalCartCount, totalWishlistCount } = useShop();
  return (
    <div>
      <span data-testid="cart-count">{totalCartCount}</span>
      <span data-testid="wishlist-count">{totalWishlistCount}</span>
    </div>
  );
}

describe("Integration Test: ProductCard (Component với RTL)", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("TC01: Render đúng thông tin sản phẩm (Tên, Thương hiệu, Danh mục, Giá)", () => {
    render(
      <ShopProvider>
        <ProductCard product={sampleProduct} onClick={jest.fn()} />
      </ShopProvider>
    );

    expect(screen.getByText("Apple MacBook Pro 16")).toBeInTheDocument();
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Laptop")).toBeInTheDocument();
    expect(screen.getByText(/59\.990\.000/)).toBeInTheDocument();
  });

  test("TC02: Click nút 🛒 thêm nhanh sản phẩm vào giỏ hàng", () => {
    render(
      <ShopProvider>
        <TestCartObserver />
        <ProductCard product={sampleProduct} onClick={jest.fn()} />
      </ShopProvider>
    );

    expect(screen.getByTestId("cart-count")).toHaveTextContent("0");

    const cartBtn = screen.getByTitle("Thêm vào giỏ hàng");
    fireEvent.click(cartBtn);

    expect(screen.getByTestId("cart-count")).toHaveTextContent("1");
  });

  test("TC03: Click nút trái tim ❤️ thêm/bỏ sản phẩm vào yêu thích", () => {
    render(
      <ShopProvider>
        <TestCartObserver />
        <ProductCard product={sampleProduct} onClick={jest.fn()} />
      </ShopProvider>
    );

    const wishlistBtn = screen.getByLabelText("Thêm vào yêu thích");
    fireEvent.click(wishlistBtn);

    expect(screen.getByTestId("wishlist-count")).toHaveTextContent("1");
    expect(screen.getByLabelText("Bỏ yêu thích")).toBeInTheDocument();

    // Click lại để bỏ thích
    fireEvent.click(screen.getByLabelText("Bỏ yêu thích"));
    expect(screen.getByTestId("wishlist-count")).toHaveTextContent("0");
  });

  test("TC04: Vô hiệu hóa nút thêm vào giỏ hàng khi sản phẩm hết hàng", () => {
    render(
      <ShopProvider>
        <ProductCard product={outOfStockProduct} onClick={jest.fn()} />
      </ShopProvider>
    );

    expect(screen.getByText("Hết hàng")).toBeInTheDocument();
    const cartBtn = screen.getByTitle("Thêm vào giỏ hàng");
    expect(cartBtn).toBeDisabled();
  });

  test("TC05: Click vào thẻ hoặc nút Chi tiết kích hoạt sự kiện onClick", () => {
    const handleSelect = jest.fn();
    render(
      <ShopProvider>
        <ProductCard product={sampleProduct} onClick={handleSelect} />
      </ShopProvider>
    );

    const detailBtn = screen.getByText("Chi tiết");
    fireEvent.click(detailBtn);

    expect(handleSelect).toHaveBeenCalledTimes(1);
    expect(handleSelect).toHaveBeenCalledWith(sampleProduct);
  });
});
