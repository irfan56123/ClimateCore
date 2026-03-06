import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FilterPanel from "./FilterPanel";
import {
  BRANDS, SHAPES, TECHNOLOGIES, PRICE_RANGES,
  type ActiveFilters,
} from "./constants";

export const revalidate = 3600;
export const dynamicParams = true;

const SHAPE_DB: Record<string, string> = {
  ric: "RIC", bte: "BTE", ite: "ITE", itc: "ITC", cic: "CIC", iic: "IIC",
};
const TECH_DB: Record<string, string> = {
  bluetooth: "Bluetooth", rechargeable: "Rechargeable", ai: "AI",
};
const CATEGORY_COLORS: Record<string, string> = {
  signia: "bg-purple-50 text-purple-700",
  phonak: "bg-orange-50 text-orange-700",
  widex: "bg-blue-50 text-blue-700",
  oticon: "bg-red-50 text-red-600",
  starkey: "bg-green-50 text-green-700",
};

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}`;

interface Filters extends ActiveFilters {
  priceMax?: number;
}

function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function parseSlug(parts?: string[]): Filters {
  const f: Filters = {};
  for (const part of parts ?? []) {
    if ((BRANDS as readonly string[]).includes(part)) f.brand = part;
    else if ((SHAPES as readonly string[]).includes(part)) f.shape = part;
    else if ((TECHNOLOGIES as readonly string[]).includes(part)) f.technology = part;
    else {
      const pr = (PRICE_RANGES as readonly { slug: string; label: string; max: number }[])
        .find((p) => p.slug === part);
      if (pr) { f.priceSlug = pr.slug; f.priceMax = pr.max; }
    }
  }
  return f;
}

function buildTitle(f: Filters): string {
  const pr = (PRICE_RANGES as readonly { slug: string; label: string; max: number }[])
    .find((p) => p.slug === f.priceSlug);

  if (f.brand && f.shape && pr) return `Best ${cap(f.brand)} ${f.shape.toUpperCase()} HVAC Systems ${pr.label}`;
  if (f.brand && f.shape) return `Best ${cap(f.brand)} HVAC Systems in ${f.shape.toUpperCase()} Shape`;
  if (f.brand && f.technology && pr) return `Best ${cap(f.brand)} ${cap(f.technology)} HVAC Systems ${pr.label}`;
  if (f.brand && f.technology) return `Best ${cap(f.brand)} ${cap(f.technology)} HVAC Systems in India`;
  if (f.brand && pr) return `Best ${cap(f.brand)} HVAC Systems ${pr.label}`;
  if (f.brand) return `Best ${cap(f.brand)} HVAC Systems in India`;
  if (f.shape && f.technology && pr) return `Best ${f.shape.toUpperCase()} ${cap(f.technology)} HVAC Systems ${pr.label}`;
  if (f.shape && f.technology) return `Best ${f.shape.toUpperCase()} ${cap(f.technology)} HVAC Systems in India`;
  if (f.shape && pr) return `Best ${f.shape.toUpperCase()} HVAC Systems ${pr.label}`;
  if (f.shape) return `Best ${f.shape.toUpperCase()} HVAC Systems in India`;
  if (f.technology && pr) return `Best ${cap(f.technology)} HVAC Systems ${pr.label}`;
  if (f.technology) return `Best ${cap(f.technology)} HVAC Systems in India`;
  if (pr) return `Best HVAC Systems ${pr.label} in India`;
  return "All HVAC Systems – Best Brands & Prices in India";
}

function buildDescription(f: Filters): string {
  const title = buildTitle(f);
  const brand = f.brand ? cap(f.brand) : "top";
  return `${title}. Compare ${brand} HVAC models, prices & features. Get expert advice from Vently Air Hearing – India's trusted hearing care specialists.`;
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata(
  { params }: { params: Promise<{ slug?: string[] }> }
): Promise<Metadata> {
  const { slug } = await params;
  const f = parseSlug(slug);
  const title = buildTitle(f);
  const description = buildDescription(f);
  const canonical = slug?.length
    ? `${BASE_URL}/all-hearing-aids/${slug.join("/")}`
    : `${BASE_URL}/all-hearing-aids`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      siteName: "Vently Air Hearing",
      images: [{ url: `${BASE_URL}/ventlylogo.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// ─── Static Params (pre-build common combinations) ───────────────────────────

export async function generateStaticParams() {
  const params: { slug: string[] }[] = [];

  // Single filters
  for (const b of BRANDS) params.push({ slug: [b] });
  for (const s of SHAPES) params.push({ slug: [s] });
  for (const t of TECHNOLOGIES) params.push({ slug: [t] });
  for (const p of PRICE_RANGES) params.push({ slug: [p.slug] });

  // Two-filter combinations
  for (const b of BRANDS) {
    for (const s of SHAPES) params.push({ slug: [b, s] });
    for (const t of TECHNOLOGIES) params.push({ slug: [b, t] });
    for (const p of PRICE_RANGES) params.push({ slug: [b, p.slug] });
  }
  for (const s of SHAPES) {
    for (const p of PRICE_RANGES) params.push({ slug: [s, p.slug] });
  }
  for (const t of TECHNOLOGIES) {
    for (const p of PRICE_RANGES) params.push({ slug: [t, p.slug] });
  }

  return params;
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function AllHearingAidsPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const f = parseSlug(slug);

  // Build Prisma where clause
  const where: Record<string, unknown> = {};
  if (f.brand) where.category = f.brand;
  if (f.shape) where.shape = { has: SHAPE_DB[f.shape] };
  if (f.technology) where.technology = { has: TECH_DB[f.technology] };
  if (f.priceMax) where.mrp = { lte: f.priceMax };

  const products = await prisma.product.findMany({
    where,
    orderBy: [{ isFeatured: "desc" }, { createdAt: "desc" }],
    select: {
      id: true, title: true, slug: true, category: true,
      mrp: true, isFeatured: true, images: true,
      technology: true, shape: true,
    },
  });

  const pageTitle = buildTitle(f);
  const description = buildDescription(f);

  // Breadcrumbs
  const crumbs = [
    { name: "Home", url: BASE_URL },
    { name: "All HVAC Systems", url: `${BASE_URL}/all-hearing-aids` },
  ];
  if (slug?.length) crumbs.push({ name: pageTitle, url: `${BASE_URL}/all-hearing-aids/${slug.join("/")}` });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.name,
          item: c.url,
        })),
      },
      {
        "@type": "ItemList",
        name: pageTitle,
        description,
        numberOfItems: products.length,
        itemListElement: products.slice(0, 20).map((p: any, i: number) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${BASE_URL}/product/${p.slug}`,
          name: p.title,
        })),
      },
    ],
  };

  const activeFilters: ActiveFilters = {
    brand: f.brand,
    shape: f.shape,
    technology: f.technology,
    priceSlug: f.priceSlug,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16 mt-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#023784] mb-3 leading-tight">
            {pageTitle}
          </h1>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">{description}</p>
        </div>

        {/* Filter Panel */}
        <FilterPanel active={activeFilters} />

        {/* Result count */}
        <p className="text-sm text-gray-400 mb-6">
          Showing{" "}
          <span className="font-semibold text-gray-600">{products.length}</span>{" "}
          HVAC{products.length !== 1 ? "s" : ""}
          {Object.values(activeFilters).some(Boolean) && " matching your filters"}
        </p>

        {/* Grid */}
        {products.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <p className="text-lg font-medium mb-2">No products found</p>
            <p className="text-sm mb-4">Try removing one of your filters.</p>
            <Link
              href="/all-hearing-aids"
              className="text-[#023784] text-sm font-semibold hover:underline"
            >
              View all HVACs →
            </Link>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative w-full h-52 bg-gray-50">
                  {product.images[0] ? (
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      fill
                      className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full text-gray-300 text-sm">
                      No Image
                    </div>
                  )}
                  {product.isFeatured && (
                    <span className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                      ★ Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <span
                    className={`self-start text-[10px] font-semibold px-2.5 py-0.5 rounded-full capitalize mb-2 ${CATEGORY_COLORS[product.category] ?? "bg-gray-100 text-gray-600"}`}
                  >
                    {product.category}
                  </span>
                  <h2 className="text-sm font-bold text-gray-800 line-clamp-2 mb-1 leading-snug">
                    {product.title}
                  </h2>
                  {product.technology.length > 0 && (
                    <p className="text-xs text-gray-400 line-clamp-1">
                      {product.technology.slice(0, 2).join(" · ")}
                    </p>
                  )}
                  <div className="mt-auto pt-3 flex items-center justify-between">
                    {product.mrp ? (
                      <span className="text-[#023784] font-bold text-sm">
                        ₹{product.mrp.toLocaleString()}
                      </span>
                    ) : (
                      <span className="text-gray-400 text-xs">Price on request</span>
                    )}
                    <span className="text-[#023784] text-xs font-semibold group-hover:underline">
                      View →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
