import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/lib/auth";

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Allow auth routes and login pages
    if (
        pathname.startsWith("/api/auth") ||
        pathname.startsWith("/admin/login")
    ) {
        return NextResponse.next();
    }

    // Protect /admin/* routes
    if (pathname.startsWith("/admin")) {
        const session = await auth();
        if (!session) {
            return NextResponse.redirect(new URL("/admin/login", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};
