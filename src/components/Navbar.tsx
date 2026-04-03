"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useLayoutEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/constants";

/** Home: oben immer Glass, bis gescrollt (Fallback bevor Layout misst). */
const TRANSPARENT_AT_TOP_PATHS: readonly string[] = ["/"];

/** z. B. „Services“ bleibt aktiv auf `/services/fahrstunden` etc.; „Home“ nur exakt `/`. */
function isNavLinkActive(currentPath: string, href: string): boolean {
  if (currentPath === href) return true;
  if (href === "/") return false;
  return currentPath.startsWith(`${href}/`);
}

/** Pixel unterhalb Viewport-Oberkante, die zur „Nav-Zone“ zählen. */
const NAV_OVERLAP_BAND_PX = 104;
/** Min. Überlappung mit dunklem Block, damit Glass aktiv wird (vermeidet Rand-Artefakte). */
const NAV_DARK_MIN_OVERLAP_PX = 28;

function isNavbarOverDarkBackdrop(): boolean {
  if (typeof document === "undefined") return false;
  const els = document.querySelectorAll("[data-navbar-dark]");
  const band = NAV_OVERLAP_BAND_PX;
  for (const el of els) {
    const r = el.getBoundingClientRect();
    const overlap = Math.min(r.bottom, band) - Math.max(r.top, 0);
    if (overlap >= NAV_DARK_MIN_OVERLAP_PX) return true;
  }
  return false;
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overDarkBackdrop, setOverDarkBackdrop] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setScrolled(typeof window !== "undefined" && window.scrollY > 20);
  }, [pathname]);

  useLayoutEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      setOverDarkBackdrop(isNavbarOverDarkBackdrop());
    };
    const schedule = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    const t = window.setTimeout(schedule, 0);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const glassNav =
    !mobileOpen &&
    (overDarkBackdrop ||
      (TRANSPARENT_AT_TOP_PATHS.includes(pathname) && !scrolled));

  const barShell = glassNav
    ? "border-white/25 bg-white/[0.12] shadow-[0_20px_64px_-12px_rgba(0,0,0,0.28),0_0_0_1px_rgba(255,255,255,0.1)] backdrop-blur-2xl"
    : "border-neutral-200/95 bg-white shadow-[0_32px_100px_-24px_rgba(15,23,42,0.10),0_18px_56px_-28px_rgba(15,23,42,0.07),0_0_0_1px_rgba(15,23,42,0.045)] backdrop-blur-2xl";

  const desktopPill = (href: string) => {
    const active = isNavLinkActive(pathname, href);
    if (glassNav) {
      return active
        ? "bg-white/20 font-semibold text-white shadow-sm"
        : "text-white/85 hover:bg-white/15 hover:text-white";
    }
    return active
      ? "bg-accent/12 font-semibold text-accent"
      : "text-muted hover:bg-border/70 hover:text-foreground";
  };

  const burgerLine = glassNav ? "bg-white" : "bg-foreground";

  return (
    <>
      <header
        className={`pointer-events-none fixed inset-x-0 top-0 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 ${
          mobileOpen ? "z-[70]" : "z-50"
        }`}
      >
        <nav
          className={`pointer-events-auto flex w-full max-w-6xl items-center gap-3 rounded-2xl border px-3 py-2.5 transition-[box-shadow,background-color,border-color] duration-300 sm:gap-4 sm:rounded-[1.25rem] sm:px-4 sm:py-3 md:px-5 ${barShell}`}
          aria-label="Hauptnavigation"
        >
          {/* Brand */}
          <Link
            href="/"
            className="group relative flex shrink-0 items-center gap-3 rounded-xl py-1 pr-1"
          >
            <span className="relative block h-9 w-36 sm:h-10 sm:w-40">
              <Image
                src="/images/logo.png"
                alt={SITE.name}
                fill
                className={`object-contain object-left transition-[filter,transform] duration-300 group-hover:scale-[1.02] ${
                  glassNav ? "brightness-0 invert drop-shadow-md" : ""
                }`}
                priority
                sizes="160px"
              />
            </span>
          </Link>

          {/* Desktop: zentrierte Pill-Navigation */}
          <div className="hidden min-w-0 flex-1 items-center justify-center md:flex">
            <div
              className={`flex flex-wrap items-center justify-center gap-0.5 rounded-full p-1 ${
                glassNav ? "bg-black/15" : "bg-neutral-100 ring-1 ring-neutral-200/80"
              }`}
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isNavLinkActive(pathname, link.href) ? "page" : undefined}
                  className={`rounded-full px-3.5 py-2 text-sm transition-colors lg:px-4 ${desktopPill(link.href)}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA + Mobile */}
          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
            <Link
              href="/kontakt"
              className={`hidden rounded-full px-4 py-2 text-sm font-semibold transition-all sm:inline-flex md:px-5 ${
                glassNav
                  ? "bg-white text-foreground shadow-sm hover:bg-white/90"
                  : "bg-accent text-white hover:bg-accent-dark"
              }`}
            >
              Jetzt starten
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-[background-color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
                glassNav
                  ? "border-white/30 bg-white/10 hover:bg-white/20"
                  : "border-neutral-200 bg-neutral-50 shadow-sm hover:bg-neutral-100"
              } ${mobileOpen ? "ring-2 ring-accent/15" : ""}`}
              aria-label={mobileOpen ? "Menu schließen" : "Menu öffnen"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <span className="relative block h-5 w-5 shrink-0" aria-hidden>
                <span
                  className={`absolute left-0 block h-0.5 w-5 origin-center rounded-full ${burgerLine} transition-[top,bottom,transform,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
                    mobileOpen
                      ? "top-1/2 bottom-auto -translate-y-1/2 rotate-45"
                      : "top-0 bottom-auto translate-y-0 rotate-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full ${burgerLine} transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    mobileOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-5 origin-center rounded-full ${burgerLine} transition-[top,bottom,transform,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
                    mobileOpen
                      ? "top-1/2 bottom-auto -translate-y-1/2 -rotate-45"
                      : "top-auto bottom-0 translate-y-0 rotate-0"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-[60] bg-background md:hidden"
            role="dialog"
            aria-modal="true"
            style={{ transformOrigin: "top" }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="mx-auto flex h-full w-full max-w-md flex-col px-8 pb-10 pt-[max(6.5rem,env(safe-area-inset-top)+4.5rem)] text-center"
              initial={{ y: -8 }}
              animate={{ y: 0 }}
              exit={{ y: -8 }}
              transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-1 flex-col items-center justify-center gap-8">
                {NAV_LINKS.map((link) => {
                  const active = isNavLinkActive(pathname, link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`text-2xl font-semibold tracking-tight transition-colors hover:text-accent ${
                        active ? "text-accent" : "text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <Link
                href="/kontakt"
                onClick={() => setMobileOpen(false)}
                className="mt-10 w-full rounded-full bg-accent px-7 py-4 text-lg font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                Jetzt starten
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
