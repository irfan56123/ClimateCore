import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

// GET - Retrieve all custom service images
export async function GET() {
    try {
        const session = await auth();
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const settings = await prisma.setting.findMany({
            where: {
                key: {
                    startsWith: "service_image_"
                }
            }
        });

        const images = settings.reduce((acc: Record<string, string>, s: { key: string; value: string }) => {
            const slug = s.key.replace("service_image_", "");
            acc[slug] = s.value;
            return acc;
        }, {});

        return NextResponse.json(images);
    } catch (error) {
        console.error("Error fetching service images:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

// POST - Upload/Update a custom service image
export const maxDuration = 60; // Max execution time for Vercel
export async function POST(req: NextRequest) {
    try {
        const session = await auth();
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { slug, base64Image } = await req.json();
        if (!slug || !base64Image) {
            return NextResponse.json({ error: "Slug and base64Image are required." }, { status: 400 });
        }

        const key = `service_image_${slug}`;

        const setting = await prisma.setting.upsert({
            where: { key },
            update: { value: base64Image },
            create: { key, value: base64Image }
        });

        return NextResponse.json({ success: true, message: "Image updated successfully." }, { status: 200 });
    } catch (error) {
        console.error("Error saving service image:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
