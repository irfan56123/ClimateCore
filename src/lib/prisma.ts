import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

function createPrismaClient() {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
        throw new Error("DATABASE_URL is not set");
    }
    const adapter = new PrismaNeon({ connectionString });
    return new PrismaClient({
        adapter,
        log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
    });
}

export const prisma = (() => {
    if (process.env.NODE_ENV !== "production") {
        const existing = globalForPrisma.prisma;
        // If we have an existing client but it's missing the new models, discard it
        if (existing && (!(existing as any).leadNote || !(existing as any).setting || !(existing as any).webhookLog)) {
            console.log("♻️ Stale Prisma client detected (missing new models). Refreshing...");
            globalForPrisma.prisma = undefined;
        }
    }
    const client = globalForPrisma.prisma ?? createPrismaClient();
    if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = client;
    return client;
})();

if (process.env.NODE_ENV !== "production") {
    console.log("💎 Prisma Models Available:", Object.keys(prisma).filter(k => !k.startsWith("_")));
}
