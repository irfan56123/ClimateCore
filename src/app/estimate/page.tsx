import React from "react";
import HVACStepForm from "@/components/HVACStepForm";
import Image from "next/image";
import { ShieldCheck, Clock, Award, Star } from "lucide-react";

export default function EstimatePage() {
    return (
        <main className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-[#eaf5ff] to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* HERO HEADER */}
                <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
                        Professional HVAC <span className="text-[#184A99]">Estimate</span> in Minutes
                    </h1>
                    <p className="text-lg text-gray-600">
                        Tell us about your home or business needs and get a customized,
                        fair-price quote from our licensed experts.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-12 items-start">

                    {/* FORM CONTAINER */}
                    <div className="bg-white/40 backdrop-blur-md rounded-[32px] shadow-2xl shadow-blue-100 border border-white/60 p-6 md:p-10">
                        <HVACStepForm />
                    </div>

                    {/* SIDEBAR / TRUST SIGNALS */}
                    <div className="space-y-6 hidden lg:block">

                        {/* Trust Card */}
                        <div className="bg-gradient-to-br from-[#184A99] to-[#0D2240] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                            <div className="relative z-10 space-y-6">
                                <h3 className="text-2xl font-bold">Why ClimateCore Air?</h3>
                                <div className="space-y-5">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <ShieldCheck className="w-6 h-6 text-blue-300" />
                                        </div>
                                        <div>
                                            <p className="font-bold">Fully Licensed & Insured</p>
                                            <p className="text-sm text-blue-100/70">Expert technicians you can trust inside your home.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-6 h-6 text-blue-300" />
                                        </div>
                                        <div>
                                            <p className="font-bold">24/7 Priority Support</p>
                                            <p className="text-sm text-blue-100/70">We're always here when your system fails.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Award className="w-6 h-6 text-blue-300" />
                                        </div>
                                        <div>
                                            <p className="font-bold">10-Year Warranty*</p>
                                            <p className="text-sm text-blue-100/70">On all new HVAC system installations.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative background element */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                        </div>

                        {/* Testimonial Snippet */}
                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg">
                            <div className="flex items-center gap-2 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                                <span className="text-xs font-bold text-gray-400 ml-1">5.0 RATING</span>
                            </div>
                            <p className="text-gray-600 italic mb-4">
                                "ClimateCore Air gave me the most transparent quote. Their team was professional,
                                fast, and helped me find the best system for my home."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden relative">
                                    <Image src="/testi/review4.jpg" alt="Sarah J." fill className="object-cover" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm">Sarah Jenkins</p>
                                    <p className="text-xs text-gray-400">Homeowner in Boston</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* BOTTOM MOBILE TRUST SIGNALS */}
                <div className="mt-12 lg:hidden grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-2xl text-center border border-gray-100">
                        <ShieldCheck className="w-8 h-8 text-[#184A99] mx-auto mb-2" />
                        <p className="font-bold text-sm">Licensed & Insured</p>
                    </div>
                    <div className="bg-white p-4 rounded-2xl text-center border border-gray-100">
                        <Award className="w-8 h-8 text-[#184A99] mx-auto mb-2" />
                        <p className="font-bold text-sm">Certified Expert</p>
                    </div>
                </div>

            </div>
        </main>
    );
}
