import { renderHook, waitFor } from "@testing-library/react";
import { useFilteredProducts } from "./useProducts";
import { productApi } from "../services/productApi";
import type { Product } from "../types/product";

describe("Async Unit Test: useFilteredProducts (Mock API Hook)", () => {
  const dummyProducts: Product[] = [
    {
      id: 1,
      name: "MacBook Pro 16",
      category: "Laptop",
      brand: "Apple",
      price: 50_000_000,
      rating: 4.9,
      image: "test1.jpg",
      stock: 10,
    },
    {
      id: 2,
      name: "Dell XPS 15",
      category: "Laptop",
      brand: "Dell",
      price: 40_000_000,
      rating: 4.7,
      image: "test2.jpg",
      stock: 8,
    },
    {
      id: 3,
      name: "iPhone 15 Pro",
      category: "Phone",
      brand: "Apple",
      price: 30_000_000,
      rating: 4.8,
      image: "test3.jpg",
      stock: 15,
    },
  ];

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("TC01 (Async): Tải danh sách sản phẩm bất đồng bộ từ Mock API thành công", async () => {
    jest.spyOn(productApi, "getProducts").mockResolvedValueOnce(dummyProducts);

    const { result } = renderHook(() =>
      useFilteredProducts({
        keyword: "",
        category: "All",
        sortOption: "price-asc",
      })
    );

    // Ban đầu loading = true
    expect(result.current.loading).toBe(true);

    // Chờ API trả kết quả bất đồng bộ
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.filteredProducts).toHaveLength(3);
    expect(result.current.error).toBeNull();
  });

  test("TC02 (Async): Lọc theo danh mục bất đồng bộ qua tham số API", async () => {
    const laptopOnly = dummyProducts.filter((p) => p.category === "Laptop");
    const getProductsSpy = jest
      .spyOn(productApi, "getProducts")
      .mockResolvedValueOnce(laptopOnly);

    const { result } = renderHook(() =>
      useFilteredProducts({
        keyword: "",
        category: "Laptop",
        sortOption: "price-asc",
      })
    );

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(getProductsSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        category: "Laptop",
      })
    );
    expect(result.current.filteredProducts).toHaveLength(2);
    expect(result.current.filteredProducts[0].category).toBe("Laptop");
  });

  test("TC03 (Async): Xử lý lỗi khi Mock API reject", async () => {
    jest
      .spyOn(productApi, "getProducts")
      .mockRejectedValueOnce(new Error("Network Error 500"));

    const { result } = renderHook(() =>
      useFilteredProducts({
        keyword: "",
        category: "All",
        sortOption: "price-asc",
      })
    );

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe("Network Error 500");
    expect(result.current.filteredProducts).toHaveLength(0);
  });
});
