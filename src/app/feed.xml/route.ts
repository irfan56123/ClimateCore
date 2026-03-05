import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { graphQLClient, GET_PRODUCTS } from "@/lib/graphql";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://insonohearing.com";

export async function GET() {
    try {
        const products = await prisma.product.findMany();

        const items = products
            .map((product) => {
                const cleanDesc = product.description
                    ? product.description.replace(/<[^>]*>?/gm, "").substring(0, 1000)
                    : `Buy ${product.title} from Insono Hearing`;

                const brandName = product.category.charAt(0).toUpperCase() + product.category.slice(1);
                const priceStr = product.mrp ? `${product.mrp}.00 INR` : "";
                const priceTag = priceStr ? `<g:price>${priceStr}</g:price>` : "";

                return `
    <item>
      <g:id>${product.id}</g:id>
      <g:title><![CDATA[${product.title}]]></g:title>
      <g:description><![CDATA[${cleanDesc}]]></g:description>
      <g:link>${BASE_URL}/product/${product.slug}</g:link>
      ${product.images[0] ? `<g:image_link><![CDATA[${product.images[0]}]]></g:image_link>` : ""}
      <g:condition>new</g:condition>
      <g:availability>in_stock</g:availability>
      ${priceTag}
      <g:brand><![CDATA[${brandName}]]></g:brand>
    </item>`;
            })
            .join("");

        // Fetch Legacy WordPress Products
        let wpItems = "";
        try {
            const data: any = await graphQLClient.request(GET_PRODUCTS);
            const wpProducts = data?.products?.nodes || [];
            wpItems = wpProducts.map((p: any) => {
                const brandName = p.categories?.nodes[0]?.name || "Insono Hearing";
                const imgUrl = p.featuredImage?.node?.sourceUrl || "";

                return `
    <item>
      <g:id>wp-${p.slug}</g:id>
      <g:title><![CDATA[${p.title}]]></g:title>
      <g:description><![CDATA[Buy ${p.title} from Insono Hearing]]></g:description>
      <g:link>${BASE_URL}/product/${p.slug}</g:link>
      ${imgUrl ? `<g:image_link><![CDATA[${imgUrl}]]></g:image_link>` : ""}
      <g:condition>new</g:condition>
      <g:availability>in_stock</g:availability>
      <g:brand><![CDATA[${brandName}]]></g:brand>
    </item>`;
            }).join("");
        } catch (wpError) {
            console.error("Error fetching WP products for feed:", wpError);
        }

        const allItems = items + wpItems;

        const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>Insono Hearing</title>
    <link>${BASE_URL}</link>
    <description>Premium Hearing Aids in India</description>
    ${allItems}
  </channel>
</rss>`;

        return new NextResponse(xmlContent, {
            headers: {
                "Content-Type": "application/xml",
                "Cache-Control": "max-age=0, s-maxage=3600, stale-while-revalidate",
            },
        });
    } catch (error) {
        console.error("Error generating feed:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
