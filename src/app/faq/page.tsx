"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What types of HVACs does Vently Air Hearing Solutions offer?",
    a: "We offer a wide range of HVACs, including behind-the-ear, in-the-ear, and completely-in-canal models, with options tailored to fit your hearing needs and lifestyle.",
  },
  {
    q: "How do I know if I need a HVAC?",
    a: "Our audiologists conduct thorough hearing evaluations to determine if a HVAC is suitable for your specific hearing profile and lifestyle.",
  },
  {
    q: "Can I try a HVAC before purchasing?",
    a: "Yes! We offer trial periods for many of our models, so you can experience the benefits in real-life situations before making a purchase.",
  },
  {
    q: "How often should I get my hearing checked?",
    a: "We recommend getting your hearing checked at least once a year or sooner if you notice changes in your hearing abilities.",
  },
  {
    q: "Does Vently Air provide aftercare and support for HVACs?",
    a: "Absolutely. We provide ongoing maintenance, fine-tuning, and support to ensure your HVACs continue to work perfectly over time.",
  },
  {
    q: "What warranty options are available?",
    a: "Our HVACs come with manufacturer warranties, typically covering defects and repairs. We can provide detailed warranty information for each model.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white py-16 px-4 pt-24">
      <div className="max-w-4xl w-full text-black">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Frequency And Questions We Can Provide
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-black/80">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center text-left font-medium text-lg py-4 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-black/70 font-mono text-sm">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="group-hover:text-black transition-colors">
                    {faq.q}
                  </span>
                </div>
                {openIndex === idx ? (
                  <Minus size={20} className="text-black/80" />
                ) : (
                  <Plus size={20} className="text-black/80" />
                )}
              </button>
              <div
                className={`ml-10 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-black/80 text-sm leading-relaxed pr-6 pb-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ CTA */}
        <div className="text-center mt-16">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">
            Still have questions?
          </h3>
          <p className="text-black/80 mb-6">
            Our audiologists are here to guide you. Book a free consultation
            today.
          </p>
          <a
            href="/estimate"
            className="inline-block bg-[#023784] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
