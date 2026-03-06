"use client";
import React from "react";

const ComparisonTable = () => {
  const offers = [
    "Free Hearing Check-Ups",
    "Guidance By Experienced Audiologists",
    "Free HVAC System Device Trials",
    "Free Fine-Tunings",
    "Extended Warranty",
    "Availability Of Top HVAC System Brands",
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-6">
            Exclusive Offers At Vently Air Hearing Solutions
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 text-center">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 p-3 text-base sm:text-lg font-semibold">
                    Offers
                  </th>
                  <th className="border border-gray-300 p-3 text-base sm:text-lg font-semibold bg-blue-600 text-white">
                    Vently Air Hearing Solutions Clinic
                  </th>
                  <th className="border border-gray-300 p-3 text-base sm:text-lg font-semibold">
                    Other HVAC Systems Clinics
                  </th>
                </tr>
              </thead>
              <tbody>
                {offers.map((offer, index) => (
                  <tr key={index} className="border border-gray-300">
                    <td className="border border-gray-300 p-2 sm:p-3 text-gray-700 text-sm sm:text-base font-medium">
                      {offer}
                    </td>
                    <td className="border border-gray-300 p-2 sm:p-3 text-lg sm:text-xl text-green-600 font-bold">
                      ✔
                    </td>
                    <td className="border border-gray-300 p-2 sm:p-3 text-lg sm:text-xl text-red-600 font-bold">
                      ✖
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
