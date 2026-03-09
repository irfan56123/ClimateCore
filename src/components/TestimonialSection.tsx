"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, X } from "lucide-react";
import LazyVideo from "./LazyVideo";
const testimonials = [
    {
        name: "Laito French",
        text: "Shon did an excellent job. What started as a consultation turned into a full service the same day including vents, dryer vent, and chimney cleaning. The service exceeded our expectations.",
        role: "Homeowner",
    },
    {
        name: "Fiona Titir",
        text: "Otto was amazing. The dryer vents in our new home had clearly never been cleaned and he went above and beyond to restore airflow instead of simply blaming the appliance.",
        role: "Homeowner",
    },
    {
        name: "Amy Herzog",
        text: "Great experience with Vently Air. Scheduling was easy, the technician arrived on time, and explained everything clearly. Very professional and efficient service.",
        role: "Customer",
    },
    {
        name: "Jeff Adams",
        text: "Johnny was extremely professional and walked me through every step of the cleaning process. Fair pricing and excellent service overall.",
        role: "Homeowner",
    },
    {
        name: "Moe Ammar",
        text: "Outstanding chimney cleaning service. The technician arrived on time, worked efficiently, and left everything spotless. Highly recommend their team.",
        role: "Customer",
    },
    {
        name: "Lima Vinchy",
        text: "The technician was very professional and showed us before and after photos of the duct cleaning. It was clear they take pride in their work.",
        role: "Homeowner",
    },
    {
        name: "Carlos Ramirez",
        text: "Very impressed with the service. The team arrived on time, explained the entire process, and completed the work quickly and professionally.",
        role: "Customer",
    },
    {
        name: "Michelle Brown",
        text: "Excellent service from start to finish. The technician was friendly, knowledgeable, and ensured everything was cleaned thoroughly.",
        role: "Homeowner",
    },
    {
        name: "David Wilson",
        text: "Professional, punctual, and very detailed. Our air ducts had not been cleaned for years and the difference in air quality was noticeable immediately.",
        role: "Customer",
    }
];

const ReviewCard = ({ name, text, role }: { name: string; text: string; role: string }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col space-y-3 mb-4 last:mb-0">
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
            ))}
        </div>
        <p className="text-gray-700 italic text-sm leading-relaxed">"{text}"</p>
        <div className="pt-2 border-t border-gray-50">
            <h4 className="font-bold text-gray-900 text-sm">{name}</h4>
            <p className="text-gray-500 text-xs">{role}</p>
        </div>
    </div>
);

const ScrollingColumn = ({ items, reverse = false }: { items: typeof testimonials; reverse?: boolean }) => (
    <div className="relative h-[600px] overflow-hidden group/col">
        <div className={`flex flex-col ${reverse ? "animate-marquee-vertical-reverse" : "animate-marquee-vertical"} hover:[animation-play-state:paused]`}>
            {[...items, ...items].map((item, idx) => (
                <ReviewCard key={idx} {...item} />
            ))}
        </div>
    </div>
);

export default function TestimonialSection() {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    return (
        <section className="bg-gradient-to-b from-white to-[#eaf5ff] py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">

                {/* LEFT COLUMN */}
                <div className="md:col-span-5 space-y-8">
                    <div className="inline-block bg-[#184A99]/10 text-[#184A99] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                        Testimonials
                    </div>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0D2240] leading-tight">
                        What People Think About <span className="text-[#184A99]">Vently Air</span>
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                        Join thousands of satisfied homeowners and businesses who trust us for their heating, cooling, and air quality needs.
                    </p>

                    {/* STATS */}
                    <div className="flex flex-wrap gap-8 pt-4">
                        <div>
                            <p className="text-2xl font-bold text-[#184A99]">10K+</p>
                            <p className="text-xs text-gray-500 font-medium">Happy Customers</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-[#184A99]">50+</p>
                            <p className="text-xs text-gray-500 font-medium">Expert Techs</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-[#184A99]">15+</p>
                            <p className="text-xs text-gray-500 font-medium">Years Experience</p>
                        </div>
                    </div>

                    {/* FEATURED VIDEO / IMAGE */}
                    <div
                        className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-gray-900 group cursor-pointer"
                        onClick={() => setIsVideoModalOpen(true)}
                    >
                        <LazyVideo />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-[#184A99] border-b-[8px] border-b-transparent ml-1" />
                            </div>
                        </div>
                        <div className="absolute bottom-4 left-6 text-white pointer-events-none">
                            <p className="font-bold">Watch our story</p>
                            <p className="text-xs text-white/80">Experience quality firsthand</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN - SCROLLING REVIEWS */}
                <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative mask-v">
                    {/* Split testimonials into 3 chunks */}
                    <ScrollingColumn items={testimonials.slice(0, 3)} />
                    <ScrollingColumn items={testimonials.slice(3, 6)} reverse={true} />
                    <ScrollingColumn items={testimonials.slice(6, 9)} />

                    {/* Top/Bottom Fade */}
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#eaf5ff] to-transparent pointer-events-none z-10" />
                </div>
            </div>

            {/* FULLSCREEN VIDEO MODAL */}
            {isVideoModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
                    onClick={() => setIsVideoModalOpen(false)}
                >
                    <button
                        onClick={() => setIsVideoModalOpen(false)}
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[51] bg-black/50 p-2 rounded-full"
                    >
                        <X size={32} />
                    </button>

                    <div
                        className="w-full max-w-6xl aspect-video px-4 md:px-12 flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <video
                            className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                            controls
                            autoPlay
                            playsInline
                        >
                            <source src="/hero.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            )}
        </section>
    );
}
