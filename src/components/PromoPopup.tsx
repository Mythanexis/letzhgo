"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES, EDOOBOX_LINKS } from "@/lib/constants";

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  function close() {
    setIsOpen(false);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="pointer-events-auto relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
              {/* Close button */}
              <button
                onClick={close}
                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-black/40"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="relative h-56 w-full">
                <Image
                  src={IMAGES.verkehrskunde}
                  alt="Verkehrskundeunterricht"
                  fill
                  className="object-cover"
                  sizes="(max-width: 448px) 100vw, 448px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                    Aktion
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">
                  Verkehrskundeunterricht
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Jetzt zum Aktionspreis! Lerne Gefahren frühzeitig zu erkennen und
                  sicher im Strassenverkehr unterwegs zu sein.
                </p>

                {/* Pricing */}
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-2xl font-bold text-accent">CHF 150.–</span>
                  <span className="text-sm text-muted line-through">CHF 200.–</span>
                  <span className="rounded-md bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                    –25%
                  </span>
                </div>

                {/* CTA */}
                <a
                  href={EDOOBOX_LINKS.verkehrskunde}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-dark hover:scale-[1.02] active:scale-[0.98]"
                >
                  Jetzt buchen
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
