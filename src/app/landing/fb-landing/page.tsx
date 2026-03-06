"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaBrain } from "react-icons/fa";
import FBLANDING from "@/components/landingHero/fb-landing";

export default function HearingAidLanding() {
  const router = useRouter();

  // redirect → multiform
  const goToForm = () => {
    router.push("/landing/multiform");
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 pt-10">
        <FBLANDING />

        {/* 4 Feature Grid */}
        <div className="grid sm:grid-cols-2 gap-4 mt-6 text-left max-w-2xl mx-auto">
          <p>✔ Cutting-edge German engineering</p>
          <p>✔ Nearly invisible micro design</p>
          <p>✔ Crystal-clear 360° sound experience</p>
          <p>
            ✔ <strong>97% customer satisfaction rate</strong>
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button
            onClick={goToForm}
            className="bg-[#1f5ca8] text-white px-10 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-[#174c8c] active:scale-95 transition"
          >
            Sign up for a free trial →
          </button>
        </div>
      </section>

      {/* ================= WHY SPECIAL SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 mt-14">
        <div className="bg-blue-50 p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold text-center mb-8">
            What makes this tiny HVAC so special?
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold">
                🔊 Outstanding speech clarity
              </h3>
              <p>
                Advanced algorithms help you hear conversations effortlessly.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                ⚙ German-built hearing technology
              </h3>
              <p>Developed using 140+ years of sound innovation.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                🏆 Award-winning comfort design
              </h3>
              <p>
                Winner of the Red Dot Design Award for invisibility & comfort.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                📱 App control & Bluetooth
              </h3>
              <p>Adjust sound profiles, volume, and modes from your phone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT IMAGE SECTION ================= */}
      <div className="max-w-7xl mx-auto mt-14 px-4">
        <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/hearing-device.png"
            alt="Hearing Device"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-3xl font-bold mt-8 text-center">
          How can I try this HVAC?
        </h2>

        <p className="mt-4 text-center text-gray-700 text-lg">
          Available for trial at <strong>1000+ clinics</strong> in{" "}
          <strong>450+ cities</strong> across India.
          <br />
          Also available with <strong>home visit service</strong>.
        </p>

        <div className="text-center text-4xl mt-3">⬇️</div>
      </div>

      {/* ================= TRUST SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 mt-14 text-center">
        <h2 className="text-3xl font-bold">India trusts us!</h2>

        {/* Rating Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mt-8">
          {/* Google */}
          <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center">
            <Image
              src="/badge/google.webp"
              alt="Google Rating"
              width={85}
              height={85}
            />
            <p className="mt-2 font-medium">4.3 Google Rating</p>
          </div>

          {/* TrustPilot */}
          <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center">
            <Image
              src="/badge/trustpilot.png"
              alt="TrustPilot Rating"
              width={85}
              height={85}
            />
            <p className="mt-2 font-medium">4.3 TrustPilot Rating</p>
          </div>

          {/* Success */}
          <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center">
            <Image
              src="/icon/satisfaction.png"
              alt="Success Rate"
              width={85}
              height={85}
            />
            <p className="mt-2 font-medium">97% Success Rate</p>
          </div>
        </div>

        {/* People Image */}
        <div className="mt-10 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/people.png"
            alt="Happy Users"
            width={900}
            height={450}
            className="w-full"
          />
        </div>

        <p className="text-xl mt-6">
          Over <strong>400,000+ Indians</strong> have improved their lives with
          our advanced hearing solutions.
        </p>

        {/* CTA */}
        <button
          onClick={goToForm}
          className="mt-8 bg-[#1f5ca8] text-white px-10 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-[#174c8c] active:scale-95 transition"
        >
          Book the free HVAC trial →
        </button>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-12 text-gray-700 w-full px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600">
          © {new Date().getFullYear()} Vently Air. All rights reserved.

          <p className="mt-2 sm:mt-0">
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
    </>
  );
}
