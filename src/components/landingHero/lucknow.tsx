"use client";

import Image from "next/image";
import {
  ShieldCheck,
  EyeOff,
  FileText,
  Calendar,
  Users,
  MapPin,
  Stethoscope,
} from "lucide-react";

export default function HeroSection() {
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

  return (
    <section className="relative w-full bg-slate-50 overflow-hidden pt-4 md:pt-12 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* --- LEFT CONTENT (Text & Stats) --- */}
          <div className="w-full lg:w-[45%] space-y-6 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug ">
              <span className="bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
                Best HVAC System in Lucknow – Now In Your City
              </span>
            </h1>

            <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              Download the complete price list with transparent rates and
              exclusive discounts.
            </p>

            {/* Stats - Grid layout for performance */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 py-4 border-y border-gray-200 lg:border-none">
              <div className="flex flex-col items-center lg:items-start">
                <Users className="w-5 h-5 text-[#E83D6D] mb-1" />
                <span className="text-lg md:text-xl font-bold text-[#0D2240]">
                  2 Lakh+
                </span>
                <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">
                  Customers
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <MapPin className="w-5 h-5 text-[#E83D6D] mb-1" />
                <span className="text-lg md:text-xl font-bold text-[#0D2240]">
                  15+
                </span>
                <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">
                  Clinics
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <Stethoscope className="w-5 h-5 text-[#E83D6D] mb-1" />
                <span className="text-lg md:text-xl font-bold text-[#0D2240]">
                  100+
                </span>
                <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">
                  Experts
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="/price-download?utm_source=website&utm_medium=herocta"
                className="inline-flex items-center justify-center gap-2 bg-[#0D2240] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-900 transition-all active:scale-95 shadow-xl w-full sm:w-auto"
              >
                <FileText className="w-5 h-5" />
                Get Full Price List
              </a>
            </div>

            {/* Marquee Logos */}
            <div className="pt-6 overflow-hidden">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                Official Partner
              </p>
              <div className="flex w-[200%] gap-12 animate-marquee-slow items-center grayscale opacity-60">
                {[...logos, ...logos].map((logo, i) => (
                  <div key={i} className="relative w-16 h-8 flex-shrink-0">
                    <Image
                      src={logo}
                      alt="Brand"
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- CENTER (CSS Snap Slider) --- */}
          <div className="w-full lg:w-[25%] order-1 lg:order-2">
            <div className="relative group">
              <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth gap-4 rounded-3xl lg:h-[450px]">
                {heroImages.map((img, i) => (
                  <div
                    key={i}
                    className="min-w-full snap-center relative aspect-square lg:h-full"
                  >
                    <Image
                      src={img}
                      alt="HVAC System"
                      fill
                      priority={i === 0}
                      className="object-contain drop-shadow-2xl px-4"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-1.5 mt-4">
                {heroImages.map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-gray-300" />
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT (Zoho Form) --- */}
          <div className="w-full lg:w-[30%] order-3">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Book Free Appointment
              </h2>

              <div className="flex gap-4 mb-4">
                <span className="flex items-center gap-1 text-[10px] text-gray-500">
                  <ShieldCheck className="w-3 h-3 text-emerald-500" /> No Fees
                </span>
                <span className="flex items-center gap-1 text-[10px] text-gray-500">
                  <EyeOff className="w-3 h-3 text-emerald-500" /> No Obligation
                </span>
              </div>

              <form
                action="https://forms.zohopublic.in/httpswwwinsonohearingcom1/form/PopupHearingAidAppointmentForm/formperma/x3az42yuKuLC_iSAkb7ggtCQlpLfj-gN-85WhU5H8bs/htmlRecords/submit"
                method="POST"
                className="flex flex-col gap-3"
              >
                <input
                  type="hidden"
                  name="zf_redirect_url"
                  value={`https://prices.${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/landing/apt-thank-you`}
                />
                <input
                  type="text"
                  name="SingleLine"
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#0D2240] outline-none transition-all"
                />
                <input
                  type="tel"
                  name="PhoneNumber_countrycode"
                  placeholder="Phone Number"
                  required
                  className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#0D2240] outline-none transition-all"
                />
                <textarea
                  name="MultiLine"
                  placeholder="Tell us your problem"
                  className="w-full border border-gray-200 rounded-lg p-3 text-sm min-h-[80px] focus:ring-2 focus:ring-[#0D2240] outline-none transition-all"
                />

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#184a99] text-white py-4 rounded-lg font-bold shadow-lg hover:bg-[#13366e] transition-all active:scale-95"
                >
                  <Calendar className="w-5 h-5" />
                  Confirm Free Visit
                </button>
                <p className="text-[9px] text-gray-400 text-center">
                  Your data is safe with us. Our experts will call you shortly.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee-slow { animation: marquee 30s linear infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />
    </section>
  );
}
