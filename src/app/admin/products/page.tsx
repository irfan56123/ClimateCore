"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Pencil, Trash2, Plus, Star, Search, Loader2, Package, ExternalLink } from "lucide-react";

interface Product {
    id: string;
    title: string;
    slug: string;
    category: string;
    mrp: number | null;
    isFeatured: boolean;
    images: string[];
}

export default function AdminProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [deleting, setDeleting] = useState<string | null>(null);

    const fetchProducts = async () => {
        try {
            const res = await fetch("/api/admin/products");
            const data = await res.json();
            setProducts(data);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchProducts(); }, []);

    const handleDelete = async (id: string, title: string) => {
        if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
        setDeleting(id);
        try {
            await fetch(`/api/admin/products/${id}`, { method: "DELETE" });
            setProducts((prev) => prev.filter((p) => p.id !== id));
        } catch {
            alert("Failed to delete product");
        } finally {
            setDeleting(null);
        }
    };

    const filtered = products.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Products</h1>
                    <p className="text-sm text-gray-500 mt-0.5">{products.length} hearing aids in catalog</p>
                </div>
                <Link
                    href="/admin/products/new"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#023784] text-white text-sm font-bold hover:bg-[#012d66] transition shadow-md"
                >
                    <Plus size={16} /> Add Product
                </Link>
            </div>

            {/* Search */}
            <div className="relative mb-6">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#023784]/30 focus:border-[#023784] transition"
                />
            </div>

            {/* Table */}
            {loading ? (
                <div className="flex justify-center py-16"><Loader2 size={32} className="animate-spin text-[#023784]" /></div>
            ) : filtered.length === 0 ? (
                <div className="text-center py-16 text-gray-400">
                    <Package size={48} className="mx-auto mb-4 opacity-30" />
                    <p className="font-medium">No products found</p>
                    <Link href="/admin/products/new" className="mt-3 inline-block text-[#023784] text-sm underline">Add your first product</Link>
                </div>
            ) : (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50 border-b border-gray-100">
                                <tr className="text-left text-gray-500 text-xs uppercase tracking-wider">
                                    <th className="px-5 py-3.5 font-medium">Product</th>
                                    <th className="px-5 py-3.5 font-medium">Category</th>
                                    <th className="px-5 py-3.5 font-medium">MRP</th>
                                    <th className="px-5 py-3.5 font-medium">Featured</th>
                                    <th className="px-5 py-3.5 font-medium text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {filtered.map((p) => (
                                    <tr key={p.id} className="hover:bg-gray-50 transition">
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden flex-shrink-0 relative">
                                                    {p.images[0] ? (
                                                        <Image src={p.images[0]} alt={p.title} fill className="object-cover" />
                                                    ) : (
                                                        <div className="flex items-center justify-center h-full text-gray-300">
                                                            <Package size={18} />
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-800 line-clamp-1">{p.title}</p>
                                                    <p className="text-xs text-gray-400 mt-0.5">{p.slug}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4">
                                            <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium capitalize">{p.category}</span>
                                        </td>
                                        <td className="px-5 py-4 text-gray-700 font-medium">
                                            {p.mrp ? `₹${p.mrp.toLocaleString()}` : <span className="text-gray-400">—</span>}
                                        </td>
                                        <td className="px-5 py-4">
                                            {p.isFeatured ? (
                                                <span className="inline-flex items-center gap-1 text-yellow-600 text-xs font-semibold">
                                                    <Star size={12} fill="currentColor" /> Yes
                                                </span>
                                            ) : (
                                                <span className="text-gray-400 text-xs">No</span>
                                            )}
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={`/product/${p.slug}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition"
                                                    title="View on site"
                                                >
                                                    <ExternalLink size={15} />
                                                </Link>
                                                <Link
                                                    href={`/admin/products/${p.id}/edit`}
                                                    className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                                                    title="Edit"
                                                >
                                                    <Pencil size={15} />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(p.id, p.title)}
                                                    disabled={deleting === p.id}
                                                    className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition disabled:opacity-50"
                                                    title="Delete"
                                                >
                                                    {deleting === p.id ? <Loader2 size={15} className="animate-spin" /> : <Trash2 size={15} />}
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
