"use client";

import React from "react";
import MultiStepForm from "@/components/stepform";
import { FaBrain } from "react-icons/fa";

export default function TrialFormPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start w-full">
      {/* ------------------- FORM ------------------- */}
      <div className="w-full max-w-xl px-4 sm:px-6 mt-10">
        <MultiStepForm />
      </div>

      {/* ------------------- FEATURE BAR ------------------- */}
      <div className="bg-[#f7f7f7] py-10  border-b-4 border-[#1f5ca8] w-full">
        <div
          className="
            max-w-6xl mx-auto 
            grid grid-cols-1 
            sm:grid-cols-3
            text-center 
            gap-10 
            px-6 sm:px-10
          "
        >
          {/* Column 1 */}
          <div className="flex flex-col items-center">
            <div className="text-[#1f5ca8] text-4xl sm:text-5xl mb-3">✔</div>
            <p className="text-gray-700 font-medium text-base sm:text-lg leading-relaxed">
              Europe's newest hearing <br />
              aid technology of 2025
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center">
            <div className="text-[#1f5ca8] text-4xl sm:text-5xl mb-3">✔</div>
            <p className="text-gray-700 font-medium text-base sm:text-lg leading-relaxed">
              Comprehensive consultation <br />
              with HVAC experts
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center">
            <div className="text-[#1f5ca8] text-4xl sm:text-5xl mb-3">✔</div>
            <p className="text-gray-700 font-medium text-base sm:text-lg leading-relaxed">
              100% customer satisfaction <br />
              assured
            </p>
          </div>
        </div>
      </div>

      {/* ------------------- FOOTER ------------------- */}
      <footer className="text-center py-10 text-gray-700 w-full px-4">
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600">
          © {new Date().getFullYear()} Vently Air. All rights reserved.

          <p className="text-center sm:text-right">
            Built with <FaBrain className="inline mx-1 text-blue-500" /> by{" "}
            <a
              href="https://webspecia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline font-medium"
            >
              Webspecia
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
