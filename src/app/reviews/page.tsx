"use client";

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star, Quote, CheckCircle } from "lucide-react";
import FAQ from "@/components/FAQ";

// Updated HVAC-themed testimonial data
const testi = [
    {
        name: "Michael Henderson",
        location: "Residential Customer",
        description:
            "Vently Air saved us during the peak of winter. Our furnace failed at 2 AM, and their emergency technician was at our door within 45 minutes. Professional, fast, and fair pricing.",
    },
    {
        name: "Sarah Jenkins",
        location: "Home Owner",
        description:
            "We upgraded to a central AC system last summer. The energy savings have been incredible, and the indoor air quality test they performed opened our eyes to why our allergies were so bad. Highly recommend!",
    },
    {
        name: "Robert Miller",
        location: "Commercial Property Manager",
        description:
            "Managing multiple properties requires reliable partners. Vently Air handles all our annual maintenance and duct cleaning. They are the most thorough HVAC team I've ever worked with.",
    },
    {
        name: "Amanda Chen",
        location: "New Homeowner",
        description:
            "The duct cleaning service was a game changer. You wouldn't believe what they pulled out of the vents! The air feels so much fresher now, and the team was very respectful of our home.",
    },
    {
        name: "David Wilson",
        location: "Family Home",
        description:
            "Excellent service from start to finish. They explained exactly why our heat pump was underperforming instead of just trying to sell us a new one. Honest and expert advice.",
    },
];

export default function ReviewsPage() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <main className="bg-white text-gray-900 pt-24 pb-20">
            {/* 🟦 Hero Section */}
            <section className="bg-[#184A99] py-20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                        <Star size={14} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-bold tracking-wider uppercase">Rated 4.9/5 by 2,000+ Customers</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6">Real Stories of Comfort</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                        Discover why Vently Air is the most trusted name in heating, cooling, and air quality across the region.
                    </p>
                </div>
            </section>

            {/* ⭐ Featured Reviews Carousel */}
            <section className="py-24 -mt-12 relative z-20">
                <div className="max-w-7xl mx-auto px-4">
                    <Slider {...sliderSettings} className="review-slider">
                        {testi.map((t, idx) => (
                            <div key={idx} className="px-3 pb-10">
                                <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 rounded-3xl border border-gray-50 flex flex-col h-full relative group hover:-translate-y-2 transition-transform duration-300">
                                    <Quote className="absolute top-6 right-8 text-blue-50 w-12 h-12 -z-10 group-hover:text-blue-100 transition-colors" />

                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#184A99] font-bold text-xl border-2 border-blue-100">
                                            {t.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900">{t.name}</h5>
                                            <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">{t.location}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-1 mb-4 text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} fill="currentColor" />
                                        ))}
                                    </div>

                                    <p className="text-gray-600 leading-relaxed italic">"{t.description}"</p>

                                    <div className="mt-8 pt-6 border-t border-gray-50 flex items-center gap-2">
                                        <CheckCircle size={14} className="text-green-500" />
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Verified Customer</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            {/* ❓ FAQ Section */}
            <FAQ />

            {/* 🟦 Call to Action */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="bg-[#184A99] rounded-[40px] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.png')] opacity-10"></div>
                        <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10">Experience the Vently Air Difference</h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto relative z-10">
                            Join thousands of satisfied customers who trust us with their home's comfort and health.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                            <Link
                                href="/estimate"
                                className="bg-white text-[#184A99] px-8 py-4 rounded-2xl font-black shadow-xl hover:bg-blue-50 transition transform hover:-translate-y-1"
                            >
                                Get a Free Estimate
                            </Link>
                            <Link
                                href={`tel:${process.env.NEXT_PUBLIC_PHONE || "+916204260510"}`}
                                className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-black hover:bg-white/10 transition transform hover:-translate-y-1"
                            >
                                Talk to an Expert
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
