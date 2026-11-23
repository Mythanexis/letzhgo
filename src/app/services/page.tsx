"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollThread from "@/components/ScrollThread";
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
      className="relative flex min-h-svh snap-start flex-col justify-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={service.image}
          alt={`${service.title} bei Let'ZHgo`}
          fill
          className="object-cover"
          sizes="100vw"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-linear-to-tr from-black/90 via-black/55 to-black/10" />
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
          className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/25 px-6 py-3 text-base font-medium text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10"
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
          alt={`${service.title} bei Let'ZHgo`}
          fill
          className="object-cover"
          sizes="100vw"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-linear-to-tr from-black/90 via-black/55 to-black/10" />
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
          className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/25 px-6 py-3 text-base font-medium text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10"
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
  const servicesRef = useRef<HTMLDivElement>(null);
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0a0a0a]" data-navbar-dark>
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-32 md:pb-20 md:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: EASE }}
          >
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-white/50">
              <Link href="/" className="transition-colors hover:text-white">Home</Link>
              <span aria-hidden className="text-white/25">/</span>
              <span className="text-white/80" aria-current="page">Services</span>
            </nav>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
              Unsere Services
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Kurse, Fahrstunden und Coachings – strukturiert, modern und auf dein Ziel
              abgestimmt. Du bekommst Klarheit, Tempo und echte Fortschritte.
            </p>
          </motion.div>
        </div>
      </section>

      <div
        ref={servicesRef}
        id="services"
        className={`relative ${coarse ? "flex flex-col" : "snap-y snap-mandatory"}`}
      >
        {!coarse && <ScrollThread containerRef={servicesRef} />}
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
