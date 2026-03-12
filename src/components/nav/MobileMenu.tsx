"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { NavItem } from "./menuData";

type Props = {
  menu: NavItem[];
  phone?: string;
  logoSrc?: string;
};

export default function MobileMenu({
  menu,
  phone = process.env.NEXT_PUBLIC_PHONE || "+916204260510",
  logoSrc = "/ventlylogo.png",
}: Props) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  // Prevent background scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <>
      {/* Hamburger Button */}
      <button
        aria-label="Open menu"
        className="md:hidden p-2 rounded focus:outline-none"
        onClick={() => setOpen(true)}
      >
        <Menu size={22} className="text-[#023784]" />
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black z-[60] backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed right-0 top-0 h-screen w-[90%] max-w-sm bg-white shadow-2xl z-[70] flex flex-col rounded-l-2xl"
              role="dialog"
              aria-modal="true"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <div className="flex items-center gap-3">
                  <img src={logoSrc} alt="Logo" className="h-8 w-auto" />
                  <div className="h-6 w-px bg-gray-200" />
                  <img src="/MassSave.png" alt="Mass Save" className="h-10 w-auto object-contain" />
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-1 bg-[#f59e0b] text-black font-medium px-3 py-1.5 rounded-md hover:bg-yellow-500 transition text-sm"
                  >
                    <Phone size={16} />
                    Call
                  </a>
                  <button
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    className="p-1 rounded hover:bg-gray-100"
                  >
                    <X size={24} className="text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
                {menu.map((item) => {
                  if (item.children) {
                    const isOpen = expanded === item.label;
                    return (
                      <div
                        key={item.label}
                        className="border border-gray-100 rounded-xl overflow-hidden"
                      >
                        <button
                          className="w-full flex justify-between items-center px-4 py-3.5 bg-gray-50/50 hover:bg-gray-100 transition-colors"
                          onClick={() => setExpanded(isOpen ? null : item.label)}
                        >
                          <span className="font-semibold text-gray-800">
                            {item.label}
                          </span>
                          <ChevronDown
                            size={18}
                            className={`transition-transform text-gray-500 ${isOpen ? "rotate-180" : ""}`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.ul
                              key="list"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-white"
                            >
                              {item.children.map((subItem) => (
                                <div key={subItem.label} className="border-t border-gray-50">
                                  {subItem.children ? (
                                    <div className="py-2">
                                      <div className="px-6 py-1 text-sm font-bold text-gray-800">
                                        {subItem.label}
                                      </div>
                                      <ul className="mt-1">
                                        {subItem.children.map((child) => (
                                          <li key={child.label}>
                                            <Link
                                              href={child.url!}
                                              onClick={() => setOpen(false)}
                                              className="block px-8 py-2 text-gray-600 hover:bg-gray-50 text-[14px]"
                                            >
                                              {child.label}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ) : (
                                    <Link
                                      href={subItem.url!}
                                      onClick={() => setOpen(false)}
                                      className="block px-6 py-3 text-gray-600 hover:bg-gray-50 text-[15px]"
                                    >
                                      {subItem.label}
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      href={item.url!}
                      onClick={() => setOpen(false)}
                      className="block text-[16px] font-semibold py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors text-gray-800"
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              {/* Bottom Bar */}
              <div className="px-5 py-6 border-t bg-gray-50/50 text-center">
                <p className="text-xs text-gray-500 font-medium">
                  © {new Date().getFullYear()} Vently Air
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
