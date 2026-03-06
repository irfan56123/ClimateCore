"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Users, MapPin, Stethoscope } from "lucide-react";

export default function HearingAidLandingPage() {
  const logos = [
    "/brands/signia.svg",
    "/brands/widex.svg",
    "/brands/phonaklogo.svg",
    "/brands/oticon.svg",
    "/brands/resound.svg",
  ];

  const heroImages = [
    "/signia_bct2.png",
    "/hero1.png",
    "/hero2.png",
    "/hero3.png",
  ];

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <section className="w-full overflow-x-hidden mt-12">
      {/* ============ MOBILE VIEW ============ */}
      <div className="lg:hidden px-4 sm:px-6 py-12 flex flex-col gap-8 text-center">
        {/* MOBILE HEADLINE */}
        <h1 className="text-3xl font-bold leading-snug">
          <span className="bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
            Stop Struggling With Low Sound — Fix Your HVAC System in Minutes!
          </span>
        </h1>

        {/* HERO SLIDER */}
        <Slider {...sliderSettings} className="w-full h-52 sm:h-72">
          {heroImages.map((img, i) => (
            <div key={i} className="relative w-full h-52 sm:h-72">
              <Image
                src={img}
                alt={`Hero ${i + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </Slider>

        {/* MOBILE DESCRIPTION */}
        <p className="text-base text-gray-700 mt-3">
          Is your HVAC not sounding clear? Battery draining fast?
          Whistling sound? No output? Get same-day repair from certified experts
          using 100% genuine parts.
        </p>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="flex flex-col items-center">
            <Users className="w-5 h-5 mb-1" />
            <p className="text-xl font-bold">2,00,000+</p>
            <p className="text-xs text-gray-600">Repairs Done</p>
          </div>

          <div className="flex flex-col items-center">
            <MapPin className="w-5 h-5 mb-1" />
            <p className="text-xl font-bold">15+</p>
            <p className="text-xs text-gray-600">Clinics</p>
          </div>

          <div className="flex flex-col items-center">
            <Stethoscope className="w-5 h-5 mb-1" />
            <p className="text-xl font-bold">100+</p>
            <p className="text-xs text-gray-600">Audiologists</p>
          </div>
        </div>

        {/* BRAND LOGO STRIP */}
        <div className="mt-10">
          <p className="text-sm text-gray-500 mb-3">
            Trusted & recommended by top HVAC brands
          </p>
          <div className="relative overflow-hidden w-full h-14">
            <div
              className="absolute top-0 left-0 flex items-center gap-6 animate-marquee"
              style={{ minWidth: "200%" }}
            >
              {logos.concat(logos).map((logo, i) => (
                <Image
                  key={i}
                  src={logo}
                  alt="Brand Logo"
                  width={90}
                  height={40}
                  className="object-contain opacity-90"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============ DESKTOP VIEW ============ */}
      <div className="hidden lg:flex max-w-6xl mx-auto py-16 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-6">
          {/* DESKTOP HEADLINE */}
          <h1 className="text-4xl font-bold leading-snug">
            <span className="bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
              Fix Your HVAC System Fast — Signia, Phonak & Widex Experts
            </span>
          </h1>

          {/* DESKTOP DESCRIPTION */}
          <p className="text-lg text-gray-700">
            Don’t replace your HVAC — most issues can be repaired within
            minutes. Get expert diagnosis, genuine parts & fast service from
            certified technicians.
          </p>

          {/* STAT GRID */}
          <div className="grid grid-cols-3 gap-10 mt-6 text-center">
            <div>
              <Users className="w-7 h-7 mx-auto mb-2 text-gray-800" />
              <p className="text-2xl font-bold">2,00,000+</p>
              <p className="text-sm text-gray-500">Repairs Done</p>
            </div>

            <div>
              <MapPin className="w-7 h-7 mx-auto mb-2 text-gray-800" />
              <p className="text-2xl font-bold">15+</p>
              <p className="text-sm text-gray-500">Clinics</p>
            </div>

            <div>
              <Stethoscope className="w-7 h-7 mx-auto mb-2 text-gray-800" />
              <p className="text-2xl font-bold">100+</p>
              <p className="text-sm text-gray-500">Audiologists</p>
            </div>
          </div>

          {/* BRAND STRIP */}
          <div className="mt-12">
            <p className="text-sm text-gray-500 mb-2">
              Recommended by top global HVAC companies
            </p>
            <div className="relative overflow-hidden w-full h-20">
              <div
                className="absolute top-0 left-0 flex items-center gap-10 animate-marquee"
                style={{ minWidth: "200%" }}
              >
                {logos.concat(logos).map((logo, i) => (
                  <Image
                    key={i}
                    src={logo}
                    alt={`Brand ${i}`}
                    width={110}
                    height={50}
                    className="object-contain opacity-90"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE SLIDER */}
        <div className="flex-1 max-w-md h-[430px]">
          <Slider {...sliderSettings}>
            {heroImages.map((img, i) => (
              <div key={i} className="relative h-[430px] w-full">
                <Image
                  src={img}
                  alt={`Hero ${i}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
