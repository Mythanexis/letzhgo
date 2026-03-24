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

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  showImage?: boolean;
  imageSrc?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaHref,
  showImage = false,
  imageSrc,
}: HeroProps) {
  if (showImage) {
    return (
      <section className="relative flex h-screen items-end overflow-hidden">
        <div className="absolute inset-0">
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

        <div className="relative z-10 flex w-full items-end justify-between gap-8 px-8 pb-16 md:px-16 md:pb-24">
          <div className="max-w-3xl text-left text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.2, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-6 max-w-xl text-lg text-white/80 md:text-xl"
            >
              {subtitle}
            </motion.p>
            {ctaText && ctaHref && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.4, delay: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Link
                  href={ctaHref}
                  className="mt-8 inline-block rounded-full bg-accent px-8 py-4 text-lg font-medium text-white transition-all hover:bg-accent-dark hover:scale-105"
                >
                  {ctaText}
                </Link>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ x: "120%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hidden w-full max-w-sm shrink-0 md:block"
          >
            <div className="rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white">
                Buche deinen Kurs jetzt!
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Wähle deinen Kurs und starte direkt durch.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {BOOKING_ITEMS.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    initial={{ x: 30 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.7, delay: 1.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white transition-all duration-300 hover:border-accent/50 hover:bg-accent/20"
                  >
                    <span className="flex items-center gap-3">
                      <span className="opacity-50 transition-opacity duration-300 group-hover:opacity-100"><BookingIcon type={item.iconType} /></span>
                      <span className="text-sm font-medium">{item.label}</span>
                    </span>
                    <svg className="h-4 w-4 opacity-40 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
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
