"use client";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star, Quote, Play, CheckCircle } from "lucide-react";

// Updated HVAC-themed testimonial data
const testi = [
    {
        name: "Michael Henderson",
        location: "Residential Customer",
        description:
            "Vently Air saved us during the peak of winter. Our furnace failed at 2 AM, and their emergency technician was at our door within 45 minutes. Professional, fast, and fair pricing.",
        image: "/testi/review4.jpg",
    },
    {
        name: "Sarah Jenkins",
        location: "Home Owner",
        description:
            "We upgraded to a central AC system last summer. The energy savings have been incredible, and the indoor air quality test they performed opened our eyes to why our allergies were so bad. Highly recommend!",
        image: "/testi/review5.jpg",
    },
    {
        name: "Robert Miller",
        location: "Commercial Property Manager",
        description:
            "Managing multiple properties requires reliable partners. Vently Air handles all our annual maintenance and duct cleaning. They are the most thorough HVAC team I've ever worked with.",
        image: "/testi/Gurmeet.jpeg",
    },
    {
        name: "Amanda Chen",
        location: "New Homeowner",
        description:
            "The duct cleaning service was a game changer. You wouldn't believe what they pulled out of the vents! The air feels so much fresher now, and the team was very respectful of our home.",
        image: "/testi/Balveer.jpeg",
    },
    {
        name: "David Wilson",
        location: "Family Home",
        description:
            "Excellent service from start to finish. They explained exactly why our heat pump was underperforming instead of just trying to sell us a new one. Honest and expert advice.",
        image: "/testi/Yoginder.jpeg",
    },
];

const videoTestimonials = [
    { name: "Family Home AC Install", url: "https://www.youtube.com/embed/Gn3dkFJtCg8" },
    { name: "Emergency Furnace Repair", url: "https://www.youtube.com/embed/bkz3983stM4" },
    { name: "Full Duct Cleaning Process", url: "https://www.youtube.com/embed/YO5Ef3OAY3c" },
    { name: "Commercial Ventilation Project", url: "https://www.youtube.com/embed/1nG59lEla14" },
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
                                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-100">
                                            <Image
                                                src={t.image}
                                                fill
                                                alt={t.name}
                                                className="object-cover"
                                            />
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

            {/* 🎥 Video Testimonials Grid */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">See Our Work in Action</h2>
                            <p className="text-gray-500 text-lg">Watch how our technicians transform comfort and air quality in homes and businesses just like yours.</p>
                        </div>
                        <div className="flex items-center gap-4 text-[#184A99] font-bold hover:underline cursor-pointer group">
                            View Our YouTube Channel <Play size={20} className="fill-[#184A99] group-hover:scale-110 transition-transform" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {videoTestimonials.map((t, idx) => (
                            <div key={idx} className="group flex flex-col h-full">
                                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg border-4 border-white group-hover:shadow-2xl transition-all">
                                    <iframe
                                        className="w-full h-full"
                                        src={t.url}
                                        allowFullScreen
                                        title={t.name}
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent pointer-events-none transition-colors"></div>
                                </div>
                                <h4 className="mt-4 font-bold text-gray-800 text-center group-hover:text-[#184A99] transition-colors">{t.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
