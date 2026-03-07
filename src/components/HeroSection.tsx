import HeroSlider from "@/components/HeroSlider";
import LeadForm from "@/components/LeadForm";
import { Users, ShieldCheck, Wrench } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1.5fr] gap-6 lg:gap-6 items-center pt-4 lg:pt-0">

        {/* CONTENT BLOCK - Split into sub-sections for ordering on mobile */}
        <div className="flex flex-col space-y-4 lg:space-y-6 text-center lg:text-left">

          {/* 1. Headline (Always First) */}
          <h1 className="text-2xl sm:text-4xl lg:text-[38px] font-extrabold leading-tight order-1">
            <span className="bg-gradient-to-r from-[#0D2240] via-[#184A99] to-[#7C7C7C] bg-clip-text text-transparent">
              Efficient Heating & Air-Conditioning Solutions
            </span>
          </h1>

          {/* 2. Photo of Man (Slider) - Moves to 2nd position on mobile */}
          <div className="w-full order-2 lg:hidden px-4">
            <HeroSlider />
          </div>

          {/* 3. Description (Hidden on Mobile) */}
          <p className="hidden lg:block text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 order-3">
            Expert installation and repair for furnaces, heat pumps,
            air conditioners, and mini-split systems. Serving residential
            and commercial properties.
          </p>

          {/* 4. Stats (Numbers) - 3rd on mobile */}
          <div className="grid grid-cols-3 gap-6 pt-2 lg:pt-6 order-3 lg:order-4">
            <div className="flex flex-col items-center lg:items-start">
              <Users className="w-6 h-6 text-[#184A99] mb-1" />
              <p className="font-bold text-xl text-gray-900">15,000+</p>
              <p className="text-xs text-gray-600">Happy Clients</p>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <Wrench className="w-6 h-6 text-[#184A99] mb-1" />
              <p className="font-bold text-xl text-gray-900">50,000+</p>
              <p className="text-xs text-gray-600">Projects Completed</p>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <ShieldCheck className="w-6 h-6 text-[#184A99] mb-1" />
              <p className="font-bold text-xl text-gray-900">Licensed</p>
              <p className="text-xs text-gray-600">& Insured</p>
            </div>
          </div>

          {/* 5. CTA buttons - 4th on mobile */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-2 lg:pt-6 order-4 lg:order-5">
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

        {/* HERO IMAGE SLIDER (Desktop Only position) */}
        <div className="hidden lg:block w-full">
          <HeroSlider />
        </div>

        {/* FORM (Always Last) */}
        <div className="w-full lg:order-3">
          <LeadForm />
        </div>

      </div>
    </section>
  );
}