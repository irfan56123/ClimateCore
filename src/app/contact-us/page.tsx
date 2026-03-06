import Link from "next/link";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";

export default function ContactUsPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Contact Us
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Section */}
        <div className="lg:flex-1 flex flex-col gap-6 w-full">
          {/* 🗺️ Google Map */}
          <div className="rounded-lg overflow-hidden h-56 sm:h-64 w-full shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112114.55685638389!2d77.18166749726561!3d28.5823751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce50004e4f401%3A0x544410b53779ef00!2sVently Air%20Hearing%20Solutions%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1758191010592!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* 📍 Address Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Registered Office */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[#184A99] font-semibold text-lg">
                <Building2 size={20} /> Registered Office
              </div>
              <div className="text-gray-700 space-y-2 text-sm">
                <p className="flex items-start gap-2">
                  <MapPin size={16} className="mt-[2px] text-[#184A99]" />
                  D-251, Ground Floor, D Block, West Vinod Nagar, New Delhi - 110092
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} className="text-[#184A99]" /> {process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+91 6204260510"}
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} className="text-[#184A99]" /> contact@{process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}
                </p>
              </div>
            </div>

            {/* Head Office */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[#184A99] font-semibold text-lg">
                <Building2 size={20} /> Head Office
              </div>
              <div className="text-gray-700 space-y-2 text-sm">
                <p className="flex items-start gap-2">
                  <MapPin size={16} className="mt-[2px] text-[#184A99]" />
                  Ground Floor, E-142, next to Kerala Ayurveda, E Block, Pocket E,
                  Sector 20, Noida, Uttar Pradesh 201301
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} className="text-[#184A99]" /> {process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+91 6204260510"}
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} className="text-[#184A99]" /> contact@{process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}
                </p>
              </div>
            </div>
          </div>

          {/* 📍 Other Locations CTA */}
          <div className="flex justify-center sm:justify-start">
            <Link href="/our-clinic">
              <button className="bg-[#184A99] text-white text-sm font-medium py-2 px-5 rounded-md hover:bg-[#0f3a7e] transition">
                View Other Locations
              </button>
            </Link>
          </div>
        </div>

        {/* ✉️ Contact Form */}
        <div className="lg:flex-1 bg-white p-6 sm:p-8 rounded-lg shadow-md w-full">
          <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">
            Get in Touch
          </h2>
          <form
            action="https://forms.zohopublic.in/httpswwwinsonohearingcom1/form/PopupHearingAidAppointmentForm/formperma/x3az42yuKuLC_iSAkb7ggtCQlpLfj-gN-85WhU5H8bs/htmlRecords/submit"
            method="POST"
            acceptCharset="UTF-8"
            encType="multipart/form-data"
            className="flex flex-col gap-3"
          >
            {/* Hidden Fields */}
            <input type="hidden" name="zf_referrer_name" value="" />
            <input type="hidden" name="zf_redirect_url" value={`https://prices.${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}/landing/apt-thank-you`} />
            <input type="hidden" name="zc_gad" value="" />
            <input type="hidden" name="utm_source" value="Google Organic" />
            <input type="hidden" name="utm_medium" value="" />
            <input type="hidden" name="utm_campaign" value="" />
            <input type="hidden" name="utm_term" value="" />
            <input type="hidden" name="utm_content" value="" />

            {/* Inputs */}
            <input
              type="text"
              name="SingleLine"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-[#184A99] focus:outline-none"
            />
            <input
              type="text"
              name="PhoneNumber_countrycode"
              placeholder="Your Phone Number"
              required
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-[#184A99] focus:outline-none"
            />
            <input
              type="email"
              name="Email"
              placeholder="Your Email ID"
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-[#184A99] focus:outline-none"
            />
            <textarea
              name="MultiLine"
              placeholder="Tell us about your concern"
              className="w-full border border-gray-300 rounded-md p-3 text-sm min-h-[100px] focus:ring-2 focus:ring-[#184A99] focus:outline-none"
            ></textarea>



            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#184a99] text-white text-base font-semibold py-3 rounded-md shadow hover:bg-[#13366e] hover:scale-[1.02] transition"
            >

              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
