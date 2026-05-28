"use client";

import { useEffect, useState, useRef } from "react";
import {
  Save,
  Upload,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import { AdminAuthGuard } from "@/components/admin/AdminSidebar";
import { services } from "../../services/services-data";

export default function ServicesPage() {
  const [images, setImages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);

  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  const fileInputRefs = useRef<{
    [key: string]: HTMLInputElement | null;
  }>({});

  // Fetch saved images
  const fetchImages = async () => {
    try {
      const res = await fetch("/api/admin/services/images", {
        cache: "no-store",
      });

      if (res.ok) {
        const data = await res.json();

        setImages(data || {});
      }
    } catch (error) {
      console.error("Failed to load images:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Handle file selection
  const handleFileChange = (
    slug: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Validate image type
    if (!file.type.startsWith("image/")) {
      setMessage({
        type: "error",
        text: "Please select a valid image file.",
      });

      return;
    }

    // Max 2MB
    if (file.size > 2 * 1024 * 1024) {
      setMessage({
        type: "error",
        text: "Image size must be less than 2MB.",
      });

      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setImages((prev): Record<string, string> => ({
          ...prev,
          [slug]: reader.result as string,
        }));
      }
    };

    reader.readAsDataURL(file);
  };

  // Save image
  const handleSave = async (slug: string) => {
    setMessage({
      type: "",
      text: "",
    });

    const base64Image = images[slug];

    if (!base64Image) {
      setMessage({
        type: "error",
        text: "No image selected.",
      });

      return;
    }

    setSaving(slug);

    try {
      const res = await fetch("/api/admin/services/images", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug,
          base64Image,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to save image");
      }

      // Refresh latest images
      await fetchImages();

      setMessage({
        type: "success",
        text: `Image updated successfully for ${slug}`,
      });
    } catch (error: any) {
      console.error(error);

      setMessage({
        type: "error",
        text: error.message || "Something went wrong",
      });
    } finally {
      setSaving(null);
    }
  };

  return (
    <AdminAuthGuard>
      <div className="p-6 lg:p-10 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Service Images
            </h1>

            <p className="text-gray-500 mt-1">
              Upload and manage service images.
            </p>
          </div>

          {/* Message */}
          {message.text && (
            <div
              className={`mb-6 p-4 rounded-2xl flex items-center gap-3 ${
                message.type === "success"
                  ? "bg-green-50 text-green-700 border border-green-100"
                  : "bg-red-50 text-red-700 border border-red-100"
              }`}
            >
              {message.type === "success" ? (
                <CheckCircle2 size={18} />
              ) : (
                <AlertCircle size={18} />
              )}

              <p className="text-sm font-semibold">
                {message.text}
              </p>
            </div>
          )}

          {/* Service Cards */}
          <div className="grid lg:grid-cols-2 gap-6">

            {services.map((service) => {

              const customImage = images[service.slug];

              const displayImage =
                customImage ||
                service.image ||
                "/fallback.png";

              return (
                <div
                  key={service.slug}
                  className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col sm:flex-row items-center gap-6 p-6"
                >

                  {/* Image Preview */}
                  <div className="relative w-full sm:w-48 h-32 bg-gray-100 rounded-xl overflow-hidden shrink-0">

                    {loading ? (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-gray-300 border-t-[#023784] rounded-full animate-spin" />
                      </div>
                    ) : (
                      <img
                        key={displayImage}
                        src={
                          displayImage &&
                          (
                            displayImage.startsWith("data:image") ||
                            displayImage.startsWith("/") ||
                            displayImage.startsWith("http")
                          )
                            ? displayImage
                            : "/fallback.png"
                        }
                        alt={service.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (
                            e.currentTarget as HTMLImageElement
                          ).src = "/fallback.png";
                        }}
                      />
                    )}

                  </div>

                  {/* Content */}
                  <div className="flex-1 w-full text-center sm:text-left">

                    <h2 className="text-lg font-bold text-gray-900 mb-1">
                      {service.title}
                    </h2>

                    <p className="text-xs text-gray-500 mb-4">
                      {service.slug}
                    </p>

                    {/* Hidden File Input */}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      ref={(el) => {
                        fileInputRefs.current[service.slug] = el;
                      }}
                      onChange={(e) =>
                        handleFileChange(service.slug, e)
                      }
                    />

                    <div className="flex flex-col sm:flex-row gap-2">

                      {/* Upload Button */}
                      <button
                        type="button"
                        onClick={() =>
                          fileInputRefs.current[
                            service.slug
                          ]?.click()
                        }
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-xs font-semibold hover:bg-gray-200 transition"
                      >
                        <Upload size={14} />
                        Choose File
                      </button>

                      {/* Save Button */}
                      <button
                        type="button"
                        onClick={() =>
                          handleSave(service.slug)
                        }
                        disabled={
                          saving === service.slug ||
                          loading ||
                          !customImage
                        }
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#023784] text-white rounded-xl text-xs font-bold hover:bg-[#012d66] disabled:opacity-50 transition"
                      >
                        {saving === service.slug ? (
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <Save size={14} />
                        )}

                        {saving === service.slug
                          ? "Saving..."
                          : "Save Image"}
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