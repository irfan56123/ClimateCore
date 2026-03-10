import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET() {
    const session = await auth();
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const headSetting = await prisma.setting.findUnique({
            where: { key: "head_scripts" },
        });
        const bodySetting = await prisma.setting.findUnique({
            where: { key: "body_scripts" },
        });

        return NextResponse.json({
            headScripts: headSetting?.value || "",
            bodyScripts: bodySetting?.value || ""
        });
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
        const { headScripts, bodyScripts } = await req.json();

        if (headScripts !== undefined) {
            await prisma.setting.upsert({
                where: { key: "head_scripts" },
                update: { value: headScripts },
                create: { key: "head_scripts", value: headScripts },
            });
        }

        if (bodyScripts !== undefined) {
            await prisma.setting.upsert({
                where: { key: "body_scripts" },
                update: { value: bodyScripts },
                create: { key: "body_scripts", value: bodyScripts },
            });
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
