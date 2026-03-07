"use client";
import React from "react";

interface Feature {
  title: string;
  description?: string;
}

const features: Feature[] = [
  {
    title: "Transparent Pricing",
    description: "Upfront quotes with no hidden fees",
  },
  {
    title: "Licensed & Insured",
    description: "Expert technicians you can trust into your home",
  },
  {
    title: "10-year Warranty*",
    description: "On all new HVAC system installations",
  },
  {
    title: "24/7 Support",
    description: "Emergency service when you need it most",
  },
  {
    title: "Expert Installation",
    description: "Certified pros for heating and cooling",
  },
  {
    title: "Duct Cleaning",
    description: "Improve your indoor air quality today",
  },
];

const Whychoose: React.FC = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Why Vently Air Solution?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="text-orange-600 mr-0 sm:mr-4 mb-2 sm:mb-0 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 sm:w-6 sm:h-6"
                >
                  <path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l7.1-7.1 1.4 1.4z" />
                </svg>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                {feature.description && (
                  <p className="text-gray-600 text-sm sm:text-base mt-1">
                    {feature.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whychoose;
