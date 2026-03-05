import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

// GET - single product
export async function GET(
    _req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await auth();
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { id } = await params;
        const product = await prisma.product.findUnique({ where: { id } });
        if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

// PUT - update product
export async function PUT(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await auth();
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { id } = await params;
        const body = await req.json();
        const { title, category, mrp, description, isFeatured, suitableFor, technology, shape, images } = body;

        const product = await prisma.product.update({
            where: { id },
            data: {
                ...(title && { title }),
                ...(category && { category }),
                mrp: mrp !== undefined ? parseFloat(mrp) : undefined,
                ...(description !== undefined && { description }),
                ...(isFeatured !== undefined && { isFeatured }),
                ...(suitableFor && { suitableFor }),
                ...(technology && { technology }),
                ...(shape && { shape }),
                ...(images && { images }),
            },
        });

        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

// DELETE - remove product
export async function DELETE(
    _req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await auth();
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { id } = await params;
        await prisma.product.delete({ where: { id } });
        return NextResponse.json({ message: "Product deleted" });
    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
