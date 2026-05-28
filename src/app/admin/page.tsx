"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Star, Tag, FileText, ExternalLink } from "lucide-react";

export default function AdminDashboard() {
    const router = useRouter();
    const [leads, setLeads] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/admin/leads")
            .then((r) => r.json())
            .then((data) => {
                setLeads(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const stats = [
        { label: "Total Leads", value: leads.length, icon: FileText, color: "bg-[#023784]" },
        { label: "High Priority", value: leads.filter(l => l.utmSource).length, icon: Star, color: "bg-orange-500" }, // UTM leads are often higher priority
        { label: "Today", value: leads.filter(l => new Date(l.createdAt).toDateString() === new Date().toDateString()).length, icon: Tag, color: "bg-green-500" },
    ];

    return (
        <div className="p-6 lg:p-8">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                <p className="text-gray-500 text-sm mt-1">Welcome back to ClimateCore Air Lead Management</p>
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
                        href="/admin/leads"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#023784] text-white text-sm font-medium hover:bg-[#012d66] transition shadow-md"
                    >
                        <FileText size={16} /> View All Leads
                    </Link>
                    <Link
                        href="/"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition"
                    >
                        <ExternalLink size={16} /> Visit Website
                    </Link>
                </div>
            </div>

            {/* Recent Leads */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold text-gray-700">Recent Leads</h2>
                    <Link href="/admin/leads" className="text-xs text-[#023784] font-bold hover:underline">View All →</Link>
                </div>
                {loading ? (
                    <div className="space-y-3">
                        {[...Array(3)].map((_, i) => <div key={i} className="h-10 bg-gray-100 rounded-lg animate-pulse" />)}
                    </div>
                ) : leads.length === 0 ? (
                    <p className="text-gray-400 text-sm text-center py-6">No leads yet.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-100 text-left text-gray-500">
                                    <th className="pb-3 font-medium">Customer</th>
                                    <th className="pb-3 font-medium">Phone</th>
                                    <th className="pb-3 font-medium">Service</th>
                                    <th className="pb-3 font-medium">Source</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leads.slice(0, 5).map((l) => (
                                    <tr key={l.id} className="border-b border-gray-50 hover:bg-gray-50 transition cursor-pointer" onClick={() => router.push(`/admin/leads/${l.id}`)}>
                                        <td className="py-3 font-medium text-gray-800">{l.name}</td>
                                        <td className="py-3 text-gray-600 font-mono tracking-tight">{l.phone}</td>
                                        <td className="py-3">
                                            <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-tight">
                                                {l.service || "General Inquiry"}
                                            </span>
                                        </td>
                                        <td className="py-3">
                                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${l.utmSource ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                                {l.utmSource || "Direct"}
                                            </span>
                                        </td>
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
