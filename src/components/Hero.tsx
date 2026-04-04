"use client";

import type { MouseEvent, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { IMAGES, EDOOBOX_LINKS } from "@/lib/constants";

const BOOKING_ITEMS = [
  { label: "Autofahrstunden", href: "/services/fahrstunden", external: false, iconType: "car" as const },
  { label: "Nothelferkurs", href: EDOOBOX_LINKS.nothelferkurs, external: true, iconType: "cross" as const },
  { label: "Verkehrskundeunterricht", href: EDOOBOX_LINKS.verkehrskunde, external: true, iconType: "traffic" as const },
  { label: "Motorrad-Grundkurs", href: EDOOBOX_LINKS.motorrad, external: true, iconType: "moto" as const },
];

const SNAP = [0.16, 1, 0.3, 1] as const;
/** Ruhiger Ease für CTAs — kein Feder- oder Overshoot-Feeling */
const CTA_EASE = [0.22, 1, 0.36, 1] as const;

/** Gleicher Start wie Booking-Panel (Desktop: Slide-in, Mobile: Panel-Fade). */
const HERO_BOOKING_START_DESKTOP = 1.05;
const HERO_BOOKING_START_MOBILE = 1.48;

function BookingIcon({ type }: { type: string }) {
  const cls = "h-5 w-5";
  const props = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (type) {
    case "car":
      return <svg className={cls} {...props}><path d="M5 17h14M5 17a2 2 0 01-2-2v-2h2.5l1.5-5h9l1.5 5H20v2a2 2 0 01-2 2M5 17a2 2 0 002 2h1a2 2 0 002-2M14 17a2 2 0 002 2h1a2 2 0 002-2" /><circle cx="7.5" cy="17" r="0.5" fill="currentColor" stroke="none" /><circle cx="16.5" cy="17" r="0.5" fill="currentColor" stroke="none" /></svg>;
    case "cross":
      return <svg className={cls} {...props}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M12 8v8M8 12h8" /></svg>;
    case "traffic":
      return <svg className={cls} {...props}><rect x="7" y="2" width="10" height="20" rx="2" /><circle cx="12" cy="7" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="12" cy="17" r="1.5" /></svg>;
    case "moto":
      return <svg className={cls} {...props}><circle cx="5.5" cy="17" r="3.5" /><circle cx="18.5" cy="17" r="3.5" /><path d="M15 6h2l3 5.5M9 17h6M6.5 13.5L9 7h4l2.5 6.5" /></svg>;
    default:
      return null;
  }
}

function BookingPanel() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl">
      <div className="bg-accent px-7 py-5">
        <h3 className="text-2xl font-extrabold text-white">
          Jetzt buchen!
        </h3>
      </div>

      <div className="bg-white px-5 pb-5 pt-4 md:px-7 md:pb-7 md:pt-5">
        <p className="mb-3 text-sm font-semibold text-foreground md:mb-4">
          Dein Führerschein wartet – worauf noch?
        </p>
        <div className="flex flex-col gap-2">
          {BOOKING_ITEMS.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.72, delay: 2.1 + i * 0.14, ease: SNAP }}
              className="group flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3 transition-all duration-300 hover:border-accent/30 hover:bg-accent-light hover:shadow-sm md:px-5 md:py-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white md:h-10 md:w-10">
                <BookingIcon type={item.iconType} />
              </span>
              <span className="text-sm font-bold text-foreground">{item.label}</span>
              <svg className="ml-auto h-4 w-4 text-muted opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Wort-für-Wort: Maske von unten hoch — kein klassisches Fade-only. */
function HeroTitleMaskedWords({
  text,
  className,
  startDelay = 0.2,
}: {
  text: string;
  className?: string;
  /** Wann die erste Silbe loslegt (z. B. synchron mit Modal). */
  startDelay?: number;
}) {
  const reduceMotion = useReducedMotion();
  const parts = text.split(/(\s+)/);

  return (
    <h1 className={className}>
      {parts.map((part, i) => {
        if (/^\s+$/.test(part)) {
          return <span key={`s-${i}`}>{part}</span>;
        }
        return (
          <span key={`w-${i}`} className="inline-block overflow-hidden pb-[0.08em] align-baseline">
            <motion.span
              className="inline-block"
              initial={reduceMotion ? false : { y: "115%", rotate: 1.2 }}
              animate={reduceMotion ? undefined : { y: "0%", rotate: 0 }}
              transition={{
                duration: 1.52,
                delay: startDelay + i * 0.125,
                ease: SNAP,
              }}
            >
              {part}
            </motion.span>
          </span>
        );
      })}
    </h1>
  );
}

function HeroHeadline({
  title,
  className,
  /** undefined = Hero ohne Bild: Titel wie bisher früh; gesetzt = Start synchron mit Modal o. ä. */
  headlineStartDelay,
}: {
  title: ReactNode;
  className: string;
  headlineStartDelay?: number;
}) {
  const reduceMotion = useReducedMotion();
  if (typeof title === "string") {
    return (
      <HeroTitleMaskedWords
        text={title}
        className={className}
        startDelay={headlineStartDelay ?? 0.2}
      />
    );
  }
  return (
    <motion.h1
      className={className}
      initial={reduceMotion ? false : { clipPath: "inset(0 0 100% 0)" }}
      animate={reduceMotion ? undefined : { clipPath: "inset(0 0 0% 0)" }}
      transition={{
        duration: 1.85,
        delay: headlineStartDelay ?? 0,
        ease: SNAP,
      }}
    >
      {title}
    </motion.h1>
  );
}

/** Untertitel: von links „aufgezogen“ + Blur löst sich — liest sich wie Fokussieren. */
function HeroSubtitleReveal({
  children,
  className,
  delay = 1.2,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.p
      className={className}
      initial={
        reduceMotion
          ? false
          : {
              clipPath: "inset(0 100% 0 0)",
              filter: "blur(14px)",
            }
      }
      animate={
        reduceMotion
          ? undefined
          : {
              clipPath: "inset(0 0% 0 0)",
              filter: "blur(0px)",
            }
      }
      transition={{ duration: 2.85, delay, ease: SNAP }}
    >
      {children}
    </motion.p>
  );
}

/**
 * Next.js behandelt Klicks auf denselben Hash nicht als neue Navigation — dann
 * scrollt nichts. Wenn die URL schon z. B. `#services` ist, scrollen wir selbst.
 */
function handleSameHashAnchorClick(
  e: MouseEvent<HTMLAnchorElement>,
  href: string,
  reduceMotion: boolean | null
) {
  if (!href.startsWith("#")) return;
  const raw = href.slice(1);
  if (!raw) return;
  let id: string;
  try {
    id = decodeURIComponent(raw);
  } catch {
    id = raw;
  }
  const el = document.getElementById(id);
  if (!el || window.location.hash !== href) return;
  e.preventDefault();
  el.scrollIntoView({
    behavior: reduceMotion ? "instant" : "smooth",
    block: "start",
  });
}

/** CTAs: dezent — leicht von unten, lange Dauer, kein Spring/Rotate. */
function HeroCtaEnter({
  href,
  children,
  className,
  delay,
}: {
  href: string;
  children: ReactNode;
  className: string;
  delay: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 1.45, delay, ease: CTA_EASE }}
    >
      <Link
        href={href}
        className={className}
        onClick={(e) => handleSameHashAnchorClick(e, href, reduceMotion)}
      >
        {children}
      </Link>
    </motion.div>
  );
}

function HeroArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function HeroMailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
    </svg>
  );
}

function HeroSlideIcon({
  variant,
  className,
}: {
  variant: "arrow" | "mail";
  className?: string;
}) {
  if (variant === "mail") return <HeroMailIcon className={className} />;
  return <HeroArrowIcon className={className} />;
}

/**
 * Hero-CTA: Hover / Focus — nur Transform (kein Fade): Text schiebt nach links raus,
 * Pfeil-Layer fährt als Ganzes von rechts rein (translate-x-full → 0).
 */
function HeroCtaArrowSlide({
  href,
  children,
  className,
  delay,
  slideIcon = "arrow",
}: {
  href: string;
  children: ReactNode;
  className: string;
  delay: number;
  /** „Kontakt“: Mail statt Pfeil */
  slideIcon?: "arrow" | "mail";
}) {
  const reduceMotion = useReducedMotion();
  const slideTf =
    "transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 1.45, delay, ease: CTA_EASE }}
    >
      <Link
        href={href}
        className={`group relative inline-flex items-center justify-center overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/30 ${className}`}
        onClick={(e) => handleSameHashAnchorClick(e, href, reduceMotion)}
      >
        <span
          className={`relative z-10 inline-block whitespace-nowrap ${slideTf} group-hover:pointer-events-none group-hover:-translate-x-[calc(100%+2.5rem)] group-focus-visible:pointer-events-none group-focus-visible:-translate-x-[calc(100%+2.5rem)] motion-reduce:group-hover:translate-x-0 motion-reduce:group-focus-visible:translate-x-0`}
        >
          {children}
        </span>
        <span
          className="pointer-events-none absolute inset-0 flex items-center overflow-hidden motion-reduce:hidden"
          aria-hidden
        >
          <span
            className={`flex w-full justify-center ${slideTf} translate-x-full group-hover:translate-x-0 group-focus-visible:translate-x-0`}
          >
            <HeroSlideIcon
              variant={slideIcon}
              className="h-6 w-6 shrink-0 md:h-7 md:w-7"
            />
          </span>
        </span>
      </Link>
    </motion.div>
  );
}

interface HeroProps {
  title: ReactNode;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  showImage?: boolean;
  imageSrc?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  showImage = false,
  imageSrc,
}: HeroProps) {
  if (showImage) {
    return (
      <section
        className="relative flex h-dvh overflow-x-clip md:overflow-hidden"
        data-navbar-dark
      >
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={imageSrc ?? IMAGES.hero}
            alt="Let'ZHgo Team"
            fill
            className="object-cover brightness-[0.4]"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Desktop layout */}
        <div className="relative z-10 hidden w-full items-end justify-between gap-12 px-16 pb-24 md:flex">
          <div className="max-w-3xl text-left text-white">
            <HeroHeadline
              title={title}
              className="text-6xl font-extrabold leading-[1.05] lg:text-7xl"
              headlineStartDelay={HERO_BOOKING_START_DESKTOP}
            />
            <HeroSubtitleReveal
              className="mt-6 max-w-xl text-xl text-white/80"
              delay={1.35}
            >
              {subtitle}
            </HeroSubtitleReveal>
            {(ctaText || secondaryCtaText) && (
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {ctaText && ctaHref && (
                  <HeroCtaArrowSlide
                    href={ctaHref}
                    delay={2.38}
                    className="rounded-full bg-accent px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-accent-dark"
                  >
                    {ctaText}
                  </HeroCtaArrowSlide>
                )}
                {secondaryCtaText && secondaryCtaHref && (
                  <HeroCtaArrowSlide
                    href={secondaryCtaHref}
                    delay={2.58}
                    slideIcon="mail"
                    className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-lg font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
                  >
                    {secondaryCtaText}
                  </HeroCtaArrowSlide>
                )}
              </div>
            )}
          </div>

          <motion.div
            initial={{ x: "120%" }}
            animate={{ x: 0 }}
            transition={{
              duration: 1.55,
              delay: HERO_BOOKING_START_DESKTOP,
              ease: SNAP,
            }}
            className="shrink-0"
          >
            <BookingPanel />
          </motion.div>
        </div>

        {/* Mobile layout */}
        <div className="relative z-10 flex w-full flex-col items-center justify-center px-6 pt-24 text-center md:hidden">
          <HeroHeadline
            title={title}
            className="text-5xl font-extrabold leading-[1.05] text-white"
            headlineStartDelay={HERO_BOOKING_START_MOBILE}
          />
          <HeroSubtitleReveal
            className="mx-auto mt-4 max-w-sm text-base text-white/80"
            delay={1.22}
          >
            {subtitle}
          </HeroSubtitleReveal>
          {(ctaText || secondaryCtaText) && (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {ctaText && ctaHref && (
                <HeroCtaArrowSlide
                  href={ctaHref}
                  delay={2.18}
                  className="rounded-full bg-accent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-accent-dark"
                >
                  {ctaText}
                </HeroCtaArrowSlide>
              )}
              {secondaryCtaText && secondaryCtaHref && (
                <HeroCtaArrowSlide
                  href={secondaryCtaHref}
                  delay={2.38}
                  slideIcon="mail"
                  className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
                >
                  {secondaryCtaText}
                </HeroCtaArrowSlide>
              )}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.35,
              delay: HERO_BOOKING_START_MOBILE,
              ease: SNAP,
            }}
            className="mt-8 translate-y-32"
          >
            <BookingPanel />
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-6 pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-light/50 via-transparent to-transparent" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <HeroHeadline
          title={title}
          className="text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl"
        />
        <HeroSubtitleReveal
          className="mx-auto mt-6 max-w-2xl text-lg text-muted md:text-xl"
          delay={1.08}
        >
          {subtitle}
        </HeroSubtitleReveal>
        {(ctaText && ctaHref) || (secondaryCtaText && secondaryCtaHref) ? (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {ctaText && ctaHref && (
              <HeroCtaEnter
                href={ctaHref}
                delay={2.15}
                className="inline-block rounded-full bg-accent px-8 py-4 text-lg font-medium text-white transition-all hover:bg-accent-dark hover:scale-105"
              >
                {ctaText}
              </HeroCtaEnter>
            )}
            {secondaryCtaText && secondaryCtaHref && (
              <HeroCtaEnter
                href={secondaryCtaHref}
                delay={2.35}
                className="inline-block rounded-full border border-border bg-card px-8 py-4 text-lg font-medium text-foreground transition-all hover:bg-card-hover hover:scale-105"
              >
                {secondaryCtaText}
              </HeroCtaEnter>
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}
