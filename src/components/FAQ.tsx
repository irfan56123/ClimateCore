"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  faqs?: FAQItem[];
  heading?: string;
}

const defaultFaqs: FAQItem[] = [
  {
    q: "What HVAC services do you provide?",
    a: "We offer professional installation, repair, and maintenance for furnaces, air conditioners, heat pumps, and ductless mini-split systems.",
  },
  {
    q: "How often should I service my HVAC system?",
    a: "We recommend a professional tune-up at least twice a year—once in the spring for your AC and once in the fall for your heating system.",
  },
  {
    q: "Can I get a free estimate for a new installation?",
    a: "Yes! We offer free, no-obligation estimates for all new HVAC system installations and replacements.",
  },
  {
    q: "Do you offer emergency repair services?",
    a: "Yes, our technicians are available for emergency repairs to ensure your home remains comfortable year-round.",
  },
];

export default function FAQ({ faqs = defaultFaqs, heading }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-r from-[#4b72b5] to-[#023784] py-16 px-4">
      <div className="max-w-4xl w-full text-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          {heading || "FAQs – All You Need to Know"}
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-white/20">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center text-left font-medium text-lg py-4 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-white/70 font-mono text-sm">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="group-hover:text-white transition-colors">
                    {faq.q}
                  </span>
                </div>
                {openIndex === idx ? (
                  <Minus size={20} className="text-white/80" />
                ) : (
                  <Plus size={20} className="text-white/80" />
                )}
              </button>
              <div
                className={`ml-10 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <p className="text-white/80 text-sm leading-relaxed pr-6 pb-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ CTA */}

      </div>
    </section>
  );
}
