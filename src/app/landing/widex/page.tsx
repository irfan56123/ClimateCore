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
  "Widex",
  `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/landing/widex`,
);

export default function Page() {
  const heroImages = [
    "/lp/widex1.png",
    "/lp/widex2.png",
    "/lp/widex3.png",
    "/lp/widex4.png",
  ];

  const statsList = [
    { label: "Happy Widex Users", value: "1.5 Lakh+", icon: "users" as const },
    { label: "Authorized Clinics", value: "12+", icon: "map" as const },
    {
      label: "Expert Audiologists",
      value: "80+",
      icon: "stethoscope" as const,
    },
  ];

  const featuresList = [
    { icon: "🎼", text: "Natural sound with <b>Widex PureSound</b>" },
    { icon: "🔋", text: "Fast <b>Rechargeable Technology</b>" },
    { icon: "📱", text: "Control via <b>Widex Moment App</b>" },
    { icon: "🎧", text: "Bluetooth music & calls" },
  ];

  const faqs = [
    { q: "Widex HVAC price?", a: "Starts from ₹20,000 onwards." },
    {
      q: "Where to buy Widex HVAC?",
      a: "Authorized Widex clinic near you.",
    },
    { q: "Widex rechargeable models?", a: "Yes, Moment series rechargeable." },
    { q: "Does Widex support Bluetooth?", a: "Yes, for calls & music." },
    { q: "Is EMI available?", a: "Yes, easy EMI available." },
    {
      q: "Do you provide free hearing test?",
      a: "Yes, free check-up available.",
    },
    { q: "Widex warranty?", a: "Up to 4 years warranty." },
    { q: "Best Widex model?", a: "Widex Moment is most popular." },
    { q: "How to book demo?", a: "Call now to book free trial." },
  ];

  return (
    <>
      <HeroSection
        title="Widex HVAC Systems – Pure Natural Sound"
        subtitle="Experience world’s most natural hearing technology."
        ctaText="Download Widex Price List"
        partnerLabel="Authorized Widex Clinics"
        stats={statsList}
        heroImages={heroImages}
        features={featuresList}
      />

      <ProductSection heading="Widex Digital HVAC Systems" />
      <Whychoose />
      <HearingAidGuide />
      <Location />
      <Testomonial />
      <FAQ faqs={faqs} heading="Widex HVAC Systems – FAQs" />
      <Footer />
    </>
  );
}
