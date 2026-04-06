import { NextRequest, NextResponse } from "next/server";
import { SITE } from "@/lib/constants";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, recaptchaToken } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, E-Mail und Nachricht sind Pflichtfelder." },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (secretKey) {
      if (!recaptchaToken) {
        return NextResponse.json(
          { error: "reCAPTCHA-Verifizierung fehlt." },
          { status: 400 }
        );
      }
      const verifyRes = await fetch(
        `https://www.google.com/recaptcha/api/siteverify`,
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `secret=${secretKey}&response=${recaptchaToken}`,
        }
      );
      const verifyData = await verifyRes.json() as { success: boolean; score: number; action: string };
      console.log("[reCAPTCHA]", { success: verifyData.success, score: verifyData.score, action: verifyData.action });
      // Reject if score below 0.5 (likely bot)
      if (!verifyData.success || verifyData.score < 0.5) {
        return NextResponse.json(
          { error: "reCAPTCHA-Verifizierung fehlgeschlagen." },
          { status: 400 }
        );
      }
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Let'ZHgo Website <onboarding@resend.dev>",
          to: [SITE.email],
          subject: `Neue Kontaktanfrage von ${name}`,
          html: `
            <h2>Neue Kontaktanfrage</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-Mail:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone || "–"}</p>
            <p><strong>Nachricht:</strong></p>
            <p>${message}</p>
          `,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Resend error:", errorData);
        return NextResponse.json(
          { error: "E-Mail konnte nicht gesendet werden." },
          { status: 500 }
        );
      }
    } else {
      console.log("Contact form submission (no RESEND_API_KEY set):", {
        name,
        email,
        phone,
        message,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten." },
      { status: 500 }
    );
  }
}
