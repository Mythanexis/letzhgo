"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useCoarsePointer } from "@/hooks/useScrollAnim";
import PricingCard from "@/components/PricingCard";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import { SERVICES_DETAIL, PRICING } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

function ServiceSectionStatic({
  service,
  index,
  total,
}: {
  service: (typeof SERVICES_DETAIL)[number];
  index: number;
  total: number;
}) {
  return (
    <section
      data-navbar-dark
      className="relative flex min-h-[88svh] snap-start flex-col justify-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 max-w-3xl px-8 pb-20 pt-28 md:px-16 md:pb-28 lg:px-24">
        <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <h2 className="mt-4 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
          {service.title}
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
          {service.description}
        </p>
        <Link
          href={`/services/${service.id}`}
          className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/25 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10"
        >
          Mehr erfahren
          <svg
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform group-hover:translate-x-1"
          >
            <path
              d="M4 8h8M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}

function ServiceSectionScroll({
  service,
  index,
  total,
}: {
  service: (typeof SERVICES_DETAIL)[number];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.05]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [60, 0, 0, -60]);

  const isLast = index === total - 1;
  const lastOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const lastY = useTransform(scrollYProgress, [0.1, 0.3], [60, 0]);
  const finalOpacity = isLast ? lastOpacity : contentOpacity;
  const finalY = isLast ? lastY : contentY;

  return (
    <section
      ref={ref}
      data-navbar-dark
      className="relative flex h-dvh snap-start items-end overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ scale: imageScale, y: imageY }}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden flex-col gap-2 lg:flex">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              i === index ? "h-8 bg-accent" : "bg-white/30"
            }`}
          />
        ))}
      </div>

      <motion.div
        style={{ opacity: finalOpacity, y: finalY }}
        className="relative z-10 max-w-3xl px-8 pb-20 md:px-16 md:pb-28 lg:px-24"
      >
        <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <h2 className="mt-4 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
          {service.title}
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
          {service.description}
        </p>
        <Link
          href={`/services/${service.id}`}
          className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/25 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10"
        >
          Mehr erfahren
          <svg
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform group-hover:translate-x-1"
          >
            <path
              d="M4 8h8M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
}

function ServiceSection(
  props: {
    service: (typeof SERVICES_DETAIL)[number];
    index: number;
    total: number;
  },
) {
  const coarse = useCoarsePointer();
  if (coarse) return <ServiceSectionStatic {...props} />;
  return <ServiceSectionScroll {...props} />;
}

export default function ServicesPage() {
  const coarse = useCoarsePointer();
  return (
    <>
      {/* Hero Header */}
      <section className="relative flex h-dvh snap-start items-center overflow-hidden bg-background pt-16">
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

        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
            className="absolute left-10 top-24 hidden lg:block"
          >
            <div className="relative h-[420px] w-[320px] -rotate-[10deg] overflow-hidden rounded-[28px] border border-border/70 bg-transparent shadow-[0_40px_100px_-60px_rgba(0,0,0,0.35)]">
              <Image
                src="/images/motorrad-grundkurs-2.jpg"
                alt=""
                fill
                sizes="320px"
                className="object-cover opacity-[0.86]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
            className="absolute right-6 bottom-16 hidden lg:block"
          >
            <div className="relative h-[360px] w-[300px] rotate-[8deg] overflow-hidden rounded-[26px] border border-border/70 bg-transparent shadow-[0_40px_100px_-60px_rgba(0,0,0,0.35)]">
              <Image
                src="/images/vku-popup.png"
                alt=""
                fill
                sizes="300px"
                className="object-cover opacity-[0.84]"
              />
            </div>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-4xl px-6 md:px-10">
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-accent"
            >
              Was wir anbieten
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
              className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-8xl"
            >
              Unsere{" "}
              <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: EASE }}
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              Kurse, Fahrstunden und Coachings – strukturiert, modern und auf dein Ziel
              abgestimmt. Du bekommst Klarheit, Tempo und echte Fortschritte.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="animate-bounce text-muted"
          >
            <path
              d="M12 5v14M5 12l7 7 7-7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </section>

      <div
        id="services"
        className={coarse ? "flex flex-col" : "snap-y snap-mandatory"}
      >
        {SERVICES_DETAIL.map((service, i) => (
          <ServiceSection
            key={service.id}
            service={service}
            index={i}
            total={SERVICES_DETAIL.length}
          />
        ))}
      </div>

      {/* Stats */}
      <Stats />

      {/* Pricing */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Unsere Preise
          </p>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
            Preise, die zu deinem Tempo passen.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Ob einzelne Fahrstunden oder komplette Ausbildung – du bestimmst, wie
            schnell du vorankommst.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {PRICING.map((plan, i) => (
            <PricingCard key={plan.title} {...plan} index={i} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FAQ className="bg-[#f7f8fa]" />
    </>
  );
}
