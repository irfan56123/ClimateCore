"use client";

import { useRouter } from "next/navigation";
import {
  BRANDS, SHAPES, TECHNOLOGIES, PRICE_RANGES,
  type ActiveFilters,
} from "./constants";

export type { ActiveFilters };

export function buildPath(f: ActiveFilters): string {
  const parts: string[] = [];
  if (f.brand)      parts.push(f.brand);
  if (f.shape)      parts.push(f.shape);
  if (f.technology) parts.push(f.technology);
  if (f.priceSlug)  parts.push(f.priceSlug);
  return parts.length ? `/all-hearing-aids/${parts.join("/")}` : "/all-hearing-aids";
}

export default function FilterPanel({ active }: { active: ActiveFilters }) {
  const router = useRouter();

  function toggle(key: keyof ActiveFilters, value: string) {
    const next = { ...active };
    if (next[key] === value) delete next[key];
    else next[key] = value;
    router.push(buildPath(next));
  }

  const base = "px-3 py-1.5 rounded-full text-xs font-medium border transition-all";
  const on   = "bg-[#023784] text-white border-[#023784] shadow-sm";
  const off  = "bg-white text-gray-600 border-gray-200 hover:border-[#023784] hover:text-[#023784]";

  const hasActive = Object.values(active).some(Boolean);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-8 space-y-4">
      {/* Brand */}
      <div>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Brand</p>
        <div className="flex flex-wrap gap-2">
          {BRANDS.map((b) => (
            <button key={b} onClick={() => toggle("brand", b)}
              className={`${base} capitalize ${active.brand === b ? on : off}`}>
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Shape */}
      <div>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Style / Shape</p>
        <div className="flex flex-wrap gap-2">
          {SHAPES.map((s) => (
            <button key={s} onClick={() => toggle("shape", s)}
              className={`${base} uppercase ${active.shape === s ? on : off}`}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Technology */}
      <div>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Technology</p>
        <div className="flex flex-wrap gap-2">
          {TECHNOLOGIES.map((t) => (
            <button key={t} onClick={() => toggle("technology", t)}
              className={`${base} capitalize ${active.technology === t ? on : off}`}>
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Price Range</p>
        <div className="flex flex-wrap gap-2">
          {PRICE_RANGES.map((p) => (
            <button key={p.slug} onClick={() => toggle("priceSlug", p.slug)}
              className={`${base} ${active.priceSlug === p.slug ? on : off}`}>
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {hasActive && (
        <button onClick={() => router.push("/all-hearing-aids")}
          className="text-xs text-red-500 hover:text-red-700 font-medium">
          × Clear all filters
        </button>
      )}
    </div>
  );
}
