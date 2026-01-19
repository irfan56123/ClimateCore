import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Headphones, MapPin, Phone, Ear, Waves } from "lucide-react";
import { Metadata } from "next";

// FIXED: Capitalized component import
import Lucknow from "@/components/landingHero/dhanbad";

import FAQ from "@/components/FAQ";
import ProductSection from "@/components/ProductSection";
import HearingaidType from "@/components/HearingaidType";
import Whychoose from "@/components/whychoose";
import Testomonial from "@/components/testomonial";
import HearingAidGuide from "@/components/hearingaidsguide";
import Location from "@/components/location";

// ✅ SEO Meta Tags
export const metadata: Metadata = {
  title: "Best Hearing Aid in Dhanbad | Prices, Models & Free Hearing Test",
  description:
    "Looking for the best hearing aid in Dhanbad? Explore digital, Bluetooth & rechargeable hearing aids. Book free hearing test with certified audiologists today.",
  alternates: {
    canonical: "https://insonohearing.com/landing/dhanbad",
  },
  openGraph: {
    title: "Best Hearing Aid in Dhanbad - Free Hearing Test & Consultation",
    description:
      "Discover affordable and advanced hearing aids in dhanbad with expert consultation and same-day fitting.",
    url: "https://insonohearing.com/landing/dhanbad",
    type: "website",
  },
};

const dhanbadFaqs = [
  {
    q: "What is the price of hearing aids in Dhanbad?",
    a: "The price of hearing aids in Dhanbad starts from ₹9,999 and can go up depending on brand, technology, and features like Bluetooth or rechargeability. We offer options for every budget with EMI facilities available.",
  },
  {
    q: "Do you provide free hearing tests in Dhanbad?",
    a: "Yes, we provide 100% free hearing tests and professional consultation at our Dhanbad clinic conducted by certified audiologists using advanced diagnostic equipment.",
  },
  {
    q: "Where is your hearing aid clinic located in Dhanbad?",
    a: "Our hearing aid clinic in Dhanbad is centrally located and easily accessible. You can book an appointment to get the exact location and directions.",
  },
  {
    q: "Which brands of hearing aids are available in your Dhanbad clinic?",
    a: "We provide all premium brands including Signia, Phonak, Widex, Oticon, ReSound, and Starkey at competitive prices in Dhanbad.",
  },
  {
    q: "Are rechargeable hearing aids available in Dhanbad?",
    a: "Yes, we offer advanced rechargeable hearing aids that provide up to 24 hours of usage on a single charge with fast charging support.",
  },
  {
    q: "Do you offer home visits in Dhanbad?",
    a: "Yes, we provide home hearing tests and hearing aid trials across Dhanbad for senior citizens and patients who prefer in-home consultation.",
  },
  {
    q: "Is there a warranty and after-sales support?",
    a: "All hearing aids come with manufacturer warranty along with dedicated after-sales support, servicing and programming assistance at our Dhanbad clinic.",
  },
  {
    q: "How do I book an appointment in Dhanbad?",
    a: "You can book your appointment online, call us directly, or visit our Dhanbad clinic. Our team will assist you with slot availability and consultation details.",
  },
];

export default function HearingAidDhanbadPage() {
  return (
    <>
      {/* 🟦 HERO SECTION */}
      <Lucknow />

      <ProductSection heading="Premium Digital Hearing Aids Available in Dhanbad" />
      <Whychoose />
      {/* <HearingaidType /> */}
      <HearingAidGuide />
      <Location />
      <Testomonial />

      {/* 🟧 FAQ */}
      <FAQ faqs={dhanbadFaqs} heading="Hearing Aid in Dhanbad - FAQs" />

      {/* 🟤 CONTACT */}
      <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm space-y-4 md:space-y-0">
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://youtube.com/@insonohearing"
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

            {/* Review Badges */}
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
                href="https://www.trustpilot.com/review/insonohearing.com"
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

// Utility Cards
function ServiceCard({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="mb-3 bg-[#184A99]/10 p-3 rounded-full">{icon}</div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center p-6 rounded-xl bg-white shadow hover:shadow-lg transition">
      <div className="mb-4 bg-[#184A99]/10 p-3 rounded-full">{icon}</div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 text-center">{desc}</p>
    </div>
  );
}
