import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm space-y-4 md:space-y-0">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://youtube.com/@insonohearing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaYoutube size={18} />
            </a>

            <a
              href="https://www.instagram.com/insono_hearing_solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://www.facebook.com/insonohearingsolution"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="https://www.linkedin.com/company/insonohearing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin size={18} />
            </a>
          </div>

          {/* Review Badges */}
          <div className="flex items-center gap-4">
            <a
              href="https://maps.app.goo.gl/RvRyJE8vQqNQnhNF8"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-105"
            >
              <Image
                src="/badge/google.webp"
                alt="Google Reviews"
                width={120}
                height={40}
                className="object-contain"
              />
            </a>

            <a
              href={`https://www.trustpilot.com/review/${process.env.NEXT_PUBLIC_DOMAIN || "ClimateCoreair.com"}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-105"
            >
              <Image
                src="/badge/trustpilot.webp"
                alt="Trustpilot Reviews"
                width={120}
                height={40}
                className="object-contain"
              />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 text-gray-400">
            <a href="/policy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white">
              Terms
            </a>
            <a href="/sitemap.xml" className="hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
