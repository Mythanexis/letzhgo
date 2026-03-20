"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";

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
        <Image
          src={IMAGES.hero}
          alt="Let'ZHgo Team"
          fill
          className="object-cover brightness-[0.4]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-3xl px-8 pb-16 text-left text-white md:px-16 md:pb-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-white/80 md:text-xl"
          >
            {subtitle}
          </motion.p>
          {ctaText && ctaHref && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Link
                href={ctaHref}
                className="mt-8 inline-block rounded-full bg-accent px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-accent-dark"
              >
                {ctaText}
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-6 pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-light/50 via-transparent to-transparent" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted md:text-xl"
        >
          {subtitle}
        </motion.p>
        {ctaText && ctaHref && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link
              href={ctaHref}
              className="mt-10 inline-block rounded-full bg-accent px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-accent-dark"
            >
              {ctaText}
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
