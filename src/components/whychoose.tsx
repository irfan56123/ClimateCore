import { Map, Settings, Users, Briefcase } from "lucide-react";

export default function WhyVentlySection() {
  const stats = [
    {
      icon: Map,
      value: "5+",
      label: "States Served",
    },
    {
      icon: Settings,
      value: "10+",
      label: "HVAC Services",
    },
    {
      icon: Users,
      value: "15,000+",
      label: "Satisfied Clients",
    },
    {
      icon: Briefcase,
      value: "50,000+",
      label: "Projects Completed",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold leading-snug">
          <span className="bg-gradient-to-r from-[#0D2240] via-[#184A99] to-[#7C7C7C] bg-clip-text text-transparent">
            Trusted HVAC Experts Serving Thousands of Homes & Businesses
          </span>
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Vently Air delivers reliable <strong>heating, air conditioning, and indoor air quality solutions</strong>.
          Our experienced technicians have successfully completed thousands of HVAC installations and repairs.
        </p>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-10">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="bg-blue-50 p-4 rounded-full mb-3 group-hover:bg-blue-100 transition">
                  <Icon className="w-8 h-8 text-[#184A99]" />
                </div>

                <p className="text-3xl font-bold text-[#184A99]">
                  {stat.value}
                </p>

                <p className="text-sm text-gray-600 mt-1">
                  {stat.label}
                </p>
              </div>
            );
          })}

        </div>

        {/* Trust line */}
        <p className="mt-10 max-w-xl mx-auto text-gray-700 text-sm md:text-base">
          From furnace installations to AC repairs and duct cleaning,
          we help homeowners and businesses maintain comfortable and efficient spaces.
        </p>

        {/* CTA */}
        <a
          href="/contact"
          className="mt-6 inline-block bg-[#184A99] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#0f3a7e] transition"
        >
          Get Your Free HVAC Estimate
        </a>

      </div>
    </section>
  );
}