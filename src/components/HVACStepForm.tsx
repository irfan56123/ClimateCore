"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Flame,
    Snowflake,
    Wind,
    Home,
    Building2,
    CheckCircle2,
    ChevronRight,
    ChevronLeft,
    Phone,
    User,
    Mail,
    ArrowRight,
    Maximize2
} from "lucide-react";

type ServiceCategory = "Heating" | "Cooling" | "Air Quality";

interface FormState {
    category: ServiceCategory | "";
    service: string;
    propertyType: "Residential" | "Commercial" | "";
    size: string;
    name: string;
    phone: string;
    email: string;
}

const servicesMap: Record<ServiceCategory, string[]> = {
    "Heating": ["Furnace Installation", "Furnace Repair", "Heat Pump"], // Removed Boiler Service
    "Cooling": ["Heat Pump Installation", "Air-Conditioner Repair", "Mini-Split System", "Condenser Unit"],
    "Air Quality": ["Duct/Chimney/Dryer Vent Cleaning", "UV Light", "Sanitation", "Air Purification", "Humidification"]
};

const sizeOptions = ["Under 1,000 sq ft", "1,000 - 2,500 sq ft", "2,500 - 4,000 sq ft", "4,000+ sq ft"];

function HVACStepFormContent() {
    const searchParams = useSearchParams();
    const [step, setStep] = useState(1);
    const [direction, setDirection] = useState(1);
    const [form, setForm] = useState<FormState>({
        category: "",
        service: "",
        propertyType: "",
        size: "",
        name: "",
        phone: "",
        email: ""
    });
    const [loading, setLoading] = useState(false);

    // Auto-fill from URL params
    useEffect(() => {
        const cat = searchParams.get("category") as ServiceCategory;
        const svc = searchParams.get("service");

        if (cat && servicesMap[cat]) {
            setForm(prev => ({ ...prev, category: cat }));
            setStep(2); // Skip Step 1 (Category selection)
            if (svc) {
                setForm(prev => ({ ...prev, service: svc }));
                // Removed setStep(3) to ensure Step 2 is not skipped
            }
        }
    }, [searchParams]);

    const update = (field: keyof FormState, value: string) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const nextStep = () => {
        setDirection(1);
        setStep(s => s + 1);
    };

    const prevStep = () => {
        setDirection(-1);
        setStep(s => s - 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    utmSource: searchParams.get("utm_source") || "",
                    utmMedium: searchParams.get("utm_medium") || "",
                    utmCampaign: searchParams.get("utm_campaign") || "",
                    utmTerm: searchParams.get("utm_term") || "",
                    utmContent: searchParams.get("utm_content") || "",
                    gclid: searchParams.get("gclid") || "",
                    pageUrl: window.location.href,
                    referrer: document.referrer || "",
                    source: "Estimate Page Multi-Step"
                })
            });

            if (response.ok) {
                nextStep();
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
        } finally {
            setLoading(false);
        }
    };

    const stepVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0
        })
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Progress Bar */}
            {step <= 5 && (
                <div className="mb-8 px-4">
                    <div className="flex justify-between mb-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <span>Step {step} of 5</span>
                        <span>{Math.round((step / 5) * 100)}% Complete</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-[#184A99]"
                            initial={{ width: 0 }}
                            animate={{ width: `${(step / 5) * 100}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>
            )}

            <div className="relative min-h-[500px] overflow-hidden px-4">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={step}
                        custom={direction}
                        variants={stepVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="w-full"
                    >
                        {/* STEP 1: CATEGORY */}
                        {step === 1 && (
                            <div className="space-y-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
                                    What service are you looking for?
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[
                                        { id: "Heating", icon: Flame, color: "text-orange-500", bg: "bg-orange-50" },
                                        { id: "Cooling", icon: Snowflake, color: "text-blue-500", bg: "bg-blue-50" },
                                        { id: "Air Quality", icon: Wind, color: "text-green-500", bg: "bg-green-50" }
                                    ].map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => {
                                                update("category", item.id as ServiceCategory);
                                                nextStep();
                                            }}
                                            className={`flex flex-col items-center justify-center p-8 rounded-2xl border-2 transition-all group ${form.category === item.id
                                                ? "border-[#184A99] bg-white shadow-lg"
                                                : "border-gray-100 bg-white hover:border-gray-300 hover:shadow-md"
                                                }`}
                                        >
                                            <div className={`p-4 rounded-xl mb-4 ${item.bg} group-hover:scale-110 transition-transform`}>
                                                <item.icon className={`w-8 h-8 ${item.color}`} />
                                            </div>
                                            <span className="font-bold text-lg text-gray-800">{item.id}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* STEP 2: SPECIFIC SERVICE */}
                        {step === 2 && (
                            <div className="space-y-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
                                    Select your {form.category.toLowerCase()} needs
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {servicesMap[form.category as ServiceCategory]?.map((service) => (
                                        <button
                                            key={service}
                                            onClick={() => {
                                                update("service", service);
                                                nextStep();
                                            }}
                                            className={`flex items-center justify-between p-5 rounded-xl border-2 transition-all ${form.service === service
                                                ? "border-[#184A99] bg-[#f8fbff]"
                                                : "border-gray-100 bg-white hover:border-gray-200"
                                                }`}
                                        >
                                            <span className="font-semibold text-gray-700">{service}</span>
                                            <ChevronRight className="w-5 h-5 text-gray-400" />
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={prevStep}
                                    className="flex items-center text-gray-500 font-medium hover:text-gray-700 transition"
                                >
                                    <ChevronLeft className="w-5 h-5" /> Back
                                </button>
                            </div>
                        )}

                        {/* STEP 3: PROPERTY TYPE */}
                        {step === 3 && (
                            <div className="space-y-6 text-center">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                    Where is the work being done?
                                </h2>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    {[
                                        { id: "Residential", icon: Home, label: "Residential" },
                                        { id: "Commercial", icon: Building2, label: "Commercial" }
                                    ].map((type) => (
                                        <button
                                            key={type.id}
                                            onClick={() => {
                                                update("propertyType", type.id as any);
                                                nextStep();
                                            }}
                                            className={`flex-1 flex flex-col items-center p-10 rounded-2xl border-2 transition-all ${form.propertyType === type.id
                                                ? "border-[#184A99] bg-[#f8fbff] shadow-inner"
                                                : "border-gray-100 bg-white hover:border-gray-200"
                                                }`}
                                        >
                                            <type.icon className={`w-12 h-12 mb-4 ${form.propertyType === type.id ? "text-[#184A99]" : "text-gray-400"}`} />
                                            <span className="font-bold text-xl">{type.label}</span>
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={prevStep}
                                    className="flex items-center mx-auto text-gray-500 font-medium hover:text-gray-700 transition"
                                >
                                    <ChevronLeft className="w-5 h-5" /> Back
                                </button>
                            </div>
                        )}

                        {/* STEP 4: SIZE */}
                        {step === 4 && (
                            <div className="space-y-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
                                    Approximate building size?
                                </h2>
                                <div className="space-y-3">
                                    {sizeOptions.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => {
                                                update("size", size);
                                                nextStep();
                                            }}
                                            className={`w-full flex items-center justify-between p-5 rounded-xl border-2 transition-all ${form.size === size
                                                ? "border-[#184A99] bg-[#f8fbff]"
                                                : "border-gray-100 bg-white hover:border-gray-200"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <Maximize2 className="w-5 h-5 text-gray-400" />
                                                <span className="font-semibold text-gray-700">{size}</span>
                                            </div>
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${form.size === size ? "border-[#184A99] bg-[#184A99]" : "border-gray-200"
                                                }`}>
                                                {form.size === size && <div className="w-2 h-2 bg-white rounded-full" />}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={prevStep}
                                    className="flex items-center text-gray-500 font-medium hover:text-gray-700 transition"
                                >
                                    <ChevronLeft className="w-5 h-5" /> Back
                                </button>
                            </div>
                        )}

                        {/* STEP 5: CONTACT INFO */}
                        {step === 5 && (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="text-center space-y-2">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                        Almost there!
                                    </h2>
                                    <p className="text-gray-500">
                                        Tell us where to send your free estimate.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Your Full Name"
                                            required
                                            value={form.name}
                                            onChange={(e) => update("name", e.target.value)}
                                            className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-100 focus:border-[#184A99] focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            required
                                            value={form.phone}
                                            onChange={(e) => update("phone", e.target.value)}
                                            className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-100 focus:border-[#184A99] focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            required
                                            value={form.email}
                                            onChange={(e) => update("email", e.target.value)}
                                            className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-100 focus:border-[#184A99] focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-[#184A99] text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-200 hover:bg-[#123a7a] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:hover:scale-100"
                                    >
                                        {loading ? "Processing..." : (
                                            <>
                                                Get My Free Estimate
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        className="text-gray-500 font-medium hover:text-gray-700 transition"
                                    >
                                        Back to previous step
                                    </button>
                                </div>

                                <p className="text-center text-xs text-gray-400 px-4">
                                    By clicking "Get My Free Estimate", you agree to our <a href="/terms-of-use" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                                    We will contact you shortly to confirm details.
                                </p>
                            </form>
                        )}

                        {/* FINAL: SUCCESS */}
                        {step === 6 && (
                            <div className="text-center space-y-6 py-10 scale-up">
                                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold text-gray-900">Success!</h2>
                                    <p className="text-xl text-gray-600">Your request has been received.</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-2xl max-w-sm mx-auto border border-gray-100">
                                    <p className="text-gray-600 mb-4 font-medium">
                                        What happens next?
                                    </p>
                                    <ul className="text-left text-sm space-y-3 text-gray-500">
                                        <li className="flex gap-2">
                                            <div className="w-5 h-5 flex-shrink-0 bg-[#184A99] text-white rounded-full flex items-center justify-center text-[10px] font-bold">1</div>
                                            An HVAC expert will review your details.
                                        </li>
                                        <li className="flex gap-2">
                                            <div className="w-5 h-5 flex-shrink-0 bg-[#184A99] text-white rounded-full flex items-center justify-center text-[10px] font-bold">2</div>
                                            We will call you at <span className="text-gray-800 font-semibold">{form.phone}</span> within 15 minutes.
                                        </li>
                                        <li className="flex gap-2">
                                            <div className="w-5 h-5 flex-shrink-0 bg-[#184A99] text-white rounded-full flex items-center justify-center text-[10px] font-bold">3</div>
                                            You'll receive a detailed estimate via email.
                                        </li>
                                    </ul>
                                </div>
                                <button
                                    onClick={() => window.location.href = "/"}
                                    className="inline-block border-2 border-gray-200 text-gray-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition"
                                >
                                    Return to Home
                                </button>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default function HVACStepForm() {
    return (
        <Suspense fallback={<div className="text-center py-20 font-bold text-gray-400">Loading form...</div>}>
            <HVACStepFormContent />
        </Suspense>
    );
}
