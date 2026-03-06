"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
    ChevronLeft,
    ChevronRight,
    Calendar,
    User,
    Phone,
    Mail,
    Tag,
    MapPin,
    Maximize2,
    Globe,
    MousePointer2,
    BarChart3,
    MessageSquare,
    Clock
} from "lucide-react";
import { AdminAuthGuard } from "@/components/admin/AdminSidebar";

interface LeadNote {
    id: string;
    content: string;
    createdAt: string;
}

interface Lead {
    id: string;
    name: string;
    email: string;
    phone: string;
    service: string | null;
    message: string | null;
    propertyType: string | null;
    propertySize: string | null;
    utmSource: string | null;
    utmMedium: string | null;
    utmCampaign: string | null;
    utmTerm: string | null;
    utmContent: string | null;
    gclid: string | null;
    pageUrl: string | null;
    referrer: string | null;
    status: string;
    notes: LeadNote[];
    createdAt: string;
}

const STATUS_OPTIONS = [
    { value: "PENDING", label: "Pending", color: "bg-gray-100 text-gray-700" },
    { value: "JUNK", label: "Junk", color: "bg-red-100 text-red-700" },
    { value: "QUALIFIED", label: "Qualified", color: "bg-blue-100 text-blue-700" },
    { value: "UNREACHABLE", label: "Unreachable", color: "bg-orange-100 text-orange-700" },
    { value: "UNQUALIFIED", label: "Unqualified", color: "bg-gray-200 text-gray-800" },
    { value: "MEETING_BOOKED", label: "Meeting Booked", color: "bg-green-100 text-green-700" },
];

export default function LeadDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const [lead, setLead] = useState<Lead | null>(null);
    const [loading, setLoading] = useState(true);
    const [noteContent, setNoteContent] = useState("");
    const [isSubmittingNote, setIsSubmittingNote] = useState(false);
    const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (id) {
            fetchLead();
        }
    }, [id]);

    const fetchLead = () => {
        fetch(`/api/admin/leads/${id}`)
            .then((r) => r.json())
            .then((data) => {
                console.log("Lead Detail Data:", data);
                setLead(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    };

    const handleUpdateStatus = async (newStatus: string) => {
        setIsUpdatingStatus(true);
        setErrorMessage("");
        try {
            const res = await fetch(`/api/admin/leads/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: newStatus }),
            });
            if (res.ok) {
                const updated = await res.json();
                setLead(prev => prev ? { ...prev, status: updated.status } : null);
            } else {
                const errData = await res.json();
                setErrorMessage(`Status update failed: ${errData.error || "Unknown error"}`);
            }
        } catch (error) {
            console.error("Status update error:", error);
            setErrorMessage("Network error updating status.");
        } finally {
            setIsUpdatingStatus(false);
        }
    };

    const handleAddNote = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!noteContent.trim() || isSubmittingNote) return;

        setIsSubmittingNote(true);
        setErrorMessage("");
        try {
            const res = await fetch(`/api/admin/leads/${id}/notes`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ content: noteContent }),
            });
            if (res.ok) {
                const newNote = await res.json();
                setLead(prev => prev ? {
                    ...prev,
                    notes: [newNote, ...(prev.notes || [])]
                } : null);
                setNoteContent("");
            } else {
                const errData = await res.json();
                setErrorMessage(`Note failed: ${errData.error || "Unknown error"}`);
            }
        } catch (error) {
            console.error("Note creation error:", error);
            setErrorMessage("Network error adding note.");
        } finally {
            setIsSubmittingNote(false);
        }
    };

    if (loading) {
        return (
            <AdminAuthGuard>
                <div className="p-6 lg:p-10 flex items-center justify-center min-h-[60vh]">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#023784] border-t-transparent"></div>
                </div>
            </AdminAuthGuard>
        );
    }

    if (!lead || (lead as any).error) {
        return (
            <AdminAuthGuard>
                <div className="p-6 lg:p-10 text-center max-w-4xl mx-auto">
                    <div className="bg-red-50 border border-red-100 p-8 rounded-3xl mb-8">
                        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Tag size={32} />
                        </div>
                        <h1 className="text-2xl font-black text-gray-900 mb-2">Lead Access Error</h1>
                        <p className="text-gray-600 mb-6">
                            {(lead as any)?.error || "We couldn't find the lead you're looking for."}
                        </p>

                        {lead && (
                            <div className="bg-gray-900 p-6 rounded-2xl text-left font-mono text-xs text-gray-400 overflow-x-auto mb-6">
                                <p className="text-white font-bold mb-2 uppercase tracking-widest text-[10px]">Technical Debug Info</p>
                                <pre>{JSON.stringify(lead, null, 2)}</pre>
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                onClick={() => router.back()}
                                className="px-8 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition shadow-sm"
                            >
                                Go Back
                            </button>
                            <Link
                                href="/admin/leads"
                                className="px-8 py-3 bg-[#023784] text-white rounded-xl font-bold hover:bg-[#012d66] transition shadow-lg shadow-blue-100"
                            >
                                All Leads
                            </Link>
                        </div>
                    </div>
                </div>
            </AdminAuthGuard>
        );
    }

    const currentStatus = STATUS_OPTIONS.find(s => s.value === lead.status) || STATUS_OPTIONS[0];

    return (
        <AdminAuthGuard>
            <div className="p-6 lg:p-10 bg-gray-50 min-h-screen">
                {/* Global Error Banner */}
                {errorMessage && (
                    <div className="mb-6 p-4 bg-red-100 border border-red-200 text-red-700 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
                        <Tag size={18} />
                        <p className="text-sm font-bold">{errorMessage}</p>
                        <button onClick={() => setErrorMessage("")} className="ml-auto hover:opacity-50 text-xl font-light">×</button>
                    </div>
                )}

                {/* Top Nav */}
                <div className="mb-8">
                    <button
                        onClick={() => router.back()}
                        className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#023784] transition group"
                    >
                        <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Leads
                    </button>
                    <div className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="relative inline-block group">
                                    <div className={`flex items-center gap-2 px-4 py-1.5 ${currentStatus.color} text-[10px] font-black uppercase rounded-full tracking-wider shadow-sm border border-black/5 hover:scale-[1.02] transition-transform`}>
                                        <select
                                            value={lead.status}
                                            onChange={(e) => handleUpdateStatus(e.target.value)}
                                            disabled={isUpdatingStatus}
                                            className="bg-transparent border-none appearance-none outline-none cursor-pointer pr-5 relative z-10"
                                        >
                                            {STATUS_OPTIONS.map(opt => (
                                                <option key={opt.value} value={opt.value} className="bg-white text-gray-900 normal-case">{opt.label}</option>
                                            ))}
                                        </select>
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                            <ChevronRight size={10} className="rotate-90" />
                                        </div>
                                    </div>
                                </div>
                                <span className="text-gray-400 text-xs flex items-center gap-1"><Clock size={12} /> Received on {new Date(lead.createdAt).toLocaleString()}</span>
                            </div>
                            <h1 className="text-4xl font-black text-gray-900 leading-tight">{lead.name || "Unknown Name"}</h1>
                        </div>
                        <div className="flex items-center gap-3">
                            {lead.phone && (
                                <a
                                    href={`tel:${lead.phone}`}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#023784] text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-100 hover:bg-[#012d66] transition"
                                >
                                    <Phone size={18} /> Call Customer
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Col: Contact & Service */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Summary Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                                        <Tag size={20} />
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Service Requested</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{lead.service || "General Heating/Cooling"}</h3>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#023784] flex items-center justify-center">
                                        <Maximize2 size={20} />
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Property Size</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{lead.propertySize || "Not Specified"}</h3>
                            </div>
                        </div>

                        {/* Customer Message */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-1.5 h-6 bg-[#023784] rounded-full"></div>
                                <h2 className="text-xl font-bold text-gray-900">Patient Inquiry / Message</h2>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                                <MessageSquare className="absolute right-4 top-4 text-gray-200" size={40} />
                                <p className="text-gray-700 leading-relaxed italic relative z-10">
                                    "{lead.message || "No specific message provided. Customer is waiting for an HVAC estimate."}"
                                </p>
                            </div>
                        </div>

                        {/* Disposal Section (Internal Notes) */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-1.5 h-6 bg-orange-500 rounded-full"></div>
                                <h2 className="text-xl font-bold text-gray-900">Lead Disposition & Notes</h2>
                            </div>

                            <form onSubmit={handleAddNote} className="mb-8">
                                <div className="space-y-3">
                                    <textarea
                                        value={noteContent}
                                        onChange={(e) => setNoteContent(e.target.value)}
                                        placeholder="Add an internal note about this lead..."
                                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#023784] outline-none transition resize-none h-32"
                                    />
                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            disabled={!noteContent.trim() || isSubmittingNote}
                                            className="px-6 py-2 bg-[#023784] text-white rounded-lg text-xs font-bold hover:bg-[#012d66] transition disabled:opacity-50"
                                        >
                                            {isSubmittingNote ? "Saving..." : "Save Note"}
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <div className="space-y-4">
                                {lead.notes && lead.notes.length > 0 ? (
                                    lead.notes.map((note) => (
                                        <div key={note.id} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                            <p className="text-gray-700 text-sm whitespace-pre-wrap mb-2">{note.content}</p>
                                            <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400">
                                                <Calendar size={12} />
                                                <span>{new Date(note.createdAt).toLocaleString()}</span>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-6 text-gray-400 italic text-sm">
                                        No internal notes yet.
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Full Data Breakdown */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-1.5 h-6 bg-green-500 rounded-full"></div>
                                <h2 className="text-xl font-bold text-gray-900">Lead Metadata & UTMs</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">UTM Source</p>
                                    <p className="font-bold text-gray-900">{lead.utmSource || "—"}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">UTM Medium</p>
                                    <p className="font-bold text-gray-900">{lead.utmMedium || "—"}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">UTM Campaign</p>
                                    <p className="font-bold text-gray-900">{lead.utmCampaign || "—"}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">GCLID (Google Click ID)</p>
                                    <p className="font-bold text-gray-900 break-all">{lead.gclid || "—"}</p>
                                </div>
                                <div className="md:col-span-2 space-y-1">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Entry Page URL</p>
                                    <p className="text-sm text-blue-600 font-medium break-all">{lead.pageUrl || "—"}</p>
                                </div>
                                <div className="md:col-span-2 space-y-1">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Referrer URL</p>
                                    <p className="text-sm text-gray-600 font-medium break-all">{lead.referrer || "Direct / Unknown"}</p>
                                </div>
                            </div>
                        </div>

                        {/* DEBUG: Raw JSON */}
                        <div className="bg-gray-900 p-8 rounded-2xl shadow-sm text-gray-400 font-mono text-xs">
                            <h3 className="text-white mb-4 flex items-center gap-2">
                                <Tag size={14} /> Diagnostic Data (Raw Response)
                            </h3>
                            <pre className="overflow-x-auto">
                                {JSON.stringify(lead, null, 2)}
                            </pre>
                        </div>
                    </div>

                    {/* Right Col: Quick Info & Actions */}
                    <div className="space-y-8">
                        {/* Contact Info Card */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <User size={18} className="text-[#023784]" /> Contact Details
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
                                        <Mail size={20} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Address</p>
                                        <a href={`mailto:${lead.email}`} className="font-bold text-gray-900 hover:text-[#023784] transition block truncate">{lead.email || "No email captured"}</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Phone Number</p>
                                        <a href={`tel:${lead.phone}`} className="font-bold text-gray-900 hover:text-[#023784] transition">{lead.phone || "No phone captured"}</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Property Type</p>
                                        <p className="font-bold text-gray-900">{lead.propertyType || "Residential"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Growth Info */}
                        <div className="bg-gradient-to-br from-[#023784] to-[#011d46] p-8 rounded-3xl text-white shadow-xl shadow-blue-100">
                            <BarChart3 className="mb-4 opacity-50" size={32} />
                            <h3 className="text-xl font-bold mb-2">Marketing Insight</h3>
                            <p className="text-sm text-blue-100 mb-6 leading-relaxed">
                                This lead was acquired via <strong>{lead.utmSource || "Direct Discovery"}</strong>.
                                High probability of conversion based on source history.
                            </p>
                            <Link
                                href="/admin/leads"
                                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-xs font-bold transition-all border border-white/10"
                            >
                                Compare sources <ChevronRight size={14} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AdminAuthGuard>
    );
}
