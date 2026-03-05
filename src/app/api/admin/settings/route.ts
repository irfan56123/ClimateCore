import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

// GET - all settings grouped
export async function GET() {
    try {
        const session = await auth();
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const settings = await prisma.adminSetting.findMany({ orderBy: { group: "asc" } });
        const grouped = settings.reduce(
            (acc, s) => {
                if (!acc[s.group]) acc[s.group] = [];
                acc[s.group].push({ id: s.id, value: s.value });
                return acc;
            },
            {} as Record<string, { id: string; value: string }[]>
        );
        return NextResponse.json(grouped);
    } catch {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

// POST - add setting value
export async function POST(req: NextRequest) {
    try {
        const session = await auth();
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { group, value } = await req.json();
        if (!group || !value) {
            return NextResponse.json({ error: "Group and value are required" }, { status: 400 });
        }

        const setting = await prisma.adminSetting.create({ data: { group, value } });
        return NextResponse.json(setting, { status: 201 });
    } catch (error: unknown) {
        if ((error as { code?: string }).code === "P2002") {
            return NextResponse.json({ error: "Value already exists in this group" }, { status: 409 });
        }
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
