"use client";

import { useState, useMemo } from "react";
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
  signia:  "bg-purple-50 text-purple-700 border-purple-200",
  phonak:  "bg-orange-50 text-orange-700 border-orange-200",
  widex:   "bg-blue-50 text-blue-700 border-blue-200",
  oticon:  "bg-red-50 text-red-600 border-red-200",
  starkey: "bg-green-50 text-green-700 border-green-200",
};

const TIERS = [
  { id: "basic",    label: "Basic",    range: "₹15K – ₹50K",    max: 50000,  min: 0,     color: "bg-emerald-50 border-emerald-200 text-emerald-800",  dot: "bg-emerald-400" },
  { id: "advanced", label: "Advanced", range: "₹50K – ₹2 Lakh", max: 200000, min: 50001, color: "bg-blue-50 border-blue-200 text-blue-800",           dot: "bg-blue-400" },
  { id: "premium",  label: "Premium",  range: "₹2 Lakh+",       max: Infinity, min: 200001, color: "bg-violet-50 border-violet-200 text-violet-800",  dot: "bg-violet-400" },
];

function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function HearingAidPricesPage({ products }: { products: Product[] }) {
  const [activeBrand, setActiveBrand]   = useState<string | null>(null);
  const [activeTier,  setActiveTier]    = useState<string | null>(null);
  const [activeShape, setActiveShape]   = useState<string | null>(null);
  const [activeTech,  setActiveTech]    = useState<string | null>(null);
  const [view, setView] = useState<"grid" | "table">("grid");

  // Derive available filter options from real products
  const brands = useMemo(() =>
    [...new Set(products.map((p) => p.category))].sort(), [products]);
  const shapes = useMemo(() =>
    [...new Set(products.flatMap((p) => p.shape))].sort(), [products]);
  const techs = useMemo(() =>
    [...new Set(products.flatMap((p) => p.technology))].sort(), [products]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (activeBrand && p.category !== activeBrand) return false;
      if (activeShape && !p.shape.includes(activeShape)) return false;
      if (activeTech  && !p.technology.includes(activeTech)) return false;
      if (activeTier) {
        const tier = TIERS.find((t) => t.id === activeTier);
        if (tier && p.mrp != null) {
          if (p.mrp < tier.min || p.mrp > tier.max) return false;
        }
      }
      return true;
    });
  }, [products, activeBrand, activeShape, activeTech, activeTier]);

  const hasFilters = activeBrand || activeTier || activeShape || activeTech;

  function clearAll() {
    setActiveBrand(null); setActiveTier(null);
    setActiveShape(null); setActiveTech(null);
  }

  const pillBase = "px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer select-none";
  const pillOn   = "bg-[#023784] text-white border-[#023784] shadow-sm";
  const pillOff  = "bg-white text-gray-600 border-gray-200 hover:border-[#023784] hover:text-[#023784]";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 mt-8">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="text-center mb-14">
        <span className="inline-block text-xs font-semibold text-[#023784] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-4">
          Updated 2026 Price List
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Hearing Aid Price in India 2026
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
          Compare real MRP prices for Signia, Phonak, Widex &amp; Oticon hearing aids.
          Transparent pricing, zero hidden charges, and free expert consultation.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="#products"
            className="bg-[#023784] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-[#012d6b] transition text-sm">
            View Price List
          </a>
          <a href="/appointment"
            className="border border-[#023784] text-[#023784] px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition text-sm">
            Free Consultation
          </a>
        </div>
      </section>

      {/* ── Price Tier Cards ─────────────────────────────────────────────── */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-gray-800 mb-5 text-center">Filter by Budget</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {TIERS.map((tier) => {
            const count = products.filter((p) =>
              p.mrp != null && p.mrp >= tier.min && (tier.max === Infinity ? true : p.mrp <= tier.max)
            ).length;
            const isActive = activeTier === tier.id;
            return (
              <button
                key={tier.id}
                onClick={() => setActiveTier(isActive ? null : tier.id)}
                className={`flex items-start gap-4 p-5 rounded-2xl border-2 text-left transition-all ${
                  isActive
                    ? "border-[#023784] bg-[#023784] text-white shadow-lg scale-[1.02]"
                    : `${tier.color} border hover:border-[#023784] hover:shadow-md`
                }`}
              >
                <span className={`mt-1 w-3 h-3 rounded-full flex-shrink-0 ${isActive ? "bg-white" : tier.dot}`} />
                <div>
                  <p className="font-bold text-base">{tier.label}</p>
                  <p className={`text-sm font-medium ${isActive ? "text-blue-100" : "opacity-75"}`}>{tier.range}</p>
                  <p className={`text-xs mt-1 ${isActive ? "text-blue-200" : "opacity-60"}`}>{count} models available</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ── Filters ──────────────────────────────────────────────────────── */}
      <section id="products" className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <p className="text-sm font-semibold text-gray-700">Refine Results</p>
          <div className="flex items-center gap-3">
            {hasFilters && (
              <button onClick={clearAll} className="text-xs text-red-500 hover:text-red-700 font-medium">
                × Clear filters
              </button>
            )}
            {/* Grid / Table toggle */}
            <div className="flex rounded-lg border border-gray-200 overflow-hidden text-xs">
              <button onClick={() => setView("grid")}
                className={`px-3 py-1.5 font-medium transition ${view === "grid" ? "bg-[#023784] text-white" : "text-gray-500 hover:bg-gray-50"}`}>
                Grid
              </button>
              <button onClick={() => setView("table")}
                className={`px-3 py-1.5 font-medium transition ${view === "table" ? "bg-[#023784] text-white" : "text-gray-500 hover:bg-gray-50"}`}>
                Table
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {/* Brand */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest w-16 flex-shrink-0">Brand</span>
            {brands.map((b) => (
              <button key={b} onClick={() => setActiveBrand(activeBrand === b ? null : b)}
                className={`${pillBase} capitalize ${activeBrand === b ? pillOn : pillOff}`}>
                {b}
              </button>
            ))}
          </div>
          {/* Shape */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest w-16 flex-shrink-0">Shape</span>
            {shapes.map((s) => (
              <button key={s} onClick={() => setActiveShape(activeShape === s ? null : s)}
                className={`${pillBase} ${activeShape === s ? pillOn : pillOff}`}>
                {s}
              </button>
            ))}
          </div>
          {/* Technology */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest w-16 flex-shrink-0">Tech</span>
            {techs.map((t) => (
              <button key={t} onClick={() => setActiveTech(activeTech === t ? null : t)}
                className={`${pillBase} ${activeTech === t ? pillOn : pillOff}`}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Result count */}
      <p className="text-sm text-gray-400 mb-5">
        Showing <span className="font-semibold text-gray-700">{filtered.length}</span> of {products.length} models
        {hasFilters && " matching your filters"}
      </p>

      {/* ── Product Grid ─────────────────────────────────────────────────── */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-base font-medium mb-2">No products match these filters</p>
          <button onClick={clearAll} className="text-[#023784] text-sm font-semibold hover:underline">
            Clear filters
          </button>
        </div>
      ) : view === "grid" ? (
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-16">
          {filtered.map((product) => (
            <Link key={product.id} href={`/product/${product.slug}`}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1">
              {/* Image */}
              <div className="relative w-full h-48 bg-gray-50">
                {product.images[0] && (
                  <Image src={product.images[0]} alt={product.title} fill
                    className="object-contain p-3 group-hover:scale-105 transition-transform duration-300" />
                )}
                {product.isFeatured && (
                  <span className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    ★ Featured
                  </span>
                )}
                {/* Tier badge */}
                {product.mrp != null && (
                  <span className={`absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                    product.mrp <= 50000 ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                    : product.mrp <= 200000 ? "bg-blue-50 text-blue-700 border-blue-200"
                    : "bg-violet-50 text-violet-700 border-violet-200"
                  }`}>
                    {product.mrp <= 50000 ? "Basic" : product.mrp <= 200000 ? "Advanced" : "Premium"}
                  </span>
                )}
              </div>
              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <span className={`self-start text-[10px] font-semibold px-2 py-0.5 rounded-full capitalize mb-2 border ${CATEGORY_COLORS[product.category] ?? "bg-gray-100 text-gray-600 border-gray-200"}`}>
                  {product.category}
                </span>
                <h3 className="text-sm font-bold text-gray-800 line-clamp-2 leading-snug mb-2">
                  {product.title}
                </h3>
                {/* Shape & Tech tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.shape.slice(0, 2).map((s) => (
                    <span key={s} className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">{s}</span>
                  ))}
                  {product.technology.slice(0, 2).map((t) => (
                    <span key={t} className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">{t}</span>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between">
                  {product.mrp ? (
                    <span className="text-[#023784] font-bold text-base">₹{product.mrp.toLocaleString("en-IN")}</span>
                  ) : (
                    <span className="text-gray-400 text-xs">Price on request</span>
                  )}
                  <span className="text-[#023784] text-xs font-semibold group-hover:underline">Details →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        /* ── Table View ─────────────────────────────────────────────────── */
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-16">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left px-5 py-3.5 font-semibold text-gray-600 text-xs uppercase tracking-wide">Model</th>
                <th className="text-left px-4 py-3.5 font-semibold text-gray-600 text-xs uppercase tracking-wide">Brand</th>
                <th className="text-left px-4 py-3.5 font-semibold text-gray-600 text-xs uppercase tracking-wide">Shape</th>
                <th className="text-left px-4 py-3.5 font-semibold text-gray-600 text-xs uppercase tracking-wide">Technology</th>
                <th className="text-left px-4 py-3.5 font-semibold text-gray-600 text-xs uppercase tracking-wide">Tier</th>
                <th className="text-right px-5 py-3.5 font-semibold text-gray-600 text-xs uppercase tracking-wide">MRP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-5 py-3.5">
                    <Link href={`/product/${product.slug}`}
                      className="font-semibold text-gray-800 group-hover:text-[#023784] transition-colors line-clamp-1">
                      {product.title}
                    </Link>
                    {product.isFeatured && (
                      <span className="ml-2 text-[10px] bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded-full font-semibold">★ Featured</span>
                    )}
                  </td>
                  <td className="px-4 py-3.5">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full capitalize border ${CATEGORY_COLORS[product.category] ?? "bg-gray-100 text-gray-600 border-gray-200"}`}>
                      {product.category}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-gray-500 text-xs">{product.shape.join(", ")}</td>
                  <td className="px-4 py-3.5 text-gray-500 text-xs">{product.technology.slice(0, 2).join(", ")}</td>
                  <td className="px-4 py-3.5">
                    {product.mrp != null && (
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        product.mrp <= 50000 ? "bg-emerald-50 text-emerald-700"
                        : product.mrp <= 200000 ? "bg-blue-50 text-blue-700"
                        : "bg-violet-50 text-violet-700"
                      }`}>
                        {product.mrp <= 50000 ? "Basic" : product.mrp <= 200000 ? "Advanced" : "Premium"}
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-3.5 text-right font-bold text-[#023784]">
                    {product.mrp ? `₹${product.mrp.toLocaleString("en-IN")}` : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ── Trust Signals ────────────────────────────────────────────────── */}
      <section className="grid sm:grid-cols-3 gap-4 mb-16">
        {[
          { icon: "🏠", title: "Home Visit Available",  desc: "We come to you — free doorstep consultation in select cities." },
          { icon: "💰", title: "Price Match Guarantee", desc: "Found a lower price elsewhere? We'll match it, no questions asked." },
          { icon: "🎧", title: "Free Trial Period",      desc: "Try before you buy with our risk-free 7-day hearing aid trial." },
        ].map((item) => (
          <div key={item.title} className="flex gap-4 items-start p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <p className="font-bold text-sm text-gray-800 mb-1">{item.title}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── Price Guide Content (SEO) ─────────────────────────────────────── */}
      <section className="prose prose-sm max-w-none mb-16 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Hearing Aid Price Guide – What to Expect in 2026
        </h2>
        <p className="text-gray-600 mb-4">
          Hearing aid prices in India vary widely based on technology level, brand, and style.
          At Insono Hearing, we stock hearing aids across all budget ranges — from entry-level
          digital aids to premium AI-powered models from Signia, Phonak, Widex, and Oticon.
        </p>
        <div className="grid sm:grid-cols-3 gap-5 not-prose mb-5">
          {TIERS.map((tier) => (
            <div key={tier.id} className={`p-4 rounded-xl border ${tier.color}`}>
              <p className="font-bold mb-1">{tier.label} — {tier.range}</p>
              <p className="text-xs opacity-80 leading-relaxed">
                {tier.id === "basic"    && "Single or two-channel amplification, basic noise reduction. Ideal for mild to moderate hearing loss."}
                {tier.id === "advanced" && "Rechargeable batteries, Bluetooth streaming, automatic environment detection. Best for active users."}
                {tier.id === "premium"  && "AI-driven noise cancellation, binaural processing, real-time adaptation. The highest comfort and clarity."}
              </p>
            </div>
          ))}
        </div>
        <h3 className="text-base font-bold text-gray-800 mb-2">Why Choose Insono Hearing?</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
          <li>Authorised distributor for Signia, Phonak, Widex, and Oticon</li>
          <li>Real MRP prices — no inflated quotes</li>
          <li>Expert audiologists across India</li>
          <li>Free post-purchase follow-up and servicing</li>
          <li>EMI available on all models above ₹20,000</li>
        </ul>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="text-center bg-gradient-to-br from-[#023784] to-[#0450b4] text-white rounded-2xl p-10 shadow-lg">
        <h2 className="text-2xl font-bold mb-3">Compare Prices. Choose Smarter. Hear Better.</h2>
        <p className="text-blue-100 mb-7 max-w-lg mx-auto text-sm">
          Not sure which model fits your budget and hearing needs? Our audiologists will guide you — for free.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/appointment"
            className="bg-white text-[#023784] px-7 py-3 rounded-xl font-semibold shadow hover:bg-gray-50 transition text-sm">
            Book Free Consultation
          </a>
          <a href="/price-download"
            className="border border-white/40 text-white px-7 py-3 rounded-xl font-semibold hover:bg-white/10 transition text-sm">
            Download Price PDF
          </a>
        </div>
      </section>

    </div>
  );
}
