"use client";
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className="relative py-24 px-4 overflow-hidden bg-[#020B18]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#184A99] rounded-full blur-[120px] opacity-20 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[100px] opacity-10 translate-y-1/2"></div>

      <div className="max-w-4xl w-full mx-auto relative z-10">
        <div className="text-center mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6"
          >
            <HelpCircle size={14} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-bold tracking-wider uppercase">Common Questions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white leading-tight"
          >
            {heading || "Everything You Need to Know"}
          </motion.h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-transparent mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`group rounded-2xl transition-all duration-300 ${isOpen
                    ? "bg-white/10 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                    : "bg-white/5 border-white/10 hover:bg-white/[0.08]"
                  } border backdrop-blur-sm overflow-hidden`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center text-left py-6 px-6 sm:px-8 group gap-4"
                >
                  <div className="flex items-center gap-5">
                    <span className={`text-xl font-black transition-colors ${isOpen ? "text-blue-400" : "text-white/20"}`}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? "text-white" : "text-white/80 group-hover:text-white"}`}>
                      {faq.q}
                    </span>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-blue-500 text-white rotate-180" : "bg-white/10 text-white/50 group-hover:bg-white/20"
                    }`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-8 pb-8 ml-0 sm:ml-12 border-t border-white/5 pt-4">
                        <p className="text-white/60 text-base md:text-lg leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-white/40 text-sm italic">
            Still have questions? <a href="/contact" className="text-blue-400 hover:underline font-bold not-italic">Get in touch with us →</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
