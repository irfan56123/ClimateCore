import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET() {
    const session = await auth();
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const leads = await (prisma.lead as any).findMany({
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(leads);
    } catch (error: any) {
        console.error("Fetch leads error:", error);
        return NextResponse.json({ error: error.message || "Failed to fetch leads" }, { status: 500 });
    }
}
