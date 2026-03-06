import Image from "next/image";
import {
  FaFacebook,
  FaBrain,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* 🌐 Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Column - Logo + Contact */}
          <div>
            <Image
              src="/ventlylogo.png" // replace with Vently logo
              alt="Vently Air"
              width={150}
              height={40}
              className="mb-4"
            />
            <p className="mt-4 text-sm leading-relaxed">
              Vently Air is your trusted partner for high-quality heating, cooling, and ventilation solutions. We are dedicated to providing expert service and reliable HVAC systems for your home and business.
            </p>
            <a
              href="/contact"
              className="inline-block border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-gray-900 transition mt-4"
            >
              Contact us
            </a>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about-us" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="/certifications" className="hover:text-white">
                  Our Certifications
                </a>
              </li>
              <li>
                <a href="/testimonials" className="hover:text-white">
                  Customer Testimonials
                </a>
              </li>

            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/services/duct-cleaning" className="hover:text-white">
                  Air Duct Cleaning
                </a>
              </li>
              <li>
                <a href="/services/dryer-vent" className="hover:text-white">
                  Dryer Vent Service
                </a>
              </li>
              <li>
                <a href="/services/furnace" className="hover:text-white">
                  Furnace, Coil & Blower Fan
                </a>
              </li>
              <li>
                <a href="/services/chimney-cleaning" className="hover:text-white">
                  Chimney Cleaning
                </a>
              </li>
              <li>
                <a href="/services/uv-light-installation" className="hover:text-white">
                  UV Light Installation
                </a>
              </li>
              <li>
                <a href="/services/air-quality-test" className="hover:text-white">
                  Air Quality Test
                </a>
              </li>
              <li>
                <a href="/services/sanitation" className="hover:text-white">
                  Sanitation
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Help & Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/contact" className="hover:text-white">
                  Schedule Service
                </a>
              </li>
              <li>
                <a href="/service-areas" className="hover:text-white">
                  Service Areas
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/warranty" className="hover:text-white">
                  Warranty Information
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white">
                  Financing Options
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 🌟 Bottom Bar */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm space-y-4 md:space-y-0">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://youtube.com/@ventlyair"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaYoutube size={18} />
            </a>
            <a
              href="https://www.instagram.com/ventlyair"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/ventlyair"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/ventlyair"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin size={18} />
            </a>
          </div>

          {/* ✅ Google & Trustpilot Reviews Badges */}
          <div className="flex items-center gap-4">
            <a
              href="https://maps.app.goo.gl/wmVXRuxddw7Bu9yx8"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-105"
            >
              <Image
                src="/badge/google.webp" // place your PNG/SVG in /public/badges/
                alt="Google Reviews"
                width={120}
                height={40}
                className="object-contain"
              />
            </a>
            <a
              href={`https://www.trustpilot.com/review/${process.env.NEXT_PUBLIC_DOMAIN || "ventlyair.com"}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-105"
            >
              <Image
                src="/badge/trustpilot.webp" // place your PNG/SVG in /public/badges/
                alt="Trustpilot Reviews"
                width={120}
                height={40}
                className="object-contain"
              />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 text-gray-400">
            <a href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms-of-use" className="hover:text-white">
              Terms
            </a>
            <a href="/sitemap.xml" className="hover:text-white">
              Sitemap
            </a>
          </div>
        </div>

        {/* ⚖️ Copyright */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p className="mt-2 text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Vently Air. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Built with <FaBrain className="inline mx-1 text-[#E7F3FF]" /> by{" "}
            <a
              href="https://webspecia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E7F3FF] hover:underline font-medium"
            >
              Webspecia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
