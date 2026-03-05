"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2, Mail } from "lucide-react";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/auth/forgot-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (!res.ok) throw new Error("Failed to send");
            setSent(true);
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0d2350] to-[#023784] flex items-center justify-center p-4">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
            <div className="relative w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">
                    <Link href="/admin/login" className="inline-flex items-center gap-1.5 text-blue-300 hover:text-white text-sm mb-6 transition">
                        <ArrowLeft size={16} /> Back to login
                    </Link>

                    {!sent ? (
                        <>
                            <div className="mb-6">
                                <h1 className="text-2xl font-bold text-white">Forgot Password</h1>
                                <p className="text-blue-200 text-sm mt-1">Enter your email and we&apos;ll send a reset link.</p>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-blue-100 mb-1.5">Email Address</label>
                                    <div className="relative">
                                        <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-300" />
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="admin@insonohearing.com"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                                        />
                                    </div>
                                </div>
                                {error && <div className="bg-red-500/20 border border-red-400/30 rounded-xl px-4 py-3 text-red-200 text-sm">{error}</div>}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-[#023784] font-bold hover:bg-blue-50 transition-all disabled:opacity-70 shadow-lg"
                                >
                                    {loading ? <Loader2 size={18} className="animate-spin" /> : null}
                                    {loading ? "Sending..." : "Send Reset Link"}
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="text-center py-6">
                            <div className="w-16 h-16 rounded-full bg-green-400/20 flex items-center justify-center mx-auto mb-4">
                                <Mail size={32} className="text-green-300" />
                            </div>
                            <h2 className="text-xl font-bold text-white mb-2">Check Your Email</h2>
                            <p className="text-blue-200 text-sm">If an account exists for <strong className="text-white">{email}</strong>, you&apos;ll receive a reset link shortly.</p>
                            <Link href="/admin/login" className="inline-block mt-6 px-6 py-2.5 rounded-xl bg-white text-[#023784] font-semibold text-sm hover:bg-blue-50 transition shadow-lg">
                                Back to Login
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
