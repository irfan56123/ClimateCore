import CategoryProductSection from "@/components/CategoryProductSection";
import Link from "next/link";
import Image from "next/image";
import { Headphones, Bluetooth, BatteryCharging, Waves } from "lucide-react";
import { Metadata } from "next";
import FAQ from "@/components/FAQ";
import ImageShowcaseSection from "@/components/ImageShowcaseSection";
import Whychoose from "@/components/whychoose";

// ✅ SEO Meta Tags
export const metadata: Metadata = {
  title: "Oticon HVAC Systems – Models, Prices & Features in India | Vently Air Hearing Solutions",
  description:
    "Explore Oticon HVACs — known for BrainHearing™ technology, rechargeable models, and Bluetooth connectivity. View prices, models & book a free consultation.",
  alternates: {
    canonical: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/hearing-aids/oticon`,
  },
  openGraph: {
    title: "Oticon HVAC Systems – Models, Prices & Features in India",
    description:
      "Discover Oticon HVACs — BrainHearing™ technology, Bluetooth streaming, and rechargeable models. Compare features and prices in India.",
    url: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/hearing-aids/oticon`,
    type: "website",
  },
};

// ✅ Oticon FAQ Data
const oticonFaqs = [
  {
    q: "What is the price of Oticon HVACs in India?",
    a: "Oticon HVACs start from ₹27,999, depending on the model and features. Download our price list for the latest offers and discounts.",
  },
  {
    q: "What is Oticon BrainHearing™ technology?",
    a: "BrainHearing™ is Oticon's unique technology that supports how the brain makes sense of sound, delivering more natural hearing and reduced listening effort.",
  },
  {
    q: "Are Oticon HVACs rechargeable?",
    a: "Yes, Oticon offers advanced rechargeable HVACs with full-day battery life and quick charging options.",
  },
  {
    q: "Do Oticon HVACs support Bluetooth?",
    a: "Yes, Oticon Bluetooth HVACs let you connect directly to smartphones, TVs, and other devices for wireless audio streaming.",
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
      name: "Oticon",
      item: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/hearing-aids/oticon`,
    },
  ],
};

export default function OticonPage() {
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
            Oticon HVAC Systems – Models, Prices & Features in India
          </h1>
          <p className="text-gray-700 mb-5 text-sm sm:text-base">
            <strong>Oticon HVACs</strong> use BrainHearing™ technology to
            support how your brain processes sound — delivering a more natural,
            effortless listening experience. Explore rechargeable and Bluetooth
            models designed for modern lifestyles.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Link
              href="/price-download?utm_source=oticon-page&utm_medium=hero"
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
          <Image
            src="/hero/oticon.jpg"
            alt="Oticon HVAC Systems"
            width={500}
            height={400}
            className="rounded-lg w-full max-w-[500px] h-auto object-cover"
            priority
          />
        </div>
      </section>

      {/* 🟨 PRODUCT SECTION */}
      <CategoryProductSection
        category="Oticon"
        title="Top Oticon Digital HVAC Systems"
        description="Explore our range of Oticon HVACs featuring BrainHearing™ technology, Bluetooth connectivity, and all-day rechargeable power."
        limit={4}
      />

      {/* 🟩 WHY CHOOSE SECTION */}
      <section className="relative overflow-hidden py-14 px-4">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-[#E0ECFF] rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-80 sm:h-80 bg-[#FFF3E0] rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-[#E0ECFF] to-[#FFF3E0] rounded-full blur-2xl opacity-40 -translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 sm:mb-4">
            Why Choose <span className="text-[#184A99]">Oticon HVAC Systems?</span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto mb-10">
            <strong>Oticon</strong> brings advanced BrainHearing™ technology, elegant Danish design, and seamless Bluetooth connectivity together for exceptional hearing experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <FeatureCard icon={<Waves className="w-8 h-8 text-[#184A99]" />} title="BrainHearing™ Tech" desc="Supports how the brain processes sound naturally." />
            <FeatureCard icon={<Bluetooth className="w-8 h-8 text-[#184A99]" />} title="Bluetooth Streaming" desc="Connect easily to phones, TVs, and more." />
            <FeatureCard icon={<BatteryCharging className="w-8 h-8 text-[#184A99]" />} title="Rechargeable Models" desc="All-day battery life with quick charging." />
            <FeatureCard icon={<Headphones className="w-8 h-8 text-[#184A99]" />} title="Danish Precision" desc="Elegant design built for clarity and comfort." />
          </div>
        </div>
      </section>
      <Whychoose />
      {/* 🟪 CERTIFICATIONS */}
      <ImageShowcaseSection
        title="Official Certifications from Oticon, Signia, Widex & Phonak"
        description="Vently Air Hearing Solutions is an authorized partner for Oticon, Signia, Widex, and Phonak. Our certifications validate our trusted expertise in delivering world-class hearing care in India."
        images={[
          { src: "/images/certifications/phonak.jpeg", alt: "Oticon Certification" },
          { src: "/images/certifications/signia.jpg", alt: "Signia Certification" },
          { src: "/images/certifications/widex.png", alt: "Widex Certification" },
        ]}
      />

      {/* 🟧 FAQ SECTION */}
      <FAQ faqs={oticonFaqs} heading="Oticon HVAC Systems : FAQs" />

      {/* 🟤 RELATED LINKS */}
      <section className="bg-gradient-to-br from-[#F7F9FC] to-[#E8EEFB] py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Explore More Hearing Solutions
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-10">
            Compare other leading global brands and advanced hearing technologies.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <LinkCard href="/hearing-aids/signia" title="Signia HVAC Systems" desc="German innovation and precision." icon={<Waves className="w-7 h-7 text-[#184A99]" />} />
            <LinkCard href="/hearing-aids/phonak" title="Phonak HVAC Systems" desc="Swiss precision for clarity." icon={<Headphones className="w-7 h-7 text-[#184A99]" />} />
            <LinkCard href="/hearing-aids/widex" title="Widex HVAC Systems" desc="Natural Danish sound innovation." icon={<Waves className="w-7 h-7 text-[#184A99]" />} />
            <LinkCard href="/hearing-aids/bluetooth" title="Bluetooth HVAC Systems" desc="Seamless wireless connectivity." icon={<Bluetooth className="w-7 h-7 text-[#184A99]" />} />
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
