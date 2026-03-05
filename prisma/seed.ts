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

  const products = [
    {
      title: "Signia Kit Active Pro IX",
      slug: "signia-kit-active-pro-ix",
      category: "signia" as const,
      mrp: 299990,
      description: "Signia Active Pro IX hearing aid from the Integrated Xperience platform designed for advanced speech clarity and wireless connectivity.",
      isFeatured: false,
      suitableFor: ["Mild", "Moderate", "Severe"],
      technology: ["Bluetooth", "Rechargeable", "IX Platform"],
      shape: ["ITE"],
      images: ["/deprod.jpg"],
    },
    {
      title: "Signia Kit Active IX",
      slug: "signia-kit-active-ix",
      category: "signia" as const,
      mrp: 149990,
      description: "Rechargeable Signia Active IX hearing aid designed for everyday hearing support with modern connectivity.",
      isFeatured: false,
      suitableFor: ["Mild", "Moderate"],
      technology: ["Bluetooth", "Rechargeable", "IX Platform"],
      shape: ["ITE"],
      images: ["/deprod.jpg"],
    },
    {
      title: "Signia Kit Styletto 7IX",
      slug: "signia-kit-styletto-7ix",
      category: "signia" as const,
      mrp: 699990,
      description: "Premium Styletto 7IX rechargeable hearing aid with advanced speech enhancement and sleek design.",
      isFeatured: false,
      suitableFor: ["Mild", "Moderate", "Severe"],
      technology: ["Bluetooth", "Rechargeable", "IX Platform"],
      shape: ["RIC"],
      images: ["/deprod.jpg"],
    },
    {
      title: "Signia Kit Styletto 5IX",
      slug: "signia-kit-styletto-5ix",
      category: "signia" as const,
      mrp: 469990,
      description: "Styletto 5IX hearing aid delivering clear speech understanding with stylish rechargeable design.",
      isFeatured: false,
      suitableFor: ["Mild", "Moderate", "Severe"],
      technology: ["Bluetooth", "Rechargeable"],
      shape: ["RIC"],
      images: ["/deprod.jpg"],
    },
    {
      title: "Signia Kit Styletto 3IX",
      slug: "signia-kit-styletto-3ix",
      category: "signia" as const,
      mrp: 340990,
      description: "Mid-range Styletto 3IX hearing aid offering enhanced clarity and rechargeable convenience.",
      isFeatured: false,
      suitableFor: ["Mild", "Moderate"],
      technology: ["Rechargeable"],
      shape: ["RIC"],
      images: ["/deprod.jpg"],
    },
    {
      title: "Signia Kit Styletto 2IX",
      slug: "signia-kit-styletto-2ix",
      category: "signia" as const,
      mrp: 159990,
      description: "Entry-level Styletto 2IX hearing aid providing reliable hearing support.",
      isFeatured: false,
      suitableFor: ["Mild", "Moderate"],
      technology: ["Rechargeable"],
      shape: ["RIC"],
      images: ["/deprod.jpg"],
    },
    {
      title: "Signia Kit Styletto 1IX",
      slug: "signia-kit-styletto-1ix",
      category: "signia" as const,
      mrp: 129990,
      description: "Affordable Styletto 1IX hearing aid with rechargeable design and modern styling.",
      isFeatured: false,
      suitableFor: ["Mild"],
      technology: ["Rechargeable"],
      shape: ["RIC"],
      images: ["/deprod.jpg"],
    },
    {
      title: "Signia Pure Charge&Go 7IX",
      slug: "signia-pure-charge-go-7ix",
      category: "signia" as const,
      mrp: 379990,
      description: "High-performance Signia Pure Charge&Go 7IX hearing aid featuring IX platform and Bluetooth streaming.",
      isFeatured: true,
      suitableFor: ["Mild", "Moderate", "Severe"],
      technology: ["Bluetooth", "Rechargeable", "AI"],
      shape: ["RIC"],
      images: ["/deprod.jpg"],
    },
    {
      title: "Signia Pure Charge&Go 5IX",
      slug: "signia-pure-charge-go-5ix",
      category: "signia" as const,
      mrp: 239990,
      description: "Rechargeable Pure Charge&Go 5IX hearing aid designed for natural speech clarity.",
      isFeatured: false,
      suitableFor: ["Mild", "Moderate", "Severe"],
      technology: ["Bluetooth", "Rechargeable"],
      shape: ["RIC"],
      images: ["/deprod.jpg"],
    },
    {
      title: "Signia Pure Charge&Go 3IX",
      slug: "signia-pure-charge-go-3ix",
      category: "signia" as const,
      mrp: 175990,
      description: "Reliable Pure Charge&Go 3IX hearing aid for daily listening environments.",
      isFeatured: false,
      suitableFor: ["Mild", "Moderate"],
      technology: ["Rechargeable"],
      shape: ["RIC"],
      images: ["/deprod.jpg"],
    },
    {
      title: "Signia Pure Charge&Go 2IX",
      slug: "signia-pure-charge-go-2ix",
      category: "signia" as const,
      mrp: 85990,
      description: "Entry-level Pure Charge&Go 2IX hearing aid with rechargeable convenience.",
      isFeatured: false,
      suitableFor: ["Mild", "Moderate"],
      technology: ["Rechargeable"],
      shape: ["RIC"],
      images: ["/deprod.jpg"],
    },
    {
      title: "Signia Pure Charge&Go 1IX",
      slug: "signia-pure-charge-go-1ix",
      category: "signia" as const,
      mrp: 67990,
      description: "Affordable Pure Charge&Go 1IX hearing aid for basic hearing support.",
      isFeatured: false,
      suitableFor: ["Mild"],
      technology: ["Rechargeable"],
      shape: ["RIC"],
      images: ["/deprod.jpg"],
    },
    {
      title: "Signia Insio 7IX",
      slug: "signia-insio-7ix",
      category: "signia" as const,
      mrp: 309990,
      description: "Custom-fit Insio 7IX hearing aid designed for discreet in-ear use.",
      isFeatured: false,
      suitableFor: ["Mild", "Moderate", "Severe"],
      technology: ["Custom Fit"],
      shape: ["ITE", "ITC", "CIC"],
      images: ["/deprod.jpg"],
    },
    {
      title: "Signia Insio 5IX",
      slug: "signia-insio-5ix",
      category: "signia" as const,
      mrp: 184990,
      description: "Custom Insio 5IX hearing aid offering natural sound in a compact design.",
      isFeatured: false,
      suitableFor: ["Mild", "Moderate"],
      technology: ["Custom Fit"],
      shape: ["ITE", "ITC"],
      images: ["/deprod.jpg"],
    },
    {
      title: "Signia Insio 3IX",
      slug: "signia-insio-3ix",
      category: "signia" as const,
      mrp: 109990,
      description: "Affordable Insio 3IX in-ear hearing aid with discreet design.",
      isFeatured: false,
      suitableFor: ["Mild", "Moderate"],
      technology: ["Custom Fit"],
      shape: ["ITE", "ITC"],
      images: ["/deprod.jpg"],
    },
    {
      title: "Signia Insio 2IX",
      slug: "signia-insio-2ix",
      category: "signia" as const,
      mrp: 62990,
      description: "Entry-level Insio 2IX custom hearing aid for basic hearing support.",
      isFeatured: false,
      suitableFor: ["Mild"],
      technology: ["Custom Fit"],
      shape: ["ITE"],
      images: ["/deprod.jpg"],
    },
    {
      title: "Signia Insio 1IX",
      slug: "signia-insio-1ix",
      category: "signia" as const,
      mrp: 45990,
      description: "Basic Insio 1IX in-ear hearing aid designed for mild hearing loss.",
      isFeatured: false,
      suitableFor: ["Mild"],
      technology: ["Custom Fit"],
      shape: ["ITE"],
      images: ["/deprod.jpg"],
    },
    {
      title: "Signia Orion C&G 200",
      slug: "signia-orion-cg-200",
      category: "signia" as const,
      mrp: 38990,
      description: "Signia Orion Charge&Go 200 rechargeable hearing aid designed for reliable everyday performance.",
      isFeatured: false,
      suitableFor: ["Mild", "Moderate"],
      technology: ["Rechargeable"],
      shape: ["RIC"],
      images: ["/deprod.jpg"],
    },
    {
      title: "Signia Orion C&G 100",
      slug: "signia-orion-cg-100",
      category: "signia" as const,
      mrp: 35990,
      description: "Signia Orion Charge&Go 100 hearing aid offering essential hearing support.",
      isFeatured: false,
      suitableFor: ["Mild", "Moderate"],
      technology: ["Rechargeable"],
      shape: ["RIC"],
      images: ["/deprod.jpg"],
    },
    {
      title: "Signia Orion C&G 75",
      slug: "signia-orion-cg-75",
      category: "signia" as const,
      mrp: 32990,
      description: "Affordable Orion C&G 75 hearing aid with rechargeable battery.",
      isFeatured: false,
      suitableFor: ["Mild"],
      technology: ["Rechargeable"],
      shape: ["RIC"],
      images: ["/deprod.jpg"],
    },
    {
      title: "Signia Orion C&G 50",
      slug: "signia-orion-cg-50",
      category: "signia" as const,
      mrp: 28990,
      description: "Entry-level Orion C&G 50 hearing aid suitable for basic hearing needs.",
      isFeatured: false,
      suitableFor: ["Mild"],
      technology: ["Rechargeable"],
      shape: ["RIC"],
      images: ["/deprod.jpg"],
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
