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
  const email = process.env.ADMIN_EMAIL || "admin@ventlyair.com";
  const password = process.env.ADMIN_PASSWORD || "changeme123";
  const hashedPassword = await bcrypt.hash(password, 12);

  await prisma.adminUser.upsert({
    where: { email },
    update: { hashedPassword },
    create: { email, hashedPassword },
  });
  console.log(`✅ Admin user seeded: ${email}`);

  const defaultSettings = [
    { group: "serviceType", value: "Heating" },
    { group: "serviceType", value: "Cooling" },
    { group: "serviceType", value: "Indoor Air Quality" },
    { group: "serviceType", value: "Commercial HVAC" },
    { group: "suitableFor", value: "Residential" },
    { group: "suitableFor", value: "Commercial" },
  ];

  for (const s of defaultSettings) {
    await prisma.adminSetting.upsert({
      where: { group_value: { group: s.group, value: s.value } },
      update: {},
      create: s,
    });
  }
  console.log("✅ Default settings seeded.");

  const products = [
    {
      title: "High-Efficiency Gas Furnace",
      slug: "high-efficiency-gas-furnace",
      category: "heating" as const,
      mrp: 4500,
      description: "Premium high-efficiency gas furnace with quiet operation and consistent heating.",
      isFeatured: true,
      suitableFor: ["Residential", "Commercial"],
      technology: ["Smart Controls", "Variable Speed"],
      shape: ["Standard Upflow"],
      images: ["/services/heating.jpg"],
    },
    {
      title: "Central Air Conditioning System",
      slug: "central-ac-system",
      category: "cooling" as const,
      mrp: 5200,
      description: "Powerful central AC unit with high SEER rating for maximum energy savings.",
      isFeatured: true,
      suitableFor: ["Residential"],
      technology: ["Inverter Technology"],
      shape: ["Split System"],
      images: ["/services/cooling.jpg"],
    },
    {
      title: "Ductless Mini-Split Heat Pump",
      slug: "ductless-mini-split",
      category: "mini_split" as const,
      mrp: 3800,
      description: "Flexible heating and cooling solution for homes without ductwork.",
      isFeatured: false,
      suitableFor: ["Residential", "Multi-family"],
      technology: ["Zoned Control"],
      shape: ["Wall Mounted"],
      images: ["/services/mini-split.jpg"],
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
    });
  }
  console.log(`✅ ${products.length} products seeded.`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
