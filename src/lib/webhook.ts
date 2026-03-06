import { prisma } from "./prisma";

export async function triggerWebhook(lead: any) {
    let webhookUrl = "";
    try {
        // 1. Get webhook URL from settings
        const setting = await prisma.setting.findUnique({
            where: { key: "webhook_url" },
        });

        webhookUrl = setting?.value || "";

        if (!webhookUrl) {
            // 2. Log that no webhook is configured
            await prisma.webhookLog.create({
                data: {
                    leadId: lead.id,
                    url: "NOT_CONFIGURED",
                    status: 0,
                    payload: JSON.stringify(lead),
                    error: "Webhook URL not configured in settings.",
                },
            });
            console.log("Webhook not triggered: No URL configured.");
            return;
        }

        // 3. Prepare payload
        const payload = JSON.stringify({
            event: "new_lead",
            data: lead,
            timestamp: new Date().toISOString(),
        });

        // 4. Send request
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: payload,
        });

        const responseText = await response.text();

        // 5. Log success/failure
        await prisma.webhookLog.create({
            data: {
                leadId: lead.id,
                url: webhookUrl,
                status: response.status,
                payload: payload,
                response: responseText.substring(0, 1000), // Truncate if too long
                error: !response.ok ? `HTTP Error: ${response.statusText}` : null,
            },
        });

        console.log(`Webhook sent to ${webhookUrl}, status: ${response.status}`);
    } catch (error: any) {
        console.error("Webhook trigger error:", error);

        // 6. Log critical error
        await prisma.webhookLog.create({
            data: {
                leadId: lead.id,
                url: webhookUrl || "UNKNOWN",
                status: 500,
                payload: JSON.stringify(lead),
                error: error.message,
            },
        });
    }
}
