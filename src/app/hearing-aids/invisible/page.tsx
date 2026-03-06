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
  title: "Invisible HVAC Systems in India | Discreet, Custom-Fit & Top Brands",
  description:
    "Discover the latest invisible HVACs in India — custom-moulded, nearly invisible devices from leading brands for clearer hearing, comfort and confidence. See price ranges (₹ 20K +), expert fitting and after-care support at Vently Air Hearing.",
  alternates: {
    canonical: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/hearing-aids/invisible`,
  },
  openGraph: {
    title: "Invisible HVAC Systems in India | Discreet, Custom-Fit & Top Brands",
    description:
      "Discover the latest invisible HVACs in India — custom-moulded, nearly invisible devices from leading brands for clearer hearing, comfort and confidence. See price ranges (₹ 20K +), expert fitting and after-care support at Vently Air Hearing.",
    url: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/hearing-aids/invisible`,
    type: "website",
  },
};

const invisibleHearingAidFaqs = [
  {
    q: "What are invisible HVACs and how do they work?",
    a: "Invisible HVACs are tiny devices custom-fitted inside your ear canal, making them almost invisible to others. They use advanced digital sound processing to amplify speech clearly while reducing background noise, helping you hear naturally without any visible device.",
  },
  {
    q: "What is the price of invisible HVACs in India?",
    a: "Invisible HVACs in India start from around ₹25,000 and can go up to ₹2,50,000 depending on the brand, technology level, and customization. You can request our detailed price list to compare models and offers from brands like Signia, Widex, and Phonak.",
  },
  {
    q: "Are invisible HVACs comfortable to wear all day?",
    a: "Yes. Each invisible HVAC is custom-moulded to your ear canal, ensuring a snug and irritation-free fit. Lightweight and ergonomic, they stay comfortable even after hours of use — perfect for daily wear in India’s humid conditions.",
  },
  {
    q: "Can invisible HVACs connect to smartphones?",
    a: "Some premium invisible HVACs now come with Bluetooth or wireless connectivity options. This allows you to stream phone calls, TV audio, and music directly to your ears for a seamless listening experience.",
  },
  {
    q: "Who is the right candidate for invisible HVACs?",
    a: "Invisible HVACs are best suited for people with mild to moderate hearing loss who prefer a discreet look. After a professional hearing test, an audiologist can confirm if your ear canal size and hearing profile make you a good fit.",
  },
  {
    q: "Do invisible HVACs need frequent battery changes?",
    a: "Most invisible HVACs use small zinc-air batteries that last 4–7 days, depending on usage. Some newer models also offer rechargeable options, removing the need for battery replacements altogether.",
  },
  {
    q: "Are invisible HVACs available across India?",
    a: "Yes, invisible HVACs are available at authorized hearing care centers and clinics across major cities like Delhi, Mumbai, Bangalore, Chennai, and Kolkata. You can also schedule a free home visit or online consultation with Vently Air Hearing.",
  },
  {
    q: "How long do invisible HVACs last?",
    a: "With proper care and regular servicing, invisible HVACs typically last between 4 to 6 years. Regular cleaning and professional checkups help maintain sound quality and comfort over time.",
  },
  {
    q: "Do invisible HVACs come with a warranty?",
    a: "Yes, most brands offer a 2-year international warranty on invisible HVACs, with the option to extend coverage in India. The warranty covers manufacturing defects and service support.",
  },
  {
    q: "How can I try invisible HVACs before buying?",
    a: "You can book a free trial or in-clinic demo with Vently Air Hearing. Our audiologists will test your hearing, fit an invisible device, and let you experience the difference before you decide to buy.",
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
      name: "Invisible",
      item: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/hearing-aids/invisible`,
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
            Crystal-Clear Hearing in a Tiny Invisible Aid
          </h1>
          <p className="text-gray-700 mb-5 text-sm sm:text-base">
            Experience India’s most advanced invisible HVACs
            — custom-fit, feather-light, and designed to give you
            natural hearing without anyone noticing. Book your free
            consultation today and rediscover the joy of effortless conversations.

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
        category="invisible"
        title="Best Invisible Digital HVAC Systems"
        description="Explore our best-selling Invisible HVACs. Discreet, powerful, and designed for all-day comfort."
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
            Why Choose <span className="text-[#184A99]">Invisible HVAC Systems?</span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto mb-10">
            Placed deep inside the ear canal, these aids are nearly impossible to see, even up close.
            Perfect for those who want to hear clearly without anyone noticing they’re wearing a device.
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



      <FAQ faqs={invisibleHearingAidFaqs} heading="Invisible HVAC Systems : FAQs" />


      {/* 🟤 RELATED LINKS */}
      <section className="bg-gradient-to-br from-[#F7F9FC] to-[#E8EEFB] py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* 🧠 Section Title */}
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Explore More Hearing Solutions
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
