import type { Product, Category } from "../types/product";

const CATEGORIES: Category[] = [
  "Laptop",
  "Phone",
  "Tablet",
  "Monitor",
  "Keyboard",
  "Mouse",
  "Headphone",
  "Camera",
  "Speaker",
];

const BRANDS = [
  "Dell", "Apple", "Samsung", "Sony", "LG", "Asus", "Acer", "HP",
  "Lenovo", "Microsoft", "Logitech", "Razer", "Corsair", "SteelSeries",
  "Jabra", "Bose", "Sennheiser", "Canon", "Nikon", "JBL",
];

const PRODUCT_NAMES: Record<Category, string[]> = {
  All: [],
  Laptop: [
    "ProBook Elite", "UltraSlim Pro", "GamerForce X", "WorkStation Z",
    "Chromebook Air", "ThinkPad Carbon", "Spectre Fold", "Surface Studio",
    "Yoga Slim", "ZBook Fury",
  ],
  Phone: [
    "Galaxy Ultra", "iPhone Pro Max", "Pixel XL", "OnePlus Ace",
    "Xperia Pro", "Find X", "Reno Series", "Nord Edge",
    "Zenfone Flip", "Motorola Edge",
  ],
  Tablet: [
    "iPad Air", "Galaxy Tab S", "Surface Pro", "MediaPad M",
    "Lenovo Tab P", "Fire HD", "Xiaomi Pad", "OPPO Pad",
    "Nokia T20", "TCL Tab",
  ],
  Monitor: [
    "UltraSharp 4K", "Predator XB", "ROG Swift", "ViewFinity S",
    "ProDisplay XDR", "UltraGear QHD", "Odyssey Neo", "SpectraView",
    "EX Series WQHD", "BenQ EW",
  ],
  Keyboard: [
    "MX Keys", "Huntsman Elite", "BlackWidow V4", "K100 RGB",
    "G915 TKL", "Anne Pro 2", "Ducky One 3", "GMMK Pro",
    "Keychron Q1", "Tofu65",
  ],
  Mouse: [
    "MX Master 3S", "DeathAdder V3", "G Pro X", "Viper Ultimate",
    "Model O Pro", "Basilisk V3", "Rival 650", "IEM V2",
    "Pulsar X2", "Endgame XM1r",
  ],
  Headphone: [
    "QuietComfort 45", "WH-1000XM5", "AirPods Max", "Momentum 4",
    "Arctis Nova Pro", "Kraken V3", "Cloud Alpha", "Fidelio L3",
    "ATH-M50xBT", "Sundara",
  ],
  Camera: [
    "Alpha 7 IV", "EOS R6", "Nikon Z9", "GH6", "X-T5",
    "G9 II", "K-3 III", "SL2-S", "1DX Mark III", "Z7 II",
  ],
  Speaker: [
    "Soundbar Q990C", "HomePod mini", "Echo Studio", "Sonos Arc",
    "Beam Gen2", "Charge 5", "Flip 6", "SRS-XB43",
    "PartyBox 110", "Wonderboom 3",
  ],
};

function generateImageUrl(category: Category, id: number): string {
  const seed = `product-${id}-${category}`;
  return `https://picsum.photos/seed/${seed}/400/300`;
}

export function generateProducts(count: number = 10_000): Product[] {
  return Array.from({ length: count }, (_, index) => {
    const id = index + 1;
    const category = CATEGORIES[index % CATEGORIES.length];
    const nameList = PRODUCT_NAMES[category];
    const baseName = nameList[index % nameList.length];
    const brand = BRANDS[index % BRANDS.length];
    const variant = Math.floor(index / nameList.length) + 1;

    const basePrice =
      category === "Laptop" ? 15_000_000 :
      category === "Phone" ? 10_000_000 :
      category === "Tablet" ? 8_000_000 :
      category === "Monitor" ? 7_000_000 :
      category === "Camera" ? 20_000_000 :
      category === "Headphone" ? 3_000_000 :
      category === "Speaker" ? 2_000_000 :
      1_500_000;

    const priceVariation = (index % 20) * (basePrice * 0.05);
    const price = basePrice + priceVariation;
    const rating = parseFloat((3.0 + (index % 21) * 0.1).toFixed(1));

    return {
      id,
      name: `${brand} ${baseName} ${variant > 1 ? `Gen ${variant}` : ""}`.trim(),
      category,
      price,
      rating: Math.min(rating, 5.0),
      image: generateImageUrl(category, id),
      brand,
      stock: (index % 50) + 1,
    };
  });
}

export const CATEGORIES_LIST: Category[] = [
  "All",
  "Laptop",
  "Phone",
  "Tablet",
  "Monitor",
  "Keyboard",
  "Mouse",
  "Headphone",
  "Camera",
  "Speaker",
];
