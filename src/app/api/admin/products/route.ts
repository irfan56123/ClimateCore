import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
}

// GET - list all products
export async function GET() {
    try {
        const session = await auth();
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const products = await prisma.product.findMany({
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(products);
    } catch (error) {
        console.error("GET /api/admin/products error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

// POST - create product
export async function POST(req: NextRequest) {
    try {
        const session = await auth();
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const body = await req.json();
        const { title, category, mrp, description, isFeatured, suitableFor, technology, shape, images } = body;

        if (!title || !category) {
            return NextResponse.json({ error: "Title and category are required" }, { status: 400 });
        }

        // Generate unique slug
        let slug = generateSlug(title);
        const existing = await prisma.product.findUnique({ where: { slug } });
        if (existing) {
            slug = `${slug}-${Date.now()}`;
        }

        const product = await prisma.product.create({
            data: {
                title,
                slug,
                category,
                mrp: mrp ? parseFloat(mrp) : null,
                description: description || null,
                isFeatured: isFeatured ?? false,
                suitableFor: suitableFor ?? [],
                technology: technology ?? [],
                shape: shape ?? [],
                images: images ?? [],
            },
        });

        return NextResponse.json(product, { status: 201 });
    } catch (error) {
        console.error("POST /api/admin/products error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
