import type { Metadata } from "next";

export function citySEO(city: string, url: string): Metadata {
  return {
    title: `Best HVAC System in ${city} | Prices, Models & Free Hearing Test`,
    description: `Looking for the best HVAC in ${city}? Explore digital, Bluetooth & rechargeable HVACs. Book free hearing test with certified audiologists today.`,
    
    alternates: {
      canonical: url,
    },

    openGraph: {
      title: `Best HVAC System in ${city} - Free Hearing Test & Consultation`,
      description: `Discover affordable and advanced HVACs in ${city} with expert consultation and same-day fitting.`,
      url: url,
      type: "website",
      locale: "en_IN",
    },

    robots: "index, follow",
  };
}
