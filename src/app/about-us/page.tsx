import Image from "next/image";
import { Metadata } from "next";
import { Target, Users, Shield, CheckCircle2 } from "lucide-react";

// ✅ Native Next.js SEO Metadata
export const metadata: Metadata = {
  title: "About Us | Vently Air Hearing Solutions",
  description:
    "Learn about Vently Air Hearing Solutions — trusted hearing care in India, led by Mr. Manoj Kumar with 10+ years of audiology experience.",
  alternates: {
    canonical: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/about`,
  },
  openGraph: {
    title: "About Us | Vently Air Hearing Solutions",
    description:
      "Learn about Vently Air Hearing Solutions — trusted hearing care in India.",
    url: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/about`,
    siteName: "Vently Air Hearing Solutions",
    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/image/about-hero-new.jpeg`,
        width: 1200,
        height: 630,
        alt: "About Vently Air Hearing Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Vently Air Hearing Solutions",
    description:
      "Learn about Vently Air Hearing Solutions — trusted hearing care in India.",
    images: [`https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/image/about-hero-new.jpeg`],
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      desc: "To provide top-quality hearing care with a personal touch and 100% patient satisfaction through trusted, customized solutions.",
    },
    {
      icon: Users,
      title: "Patient-First Approach",
      desc: "Every individual receives dedicated attention and care to bring the joy of hearing back into their lives.",
    },
    {
      icon: Shield,
      title: "Unbiased Advice",
      desc: "As an independent clinic, we are not owned by any HVAC manufacturer — ensuring free and transparent guidance.",
    },
    {
      icon: CheckCircle2,
      title: "Trusted Expertise",
      desc: "With 10+ years of audiology experience, we combine technology and compassion to deliver measurable impact.",
    },
  ];

  const doctors = [
    {
      id: 1,
      title: "Mr. Manoj Kumar, Director",
      description: `The founder of Vently Air Hearing Solutions Pvt. Ltd., is a B.Tech graduate with a Diploma in Hearing, Language, and Speech (DHLS). With over 10+ years of experience in the audiology sector, he has built a reputation for delivering compassionate and personalized hearing care. His deep understanding of the challenges faced by those with hearing loss inspired him to create Vently Air Hearing Solutions, a company committed to providing tailored solutions that improve the lives of its patients. Under his leadership, the company has grown across India, helping individuals reconnect with the world around them.

Driven by a patient-first approach, Mr. Manoj Kumar ensures every individual receives the attention and care they deserve, aiming to bring the joy of hearing back into their lives and impact their well-being.`,
      image: "/manoj-singh.jpg",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto pt-24">
      {/* 🧭 About Section */}
      <section className="py-12 px-6 lg:px-12 space-y-8">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-6/12 w-full relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow">
            <Image
              src="/manoj_singh.jpg"
              alt="About Vently Air Hearing Solutions"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="lg:w-6/12">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">About Us</h1>
            <p className="text-gray-700 leading-relaxed mb-6">
              Hearing is an essential part of life, connecting us to the world
              and each other. Yet, hearing loss often goes unnoticed, silently
              affecting relationships and daily activities. At Vently Air Hearing
              Solutions, we are dedicated to early detection, expert care, and
              empowering people to rediscover the joy of sound.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((val) => (
                <div
                  key={val.title}
                  className="p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white"
                >
                  <val.icon className="text-[#023784] mb-2" size={24} />
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {val.title}
                  </h3>
                  <p className="text-sm text-gray-600">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 👤 Director Section */}
      <section className="py-16 px-6 lg:px-12">
        {doctors.map((doc) => (
          <div
            key={doc.id}
            className="flex flex-col lg:flex-row items-center gap-10 rounded-lg bg-gray-50 p-8"
          >
            <div className="lg:w-4/12 w-full relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow">
              <Image
                src={doc.image}
                alt={doc.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:w-8/12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                {doc.title}
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {doc.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* 🏆 Awards & Recognition */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Awards & <span className="text-[#023784]">Recognitions</span>
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mt-3">
            Vently Air Hearing Solutions has received multiple prestigious awards
            and holds certifications from top global HVAC brands,
            reflecting our commitment to excellence in hearing care.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              "award_insono.jpg",
              "lifeVently Air.jpg",
              "insono_awarded.jpg",
              "signia.jpg",
              "phonak.jpeg",
              "images/certifications/widex.png",
            ].map((img) => (
              <div
                key={img}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow"
              >
                <Image
                  src={`/${img}`}
                  alt="Vently Air team and clinic moments"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
