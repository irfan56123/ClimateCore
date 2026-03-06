import HeroSlider from "@/components/HeroSlider";
import LeadForm from "@/components/LeadForm";
import { Users, ShieldCheck, Wrench } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[2fr_1.5fr_1.2fr] gap-10 items-center">

        {/* TEXT CONTENT */}
        <div className="space-y-6 text-center lg:text-left">

          {/* Badge */}
          <div className="pt-2">
            <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-4 py-2 rounded-full border border-green-200">
              Mass Save Approved Contractor
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-[#0D2240] via-[#184A99] to-[#7C7C7C] bg-clip-text text-transparent">
              Is Your Heating or AC System Running Efficiently?
            </span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            Expert installation and repair for furnaces, heat pumps,
            air conditioners, and mini-split systems. Serving residential
            and commercial properties.
          </p>

          {/* Rebate message */}
          <p className="text-sm text-green-700 font-medium">
            Save thousands with Mass Save rebates on new heating and cooling
            system upgrades.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6">

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

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-6">

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

        {/* HERO IMAGE (CENTER) */}
        <div className="w-full">
          <HeroSlider />
        </div>

        {/* FORM */}
        <div className="w-full">
          <LeadForm />
        </div>

      </div>
    </section>
  );
}