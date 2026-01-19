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
  "Oticon",
  "https://insonohearing.com/landing/oticon",
);

export default function Page() {
  const heroImages = ["/oticon1.png", "/oticon2.png"];

  const statsList = [
    { label: "Happy Oticon Users", value: "1 Lakh+", icon: "users" as const },
    { label: "Authorized Clinics", value: "10+", icon: "map" as const },
    { label: "Certified Experts", value: "70+", icon: "stethoscope" as const },
  ];

  const featuresList = [
    { icon: "🧠", text: "<b>BrainHearing Technology</b>" },
    { icon: "🔋", text: "Rechargeable models" },
    { icon: "📱", text: "Oticon ON App support" },
    { icon: "🎧", text: "Clear speech in noise" },
  ];

  const faqs = [
    { q: "Oticon hearing aid price?", a: "Starts from ₹22,000 onwards." },
    { q: "Where can I buy Oticon?", a: "Authorized Oticon hearing center." },
    { q: "Is Oticon rechargeable?", a: "Yes, rechargeable models available." },
    { q: "Does Oticon support Bluetooth?", a: "Yes, streaming supported." },
    { q: "Free hearing test available?", a: "Yes, book now for free test." },
    { q: "Warranty on Oticon?", a: "2–4 years warranty." },
    { q: "Best Oticon model?", a: "Oticon More & Opn series." },
    { q: "EMI option available?", a: "Yes, easy EMI options." },
    { q: "How to book appointment?", a: "Call or submit form now." },
  ];

  return (
    <>
      <HeroSection
        title="Oticon Hearing Aids – BrainHearing Technology"
        subtitle="Understand speech better even in noisy places."
        ctaText="Download Oticon Price List"
        partnerLabel="Authorized Oticon Clinics"
        stats={statsList}
        heroImages={heroImages}
        features={featuresList}
      />

      <ProductSection heading="Oticon Hearing Aids" />
      <Whychoose />
      <HearingAidGuide />
      <Location />
      <Testomonial />
      <FAQ faqs={faqs} heading="Oticon Hearing Aids – FAQs" />
      <Footer />
    </>
  );
}
