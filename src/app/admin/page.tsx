"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Package, Star, Tag, PlusCircle } from "lucide-react";

interface Product {
    id: string;
    title: string;
    category: string;
    mrp: number | null;
    isFeatured: boolean;
}

export default function AdminDashboard() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/admin/products")
            .then((r) => r.json())
            .then((data) => { setProducts(data); setLoading(false); })
            .catch(() => setLoading(false));
    }, []);

    const stats = [
        { label: "Total Products", value: products.length, icon: Package, color: "bg-blue-500" },
        { label: "Featured", value: products.filter((p) => p.isFeatured).length, icon: Star, color: "bg-yellow-500" },
        { label: "Categories", value: [...new Set(products.map((p) => p.category))].length, icon: Tag, color: "bg-green-500" },
    ];

    return (
        <div className="p-6 lg:p-8">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                <p className="text-gray-500 text-sm mt-1">Welcome back to Insono Hearing Admin</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {stats.map(({ label, value, icon: Icon, color }) => (
                    <div key={label} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center shadow-md`}>
                            <Icon size={22} className="text-white" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">{label}</p>
                            <p className="text-2xl font-bold text-gray-800">{loading ? "—" : value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick actions */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
                <h2 className="font-semibold text-gray-700 mb-4">Quick Actions</h2>
                <div className="flex flex-wrap gap-3">
                    <Link
                        href="/admin/products/new"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#023784] text-white text-sm font-medium hover:bg-[#012d66] transition shadow-md"
                    >
                        <PlusCircle size={16} /> Add New Product
                    </Link>
                    <Link
                        href="/admin/products"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition"
                    >
                        <Package size={16} /> View All Products
                    </Link>
                </div>
            </div>

            {/* Recent */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="font-semibold text-gray-700 mb-4">Recent Products</h2>
                {loading ? (
                    <div className="space-y-3">
                        {[...Array(3)].map((_, i) => <div key={i} className="h-10 bg-gray-100 rounded-lg animate-pulse" />)}
                    </div>
                ) : products.length === 0 ? (
                    <p className="text-gray-400 text-sm text-center py-6">No products yet. <Link href="/admin/products/new" className="text-[#023784] underline">Add your first one →</Link></p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-100 text-left text-gray-500">
                                    <th className="pb-3 font-medium">Product</th>
                                    <th className="pb-3 font-medium">Category</th>
                                    <th className="pb-3 font-medium">MRP</th>
                                    <th className="pb-3 font-medium">Featured</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.slice(0, 5).map((p) => (
                                    <tr key={p.id} className="border-b border-gray-50 hover:bg-gray-50 transition">
                                        <td className="py-3 font-medium text-gray-800">{p.title}</td>
                                        <td className="py-3"><span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium capitalize">{p.category}</span></td>
                                        <td className="py-3 text-gray-600">{p.mrp ? `₹${p.mrp.toLocaleString()}` : "—"}</td>
                                        <td className="py-3">{p.isFeatured ? <span className="text-yellow-500 text-xs font-bold flex items-center gap-1"><Star size={12} fill="currentColor" /> Featured</span> : <span className="text-gray-400 text-xs">—</span>}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
