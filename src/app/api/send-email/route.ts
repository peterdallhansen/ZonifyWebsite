import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const to: string[] = body.to || [
      process.env.CONTACT_RECEIVER_EMAIL || "pdh@zonify.ai",
    ];
    const subject: string = body.subject || "(no subject)";
    const text: string = body.text || body.html || "";

    await sendEmail({ to, subject, text });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("/api/send-email error", err);
    return NextResponse.json(
      { ok: false, error: err?.message || "unknown" },
      { status: 500 }
    );
  }
}
