import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET() {
    const session = await auth();
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const setting = await prisma.setting.findUnique({
            where: { key: "webhook_url" },
        });

        return NextResponse.json({ url: setting?.value || "" });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    const session = await auth();
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { url } = await req.json();

        const setting = await prisma.setting.upsert({
            where: { key: "webhook_url" },
            update: { value: url },
            create: { key: "webhook_url", value: url },
        });

        return NextResponse.json(setting);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
