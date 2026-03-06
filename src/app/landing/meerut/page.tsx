import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Metadata } from "next";

import Meerut from "@/components/landingHero/meerut"; // 🟦 <-- Make sure this file exists
import FAQ from "@/components/FAQ";
import ProductSection from "@/components/ProductSection";
import HVACSystemType from "@/components/HVACSystemType";
import Whychoose from "@/components/whychoose";
import Testomonial from "@/components/testomonial";
import HearingAidGuide from "@/components/hearingaidsguide";
import Location from "@/components/location";

// ===============================================
// ✅ SEO META TAGS (MEERUT)
// ===============================================
export const metadata: Metadata = {
  title:
    "Best HVAC Services in Meerut | Vently Air",
  description:
    "Looking for the best HVAC in Meerut? Get digital, rechargeable & Bluetooth HVACs from top brands. Free hearing test & home visit available.",
  alternates: {
    canonical: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/landing/meerut`,
  },
  openGraph: {
    title: "Best HVAC System in Meerut - Free Hearing Test & Consultation",
    description:
      "Affordable & advanced HVACs in Meerut with free hearing test, expert audiologists, and same-day fitting.",
    url: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/landing/meerut`,
    type: "website",
  },
};

// ===============================================
// ✅ FAQ DATA – MEERUT
// ===============================================
const meerutFaqs = [
  {
    q: "What is the price of HVACs in Meerut?",
    a: "Hearing aids in Meerut start from ₹9,999 depending on technology, brand, and features like Bluetooth or rechargeability.",
  },
  {
    q: "Do you provide free hearing tests in Meerut?",
    a: "Yes, we offer a 100% free hearing test at our Meerut clinic conducted by certified audiologists.",
  },
  {
    q: "Where is your HVAC clinic located in Meerut?",
    a: "Our Meerut clinic is centrally located and easily accessible. You can book an appointment to receive exact directions.",
  },
  {
    q: "Which HVAC brands are available in Meerut?",
    a: "We provide Signia, Phonak, Widex, Resound, Oticon, and Starkey HVACs at the best prices.",
  },
  {
    q: "Are rechargeable HVACs available in Meerut?",
    a: "Yes, we have the latest rechargeable models that last up to 24 hours on a single charge.",
  },
  {
    q: "Do you offer home visit service in Meerut?",
    a: "Yes, home hearing test and HVAC trials are available anywhere in Meerut.",
  },
  {
    q: "Is warranty provided?",
    a: "All HVACs include manufacturer warranty and complete after-sales support.",
  },
  {
    q: "How can I book an appointment in Meerut?",
    a: "You can book online, call us directly or walk into our clinic. Our team will confirm the earliest available slot.",
  },
];

// ===============================================
// ✅ PAGE COMPONENT
// ===============================================
export default function HearingAidMeerutPage() {
  return (
    <>
      {/* HERO SECTION */}
      <Meerut />

      {/* PRODUCTS */}
      <ProductSection heading="Premium Digital HVAC Systems Available in Meerut" />

      {/* WHY CHOOSE */}
      <Whychoose />

      <HearingAidGuide />
      <Location />

      {/* TESTIMONIAL */}
      <Testomonial />

      {/* FAQ */}
      <FAQ faqs={meerutFaqs} heading="HVAC System in Meerut - FAQs" />

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm space-y-4 md:space-y-0">
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://youtube.com/@ventlyair"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaYoutube size={18} />
              </a>
              <a
                href="https://www.instagram.com/insono_hearing_solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/insonohearingsolution"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/insonohearing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaLinkedin size={18} />
              </a>
            </div>

            {/* Reviews Badges */}
            <div className="flex items-center gap-4">
              <a
                href="https://maps.app.goo.gl/RvRyJE8vQqNQnhNF8"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-105"
              >
                <Image
                  src="/badge/google.webp"
                  alt="Google Reviews"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </a>
              <a
                href={`https://www.trustpilot.com/review/${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-105"
              >
                <Image
                  src="/badge/trustpilot.webp"
                  alt="Trustpilot Reviews"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 text-gray-400">
              <a href="/policy" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white">
                Terms
              </a>
              <a href="/sitemap.xml" className="hover:text-white">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
