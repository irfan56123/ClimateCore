import type { Metadata } from "next";

export function brandSEO(
  brand: string,
  url: string
): Metadata {
  return {
    title: `${brand} Hearing Aids Price in India | Authorized ${brand} Dealer`,
    description: `Buy original ${brand} hearing aids at best price. Rechargeable, Bluetooth & digital models available. Book free hearing test today.`,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: `${brand} Hearing Aids – Best Price & Free Hearing Test`,
      description: `Explore latest ${brand} hearing aids with expert fitting and warranty. EMI options available.`,
      url: url,
      type: "website",
      locale: "en_IN",
    },

    robots: "index, follow",
  };
}
