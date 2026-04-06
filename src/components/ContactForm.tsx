"use client";

import { useState, useEffect, useCallback, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "@/lib/constants";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

function loadRecaptcha(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return;
    if (document.getElementById("recaptcha-script")) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.id = "recaptcha-script";
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.onload = () => resolve();
    document.head.appendChild(script);
  });
}

async function getRecaptchaToken(action: string): Promise<string> {
  await loadRecaptcha();
  return new Promise((resolve) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha.execute(SITE_KEY, { action }).then(resolve);
    });
  });
}

const AUTO_CLOSE_MS = 5000;

function SuccessPopup({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, AUTO_CLOSE_MS);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div className="pointer-events-auto relative w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-muted transition-colors hover:bg-black/10"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col items-center px-8 pb-8 pt-10 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <svg
                className="h-8 w-8 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3 className="mt-5 text-xl font-bold text-foreground">
              Nachricht gesendet!
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Vielen Dank für deine Nachricht. Wir melden uns in Kürze bei dir.
            </p>

            <button
              onClick={onClose}
              className="mt-6 w-full rounded-xl bg-accent py-3 text-sm font-semibold text-white transition-all hover:bg-accent-dark hover:scale-[1.02] active:scale-[0.98]"
            >
              Alles klar
            </button>
          </div>

          <div className="h-1 w-full bg-accent/10">
            <div
              className="h-full origin-left bg-accent"
              style={{
                animation: `shrink ${AUTO_CLOSE_MS}ms linear forwards`,
              }}
            />
            <style>{`@keyframes shrink { from { transform: scaleX(1) } to { transform: scaleX(0) } }`}</style>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    loadRecaptcha();
  }, []);

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      recaptchaToken: await getRecaptchaToken("contact_form"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
              Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="Dein Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
              E-Mail *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="deine@email.ch"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="+41 79 000 00 00"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
            Nachricht *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="Wie können wir dir helfen?"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-full bg-accent py-4 font-medium text-white transition-colors hover:bg-accent-dark disabled:opacity-50"
        >
          {status === "loading" ? "Wird gesendet..." : "Nachricht senden"}
        </button>

        {status === "error" && (
          <p className="text-center text-red-500">
            Etwas ist schiefgelaufen. Bitte versuche es erneut oder schreib uns
            direkt an {SITE.email}.
          </p>
        )}
      </form>

      <AnimatePresence>
        {status === "success" && (
          <SuccessPopup onClose={() => setStatus("idle")} />
        )}
      </AnimatePresence>
    </>
  );
}
