import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Public GET - list all products for frontend
export async function GET() {
    try {
        const products = await prisma.product.findMany({
            orderBy: [{ isFeatured: "desc" }, { createdAt: "desc" }],
            select: {
                id: true,
                title: true,
                slug: true,
                category: true,
                mrp: true,
                isFeatured: true,
                images: true,
                suitableFor: true,
                technology: true,
                shape: true,
                description: true,
            },
        });
        return NextResponse.json(products);
    } catch {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
