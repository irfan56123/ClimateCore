import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Video, Monitor, ShieldCheck, CheckCircle2 } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { services, getService, ADVANTAGES } from "../services-data";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";

const advantageIcons = [Video, Monitor, ShieldCheck];

type PageProps = {
  params: Promise<{ slug: string }>;
};

// ── Static params for SSG ──────────────────────────────────────────────────
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// ── Per-page SEO metadata ─────────────────────────────────────────────────
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const customImageSetting = await prisma.setting.findUnique({
    where: { key: `service_image_${slug}` }
  });
  const displayImage = customImageSetting?.value || service.image;

  return {
    title: `${service.title} | ClimateCore Air`,
    description: service.description[0],
    alternates: {
      canonical: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ClimateCoreair.com"}/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | ClimateCore Air`,
      description: service.description[0],
      url: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ClimateCoreair.com"}/services/${service.slug}`,
      siteName: "ClimateCore Air",
      images: [
        {
          url: displayImage.startsWith("data:image") ? displayImage : `https://${process.env.NEXT_PUBLIC_DOMAIN || "ClimateCoreair.com"}${displayImage}`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      type: "website",
    },
  };
}

// ── Page ──────────────────────────────────────────────────────────────────
export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const customImageSetting = await prisma.setting.findUnique({
    where: { key: `service_image_${slug}` }
  });
  const displayImage = customImageSetting?.value || service.image;

  const related = services.filter((s) =>
    service.relatedSlugs.includes(s.slug)
  );

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-0">
      {/* ── Breadcrumbs ── */}
      <div className="mb-2">
        <Breadcrumbs />
      </div>

      {/* ── Hero ── */}
      <section className="py-10 md:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text */}
          <div className="lg:w-1/2 space-y-5">
            <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-4 py-2 rounded-full border border-green-200">
              Licensed &amp; Insured · Same Day Service Available
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-[#0D2240] via-[#184A99] to-[#7C7C7C] bg-clip-text text-transparent">
                {service.tagline}
              </span>
            </h1>
            {service.description.map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed">
                {para}
              </p>
            ))}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="/estimate"
                className="bg-[#184A99] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#123a7a] transition text-center"
              >
                Get Free Estimate
              </a>
              <a
                href={`tel:${process.env.NEXT_PUBLIC_PHONE || "+919334026147"}`}
                className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
              >
                Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+91 9334026147"}
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 w-full relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={displayImage}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── ClimateCore Air Advantage ── */}
      <section className="py-14 bg-gray-50 rounded-2xl px-6 md:px-10 my-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-3">
          The{" "}
          <span className="bg-gradient-to-r from-[#184A99] to-[#0D2240] bg-clip-text text-transparent">
            ClimateCore Air
          </span>{" "}
          Advantage
        </h2>
        <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
          Review what makes us stand out from the rest.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {ADVANTAGES.map((adv, i) => {
            const Icon = advantageIcons[i];
            return (
              <div
                key={adv.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition"
              >
                <div className="bg-blue-50 p-4 rounded-full mb-4">
                  <Icon className="w-7 h-7 text-[#184A99]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{adv.title}</h3>
                <p className="text-sm text-gray-500">{adv.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Quality Statement ── */}
      <section className="py-10 px-4 text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#184A99] to-[#0D2240] text-white rounded-2xl p-8 shadow-lg">
          <CheckCircle2 className="w-10 h-10 mx-auto mb-4 opacity-80" />
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Quality You Can See
          </h2>
          <p className="text-white/85 leading-relaxed">
            {service.qualityStatement}
          </p>
        </div>
      </section>

      {/* ── Service-Specific Extras ── */}
      {service.extras.map((extra, i) => (
        <section key={i} className="py-14">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-10">
            <span className="bg-gradient-to-r from-[#184A99] to-[#0D2240] bg-clip-text text-transparent">
              {extra.heading}
            </span>
          </h2>

          {extra.type === "benefits" && (
            <div className="grid md:grid-cols-3 gap-6">
              {extra.items.map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
                >
                  <div className="w-2 h-8 bg-[#184A99] rounded-full mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">{item.label}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          )}

          {extra.type === "metrics" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {extra.items.map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition"
                >
                  <span className="inline-block bg-[#184A99]/10 text-[#184A99] text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {item.label}
                  </span>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}

      {/* ── FAQ ── */}
      <div className="my-10 rounded-2xl overflow-hidden">
        <FAQ
          faqs={service.faqs}
          heading={`${service.title} — Frequently Asked Questions`}
        />
      </div>

      {/* ── Related Services ── */}
      {related.length > 0 && (
        <section className="py-14">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-10">
            <span className="bg-gradient-to-r from-[#184A99] to-[#0D2240] bg-clip-text text-transparent">
              Additional Services
            </span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={rel.image}
                    alt={rel.title}
                    fill
                    className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 group-hover:text-[#184A99] transition-colors text-sm">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{rel.shortDesc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Bottom CTA ── */}
      <section className="bg-[#0D2240] rounded-2xl py-14 px-6 my-10 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
          Get An Estimate
        </h2>
        <p className="text-gray-300 mb-8 max-w-lg mx-auto">
          A local rep will call you within 1 hour to discuss your needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/estimate"
            className="bg-white text-[#184A99] font-bold px-8 py-4 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Schedule In-Person
          </a>
          <a
            href="/estimate"
            className="border border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition"
          >
            Contactless Zoom Inspection
          </a>
        </div>
      </section>
    </main>
  );
}
