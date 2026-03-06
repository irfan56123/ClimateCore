import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { services } from "./services-data";
import TestimonialSection from "@/components/TestimonialSection";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Our Services | Vently Air",
  description:
    "Explore Vently Air's full range of indoor air quality services — duct cleaning, dryer vent, furnace cleaning, chimney cleaning, sanitation, UV light installation, and air quality testing.",
  alternates: {
    canonical: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/services`,
  },
  openGraph: {
    title: "Our Services | Vently Air",
    description:
      "Professional HVAC and indoor air quality services by Vently Air. Licensed & insured technicians serving MA, CT, NH, NC & DC.",
    url: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/services`,
    siteName: "Vently Air",
    type: "website",
  },
};

const servicesFaqs = [
  {
    q: "What services does Vently Air offer?",
    a: "We offer air duct cleaning, dryer vent service, furnace/coil/blower fan cleaning, chimney cleaning, sanitation, UV light installation, and professional air quality testing.",
  },
  {
    q: "How do I get a quote?",
    a: "You can schedule an in-person inspection or get a contactless Zoom quote from the comfort of your home. A local rep will call you within 1 hour to discuss your needs.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. All Vently Air technicians are fully licensed and insured, so you can trust the quality and safety of every job we perform.",
  },
  {
    q: "What areas do you serve?",
    a: "We currently have providers in Massachusetts, Connecticut, New Hampshire, North Carolina & Washington DC.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-b from-[#eaf5ff] to-white pt-28 pb-16 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-5">
          <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-4 py-2 rounded-full border border-green-200">
            Licensed &amp; Insured · Same Day Service Available
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-[#0D2240] via-[#184A99] to-[#7C7C7C] bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From duct cleaning to UV light installation, our certified
            technicians deliver indoor air quality solutions you can see and
            feel.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <a
              href="/estimate"
              className="bg-[#184A99] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#123a7a] transition text-center"
            >
              Get Free Estimate
            </a>
            <a
              href={`tel:${process.env.NEXT_PUBLIC_PHONE || "+916204260510"}`}
              className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
            >
              Call {process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+91 6204260510"}
            </a>
          </div>
        </div>
      </section>

      {/* ── Service Cards ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              <span className="bg-gradient-to-r from-[#184A99] to-[#0D2240] bg-clip-text text-transparent">
                #1 In Customer Satisfaction
              </span>
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              With many years of experience we&apos;ve collected a long list of
              loyal customers who have supported us and are happy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4 bg-[#184A99] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md">
                    Certified Service
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#184A99] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 flex-1">
                    {service.shortDesc}
                  </p>
                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#184A99] flex items-center gap-1 group-hover:gap-2 transition-all">
                      LEARN MORE <ArrowRight size={14} />
                    </span>
                    <span className="text-[10px] text-gray-400 font-medium">
                      Licensed &amp; Insured
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <TestimonialSection />

      {/* ── FAQ ── */}
      <FAQ faqs={servicesFaqs} heading="Services — Frequently Asked Questions" />

      {/* ── Bottom CTA ── */}
      <section className="bg-[#0D2240] py-16 px-4 text-center text-white">
        <h2 className="text-3xl font-extrabold mb-3">
          Ready to Breathe Easier?
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          A local rep will call you within 1 hour to discuss your needs. Same
          day service available.
        </p>
        <a
          href="/estimate"
          className="inline-block bg-white text-[#184A99] font-bold px-8 py-4 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Get An Estimate
        </a>
      </section>
    </main>
  );
}
