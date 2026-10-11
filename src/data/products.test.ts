
import { generateProducts, CATEGORIES_LIST } from "./products";

describe("generateProducts", () => {
  test("TC01: tạo đúng số lượng sản phẩm được yêu cầu", () => {
    expect(generateProducts(10)).toHaveLength(10);
  });

  test("TC02: tạo danh sách rỗng khi số lượng bằng 0", () => {
    expect(generateProducts(0)).toEqual([]);
  });

  test("TC03: mỗi sản phẩm có đủ các trường dữ liệu", () => {
    const products = generateProducts(5);

    for (const product of products) {
      expect(product).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          category: expect.any(String),
          price: expect.any(Number),
          rating: expect.any(Number),
          image: expect.any(String),
          brand: expect.any(String),
          stock: expect.any(Number),
        })
      );
    }
  });

  test("TC04: ID sản phẩm là duy nhất", () => {
    const products = generateProducts(100);
    const ids = products.map((product) => product.id);

    expect(new Set(ids).size).toBe(ids.length);
  });

  test("TC05: danh sách danh mục có All và các danh mục hợp lệ", () => {
    expect(CATEGORIES_LIST).toContain("All");
    expect(CATEGORIES_LIST).toContain("Laptop");
    expect(CATEGORIES_LIST).toContain("Phone");
  });

  test("TC06: giá, tồn kho và đánh giá nằm trong giới hạn hợp lệ", () => {
    const products = generateProducts(100);

    for (const product of products) {
      expect(product.price).toBeGreaterThan(0);
      expect(product.stock).toBeGreaterThanOrEqual(1);
      expect(product.stock).toBeLessThanOrEqual(50);
      expect(product.rating).toBeGreaterThanOrEqual(3);
      expect(product.rating).toBeLessThanOrEqual(5);
    }
  });
});
