"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { INSTRUCTORS } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.553 4.114 1.519 5.847L.525 23.503a.5.5 0 00.607.601l5.771-1.473A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82c-1.88 0-3.66-.5-5.19-1.41l-.36-.22-3.77.99 1.01-3.68-.24-.38A9.8 9.8 0 012.18 12c0-5.42 4.4-9.82 9.82-9.82 5.42 0 9.82 4.4 9.82 9.82 0 5.42-4.4 9.82-9.82 9.82z" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function PanelContent({ onClose }: { onClose: () => void }) {
  return (
    <>
      <div className="flex items-center gap-3 bg-[#075E54] px-5 py-4 text-white">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
          <WhatsAppIcon className="h-5 w-5" />
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold leading-tight">
            Schreib uns direkt
          </p>
          <p className="mt-0.5 text-xs text-white/70">
            Wir antworten meist in &lt; 1 Stunde.
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Schliessen"
        >
          <CloseIcon className="h-4 w-4" />
        </button>
      </div>

      <ul className="max-h-[60vh] overflow-y-auto py-2">
        {INSTRUCTORS.map((inst) => (
          <li key={inst.slug}>
            <a
              href={inst.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="group flex items-center gap-3 px-4 py-3 transition-colors hover:bg-accent-light"
            >
              <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-neutral-100 ring-2 ring-transparent transition-all group-hover:ring-accent/30">
                <Image
                  src={inst.image}
                  alt={inst.name}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-bold text-foreground">
                  {inst.name}
                </span>
                <span className="mt-0.5 block truncate text-xs text-muted">
                  {inst.tags.slice(0, 3).join(" · ")}
                </span>
              </span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform group-hover:scale-110">
                <WhatsAppIcon className="h-4 w-4" />
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className="border-t border-border px-5 py-3 text-center text-[11px] text-muted">
        Antwortzeiten Mo–Sa, 08:00–20:00
      </p>
    </>
  );
}

export default function StickyWhatsApp() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const reduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Prevent background scroll when mobile modal is open
  useEffect(() => {
    if (open && isMobile) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open, isMobile]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (panelRef.current?.contains(target)) return;
      if (buttonRef.current?.contains(target)) return;
      setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <>
      {/* Mobile: centered modal with backdrop — only on <768px */}
      <AnimatePresence>
        {open && isMobile && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setOpen(false)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              ref={panelRef}
              role="dialog"
              aria-label="WhatsApp – Fahrlehrer:in auswählen"
              initial={
                reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 28 }
              }
              animate={
                reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }
              }
              exit={
                reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 20 }
              }
              transition={{ duration: 0.32, ease: EASE }}
              className="relative z-10 w-full max-w-sm overflow-hidden rounded-2xl border border-black/6 bg-white shadow-[0_24px_80px_-12px_rgba(0,0,0,0.35),0_0_0_1px_rgba(0,0,0,0.04)]"
              onClick={(e) => e.stopPropagation()}
            >
              <PanelContent onClose={() => setOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB + desktop panel */}
      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-end p-4 md:p-6"
        style={{
          paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)",
        }}
      >
        <div className="pointer-events-auto relative flex flex-col items-end gap-3">
          {/* Desktop panel — only on ≥768px */}
          <AnimatePresence>
            {open && !isMobile && (
              <motion.div
                ref={panelRef}
                role="dialog"
                aria-label="WhatsApp – Fahrlehrer:in auswählen"
                initial={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: 12, scale: 0.96 }
                }
                animate={
                  reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }
                }
                exit={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: 12, scale: 0.97 }
                }
                transition={{ duration: 0.32, ease: EASE }}
                className="w-[min(92vw,360px)] origin-bottom-right overflow-hidden rounded-2xl border border-black/6 bg-white shadow-[0_24px_80px_-12px_rgba(0,0,0,0.25),0_0_0_1px_rgba(0,0,0,0.04)]"
              >
                <PanelContent onClose={() => setOpen(false)} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating trigger button */}
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={
              open
                ? "WhatsApp Menü schliessen"
                : "Fahrlehrer:in auf WhatsApp kontaktieren"
            }
            aria-expanded={open}
            className="group relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7),0_4px_14px_-2px_rgba(0,0,0,0.2)] outline-none transition-all duration-300 hover:scale-105 hover:bg-[#1fb855] focus-visible:ring-4 focus-visible:ring-[#25D366]/30 md:h-16 md:w-16"
          >
            {!open && (
              <span
                aria-hidden
                className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/40 motion-safe:animate-ping"
                style={{ animationDuration: "2.4s" }}
              />
            )}
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={
                    reduceMotion ? { opacity: 0 } : { rotate: -90, opacity: 0 }
                  }
                  animate={
                    reduceMotion ? { opacity: 1 } : { rotate: 0, opacity: 1 }
                  }
                  exit={
                    reduceMotion ? { opacity: 0 } : { rotate: 90, opacity: 0 }
                  }
                  transition={{ duration: 0.22, ease: EASE }}
                >
                  <CloseIcon className="h-6 w-6 md:h-7 md:w-7" />
                </motion.span>
              ) : (
                <motion.span
                  key="wa"
                  initial={
                    reduceMotion ? { opacity: 0 } : { rotate: 90, opacity: 0 }
                  }
                  animate={
                    reduceMotion ? { opacity: 1 } : { rotate: 0, opacity: 1 }
                  }
                  exit={
                    reduceMotion
                      ? { opacity: 0 }
                      : { rotate: -90, opacity: 0 }
                  }
                  transition={{ duration: 0.22, ease: EASE }}
                >
                  <WhatsAppIcon className="h-7 w-7 md:h-8 md:w-8" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </>
  );
}
