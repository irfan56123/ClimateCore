import Image from "next/image";
import { Metadata } from "next";

// ---------- SEO METADATA ----------
export const metadata: Metadata = {
  title:
    "Work with Vently Air Hearing | Jobs for Audiologist, SEO Executive & Telecaller Jobs in India",
  description:
    "Join Vently Air Hearing. India&apos;s trusted hearing care network. Explore Audiologist & Telecaller jobs. Work with purpose and grow your career.",
  alternates: { canonical: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/careers` },
  openGraph: {
    title: "Careers at Vently Air Hearing",
    description:
      "Build a meaningful career at Vently Air Hearing. Explore Audiologist, SEO Executive & Telecaller jobs today.",
    url: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/careers`,
    siteName: "Vently Air Hearing",
    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/images/careers/og-careers.jpg`,
        width: 1200,
        height: 630,
        alt: "Vently Air Hearing Careers",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Vently Air Hearing",
    description:
      "Explore Audiologist, SEO Executive & Telecaller roles at Vently Air Hearing.",
    images: [`https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/images/careers/og-careers.jpg`],
  },
};

// ---------- JSON-LD ----------
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vently Air Hearing",
  url: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}`,
  logo: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/logo.png`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can I apply for a role at Vently Air Hearing?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Click on any open role card and it will open your email client with a prefilled subject. Attach your resume and send it to insonohearing@gmail.com.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer internships or roles for freshers?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes, we periodically hire interns and fresh graduates for telecalling, clinic support, and digital roles. Send your resume with the subject General Application – Internship/Fresher.",
      },
    },
    {
      "@type": "Question",
      name: "What is the recruitment process like?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Typically: Application → Screening Call → Task/Interview → Offer.",
      },
    },
    {
      "@type": "Question",
      name: "Which locations are you hiring for?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We are expanding across NCR and key Indian cities. Roles may be on-site, hybrid, or remote depending on the position.",
      },
    },
  ],
};

// ---------- JOB ROLES ----------
const roles = [
  {
    title: "Audiologist",
    type: "Full-Time",
    exp: "2+ Years",
    location: "India (Multiple Locations)",
    mailto:
      "mailto:insonohearing@gmail.com?subject=Application%20for%20Audiologist%20%E2%80%93%20Vently Air%20Hearing&body=Hi%20Vently Air%20Team%2C%0D%0AI%20am%20interested%20in%20the%20Audiologist%20role.%20Please%20find%20my%20resume%20attached.%0D%0AName%3A%0D%0AExperience%3A%0D%0ALocation%3A%0D%0AContact%3A%0D%0A",
    image: "/audiologist.jpg",
    bullets: [
      "Conduct hearing evaluations & fittings",
      "Patient-first counselling & care",
      "Experience with Signia / Phonak / Widex / Oticon preferred",
    ],
  },
  {
    title: "SEO Executive",
    type: "Full-Time",
    exp: "1–3 Years",
    location: "Noida / Remote",
    mailto:
      "mailto:insonohearing@gmail.com?subject=Application%20for%20SEO%20Executive%20%E2%80%93%20Vently Air%20Hearing&body=Hi%20Vently Air%20Team%2C%0D%0AI%20am%20interested%20in%20the%20SEO%20Executive%20role.%20Please%20find%20my%20resume%20attached.%0D%0AName%3A%0D%0AExperience%3A%0D%0ASkills%3A%0D%0AContact%3A%0D%0A",
    image: "/seo.jpg",
    bullets: [
      "Execute on-page & off-page SEO strategies",
      "Keyword research, audits, reporting",
      "Experience with healthcare or local SEO preferred",
    ],
  },
  {
    title: "Telecaller",
    type: "Full-Time",
    exp: "1+ Years",
    location: "Remote / On-site",
    mailto:
      "mailto:insonohearing@gmail.com?subject=Application%20for%20Telecaller%20%E2%80%93%20Vently Air%20Hearing&body=Hi%20Vently Air%20Team%2C%0D%0AI%20am%20interested%20in%20the%20Telecaller%20role.%20Please%20find%20my%20resume%20attached.%0D%0AName%3A%0D%0AExperience%3A%0D%0ALocation%3A%0D%0AContact%3A%0D%0A",
    image: "/calling.jpg",
    bullets: [
      "Handle inbound & outbound patient calls",
      "Appointment scheduling & follow-ups",
      "Empathetic communication; Hindi & English preferred",
    ],
  },
];

// ✅ Define FAQ type
type FAQEntity = {
  name: string;
  acceptedAnswer: {
    text: string;
  };
};

export default function CareersPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="bg-white text-gray-900">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f0f6ff] to-white" />
          <div className="relative max-w-6xl mx-auto px-4 pt-24 pb-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Join Vently Air Hearing.{" "}
                <span className="text-[#023784]">Work with Purpose</span>
              </h1>
              <p className="mt-4 text-gray-600 md:text-lg">
                Build a meaningful career improving lives through better hearing
                care. Learn, grow, and make real impact with India’s trusted
                hearing network.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="#open-roles"
                  className="bg-[#023784] text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
                >
                  View Open Roles
                </a>
                <a
                  href="mailto:insonohearing@gmail.com?subject=General%20Application%20%E2%80%93%20Vently Air%20Hearing"
                  className="border border-gray-300 px-5 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
                >
                  Send Your Resume
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/joininsono.jpg"
                alt="Vently Air Hearing clinic and team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* WHY INSONO */}
        <section className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Why <span className="text-[#023784]">Vently Air Hearing</span>?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Patient-First", d: "Care that starts with empathy." },
              { t: "Certified Training", d: "Signia, Phonak, Widex, Oticon." },
              { t: "Growth Path", d: "Clear ladders & mentorship." },
              { t: "Culture", d: "Ownership, learning, teamwork." },
            ].map((item) => (
              <div
                key={item.t}
                className="rounded-2xl border bg-white shadow-sm hover:shadow-md p-6 transition"
              >
                <div className="text-lg font-semibold">{item.t}</div>
                <p className="text-gray-600 mt-1">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OPEN ROLES */}
        <section id="open-roles" className="bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 py-14">
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              Open <span className="text-[#023784]">Roles</span>
            </h2>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {roles.map((r) => (
                <a
                  key={r.title}
                  href={r.mailto}
                  className="group rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition"
                >
                  <div className="relative h-44">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{r.title}</h3>
                      <span className="bg-blue-50 text-[#023784] px-3 py-1 rounded-full text-sm">
                        {r.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {r.exp} · {r.location}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-gray-700">
                      {r.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-2 before:content-['•'] before:text-[#023784]"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* GROWTH & TRAINING */}
        <section className="max-w-6xl mx-auto px-4 py-14 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/certificate.jpg"
              alt="Training & Certifications at Vently Air"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Grow with <span className="text-[#023784]">Training</span> &
              Certifications
            </h2>
            <p className="text-gray-600 mt-3">
              Learn on real cases, shadow senior audiologists, and get certified
              by leading global brands.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                "Signia Certification",
                "Phonak Certification",
                "Oticon Certification",
                "Widex Certification",
              ].map((b) => (
                <div key={b} className="rounded-xl border bg-white shadow-sm p-4">
                  {b}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LIFE AT INSONO */}
        <section className="bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 py-14">
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              Life at <span className="text-[#023784]">Vently Air</span>
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mt-3">
              At Vently Air Hearing, we believe work should feel meaningful,
              collaborative, and inspiring. Every day, our team comes together
              to improve lives through better hearing — whether it&apos;s
              helping a patient rediscover sound, building new digital
              solutions, or supporting each other&apos;s growth. We celebrate
              small wins, encourage ideas from everyone, and foster a culture
              where learning and empathy are just as important as performance.
            </p>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {["award_insono.jpg", "lifeVently Air.jpg", "insono_awarded.jpg"].map(
                (img) => (
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
                )
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Careers <span className="text-[#023784]">FAQ</span>
          </h2>
          <div className="mt-8 divide-y border rounded-xl bg-white shadow-sm">
            {faqJsonLd.mainEntity.map((item: FAQEntity, idx: number) => (
              <details key={idx} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>{item.name}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>
                <p className="mt-3 text-gray-700">
                  {item.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
