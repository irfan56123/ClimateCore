"use client";

import { useState } from "react";
import { User, Phone, Mail, MessageSquare, Flame, Snowflake, Wind } from "lucide-react";

export default function LeadForm() {

    const [loading, setLoading] = useState(false);
    const [service, setService] = useState("Furnace");

    async function handleSubmit(e: any) {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        formData.append("service", service);

        // Capture marketing params from URL
        const params = new URLSearchParams(window.location.search);
        formData.append("utmSource", params.get("utm_source") || "");
        formData.append("utmMedium", params.get("utm_medium") || "");
        formData.append("utmCampaign", params.get("utm_campaign") || "");
        formData.append("utmTerm", params.get("utm_term") || "");
        formData.append("utmContent", params.get("utm_content") || "");
        formData.append("gclid", params.get("gclid") || "");
        formData.append("pageUrl", window.location.href);
        formData.append("referrer", document.referrer || "");

        await fetch("/api/leads", {
            method: "POST",
            body: formData
        });

        setLoading(false);
    }

    const services = [
        { name: "Furnace", icon: Flame },
        { name: "AC Repair", icon: Snowflake },
        { name: "Mini Split", icon: Wind },
    ];

    return (
        <div className="relative bg-white p-6 sm:p-7 rounded-2xl shadow-xl border border-gray-100 w-full max-w-lg mx-auto">

            {/* Glow effect */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

            {/* Heading */}
            <div className="mb-5 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                    Get Your Free HVAC Estimate
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Quick response from our certified technicians
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Service Selector */}
                <div>
                    <p className="text-xs font-semibold text-gray-500 mb-2">
                        What do you need help with?
                    </p>

                    <div className="grid grid-cols-3 gap-2">
                        {services.map((item) => {
                            const Icon = item.icon;
                            return (
                                <button
                                    type="button"
                                    key={item.name}
                                    onClick={() => setService(item.name)}
                                    className={`flex flex-col items-center justify-center gap-1 text-xs sm:text-sm p-3 rounded-lg border transition
                  ${service === item.name
                                            ? "bg-[#184A99] text-white border-[#184A99]"
                                            : "bg-gray-50 hover:bg-gray-100 border-gray-200"
                                        }`}
                                >
                                    <Icon size={16} />
                                    {item.name}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Name */}
                <div className="relative">
                    <User size={16} className="absolute left-3 top-3 text-gray-400" />
                    <input
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full border rounded-lg pl-9 pr-3 py-2.5 text-sm focus:ring-2 focus:ring-[#184A99] outline-none"
                    />
                </div>

                {/* Phone */}
                <div className="relative">
                    <Phone size={16} className="absolute left-3 top-3 text-gray-400" />
                    <input
                        name="phone"
                        placeholder="Phone Number"
                        required
                        className="w-full border rounded-lg pl-9 pr-3 py-2.5 text-sm focus:ring-2 focus:ring-[#184A99] outline-none"
                    />
                </div>

                {/* Email */}
                <div className="relative">
                    <Mail size={16} className="absolute left-3 top-3 text-gray-400" />
                    <input
                        name="email"
                        placeholder="Email Address"
                        className="w-full border rounded-lg pl-9 pr-3 py-2.5 text-sm focus:ring-2 focus:ring-[#184A99] outline-none"
                    />
                </div>

                {/* Message */}
                <div className="relative">
                    <MessageSquare size={16} className="absolute left-3 top-3 text-gray-400" />
                    <textarea
                        name="message"
                        rows={3}
                        placeholder="Describe your HVAC issue"
                        className="w-full border rounded-lg pl-9 pr-3 py-2.5 text-sm focus:ring-2 focus:ring-[#184A99] outline-none"
                    />
                </div>

                {/* CTA */}
                <button
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#184A99] to-[#0D2240] text-white py-3 rounded-lg font-semibold hover:opacity-95 transition shadow-lg"
                >
                    {loading ? "Submitting..." : "Get My Free Estimate"}
                </button>

            </form>

            <p className="text-xs text-gray-500 mt-3 text-center">
                Your information is secure. Our HVAC experts will contact you shortly.
            </p>

        </div>
    );
}