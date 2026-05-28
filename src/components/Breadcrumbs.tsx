"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";
import { Fragment } from "react";

export default function Breadcrumbs() {
  const pathname = usePathname();

  if (!pathname || pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const items = segments.map((seg, i) => {
    const href = "/" + segments.slice(0, i + 1).join("/");
    const label = decodeURIComponent(seg)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    return { href, label };
  });

  // JSON-LD structured data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${process.env.NEXT_PUBLIC_SITE_URL || `${process.env.NEXT_PUBLIC_DOMAIN || "ClimateCoreair.com"}`}`,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: `${process.env.NEXT_PUBLIC_SITE_URL || `${process.env.NEXT_PUBLIC_DOMAIN || "ClimateCoreair.com"}`}${item.href}`,
      })),
    ],
  };

  return (
    <>
      {/* Visible Breadcrumb UI */}
      <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="flex items-center gap-1 hover:text-[#023784] transition">
              <Home size={14} />
              Home
            </Link>
          </li>
          {items.map((item, idx) => (
            <Fragment key={item.href}>
              <li className="text-gray-400">/</li>
              <li>
                {idx === items.length - 1 ? (
                  <span className="text-gray-800 font-medium">{item.label}</span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-[#023784] transition"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            </Fragment>
          ))}
        </ol>
      </nav>

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
