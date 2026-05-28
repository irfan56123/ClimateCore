import Image from "next/image";
import { CheckCircle, Award, Users, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "About Us | ClimateCore Air — Your Comfort, Our Mission",
  description: "Learn more about ClimateCore Air, your trusted local HVAC experts. From 24/7 emergency repairs to energy-efficient installations, we've got you covered.",
};

export default function AboutPage() {
  return (
    <main className="pt-24 pb-16">
      {/* 🟦 Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/heroworker.jpg"
          alt="HVAC Excellence"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Our Commitment to Comfort</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-blue-50">
            ClimateCore Air has been providing top-tier heating, cooling, and ventilation services for over a decade.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        {/* ⬜ Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At ClimateCore Air, we believe that everyone deserves to breathe clean air and live in a perfectly tempered environment. What started as a small family-owned business 10+ years ago has grown into one of the most trusted HVAC service providers in the region.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our team of certified technicians is dedicated to delivering excellence in every repair, installation, and maintenance check. We use cutting-edge technology and time-tested methods to ensure your home or office stays comfortable year-round.
            </p>
            <ul className="space-y-3">
              {[
                "Licensed & Fully Insured",
                "24/7 Emergency Support",
                "Certified Specialists",
                "Energy Efficiency Experts",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-800 font-medium">
                  <CheckCircle className="w-5 h-5 text-[#184A99]" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/heroworker.png"
              alt="About ClimateCore Air"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 🟦 Stats Section */}
        <div className="bg-[#184A99] rounded-3xl p-10 md:p-16 text-white grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-24">
          <div>
            <div className="text-4xl font-bold mb-2">10+</div>
            <div className="text-blue-100 text-sm uppercase tracking-wider">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">5k+</div>
            <div className="text-blue-100 text-sm uppercase tracking-wider">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="text-blue-100 text-sm uppercase tracking-wider">Expert Techs</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-blue-100 text-sm uppercase tracking-wider">Satisfaction</div>
          </div>
        </div>

        {/* ⬜ Core Values */}
        <section className="mb-24 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard
              icon={<ShieldCheck className="w-8 h-8" />}
              title="Integrity First"
              desc="We believe in transparent pricing and honest assessments. No hidden fees, just reliable service."
            />
            <ValueCard
              icon={<Award className="w-8 h-8" />}
              title="Unmatched Quality"
              desc="We never cut corners. Every job is completed to the highest industry standards with premium parts."
            />
            <ValueCard
              icon={<Users className="w-8 h-8" />}
              title="Customer Focused"
              desc="Your comfort is our priority. We listen to your needs and provide tailored solutions that work."
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function ValueCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
      <div className="w-16 h-16 bg-blue-50 text-[#184A99] rounded-2xl flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
