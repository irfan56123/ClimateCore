import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export const metadata: Metadata = {
    title: "Admin | ClimateCore Air Hearing",
    robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <div className="min-h-screen bg-gray-50 flex">
                <AdminSidebar />
                <main className="flex-1 overflow-auto lg:ml-0">
                    {children}
                </main>
            </div>
        </SessionProvider>
    );
}
