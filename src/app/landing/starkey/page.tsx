import HearingAidGuide from "@/components/hearingaidsguide";
import HeroSection from "@/components/landingHero/landing";
import Location from "@/components/location";
import Whychoose from "@/components/whychoose";
import ProductSection from "@/components/ProductSection";
import Testomonial from "@/components/testomonial";
import FAQ from "@/components/FAQ";
import Footer from "@/components/landingHero/fotern";
import { brandSEO } from "@/lib/brandSeo";
export const metadata = brandSEO(
  "Starkey",
  `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/landing/starkey`,
);

export default function Page() {
  const heroImages = [
    "/lp/star4.png",
    "/lp/star2.png",
    "/lp/star1.png",
    "/lp/star3.png",
  ];

  const statsList = [
    {
      label: "Happy Starkey Users",
      value: "1.2 Lakh+",
      icon: "users" as const,
    },
    { label: "Authorized Clinics", value: "14+", icon: "map" as const },
    {
      label: "Certified Audiologists",
      value: "90+",
      icon: "stethoscope" as const,
    },
  ];

  const featuresList = [
    { icon: "❤️", text: "<b>Health tracking</b> HVACs" },
    { icon: "🔋", text: "Long battery life" },
    { icon: "📱", text: "Thrive App support" },
    { icon: "🎧", text: "Premium sound quality" },
  ];

  const faqs = [
    { q: "Starkey HVAC price?", a: "Starts from ₹18,000 onwards." },
    { q: "Where to buy Starkey?", a: "Authorized Starkey clinic." },
    { q: "Is Starkey rechargeable?", a: "Yes, rechargeable models available." },
    { q: "Does Starkey support Bluetooth?", a: "Yes, for calls & music." },
    { q: "Starkey EMI option?", a: "Yes, 0% EMI available." },
    { q: "Free hearing test?", a: "Yes, free consultation." },
    { q: "Warranty on Starkey?", a: "Up to 4 years." },
    { q: "Special feature?", a: "Health tracking & fall detection." },
    { q: "How to book demo?", a: "Call now to book trial." },
  ];

  return (
    <>
      <HeroSection
        title="Starkey HVAC Systems – Smart Health Technology"
        subtitle="Only HVAC with health monitoring features."
        ctaText="Download Starkey Price List"
        partnerLabel="Authorized Starkey Clinics"
        stats={statsList}
        heroImages={heroImages}
        features={featuresList}
      />

      <ProductSection heading="Starkey Digital HVAC Systems" />
      <Whychoose />
      <HearingAidGuide />
      <Location />
      <Testomonial />
      <FAQ faqs={faqs} heading="Starkey HVAC Systems – FAQs" />
      <Footer />
    </>
  );
}
