"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: string;
  category: string[];
  imageUrl?: string;
  createdAt?: string;
}

interface PrismaProduct {
  id: string;
  title: string;
  slug: string;
  category: string;
  mrp: number | null;
  isFeatured: boolean;
  images: string[];
  suitableFor: string[];
  technology: string[];
  shape: string[];
  description: string | null;
  createdAt: string;
}

type ProductSectionProps = {
  heading?: string;
};

const categories = ["All", "Heating", "Cooling", "Mini-Split", "Ventilation"];

const categoryKeywords: Record<string, string[]> = {
  All: [],
  Heating: ["heating", "furnace", "boiler"],
  Cooling: ["cooling", "ac", "air conditioner"],
  "Mini-Split": ["mini split", "ductless"],
  Ventilation: ["ventilation", "hvac", "duct"],
};

const BRAND_KEYWORDS: Record<string, string[]> = {
  heating: ["heating", "furnace"],
  cooling: ["cooling", "ac"],
  ventilation: ["ventilation"],
  mini_split: ["mini split"],
};

const normalize = (text: string) =>
  (text || "").toLowerCase().replace(/\s+/g, " ").trim();

const titleOrCatsHave = (p: Product, keywords: string[]) => {
  const title = normalize(p.title);
  const cats = p.category.map(normalize);
  return keywords.some((kw) => {
    const q = normalize(kw);
    return title.includes(q) || cats.some((c) => c.includes(q));
  });
};

const isHighlighted = (p: Product) =>
  titleOrCatsHave(p, ["highlighted", "featured"]);

const ts = (p: Product) => (p.createdAt ? new Date(p.createdAt).getTime() : 0);

export default function ProductSection({ heading }: ProductSectionProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data: PrismaProduct[] = await response.json();

        const mapped = data.map((p) => {
          return {
            id: p.id,
            title: p.title,
            slug: p.slug,
            description: p.description || "",
            price: p.mrp ? `₹${p.mrp}` : "Contact for price",
            category: [p.category, ...p.suitableFor, ...p.technology, ...p.shape],
            imageUrl: p.images[0] || "/placeholder.png",
            createdAt: p.createdAt,
          };
        });

        setProducts(mapped);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center py-10">Loading products...</p>;

  if (!products.length)
    return <p className="text-center py-10">No products found.</p>;

  const brands = ["heating", "cooling", "ventilation", "mini_split"];
  let filteredProducts: Product[] = [];

  if (activeCategory === "All") {
    const picks: Product[] = [];

    brands.forEach((brand) => {
      const keys = BRAND_KEYWORDS[brand];

      const highlighted = products
        .filter((p) => isHighlighted(p) && titleOrCatsHave(p, keys))
        .sort((a, b) => ts(b) - ts(a));

      if (highlighted[0]) {
        picks.push(highlighted[0]);
        return;
      }

      const latest = products
        .filter((p) => titleOrCatsHave(p, keys))
        .sort((a, b) => ts(b) - ts(a));

      if (latest[0]) picks.push(latest[0]);
    });

    filteredProducts =
      picks.length > 0
        ? picks.slice(0, 4)
        : [...products].sort((a, b) => ts(b) - ts(a)).slice(0, 4);
  } else {
    const keywords = categoryKeywords[activeCategory] || [activeCategory];

    const highlighted = products
      .filter((p) => isHighlighted(p) && titleOrCatsHave(p, keywords))
      .sort((a, b) => ts(b) - ts(a));

    const fallback =
      highlighted.length > 0
        ? []
        : products
          .filter((p) => titleOrCatsHave(p, keywords))
          .sort((a, b) => ts(b) - ts(a));

    filteredProducts = (highlighted.length > 0 ? highlighted : fallback).slice(
      0,
      4,
    );
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-lg sm:text-xl md:text-3xl font-extrabold mb-3">
          <span className="bg-gradient-to-r from-[#E83D6D] via-[#184A99] to-[#7C7C7C] bg-clip-text text-transparent">
            {heading || "Explore Our Range of HVAC Solutions"}
          </span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
          Discover the latest models — from efficient furnaces to powerful air conditioners.
        </p>
      </div>

      {/* Categories */}
      <div className="flex justify-center mb-8">
        <div className="flex gap-2 bg-[#184A99] p-1 rounded-full overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm rounded-full transition whitespace-nowrap ${activeCategory === cat
                ? "bg-[#0E1015] text-white"
                : "text-[#C7BCE0] hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.map((p) => (
          <ProductCard
            key={p.id}
            title={p.title}
            slug={p.slug}
            imageUrl={p.imageUrl || "/placeholder.png"}
          />
        ))}
      </div>
    </section>
  );
}
