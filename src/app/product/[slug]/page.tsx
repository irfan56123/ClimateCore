import { ProductCategory } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import HVACSystemType from "@/components/HVACSystemType";
import ImageShowcaseSection from "@/components/ImageShowcaseSection";
import ProductContent from "./ProductContent";

import { prisma } from "@/lib/prisma";

export const revalidate = 60;
export const dynamicParams = true;

// ProductCategory is imported from @prisma/client

// Type definition for the product returned by Prisma
type Product = {
  id: string;
  title: string;
  slug: string;
  category: string;
  mrp: number | null;
  description: string | null;
  isFeatured: boolean;
  suitableFor: string[];
  technology: string[];
  shape: string[];
  images: string[];
};

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}`;

async function getProduct(slug: string): Promise<Product | null> {
  try {
    const product = await prisma.product.findUnique({
      where: { slug }
    });
    return product as Product | null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

async function getRelatedProducts(category: ProductCategory, excludeSlug: string): Promise<Product[]> {
  try {
    const products = await prisma.product.findMany({
      where: {
        category,
        slug: { not: excludeSlug }
      },
      take: 6,
    });
    return products as unknown as Product[];
  } catch (error) {
    console.error("Error fetching related products:", error);
    return [];
  }
}

// Generate FAQ questions based on product attributes
function generateFAQs(product: Product): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];
  const brandName = product.category.charAt(0).toUpperCase() + product.category.slice(1);

  faqs.push({
    question: `What is this ${brandName} system?`,
    answer: `Vently Air provides world-leading ${brandName} solutions known for advanced technology, exceptional efficiency, and reliability. The ${product.title} is one of our premium models designed to help homeowners experience balanced comfort and clean air.`,
  });

  if (product.technology.length > 0) {
    const tech = product.technology.join(", ");
    faqs.push({
      question: `What technology does the ${product.title} use?`,
      answer: `The ${product.title} features ${tech}. These technologies work together to deliver outstanding clarity, comfort, and connectivity for the wearer.`,
    });
  }

  if (product.technology.includes("Bluetooth") || product.technology.some((t) => t.toLowerCase().includes("bluetooth"))) {
    faqs.push({
      question: `Can I connect the ${product.title} to my phone via Bluetooth?`,
      answer: `Yes, the ${product.title} supports Bluetooth connectivity, allowing you to stream audio directly from your smartphone, TV, or other compatible devices.`,
    });
  }

  if (product.shape.length > 0) {
    const shapes = product.shape.join(", ");
    faqs.push({
      question: `What is the style and shape of the ${product.title}?`,
      answer: `The ${product.title} is available in ${shapes} style(s). ${product.shape.includes("IIC") || product.shape.includes("CIC") ? "This makes it extremely discreet and nearly invisible when worn." : product.shape.includes("RIC") ? "RIC (Receiver-in-Canal) designs offer a comfortable fit with excellent sound quality." : "This style balances comfort, discretion, and performance."}`,
    });
  }

  if (product.technology.some((t) => t.toLowerCase().includes("quiet")) || product.shape.some((s) => ["Compact", "Slim"].includes(s))) {
    faqs.push({
      question: `Is the ${product.title} quiet and discreet?`,
      answer: `Yes, the ${product.title} is designed for maximum quietness. Its compact form factor and advanced noise reduction technology make it nearly silent during operation.`,
    });
  }

  if (product.suitableFor.length > 0) {
    const levels = product.suitableFor.join(", ");
    faqs.push({
      question: `What type of property is the ${product.title} suitable for?`,
      answer: `The ${product.title} is recommended for ${levels}. We advise getting a professional assessment to confirm the best solution for your space.`,
    });
  }

  if (product.mrp) {
    faqs.push({
      question: `What is the price of the ${product.title}?`,
      answer: `The ${product.title} is priced at ₹${product.mrp.toLocaleString()}. Vently Air offers flexible financing options. Contact us for the latest offers and to schedule a free inspection.`,
    });
  }

  faqs.push({
    question: `Where can I get a free estimate for the ${product.title}?`,
    answer: `Vently Air offers free on-site estimates for the ${product.title}. Book an appointment online or call us to have our technicians evaluate your space.`,
  });

  return faqs;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return {
      title: "Product Not Found | Vently Air",
      description: "This product could not be found.",
    };
  }

  const brandName = product.category.charAt(0).toUpperCase() + product.category.slice(1);
  const description =
    product.description?.replace(/<[^>]+>/g, "").slice(0, 155) ||
    `Buy ${product.title} from Vently Air. ${product.technology.slice(0, 2).join(", ")} system${product.mrp ? ` at ₹${product.mrp.toLocaleString()}` : ""}. Expert installation at Vently Air.`;

  const image = product.images[0] || `${BASE_URL}/default-og.jpg`;

  return {
    title: `${product.title} | ${brandName} HVAC System | Vently Air`,
    description,
    openGraph: {
      title: product.title,
      description,
      url: `${BASE_URL}/product/${product.slug}`,
      type: "website",
      siteName: "Vently Air",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description,
      images: [image],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return notFound();

  const related = await getRelatedProducts(product.category as ProductCategory, product.slug);
  const faqs = generateFAQs(product);
  const brandName = product.category.charAt(0).toUpperCase() + product.category.slice(1);
  const imageSrc = product.images[0] || `${BASE_URL}/default-og.jpg`;
  const cleanDescription =
    product.description?.replace(/<[^>]+>/g, "").slice(0, 160) || "";

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: cleanDescription,
    brand: { "@type": "Brand", name: brandName },
    image: product.images,
    url: `${BASE_URL}/product/${product.slug}`,
    ...(product.mrp && {
      offers: {
        "@type": "Offer",
        price: product.mrp,
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "Vently Air" },
      },
    }),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
      {/* JSON-LD Schemas */}
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />

      {/* Product top section */}
      <section className="flex flex-col lg:flex-row items-start gap-10 mb-16">
        {/* Image gallery */}
        <div className="lg:w-1/2 w-full">
          <div className="relative w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden mx-auto">
            <Image
              src={imageSrc}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-contain rounded-xl"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-2 mt-3 flex-wrap justify-center">
              {product.images.slice(1, 5).map((img, i) => (
                <div key={i} className="relative w-16 h-16 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                  <Image src={img} alt={`${product.title} view ${i + 2}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2 w-full flex flex-col justify-start mt-6 lg:mt-0">
          <div className="flex items-center gap-2 flex-wrap mb-3">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#023784]/10 text-[#023784] capitalize">
              {brandName}
            </span>
            {product.isFeatured && (
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
                ★ Featured
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-[#023784] mb-4 leading-snug">
            {product.title}
          </h1>

          {product.mrp && (
            <p className="text-2xl font-black text-gray-800 mb-4">
              ₹{product.mrp.toLocaleString()}
              <span className="text-sm font-normal text-gray-400 ml-2">MRP</span>
            </p>
          )}

          {/* Attributes */}
          {product.technology.length > 0 && (
            <div className="mb-3">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Technology</p>
              <div className="flex flex-wrap gap-1.5">
                {product.technology.map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">{t}</span>
                ))}
              </div>
            </div>
          )}

          {product.shape.length > 0 && (
            <div className="mb-3">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Style</p>
              <div className="flex flex-wrap gap-1.5">
                {product.shape.map((s) => (
                  <span key={s} className="px-2.5 py-1 bg-purple-50 text-purple-700 text-xs rounded-full font-medium">{s}</span>
                ))}
              </div>
            </div>
          )}

          {product.suitableFor.length > 0 && (
            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Suitable For</p>
              <div className="flex flex-wrap gap-1.5">
                {product.suitableFor.map((s) => (
                  <span key={s} className="px-2.5 py-1 bg-green-50 text-green-700 text-xs rounded-full font-medium">{s}</span>
                ))}
              </div>
            </div>
          )}

          {product.description && (
            <div className="mb-6">
              <ProductContent content={product.description} />
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <Link
              href={`/price-download?utm_source=website&utm_medium=single_product&utm_campaign=${encodeURIComponent(product.title)}`}
              className="bg-[#023784] text-white px-6 py-3 rounded-md font-medium hover:bg-[#012d66] transition text-center"
            >
              View Price
            </Link>
            <Link
              href={`/estimate?utm_source=website&utm_medium=single_product&utm_campaign=${encodeURIComponent(product.title)}`}
              className="border border-[#023784] text-[#023784] px-6 py-3 rounded-md font-medium hover:bg-[#023784] hover:text-white transition text-center"
            >
              Get Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="mt-14 mb-14">
          <h2 className="text-2xl font-bold text-[#023784] mb-6 text-center">
            More {brandName} HVAC Systems
          </h2>
          <div className="hidden sm:grid grid-cols-3 lg:grid-cols-6 gap-4">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/product/${p.slug}`}
                className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 block"
              >
                <div className="relative h-40 flex items-center justify-center bg-white">
                  {p.images[0] ? (
                    <Image src={p.images[0]} alt={p.title} fill loading="lazy" className="object-contain p-2" />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-sm">No Image</div>
                  )}
                </div>
                <div className="p-2 text-sm font-medium text-center line-clamp-2">{p.title}</div>
              </Link>
            ))}
          </div>
          <div className="flex sm:hidden overflow-x-auto gap-4 pb-2 -mx-4 px-4">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/product/${p.slug}`}
                className="min-w-[180px] bg-white border rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-1 transition duration-300 block flex-shrink-0"
              >
                <div className="relative h-40 bg-white">
                  {p.images[0] ? (
                    <Image src={p.images[0]} alt={p.title} fill loading="lazy" className="object-contain p-2" />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-sm">No Image</div>
                  )}
                </div>
                <div className="p-2 text-sm font-medium text-center line-clamp-2">{p.title}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="my-14">
          <h2 className="text-2xl font-bold text-[#023784] mb-7 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white border border-gray-100 rounded-xl shadow-sm cursor-pointer"
              >
                <summary className="flex items-center justify-between px-5 py-4 font-semibold text-gray-800 text-sm select-none list-none">
                  {faq.question}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform duration-200 flex-shrink-0 ml-3">▼</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      )}

      <ImageShowcaseSection
        title="High Performance HVAC Systems"
        description="Vently Air Solutions is an authorized partner for leading global HVAC brands. Our systems reflect our trusted expertise and commitment to world-class indoor air comfort."
        images={[
          { src: "/images/certifications/widex.png", alt: "Widex Certification" },
          { src: "/images/certifications/signia.jpg", alt: "Signia Certification" },
          { src: "/images/certifications/phonak.jpeg", alt: "Phonak Certification" },
        ]}
      />

      <HVACSystemType />
    </main>
  );
}
