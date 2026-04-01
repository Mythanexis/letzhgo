"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

/** Volle-Breite-Hero oben: Navbar startet transparent, ab Scroll normal. */
const TRANSPARENT_AT_TOP_PATHS: readonly string[] = ["/"];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setScrolled(typeof window !== "undefined" && window.scrollY > 20);
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

  const transparentTop =
    TRANSPARENT_AT_TOP_PATHS.includes(pathname) && !scrolled && !mobileOpen;

  const navShell = transparentTop
    ? "border-transparent bg-transparent"
    : "border-b border-border bg-background/90 backdrop-blur-xl";

  const desktopLink = (href: string) => {
    const active = pathname === href;
    if (transparentTop) {
      return `text-sm transition-colors hover:text-white ${
        active ? "font-medium text-accent" : "text-white/85"
      }`;
    }
    return `text-sm transition-colors hover:text-accent ${
      active ? "text-accent font-medium" : "text-muted"
    }`;
  };

  const burgerLine = transparentTop ? "bg-white" : "bg-foreground";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${navShell}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 pt-[max(1rem,env(safe-area-inset-top))]">
          <Link href="/" className="relative block h-10 w-40">
            <Image
              src="/images/logo.png"
              alt="Let'ZHgo"
              fill
              className={`object-contain object-left transition-[filter] duration-300 ${
                transparentTop ? "brightness-0 invert drop-shadow-md" : ""
              }`}
              priority
              sizes="160px"
            />
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={desktopLink(link.href)}>
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
            >
              Jetzt starten
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label={mobileOpen ? "Menu schließen" : "Menu öffnen"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block h-0.5 w-6 transition-transform ${burgerLine} ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-opacity ${burgerLine} ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-transform ${burgerLine} ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 bg-background md:hidden"
            role="dialog"
            aria-modal="true"
            style={{ transformOrigin: "top" }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="mx-auto flex h-full w-full max-w-md flex-col px-8 pb-10 pt-28 text-center"
              initial={{ y: -8 }}
              animate={{ y: 0 }}
              exit={{ y: -8 }}
              transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-1 flex-col items-center justify-center gap-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-2xl font-semibold tracking-tight transition-colors hover:text-accent ${
                      pathname === link.href ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
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
