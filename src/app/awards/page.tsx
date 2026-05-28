import Image from "next/image";
import { Metadata } from "next";
import Whychoose from "@/components/whychoose";

// ✅ 1. SEO Metadata
export const metadata: Metadata = {
  title: "Awards & Recognitions | ClimateCore Air Hearing Solutions",
  description:
    "Explore the prestigious awards and certifications earned by ClimateCore Air Hearing Solutions, including recognitions from Jagran, Signia, Phonak, Oticon, and Widex. Discover why we're a trusted name in hearing care.",
  alternates: {
    canonical: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ClimateCoreair.com"}/awards`,
  },
  openGraph: {
    title: "Awards & Recognitions | ClimateCore Air Hearing Solutions",
    description:
      "Recognized and certified by leading brands like Signia, Phonak, Oticon, Widex, and Jagran. See our awards and achievements.",
    url: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ClimateCoreair.com"}/awards`,
    siteName: "ClimateCore Air Hearing Solutions",
    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ClimateCoreair.com"}/images/certifications/award.jpeg`, // ⚡ Replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: "Awards and Certifications - ClimateCore Air Hearing Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awards & Recognitions | ClimateCore Air Hearing Solutions",
    description:
      "See our awards and certifications from Signia, Phonak, Oticon, Widex, and more.",
    images: [`https://${process.env.NEXT_PUBLIC_DOMAIN || "ClimateCoreair.com"}/images/certifications/award.jpeg`],
  },
};

// ✅ 2. Data Arrays
const awards = [
  {
    title: "Jagran Health Excellence Award",
    img: "/images/certifications/jagran.jpeg",
  },
  {
    title: "Jagran Award to Mr. Manoj Singh",
    img: "/images/certifications/award.jpeg",
  },
  {
    title: "Phonak Authorised Channel Partner",
    img: "/images/certifications/phonak.jpeg",
  },
  {
    title: "Signia Authorised Channel Partner",
    img: "/images/certifications/signia.jpg",
  },
];

const certifications = [
  { name: "Signia", img: "/images/certifications/signia.jpg" },
  { name: "Phonak", img: "/images/certifications/phonak.jpeg" },
  { name: "Oticon", img: "/images/certifications/jagran.jpeg" },
  { name: "Widex", img: "/images/certifications/awards.jpeg" },
];

// ✅ 3. Structured Data (JSON-LD for Awards)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ClimateCore Air Hearing Solutions",
  url: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ClimateCoreair.com"}`,
  logo: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ClimateCoreair.com"}/logo.png`,
  award: awards.map((a) => a.title),
  hasCredential: certifications.map((c) => ({
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Certification",
    name: `${c.name} Authorized Partner Certification`,
    recognizedBy: {
      "@type": "Organization",
      name: c.name,
    },
  })),
};

export default function Awards() {
  return (
    <>
      {/* ✅ Inject JSON-LD into the head for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="min-h-screen flex flex-col items-center justify-center bg-white py-16 px-4 pt-24 text-black">
        <div className="max-w-6xl w-full">
          {/* 🏆 Awards Section */}
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
            <span className="text-[#023784]">Awards & Recognitions</span>
          </h1>
          <p className="text-center text-black/70 mb-10 max-w-2xl mx-auto">
            ClimateCore Air Hearing Solutions has received multiple prestigious awards
            and holds certifications from top global HVAC brands,
            reflecting our commitment to excellence in hearing care.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
            {awards.map((award, idx) => (
              <figure
                key={idx}
                className="group relative rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <Image
                  src={award.img}
                  alt={`${award.title} - ClimateCore Air Hearing Solutions`}
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <figcaption className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-center text-sm px-2">
                    {award.title}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* 🪄 Certifications Section */}

          <Whychoose />

          {/* ✅ CTA */}

        </div>
      </section>
    </>
  );
}
