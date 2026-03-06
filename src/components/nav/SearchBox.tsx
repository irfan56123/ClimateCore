"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

const products = [
  { name: "Furnace Installation", slug: "/heating/furnace-installation" },
  { name: "AC Repair", slug: "/air-conditioning/ac-repair" },
  { name: "Heat Pump Systems", slug: "/heating/heat-pump-installation" },
  { name: "Ductless Mini-Splits", slug: "/air-conditioning/mini-split-installation" },
  { name: "Duct Cleaning", slug: "/air-quality/air-duct-cleaning" },
];

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => Math.min(prev + 1, filtered.length - 1));
    }
    if (e.key === "ArrowUp") {
      setActiveIndex((prev) => Math.max(prev - 1, -1));
    }
    if (e.key === "Enter" && activeIndex >= 0) {
      window.location.href = filtered[activeIndex].slug;
    }
  };

  const highlightText = (text: string) => {
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className="font-semibold text-[#023784]">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="relative w-64">
      <Search className="absolute left-3 top-3 text-gray-400" size={16} />

      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setActiveIndex(-1);
        }}
        onKeyDown={handleKeyDown}
        placeholder="Search HVAC services..."
        className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#023784] focus:outline-none text-sm shadow-sm"
      />

      {query && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-xl border max-h-64 overflow-y-auto z-50">
          {filtered.length ? (
            filtered.map((item, i) => (
              <Link
                key={i}
                href={item.slug}
                className={`block px-4 py-3 text-sm transition ${activeIndex === i
                    ? "bg-[#023784]/10 text-[#023784]"
                    : "hover:bg-gray-100"
                  }`}
                onMouseEnter={() => setActiveIndex(i)}
              >
                {highlightText(item.name)}
              </Link>
            ))
          ) : (
            <p className="px-4 py-3 text-sm text-gray-500">No results found</p>
          )}
        </div>
      )}
    </div>
  );
}
