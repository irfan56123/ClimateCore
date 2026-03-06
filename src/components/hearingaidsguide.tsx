import Image from "next/image";

export default function HearingAidGuideSection() {
  return (
    <section className="w-full px-4 py-3 md:py-8 bg-white">
      <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[1.2rem] md:rounded-[2rem] bg-[#0A0A0A] border border-white/10">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/20 blur-[50px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-500/10 blur-[50px] pointer-events-none" />

        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-4 p-5 md:p-8">
          {/* LEFT CONTENT */}
          <div className="w-full md:w-[60%] text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#E83D6D] text-[9px] md:text-xs mb-3">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E83D6D] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#E83D6D]"></span>
              </span>
              2026 EDITION
            </div>

            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[#E83D6D] via-[#ffffff] to-[#7C7C7C] bg-clip-text text-transparent leading-tight tracking-tight">
              Get the Expert Guide
            </h2>

            <p className="mt-1.5 text-gray-400 text-xs md:text-lg max-w-sm mx-auto md:mx-0">
              Compare top 5 brands and prices instantly on WhatsApp.
            </p>

            {/* FORM INTEGRATION */}
            <form
              action="https://forms.zohopublic.in/httpswwwinsonohearingcom1/form/PriceDownload/formperma/qfkYUAVnrssJTN0i8hL85lHEcznbGWdv2NwcvKmbCno/htmlRecords/submit"
              method="POST"
              acceptCharset="UTF-8"
              encType="multipart/form-data"
              className="mt-5 flex flex-col md:flex-row gap-2 w-full max-w-lg"
            >
              {/* Hidden Fields as per your Zoho Form */}
              <input type="hidden" name="zf_referrer_name" value="" />
              <input
                type="hidden"
                name="zf_redirect_url"
                value={`https://prices.${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/landing/pd-thank-you`}
              />
              <input type="hidden" id="zc_gad" name="zc_gad" value="" />
              <input type="hidden" name="utm_source" value="Google Organic" />
              <input type="hidden" name="utm_medium" value="" />
              <input type="hidden" name="utm_campaign" value="" />
              <input type="hidden" name="utm_term" value="" />
              <input type="hidden" name="utm_content" value="price download" />

              {/* Name set as "Known" as requested */}
              <input type="hidden" name="SingleLine" value="Known" />

              <input
                type="tel"
                name="PhoneNumber_countrycode"
                id="international_PhoneNumber_countrycode"
                placeholder="Your Phone Number"
                required
                maxLength={15}
                className="flex-1 bg-white/5 border border-white/20 rounded-lg py-2.5 px-4 text-white text-sm outline-none focus:border-emerald-500/50 transition-all placeholder:text-gray-500"
              />

              <button
                type="submit"
                className="bg-[#E83D6D] hover:bg-[#eb5a83] text-white font-extrabold py-2.5 px-6 rounded-lg text-sm transition-all active:scale-95 whitespace-nowrap shadow-lg shadow-emerald-500/10"
              >
                Get Price on WhatsApp
              </button>
            </form>
          </div>

          {/* RIGHT IMAGE - Compact Size */}
          <div className="w-full md:w-[40%] flex justify-center">
            <div className="relative group">
              {/* Image Glow Effect */}
              <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image
                src="/signia_bct2.png"
                alt="HVAC System Guide"
                width={220}
                height={280}
                priority
                className="w-[120px] md:w-[180px] lg:w-[220px] h-auto drop-shadow-2xl transform md:rotate-2 transition-transform group-hover:rotate-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
