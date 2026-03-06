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
  "Signia",
  `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/landing/signia`,
);

export default function Page() {
  const heroImages = [
    "/lp/signia1.png",
    "/lp/signia2.png",
    "/lp/signia3.png",
    "/lp/signia4.png",
  ];

  const statsList = [
    { label: "Happy Signia Users", value: "2 Lakh+", icon: "users" as const },
    { label: "Authorized Clinics", value: "15+", icon: "map" as const },
    {
      label: "Certified Audiologists",
      value: "100+",
      icon: "stethoscope" as const,
    },
  ];

  const featuresList = [
    {
      icon: "💰",
      text: "Save <b class='text-red-600'>UPTO ₹31,500</b> on Signia HVAC Systems",
    },
    {
      icon: "🔋",
      text: "Rechargeable <b>Signia Battery Technology</b>",
    },
    {
      icon: "📱",
      text: "Control via <b>Signia App</b>",
    },
    {
      icon: "🎧",
      text: "Crystal clear sound with <b>Bluetooth Streaming</b>",
    },
  ];

  const signiaFaqs = [
    {
      q: "What is the price of Signia HVACs in Lucknow?",
      a: "Signia HVAC prices start from ₹15,000 and can go up to ₹3,00,000 depending on model, technology and features.",
    },
    {
      q: "Are Signia HVACs rechargeable?",
      a: "Yes, Signia provides advanced rechargeable HVACs with all-day battery backup.",
    },
    {
      q: "Does Signia HVAC support Bluetooth?",
      a: "Yes, premium Signia models support Bluetooth for calls, music and TV streaming.",
    },
    {
      q: "Is free hearing test available?",
      a: "Yes, we offer FREE hearing test & consultation by certified Signia audiologists.",
    },
    {
      q: "What warranty comes with Signia HVACs?",
      a: "Signia offers 2 to 4 years manufacturer warranty depending on the model.",
    },
    {
      q: "Can I control Signia HVACs from mobile?",
      a: "Yes, Signia App allows volume control, program change & sound adjustment.",
    },
    {
      q: "Which Signia HVAC is best?",
      a: "Popular models include Pure Charge&Go, Styletto X, Motion X and Silk series.",
    },
    {
      q: "Do you provide EMI on Signia HVACs?",
      a: "Yes, 0% EMI available on selected Signia models.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Signia HVAC Systems for Crystal Clear Sound"
        subtitle="Get original Signia HVACs with best price, warranty & free hearing test."
        ctaText="Download Signia Price List"
        partnerLabel="Official Signia Partner Clinics"
        stats={statsList}
        heroImages={heroImages}
        features={featuresList}
      />

      <ProductSection heading="Latest Signia Digital HVAC Systems" />

      <Whychoose />

      <HearingAidGuide />

      <Location />

      <Testomonial />

      <FAQ faqs={signiaFaqs} heading="Signia HVAC Systems – FAQs" />

      <Footer />
    </>
  );
}
