"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  X,
  Wind,
  Flame,
  Thermometer,
  ShieldCheck,
  Sun,
  FlaskConical,
  Sparkles,
  Info,
  Phone,
  FileQuestionMark,
  Star,
  CalendarCheck,
  Home,
  ChevronRight,
  Droplets,
  Snowflake,
  Wrench,
  Zap,
  Waves,
  Cpu,
} from "lucide-react";

type SearchItem = {
  label: string;
  url: string;
  category: string;
  icon: React.ElementType;
  description?: string;
};

const ALL_PAGES: SearchItem[] = [
  // Services
  { label: "Air Duct Cleaning", url: "/services/duct-cleaning", category: "Services", icon: Wind, description: "Professional duct cleaning & sanitizing" },
  { label: "Dryer Vent Service", url: "/services/dryer-vent", category: "Services", icon: Flame, description: "Prevent fires with dryer vent cleaning" },
  { label: "Furnace, Coil & Blower Fan", url: "/services/furnace", category: "Services", icon: Thermometer, description: "Furnace tune-up & coil cleaning" },
  { label: "Chimney Cleaning", url: "/services/chimney-cleaning", category: "Services", icon: Flame, description: "Safe chimney sweep & inspection" },
  { label: "UV Light Installation", url: "/services/uv-light-installation", category: "Services", icon: Sun, description: "Kill bacteria & mold with UV light" },
  { label: "Air Quality Test", url: "/services/air-quality-test", category: "Services", icon: FlaskConical, description: "Indoor air quality testing & report" },
  { label: "Sanitation", url: "/services/sanitation", category: "Services", icon: Sparkles, description: "Full HVAC system sanitization" },
  { label: "Air Purification System", url: "/services/air-purification", category: "Services", icon: Wind, description: "Whole-home air purification systems" },
  { label: "Whole House Humidification", url: "/services/whole-house-humidification", category: "Services", icon: Droplets, description: "Whole-house humidity control" },
  { label: "Heating System Installation", url: "/services/heating-system-installation", category: "Services", icon: Thermometer, description: "New heating system installation" },
  { label: "Heating System Maintenance", url: "/services/heating-system-maintenance", category: "Services", icon: Wrench, description: "Annual heating maintenance & tune-up" },
  { label: "Emergency Heating Service", url: "/services/emergency-heating-service", category: "Services", icon: Zap, description: "24/7 emergency heating repair" },
  { label: "Hydro Air Systems", url: "/services/hydro-air-systems", category: "Services", icon: Waves, description: "Hydro air heating & cooling systems" },
  { label: "Air Conditioning Installation", url: "/services/ac-installation", category: "Services", icon: Snowflake, description: "New AC system installation" },
  { label: "Air Conditioning Maintenance", url: "/services/ac-maintenance", category: "Services", icon: Wrench, description: "Annual AC tune-up & maintenance" },
  { label: "Air Conditioning Service & Repair", url: "/services/ac-service", category: "Services", icon: Snowflake, description: "AC repair & service" },
  { label: "Ductless Split Systems", url: "/services/ductless-split-systems", category: "Services", icon: Snowflake, description: "Mini-split & ductless AC systems" },
  { label: "Home Automation & Smart Thermostats", url: "/services/smart-thermostats", category: "Services", icon: Cpu, description: "Smart home climate control" },
  { label: "All Services", url: "/services", category: "Services", icon: ShieldCheck, description: "Browse all our HVAC services" },
  // Pages
  { label: "Home", url: "/", category: "Pages", icon: Home, description: "Vently Air homepage" },
  { label: "About Us", url: "/about-us", category: "Pages", icon: Info, description: "Our story & team" },
  { label: "Contact", url: "/contact", category: "Pages", icon: Phone, description: "Get in touch with us" },
  { label: "FAQ", url: "/faq", category: "Pages", icon: FileQuestionMark, description: "Frequently asked questions" },
  { label: "Reviews", url: "/reviews", category: "Pages", icon: Star, description: "Customer reviews & testimonials" },
  { label: "Get Estimate", url: "/estimate", category: "Pages", icon: CalendarCheck, description: "Request a free quote" },
  { label: "Book Appointment", url: "/appointment", category: "Pages", icon: CalendarCheck, description: "Schedule a service appointment" },
];

const CATEGORIES = ["Services", "Pages"];

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const filtered = query.trim()
    ? ALL_PAGES.filter(
        (p) =>
          p.label.toLowerCase().includes(query.toLowerCase()) ||
          p.description?.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const flatFiltered = filtered;

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, flatFiltered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && flatFiltered[activeIndex]) {
        router.push(flatFiltered[activeIndex].url);
        setOpen(false);
        setQuery("");
      }
    } else if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
  };

  const highlight = (text: string) => {
    if (!query.trim()) return text;
    const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-[#023784]/10 text-[#023784] font-semibold not-italic rounded px-0.5">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const handleSelect = () => {
    setOpen(false);
    setQuery("");
    setActiveIndex(-1);
  };

  const groupedFiltered = CATEGORIES.map((cat) => ({
    category: cat,
    items: filtered.filter((p) => p.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <div ref={containerRef} className="relative w-64">
      {/* Input */}
      <div className="relative flex items-center">
        <Search className="absolute left-3 text-gray-400 pointer-events-none" size={15} />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setActiveIndex(-1);
          }}
          onFocus={() => query && setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search pages & services..."
          className="w-full pl-9 pr-8 py-2.5 border border-gray-200 rounded-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#023784]/30 focus:border-[#023784] focus:outline-none text-sm transition-all shadow-sm"
        />
        {query && (
          <button
            onClick={() => { setQuery(""); setOpen(false); inputRef.current?.focus(); }}
            className="absolute right-3 text-gray-400 hover:text-gray-600 transition"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {open && query.trim() && (
        <div className="absolute top-full mt-2 w-[340px] -right-0 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[9999]">
          {groupedFiltered.length > 0 ? (
            <>
              {groupedFiltered.map(({ category, items }) => {
                const catStartIndex = filtered.indexOf(items[0]);
                return (
                  <div key={category}>
                    {/* Category header */}
                    <div className="px-4 pt-3 pb-1 flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{category}</span>
                      <div className="flex-1 h-px bg-gray-100" />
                    </div>
                    {items.map((item, localI) => {
                      const globalI = catStartIndex + localI;
                      const Icon = item.icon;
                      const isActive = activeIndex === globalI;
                      return (
                        <button
                          key={item.url}
                          onClick={() => { router.push(item.url); handleSelect(); }}
                          onMouseEnter={() => setActiveIndex(globalI)}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 transition-colors group text-left ${
                            isActive ? "bg-[#023784]/5" : "hover:bg-gray-50"
                          }`}
                        >
                          <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                            isActive ? "bg-[#023784] text-white" : "bg-gray-100 text-gray-500 group-hover:bg-[#023784]/10 group-hover:text-[#023784]"
                          }`}>
                            <Icon size={15} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-medium truncate ${isActive ? "text-[#023784]" : "text-gray-800"}`}>
                              {highlight(item.label)}
                            </p>
                            {item.description && (
                              <p className="text-xs text-gray-400 truncate mt-0.5">{item.description}</p>
                            )}
                          </div>
                          <ChevronRight size={14} className={`flex-shrink-0 transition-opacity ${isActive ? "opacity-100 text-[#023784]" : "opacity-0 group-hover:opacity-40"}`} />
                        </button>
                      );
                    })}
                  </div>
                );
              })}
              {/* Footer hint */}
              <div className="px-4 py-2.5 border-t border-gray-100 flex items-center gap-3 text-[11px] text-gray-400">
                <span className="flex items-center gap-1">
                  <kbd className="bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded text-[10px] font-mono">↑↓</kbd> navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded text-[10px] font-mono">↵</kbd> open
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded text-[10px] font-mono">Esc</kbd> close
                </span>
              </div>
            </>
          ) : (
            <div className="px-6 py-8 text-center">
              <Search className="mx-auto mb-3 text-gray-300" size={28} />
              <p className="text-sm font-medium text-gray-500">No results for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-gray-400 mt-1">Try searching for a service or page name</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
