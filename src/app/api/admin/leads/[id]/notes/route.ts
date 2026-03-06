import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const session = await auth();
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const notes = await (prisma as any).leadNote.findMany({
            where: { leadId: id },
            orderBy: { createdAt: "desc" },
        });

        return NextResponse.json(notes);
    } catch (error: any) {
        console.error("Fetch notes error:", error);
        return NextResponse.json({ error: error.message || "Failed to fetch notes" }, { status: 500 });
    }
}

export async function POST(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const session = await auth();
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        console.log("POST /api/admin/leads/[id]/notes - Starting", { id });
        const body = await req.json();
        console.log("Request Body:", body);
        const { content } = body;

        if (!content) {
            return NextResponse.json({ error: "Content is required" }, { status: 400 });
        }

        console.log("Executing prisma.leadNote.create...");
        const note = await (prisma as any).leadNote.create({
            data: {
                content,
                leadId: id,
            },
        });
        console.log("Note created successfully:", note.id);

        return NextResponse.json(note);
    } catch (error: any) {
        console.error("Critical Create note error:", error);
        return NextResponse.json({
            error: error.message || "Failed to create note",
            debug: {
                message: error.message,
                stack: error.stack,
                id,
                prismaKeys: Object.keys(prisma).filter(k => !k.startsWith("_"))
            }
        }, { status: 500 });
    }
}
