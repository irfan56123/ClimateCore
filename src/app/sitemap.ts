import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || `https://${process.env.NEXT_PUBLIC_DOMAIN || "ClimateCoreair.com"}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routes: MetadataRoute.Sitemap = [
        { url: `${BASE_URL}`, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
        { url: `${BASE_URL}/about-us`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        { url: `${BASE_URL}/contact-us`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/guide`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/our-clinic`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: `${BASE_URL}/product`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },

        { url: `${BASE_URL}/estimate`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ];

    // Fetch dynamic products from Prisma
    try {
        const products = await prisma.product.findMany({
            select: { slug: true, updatedAt: true },
        });

        products.forEach((product: { slug: string; updatedAt: Date }) => {
            routes.push({
                url: `${BASE_URL}/product/${product.slug}`,
                lastModified: product.updatedAt,
                changeFrequency: "weekly",
                priority: 0.8,
            });
        });
    } catch (error) {
        console.error("Failed to fetch products for sitemap", error);
    }



    return routes;
}
