"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection() {
  const heroImages = ["/hero1.png", "/hero2.png", "/hero3.png"];

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <section className="overflow-hidden w-full mt-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* ---------------- LEFT CONTENT ---------------- */}
        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
            Restore Clear Hearing
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 font-light text-sm sm:text-base">
            Affordable Digital HVAC Systems with{" "}
            <span className="px-2 py-1 rounded-md font-medium bg-[#E6EEF8] text-[#023784]">
              Free Consultation for everyone
            </span>
          </p>

          {/* Hero Slider */}
          <div className="relative w-full h-48 sm:h-72 lg:h-[320px] max-w-lg mx-auto lg:mx-0">
            <Slider {...sliderSettings}>
              {heroImages.map((img, i) => (
                <div
                  key={i}
                  className="relative w-full h-48 sm:h-72 lg:h-[320px]"
                >
                  <Image
                    src={img}
                    alt={`Hero ${i + 1}`}
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* CTA */}
          <a
            href={`tel:${process.env.NEXT_PUBLIC_PHONE || "+916204260510"}`}
            className="inline-block bg-[#023784] text-white text-sm sm:text-base font-medium px-6 py-3 rounded-md hover:bg-[#012d66] transition mx-auto lg:ml-0 mt-4 lg:mt-6"
          >
            📞 Consult an Expert
          </a>
        </div>

        {/* ---------------- RIGHT FORM ---------------- */}
        <div className="flex-1 w-full max-w-sm bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md mx-auto lg:mx-0 self-center">
          <h2 className="text-base sm:text-lg lg:text-xl font-bold mb-3 text-gray-700">
            Book a Free Hearing Test Appointment
          </h2>
          <form
            action="https://forms.zohopublic.in/httpswwwinsonohearingcom1/form/PopupHearingAidAppointmentForm/formperma/x3az42yuKuLC_iSAkb7ggtCQlpLfj-gN-85WhU5H8bs/htmlRecords/submit"
            method="POST"
            className="flex flex-col gap-3"
          >
            <input
              type="text"
              name="SingleLine"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-[#184A99] outline-none"
            />
            <input
              type="text"
              name="PhoneNumber_countrycode"
              placeholder="Your Phone Number"
              required
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-[#184A99] outline-none"
            />
            <input
              type="email"
              name="Email"
              placeholder="Your Email ID"
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-[#184A99] outline-none"
            />
            <textarea
              name="MultiLine"
              placeholder="Tell us about your hearing problem"
              className="w-full border border-gray-300 rounded-md p-3 text-sm min-h-[100px] focus:ring-2 focus:ring-[#184A99] outline-none"
            ></textarea>

            <p className="text-xs text-gray-500">
              Your information is secure. Our team will contact you to confirm
              your preferred time & method.
            </p>

            <button
              type="submit"
              className="w-full bg-[#184a99] text-white text-base font-medium py-3 rounded-md hover:bg-[#13366e] transition mt-2"
            >
              📅 Book My Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
