"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

/* ---------- Types ---------- */
interface Clinic {
  id: string;
  name: string;
  locationLine: string;
  address: string;
  hours: string;
  tag?: string;
  catSlug?: string;
  placeId?: string;
}

/* ---------- Data ---------- */
const clinics: Clinic[] = [
  {
    id: "vinod-nagar",
    name: "Hearing Aid Clinic in Vinod Nagar",
    locationLine: "Vinod Nagar — Delhi",
    address:
      "D-251, Ground Floor, D Block, West Vinod Nagar, New Delhi - 110092",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJhYM9dWzlDDkRYd_B7lw9FNU",
  },
  {
    id: "Dhanbad",
    name: "Insono Hearing Solutions Pvt.Ltd. Dhanbad",
    locationLine: "Dhanbad — Jharkhand",
    address:
      "Infront Of Zonal Office Bank Of India Roof 709 Building, SHOP NO:- FF4 Newtech Grand 3, Dhanbad, Saraidhella, Jharkhand 826007",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJh6MeOPy99jkRACHi3aOsBiM",
  },
  {
    id: "banka",
    name: "Hearing Aid Clinic in Banka",
    locationLine: "Banka — Bihar",
    address:
      "Enjoy Better Hearing In, Navjyoti Nursing Home, near Indian Petrol Pump, Jagatpur, Banka, Bihar - 813102, India",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJ_UUO4CH_8DkRtIOVjYr5eGk",
  },
  {
    id: "deoghar",
    name: "Hearing Aid Clinic in Deoghar",
    locationLine: "Deoghar — Jharkhand",
    address:
      "First Floor House No 349 A, Purnima Height, Ambedkar Chowk, near Krishna ENT, Barmasia, Deoghar, Jharkhand 814112, India",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJa0Lte_wX8TkRAOO9p8fzWgY",
  },
  {
    id: "bhagalpur",
    name: "Hearing Aid Clinic in Bhagalpur",
    locationLine: "Bhagalpur — Bihar",
    address:
      "Kalpana Oro Dental & Implant Centre, near Hatiya Rd, Tilkamanjhi, Bhagalpur, Bihar 812001, India",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJC8CLllJL8DkRx3loHLy7qaw",
  },
  {
    id: "noida",
    name: "Hearing Aid Clinic in Noida",
    locationLine: "Noida — Uttar Pradesh",
    address:
      "E-142, Ground Floor, Sector 20, Noida, Near Kerala Ayurveda, Uttar Pradesh - 201301",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJAfTkBADlDDkRAO95N7UQRFQ",
  },
  {
    id: "asansol",
    name: "Hearing Aid Clinic in Asansol",
    locationLine: "Asansol — West Bengal",
    address: "GT Road, Asansol",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJAfTkBADlDDkRAO95N7UQRFQ",
  },
  {
    id: "dehradun",
    name: "Hearing Aid Clinic in Dehradun",
    locationLine: "Dehradun — Uttarakhand",
    address: "Dehradun",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJH2SisK8pCTkRBsz4y5kNE2Y",
  },
  {
    id: "gurgaon",
    name: "Hearing Aid Clinic in Gurgaon",
    locationLine: "Gurgaon — Haryana",
    address:
      "Shop No 232, First Floor, Central Arcade, Mehrauli Gurgaon Rd, Opposite Sahara Mall, A Block, DLF Phase 2, Sector 25, Gurugram, Haryana 122008",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJi0EKPSQZDTkRUEBiyh0-VXw",
  },
  {
    id: "giridih",
    name: "Hearing Aid Clinic in Giridih",
    locationLine: "Giridih — Jharkhand",
    address:
      "Basement, Under Bata Showroom, A & S Building, Court Rd, Opposite Old Telephone Exchange, Giridih, Jharkhand 815301, India",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJC2eHau9V8TkRBEoBoGUXfWo",
  },
  {
    id: "lajpat-nagar",
    name: "Hearing Aid Clinic in Lajpat Nagar",
    locationLine: "Lajpat Nagar — Delhi",
    address:
      "3/59, Old Story, Lajpat Nagar 4, Lajpat Nagar, New Delhi, Delhi 110024",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJGQuhawDlDDkRcuXRFQaYEbA",
  },
  {
    id: "jamshedpur",
    name: "Hearing Aid Clinic in Jamshedpur",
    locationLine: "Jamshedpur — Jharkhand",
    address: "Jamshedpur",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJAfTkBADlDDkRAO95N7UQRFQ",
  },
  {
    id: "lucknow",
    name: "Hearing Aid Clinic in Lucknow",
    locationLine: "Lucknow — Uttar Pradesh",
    address:
      "10/36, Tedhi Pulia Ring Rd, near Narayan Automobile, behind Mahendra Agency, Shekhupura, Vikas Nagar, Lucknow, Uttar Pradesh 226022",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJzWAWfZFXmTkREIOqkh4urOY",
  },
  {
    id: "ranchi",
    name: "Hearing Aid Clinic in Ranchi",
    locationLine: "Ranchi — Jharkhand",
    address: "Online Service Available",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJAfTkBADlDDkRAO95N7UQRFQ",
  },
  {
    id: "jalandhar",
    name: "Hearing Aid Clinic in Jalandhar",
    locationLine: "Jalandhar — Punjab",
    address: "Service Available",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJAfTkBADlDDkRAO95N7UQRFQ",
  },
  {
    id: "jammu",
    name: "Hearing Aid Clinic in Jammu",
    locationLine: "Jammu — Jammu & Kashmir",
    address: "Service Available",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJAfTkBADlDDkRAO95N7UQRFQ",
  },
  {
    id: "garia-kolkata",
    name: "Hearing Aid Clinic in Garia Kolkata",
    locationLine: "Garia — West Bengal",
    address:
      "ACOUSTIC HEARING SOLUTION, P-515, Raja S C Mullick Road, Garia Kolkata - 700084, Opp. Sreeleathers",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJjUYoG49xAjoRK75wxbdHB2E",
  },
  {
    id: "chandigarh",
    name: "Hearing Aid Clinic in Chandigarh",
    locationLine: "Chandigarh — Punjab",
    address: "Service Available",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJAfTkBADlDDkRAO95N7UQRFQ",
  },
  {
    id: "ambala",
    name: "Hearing Aid Clinic in Ambala",
    locationLine: "Ambala — Punjab",
    address: "Service Available",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJAfTkBADlDDkRAO95N7UQRFQ",
  },
  {
    id: "patna",
    name: "Hearing Aid Clinic in Patna",
    locationLine: "Patna — Bihar",
    address: "Service Available",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJAfTkBADlDDkRAO95N7UQRFQ",
  },
  {
    id: "ludhiana",
    name: "Hearing Aid Clinic in Ludhiana",
    locationLine: "Ludhiana — Punjab",
    address: "Service Available",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJAfTkBADlDDkRAO95N7UQRFQ",
  },
  {
    id: "hyderabad",
    name: "Hearing Aid Clinic in Hyderabad",
    locationLine: "Hyderabad — Telangana",
    address: "Service Available",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJAfTkBADlDDkRAO95N7UQRFQ",
  },
  {
    id: "kolkata",
    name: "Hearing Aid Clinic in Kolkata",
    locationLine: "Kolkata — West Bengal",
    address:
      "13 Ram Mohan Dutta Road, (Near Northern Park) Bhawanipur, Kolkata - 700020",
    hours: "Open, Closes by 7 pm",
    tag: "Clinic",
    placeId: "ChIJjUYoG49xAjoRK75wxbdHB2E",
  },
];

/* ---------- Comparison Items ---------- */
const comparisonItems: string[] = [
  "Booking for an appointment at hearing clinics is quick and easy",
  "Free hearing checkup at any time and anywhere",
  "Generating free preliminary hearing report",
  "Visiting a hearing clinic is mandatory",
  "Home visits by the hearing experts",
  "Live interaction with hearing experts at any time",
  "Many choices for hearing aids",
  "Clinic visit for the purchase of hearing aid accessories is compulsory",
  "Reminder for the service and warranty of the hearing aid",
  "Transparency while selecting the hearing aid by using Latest Hii5 technology is available",
  "Hassle-free hearing care experience at your fingertips",
];

/* ------------------ Component ------------------ */
export default function ClinicsList() {
  return (
    <>
      {/* Breadcrumb area */}
      <section className="py-12 pt-24">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#112f70]">
            Find a Hearing Aid Clinic Near You
          </h1>
          <p className="mt-2 text-[#112f70]">
            Best hearing experiences at Insono Hearing Clinics. Trusted by 1
            Million+ satisfied customers.
          </p>
        </div>
      </section>

      {/* Clinics grid */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinics.map((c) => (
              <article
                key={c.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full"
              >
                <div className="bg-[#e9f2ff] p-3">
                  <Link
                    href={`/our-clinic/${c.id}`}
                    className="text-[#023784] font-semibold hover:underline"
                  >
                    <h2 className="text-[#023784] font-semibold">{c.name}</h2>
                  </Link>
                  {c.tag && (
                    <p className="text-xs text-gray-600 mt-1">{c.tag}</p>
                  )}
                </div>

                <div className="p-4 flex-1">
                  <p className="text-sm font-semibold text-[#023784]">
                    {c.locationLine}
                  </p>
                  <p className="mt-2 text-sm text-gray-700 whitespace-pre-line">
                    {c.address}
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-green-600 font-bold text-sm">
                      {c.hours.includes("Open") ? "Open" : c.hours}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {c.hours.includes("Closes") ? "· " + c.hours : ""}
                    </span>
                  </div>
                  {/* Google Maps directions */}
                  <div className="flex items-center gap-4 mt-2">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        c.address,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Get Directions
                    </a>

                    <span className="text-gray-400">|</span>

                    <a
                      href={`https://search.google.com/local/writereview?placeid=${c.placeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline capitalize"
                    >
                      Write Review
                    </a>
                  </div>
                </div>

                <div className="p-4 border-t bg-white">
                  <Link
                    href={`/appointment?cat=${encodeURIComponent(
                      c.catSlug || c.id,
                    )}&slug=${encodeURIComponent(c.id)}`}
                    className="block text-center bg-[#023784] text-white py-2 rounded-md font-semibold"
                  >
                    Book Appointment
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-8 bg-gradient-to-r from-[#4b72b5] to-[#023784]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white">
              Insono Vs Other Providers
            </h3>
            <p className="text-white">
              How we excel compared to other providers
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl overflow-hidden">
              <tbody>
                <tr className="border-b">
                  <td className="p-4 w-1/2"></td>
                  <td className="p-4 text-center bg-[#eaf2ff] w-1/4">
                    <div className="mx-auto w-36">
                      <Image
                        src="/logo.webp"
                        alt="Insono"
                        width={200}
                        height={80}
                        className="mx-auto"
                      />
                    </div>
                  </td>
                  <td className="p-4 text-center font-bold w-1/4">Others</td>
                </tr>

                {comparisonItems.map((row, idx) => {
                  const othersTickExceptions = [
                    "Visiting a hearing clinic is mandatory",
                    "Clinic visit for the purchase of hearing aid accessories is compulsory",
                  ];
                  const othersHasTick = othersTickExceptions.includes(row);

                  return (
                    <tr key={idx} className="border-b">
                      <td className="p-4 text-sm text-gray-700">{row}</td>
                      <td className="p-4 text-center bg-[#eaf2ff]">
                        <Image
                          src="https://storage.googleapis.com/hz-prd-media/static/hzv0.0.0.150/images/website/hz_greentickroun_icon.svg"
                          alt="tick"
                          width={28}
                          height={28}
                          className="mx-auto"
                        />
                      </td>
                      <td className="p-4 text-center">
                        {othersHasTick ? (
                          <Image
                            src="https://storage.googleapis.com/hz-prd-media/static/hzv0.0.0.150/images/website/hz_greentickroun_icon.svg"
                            alt="tick"
                            width={28}
                            height={28}
                            className="mx-auto"
                          />
                        ) : (
                          <Image
                            src="https://storage.googleapis.com/hz-prd-media/static/hzv0.0.0.150/images/website/hz_cancel_icon.svg"
                            alt="cross"
                            width={28}
                            height={28}
                            className="mx-auto"
                          />
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
