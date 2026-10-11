import type { Category, SortOption } from "../types/product";
import { CATEGORIES_LIST } from "../data/products";

interface FilterBarProps {
  category: Category;
  sortOption: SortOption;
  onCategoryChange: (category: Category) => void;
  onSortChange: (sort: SortOption) => void;
}

export function FilterBar({
  category,
  sortOption,
  onCategoryChange,
  onSortChange,
}: FilterBarProps) {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label className="filter-label" htmlFor="category-select">
          Danh mục
        </label>
        <select
          id="category-select"
          className="filter-select"
          value={category}
          onChange={(e) => onCategoryChange(e.target.value as Category)}
        >
          {CATEGORIES_LIST.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "All" ? "Tất cả" : cat}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label" htmlFor="sort-select">
          Sắp xếp
        </label>
        <select
          id="sort-select"
          className="filter-select"
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
        >
          <option value="price-asc">Giá: Thấp → Cao</option>
          <option value="price-desc">Giá: Cao → Thấp</option>
          <option value="rating-desc">Đánh giá cao nhất</option>
          <option value="name-asc">Tên A → Z</option>
        </select>
      </div>
    </div>
  );
}
