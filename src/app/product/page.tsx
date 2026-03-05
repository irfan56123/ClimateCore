"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  slug: string;
  category: string;
  mrp: number | null;
  isFeatured: boolean;
  images: string[];
  technology: string[];
  shape: string[];
  suitableFor: string[];
}

const CATEGORY_COLORS: Record<string, string> = {
  signia: "bg-purple-50 text-purple-700",
  phonak: "bg-orange-50 text-orange-700",
  widex: "bg-blue-50 text-blue-700",
  oticon: "bg-red-50 text-red-600",
  starkey: "bg-green-50 text-green-700",
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("/api/products")
      .then((r) => r.json())
      .then((data) => { setProducts(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const categories = ["all", ...Array.from(new Set(products.map((p) => p.category)))];
  const filtered = filter === "all" ? products : products.filter((p) => p.category === filter);

  if (loading) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-16 mt-10">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
              <div className="h-52 bg-gray-100" />
              <div className="p-5 space-y-3">
                <div className="h-4 bg-gray-100 rounded w-3/4" />
                <div className="h-3 bg-gray-100 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-16 mt-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#023784] mb-4">Our Hearing Aids</h1>
      <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto text-sm">
        Explore our full range of premium hearing solutions from world-leading brands.
      </p>

      {/* Category filter */}
      {categories.length > 1 && (
        <div className="flex gap-2 flex-wrap justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition
                ${filter === cat ? "bg-[#023784] text-white shadow-md" : "bg-white border border-gray-200 text-gray-600 hover:border-[#023784] hover:text-[#023784]"}`}
            >
              {cat === "all" ? "All Brands" : cat}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="text-center text-gray-500 py-16">No products found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative w-full h-52 bg-gray-50">
                {product.images[0] ? (
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    fill
                    className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-gray-300 text-sm font-medium">
                    No Image
                  </div>
                )}
                {product.isFeatured && (
                  <span className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                    ★ Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <span className={`self-start text-[10px] font-semibold px-2.5 py-0.5 rounded-full capitalize mb-2 ${CATEGORY_COLORS[product.category] ?? "bg-gray-100 text-gray-600"}`}>
                  {product.category}
                </span>
                <h2 className="text-sm font-bold text-gray-800 line-clamp-2 mb-1 leading-snug">{product.title}</h2>
                {product.technology.length > 0 && (
                  <p className="text-xs text-gray-400 line-clamp-1">{product.technology.slice(0, 2).join(" · ")}</p>
                )}
                <div className="mt-auto pt-3 flex items-center justify-between">
                  {product.mrp ? (
                    <span className="text-[#023784] font-bold text-sm">₹{product.mrp.toLocaleString()}</span>
                  ) : (
                    <span className="text-gray-400 text-xs">Price on request</span>
                  )}
                  <span className="text-[#023784] text-xs font-semibold group-hover:underline">View →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
