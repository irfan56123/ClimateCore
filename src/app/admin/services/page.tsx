"use client";

import { useEffect, useState, useRef } from "react";
import { Save, Upload, CheckCircle2, AlertCircle, ImageIcon } from "lucide-react";
import { AdminAuthGuard } from "@/components/admin/AdminSidebar";
import Image from "next/image";

// Fetch the service data client-side for generating the list
import { services } from "../../services/services-data";

export default function ServicesPage() {
    const [images, setImages] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState<string | null>(null);
    const [message, setMessage] = useState({ type: "", text: "" });

    // File input refs to trigger upload dialogs
    const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await fetch("/api/admin/services/images");
                if (res.ok) {
                    const data = await res.json();
                    setImages(data);
                }
            } catch (error) {
                console.error("Failed to load custom images");
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    const handleFileChange = (slug: string, e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Ensure real image file is selected to avoid huge non-image base64
        if (!file.type.startsWith("image/")) {
            setMessage({ type: "error", text: "Please select a valid image file." });
            return;
        }

        if (file.size > 2 * 1024 * 1024) { // 2MB limit
            setMessage({ type: "error", text: "Image is too large. Max size is 2MB." });
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            if (typeof reader.result === "string") {
                setImages((prev) => ({ ...prev, [slug]: reader.result as string }));
            }
        };
        reader.readAsDataURL(file);
    };

    const handleSave = async (slug: string) => {
        setMessage({ type: "", text: "" });
        const base64Image = images[slug];

        if (!base64Image) {
            setMessage({ type: "error", text: "No custom image selected to save." });
            return;
        }

        setSaving(slug);
        try {
            const res = await fetch("/api/admin/services/images", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ slug, base64Image }),
            });

            if (res.ok) {
                setMessage({ type: "success", text: `Image updated for ${slug}!` });
            } else {
                const data = await res.json();
                throw new Error(data.error || "Failed to save image");
            }
        } catch (error: any) {
            setMessage({ type: "error", text: error.message });
        } finally {
            setSaving(null);
        }
    };

    return (
        <AdminAuthGuard>
            <div className="p-6 lg:p-10 bg-gray-50 min-h-screen">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 leading-tight">Service Images</h1>
                        <p className="text-gray-500 mt-1">Upload and manage the primary images for your service pages.</p>
                    </div>

                    {message.text && (
                        <div className={`mb-6 p-4 rounded-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300 ${message.type === "success" ? "bg-green-50 text-green-700 border border-green-100" : "bg-red-50 text-red-700 border border-red-100"
                            }`}>
                            {message.type === "success" ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                            <p className="text-sm font-semibold">{message.text}</p>
                        </div>
                    )}

                    <div className="grid lg:grid-cols-2 gap-6">
                        {services.map((service) => {
                            const customImage = images[service.slug];
                            const displayImage = customImage || service.image;

                            return (
                                <div key={service.slug} className="bg-white rounded-3xl auto-rows-min shadow-sm border border-gray-100 overflow-hidden flex flex-col sm:flex-row items-center gap-6 p-6">
                                    <div className="relative w-full sm:w-48 h-32 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                                        {loading ? (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <div className="w-6 h-6 border-2 border-gray-300 border-t-[#023784] rounded-full animate-spin" />
                                            </div>
                                        ) : displayImage ? (
                                            <Image
                                                src={displayImage}
                                                alt={service.title}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-300">
                                                <ImageIcon size={32} />
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1 w-full text-center sm:text-left">
                                        <h2 className="text-lg font-bold text-gray-900 mb-1">{service.title}</h2>
                                        <p className="text-xs text-gray-500 mb-4">{service.slug}</p>

                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            ref={(el) => {
                                                fileInputRefs.current[service.slug] = el;
                                            }}
                                            onChange={(e) => handleFileChange(service.slug, e)}
                                        />

                                        <div className="flex flex-col sm:flex-row gap-2 justify-center sm:justify-start">
                                            <button
                                                type="button"
                                                onClick={() => fileInputRefs.current[service.slug]?.click()}
                                                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-xs font-semibold hover:bg-gray-200 transition"
                                            >
                                                <Upload size={14} />
                                                Choose File
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleSave(service.slug)}
                                                disabled={saving === service.slug || loading || !customImage}
                                                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#023784] text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-100 hover:bg-[#012d66] disabled:opacity-50 transition transform active:scale-95"
                                            >
                                                {saving === service.slug ? (
                                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                ) : (
                                                    <Save size={14} />
                                                )}
                                                {saving === service.slug ? "Saving..." : "Save Image"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </AdminAuthGuard>
    );
}
