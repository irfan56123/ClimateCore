import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import bcrypt from "bcryptjs";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const adapter = new PrismaNeon({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  const email = process.env.ADMIN_EMAIL || "admin@insonohearing.com";
  const password = process.env.ADMIN_PASSWORD || "changeme123";
  const hashedPassword = await bcrypt.hash(password, 12);

  await prisma.adminUser.upsert({
    where: { email },
    update: {},
    create: { email, hashedPassword },
  });
  console.log(`✅ Admin user seeded: ${email}`);

  const defaultSettings = [
    { group: "technology", value: "Bluetooth" },
    { group: "technology", value: "Rechargeable" },
    { group: "technology", value: "Invisible" },
    { group: "technology", value: "AI-Powered" },
    { group: "technology", value: "Noise Cancellation" },
    { group: "technology", value: "Tinnitus Masking" },
    { group: "shape", value: "RIC" },
    { group: "shape", value: "BTE" },
    { group: "shape", value: "ITE" },
    { group: "shape", value: "ITC" },
    { group: "shape", value: "CIC" },
    { group: "shape", value: "IIC" },
    { group: "suitableFor", value: "Mild Hearing Loss" },
    { group: "suitableFor", value: "Moderate Hearing Loss" },
    { group: "suitableFor", value: "Severe Hearing Loss" },
    { group: "suitableFor", value: "Profound Hearing Loss" },
  ];

  for (const s of defaultSettings) {
    await prisma.adminSetting.upsert({
      where: { group_value: { group: s.group, value: s.value } },
      update: {},
      create: s,
    });
  }
  console.log("✅ Default settings seeded.");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
