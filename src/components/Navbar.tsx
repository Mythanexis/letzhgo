"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { STANDORTE } from "@/lib/standorte-data";

const WEITERES_NAV_LINKS = [
  { label: "Services", description: "Alle Angebote im Überblick", href: "/services" },
  { label: "Standorte", description: "Fahrschulen in der Region", href: "/lokationen" },
] as const;

const AUTO_NAV_LINKS = STANDORTE.map((s) => ({
  label: s.fullName,
  description: s.region,
  href: `/fahrschule-${s.slug}`,
}));

const AUTO_TRIGGER_LABEL = "Auto";
const WEITERES_TRIGGER_LABEL = "Weiteres";

const TRANSPARENT_AT_TOP_PATHS: readonly string[] = ["/"];

function isNavLinkActive(currentPath: string, href: string): boolean {
  if (href === "#") return false;
  if (currentPath === href) return true;
  if (href === "/") return false;
  return currentPath.startsWith(`${href}/`);
}

const NAV_OVERLAP_BAND_PX = 104;
const DESKTOP_NAV_ALWAYS_VISIBLE_UNTIL_PX = 40;
const DESKTOP_NAV_SCROLL_DELTA_PX = 12;

const NAV_GLASS_SHELL =
  "border-white/25 bg-white/[0.12] shadow-[0_20px_64px_-12px_rgba(0,0,0,0.28),0_0_0_1px_rgba(255,255,255,0.1)] backdrop-blur-2xl";
const NAV_SOLID_SHELL =
  "border-neutral-200/95 bg-white shadow-[0_32px_100px_-24px_rgba(15,23,42,0.10),0_18px_56px_-28px_rgba(15,23,42,0.07),0_0_0_1px_rgba(15,23,42,0.045)] backdrop-blur-2xl";

export default function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [weiteresOpen, setWeiteresOpen] = useState(false);
  const [autoOpen, setAutoOpen] = useState(false);
  const [mobileMenuView, setMobileMenuView] = useState<"main" | "weiteres" | "auto">("main");
  const [weiteresPopoverPosition, setWeiteresPopoverPosition] = useState({ left: 0, top: 0 });
  const [autoPopoverPosition, setAutoPopoverPosition] = useState({ left: 0, top: 0 });
  const [scrolled, setScrolled] = useState(false);
  const [overDarkBackdrop, setOverDarkBackdrop] = useState(false);
  const [desktopNavHidden, setDesktopNavHidden] = useState(false);
  const lastScrollY = useRef(0);
  const weiteresOpenTimer = useRef<number | null>(null);
  const weiteresCloseTimer = useRef<number | null>(null);
  const weiteresTriggerRef = useRef<HTMLDivElement>(null);
  const weiteresPopoverRef = useRef<HTMLDivElement>(null);
  const autoOpenTimer = useRef<number | null>(null);
  const autoCloseTimer = useRef<number | null>(null);
  const autoTriggerRef = useRef<HTMLDivElement>(null);
  const autoPopoverRef = useRef<HTMLDivElement>(null);

  const headerAboveMobileOverlay = mobileOpen;

  useEffect(() => {
    if (typeof window === "undefined") return;
    lastScrollY.current = window.scrollY;
    setDesktopNavHidden(false);
    setScrolled(window.scrollY > 20);
    setWeiteresOpen(false);
    setAutoOpen(false);
    setMobileMenuView("main");
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (weiteresOpenTimer.current) window.clearTimeout(weiteresOpenTimer.current);
      if (weiteresCloseTimer.current) window.clearTimeout(weiteresCloseTimer.current);
      if (autoOpenTimer.current) window.clearTimeout(autoOpenTimer.current);
      if (autoCloseTimer.current) window.clearTimeout(autoCloseTimer.current);
    };
  }, []);

  useEffect(() => {
    const mdMq = window.matchMedia("(min-width: 768px)");

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      const isMd = mdMq.matches;
      if (!isMd || mobileOpen) {
        setDesktopNavHidden(false);
        lastScrollY.current = y;
        return;
      }

      const delta = y - lastScrollY.current;
      lastScrollY.current = y;

      if (y < DESKTOP_NAV_ALWAYS_VISIBLE_UNTIL_PX) {
        setDesktopNavHidden(false);
        return;
      }

      if (delta > DESKTOP_NAV_SCROLL_DELTA_PX) {
        setDesktopNavHidden(true);
      } else if (delta < -DESKTOP_NAV_SCROLL_DELTA_PX) {
        setDesktopNavHidden(false);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onResize = () => {
      if (!mdMq.matches) setDesktopNavHidden(false);
      onScroll();
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [pathname, mobileOpen]);

  useEffect(() => {
    const band = NAV_OVERLAP_BAND_PX;
    const qualifying = new Set<Element>();
    let observer: IntersectionObserver | null = null;

    const syncDark = () => setOverDarkBackdrop(qualifying.size > 0);

    const setup = () => {
      observer?.disconnect();
      qualifying.clear();

      const bottomMargin = band - window.innerHeight;
      const rootMargin = `0px 0px ${bottomMargin}px 0px`;
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) qualifying.add(entry.target);
            else qualifying.delete(entry.target);
          }
          syncDark();
        },
        { root: null, rootMargin, threshold: 0 },
      );

      const darkEls = document.querySelectorAll("[data-navbar-dark]");
      darkEls.forEach((el) => observer!.observe(el));

      // If this page has no dark sections at all, clear immediately.
      // Otherwise keep the previous value until the observer fires (avoids flash).
      if (darkEls.length === 0) syncDark();
    };

    setup();
    window.addEventListener("resize", setup);
    return () => {
      window.removeEventListener("resize", setup);
      observer?.disconnect();
      qualifying.clear();
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
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (mobileOpen) setMobileOpen(false);
      if (weiteresOpen) setWeiteresOpen(false);
      if (autoOpen) setAutoOpen(false);
      setMobileMenuView("main");
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen, weiteresOpen, autoOpen]);

  const updateWeiteresPopoverPosition = () => {
    const trigger = weiteresTriggerRef.current;
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();
    setWeiteresPopoverPosition({ left: rect.left + rect.width / 2, top: rect.bottom + 12 });
  };

  const openWeiteresMenu = (delay = 150) => {
    if (weiteresCloseTimer.current) window.clearTimeout(weiteresCloseTimer.current);
    if (weiteresOpenTimer.current) window.clearTimeout(weiteresOpenTimer.current);
    weiteresOpenTimer.current = window.setTimeout(() => {
      updateWeiteresPopoverPosition();
      setWeiteresOpen(true);
    }, delay);
  };

  const closeWeiteresMenu = (delay = 100) => {
    if (weiteresOpenTimer.current) window.clearTimeout(weiteresOpenTimer.current);
    if (weiteresCloseTimer.current) window.clearTimeout(weiteresCloseTimer.current);
    weiteresCloseTimer.current = window.setTimeout(() => setWeiteresOpen(false), delay);
  };

  useEffect(() => {
    if (!weiteresOpen) return;
    updateWeiteresPopoverPosition();
    window.addEventListener("resize", updateWeiteresPopoverPosition);
    window.addEventListener("scroll", updateWeiteresPopoverPosition, { passive: true });
    return () => {
      window.removeEventListener("resize", updateWeiteresPopoverPosition);
      window.removeEventListener("scroll", updateWeiteresPopoverPosition);
    };
  }, [weiteresOpen]);

  const updateAutoPopoverPosition = () => {
    const trigger = autoTriggerRef.current;
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();
    setAutoPopoverPosition({ left: rect.left + rect.width / 2, top: rect.bottom + 12 });
  };

  const openAutoMenu = (delay = 150) => {
    if (autoCloseTimer.current) window.clearTimeout(autoCloseTimer.current);
    if (autoOpenTimer.current) window.clearTimeout(autoOpenTimer.current);
    autoOpenTimer.current = window.setTimeout(() => {
      updateAutoPopoverPosition();
      setAutoOpen(true);
    }, delay);
  };

  const closeAutoMenu = (delay = 100) => {
    if (autoOpenTimer.current) window.clearTimeout(autoOpenTimer.current);
    if (autoCloseTimer.current) window.clearTimeout(autoCloseTimer.current);
    autoCloseTimer.current = window.setTimeout(() => setAutoOpen(false), delay);
  };

  useEffect(() => {
    if (!autoOpen) return;
    updateAutoPopoverPosition();
    window.addEventListener("resize", updateAutoPopoverPosition);
    window.addEventListener("scroll", updateAutoPopoverPosition, { passive: true });
    return () => {
      window.removeEventListener("resize", updateAutoPopoverPosition);
      window.removeEventListener("scroll", updateAutoPopoverPosition);
    };
  }, [autoOpen]);

  const glassNav =
    !mobileOpen &&
    (overDarkBackdrop || (TRANSPARENT_AT_TOP_PATHS.includes(pathname) && !scrolled));

  const barShell = glassNav ? NAV_GLASS_SHELL : NAV_SOLID_SHELL;

  const desktopNavLinkClass = (href: string) => {
    const active = isNavLinkActive(pathname, href);
    const base =
      "relative rounded-full px-3.5 py-2 text-sm transition-colors duration-200 lg:px-4";
    if (glassNav) {
      if (active) return `${base} bg-white/20 font-semibold text-white shadow-sm`;
      return `${base} text-white/75 hover:bg-white/10 hover:text-white`;
    }
    if (active) return `${base} bg-accent/12 font-semibold text-accent`;
    return `${base} text-muted hover:bg-border/60 hover:text-foreground`;
  };

  const popoverShell = glassNav
    ? "border-white/22 bg-white/[0.08] text-white shadow-[0_20px_64px_-12px_rgba(0,0,0,0.28),0_0_0_1px_rgba(255,255,255,0.08)] backdrop-blur-xl"
    : "border-neutral-200/90 bg-white text-foreground shadow-[0_28px_90px_-30px_rgba(15,23,42,0.24),0_12px_34px_-24px_rgba(15,23,42,0.18)]";
  const popoverItem = glassNav ? "hover:bg-white/10 hover:text-white" : "hover:bg-neutral-100 hover:text-accent";
  const popoverDescription = glassNav ? "text-white/50" : "text-muted";

  const burgerLine = glassNav ? "bg-white" : "bg-foreground";

  const mobileMenuTransition = reduceMotion
    ? { duration: 0.15 }
    : { duration: 0.38, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <>
      <header
        className={`pointer-events-none fixed inset-x-0 top-0 flex justify-center px-3 pt-3 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform motion-reduce:transition-none motion-reduce:md:translate-y-0 sm:px-4 sm:pt-4 md:px-6 ${
          headerAboveMobileOverlay ? "z-70" : "z-50"
        } ${desktopNavHidden ? "md:-translate-y-[calc(100%+0.75rem)]" : "translate-y-0"}`}
      >
        <nav
          className={`pointer-events-auto flex w-full max-w-6xl items-center gap-3 rounded-2xl border px-3 py-2.5 transition-[box-shadow,background-color,border-color] duration-300 sm:gap-4 sm:rounded-[1.25rem] sm:px-4 sm:py-3 md:px-5 ${barShell}`}
          aria-label="Hauptnavigation"
        >
          {/* Brand */}
          <Link
            href="/"
            onClick={(event) => {
              if (pathname !== "/") return;
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
            }}
            className="group relative flex shrink-0 items-center gap-3 rounded-xl py-1 pr-1"
          >
            <span className="relative block h-9 w-36 sm:h-10 sm:w-40">
              <Image
                src="/images/logo.png"
                alt={SITE.name}
                fill
                className={`object-contain object-left transition-[filter] duration-300 ${
                  glassNav ? "brightness-0 invert drop-shadow-md" : ""
                }`}
                priority
                sizes="160px"
              />
            </span>
          </Link>

          {/* Desktop pill nav */}
          <div className="hidden min-w-0 flex-1 items-center justify-center md:flex">
            <div
              className={`flex flex-wrap items-center justify-center gap-0.5 rounded-full p-1 ${
                glassNav ? "bg-black/15" : "bg-neutral-100 ring-1 ring-neutral-200/80"
              }`}
            >
              {NAV_LINKS.map((link) => {
                const active = isNavLinkActive(pathname, link.href);
                const isAuto = link.label === AUTO_TRIGGER_LABEL;
                const isWeiteres = link.label === WEITERES_TRIGGER_LABEL;
                const autoActive = pathname.startsWith("/fahrschule-");

                if (isAuto) {
                  const baseCls = desktopNavLinkClass(link.href);
                  const autoCls = autoActive
                    ? glassNav
                      ? baseCls.replace(/text-(?:white\/75|white|muted)/, "text-white") +
                        " bg-white/20 font-semibold shadow-sm"
                      : baseCls.replace(/text-(?:muted|foreground)/, "text-accent") +
                        " bg-accent/12 font-semibold"
                    : baseCls;
                  return (
                    <div
                      key={link.label}
                      ref={autoTriggerRef}
                      className="relative"
                      onMouseEnter={() => openAutoMenu()}
                      onMouseLeave={() => closeAutoMenu()}
                      onFocus={() => openAutoMenu(0)}
                      onBlur={(event) => {
                        if (
                          !event.currentTarget.contains(event.relatedTarget) &&
                          !autoPopoverRef.current?.contains(event.relatedTarget)
                        ) {
                          closeAutoMenu(80);
                        }
                      }}
                    >
                      <Link
                        href={link.href}
                        aria-current={autoActive ? "page" : undefined}
                        aria-haspopup="menu"
                        aria-expanded={autoOpen}
                        className={autoCls}
                      >
                        {link.label}
                      </Link>
                    </div>
                  );
                }

                if (isWeiteres) {
                  return (
                    <div
                      key={link.label}
                      ref={weiteresTriggerRef}
                      className="relative"
                      onMouseEnter={() => openWeiteresMenu()}
                      onMouseLeave={() => closeWeiteresMenu()}
                      onFocus={() => openWeiteresMenu(0)}
                      onBlur={(event) => {
                        if (
                          !event.currentTarget.contains(event.relatedTarget) &&
                          !weiteresPopoverRef.current?.contains(event.relatedTarget)
                        ) {
                          closeWeiteresMenu(80);
                        }
                      }}
                    >
                      <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={weiteresOpen}
                        className={desktopNavLinkClass("#")}
                      >
                        {link.label}
                      </button>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={desktopNavLinkClass(link.href)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CTA + Mobile burger */}
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
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-[background-color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
                glassNav
                  ? "border-white/30 bg-white/10 hover:bg-white/20"
                  : "border-neutral-200 bg-neutral-50 shadow-sm hover:bg-neutral-100"
              } ${mobileOpen ? "ring-2 ring-accent/15" : ""}`}
              aria-label={mobileOpen ? "Menu schließen" : "Menu öffnen"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => {
                if (mobileOpen) setMobileMenuView("main");
                setMobileOpen(!mobileOpen);
              }}
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

      {/* Weiteres popover */}
      <AnimatePresence>
        {weiteresOpen && (
          <motion.div
            ref={weiteresPopoverRef}
            key="weiteres-popover"
            role="menu"
            onMouseEnter={() => openWeiteresMenu(0)}
            onMouseLeave={() => closeWeiteresMenu()}
            onFocus={() => openWeiteresMenu(0)}
            onBlur={(event) => {
              if (
                !event.currentTarget.contains(event.relatedTarget) &&
                !weiteresTriggerRef.current?.contains(event.relatedTarget)
              ) {
                closeWeiteresMenu(80);
              }
            }}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={reduceMotion ? { duration: 0.12 } : { duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            style={{ left: weiteresPopoverPosition.left, top: weiteresPopoverPosition.top }}
            className={`fixed z-55 hidden w-56 -translate-x-1/2 rounded-3xl border p-2 before:absolute before:-top-3 before:left-0 before:h-3 before:w-full before:content-[''] md:block ${popoverShell}`}
          >
            <div className="grid gap-1">
              {WEITERES_NAV_LINKS.map((item) => {
                const itemActive = isNavLinkActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    className={`group block rounded-2xl px-3 py-2.5 text-sm transition-colors ${
                      itemActive
                        ? glassNav
                          ? "bg-white/14 text-white"
                          : "bg-accent/10 text-accent"
                        : popoverItem
                    }`}
                  >
                    <span className="block font-semibold">{item.label}</span>
                    <span className={`mt-0.5 block text-xs ${popoverDescription}`}>
                      {item.description}
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auto popover */}
      <AnimatePresence>
        {autoOpen && (
          <motion.div
            ref={autoPopoverRef}
            key="auto-popover"
            role="menu"
            onMouseEnter={() => openAutoMenu(0)}
            onMouseLeave={() => closeAutoMenu()}
            onFocus={() => openAutoMenu(0)}
            onBlur={(event) => {
              if (
                !event.currentTarget.contains(event.relatedTarget) &&
                !autoTriggerRef.current?.contains(event.relatedTarget)
              ) {
                closeAutoMenu(80);
              }
            }}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={reduceMotion ? { duration: 0.12 } : { duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            style={{ left: autoPopoverPosition.left, top: autoPopoverPosition.top }}
            className={`fixed z-55 hidden w-64 -translate-x-1/2 rounded-3xl border p-2 before:absolute before:-top-3 before:left-0 before:h-3 before:w-full before:content-[''] md:block ${popoverShell}`}
          >
            <div className="grid gap-1">
              {AUTO_NAV_LINKS.map((location) => {
                const locationActive = pathname === location.href;
                return (
                  <Link
                    key={location.href}
                    href={location.href}
                    role="menuitem"
                    className={`group block rounded-2xl px-3 py-2.5 text-sm transition-colors ${
                      locationActive
                        ? glassNav
                          ? "bg-white/14 text-white"
                          : "bg-accent/10 text-accent"
                        : popoverItem
                    }`}
                  >
                    <span className="block font-semibold">Fahrschule {location.label}</span>
                    <span className={`mt-0.5 block text-xs ${popoverDescription}`}>
                      {location.description}
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile full-screen menu */}
      <AnimatePresence mode="sync">
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-60 bg-background md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={mobileMenuTransition}
          >
            <motion.div
              className="mx-auto flex h-full w-full max-w-md flex-col px-8 pb-10 pt-[max(6.5rem,env(safe-area-inset-top)+4.5rem)] text-center"
              initial={reduceMotion ? false : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                reduceMotion
                  ? { duration: 0.15 }
                  : { duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.05 }
              }
            >
              <div className="relative flex flex-1 items-center justify-center overflow-hidden">
                <AnimatePresence initial={false}>
                  {mobileMenuView === "main" ? (
                    <motion.div
                      key="mobile-main-menu"
                      className="absolute inset-0 flex w-full flex-col items-center justify-center gap-8"
                      initial={reduceMotion ? false : { opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -18 }}
                      transition={reduceMotion ? { duration: 0.12 } : { duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {NAV_LINKS.map((link) => {
                        const active = isNavLinkActive(pathname, link.href);
                        const isAutoLink = link.label === AUTO_TRIGGER_LABEL;
                        const isWeiteresLink = link.label === WEITERES_TRIGGER_LABEL;
                        const autoActive = pathname.startsWith("/fahrschule-");

                        if (isAutoLink) {
                          return (
                            <button
                              key={link.label}
                              type="button"
                              onClick={() => setMobileMenuView("auto")}
                              aria-current={autoActive ? "page" : undefined}
                              className={`relative text-2xl font-semibold leading-none tracking-tight transition-colors hover:text-accent ${
                                autoActive ? "text-accent" : "text-foreground"
                              }`}
                            >
                              {link.label}
                              <ChevronRight
                                className="absolute left-full top-1/2 ml-2.5 h-6 w-6 -translate-y-1/2"
                                aria-hidden
                                strokeWidth={2.75}
                              />
                            </button>
                          );
                        }

                        if (isWeiteresLink) {
                          return (
                            <button
                              key={link.label}
                              type="button"
                              onClick={() => setMobileMenuView("weiteres")}
                              className="relative text-2xl font-semibold leading-none tracking-tight text-foreground transition-colors hover:text-accent"
                            >
                              {link.label}
                              <ChevronRight
                                className="absolute left-full top-1/2 ml-2.5 h-6 w-6 -translate-y-1/2"
                                aria-hidden
                                strokeWidth={2.75}
                              />
                            </button>
                          );
                        }

                        return (
                          <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            aria-current={active ? "page" : undefined}
                            className={`block text-2xl font-semibold tracking-tight transition-colors hover:text-accent ${
                              active ? "text-accent" : "text-foreground"
                            }`}
                          >
                            {link.label}
                          </Link>
                        );
                      })}
                    </motion.div>
                  ) : mobileMenuView === "weiteres" ? (
                    <motion.div
                      key="mobile-weiteres-menu"
                      className="absolute inset-0 flex w-full flex-col items-center justify-center gap-8"
                      initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 18 }}
                      transition={reduceMotion ? { duration: 0.12 } : { duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <button
                        type="button"
                        onClick={() => setMobileMenuView("main")}
                        className="inline-flex items-center gap-2 text-base font-semibold text-muted transition-colors hover:text-accent"
                      >
                        <ChevronLeft className="h-4 w-4" aria-hidden strokeWidth={2.5} />
                        Zurück
                      </button>

                      {WEITERES_NAV_LINKS.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => {
                            setMobileMenuView("main");
                            setMobileOpen(false);
                          }}
                          aria-current={isNavLinkActive(pathname, item.href) ? "page" : undefined}
                          className={`block text-2xl font-semibold tracking-tight transition-colors hover:text-accent ${
                            isNavLinkActive(pathname, item.href) ? "text-accent" : "text-foreground"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="mobile-auto-menu"
                      className="absolute inset-0 flex w-full flex-col items-center justify-center gap-8"
                      initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 18 }}
                      transition={reduceMotion ? { duration: 0.12 } : { duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <button
                        type="button"
                        onClick={() => setMobileMenuView("main")}
                        className="inline-flex items-center gap-2 text-base font-semibold text-muted transition-colors hover:text-accent"
                      >
                        <ChevronLeft className="h-4 w-4" aria-hidden strokeWidth={2.5} />
                        Zurück
                      </button>

                      {AUTO_NAV_LINKS.map((location) => {
                        const locationActive = pathname === location.href;
                        return (
                          <Link
                            key={location.href}
                            href={location.href}
                            onClick={() => {
                              setMobileMenuView("main");
                              setMobileOpen(false);
                            }}
                            aria-current={locationActive ? "page" : undefined}
                            className={`block text-2xl font-semibold tracking-tight transition-colors hover:text-accent ${
                              locationActive ? "text-accent" : "text-foreground"
                            }`}
                          >
                            {location.label}
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="h-25 w-full">
                <AnimatePresence initial={false}>
                  {mobileMenuView === "main" && (
                    <motion.div
                      key="mobile-menu-cta"
                      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
                      transition={
                        reduceMotion
                          ? { duration: 0.15 }
                          : { duration: 0.28, ease: [0.16, 1, 0.3, 1] }
                      }
                    >
                      <Link
                        href="/kontakt"
                        onClick={() => setMobileOpen(false)}
                        className="mt-10 flex w-full justify-center rounded-full bg-accent px-7 py-4 text-lg font-semibold text-white transition-colors hover:bg-accent-dark"
                      >
                        Jetzt starten
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
