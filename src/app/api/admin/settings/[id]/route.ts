import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function DELETE(
    _req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await auth();
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { id } = await params;
        await prisma.adminSetting.delete({ where: { id } });
        return NextResponse.json({ message: "Setting deleted" });
    } catch {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
