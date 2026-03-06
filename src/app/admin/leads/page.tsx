"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
    Search,
    Filter,
    Download,
    ExternalLink,
    Calendar,
    User,
    Phone,
    Mail,
    Tag
} from "lucide-react";
import { AdminAuthGuard } from "@/components/admin/AdminSidebar";

interface Lead {
    id: string;
    name: string;
    email: string;
    phone: string;
    service: string | null;
    status: string;
    createdAt: string;
    utmSource: string | null;
}

const STATUS_OPTIONS = [
    { value: "PENDING", label: "Pending", color: "bg-gray-100 text-gray-700" },
    { value: "JUNK", label: "Junk", color: "bg-red-100 text-red-700" },
    { value: "QUALIFIED", label: "Qualified", color: "bg-blue-100 text-blue-700" },
    { value: "UNREACHABLE", label: "Unreachable", color: "bg-orange-100 text-orange-700" },
    { value: "UNQUALIFIED", label: "Unqualified", color: "bg-gray-200 text-gray-800" },
    { value: "MEETING_BOOKED", label: "Meeting Booked", color: "bg-green-100 text-green-700" },
];

export default function LeadsPage() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("/api/admin/leads")
            .then((r) => r.json())
            .then((data) => {
                setLeads(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const filteredLeads = leads.filter(lead =>
        lead.name.toLowerCase().includes(search.toLowerCase()) ||
        lead.email.toLowerCase().includes(search.toLowerCase()) ||
        lead.phone.includes(search) ||
        (lead.service && lead.service.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <AdminAuthGuard>
            <div className="p-6 lg:p-10 bg-gray-50 min-h-screen">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Leads Management</h1>
                        <p className="text-gray-500 mt-1">Manage and track your customer inquiries and estimates.</p>
                    </div>
                    <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition shadow-sm">
                        <Download size={18} /> Export CSV
                    </button>
                </div>

                {/* Filters & Search */}
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search by name, email, phone or service..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-transparent focus:border-[#023784] focus:bg-white rounded-xl outline-none transition-all text-sm"
                        />
                    </div>
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <button className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-50 border border-transparent rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition">
                            <Filter size={18} /> Filters
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50/50 border-b border-gray-100 text-gray-500 text-xs uppercase tracking-wider font-semibold">
                                    <th className="px-6 py-4">Customer</th>
                                    <th className="px-6 py-4">Inquiry details</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Marketing</th>
                                    <th className="px-6 py-4">Submitted</th>
                                    <th className="px-6 py-4 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {loading ? (
                                    [...Array(5)].map((_, i) => (
                                        <tr key={i} className="animate-pulse">
                                            <td colSpan={5} className="px-6 py-4"><div className="h-12 bg-gray-50 rounded-xl w-full"></div></td>
                                        </tr>
                                    ))
                                ) : filteredLeads.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-10 text-center text-gray-400 italic">No leads found matching your search.</td>
                                    </tr>
                                ) : (
                                    filteredLeads.map((lead) => (
                                        <tr key={lead.id} className="hover:bg-gray-50/50 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-blue-50 text-[#023784] flex items-center justify-center font-bold">
                                                        {lead.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-gray-900 leading-tight">{lead.name}</div>
                                                        <div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                                                            <Phone size={10} /> {lead.phone}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col gap-1">
                                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase w-fit tracking-tight">
                                                        <Tag size={10} /> {lead.service || "General Inquiry"}
                                                    </span>
                                                    <div className="text-xs text-gray-500 truncate max-w-[200px] flex items-center gap-1">
                                                        <Mail size={10} /> {lead.email}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                {(() => {
                                                    const status = STATUS_OPTIONS.find(s => s.value === lead.status) || STATUS_OPTIONS[0];
                                                    return (
                                                        <span className={`px-2 py-1 rounded-full text-[9px] font-black uppercase tracking-wider ${status.color}`}>
                                                            {status.label}
                                                        </span>
                                                    );
                                                })()}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${lead.utmSource ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                                    {lead.utmSource || "Direct"}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600">
                                                <div className="flex items-center gap-1.5 whitespace-nowrap">
                                                    <Calendar size={14} className="text-gray-400" />
                                                    {new Date(lead.createdAt).toLocaleDateString()}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <Link
                                                    href={`/admin/leads/${lead.id}`}
                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 text-white text-xs font-bold hover:bg-[#023784] transition shadow-sm opacity-0 group-hover:opacity-100"
                                                >
                                                    View Detail <ExternalLink size={12} />
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminAuthGuard>
    );
}
