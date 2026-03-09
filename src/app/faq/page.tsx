"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What type of HVAC services does Vently Air offer?",
    a: "We offer a wide range of HVAC solutions, including residential and commercial, for heating, air-conditioning and indoor air-quality improvement.",
  },
  {
    q: "How much does HVAC installation cost in Massachusetts?",
    a: "HVAC installation in Massachusetts typically costs $7,000 to $15,000 depending on the system type, home size, ductwork condition, and efficiency rating. High-efficiency systems or heat pumps may cost more but reduce energy bills. A professional load calculation is recommended to determine the correct system size and price.",
  },
  {
    q: "What is the average cost of HVAC repair?",
    a: "Most HVAC repairs cost $150 to $800 depending on the issue. Simple repairs like capacitors or thermostats are cheaper, while major repairs like compressor or blower motor replacement can cost over $1,000.",
  },
  {
    q: "How much does duct cleaning cost for a house?",
    a: "Professional air duct cleaning for a typical small to mid sized home costs $300 to $900 depending on the number of vents, system size, and level of contamination.",
  },
  {
    q: "How often should HVAC systems be serviced?",
    a: "HVAC systems should be serviced twice a year—once in the spring for air conditioning and once in the fall for heating. Regular maintenance improves efficiency, reduces breakdowns, and extends system life.",
  },
  {
    q: "What is included in an HVAC tune-up?",
    a: "A typical HVAC tune-up includes checking refrigerant levels, inspecting electrical components, testing thermostat operation, lubricating moving parts, and checking airflow.",
  },
  {
    q: "How often should HVAC air filters be replaced?",
    a: "HVAC air filters should typically be replaced every 1–3 months depending on the filter type, pets in the home, and indoor air quality.",
  },
  {
    q: "Does HVAC maintenance really save money?",
    a: "Yes. Regular HVAC maintenance can reduce energy costs by 5–15%, prevent expensive breakdowns, and extend system lifespan.",
  },
  {
    q: "How long does an HVAC service appointment take?",
    a: "Most HVAC maintenance appointments take 60 to 90 minutes depending on the system condition and services performed.",
  },
  {
    q: "Why is my air conditioner running but not cooling?",
    a: "Common causes include low refrigerant, dirty air filters, frozen coils, thermostat issues, or compressor problems.",
  },
  {
    q: "How long should an air conditioner last?",
    a: "Most central air conditioners last 12–15 years with proper maintenance.",
  },
  {
    q: "Why is my furnace blowing cold air?",
    a: "This can happen due to thermostat settings, dirty filters, pilot light issues, or overheating safety shutoffs.",
  },
  {
    q: "How long do furnaces typically last?",
    a: "Gas furnaces usually last 15–20 years with regular maintenance.",
  },
  {
    q: "What are signs that a furnace needs replacement?",
    a: "Signs include frequent repairs, rising energy bills, uneven heating, strange noises, or a furnace older than 15 years.",
  },
  {
    q: "Should HVAC ducts be insulated?",
    a: "Yes. Insulating ducts in attics, basements, or crawl spaces reduces energy loss and improves heating and cooling efficiency.",
  },
  {
    q: "How often should air ducts be cleaned?",
    a: "Air ducts should typically be cleaned every 2–3 years or sooner if there is visible dust buildup, mold, or recent renovation.",
  },
  {
    q: "Can dirty air ducts affect allergies?",
    a: "Yes. Dirty ducts can circulate dust, allergens, pet dander, and mold spores, which may worsen allergy and asthma symptoms.",
  },
  {
    q: "What are signs of mold in air ducts?",
    a: "Signs include musty odors, visible mold near vents, increased allergy symptoms, and black or green spots inside ductwork.",
  },
  {
    q: "How often should a dryer vent be cleaned?",
    a: "Dryer vents should be cleaned at least once a year. Homes that do frequent laundry, have long vent runs, or use the dryer daily may need cleaning every 6–9 months. Regular cleaning improves dryer efficiency, reduces drying time, and helps prevent lint buildup that can cause fires.",
  },
  {
    q: "What are the signs that a dryer vent needs cleaning?",
    a: "Common signs include clothes taking longer to dry, the dryer getting very hot, a burning smell, excess lint around the dryer, or the laundry room becoming humid. These symptoms usually indicate restricted airflow due to lint buildup inside the vent.",
  },
  {
    q: "Why is dryer vent cleaning important?",
    a: "Dryer vent cleaning removes lint buildup that can reduce airflow, increase energy use, and create a fire hazard. According to safety experts, clogged dryer vents are one of the leading causes of residential dryer fires",
  },
  {
    q: "Can I clean my dryer vent myself?",
    a: "Homeowners can remove lint from the dryer trap and accessible duct sections, but professional cleaning tools are usually needed to clean the entire vent line safely and thoroughly.",
  },
  {
    q: "How often should a chimney be cleaned?",
    a: "Chimneys should be inspected once a year and cleaned when creosote buildup reaches about 1/8 inch. Homes that frequently use fireplaces or wood stoves may need cleaning annually.",
  },
  {
    q: "How much does chimney cleaning cost?",
    a: "Professional chimney cleaning usually costs $150 to $400 depending on chimney height, accessibility, and buildup inside the flue.",
  },
  {
    q: "Why is chimney cleaning necessary?",
    a: "Chimney cleaning removes soot, debris, and creosote, which are highly flammable byproducts of burning wood. Removing these materials helps prevent chimney fires and improves fireplace safety.",
  },
  {
    q: "What is creosote and why is it dangerous?",
    a: "Creosote is a sticky, flammable residue that forms when wood burns. Over time, it accumulates inside the chimney flue and can ignite, causing dangerous chimney fires.",
  },
  {
    q: "What warranty options are available?",
    a: "HVAC systems come with manufacturer warranties, typically covering defects and repairs. We can provide detailed warranty information for each model.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white py-16 px-4 pt-24">
      <div className="max-w-4xl w-full text-black">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Frequency And Questions We Can Provide
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-black/80">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center text-left font-medium text-lg py-4 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-black/70 font-mono text-sm">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="group-hover:text-black transition-colors">
                    {faq.q}
                  </span>
                </div>
                {openIndex === idx ? (
                  <Minus size={20} className="text-black/80" />
                ) : (
                  <Plus size={20} className="text-black/80" />
                )}
              </button>
              <div
                className={`ml-10 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
                  }`}
              >
                <p className="text-black/80 text-sm leading-relaxed pr-6 pb-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ CTA */}
        <div className="text-center mt-16 pb-12">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">
            Still have questions?
          </h3>
          <p className="text-black/80 text-lg">
            <a href="/contact" className="text-[#023784] hover:underline font-semibold">Contact us</a> today for a free inspection and estimate
          </p>
        </div>
      </div>
    </section>
  );
}
