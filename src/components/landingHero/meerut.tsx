// "use client";
// import Image from "next/image";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import {
//   ShieldCheck,
//   EyeOff,
//   Calendar,
//   Users,
//   MapPin,
//   Stethoscope,
//   FileText,
// } from "lucide-react";

// export default function HeroSectionMeerut() {
//   const logos = [
//     "/brands/signia.svg",
//     "/brands/widex.svg",
//     "/brands/phonaklogo.svg",
//     "/brands/oticon.svg",
//     "/brands/resound.svg",
//   ];

//   const heroImages = [
//     "/signia_bct2.png",
//     "/hero1.png",
//     "/hero2.png",
//     "/hero3.png",
//   ];

//   const sliderSettings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     fade: true,
//   };

//   return (
//     <section className="overflow-x-hidden w-full mt-12">
//       {/* ------------------ MOBILE LAYOUT ------------------ */}
//       <div className="lg:hidden px-4 sm:px-6 md:px-8 py-12 flex flex-col gap-8 text-center">
//         <h1 className="text-2xl md:text-4xl font-bold leading-snug">
//           <span className="bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
//             Best HVAC System in Meerut – Now in Your City
//           </span>
//         </h1>

//         {/* Hero Slider */}
//         <Slider {...sliderSettings} className="w-full h-48 sm:h-72">
//           {heroImages.map((img, i) => (
//             <div key={i} className="relative w-full h-48 sm:h-72">
//               <Image
//                 src={img}
//                 alt={`Doctor ${i + 1}`}
//                 fill
//                 className="object-contain"
//               />
//             </div>
//           ))}
//         </Slider>

//         <p className="text-base md:text-lg text-gray-700">
//           Download the full price list with transparent pricing and exclusive
//           offers.
//         </p>
//         <div className="text-gray-700 text-lg">
//           <ul className="grid grid-cols-2 gap-2 text-base">
//             <li className="flex items-center gap-2">
//               <MapPin className="w-4 h-4 text-[#0D2240]" />
//               Modinagar
//             </li>
//             <li className="flex items-center gap-2">
//               <MapPin className="w-4 h-4 text-[#0D2240]" />
//               Hapur
//             </li>
//             <li className="flex items-center gap-2">
//               <MapPin className="w-4 h-4 text-[#0D2240]" />
//               Muradnagar
//             </li>
//             <li className="flex items-center gap-2">
//               <MapPin className="w-4 h-4 text-[#0D2240]" />
//               Meerut South
//             </li>
//           </ul>
//         </div>

//         {/* Stats */}
//         {/* <div className="grid grid-cols-3 gap-4 mt-6 text-center">
//           <div className="flex flex-col items-center">
//             <Users className="w-5 h-5 text-black mb-1" />
//             <p className="text-xl font-bold text-black">2 Lakh+</p>
//             <p className="text-xs text-gray-600">Happy Customers</p>
//           </div>

//           <div className="flex flex-col items-center">
//             <MapPin className="w-5 h-5 text-black mb-1" />
//             <p className="text-xl font-bold text-black">15+</p>
//             <p className="text-xs text-gray-600">Clinics Across India</p>
//           </div>

//           <div className="flex flex-col items-center">
//             <Stethoscope className="w-5 h-5 text-black mb-1" />
//             <p className="text-xl font-bold text-black">100+</p>
//             <p className="text-xs text-gray-600">Audiologists</p>
//           </div>
//         </div> */}

//         {/* CTA Button */}
//         <a
//           href="/price-download?utm_source=website&utm_medium=herocta&utm_campaign=pricedownload"
//           className="inline-flex items-center justify-center gap-2 bg-[#0D2240] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#08182E] transition"
//         >
//           <FileText className="w-5 h-5" />
//           Get Full Price List
//         </a>

//         {/* Logos */}
//         <div className="mt-8">
//           <p className="text-sm text-gray-500 mb-4">
//             We are an{" "}
//             <span className="font-semibold text-gray-700">
//               official partner
//             </span>{" "}
//             of top global HVAC brands.
//           </p>
//           <div className="relative overflow-hidden w-full h-16 sm:h-20">
//             <div
//               className="absolute top-0 left-0 flex items-center gap-4 animate-marquee"
//               style={{ minWidth: "200%" }}
//             >
//               {logos.concat(logos).map((logo, i) => (
//                 <div
//                   key={i}
//                   className="flex-shrink-0 flex items-center justify-center px-2"
//                 >
//                   <Image
//                     src={logo}
//                     alt={`Brand logo ${i}`}
//                     width={80}
//                     height={32}
//                     className="object-contain"
//                     draggable={false}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Form */}
//         <div className="w-full bg-white p-4 sm:p-6 rounded-lg shadow-md">
//           <h2 className="text-lg font-bold mb-2 text-gray-800">
//             Book Your Free Appointment in Meerut
//           </h2>

//           <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4">
//             <p className="flex items-center gap-1 text-sm text-gray-600">
//               <ShieldCheck className="w-4 h-4 text-[#023784]" />
//               No hidden fees
//             </p>
//             <p className="flex items-center gap-1 text-sm text-gray-600">
//               <EyeOff className="w-4 h-4 text-[#023784]" />
//               No obligation
//             </p>
//           </div>

//           <form
//             action="https://forms.zohopublic.in/httpswwwinsonohearingcom1/form/PopupHearingAidAppointmentForm/formperma/x3az42yuKuLC_iSAkb7ggtCQlpLfj-gN-85WhU5H8bs/htmlRecords/submit"
//             method="POST"
//             className="flex flex-col gap-3"
//           >
//             <input type="hidden" name="utm_source" value="Google Organic" />

//             <input
//               type="text"
//               name="SingleLine"
//               placeholder="Your Name"
//               required
//               className="w-full border border-gray-300 rounded-md p-3 text-sm"
//             />
//             <input
//               type="text"
//               name="PhoneNumber_countrycode"
//               placeholder="Your Phone Number"
//               required
//               className="w-full border border-gray-300 rounded-md p-3 text-sm"
//             />
//             <input
//               type="email"
//               name="Email"
//               placeholder="Your Email ID"
//               className="w-full border border-gray-300 rounded-md p-3 text-sm"
//             />

//             <textarea
//               name="MultiLine"
//               placeholder="Tell us about your hearing issue"
//               className="w-full border border-gray-300 rounded-md p-3 text-sm min-h-[100px]"
//             ></textarea>

//             <p className="text-xs text-gray-500">
//               Your information is secure. Our Meerut team will call you shortly.
//             </p>

//             <button
//               type="submit"
//               className="w-full flex items-center justify-center gap-2 bg-[#184a99] text-white text-base font-semibold py-3 rounded-md shadow hover:bg-[#13366e] transition"
//             >
//               <Calendar className="w-5 h-5" />
//               Confirm My Free Appointment
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* ------------------ DESKTOP LAYOUT ------------------ */}
//       <div className="hidden lg:flex w-full max-w-7xl mx-auto py-16 gap-10 items-start px-6">
//         {/* LEFT TEXT */}
//         <div className="flex-1 min-w-[350px] space-y-6 text-left">
//           <h1 className="text-3xl font-bold leading-snug">
//             <span className="bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
//               Best HVAC System in Meerut – Now in Your City
//             </span>
//           </h1>

//           <p className="text-lg text-gray-700">
//             Download the complete price list with genuine pricing & discounts.
//           </p>

//           <div className="text-gray-700 text-lg">
//             <ul className="grid grid-cols-2 gap-2 text-base">
//               <li className="flex items-center gap-2">
//                 <MapPin className="w-4 h-4 text-[#0D2240]" />
//                 Modinagar
//               </li>
//               <li className="flex items-center gap-2">
//                 <MapPin className="w-4 h-4 text-[#0D2240]" />
//                 Hapur
//               </li>
//               <li className="flex items-center gap-2">
//                 <MapPin className="w-4 h-4 text-[#0D2240]" />
//                 Muradnagar
//               </li>
//               <li className="flex items-center gap-2">
//                 <MapPin className="w-4 h-4 text-[#0D2240]" />
//                 Meerut South
//               </li>
//             </ul>
//           </div>

//           {/* STATS */}
//           {/* <div className="grid grid-cols-3 gap-4 mt-6 text-center">
//             <div className="flex flex-col items-center">
//               <Users className="w-5 h-5 text-black mb-1" />
//               <p className="text-xl font-bold text-black">2 Lakh+</p>
//               <p className="text-xs text-gray-600">Happy Customers</p>
//             </div>

//             <div className="flex flex-col items-center">
//               <MapPin className="w-5 h-5 text-[#0D2240] mb-1" />
//               <p className="text-xl font-bold text-black">15+</p>
//               <p className="text-xs text-gray-600">Clinics Across India</p>
//             </div>

//             <div className="flex flex-col items-center">
//               <Stethoscope className="w-5 h-5 text-black mb-1" />
//               <p className="text-xl font-bold text-black">100+</p>
//               <p className="text-xs text-gray-600">Audiologists</p>
//             </div>
//           </div> */}

//           {/* CTA BUTTON */}
//           <a
//             href="/price-download?utm_source=website&utm_medium=herocta&utm_campaign=pricedownload"
//             className="inline-flex items-center justify-center gap-2 bg-[#0D2240] text-white mt-8 px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#08182E] transition"
//           >
//             <FileText className="w-5 h-5" />
//             Get Full Price List
//           </a>

//           {/* BRAND LOGOS */}
//           <div className="mt-8">
//             <p className="text-sm text-gray-500 mb-4">
//               We are an{" "}
//               <span className="font-semibold text-gray-700">
//                 official partner
//               </span>{" "}
//               of leading HVAC brands.
//             </p>

//             <div className="relative overflow-hidden w-full h-20">
//               <div
//                 className="absolute top-0 left-0 flex items-center gap-6 animate-marquee"
//                 style={{ minWidth: "200%" }}
//               >
//                 {logos.concat(logos).map((logo, i) => (
//                   <div
//                     key={i}
//                     className="flex-shrink-0 flex items-center justify-center px-3"
//                   >
//                     <Image
//                       src={logo}
//                       alt={`Brand logo ${i}`}
//                       width={80}
//                       height={32}
//                       className="object-contain"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CENTER SLIDER */}
//         <div className="flex-1 min-w-[350px] relative h-[420px]">
//           <Slider {...sliderSettings}>
//             {heroImages.map((img, i) => (
//               <div key={i} className="relative w-full h-[420px]">
//                 <Image
//                   src={img}
//                   alt={`Doctor ${i + 1}`}
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             ))}
//           </Slider>
//         </div>

//         {/* FORM SECTION */}
//         <div className="flex-1 min-w-[350px] bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-bold mb-3 text-gray-800">
//             Book Your Free Appointment in Meerut
//           </h2>

//           <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
//             <p className="flex items-center gap-1 text-sm text-gray-600">
//               <ShieldCheck className="w-4 h-4 text-[#023784]" />
//               No hidden fees
//             </p>
//             <p className="flex items-center gap-1 text-sm text-gray-600">
//               <EyeOff className="w-4 h-4 text-[#023784]" />
//               No obligation
//             </p>
//           </div>

//           <form
//             action="https://forms.zohopublic.in/httpswwwinsonohearingcom1/form/PopupHearingAidAppointmentForm/formperma/x3az42yuKuLC_iSAkb7ggtCQlpLfj-gN-85WhU5H8bs/htmlRecords/submit"
//             method="POST"
//             className="flex flex-col gap-3"
//           >
//             <input
//               type="text"
//               name="SingleLine"
//               placeholder="Your Name"
//               required
//               className="w-full border border-gray-300 rounded-md p-3 text-sm"
//             />
//             <input
//               type="text"
//               name="PhoneNumber_countrycode"
//               placeholder="Your Phone Number"
//               required
//               className="w-full border border-gray-300 rounded-md p-3 text-sm"
//             />
//             <input
//               type="email"
//               name="Email"
//               placeholder="Your Email ID"
//               className="w-full border border-gray-300 rounded-md p-3 text-sm"
//             />

//             <textarea
//               name="MultiLine"
//               placeholder="Write your hearing issue"
//               className="w-full border border-gray-300 rounded-md p-3 text-sm min-h-[100px]"
//             ></textarea>

//             <button
//               type="submit"
//               className="w-full flex items-center justify-center gap-2 bg-[#184a99] text-white text-base font-semibold py-3 rounded-md shadow hover:bg-[#13366e] transition"
//             >
//               <Calendar className="w-5 h-5" />
//               Confirm My Free Appointment
//             </button>

//             <p className="text-xs text-gray-500 mt-1">
//               Our Meerut team will contact you shortly.
//             </p>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
