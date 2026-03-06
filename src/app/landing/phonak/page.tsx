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
  "Phonak",
  `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/landing/phonak`,
);

export default function Page() {
  const heroImages = [
    "/lp/phonak1.png",
    "/lp/phonak2.png",
    "/lp/phonak3.png",
    "/lp/phonak4.png",
  ];

  const statsList = [
    { label: "Happy Phonak Users", value: "2 Lakh+", icon: "users" as const },
    { label: "Authorized Clinics", value: "15+", icon: "map" as const },
    {
      label: "Certified Audiologists",
      value: "100+",
      icon: "stethoscope" as const,
    },
  ];

  const featuresList = [
    { icon: "🎯", text: "Ultra clear sound with <b>Phonak AutoSense AI</b>" },
    { icon: "🔋", text: "All-day <b>Rechargeable Battery</b>" },
    { icon: "📱", text: "Smart control with <b>myPhonak App</b>" },
    { icon: "🎧", text: "Direct <b>Bluetooth Connectivity</b>" },
  ];

  const faqs = [
    {
      q: "Phonak HVAC price?",
      a: "Starts from ₹18,000. Call now for best discount.",
    },
    {
      q: "Where can I buy Phonak HVAC?",
      a: "From our authorized Phonak clinic near you.",
    },
    { q: "Is EMI available on Phonak?", a: "Yes, 0% EMI options available." },
    {
      q: "Are Phonak HVACs rechargeable?",
      a: "Yes, premium rechargeable models available.",
    },
    {
      q: "Does Phonak support Bluetooth?",
      a: "Yes, direct calls & music streaming supported.",
    },
    {
      q: "Do you provide free hearing test?",
      a: "Yes, free audiologist consultation available.",
    },
    { q: "Is warranty included?", a: "Yes, 2–4 years manufacturer warranty." },
    {
      q: "Which Phonak model is best?",
      a: "Audeo Lumity & Paradise series are most popular.",
    },
    {
      q: "How to book appointment?",
      a: "Click call button or fill form to book instantly.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Phonak HVAC Systems – Premium Swiss Technology"
        subtitle="Buy original Phonak HVACs with warranty & free hearing test."
        ctaText="Download Phonak Price List"
        partnerLabel="Authorized Phonak Clinics"
        stats={statsList}
        heroImages={heroImages}
        features={featuresList}
      />

      <ProductSection heading="Latest Phonak HVAC Systems" />
      <Whychoose />
      <HearingAidGuide />
      <Location />
      <Testomonial />
      <FAQ faqs={faqs} heading="Phonak HVAC Systems – FAQs" />
      <Footer />
    </>
  );
}
