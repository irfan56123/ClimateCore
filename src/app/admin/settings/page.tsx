"use client";

import { useEffect, useState } from "react";
import { Save, Globe, Info, CheckCircle2, AlertCircle } from "lucide-react";
import { AdminAuthGuard } from "@/components/admin/AdminSidebar";

export default function SettingsPage() {
    const [webhookUrl, setWebhookUrl] = useState("");
    const [headScripts, setHeadScripts] = useState("");
    const [bodyScripts, setBodyScripts] = useState("");
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });

    useEffect(() => {
        Promise.all([
            fetch("/api/admin/settings/webhook").then(res => res.json()),
            fetch("/api/admin/settings/scripts").then(res => res.json())
        ])
            .then(([webhookData, scriptsData]) => {
                setWebhookUrl(webhookData.url || "");
                setHeadScripts(scriptsData.headScripts || "");
                setBodyScripts(scriptsData.bodyScripts || "");
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setMessage({ type: "", text: "" });

        try {
            const webhookRes = await fetch("/api/admin/settings/webhook", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url: webhookUrl }),
            });

            const scriptsRes = await fetch("/api/admin/settings/scripts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ headScripts, bodyScripts }),
            });

            if (webhookRes.ok && scriptsRes.ok) {
                setMessage({ type: "success", text: "Settings saved successfully!" });
            } else {
                let errorMsg = "Failed to save settings";
                if (!webhookRes.ok) errorMsg = (await webhookRes.json()).error || errorMsg;
                if (!scriptsRes.ok) errorMsg = (await scriptsRes.json()).error || errorMsg;
                throw new Error(errorMsg);
            }
        } catch (error: any) {
            setMessage({ type: "error", text: error.message });
        } finally {
            setSaving(false);
        }
    };

    return (
        <AdminAuthGuard>
            <div className="p-6 lg:p-10 bg-gray-50 min-h-screen">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 leading-tight">System Settings</h1>
                        <p className="text-gray-500 mt-1">Configure integrations and global system parameters.</p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-8 border-b border-gray-50 bg-gray-50/30">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-[#023784]/10 text-[#023784] rounded-2xl flex items-center justify-center">
                                    <Globe size={24} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">Webhook Integration</h2>
                                    <p className="text-sm text-gray-500">Automatically notify external systems when a new lead arrives.</p>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSave} className="p-8 space-y-6">
                            {message.text && (
                                <div className={`p-4 rounded-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300 ${message.type === "success" ? "bg-green-50 text-green-700 border border-green-100" : "bg-red-50 text-red-700 border border-red-100"
                                    }`}>
                                    {message.type === "success" ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                                    <p className="text-sm font-semibold">{message.text}</p>
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider text-[10px]">
                                    Webhook Destination URL
                                </label>
                                <div className="relative group">
                                    <input
                                        type="url"
                                        placeholder="https://your-api-endpoint.com/webhook"
                                        value={webhookUrl}
                                        onChange={(e) => setWebhookUrl(e.target.value)}
                                        className="w-full px-5 py-4 bg-gray-50 border border-transparent focus:border-[#023784] focus:bg-white rounded-2xl outline-none transition-all text-sm group-hover:bg-gray-100/50"

                                    />
                                </div>
                                <div className="mt-4 p-4 bg-blue-50/50 rounded-2xl flex gap-3">
                                    <Info className="text-blue-500 shrink-0" size={18} />
                                    <p className="text-[13px] text-blue-800 leading-relaxed">
                                        When a new lead is submitted, we will send a <strong>POST</strong> request to this URL with a JSON payload containing lead details, marketing UTM data, and timestamps.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Custom Scripts</h3>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider text-[10px]">
                                            Head Scripts ({"<head>"})
                                        </label>
                                        <textarea
                                            placeholder="Paste GTM, Google Analytics, or other head scripts here..."
                                            value={headScripts}
                                            onChange={(e) => setHeadScripts(e.target.value)}
                                            rows={5}
                                            className="w-full px-5 py-4 bg-gray-50 border border-transparent focus:border-[#023784] focus:bg-white rounded-2xl outline-none transition-all text-sm font-mono group-hover:bg-gray-100/50 resize-y"
                                        />
                                        <p className="text-xs text-gray-500 mt-2">These scripts will be injected precisely inside the `&lt;head&gt;` tag on every page.</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider text-[10px]">
                                            Body Scripts ({"<body>"})
                                        </label>
                                        <textarea
                                            placeholder="Paste CallRail, fallback GTM, or other body scripts here..."
                                            value={bodyScripts}
                                            onChange={(e) => setBodyScripts(e.target.value)}
                                            rows={5}
                                            className="w-full px-5 py-4 bg-gray-50 border border-transparent focus:border-[#023784] focus:bg-white rounded-2xl outline-none transition-all text-sm font-mono group-hover:bg-gray-100/50 resize-y"
                                        />
                                        <p className="text-xs text-gray-500 mt-2">These scripts will be injected immediately after the opening `&lt;body&gt;` tag on every page.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                                <p className="text-xs text-gray-400 italic">
                                    Status: {loading ? "Loading configuration..." : webhookUrl ? "Configured" : "Not Configured"}
                                </p>
                                <button
                                    type="submit"
                                    disabled={saving || loading}
                                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#023784] text-white rounded-2xl text-sm font-bold shadow-lg shadow-blue-100 hover:bg-[#012d66] disabled:opacity-50 disabled:hover:bg-[#023784] transition transform active:scale-95"
                                >
                                    {saving ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <Save size={18} />
                                    )}
                                    {saving ? "Saving Changes..." : "Save Settings"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminAuthGuard>
    );
}
