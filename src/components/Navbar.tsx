"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

const SERVICE_NAV_LINKS = [
  { label: "Fahrstunden", description: "Auto fahren lernen", href: "/services/fahrstunden" },
  { label: "Motorrad", description: "Grundkurs & Fahrstunden", href: "/services/motorrad" },
  { label: "VKU", description: "Verkehrskundeunterricht", href: "/services/verkehrskunde" },
  { label: "Nothelfer", description: "Kompakter Nothelferkurs", href: "/services/nothelferkurs" },
] as const;

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

/** Ab diesem Scroll-Offset bleibt die Desktop-Nav beim Runterscrollen sichtbar (oben immer da). */
const DESKTOP_NAV_ALWAYS_VISIBLE_UNTIL_PX = 40;
/** Min. Scroll-Delta pro Frame, damit Richtung gewechselt wird (weniger Flackern). */
const DESKTOP_NAV_SCROLL_DELTA_PX = 12;

const NAV_GLASS_SHELL =
  "border-white/25 bg-white/[0.12] shadow-[0_20px_64px_-12px_rgba(0,0,0,0.28),0_0_0_1px_rgba(255,255,255,0.1)] backdrop-blur-2xl";
const NAV_SOLID_SHELL =
  "border-neutral-200/95 bg-white shadow-[0_32px_100px_-24px_rgba(15,23,42,0.10),0_18px_56px_-28px_rgba(15,23,42,0.07),0_0_0_1px_rgba(15,23,42,0.045)] backdrop-blur-2xl";

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
  const reduceMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuView, setMobileMenuView] = useState<"main" | "services">("main");
  const [servicesPopoverPosition, setServicesPopoverPosition] = useState({ left: 0, top: 0 });
  const [scrolled, setScrolled] = useState(false);
  const [overDarkBackdrop, setOverDarkBackdrop] = useState(false);
  /** Nur ≥ md: weg bei Scroll runter, zurück bei Scroll hoch (Mobile unverändert). */
  const [desktopNavHidden, setDesktopNavHidden] = useState(false);
  const lastScrollY = useRef(0);
  const servicesOpenTimer = useRef<number | null>(null);
  const servicesCloseTimer = useRef<number | null>(null);
  const servicesTriggerRef = useRef<HTMLDivElement>(null);
  const servicesPopoverRef = useRef<HTMLDivElement>(null);

  const headerAboveMobileOverlay = mobileOpen;

  useEffect(() => {
    if (typeof window === "undefined") return;
    lastScrollY.current = window.scrollY;
    setDesktopNavHidden(false);
    setScrolled(window.scrollY > 20);
    setServicesOpen(false);
    setMobileMenuView("main");
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (servicesOpenTimer.current) window.clearTimeout(servicesOpenTimer.current);
      if (servicesCloseTimer.current) window.clearTimeout(servicesCloseTimer.current);
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

  useLayoutEffect(() => {
    // Synchronous check before first paint — prevents white-navbar flash on dark-hero pages
    setOverDarkBackdrop(isNavbarOverDarkBackdrop());

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
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (mobileOpen) setMobileOpen(false);
      if (servicesOpen) setServicesOpen(false);
      setMobileMenuView("main");
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen, servicesOpen]);

  const updateServicesPopoverPosition = () => {
    const trigger = servicesTriggerRef.current;
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();
    setServicesPopoverPosition({
      left: rect.left + rect.width / 2,
      top: rect.bottom + 12,
    });
  };

  const openServicesMenu = (delay = 150) => {
    if (servicesCloseTimer.current) window.clearTimeout(servicesCloseTimer.current);
    if (servicesOpenTimer.current) window.clearTimeout(servicesOpenTimer.current);
    servicesOpenTimer.current = window.setTimeout(() => {
      updateServicesPopoverPosition();
      setServicesOpen(true);
    }, delay);
  };

  const closeServicesMenu = (delay = 100) => {
    if (servicesOpenTimer.current) window.clearTimeout(servicesOpenTimer.current);
    if (servicesCloseTimer.current) window.clearTimeout(servicesCloseTimer.current);
    servicesCloseTimer.current = window.setTimeout(() => setServicesOpen(false), delay);
  };

  useEffect(() => {
    if (!servicesOpen) return;
    updateServicesPopoverPosition();
    window.addEventListener("resize", updateServicesPopoverPosition);
    window.addEventListener("scroll", updateServicesPopoverPosition, { passive: true });
    return () => {
      window.removeEventListener("resize", updateServicesPopoverPosition);
      window.removeEventListener("scroll", updateServicesPopoverPosition);
    };
  }, [servicesOpen]);

  const glassNav =
    !mobileOpen &&
    (overDarkBackdrop ||
      (TRANSPARENT_AT_TOP_PATHS.includes(pathname) && !scrolled));

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

  const servicesPopoverShell = glassNav
    ? "border-white/22 bg-white/[0.08] text-white shadow-[0_20px_64px_-12px_rgba(0,0,0,0.28),0_0_0_1px_rgba(255,255,255,0.08)] backdrop-blur-xl"
    : "border-neutral-200/90 bg-white text-foreground shadow-[0_28px_90px_-30px_rgba(15,23,42,0.24),0_12px_34px_-24px_rgba(15,23,42,0.18)]";
  const servicesPopoverItem = glassNav
    ? "hover:bg-white/10 hover:text-white"
    : "hover:bg-neutral-100 hover:text-accent";
  const servicesPopoverDescription = glassNav ? "text-white/50" : "text-muted";

  const burgerLine = glassNav ? "bg-white" : "bg-foreground";

  const mobileMenuTransition = reduceMotion
    ? { duration: 0.15 }
    : { duration: 0.38, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <>
      <header
        className={`pointer-events-none fixed inset-x-0 top-0 flex justify-center px-3 pt-3 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform motion-reduce:transition-none motion-reduce:md:translate-y-0 sm:px-4 sm:pt-4 md:px-6 ${
          headerAboveMobileOverlay ? "z-[70]" : "z-50"
        } ${
          desktopNavHidden
            ? "md:-translate-y-[calc(100%+0.75rem)]"
            : "translate-y-0"
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
              {NAV_LINKS.map((link) => {
                const active = isNavLinkActive(pathname, link.href);
                const isServices = link.href === "/services";
                if (isServices) {
                  return (
                    <div
                      key={link.href}
                      ref={servicesTriggerRef}
                      className="relative"
                      onMouseEnter={() => openServicesMenu()}
                      onMouseLeave={() => closeServicesMenu()}
                      onFocus={() => openServicesMenu(0)}
                      onBlur={(event) => {
                        if (
                          !event.currentTarget.contains(event.relatedTarget) &&
                          !servicesPopoverRef.current?.contains(event.relatedTarget)
                        ) {
                          closeServicesMenu(80);
                        }
                      }}
                    >
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        aria-haspopup="menu"
                        aria-expanded={servicesOpen}
                        className={desktopNavLinkClass(link.href)}
                      >
                        {link.label}
                      </Link>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.href}
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

      <AnimatePresence>
        {servicesOpen && (
          <motion.div
            ref={servicesPopoverRef}
            key="services-popover"
            role="menu"
            onMouseEnter={() => openServicesMenu(0)}
            onMouseLeave={() => closeServicesMenu()}
            onFocus={() => openServicesMenu(0)}
            onBlur={(event) => {
              if (
                !event.currentTarget.contains(event.relatedTarget) &&
                !servicesTriggerRef.current?.contains(event.relatedTarget)
              ) {
                closeServicesMenu(80);
              }
            }}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={
              reduceMotion
                ? { duration: 0.12 }
                : { duration: 0.18, ease: [0.16, 1, 0.3, 1] }
            }
            style={{
              left: servicesPopoverPosition.left,
              top: servicesPopoverPosition.top,
            }}
            className={`fixed z-[55] hidden w-64 -translate-x-1/2 rounded-3xl border p-2 before:absolute before:-top-3 before:left-0 before:h-3 before:w-full before:content-[''] md:block ${servicesPopoverShell}`}
          >
            <div className="grid gap-1">
              {SERVICE_NAV_LINKS.map((service) => {
                const serviceActive = isNavLinkActive(pathname, service.href);
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    role="menuitem"
                    className={`group block rounded-2xl px-3 py-2.5 text-sm transition-colors ${
                      serviceActive
                        ? glassNav
                          ? "bg-white/14 text-white"
                          : "bg-accent/10 text-accent"
                        : servicesPopoverItem
                    }`}
                  >
                    <span className="block font-semibold">{service.label}</span>
                    <span className={`mt-0.5 block text-xs ${servicesPopoverDescription}`}>
                      {service.description}
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
            className="fixed inset-0 z-[60] bg-background md:hidden"
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
                  : {
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.05,
                    }
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
                      transition={
                        reduceMotion
                          ? { duration: 0.12 }
                          : { duration: 0.22, ease: [0.16, 1, 0.3, 1] }
                      }
                    >
                      {NAV_LINKS.map((link) => {
                        const active = isNavLinkActive(pathname, link.href);
                        if (link.href === "/services") {
                          return (
                            <button
                              key={link.href}
                              type="button"
                              onClick={() => setMobileMenuView("services")}
                              aria-current={active ? "page" : undefined}
                              className={`relative text-2xl font-semibold leading-none tracking-tight transition-colors hover:text-accent ${
                                active ? "text-accent" : "text-foreground"
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
                        return (
                          <Link
                            key={link.href}
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
                  ) : (
                    <motion.div
                      key="mobile-services-menu"
                      className="absolute inset-0 flex w-full flex-col items-center justify-center gap-8"
                      initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 18 }}
                      transition={
                        reduceMotion
                          ? { duration: 0.12 }
                          : { duration: 0.22, ease: [0.16, 1, 0.3, 1] }
                      }
                    >
                      <button
                        type="button"
                        onClick={() => setMobileMenuView("main")}
                        className="inline-flex items-center gap-2 text-base font-semibold text-muted transition-colors hover:text-accent"
                      >
                        <ChevronLeft className="h-4 w-4" aria-hidden strokeWidth={2.5} />
                        Zurück
                      </button>

                      {SERVICE_NAV_LINKS.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => {
                            setMobileMenuView("main");
                            setMobileOpen(false);
                          }}
                          aria-current={isNavLinkActive(pathname, service.href) ? "page" : undefined}
                          className={`block text-2xl font-semibold tracking-tight transition-colors hover:text-accent ${
                            isNavLinkActive(pathname, service.href)
                              ? "text-accent"
                              : "text-foreground"
                          }`}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="h-[6.25rem] w-full">
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
                          : {
                              duration: 0.28,
                              ease: [0.16, 1, 0.3, 1],
                            }
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
