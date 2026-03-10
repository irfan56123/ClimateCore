// app/components/Navigation.tsx
import Link from "next/link";
import Image from "next/image";
import { Phone, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
const MobileMenu = dynamic(() => import("./nav/MobileMenu"), { ssr: false });
import { headerMenu } from "./nav/menuData";
import SearchBox from "./nav/SearchBox";

type NavigationProps = {
  minimal?: boolean;
};

export default function Navigation({ minimal = false }: NavigationProps) {
  if (minimal) {
    return (
      <header className="fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur shadow-sm">
        <div className="w-full flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
              <img src="/ventlylogo.png" alt="Vently Air" className="h-8 md:h-10" />
            </Link>
            <div className="h-6 w-px bg-gray-200 hidden md:block" />
            <img src="/MassSave.png" alt="Mass Save" className="h-10 md:h-12 object-contain" />
          </div>

          <a
            href={`tel:${process.env.NEXT_PUBLIC_PHONE || "+916204260510"}`}
            className="bg-[#023784] text-white px-4 py-2 rounded-md font-semibold"
          >
            Call Now
          </a>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm">
      <div className="w-full flex items-center justify-between px-3 sm:px-6 lg:px-20 py-3">
        {/* =================== LOGO =================== */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/ventlylogo.png"
              alt="Vently Air"
              width={130}
              height={45}
              priority
              className="w-auto h-8 md:h-10"
            />
          </Link>
          <div className="h-8 w-px bg-gray-200" />
          <Image
            src="/MassSave.png"
            alt="Mass Save"
            width={140}
            height={48}
            priority
            className="w-auto h-10 md:h-12 object-contain"
          />
        </div>

        {/* =================== DESKTOP NAV =================== */}
        <nav className="hidden md:flex items-center justify-end flex-1 gap-6 ml-8 text-gray-800 font-medium text-[15px] relative">
          {headerMenu.map((item) => (
            <div key={item.label} className="relative group">
              {item.children ? (
                <>
                  <div className="flex items-center gap-1 hover:text-[#023784] transition cursor-pointer py-2 text-sm lg:text-base">
                    {item.label}
                    <ChevronDown size={14} className="mt-0.5 group-hover:rotate-180 transition-transform" />
                  </div>
                  {/* Dropdown Menu */}
                  <div className="absolute left-0 top-full hidden group-hover:block bg-white border border-gray-100 shadow-xl py-2 min-w-[240px] rounded-lg z-50 animate-in fade-in slide-in-from-top-1">
                    {item.children.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.url}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#023784]/5 hover:text-[#023784] transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.url}
                  className="hover:text-[#023784] transition py-2 text-sm lg:text-base whitespace-nowrap"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* =================== DESKTOP RIGHT =================== */}
        <div className="hidden md:flex items-center gap-4 ml-6">
          <SearchBox />
          <a
            href={`tel:${process.env.NEXT_PUBLIC_PHONE || "+916204260510"}`}
            className="flex items-center gap-2 bg-[#f59e0b] text-black font-medium px-4 py-2 rounded-md hover:bg-yellow-500 transition relative"
          >
            <span className="absolute inline-flex h-8 w-8 rounded-full bg-white/40 animate-ping -left-2" />
            <Phone size={16} className="relative z-10" /> {process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+91 6204260510"}
          </a>
          <Link
            href="/estimate"
            className="flex items-center gap-2 bg-[#023784] text-white px-5 py-2 rounded-md font-bold text-sm hover:shadow-lg transition-all"
          >
            Get Estimate
          </Link>
        </div>

        {/* =================== MOBILE NAV =================== */}
        <div className="flex md:hidden items-center gap-4 text-sm text-gray-700">
          <a href={`tel:${process.env.NEXT_PUBLIC_PHONE || "+916204260510"}`} aria-label="Call">
            <div className="relative flex items-center justify-center">
              <span className="absolute inline-flex h-8 w-8 rounded-full bg-[#023784]/30 animate-ping" />
              <Phone size={22} className="text-[#023784] relative z-10" />
            </div>
          </a>

          {/* Hamburger Menu (Client) */}
          <MobileMenu menu={headerMenu} />
        </div>
      </div>
    </header>
  );
}
