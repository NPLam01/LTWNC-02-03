import { useState, useEffect, useCallback, useRef } from "react";
import { productApi } from "../services/productApi";
import type { Product, Category, SortOption } from "../types/product";

interface UseFilteredProductsArgs {
  keyword: string;
  category: Category;
  sortOption: SortOption;
}

export function useFilteredProducts({
  keyword,
  category,
  sortOption,
}: UseFilteredProductsArgs) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchIdRef = useRef(0);

  const fetchProducts = useCallback(async () => {
    const currentFetchId = ++fetchIdRef.current;
    setLoading(true);
    setError(null);

    try {
      const data = await productApi.getProducts({
        keyword,
        category,
        sortOption,
        delayMs: 200,
      });

      // Avoid race conditions
      if (currentFetchId === fetchIdRef.current) {
        setFilteredProducts(data);
        setTotalCount((prev) =>
          prev === 0 || (!keyword && category === "All") ? data.length : prev
        );
        setLoading(false);
      }
    } catch (err) {
      if (currentFetchId === fetchIdRef.current) {
        setError(
          err instanceof Error
            ? err.message
            : "Có lỗi xảy ra khi tải danh sách sản phẩm"
        );
        setLoading(false);
      }
    }
  }, [keyword, category, sortOption]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products: filteredProducts,
    filteredProducts,
    totalCount,
    loading,
    error,
    refetch: fetchProducts,
  };
}
