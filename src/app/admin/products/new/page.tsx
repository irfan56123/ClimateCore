"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProductForm, { type ProductFormData } from "@/components/admin/ProductForm";

export default function NewProductPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (data: ProductFormData) => {
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/admin/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) {
                const d = await res.json();
                throw new Error(d.error || "Failed to create product");
            }
            router.push("/admin/products");
            router.refresh();
        } catch (err: unknown) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
                <Link href="/admin/products" className="p-2 rounded-xl hover:bg-gray-100 transition text-gray-500">
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">New Product</h1>
                    <p className="text-sm text-gray-500">Add a HVAC to your catalog</p>
                </div>
            </div>

            {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-700 text-sm mb-6">{error}</div>
            )}

            <ProductForm onSubmit={handleSubmit} submitLabel="Create Product" loading={loading} />
        </div>
    );
}
