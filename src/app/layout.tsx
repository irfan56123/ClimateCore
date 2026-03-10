// app/layout.tsx
import NavigationWrapper from "@/components/NavigationWrapper";
import ChatWidgetLoader from "@/components/ChatWidgetLoader";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}`),
  title: "Vently Air — Expert HVAC Services & Solutions",
  description:
    "Reliable heating, cooling, and ventilation services. Expert furnace installation, AC repair, and air quality solutions for home and business.",
  keywords: [
    "HVAC",
    "Heating Repair",
    "Air Conditioning",
    "Ventilation",
    "Vently Air",
    "Furnace Installation",
  ],
  authors: [{ name: "Vently Air" }],
  creator: "Vently Air",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vently Air HVAC Solutions",
    description: "Expert heating, cooling, and ventilation services with local support.",
    url: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}`,
    siteName: "Vently Air",
    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/ventlylogo.png`,
        width: 1200,
        height: 630,
        alt: "Vently Air",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vently Air",
    description: "Affordable, reliable HVACs with local support.",
    images: [`https://${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/ventlylogo.png`],
    creator: "@ventlyair",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="_w3rNIazk1WMe-urSCcrtpzyAcqTeopxMU1qqLd0p6k"
        />
      </head>

      <body className="font-museo bg-white text-gray-900 antialiased bg-gradient-to-b from-[#eaf5ff] to-white">
        <NavigationWrapper>{children}</NavigationWrapper>

        {/* ✅ Global chat widget – loads once, after hydration */}
        {/* <ChatWidgetLoader /> */}
      </body>
    </html>
  );
}
