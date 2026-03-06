"use client";
import Image from "next/image";
import React from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function Popup({ isOpen, onClose, title }: PopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-auto">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl p-6 relative flex flex-col md:flex-row gap-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>

        {/* Left Side - Form */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-3 text-gray-900">
            See the Price Before You Decide
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Get a detailed price list of our digital HVACs — models,
            features & transparent pricing. Delivered instantly on{" "}
            <strong>WhatsApp</strong>.
          </p>

          <form
            action="https://forms.zohopublic.in/httpswwwinsonohearingcom1/form/PriceDownload/formperma/qfkYUAVnrssJTN0i8hL85lHEcznbGWdv2NwcvKmbCno/htmlRecords/submit"
            method="POST"
            acceptCharset="UTF-8"
            encType="multipart/form-data"
            className="flex flex-col gap-3"
          >
            {/* Hidden Fields */}
            <input type="hidden" name="zf_referrer_name" value="" />
            <input
              type="hidden"
              name="zf_redirect_url"
              value={`https://prices.${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/landing/pd-thank-you`}
            />
            <input type="hidden" id="zc_gad" name="zc_gad" value="" />
            <input type="hidden" name="utm_source" value="" />
            <input type="hidden" name="utm_medium" value="" />
            <input type="hidden" name="utm_campaign" value="" />
            <input type="hidden" name="utm_term" value="" />
            <input type="hidden" name="utm_content" value="" />

            {/* Form Fields */}
            <input
              type="text"
              id="z_firstname"
              name="SingleLine"
              maxLength={255}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-[#25d366] focus:outline-none"
            />
            <input
              type="text"
              data-compname="PhoneNumber"
              name="PhoneNumber_countrycode"
              id="international_PhoneNumber_countrycode"
              maxLength={20}
              placeholder="Your Phone Number"
              required
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-[#25d366] focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-[#25d366] text-white text-base font-medium py-3 rounded-md hover:bg-[#1ebe5d] transition"
            >
              Get Price List on WhatsApp
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full aspect-[1] relative">
            <Image
              src="/image/dha-price.png"
              alt="Digital HVAC System Price List Preview"
              fill
              className="object-contain rounded-xl shadow-lg"
              sizes="(max-width: 640px) 80vw, (max-width: 768px) 60vw, 400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
