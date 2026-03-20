"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IMAGES, EDOOBOX_LINKS } from "@/lib/constants";

const BOOKING_ITEMS = [
  { label: "Autofahrstunden", href: "/services/fahrstunden", external: false },
  { label: "Nothelferkurs", href: EDOOBOX_LINKS.nothelferkurs, external: true },
  { label: "Verkehrskundeunterricht", href: EDOOBOX_LINKS.verkehrskunde, external: true },
  { label: "Motorrad-Grundkurs", href: EDOOBOX_LINKS.motorrad, external: true },
];

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  showImage?: boolean;
}

export default function Hero({ title, subtitle, ctaText, ctaHref, showImage = false }: HeroProps) {
  if (showImage) {
    return (
      <section className="relative flex h-screen items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.hero}
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
                    <span className="text-sm font-medium">{item.label}</span>
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
