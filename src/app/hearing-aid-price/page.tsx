import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import HearingAidPricesPage from "./HearingAidPricesPage";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Hearing Aid Price in India 2026 | Signia, Phonak, Widex, Oticon Price List",
  description:
    "Compare the latest hearing aid prices in India for 2026. Explore Signia prices, Phonak price list, Oticon & Widex models with real MRP. Transparent pricing, no hidden charges, and free consultation.",
  alternates: {
    canonical: "https://www.insonohearing.com/hearing-aid-price",
  },
  openGraph: {
    title: "Latest Hearing Aid Price in India 2026 | Signia, Phonak, Widex, Oticon",
    description:
      "Discover the updated 2026 price list for Signia, Phonak, Widex, and Oticon hearing aids. Compare basic, advanced & premium models. Free trials & consultation available.",
    url: "https://www.insonohearing.com/hearing-aid-price",
    siteName: "Insono Hearing Solutions",
    images: [{ url: "https://www.insonohearing.com/logo.webp", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hearing Aid Price in India 2026 | Signia & Phonak Price List",
    description: "Latest hearing aid prices for 2026. Compare Signia, Phonak, Oticon, Widex models & price ranges. Free consultation.",
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
