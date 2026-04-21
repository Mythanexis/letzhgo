"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Stats from "@/components/Stats";
import CTABanner from "@/components/CTABanner";
import PartnersSection from "@/components/PartnersSection";
import { AWARD_ITEMS } from "@/lib/constants";
import { useScrollAnim } from "@/hooks/useScrollAnim";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function AuszeichnungenPage() {
  const anim = useScrollAnim();
  return (
    <>
      {/* Hero — Services-Optik (Radial + Raster), zentriert, kompakt (kein Vollbild) */}
      <section className="relative overflow-hidden bg-background pt-28 pb-16 md:pt-32 md:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-100"
          aria-hidden
          style={{
            background:
              "radial-gradient(980px 660px at 20% 28%, rgba(30, 99, 255, 0.15), transparent 62%), radial-gradient(900px 620px at 84% 70%, rgba(30, 99, 255, 0.12), transparent 64%), radial-gradient(780px 520px at 55% 15%, rgba(30, 99, 255, 0.06), transparent 60%), linear-gradient(180deg, rgba(30, 99, 255, 0.055), transparent 58%)",
          }}
        />
        <div
          className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-accent/15 blur-[110px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-accent-light/35 blur-[120px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative mx-auto w-full max-w-4xl px-6 md:px-10">
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-accent"
            >
              Qualität & Vertrauen
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
              className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-8xl"
            >
              Unsere{" "}
              <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
                Auszeichnungen
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              Siegel und Urkunden von unabhängigen Schweizer Plattformen – von
              Fahrschüler:innen gewählt, nicht von uns selbst inseriert.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fa]">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <ul className="flex flex-col gap-10 md:gap-14">
            {AWARD_ITEMS.map((item, i) => (
              <li key={item.src}>
                <motion.a
                  href={item.href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  {...anim({ y: 22, delay: 0.05 * i, duration: 0.72 })}
                  className="group block overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  <div className="relative bg-white p-4 md:p-8">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={1600}
                      height={900}
                      className="h-auto w-full object-contain"
                      sizes="(max-width: 1024px) 100vw, 896px"
                      priority={i === 0}
                    />
                  </div>
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Stats surface="light" />

      <CTABanner />

      <PartnersSection />
    </>
  );
}
