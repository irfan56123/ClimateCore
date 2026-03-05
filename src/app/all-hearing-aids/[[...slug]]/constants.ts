export const BRANDS = ["signia", "phonak", "widex", "oticon", "starkey"] as const;
export const SHAPES = ["ric", "bte", "ite", "itc", "cic", "iic"] as const;
export const TECHNOLOGIES = ["bluetooth", "rechargeable", "ai"] as const;
export const PRICE_RANGES = [
  { slug: "under-50000",  label: "Under ₹50,000",  max: 50000  },
  { slug: "under-100000", label: "Under ₹1 Lakh",   max: 100000 },
  { slug: "under-200000", label: "Under ₹2 Lakh",   max: 200000 },
  { slug: "under-300000", label: "Under ₹3 Lakh",   max: 300000 },
] as const;

export interface ActiveFilters {
  brand?: string;
  shape?: string;
  technology?: string;
  priceSlug?: string;
}
