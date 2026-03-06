"use client";

import { useEffect, useState } from "react";
import {
    Activity,
    CheckCircle,
    XCircle,
    Clock,
    ExternalLink,
    RefreshCcw,
    Database,
    Code,
    ChevronDown,
    ChevronUp,
    Globe,
    AlertCircle
} from "lucide-react";
import { AdminAuthGuard } from "@/components/admin/AdminSidebar";

interface WebhookLog {
    id: string;
    leadId: string | null;
    url: string;
    status: number;
    payload: string;
    response: string | null;
    error: string | null;
    createdAt: string;
}

export default function LogsPage() {
    const [logs, setLogs] = useState<WebhookLog[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedLog, setExpandedLog] = useState<string | null>(null);

    const fetchLogs = () => {
        setLoading(true);
        fetch("/api/admin/logs")
            .then(res => res.json())
            .then(data => {
                setLogs(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    };

    useEffect(() => {
        fetchLogs();
    }, []);

    const toggleExpand = (id: string) => {
        setExpandedLog(expandedLog === id ? null : id);
    };

    return (
        <AdminAuthGuard>
            <div className="p-6 lg:p-10 bg-gray-50 min-h-screen">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 leading-tight tracking-tight flex items-center gap-3">
                            <Activity className="text-blue-600" size={32} />
                            Webhook Payload Logs
                        </h1>
                        <p className="text-gray-500 mt-1">Track notifications sent to your configured external systems.</p>
                    </div>
                    <button
                        onClick={fetchLogs}
                        disabled={loading}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-2xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition shadow-sm"
                    >
                        <RefreshCcw size={18} className={loading ? "animate-spin text-blue-500" : ""} />
                        Refresh Logs
                    </button>
                </div>

                <div className="space-y-4">
                    {loading && logs.length === 0 ? (
                        [...Array(3)].map((_, i) => (
                            <div key={i} className="h-24 bg-white rounded-3xl animate-pulse border border-gray-100" />
                        ))
                    ) : logs.length === 0 ? (
                        <div className="bg-white p-20 rounded-[40px] text-center border border-dashed border-gray-200">
                            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Activity className="text-gray-300" size={40} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2">No Logs Yet</h2>
                            <p className="text-gray-500 max-w-sm mx-auto">When new leads arrive, their notification results will appear here in real-time.</p>
                        </div>
                    ) : (
                        logs.map((log) => (
                            <div
                                key={log.id}
                                className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${expandedLog === log.id ? "ring-2 ring-blue-500/20 border-blue-100 shadow-xl" : "border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100"
                                    }`}
                            >
                                <div
                                    className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
                                    onClick={() => toggleExpand(log.id)}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${log.status >= 200 && log.status < 300
                                            ? "bg-green-50 text-green-600"
                                            : log.status === 0 ? "bg-gray-50 text-gray-400" : "bg-red-50 text-red-600"
                                            }`}>
                                            {log.status >= 200 && log.status < 300 ? <CheckCircle size={24} /> : log.status === 0 ? <Clock size={24} /> : <XCircle size={24} />}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${log.status >= 200 && log.status < 300
                                                    ? "bg-green-100 text-green-700"
                                                    : log.status === 0 ? "bg-gray-200 text-gray-700" : "bg-red-100 text-red-700"
                                                    }`}>
                                                    {log.status === 0 ? "NOT_SENT" : `HTTP ${log.status}`}
                                                </span>
                                                <span className="text-xs text-gray-400 font-medium">#{log.id.substring(0, 8)}</span>
                                            </div>
                                            <div className="font-bold text-gray-900 flex items-center gap-2">
                                                <Globe size={14} className="text-gray-400" />
                                                <span className="truncate max-w-[200px] md:max-w-md">{log.url}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-4 md:pt-0">
                                        <div className="flex flex-col items-end">
                                            <div className="text-xs text-gray-500 flex items-center gap-1 font-medium">
                                                <Clock size={12} /> {new Date(log.createdAt).toLocaleString()}
                                            </div>
                                            {log.leadId && (
                                                <div className="text-[10px] text-[#023784] font-bold mt-1 flex items-center gap-1">
                                                    <Database size={10} /> Lead: {log.leadId.substring(0, 10)}...
                                                </div>
                                            )}
                                        </div>
                                        <div className="text-gray-400 group">
                                            {expandedLog === log.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                        </div>
                                    </div>
                                </div>

                                {expandedLog === log.id && (
                                    <div className="p-8 border-t border-gray-50 bg-gray-50/50 space-y-6 animate-in slide-in-from-top-2 duration-300">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            {/* Payload */}
                                            <div className="space-y-3">
                                                <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                                    <Code size={14} /> Request Payload (Sent)
                                                </h3>
                                                <pre className="p-5 bg-gray-900 text-green-400 rounded-2xl text-[11px] overflow-x-auto font-mono scrollbar-thin scrollbar-thumb-gray-800 shadow-inner">
                                                    {JSON.stringify(JSON.parse(log.payload), null, 2)}
                                                </pre>
                                            </div>

                                            {/* Response / Error */}
                                            <div className="space-y-3">
                                                <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                                    {log.error ? <AlertCircle size={14} className="text-red-500" /> : <Activity size={14} className="text-green-500" />}
                                                    {log.error ? "Execution Error" : "Server Response"}
                                                </h3>
                                                {log.error ? (
                                                    <div className="p-5 bg-red-50 border border-red-100 rounded-2xl text-sm text-red-700 font-medium italic">
                                                        {log.error}
                                                    </div>
                                                ) : log.response ? (
                                                    <pre className="p-5 bg-[#0a1628] text-blue-300 rounded-2xl text-[11px] overflow-x-auto font-mono shadow-inner">
                                                        {log.response}
                                                    </pre>
                                                ) : (
                                                    <div className="p-5 bg-gray-50 border border-gray-100 rounded-2xl text-xs text-gray-400 italic">
                                                        No response received from the server.
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </AdminAuthGuard>
    );
}
