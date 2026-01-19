import Image from "next/image";
import Link from "next/link";

export default function CityListSection() {
  // 1. City List Array: Yahan se aap cities add ya remove kar sakte hain
  const cities = [
    { id: 1, name: "Delhi", link: "/our-clinic/lajpat-nagar" },
    { id: 2, name: "Noida", link: "/our-clinic/noida" },
    { id: 3, name: "Gurgaon", link: "/our-clinic/gurgaon" },
    { id: 4, name: "Ghaziabad", link: "/our-clinic/ghaziabad" },
    { id: 5, name: "Deoghar", link: "/our-clinic/deoghar" },
    { id: 6, name: "Bhagalpur", link: "/our-clinic/bhagalpur" },
    { id: 7, name: "Giridih", link: "/our-clinic/giridih" },
    { id: 8, name: "Banka", link: "/our-clinic/banka" },
    { id: 9, name: "Lucknow", link: "/our-clinic/lucknow" },
    { id: 10, name: "Jamshedpur", link: "/our-clinic/jamshedpur" },
    { id: 11, name: "Asansol", link: "/our-clinic/asansol" },
    { id: 12, name: "Dehradun", link: "/our-clinic/dehradun" },
  ];

  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10  bg-gradient-to-r from-[#E83D6D] via-[#184A99] to-[#7C7C7C] bg-clip-text text-transparent">
          Expert Hearing Care, Now in Your City
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Clinic Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/clinics/noida-1.webp" // Apni image ka path yahan dalein
                alt="Clinic Visit"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: City Buttons Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {cities.map((city) => (
                <Link
                  key={city.id}
                  href={city.link}
                  className="group relative flex items-center justify-center py-3 px-6 border-2 border-[#da2e50] rounded-full text-[#da2e50] font-bold text-sm md:text-base transition-all duration-300 hover:bg-[#da2e50] hover:text-white text-center active:scale-95"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Contact Section */}
        <div className="mt-16 text-center border-t pt-10">
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            With 15+ locations across India, Insono clinics are always close to
            you.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:6204260510"
              className="bg-black text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
            >
              Call 62042-60510
            </a>
            <Link
              href="/appointment"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
            >
              Schedule an Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
