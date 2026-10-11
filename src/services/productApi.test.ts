import { productApi } from "./productApi";

describe("productApi (Mock API)", () => {
  beforeEach(() => {
    productApi.resetDatabase();
  });

  test("TC01: getProducts trả về danh sách sản phẩm", async () => {
    const products = await productApi.getProducts({ delayMs: 0 });
    expect(products.length).toBeGreaterThan(0);
    expect(products[0]).toHaveProperty("id");
    expect(products[0]).toHaveProperty("name");
    expect(products[0]).toHaveProperty("price");
    expect(products[0]).toHaveProperty("stock");
  });

  test("TC02: getProducts lọc chính xác theo Category", async () => {
    const laptopProducts = await productApi.getProducts({
      category: "Laptop",
      delayMs: 0,
    });
    expect(laptopProducts.length).toBeGreaterThan(0);
    for (const product of laptopProducts) {
      expect(product.category).toBe("Laptop");
    }
  });

  test("TC03: getProducts tìm kiếm chính xác theo keyword (tên hoặc thương hiệu)", async () => {
    const searchResult = await productApi.getProducts({
      keyword: "Apple",
      delayMs: 0,
    });
    expect(searchResult.length).toBeGreaterThan(0);
    for (const product of searchResult) {
      const match =
        product.name.toLowerCase().includes("apple") ||
        product.brand.toLowerCase().includes("apple") ||
        product.category.toLowerCase().includes("apple");
      expect(match).toBe(true);
    }
  });

  test("TC04: getProducts sắp xếp giá tăng dần (price-asc)", async () => {
    const products = await productApi.getProducts({
      sortOption: "price-asc",
      delayMs: 0,
    });
    for (let i = 0; i < products.length - 1; i++) {
      expect(products[i].price).toBeLessThanOrEqual(products[i + 1].price);
    }
  });

  test("TC05: getProducts sắp xếp giá giảm dần (price-desc)", async () => {
    const products = await productApi.getProducts({
      sortOption: "price-desc",
      delayMs: 0,
    });
    for (let i = 0; i < products.length - 1; i++) {
      expect(products[i].price).toBeGreaterThanOrEqual(products[i + 1].price);
    }
  });

  test("TC06: getProductById trả về đúng sản phẩm theo ID", async () => {
    const product = await productApi.getProductById(1, 0);
    expect(product).not.toBeNull();
    expect(product?.id).toBe(1);
    expect(product?.name).toContain("MacBook Pro");
  });

  test("TC07: getProductById trả về null khi không tìm thấy", async () => {
    const product = await productApi.getProductById(999999, 0);
    expect(product).toBeNull();
  });

  test("TC08: getCategories trả về danh sách danh mục hợp lệ", async () => {
    const categories = await productApi.getCategories(0);
    expect(categories).toContain("All");
    expect(categories).toContain("Laptop");
    expect(categories).toContain("Phone");
  });
});
