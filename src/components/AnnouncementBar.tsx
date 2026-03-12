"use client";

import { useState } from "react";
import { X, Construction } from "lucide-react";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-9 bg-[#023784] flex items-center justify-center px-4">
      <div className="flex items-center gap-2 text-white text-sm font-medium">
        <Construction size={15} className="shrink-0 opacity-90" />
        <span className="hidden sm:inline">New Site Under Construction —</span>
        <span className="sm:hidden">Under Construction —</span>
        <a
          href="https://ventlyair.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 font-bold hover:text-white/80 transition-colors whitespace-nowrap"
        >
          visit ventlyair.com →
        </a>
      </div>

      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss announcement"
        className="absolute right-3 text-white/70 hover:text-white transition-colors"
      >
        <X size={15} />
      </button>
    </div>
  );
}
