
import ProductSection from "@/components/ProductSection";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/HeroSection";
import HVACSystemType from "@/components/HVACSystemType";
import Whychoose from "@/components/whychoose";
import TestimonialSection from "@/components/TestimonialSection";
// ✅ Dynamic Metadata works now
export async function generateMetadata() {
  const siteName = "ClimateCore Air | Expert HVAC & Ventilation";
  const heroKeyword = "Heating, Cooling & Air Quality Solutions";

  return {
    title: `Expert HVAC Services in Your Area | ClimateCore Air Authorized Contractor`,
    description: `Get professional ${heroKeyword}. Reliable furnace, AC, and mini-split services with ${siteName}. Book a free estimate.`,
    keywords: [
      "HVAC repair",
      "air conditioning installation",
      "heating services",
      "ventilation",
      "best HVAC contractor",
    ],
    openGraph: {
      title: `Best HVAC Systems | Trusted Heating & Cooling Partner`,
      description: `Compare and buy ${heroKeyword} at ${siteName}. Premium Furnaces, ACs, and Ventilation Systems`,
      url: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ClimateCoreair.com"}`,
      siteName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Best HVAC Systems in India | ${siteName}`,
      description: `Discover ${heroKeyword} and choose the best fit for your comfort needs.`,
    },
  };
}

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-to-b from-[#eaf5ff] to-white flex flex-col items-center justify-center text-center">
        <HeroSection />

        <Whychoose />

      </section>

      <HVACSystemType />


      <TestimonialSection />

      <FAQ />

    </main>
  );
}
