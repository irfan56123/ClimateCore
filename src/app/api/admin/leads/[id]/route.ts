import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    if (!id) {
        return NextResponse.json({ error: "Missing ID" }, { status: 400 });
    }

    const session = await auth();
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        let lead;
        try {
            // Try with notes first (new schema)
            lead = await (prisma.lead as any).findUnique({
                where: { id },
                include: {
                    notes: {
                        orderBy: { createdAt: "desc" }
                    }
                }
            });
        } catch (includeError) {
            console.error("Fetch with notes failed, falling back to basic fetch:", includeError);
            // Fallback for stale prisma client that doesn't know about notes relation yet
            lead = await (prisma.lead as any).findUnique({
                where: { id },
            });
        }

        if (!lead) {
            return NextResponse.json({ error: "Lead not found in database" }, { status: 404 });
        }

        return NextResponse.json(lead);
    } catch (error: any) {
        console.error("Critical fetch lead detail error:", error);
        return NextResponse.json({
            error: error.message || "Failed to fetch lead details",
            debug: {
                message: error.message,
                stack: error.stack,
                id: id
            }
        }, { status: 500 });
    }
}

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const session = await auth();
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { status } = await req.json();

        const updatedLead = await (prisma.lead as any).update({
            where: { id },
            data: { status },
        });

        return NextResponse.json(updatedLead);
    } catch (error: any) {
        console.error("Update lead error:", error);
        return NextResponse.json({ error: error.message || "Failed to update lead" }, { status: 500 });
    }
}
