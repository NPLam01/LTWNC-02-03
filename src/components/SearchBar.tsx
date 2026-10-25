interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  total: number;
  filtered: number;
}

export function SearchBar({ value, onChange, total, filtered }: SearchBarProps) {
  return (
    <div className="search-bar">
      <div className="search-input-wrapper">
        <input
          id="search-input"
          type="text"
          className="search-input"
          placeholder="Tìm kiếm sản phẩm..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete="off"
          spellCheck={false}
        />
        {value && (
          <button
            id="clear-search-btn"
            className="clear-btn"
            onClick={() => onChange("")}
            aria-label="Xóa tìm kiếm"
          >
            ✕
          </button>
        )}
      </div>
      <div className="search-meta">
        {value || filtered < total ? (
          <span>
            <strong>{filtered.toLocaleString("vi-VN")}</strong> / {total.toLocaleString("vi-VN")} sản phẩm
          </span>
        ) : (
          <span><strong>{total.toLocaleString("vi-VN")}</strong> sản phẩm</span>
        )}
      </div>
    </div>
  );
}
