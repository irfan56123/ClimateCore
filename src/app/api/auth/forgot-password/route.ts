import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json();
        if (!email) return NextResponse.json({ error: "Email is required" }, { status: 400 });

        const user = await prisma.adminUser.findUnique({ where: { email } });
        // Always return success (security: don't reveal if user exists)
        if (!user) {
            return NextResponse.json({ message: "If that email exists, a reset link has been sent." });
        }

        const token = crypto.randomBytes(32).toString("hex");
        const expiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

        await prisma.adminUser.update({
            where: { email },
            data: { resetToken: token, resetTokenExpiry: expiry },
        });

        const resetUrl = `${process.env.NEXTAUTH_URL}/admin/login/reset-password?token=${token}`;

        await resend.emails.send({
            from: "Insono Hearing Admin <noreply@insonohearing.com>",
            to: email,
            subject: "Reset Your Admin Password",
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #023784;">Reset Your Password</h2>
          <p>You requested a password reset for your Insono Hearing admin account.</p>
          <p>Click the button below to set a new password. This link expires in 1 hour.</p>
          <a href="${resetUrl}" style="display:inline-block;margin:20px 0;padding:12px 24px;background:#023784;color:#fff;text-decoration:none;border-radius:6px;font-weight:bold;">
            Reset Password
          </a>
          <p style="color:#666;font-size:12px;">If you didn't request this, ignore this email.</p>
        </div>
      `,
        });

        return NextResponse.json({ message: "If that email exists, a reset link has been sent." });
    } catch (error) {
        console.error("Forgot password error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
