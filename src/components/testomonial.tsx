"use client";

import { useState } from "react";

const videoIds = ["Txf2pcFkEeU", "qO83ovMXinM", "wmLXMMS_Nrg", "rEr9EYpPpBo"];

export default function Testimonials() {
  const [activeVideos, setActiveVideos] = useState<Record<number, boolean>>({});

  const handleCardClick = (index: number) => {
    setActiveVideos((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="relative text-center py-16 px-4 bg-[#f8f9fa] overflow-hidden">
      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#184A99]/10 via-[#0f3a7e]/10 to-[#7C7C7C]/10 pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Heading + Subtext */}
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug">
            <span className="bg-gradient-to-r from-[#184A99] via-[#0f3a7e] to-[#7C7C7C] bg-clip-text text-transparent">
              Trusted by Over 2 Lakh Indians — Real HVAC System Experiences
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            We’ve proudly helped thousands of people across India choose the
            right <strong>digital HVACs</strong> to improve their lives.{" "}
            Here are their <strong>reviews and testimonials</strong> about
            clarity, comfort, and better hearing with Vently Air.
          </p>
        </div>

        {/* Video Grid */}
        <div className="reviews-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {videoIds.map((id, index) => (
            <div
              key={id}
              className="relative cursor-pointer rounded-lg overflow-hidden h-64 md:h-80 shadow-lg hover:scale-[1.02] transition-transform"
              style={{
                backgroundColor: "#000",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: activeVideos[index]
                  ? "none"
                  : `url(https://img.youtube.com/vi/${id}/hqdefault.jpg)`,
              }}
              onClick={() => handleCardClick(index)}
            >
              {!activeVideos[index] && (
                <span
                  className="absolute top-1/2 left-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-black/40 text-white animate-pulse"
                  style={{
                    transform: "translate(-50%, -50%)",
                    fontSize: "28px",
                  }}
                >
                  ▶
                </span>
              )}
              {activeVideos[index] && (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  title={`YouTube video ${index + 1}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
