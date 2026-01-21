// app/layout.tsx
import NavigationWrapper from "@/components/NavigationWrapper";
import "./globals.css";
import type { Metadata } from "next";
import ChatWidgetLoader from "@/components/ChatWidgetLoader";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Insono Hearing",
    template: "%s | Insono Hearing",
  },
  description: "Affordable, reliable hearing aids with local support.",
  keywords: [
    "Hearing Aids",
    "Affordable Hearing Solutions",
    "Insono Hearing",
    "Digital Hearing Aids",
    "Hearing Care",
  ],
  authors: [{ name: "Insono Hearing" }],
  creator: "Insono Hearing",
  metadataBase: new URL("https://insonohearing.com"),
  openGraph: {
    title: "Insono Hearing",
    description: "Affordable, reliable hearing aids with local support.",
    url: "https://insonohearing.com",
    siteName: "Insono Hearing",
    images: [
      {
        url: "https://insonohearing.com/logo.webp",
        width: 1200,
        height: 630,
        alt: "Insono Hearing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insono Hearing",
    description: "Affordable, reliable hearing aids with local support.",
    images: ["https://insonohearing.com/logo.webp"],
    creator: "@insonohearing",
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
        {/* Google site verification (kept from incoming branch) */}
        <meta
          name="google-site-verification"
          content="_w3rNIazk1WMe-urSCcrtpzyAcqTeopxMU1qqLd0p6k"
        />

        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T3FWLWC8');
            `,
          }}
        />
      </head>

      <body className="font-museo bg-white text-gray-900 antialiased bg-gradient-to-b from-[#eaf5ff] to-white">
        <NavigationWrapper>{children}</NavigationWrapper>

        {/* Optional: add analytics or other scripts here via next/script */}
        {/*
        <Script src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_ID');
          `}
        </Script>
        */}
      </body>
    </html>
  );
}
