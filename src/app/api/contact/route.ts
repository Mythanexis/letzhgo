import { NextRequest, NextResponse } from "next/server";
import { SITE } from "@/lib/constants";

const EXPECTED_ACTION = "contact_form";
const MIN_SCORE = 0.5;

type SiteverifyResponse = {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
};

/**
 * Verifies a classic reCAPTCHA v3 token via the siteverify endpoint.
 * Requires: RECAPTCHA_SECRET_KEY.
 * Docs: https://developers.google.com/recaptcha/docs/verify
 */
async function verifyRecaptchaV3(
  token: string,
  secretKey: string
): Promise<{ ok: true; score: number } | { ok: false; reason: string }> {
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
  });

  const data = (await res.json()) as SiteverifyResponse;

  if (!data.success) {
    console.warn("[reCAPTCHA v3] Verification failed:", data["error-codes"]);
    return { ok: false, reason: `invalid:${(data["error-codes"] ?? []).join(",")}` };
  }

  if (data.action !== EXPECTED_ACTION) {
    console.warn("[reCAPTCHA v3] Action mismatch:", data.action);
    return { ok: false, reason: "action_mismatch" };
  }

  const score = data.score ?? 0;
  if (score < MIN_SCORE) {
    console.warn("[reCAPTCHA v3] Low score:", score);
    return { ok: false, reason: `low_score:${score}` };
  }

  return { ok: true, score };
}

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

    // reCAPTCHA v3 verification (only enforced if secret is configured)
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (secretKey) {
      if (!recaptchaToken) {
        return NextResponse.json(
          { error: "reCAPTCHA-Verifizierung fehlt." },
          { status: 400 }
        );
      }
      const result = await verifyRecaptchaV3(recaptchaToken, secretKey);
      if (!result.ok) {
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
          from: "Let'ZHgo Website <noreply@send.letzhgo.ch>",
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
