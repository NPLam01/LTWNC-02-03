export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  brand: string;
  stock: number;
}

export type SortOption =
  | "price-asc"
  | "price-desc"
  | "rating-desc"
  | "name-asc";

export type Category =
  | "All"
  | "Laptop"
  | "Phone"
  | "Tablet"
  | "Monitor"
  | "Keyboard"
  | "Mouse"
  | "Headphone"
  | "Camera"
  | "Speaker";
