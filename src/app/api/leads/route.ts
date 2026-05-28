import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { triggerWebhook } from "@/lib/webhook";

export async function POST(req: Request) {
    try {
        const contentType = req.headers.get("content-type") || "";
        let data: any = {};

        if (contentType.includes("application/json")) {
            data = await req.json();
        } else {
            const formData = await req.formData();
            data = Object.fromEntries(formData.entries());
        }

        let lead;
        try {
            lead = await (prisma.lead as any).create({
                data: {
                    name: data.name || "",
                    email: data.email || "",
                    phone: data.phone || "",
                     address: data.address || "",
                    service: data.service || null,
                    message: data.message || null,
                    propertyType: data.propertyType || null,
                    propertySize: data.size || data.propertySize || null,
                    utmSource: data.utmSource || null,
                    utmMedium: data.utmMedium || null,
                    utmCampaign: data.utmCampaign || null,
                    utmTerm: data.utmTerm || null,
                    utmContent: data.utmContent || null,
                    gclid: data.gclid || null,
                    pageUrl: data.pageUrl || null,
                    referrer: data.referrer || null,
                },
            });
        } catch (err: any) {
            // Fallback if Prisma client is cached and doesn't know about 'referrer' yet
            if (err.message?.includes("Unknown argument `referrer`")) {
                console.warn("Prisma client stale, retrying lead creation without referrer");
                lead = await (prisma.lead as any).create({
                    data: {
                        name: data.name || "",
                        email: data.email || "",
                        phone: data.phone || "",
                        address: data.address || "", 
                        service: data.service || null,
                        message: data.message || null,
                        propertyType: data.propertyType || null,
                        propertySize: data.size || data.propertySize || null,
                        utmSource: data.utmSource || null,
                        utmMedium: data.utmMedium || null,
                        utmCampaign: data.utmCampaign || null,
                        utmTerm: data.utmTerm || null,
                        utmContent: data.utmContent || null,
                        gclid: data.gclid || null,
                        pageUrl: data.pageUrl || null,
                    },
                });
            } else {
                throw err;
            }
        }

        if (lead) {
            triggerWebhook(lead).catch(err => console.error("Webhook trigger error:", err));
        }

        return NextResponse.json({ success: true, id: lead.id });
    } catch (error: any) {
        console.error("Lead submission error:", error);
        return NextResponse.json({ success: false, error: "Failed to save lead" }, { status: 500 });
    }
}
