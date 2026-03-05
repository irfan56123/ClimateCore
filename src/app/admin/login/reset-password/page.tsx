"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle, Eye, EyeOff, Loader2 } from "lucide-react";

function ResetForm() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const token = searchParams.get("token");

    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirm) { setError("Passwords do not match"); return; }
        if (password.length < 8) { setError("Password must be at least 8 characters"); return; }

        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/auth/reset-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token, newPassword: password }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Reset failed");
            setSuccess(true);
            setTimeout(() => router.push("/admin/login"), 2500);
        } catch (err: unknown) {
            setError((err as Error).message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    if (!token) {
        return (
            <div className="text-center">
                <p className="text-red-300 mb-4">Invalid or missing reset token.</p>
                <Link href="/admin/login/forgot-password" className="text-blue-300 hover:text-white transition text-sm">Request a new link →</Link>
            </div>
        );
    }

    return success ? (
        <div className="text-center py-4">
            <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Password Reset!</h2>
            <p className="text-blue-200 text-sm">Redirecting to login...</p>
        </div>
    ) : (
        <>
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-white">Set New Password</h1>
                <p className="text-blue-200 text-sm mt-1">Choose a strong password for your account.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-blue-100 mb-1.5">New Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Min. 8 characters"
                            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition pr-12"
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-300 hover:text-white">
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-blue-100 mb-1.5">Confirm Password</label>
                    <input
                        type="password"
                        required
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        placeholder="Repeat your password"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    />
                </div>
                {error && <div className="bg-red-500/20 border border-red-400/30 rounded-xl px-4 py-3 text-red-200 text-sm">{error}</div>}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-[#023784] font-bold hover:bg-blue-50 transition disabled:opacity-70 shadow-lg"
                >
                    {loading && <Loader2 size={18} className="animate-spin" />}
                    {loading ? "Resetting..." : "Reset Password"}
                </button>
            </form>
        </>
    );
}

export default function ResetPasswordPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0d2350] to-[#023784] flex items-center justify-center p-4">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
            <div className="relative w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">
                    <Link href="/admin/login" className="inline-flex items-center gap-1.5 text-blue-300 hover:text-white text-sm mb-6 transition">
                        <ArrowLeft size={16} /> Back to login
                    </Link>
                    <Suspense fallback={<p className="text-blue-200 text-sm">Loading...</p>}>
                        <ResetForm />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
