"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
    LayoutDashboard,
    Package,
    Settings,
    LogOut,
    Menu,
    X,
    ChevronRight,
    FileText,
    Rss,
} from "lucide-react";

const navLinks = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
    { href: "/admin/products", label: "Products", icon: Package },
    { href: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminSidebar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isActive = (href: string, exact?: boolean) =>
        exact ? pathname === href : pathname.startsWith(href);

    return (
        <>
            {/* Mobile top bar */}
            <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 shadow-sm">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#023784] flex items-center justify-center text-white font-bold text-sm">
                        I
                    </div>
                    <span className="font-semibold text-gray-800">Insono Admin</span>
                </div>
                <button onClick={() => setOpen(!open)} className="p-2 rounded-md hover:bg-gray-100">
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#0a1628] text-white flex flex-col transform transition-transform duration-200 
          ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static lg:flex`}
            >
                {/* Logo */}
                <div className="p-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#023784] flex items-center justify-center font-bold text-lg shadow-lg">
                            I
                        </div>
                        <div>
                            <p className="font-bold text-white text-sm">Insono Hearing</p>
                            <p className="text-xs text-blue-300">Admin Panel</p>
                        </div>
                    </div>
                </div>

                {/* Nav */}
                <nav className="flex-1 p-4 space-y-1">
                    {navLinks.map(({ href, label, icon: Icon, exact }) => {
                        const active = isActive(href, exact);
                        return (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setOpen(false)}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group
                  ${active
                                        ? "bg-[#023784] text-white shadow-md"
                                        : "text-gray-400 hover:text-white hover:bg-white/10"
                                    }`}
                            >
                                <Icon size={18} className={active ? "text-white" : "text-gray-500 group-hover:text-gray-300"} />
                                {label}
                                {active && <ChevronRight size={14} className="ml-auto" />}
                            </Link>
                        );
                    })}
                </nav>

                {/* Quick Links */}
                <div className="p-4 border-t border-white/10 space-y-1">
                    <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">SEO & Feeds</p>
                    <Link
                        href="/sitemap.xml"
                        target="_blank"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                        <FileText size={18} className="text-gray-500" />
                        Sitemap.xml
                    </Link>
                    <Link
                        href="/feed.xml"
                        target="_blank"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                        <Rss size={18} className="text-gray-500" />
                        Merchant Feed
                    </Link>
                </div>

                {/* Logout */}
                <div className="p-4 border-t border-white/10">
                    <button
                        onClick={() => signOut({ callbackUrl: "/admin/login" })}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-400 hover:text-white hover:bg-red-600/20 transition-all"
                    >
                        <LogOut size={18} />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {open && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 lg:hidden"
                    onClick={() => setOpen(false)}
                />
            )}
        </>
    );
}

export function AdminAuthGuard({ children }: { children: React.ReactNode }) {
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/admin/login");
        }
    }, [status, router]);

    if (status === "loading") {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-10 w-10 border-4 border-[#023784] border-t-transparent" />
            </div>
        );
    }

    return <>{children}</>;
}
