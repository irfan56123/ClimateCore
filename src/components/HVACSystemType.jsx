"use client";
import Image from "next/image";

const items = [
  { id: 1, name: "Furnace Installation & Repair", category: "Heating", service: "Furnace Installation", image: "/heroworker.png", desc: "High-efficiency heating systems and expert repairs for consistent warmth." },
  { id: 5, name: "Air-Conditioner Installation & Repair", category: "Cooling", service: "AC Installation", image: "/heroworker.png", desc: "Precision installation and repair for peak cooling performance and efficiency." },
  { id: 2, name: "Duct/Chimney/Dryer Vent Cleaning", category: "Air Quality", service: "Duct/Chimney/Dryer Vent Cleaning", image: "/heroworker.png", desc: "Complete cleaning services to improve air quality, safety, and system efficiency." },
];

export default function HVACSystemType() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-[#184A99] to-[#0D2240] bg-clip-text text-transparent">
              Our Professional HVAC Services
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            From emergency repairs to precision installations, our certified technicians provide
            top-tier comfort solutions for your home and business.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll | Desktop: Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 no-scrollbar pb-8 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:snap-none md:mx-0 md:px-0">
          {items.map((item) => (
            <div
              key={item.id}
              className="min-w-[80%] sm:min-w-[45%] md:min-w-0 snap-center group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className={`object-cover transform transition-transform duration-700 group-hover:scale-110 ${item.id === 5 ? 'object-top' : ''}`}
                  loading="lazy"
                />

                {/* Visual Accent */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-[#184A99] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md">
                  Certified Service
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 items-center text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#184A99] transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                  {item.desc}
                </p>
                <div className="mt-auto w-full pt-4 border-t border-gray-100 flex items-center justify-between">
                  <a href={`/estimate?category=${item.category}&service=${item.service}`} className="text-xs font-bold text-[#184A99] flex items-center gap-1 group-hover:gap-2 transition-all">
                    GET ESTIMATE <span className="text-lg">→</span>
                  </a>
                  <span className="text-[10px] text-gray-400 font-medium">Licensed & Insured</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
