import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import HearingAidPricesPage from "./HearingAidPricesPage";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "HVAC System Price in India 2026 | Signia, Phonak, Widex, Oticon Price List",
  description:
    "Compare the latest HVAC prices in India for 2026. Explore Signia prices, Phonak price list, Oticon & Widex models with real MRP. Transparent pricing, no hidden charges, and free consultation.",
  alternates: {
    canonical: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/hearing-aid-price`,
  },
  openGraph: {
    title: "Latest HVAC System Price in India 2026 | Signia, Phonak, Widex, Oticon",
    description:
      "Discover the updated 2026 price list for Signia, Phonak, Widex, and Oticon HVACs. Compare basic, advanced & premium models. Free trials & consultation available.",
    url: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/hearing-aid-price`,
    siteName: "Vently Air Hearing Solutions",
    images: [{ url: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/ventlylogo.png`, width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HVAC System Price in India 2026 | Signia & Phonak Price List",
    description: "Latest HVAC prices for 2026. Compare Signia, Phonak, Oticon, Widex models & price ranges. Free consultation.",
  },
};

export default async function Page() {
  const products = await prisma.product.findMany({
    orderBy: [{ isFeatured: "desc" }, { mrp: "asc" }],
    select: {
      id: true,
      title: true,
      slug: true,
      category: true,
      mrp: true,
      isFeatured: true,
      images: true,
      technology: true,
      shape: true,
      suitableFor: true,
    },
  });

  return <HearingAidPricesPage products={products} />;
}
