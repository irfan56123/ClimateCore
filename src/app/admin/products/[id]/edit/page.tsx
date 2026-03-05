"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";
import ProductForm, { type ProductFormData } from "@/components/admin/ProductForm";

export default function EditProductPage() {
    const router = useRouter();
    const params = useParams();
    const id = params.id as string;

    const [product, setProduct] = useState<ProductFormData | null>(null);
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(`/api/admin/products/${id}`)
            .then((r) => r.json())
            .then((data) => {
                setProduct({
                    title: data.title,
                    category: data.category,
                    mrp: data.mrp?.toString() ?? "",
                    description: data.description ?? "",
                    isFeatured: data.isFeatured,
                    suitableFor: data.suitableFor,
                    technology: data.technology,
                    shape: data.shape,
                    images: data.images,
                });
                setFetching(false);
            })
            .catch(() => { setError("Failed to load product"); setFetching(false); });
    }, [id]);

    const handleSubmit = async (data: ProductFormData) => {
        setLoading(true);
        setError("");
        try {
            const res = await fetch(`/api/admin/products/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) {
                const d = await res.json();
                throw new Error(d.error || "Failed to update product");
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
                    <h1 className="text-2xl font-bold text-gray-800">Edit Product</h1>
                    <p className="text-sm text-gray-500">Update product details</p>
                </div>
            </div>

            {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-700 text-sm mb-6">{error}</div>
            )}

            {fetching ? (
                <div className="flex justify-center py-16"><Loader2 size={32} className="animate-spin text-[#023784]" /></div>
            ) : product ? (
                <ProductForm initialData={product} onSubmit={handleSubmit} submitLabel="Save Changes" loading={loading} />
            ) : (
                <p className="text-center text-gray-500 py-16">Product not found.</p>
            )}
        </div>
    );
}
