"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PricingCard from "@/components/PricingCard";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import { SERVICES_DETAIL, PRICING } from "@/lib/constants";

function ServiceSection({
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
  const finalOpacity = isLast
    ? useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
    : contentOpacity;
  const finalY = isLast
    ? useTransform(scrollYProgress, [0.1, 0.3], [60, 0])
    : contentY;

  return (
    <section
      ref={ref}
      className="relative flex h-screen snap-start items-end overflow-hidden"
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

export default function ServicesPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="flex h-screen snap-start items-center justify-center bg-background pt-16">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium uppercase tracking-[0.2em] text-accent"
          >
            Was wir anbieten
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 text-5xl font-bold text-foreground md:text-7xl lg:text-8xl"
          >
            Unsere Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-6 max-w-xl text-lg text-muted"
          >
            Entdecke unsere Kurse und Fahrstunden – abgestimmt auf dein Ziel,
            dein Tempo und deine Erfahrung.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex justify-center"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="animate-bounce text-muted">
              <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </div>
      </section>

      <div className="snap-y snap-mandatory">
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
      <FAQ />
    </>
  );
}
