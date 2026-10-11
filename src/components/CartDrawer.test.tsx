import { render, screen, fireEvent, act } from "@testing-library/react";
import { CartDrawer } from "./CartDrawer";
import { ShopProvider, useShop } from "../context/ShopContext";
import type { Product } from "../types/product";

const testProduct1: Product = {
  id: 11,
  name: "Bàn phím cơ Keychron Q1",
  category: "Keyboard",
  brand: "Keychron",
  price: 4_250_000,
  rating: 4.9,
  image: "keychron.jpg",
  stock: 10,
};

const testProduct2: Product = {
  id: 14,
  name: "Chuột Logitech MX Master 3S",
  category: "Mouse",
  brand: "Logitech",
  price: 2_190_000,
  rating: 4.8,
  image: "logitech.jpg",
  stock: 5,
};

// Helper component to open cart and add test items
function CartDrawerTestRig({
  initialProducts = [],
}: {
  initialProducts?: { product: Product; qty: number }[];
}) {
  const { addToCart, setIsCartOpen } = useShop();

  return (
    <div>
      <button
        data-testid="open-cart-btn"
        onClick={() => {
          setIsCartOpen(true);
          initialProducts.forEach(({ product, qty }) => {
            addToCart(product, qty);
          });
        }}
      >
        Mở giỏ hàng
      </button>
      <CartDrawer />
    </div>
  );
}

describe("Integration Test: CartDrawer (Component với RTL)", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("TC01: Hiển thị giao diện giỏ hàng trống khi chưa có sản phẩm", () => {
    render(
      <ShopProvider>
        <CartDrawerTestRig />
      </ShopProvider>
    );

    fireEvent.click(screen.getByTestId("open-cart-btn"));

    expect(screen.getByText("Giỏ hàng đang trống")).toBeInTheDocument();
    expect(
      screen.getByText(/Bạn chưa thêm sản phẩm nào/)
    ).toBeInTheDocument();
  });

  test("TC02: Hiển thị danh sách sản phẩm, giá đơn vị và tổng tạm tính trong giỏ", () => {
    render(
      <ShopProvider>
        <CartDrawerTestRig
          initialProducts={[
            { product: testProduct1, qty: 1 },
            { product: testProduct2, qty: 2 },
          ]}
        />
      </ShopProvider>
    );

    fireEvent.click(screen.getByTestId("open-cart-btn"));

    expect(screen.getByText("Bàn phím cơ Keychron Q1")).toBeInTheDocument();
    expect(
      screen.getByText("Chuột Logitech MX Master 3S")
    ).toBeInTheDocument();
    expect(screen.getByText("3 sản phẩm")).toBeInTheDocument();
    // Tổng tạm tính = 4.250.000 + (2.190.000 * 2) = 8.630.000
    expect(screen.getAllByText(/8\.630\.000/).length).toBeGreaterThanOrEqual(1);
  });

  test("TC03: Tăng và giảm số lượng sản phẩm bằng nút '+' và '−'", () => {
    render(
      <ShopProvider>
        <CartDrawerTestRig initialProducts={[{ product: testProduct1, qty: 2 }]} />
      </ShopProvider>
    );

    fireEvent.click(screen.getByTestId("open-cart-btn"));

    expect(screen.getByText("2")).toBeInTheDocument();

    // Bấm tăng '+'
    const plusBtn = screen.getByLabelText("Tăng số lượng");
    fireEvent.click(plusBtn);
    expect(screen.getByText("3")).toBeInTheDocument();

    // Bấm giảm '−'
    const minusBtn = screen.getByLabelText("Giảm số lượng");
    fireEvent.click(minusBtn);
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  test("TC04: Xóa sản phẩm khỏi giỏ hàng khi click nút xóa '✕'", () => {
    render(
      <ShopProvider>
        <CartDrawerTestRig
          initialProducts={[
            { product: testProduct1, qty: 1 },
            { product: testProduct2, qty: 1 },
          ]}
        />
      </ShopProvider>
    );

    fireEvent.click(screen.getByTestId("open-cart-btn"));

    const removeBtn = screen.getByLabelText(
      `Xóa ${testProduct1.name}`
    );
    fireEvent.click(removeBtn);

    expect(
      screen.queryByText("Bàn phím cơ Keychron Q1")
    ).not.toBeInTheDocument();
    expect(
      screen.getByText("Chuột Logitech MX Master 3S")
    ).toBeInTheDocument();
  });

  test("TC05: Nút 'Xóa tất cả' làm sạch toàn bộ giỏ hàng ngay lập tức", () => {
    render(
      <ShopProvider>
        <CartDrawerTestRig
          initialProducts={[
            { product: testProduct1, qty: 1 },
            { product: testProduct2, qty: 2 },
          ]}
        />
      </ShopProvider>
    );

    fireEvent.click(screen.getByTestId("open-cart-btn"));

    const clearAllBtn = screen.getByRole("button", { name: "Xóa tất cả" });
    fireEvent.click(clearAllBtn);

    expect(screen.getByText("Giỏ hàng đang trống")).toBeInTheDocument();
  });

  test("TC06: Hiển thị thông báo MIỄN PHÍ VẬN CHUYỂN khi đơn hàng đạt ngưỡng", () => {
    render(
      <ShopProvider>
        <CartDrawerTestRig
          initialProducts={[{ product: testProduct1, qty: 1 }]} // 4.250.000 > 1.000.000
        />
      </ShopProvider>
    );

    fireEvent.click(screen.getByTestId("open-cart-btn"));

    expect(screen.getByText("MIỄN PHÍ VẬN CHUYỂN")).toBeInTheDocument();
  });

  test("TC07 (Async UI): Click 'Tiến hành thanh toán' chuyển sang trạng thái Đặt hàng thành công", () => {
    render(
      <ShopProvider>
        <CartDrawerTestRig initialProducts={[{ product: testProduct1, qty: 1 }]} />
      </ShopProvider>
    );

    fireEvent.click(screen.getByTestId("open-cart-btn"));

    const checkoutBtn = screen.getByText(/Tiến hành thanh toán/);
    fireEvent.click(checkoutBtn);

    // Chờ quá trình xử lý đơn hàng giả lập (1200ms)
    act(() => {
      jest.advanceTimersByTime(1300);
    });

    expect(screen.getByText("Đặt hàng thành công!")).toBeInTheDocument();
  });
});
