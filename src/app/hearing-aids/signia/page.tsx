import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { Headphones, Bluetooth, BatteryCharging, Waves } from "lucide-react";
import type { Metadata } from "next";

import CategoryProductSection from "@/components/CategoryProductSection";
import Whychoose from "@/components/whychoose";
import FAQ from "@/components/FAQ";
import ImageShowcaseSection from "@/components/ImageShowcaseSection";

// ✅ Enable ISR to cache page and avoid refetching every time
export const revalidate = 60;

// ✅ SEO Meta
export const metadata: Metadata = {
  title: "Signia HVAC Systems – Prices, Models & Features in India",
  description:
    "Explore Signia HVACs — rechargeable, Bluetooth & invisible models. Compare features & prices, book free consultation or download price list. 100% genuine with warranty.",
  alternates: {
    canonical: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/hearing-aids/signia`,
  },
  openGraph: {
    title: "Signia HVAC Systems – Prices, Models & Features in India",
    description:
      "Explore Signia HVACs — rechargeable, Bluetooth & invisible models. Compare features & prices, book free consultation or download price list.",
    url: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/hearing-aids/signia`,
    type: "website",
  },
};

// ✅ Breadcrumb JSON-LD
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}` },
    { "@type": "ListItem", position: 2, name: "HVAC Systems", item: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/hearing-aids` },
    { "@type": "ListItem", position: 3, name: "Signia", item: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/hearing-aids/signia` },
  ],
};

const signiaFaqs = [
  { q: "What is the price of Signia HVACs in India?", a: "Prices start from ₹19,999 and vary depending on model and features. Download our price list for the latest offers." },
  { q: "Are Signia HVACs rechargeable?", a: "Yes, most modern Signia models offer rechargeable options with all-day battery life." },
  { q: "Can I connect Signia HVACs to my phone?", a: "Yes, Signia Bluetooth HVACs allow direct streaming to smartphones and TVs." },
  { q: "Do Signia HVACs come with a warranty?", a: "Yes, all Signia devices include a 2-year international warranty, extendable in India." },
];

// 🦴 Skeleton Loader for Product Grid
function ProductSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-pulse mt-10">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-white border rounded-lg p-4">
          <div className="h-32 bg-gray-200 rounded mb-3"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-1"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
}

export default function SigniaPage() {
  return (
    <>
      {/* ✅ Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 🟦 HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 mt-30 md:px-20 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug mb-3">
            Signia HVAC Systems – Models, Prices & Features in India
          </h1>
          <p className="text-gray-700 mb-5 text-sm sm:text-base">
            Discover the full range of <strong>Signia HVACs</strong> — from rechargeable & Bluetooth-enabled devices to invisible CIC models. Compare features, check prices, and book a free consultation with certified experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Link
              href="/price-download?utm_source=signia-page&utm_medium=hero"
              className="bg-[#184A99] text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#0f3a7e] transition text-center"
            >
              Download Price List
            </Link>
            <Link
              href="/estimate"
              className="border border-[#184A99] text-[#184A99] px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#184A99] hover:text-white transition text-center"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          {/* ⚡ Optimized video loading */}
          <video
            className="rounded-lg w-full max-w-[500px] h-auto object-cover"
            src="/video/signia-bct.mp4"
            preload="none"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/signia-poster.jpg" // optional: add poster image
          />
        </div>
      </section>

      {/* 🛍️ PRODUCT SECTION — SUSPENSE + SKELETON */}
      <Suspense fallback={<ProductSkeleton />}>
        <CategoryProductSection
          category="Signia"
          title="Best Signia Digital HVAC Systems"
          description="Explore our top-selling Signia HVACs. Discreet, powerful, and designed for all-day comfort."
          limit={4}
        />
      </Suspense>

      {/* 🌈 WHY CHOOSE SECTION */}
      <section className="relative overflow-hidden py-14 px-4">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-[#E0ECFF] rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-80 sm:h-80 bg-[#FFF3E0] rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-[#E0ECFF] to-[#FFF3E0] rounded-full blur-2xl opacity-40 -translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 sm:mb-4">
            Why Choose <span className="text-[#184A99]">Signia HVAC Systems?</span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto mb-10">
            <strong>Signia</strong> blends German innovation with modern hearing technology — Bluetooth streaming, rechargeable power, invisible CIC designs, and unmatched comfort.
          </p>
          <Whychoose />
        </div>
      </section>

      <ImageShowcaseSection
        title="Official Certifications from Signia, Phonak & Widex"
        description="Vently Air Hearing Solutions is an authorized partner for leading global HVAC brands including Signia, Phonak, Widex, and Oticon. These official certifications reflect our trusted expertise and commitment to world-class hearing care in India."
        images={[
          { src: "/images/certifications/signia.jpg", alt: "Signia Authorised partner" },
          { src: "/images/certifications/phonak.jpeg", alt: "Phonak Certification" },
          { src: "/images/certifications/widex.png", alt: "Widex Authorised Partner" },
        ]}
      />

      <FAQ faqs={signiaFaqs} heading="Signia HVAC Systems : FAQs" />

      {/* 🟤 RELATED LINKS */}
      <section className="bg-gradient-to-br from-[#F7F9FC] to-[#E8EEFB] py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Explore More Hearing Solutions
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-10">
            Discover advanced HVAC technologies and top global brands trusted across India.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Link href="/hearing-aids/phonak" className="group flex flex-col items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition">
              <div className="mb-3 bg-[#184A99]/10 p-3 rounded-full"><Headphones className="w-7 h-7 text-[#184A99]" /></div>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#184A99]">Phonak HVAC Systems</h3>
              <p className="text-xs text-gray-600 text-center">Swiss precision for exceptional hearing clarity.</p>
            </Link>

            <Link href="/hearing-aids/widex" className="group flex flex-col items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition">
              <div className="mb-3 bg-[#184A99]/10 p-3 rounded-full"><Waves className="w-7 h-7 text-[#184A99]" /></div>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#184A99]">Widex HVAC Systems</h3>
              <p className="text-xs text-gray-600 text-center">Natural sound quality with Danish innovation.</p>
            </Link>

            <Link href="/hearing-aids/bluetooth" className="group flex flex-col items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition">
              <div className="mb-3 bg-[#184A99]/10 p-3 rounded-full"><Bluetooth className="w-7 h-7 text-[#184A99]" /></div>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#184A99]">Bluetooth HVAC Systems</h3>
              <p className="text-xs text-gray-600 text-center">Seamlessly connect to phones, TVs, and more.</p>
            </Link>

            <Link href="/hearing-aids/rechargeable" className="group flex flex-col items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition">
              <div className="mb-3 bg-[#184A99]/10 p-3 rounded-full"><BatteryCharging className="w-7 h-7 text-[#184A99]" /></div>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#184A99]">Rechargeable HVAC Systems</h3>
              <p className="text-xs text-gray-600 text-center">All-day power with fast and easy charging.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
