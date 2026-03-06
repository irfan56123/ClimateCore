import type { Metadata } from "next";

export function brandSEO(
  service: string,
  url: string
): Metadata {
  return {
    title: `${service} Services | Vently Air Authorized Contractor`,
    description: `Expert ${service} for your home or business. Reliable installation, repair, and maintenance with Vently Air. Book a free estimate.`,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: `${service} – Expert HVAC Installation & Repair`,
      description: `Explore professional ${service} services with expert technicians and quality guarantee.`,
      url: url,
      type: "website",
      locale: "en_IN",
    },

    robots: "index, follow",
  };
}
