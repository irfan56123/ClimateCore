import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Headphones, MapPin, Phone, Ear, Waves } from "lucide-react";
import { Metadata } from "next";
import Lucknow from "@/components/landingHero/lucknow";
import FAQ from "@/components/FAQ";
import ProductSection from "@/components/ProductSection";
import HVACSystemType from "@/components/HVACSystemType";
import Whychoose from "@/components/whychoose";
import Testomonial from "@/components/testomonial";
import HearingAidGuide from "@/components/hearingaidsguide";
import Location from "@/components/location";
// ✅ SEO Meta Tags
export const metadata: Metadata = {
  title: "Best HVAC Services in Lucknow | Vently Air",
  description:
    "Looking for the best HVAC in Lucknow? Explore digital, Bluetooth & rechargeable HVACs. Book free hearing test with certified audiologists today.",
  alternates: {
    canonical: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/landing/lucknow`,
  },
  openGraph: {
    title: "Best HVAC System in Lucknow - Free Hearing Test & Consultation",
    description:
      "Discover affordable and advanced HVACs in Lucknow with expert consultation and same-day fitting.",
    url: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/landing/lucknow`,
    type: "website",
  },
};

const lucknowFaqs = [
  {
    q: "What is the price of HVACs in Lucknow?",
    a: "The price of HVACs in Lucknow starts from ₹9,999 and can go up depending on brand, technology, and features like Bluetooth or rechargeability. We offer options for every budget with EMI facilities available.",
  },
  {
    q: "Do you provide free hearing tests in Lucknow?",
    a: "Yes, we provide 100% free hearing tests and professional consultation at our Lucknow clinic conducted by certified audiologists using advanced diagnostic equipment.",
  },
  {
    q: "Where is your HVAC clinic located in Lucknow?",
    a: "Our HVAC clinic in Lucknow is centrally located and easily accessible. You can book an appointment to get the exact location and directions.",
  },
  {
    q: "Which brands of HVACs are available in your Lucknow clinic?",
    a: "We provide all premium brands including Signia, Phonak, Widex, Oticon, ReSound, and Starkey at competitive prices in Lucknow.",
  },
  {
    q: "Are rechargeable HVACs available in Lucknow?",
    a: "Yes, we offer advanced rechargeable HVACs that provide up to 24 hours of usage on a single charge with fast charging support.",
  },
  {
    q: "Do you offer home visits in Lucknow?",
    a: "Yes, we provide home hearing tests and HVAC trials across Lucknow for senior citizens and patients who prefer in-home consultation.",
  },
  {
    q: "Is there a warranty and after-sales support?",
    a: "All HVACs come with manufacturer warranty along with dedicated after-sales support, servicing and programming assistance at our Lucknow clinic.",
  },
  {
    q: "How do I book an appointment in Lucknow?",
    a: "You can book your appointment online, call us directly, or visit our Lucknow clinic. Our team will assist you with slot availability and consultation details.",
  },
];

export default function HearingAidLucknowPage() {
  return (
    <>
      {/* 🟦 HERO SECTION */}
      <Lucknow />
      <ProductSection heading="Premium Digital HVAC Systems Available in Lucknow" />
      <Whychoose />
      {/* <HearingaidType /> */}
      <HearingAidGuide />
      <Location />
      <Testomonial />

      {/* 🟨 SERVICES */}
      {/* <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-10">
            Our HVAC System Services in Lucknow
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <ServiceCard
              icon={<Ear className="w-7 h-7 text-[#184A99]" />}
              title="Free Hearing Test"
            />
            <ServiceCard
              icon={<Headphones className="w-7 h-7 text-[#184A99]" />}
              title="Digital HVAC Systems"
            />
            <ServiceCard
              icon={<Waves className="w-7 h-7 text-[#184A99]" />}
              title="Invisible Models"
            />
            <ServiceCard
              icon={<Phone className="w-7 h-7 text-[#184A99]" />}
              title="Home Visit"
            />
          </div>
        </div>
      </section> */}
      {/* 🟧 FAQ */}
      <FAQ faqs={lucknowFaqs} heading="HVAC System in Lucknow - FAQs" />

      {/* 🟤 CONTACT */}
      <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* 🌟 Bottom Bar */}
          <div className="  border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm space-y-4 md:space-y-0">
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

            {/* ✅ Google & Trustpilot Reviews Badges */}
            <div className="flex items-center gap-4">
              <a
                href="https://maps.app.goo.gl/RvRyJE8vQqNQnhNF8"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-105"
              >
                <Image
                  src="/badge/google.webp" // place your PNG/SVG in /public/badges/
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
                  src="/badge/trustpilot.webp" // place your PNG/SVG in /public/badges/
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
