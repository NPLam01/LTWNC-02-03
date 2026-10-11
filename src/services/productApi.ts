import type { Product, Category, SortOption } from "../types/product";
import { INITIAL_MOCK_PRODUCTS } from "../data/mockProducts";
import { CATEGORIES_LIST } from "../data/products";

export interface GetProductsParams {
  keyword?: string;
  category?: Category;
  sortOption?: SortOption;
  delayMs?: number;
}

// In-memory mock database
let productDatabase: Product[] = JSON.parse(
  JSON.stringify(INITIAL_MOCK_PRODUCTS)
);

function delay(ms: number = 250): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const productApi = {
  /**
   * Fetch list of products with optional filtering and sorting
   */
  async getProducts(params: GetProductsParams = {}): Promise<Product[]> {
    const {
      keyword = "",
      category = "All",
      sortOption = "price-asc",
      delayMs = 250,
    } = params;

    // Simulate network delay
    if (delayMs > 0) {
      await delay(delayMs);
    }

    let result = [...productDatabase];

    // Filter by Category
    if (category && category !== "All") {
      result = result.filter((p) => p.category === category);
    }

    // Filter by Keyword (search in name, brand, category)
    if (keyword && keyword.trim()) {
      const lower = keyword.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(lower) ||
          p.brand.toLowerCase().includes(lower) ||
          p.category.toLowerCase().includes(lower)
      );
    }

    // Sort
    switch (sortOption) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating-desc":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    // Return a cloned array to prevent external mutations
    return JSON.parse(JSON.stringify(result));
  },

  /**
   * Fetch a single product by its ID
   */
  async getProductById(id: number, delayMs: number = 150): Promise<Product | null> {
    if (delayMs > 0) {
      await delay(delayMs);
    }
    const found = productDatabase.find((p) => p.id === id);
    return found ? JSON.parse(JSON.stringify(found)) : null;
  },

  /**
   * Fetch all product categories
   */
  async getCategories(delayMs: number = 100): Promise<Category[]> {
    if (delayMs > 0) {
      await delay(delayMs);
    }
    return [...CATEGORIES_LIST];
  },

  /**
   * Update stock for a product (e.g. upon order placement)
   */
  async updateStock(
    id: number,
    quantityDelta: number,
    delayMs: number = 150
  ): Promise<Product> {
    if (delayMs > 0) {
      await delay(delayMs);
    }
    const product = productDatabase.find((p) => p.id === id);
    if (!product) {
      throw new Error(`Sản phẩm với ID #${id} không tồn tại`);
    }

    product.stock = Math.max(0, product.stock + quantityDelta);
    return JSON.parse(JSON.stringify(product));
  },

  /**
   * Reset mock database to initial state (useful for tests)
   */
  resetDatabase() {
    productDatabase = JSON.parse(JSON.stringify(INITIAL_MOCK_PRODUCTS));
  },
};
