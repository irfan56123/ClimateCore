"use client";

import Image from "next/image";
import Link from "next/link";
import { PhoneCall, MessageCircle, Download } from "lucide-react";

const PDF_URL = "/ClimateCore Air.pdf"; // 👉 place PDF in /public

export default function ThankYouPage() {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-20">
      {/* HEADER */}
      <div className="text-center max-w-xl mt-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-600">
          🎉 Thank You!
        </h1>
        <p className="mt-3 text-gray-600">
          We have received your request. You can view or download the price list
          below.
        </p>
      </div>

      {/* PDF EMBED CARD */}
      <div className="w-full max-w-4xl mt-8 bg-white rounded-xl shadow-md overflow-hidden border">
        <iframe
          src={PDF_URL}
          className="w-full h-[450px] sm:h-[550px]"
          title="HVAC System Price List"
        />
      </div>

      {/* DOWNLOAD BUTTON */}
      <a
        href={PDF_URL}
        download
        className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
      >
        <Download size={18} />
        Download PDF
      </a>

      {/* TALK TO AUDIOLOGIST */}
      <div className="mt-10 w-full max-w-md bg-white rounded-xl shadow-lg p-6 text-center">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Talk to an Audiologist Now
        </h3>

        <div className="flex gap-4 justify-center">
          {/* CALL */}
          <a
            href={`tel:${process.env.NEXT_PUBLIC_PHONE || "+919334026147"}`}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-green-600 text-white shadow hover:bg-green-700 transition"
          >
            <PhoneCall size={18} />
            Call Now
          </a>

          {/* WHATSAPP */}
          <a
            href={`https://wa.me/${(process.env.NEXT_PUBLIC_PHONE || "919334026147").replace(/\+/g, "")}`}
            target="_blank"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-500 text-white shadow hover:bg-emerald-600 transition"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          Free consultation • No obligation
        </p>
      </div>
    </section>
  );
}
