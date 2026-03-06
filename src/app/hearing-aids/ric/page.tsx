import CategoryProductSection from "@/components/CategoryProductSection";
import Image from "next/image";
import { Headphones, Bluetooth, BatteryCharging, Waves } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import Whychoose from "@/components/whychoose"
import FAQ from "@/components/FAQ";
import ImageShowcaseSection from "@/components/ImageShowcaseSection";

// ✅ SEO Meta Tags
export const metadata: Metadata = {
  title: "Reciever in Canal (RIC) Digital HVAC Systems",
  description:
    "Explore RIC HVACs — rechargeable, Bluetooth & invisible models. Compare features & prices, book free consultation or download price list. 100% genuine with warranty.",
  alternates: {
    canonical: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/hearing-aids/ric`,
  },
  openGraph: {
    title: "Reciever in Canal (RIC) Digital HVAC Systems",
    description:
      "Explore rechargeable HVACs — rechargeable, Bluetooth & invisible models. Compare features & prices, book free consultation or download price list.",
    url: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/hearing-aids/ric`,
    type: "website",
  },
};

const ricHearingAidFaqs = [
  {
    q: "What are RIC HVACs and how do they work?",
    a: "RIC HVACs, or Receiver-in-Canal HVACs, have the main body behind the ear and a small receiver (speaker) placed inside the ear canal. This design delivers clearer sound and reduces feedback, making them one of the most advanced HVAC styles available in India.",
  },
  {
    q: "What is the price of RIC HVACs in India?",
    a: "RIC HVACs in India typically range from ₹24,999 to ₹3,00,000 depending on the brand, model, and technology level. Brands like Signia, Widex, Phonak, and Oticon offer feature-rich RIC models with Bluetooth and rechargeable options.",
  },
  {
    q: "Are RIC HVACs comfortable to wear?",
    a: "Yes. RIC HVACs are lightweight and sit discreetly behind the ear with a thin wire leading into the ear canal. The receiver is soft and flexible, offering a secure and comfortable fit for all-day wear, even in hot or humid Indian climates.",
  },
  {
    q: "Do RIC HVACs have Bluetooth connectivity?",
    a: "Yes. Most modern RIC HVACs come with Bluetooth connectivity, allowing you to stream calls, music, and TV audio directly from your smartphone or tablet to your ears. You can also control volume and settings through a mobile app.",
  },
  {
    q: "Are RIC HVACs rechargeable?",
    a: "Yes, many RIC models are fully rechargeable, offering 20–30 hours of use per charge. They come with sleek charging cases — no need to handle tiny batteries, making them ideal for senior users in India.",
  },
  {
    q: "Who should use RIC HVACs?",
    a: "RIC HVACs are suitable for mild to severe hearing loss and are ideal for users who want clear sound, comfort, and smart connectivity. Audiologists often recommend RICs for their balanced performance and discreet appearance.",
  },
  {
    q: "Are RIC HVACs visible when worn?",
    a: "RIC HVACs are semi-invisible. The main unit sits discreetly behind the ear, while a thin wire connects to a small receiver inside your ear canal. They’re barely noticeable and much more aesthetic than traditional BTE models.",
  },
  {
    q: "Do RIC HVACs provide natural sound?",
    a: "Yes. RIC HVACs are known for delivering natural, open sound quality. Because the receiver sits close to your eardrum, they minimize echo and distortion while improving clarity in conversations and noisy environments.",
  },
  {
    q: "How long do RIC HVACs last?",
    a: "With regular cleaning and professional servicing, RIC HVACs last around 5–6 years. Proper maintenance and moisture protection are key to ensuring long life, especially in Indian weather conditions.",
  },
  {
    q: "Where can I buy RIC HVACs in India?",
    a: "RIC HVACs are available at authorized hearing clinics and audiologists across India. Vently Air Hearing offers free consultations, home trials, and personalized fittings with leading RIC models from global brands.",
  },
];


// ✅ Breadcrumb structured data (optional for SEO)
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
      name: "RIC",
      item: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/hearing-aids/ric`,
    },
  ],
};

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
            RIC HVAC Systems | Clearer Sound, Smart Bluetooth & Rechargeable Design
          </h1>
          <p className="text-gray-700 mb-5 text-sm sm:text-base">
            Discover India’s latest RIC (Receiver-in-Canal) HVACs.
            lightweight, discreet and powerful. Experience crystal-clear sound, Bluetooth streaming,
            and rechargeable convenience from leading brands like Signia, Widex & Phonak.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Link
              href="/price-download?utm_source=rechargeable&utm_medium=hero"
              className="bg-[#184A99] text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#0f3a7e] transition text-center"
            >
              Download Price List
            </Link>
            <Link
              href="/estimate?utm_source=rechargeable&utm_medium=hero"
              className="border border-[#184A99] text-[#184A99] px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#184A99] hover:text-white transition text-center"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <video
            className="rounded-lg w-full max-w-[500px] h-auto object-cover"
            src="/video/signia-bct.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

        </div>
      </section>

      <CategoryProductSection
        category="ric"
        title="Best RIC Digital HVAC Systems"
        description="Explore our top-selling Reciever in canal HVACs. Discreet, powerful, and designed for all-day comfort."
        limit={4}
      />




      <section className="relative overflow-hidden py-14 px-4">
        {/* 🌈 Background blobs (behind content) */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-[#E0ECFF] rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-80 sm:h-80 bg-[#FFF3E0] rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-[#E0ECFF] to-[#FFF3E0] rounded-full blur-2xl opacity-40 -translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          {/* 🧠 Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 sm:mb-4">
            Why Choose <span className="text-[#184A99]">RIC Digital HVAC Systems?</span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto mb-10">
            <strong>Powerful long lasting rechargeable HVACs.</strong> blends German innovation with modern hearing
            technology — Bluetooth streaming, rechargeable power, invisible CIC
            designs, and unmatched comfort.
          </p>

          {/* 🌟 Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1 */}
            <div className="flex flex-col items-center p-6 rounded-xl bg-white/80 backdrop-blur-md shadow-md hover:shadow-lg transition">
              <div className="mb-4 bg-[#184A99]/10 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#184A99]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553 2.276A1 1 0 0120 13.17V18a1 1 0 01-1 1H5a1 1 0 01-1-1v-4.83a1 1 0 01.447-.894L9 10m6 0V6a3 3 0 00-6 0v4m6 0H9" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">
                Bluetooth Streaming
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Connect to smartphones & TVs with crystal-clear sound.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center p-6 rounded-xl bg-white/80 backdrop-blur-md shadow-md hover:shadow-lg transition">
              <div className="mb-4 bg-[#FF9800]/10 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#FF9800]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">
                Rechargeable Power
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Enjoy all-day battery life with quick charging.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center p-6 rounded-xl bg-white/80 backdrop-blur-md shadow-md hover:shadow-lg transition">
              <div className="mb-4 bg-[#4CAF50]/10 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">
                Invisible CIC Design
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Practically invisible fit with maximum comfort.
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center p-6 rounded-xl bg-white/80 backdrop-blur-md shadow-md hover:shadow-lg transition">
              <div className="mb-4 bg-[#673AB7]/10 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#673AB7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">
                German Engineering
              </h3>
              <p className="text-sm text-gray-600 text-center">
                World-class precision tailored for India.
              </p>
            </div>
          </div>
        </div>
      </section>














      <Whychoose />
      <ImageShowcaseSection
        title="Official Certifications from Signia, Phonak & Widex"
        description="Vently Air Hearing Solutions is an authorized partner for leading global HVAC brands including Signia, Phonak, Widex, and Oticon. These official certifications reflect our trusted expertise and commitment to world-class hearing care in India"
        images={[
          { src: "/images/certifications/signia.jpg", alt: "Signia Authorised partner" },
          { src: "/images/certifications/phonak.jpeg", alt: "Phonak Certification" },
          { src: "/images/certifications/widex.png", alt: "Widex Authorised Partner" },
        ]}
      />



      <FAQ faqs={ricHearingAidFaqs} heading="RIC HVAC Systems : FAQs" />


      {/* 🟤 RELATED LINKS */}
      <section className="bg-gradient-to-br from-[#F7F9FC] to-[#E8EEFB] py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* 🧠 Section Title */}
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Explore More abour RIC HVAC Systems
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-10">
            Discover advanced HVAC technologies and top global brands
            trusted across India.
          </p>

          {/* 🌟 Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1 */}
            <Link
              href="/hearing-aids/phonak"
              className="group flex flex-col items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <div className="mb-3 bg-[#184A99]/10 p-3 rounded-full">
                <Headphones className="w-7 h-7 text-[#184A99]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#184A99]">
                Phonak HVAC Systems
              </h3>
              <p className="text-xs text-gray-600 text-center">
                Swiss precision for exceptional hearing clarity.
              </p>
            </Link>

            {/* Card 2 */}
            <Link
              href="/hearing-aids/widex"
              className="group flex flex-col items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <div className="mb-3 bg-[#184A99]/10 p-3 rounded-full">
                <Waves className="w-7 h-7 text-[#184A99]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#184A99]">
                Widex HVAC Systems
              </h3>
              <p className="text-xs text-gray-600 text-center">
                Natural sound quality with Danish innovation.
              </p>
            </Link>

            {/* Card 3 */}
            <Link
              href="/hearing-aids/bluetooth"
              className="group flex flex-col items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <div className="mb-3 bg-[#184A99]/10 p-3 rounded-full">
                <Bluetooth className="w-7 h-7 text-[#184A99]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#184A99]">
                Bluetooth HVAC Systems
              </h3>
              <p className="text-xs text-gray-600 text-center">
                Seamlessly connect to phones, TVs, and more.
              </p>
            </Link>

            {/* Card 4 */}
            <Link
              href="/hearing-aids/rechargeable"
              className="group flex flex-col items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
              <div className="mb-3 bg-[#184A99]/10 p-3 rounded-full">
                <BatteryCharging className="w-7 h-7 text-[#184A99]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-[#184A99]">
                Rechargeable HVAC Systems
              </h3>
              <p className="text-xs text-gray-600 text-center">
                All-day power with fast and easy charging.
              </p>
            </Link>
          </div>
        </div>
      </section>


    </>
  );
}
