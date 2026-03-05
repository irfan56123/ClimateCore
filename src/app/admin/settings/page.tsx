"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, Loader2 } from "lucide-react";

type Group = "technology" | "shape" | "suitableFor";
interface Setting { id: string; value: string; }
type SettingsMap = Record<Group, Setting[]>;

const GROUP_LABELS: Record<Group, string> = {
    technology: "Technology Options",
    shape: "Shape / Style Options",
    suitableFor: "Suitable For Options",
};

const GROUPS: Group[] = ["technology", "shape", "suitableFor"];

export default function AdminSettingsPage() {
    const [settings, setSettings] = useState<SettingsMap>({ technology: [], shape: [], suitableFor: [] });
    const [loading, setLoading] = useState(true);
    const [inputs, setInputs] = useState<Record<Group, string>>({ technology: "", shape: "", suitableFor: "" });
    const [adding, setAdding] = useState<Group | null>(null);
    const [deleting, setDeleting] = useState<string | null>(null);
    const [errors, setErrors] = useState<Partial<Record<Group, string>>>({});

    const fetchSettings = async () => {
        try {
            const res = await fetch("/api/admin/settings");
            const data = await res.json();
            setSettings({
                technology: data.technology ?? [],
                shape: data.shape ?? [],
                suitableFor: data.suitableFor ?? [],
            });
        } catch {
            console.error("Failed to load settings");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchSettings(); }, []);

    const handleAdd = async (group: Group) => {
        const value = inputs[group].trim();
        if (!value) return;
        setAdding(group);
        setErrors((prev) => ({ ...prev, [group]: "" }));

        try {
            const res = await fetch("/api/admin/settings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ group, value }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to add");
            setSettings((prev) => ({
                ...prev,
                [group]: [...prev[group], { id: data.id, value: data.value }],
            }));
            setInputs((prev) => ({ ...prev, [group]: "" }));
        } catch (err: unknown) {
            setErrors((prev) => ({ ...prev, [group]: (err as Error).message }));
        } finally {
            setAdding(null);
        }
    };

    const handleDelete = async (group: Group, id: string) => {
        setDeleting(id);
        try {
            await fetch(`/api/admin/settings/${id}`, { method: "DELETE" });
            setSettings((prev) => ({
                ...prev,
                [group]: prev[group].filter((s) => s.id !== id),
            }));
        } catch {
            alert("Failed to delete setting");
        } finally {
            setDeleting(null);
        }
    };

    return (
        <div className="p-6 lg:p-8">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
                <p className="text-sm text-gray-500 mt-1">Manage dropdown options for product attributes</p>
            </div>

            {loading ? (
                <div className="flex justify-center py-16"><Loader2 size={32} className="animate-spin text-[#023784]" /></div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {GROUPS.map((group) => (
                        <div key={group} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                            <div className="px-5 py-4 border-b border-gray-100 bg-gray-50">
                                <h2 className="font-semibold text-gray-800 text-sm">{GROUP_LABELS[group]}</h2>
                                <p className="text-xs text-gray-500 mt-0.5">{settings[group].length} options</p>
                            </div>

                            <div className="p-4">
                                {/* Add input */}
                                <div className="flex gap-2 mb-4">
                                    <input
                                        type="text"
                                        value={inputs[group]}
                                        onChange={(e) => setInputs((prev) => ({ ...prev, [group]: e.target.value }))}
                                        onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleAdd(group); } }}
                                        placeholder={`Add new ${group === "suitableFor" ? "hearing loss level" : group} ...`}
                                        className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#023784]/30 focus:border-[#023784] transition"
                                    />
                                    <button
                                        onClick={() => handleAdd(group)}
                                        disabled={adding === group || !inputs[group].trim()}
                                        className="p-2 rounded-lg bg-[#023784] text-white hover:bg-[#012d66] transition disabled:opacity-50"
                                    >
                                        {adding === group ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}
                                    </button>
                                </div>

                                {errors[group] && (
                                    <p className="text-red-500 text-xs mb-3">{errors[group]}</p>
                                )}

                                {/* Items */}
                                <div className="space-y-1.5 max-h-80 overflow-y-auto">
                                    {settings[group].length === 0 ? (
                                        <p className="text-sm text-gray-400 text-center py-4">No options yet</p>
                                    ) : (
                                        settings[group].map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex items-center justify-between px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition group"
                                            >
                                                <span className="text-sm text-gray-700">{item.value}</span>
                                                <button
                                                    onClick={() => handleDelete(group, item.id)}
                                                    disabled={deleting === item.id}
                                                    className="text-gray-400 hover:text-red-500 transition opacity-0 group-hover:opacity-100"
                                                >
                                                    {deleting === item.id ? <Loader2 size={14} className="animate-spin" /> : <Trash2 size={14} />}
                                                </button>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
