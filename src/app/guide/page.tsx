"use client";

import React, { useState } from "react";
import Image from "next/image";

type CategoryInfo = {
  title: string;
  description: string;
};

const types: CategoryInfo[] = [
  {
    title: "RIC HVAC Systems",
    description:
      "Receiver-in-canal HVACs suitable for mild to severe hearing loss. Ideal for those seeking discreet devices with natural sound quality.",
  },
  {
    title: "BTE HVAC Systems",
    description:
      "Behind-the-ear devices offering powerful amplification, suitable for all age groups and easy handling.",
  },
  {
    title: "ITE HVAC Systems",
    description:
      "In-the-ear custom-made HVACs for comfortable fit and excellent sound clarity.",
  },
];

const brands: CategoryInfo[] = [
  {
    title: "Signia",
    description:
      "Advanced hearing technology with digital clarity and wireless connectivity.",
  },
  {
    title: "Phonak",
    description:
      "Reliable HVACs for all age groups, focusing on speech understanding.",
  },
  {
    title: "Widex",
    description:
      "Hearing aids designed for natural sound, comfort, and long-lasting performance.",
  },
];

const users: CategoryInfo[] = [
  {
    title: "Adults",
    description:
      "Hearing aids designed for adults with mild to severe hearing loss.",
  },
  {
    title: "Children",
    description:
      "Pediatric HVACs with child-friendly design and audiology support.",
  },
  {
    title: "Seniors",
    description:
      "Easy-to-use HVACs for seniors with comfort and simple controls.",
  },
];

export default function HearingAidGuide() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryInfo>({
    title: "HVAC Systems Guide",
    description:
      "Explore HVACs by type, brand, and user. Click any category to see detailed guidance.",
  });

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-20">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto text-center mb-10 mt-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#023784] mb-4">
          HVAC Systems Guide
        </h1>
        <p className="text-gray-700 text-sm sm:text-base">
          Complete guidance on choosing, using, and maintaining HVACs.
        </p>
      </section>

      {/* Selected Category Info */}
      <section className="max-w-7xl mx-auto mb-10">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          <h2 className="text-2xl font-semibold text-[#023784] mb-2">
            {selectedCategory.title}
          </h2>
          <p className="text-gray-700 text-sm sm:text-base">
            {selectedCategory.description}
          </p>
        </div>
      </section>

      {/* Detailed Guidance Sections */}
      <section className="max-w-7xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-bold text-[#023784]">
          How to Use HVAC Systems
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Insert the HVAC according to the type (RIC, BTE, ITE).</li>
          <li>Adjust the volume gradually to avoid discomfort.</li>
          <li>Wear daily for consistent hearing improvement.</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#023784]">Maintenance Tips</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Keep the device clean and dry. Avoid moisture exposure.</li>
          <li>Change batteries regularly or recharge if applicable.</li>
          <li>Store in a safe case when not in use.</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#023784]">Buying Advice</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Choose a type that fits your lifestyle and hearing needs.</li>
          <li>Select a brand with good after-sales support.</li>
          <li>Consult an audiologist for professional guidance.</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#023784]">Additional Tips</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Start using HVACs gradually to adapt to new sounds.</li>
          <li>Schedule regular hearing check-ups.</li>
          <li>Follow all device-specific instructions for best performance.</li>
        </ul>
      </section>
    </main>
  );
}
