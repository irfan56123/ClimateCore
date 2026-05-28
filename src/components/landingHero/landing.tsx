// "use client";
// import Image from "next/image";
// import {
//   ShieldCheck,
//   EyeOff,
//   FileText,
//   Calendar,
//   Users,
//   MapPin,
//   Stethoscope,
// } from "lucide-react";

// type HeroProps = {
//   title: string;
//   subtitle: string;
//   ctaText: string;
//   partnerLabel: string;
//   stats: {
//     label: string;
//     value: string;
//     icon: "users" | "map" | "stethoscope";
//   }[];
//   heroImages: string[];
//   features: {
//     icon: string;
//     text: string;
//   }[];
// };

// const iconMap = {
//   users: Users,
//   map: MapPin,
//   stethoscope: Stethoscope,
// };

// export default function HeroSection({
//   title,
//   subtitle,
//   ctaText,
//   partnerLabel,
//   stats,
//   heroImages,
//   features, // ✅ THIS WAS MISSING
// }: HeroProps) {
//   const logos = [
//     "/brands/signia.svg",
//     "/brands/widex.svg",
//     "/brands/phonaklogo.svg",
//     "/brands/oticon.svg",
//     "/brands/resound.svg",
//   ];

//   return (
//     <section className="relative w-full bg-slate-50 overflow-hidden py-6 md:py-12 ">
//       <div className="max-w-7xl mx-auto px-4 mt-20">
//         <div className="flex flex-col lg:flex-row gap-10 items-start">
//           {/* TEXT */}
//           <div className="w-full lg:w-[40%] space-y-5 text-center lg:text-left order-1">
//             <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
//               <span className="bg-gradient-to-r from-[#E83D6D] via-[#0D2240] to-[#7C7C7C] bg-clip-text text-transparent">
//                 {title}
//               </span>
//             </h1>

//             <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
//               {subtitle}
//             </p>

//             {/* FEATURES */}
//             <div className="space-y-2 text-left max-w-md mx-auto lg:mx-0">
//               {features.map((item, i) => (
//                 <div key={i} className="flex items-center gap-2 text-sm">
//                   <span className="text-lg">{item.icon}</span>
//                   <span
//                     className="text-gray-800"
//                     dangerouslySetInnerHTML={{ __html: item.text }}
//                   />
//                 </div>
//               ))}
//             </div>

//             {/* CTA */}
//             <a
//               href="/price-download"
//               className="inline-flex items-center justify-center gap-2 bg-[#0D2240] text-white px-6 py-3 rounded-xl font-bold text-sm md:text-lg w-full sm:w-auto"
//             >
//               <FileText className="w-5 h-5" />
//               {ctaText}
//             </a>

//             {/* LOGOS */}
//             <div className="pt-5 overflow-hidden">
//               <p className="text-[10px] font-bold text-gray-400 uppercase mb-3">
//                 {partnerLabel}
//               </p>

//               <div className="flex w-[200%] gap-10 animate-marquee-slow items-center grayscale opacity-60">
//                 {[...logos, ...logos].map((logo, i) => (
//                   <div key={i} className="relative w-14 h-7">
//                     <Image
//                       src={logo}
//                       alt="Brand"
//                       fill
//                       className="object-contain"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* IMAGE */}
//           <div className="w-full lg:w-[30%] order-2">
//             <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth gap-4 rounded-3xl h-[220px] sm:h-[260px] lg:h-auto ">
//               {heroImages.map((img, i) => (
//                 <div
//                   key={i}
//                   className="min-w-full snap-center relative aspect-square"
//                 >
//                   <Image
//                     src={img}
//                     alt="HVAC System"
//                     fill
//                     priority={i === 0}
//                     className="object-contain drop-shadow-xl px-4"
//                   />
//                 </div>
//               ))}
//             </div>

//             <p className="text-[10px] text-gray-400 text-center mt-2 lg:hidden">
//               ← Swipe →
//             </p>
//           </div>

//           {/* FORM */}
//           <div className="w-full lg:w-[30%] order-3">
//             <div className="bg-white p-5 md:p-6 rounded-2xl shadow-lg border">
//               <h2 className="text-lg md:text-xl font-bold mb-2 text-[#0D2240]">
//                 Book Free Appointment
//               </h2>

//               <div className="flex gap-4 mb-4">
//                 <span className="flex items-center gap-1 text-[10px] text-gray-500">
//                   <ShieldCheck className="w-3 h-3 text-emerald-500" /> No Fees
//                 </span>
//                 <span className="flex items-center gap-1 text-[10px] text-gray-500">
//                   <EyeOff className="w-3 h-3 text-emerald-500" /> No Obligation
//                 </span>
//               </div>

//               <form
//                 action="https://forms.zohopublic.in/httpswwwinsonohearingcom1/form/PopupHearingAidAppointmentForm/formperma/x3az42yuKuLC_iSAkb7ggtCQlpLfj-gN-85WhU5H8bs/htmlRecords/submit"
//                 method="POST"
//                 className="flex flex-col gap-3"
//               >
//                 <input
//                   type="hidden"
//                   name="zf_redirect_url"
//                   value={`https://prices.${process.env.NEXT_PUBLIC_DOMAIN || "ClimateCoreair.com"}/landing/apt-thank-you`}
//                 />

//                 <input
//                   type="text"
//                   name="SingleLine"
//                   placeholder="Your Name"
//                   required
//                   className="border rounded-lg p-3 text-sm"
//                 />

//                 <input
//                   type="tel"
//                   name="PhoneNumber_countrycode"
//                   placeholder="Phone Number"
//                   required
//                   className="border rounded-lg p-3 text-sm"
//                 />

//                 <textarea
//                   name="MultiLine"
//                   placeholder="Tell us your problem"
//                   className="border rounded-lg p-3 text-sm min-h-[80px]"
//                 />

//                 <button
//                   type="submit"
//                   className="flex items-center justify-center gap-2 bg-[#184a99] text-white py-3 rounded-lg font-bold"
//                 >
//                   <Calendar className="w-5 h-5" />
//                   Confirm Free Visit
//                 </button>

//                 <p className="text-[9px] text-gray-400 text-center">
//                   Your data is safe. Experts will call you soon.
//                 </p>
//               </form>

//               {/* STATS */}
//               <div className="grid grid-cols-3 gap-3 py-4 border-y border-gray-200 lg:border-none">
//                 {stats.map((stat, idx) => {
//                   const Icon = iconMap[stat.icon];
//                   return (
//                     <div
//                       key={idx}
//                       className="flex flex-col items-center lg:items-start"
//                     >
//                       <Icon className="w-5 h-5 text-[#E83D6D]" />
//                       <span className="text-lg font-bold text-[#0D2240]">
//                         {stat.value}
//                       </span>
//                       <span className="text-[10px] text-gray-500 uppercase">
//                         {stat.label}
//                       </span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee-slow {
//           animation: marquee 30s linear infinite;
//         }
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           scrollbar-width: none;
//         }
//       `}</style>
//     </section>
//   );
// }
