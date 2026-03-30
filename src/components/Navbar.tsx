"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${navShell}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
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
          aria-label="Menu"
          aria-expanded={mobileOpen}
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-lg transition-colors hover:text-accent ${
                  pathname === link.href ? "text-accent font-medium" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-accent px-5 py-3 text-center font-medium text-white transition-colors hover:bg-accent-dark"
            >
              Jetzt starten
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
