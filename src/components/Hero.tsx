"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IMAGES, EDOOBOX_LINKS } from "@/lib/constants";

const BOOKING_ITEMS = [
  { label: "Autofahrstunden", href: "/services/fahrstunden", external: false, iconType: "car" as const },
  { label: "Nothelferkurs", href: EDOOBOX_LINKS.nothelferkurs, external: true, iconType: "cross" as const },
  { label: "Verkehrskundeunterricht", href: EDOOBOX_LINKS.verkehrskunde, external: true, iconType: "traffic" as const },
  { label: "Motorrad-Grundkurs", href: EDOOBOX_LINKS.motorrad, external: true, iconType: "moto" as const },
];

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
              transition={{ duration: 0.5, delay: 1.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
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

interface HeroProps {
  title: React.ReactNode;
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
      <section className="relative flex h-dvh overflow-x-clip md:overflow-hidden">
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
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-6xl font-extrabold leading-[1.05] lg:text-7xl"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.2, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-6 max-w-xl text-xl text-white/80"
            >
              {subtitle}
            </motion.p>
            {(ctaText || secondaryCtaText) && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.4, delay: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                {ctaText && ctaHref && (
                  <Link
                    href={ctaHref}
                    className="rounded-full bg-accent px-8 py-4 text-lg font-medium text-white transition-all hover:bg-accent-dark hover:scale-105"
                  >
                    {ctaText}
                  </Link>
                )}
                {secondaryCtaText && secondaryCtaHref && (
                  <Link
                    href={secondaryCtaHref}
                    className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-lg font-medium text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20"
                  >
                    {secondaryCtaText}
                  </Link>
                )}
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ x: "120%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0"
          >
            <BookingPanel />
          </motion.div>
        </div>

        {/* Mobile layout */}
        <div className="relative z-10 flex w-full flex-col items-center justify-center px-6 pt-24 text-center md:hidden">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl font-extrabold leading-[1.05] text-white"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.2, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto mt-4 max-w-sm text-base text-white/80"
          >
            {subtitle}
          </motion.p>
          {(ctaText || secondaryCtaText) && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.4, delay: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-6 flex flex-wrap items-center justify-center gap-3"
            >
              {ctaText && ctaHref && (
                <Link
                  href={ctaHref}
                  className="rounded-full bg-accent px-6 py-3 text-base font-medium text-white transition-all hover:bg-accent-dark hover:scale-105"
                >
                  {ctaText}
                </Link>
              )}
              {secondaryCtaText && secondaryCtaHref && (
                <Link
                  href={secondaryCtaHref}
                  className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base font-medium text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
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
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted md:text-xl"
        >
          {subtitle}
        </motion.p>
        {ctaText && ctaHref && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={ctaHref}
              className="mt-10 inline-block rounded-full bg-accent px-8 py-4 text-lg font-medium text-white transition-all hover:bg-accent-dark hover:scale-105"
            >
              {ctaText}
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
