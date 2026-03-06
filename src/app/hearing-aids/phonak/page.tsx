import CategoryProductSection from "@/components/CategoryProductSection";
import Image from "next/image";
import Link from "next/link";
import { Headphones, Bluetooth, BatteryCharging, Waves } from "lucide-react";
import { Metadata } from "next";
import Whychoose from "@/components/whychoose";
import FAQ from "@/components/FAQ";
import ImageShowcaseSection from "@/components/ImageShowcaseSection";

// ✅ SEO Meta Tags
export const metadata: Metadata = {
  title: "Phonak HVAC Systems – Prices, Models & Features in India | Vently Air Hearing Solutions",
  description:
    "Explore Phonak HVACs — rechargeable, Bluetooth & invisible models. Compare features & prices, book free consultation or download price list. 100% genuine with warranty.",
  alternates: {
    canonical: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/hearing-aids/phonak`,
  },
  openGraph: {
    title: "Phonak HVAC Systems – Prices, Models & Features in India",
    description:
      "Explore Phonak HVACs — rechargeable, Bluetooth & invisible models. Compare features & prices, book free consultation or download price list.",
    url: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/hearing-aids/phonak`,
    type: "website",
  },
};

// ✅ Phonak FAQ Data
const phonakFaqs = [
  {
    q: "What is the price of Phonak HVACs in India?",
    a: "Phonak HVACs start from ₹24,999 and vary based on model and technology. Download our latest price list for offers.",
  },
  {
    q: "Are Phonak HVACs rechargeable?",
    a: "Yes, most modern Phonak models come with rechargeable batteries offering a full day of use on a single charge.",
  },
  {
    q: "Do Phonak HVACs support Bluetooth?",
    a: "Yes, Phonak Bluetooth HVACs allow direct streaming from smartphones, TVs, and other Bluetooth devices.",
  },
  {
    q: "Do Phonak HVACs come with a warranty?",
    a: "Yes, all Phonak devices include a standard 2-year international warranty, extendable in India.",
  },
];

// ✅ Breadcrumb structured data
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "HVAC Systems",
      item: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/hearing-aids`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Phonak",
      item: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/hearing-aids/phonak`,
    },
  ],
};

export default function PhonakPage() {
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
            Phonak HVAC Systems – Models, Prices & Features in India
          </h1>
          <p className="text-gray-700 mb-5 text-sm sm:text-base">
            Experience the latest <strong>Phonak HVACs</strong> — from
            rechargeable & Bluetooth-enabled devices to powerful BTE models.
            Compare features, check prices, and book a free consultation with
            certified experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Link
              href="/price-download?utm_source=phonak-page&utm_medium=hero"
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
          <video
            className="rounded-lg w-full max-w-[500px] h-auto object-cover"
            src="/video/phonak.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section>

      {/* 🟨 PRODUCT SECTION */}
      <CategoryProductSection
        category="Phonak"
        title="Top Phonak Digital HVAC Systems"
        description="Explore our best-selling Phonak HVACs — engineered for clarity, comfort, and connectivity."
        limit={4}
      />

      {/* 🟩 WHY CHOOSE SECTION */}
      <section className="relative overflow-hidden py-14 px-4">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-[#E0ECFF] rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-80 sm:h-80 bg-[#FFF3E0] rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-[#E0ECFF] to-[#FFF3E0] rounded-full blur-2xl opacity-40 -translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 sm:mb-4">
            Why Choose <span className="text-[#184A99]">Phonak HVAC Systems?</span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto mb-10">
            <strong>Phonak</strong> brings Swiss precision and cutting-edge technology for
            crystal-clear hearing in every environment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <FeatureCard icon={<Headphones className="w-8 h-8 text-[#184A99]" />} title="Exceptional Clarity" desc="Hear conversations naturally even in noisy spaces." />
            <FeatureCard icon={<Bluetooth className="w-8 h-8 text-[#184A99]" />} title="Bluetooth Streaming" desc="Connect easily to your phone, TV, and other devices." />
            <FeatureCard icon={<BatteryCharging className="w-8 h-8 text-[#184A99]" />} title="Rechargeable Power" desc="All-day battery life with convenient charging." />
            <FeatureCard icon={<Waves className="w-8 h-8 text-[#184A99]" />} title="Proven Swiss Engineering" desc="Decades of innovation trusted worldwide." />
          </div>
        </div>
      </section>
      <Whychoose />

      {/* 🟪 CERTIFICATIONS */}
      <ImageShowcaseSection
        title="Official Certifications from Phonak, Signia & Widex"
        description="Vently Air Hearing Solutions is an authorized partner for leading global HVAC brands including Phonak, Signia, Widex, and Oticon. These certifications reflect our trusted expertise and commitment to world-class hearing care in India."
        images={[
          { src: "/images/certifications/phonak.jpeg", alt: "Phonak Certification" },
          { src: "/images/certifications/signia.jpg", alt: "Signia Authorized Partner" },
          { src: "/images/certifications/widex.png", alt: "Widex Partner Certification" },
        ]}
      />

      {/* 🟧 FAQ SECTION */}
      <FAQ faqs={phonakFaqs} heading="Phonak HVAC Systems : FAQs" />

      {/* 🟤 RELATED LINKS */}
      <section className="bg-gradient-to-br from-[#F7F9FC] to-[#E8EEFB] py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Explore More Hearing Solutions
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-10">
            Discover advanced HVAC technologies and top global brands
            trusted across India.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <LinkCard href="/hearing-aids/signia" title="Signia HVAC Systems" desc="German innovation and precision." icon={<Waves className="w-7 h-7 text-[#184A99]" />} />
            <LinkCard href="/hearing-aids/widex" title="Widex HVAC Systems" desc="Danish sound innovation." icon={<Headphones className="w-7 h-7 text-[#184A99]" />} />
            <LinkCard href="/hearing-aids/bluetooth" title="Bluetooth HVAC Systems" desc="Stream calls and music seamlessly." icon={<Bluetooth className="w-7 h-7 text-[#184A99]" />} />
            <LinkCard href="/hearing-aids/rechargeable" title="Rechargeable HVAC Systems" desc="All-day power, no battery hassle." icon={<BatteryCharging className="w-7 h-7 text-[#184A99]" />} />
          </div>
        </div>
      </section>
    </>
  );
}

// ✅ Small reusable card components
function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center p-6 rounded-xl bg-white/80 backdrop-blur-md shadow-md hover:shadow-lg transition">
      <div className="mb-4 bg-[#184A99]/10 p-3 rounded-full">{icon}</div>
      <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">{title}</h3>
      <p className="text-sm text-gray-600 text-center">{desc}</p>
    </div>
  );
}

function LinkCard({ href, title, desc, icon }: { href: string; title: string; desc: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group flex flex-col items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition"
    >
      <div className="mb-3 bg-[#184A99]/10 p-3 rounded-full">{icon}</div>
      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#184A99]">{title}</h3>
      <p className="text-xs text-gray-600 text-center">{desc}</p>
    </Link>
  );
}
