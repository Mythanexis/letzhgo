"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { requestOpen, notifyClose, onRelease } from "@/lib/popup-coordinator";

const POSTERS = [
  { src: "/images/posters/verkehrskunde.png", alt: "Verkehrskundeunterricht – Montag & Dienstag 18–22 Uhr" },
  { src: "/images/posters/motorrad-grundkurs.png", alt: "Motorrad Grundkurs – Jetzt online buchen" },
  { src: "/images/posters/manoevertraining.png", alt: "Manövertraining – 25. März, LARAG-Areal Rümlang" },
];

const INITIAL_DELAY_MS = 60_000;
const NEXT_POSTER_DELAY_MS = 90_000;
const RETRY_DELAY_MS = 30_000;

export default function PosterPopup() {
  const [order, setOrder] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingRef = useRef(false);

  const tryOpen = useCallback(() => {
    if (requestOpen("poster")) {
      pendingRef.current = false;
      setIsOpen(true);
    } else {
      pendingRef.current = true;
    }
  }, []);

  useEffect(() => {
    const shuffled = POSTERS.map((_, i) => i).sort(() => Math.random() - 0.5);
    setOrder(shuffled);
    timerRef.current = setTimeout(tryOpen, INITIAL_DELAY_MS);

    const unsubscribe = onRelease(() => {
      if (pendingRef.current) {
        timerRef.current = setTimeout(tryOpen, RETRY_DELAY_MS);
      }
    });

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      unsubscribe();
    };
  }, [tryOpen]);

  const close = useCallback(() => {
    setIsOpen(false);
    notifyClose("poster");
    if (currentIndex < order.length - 1) {
      timerRef.current = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        tryOpen();
      }, NEXT_POSTER_DELAY_MS);
    }
  }, [currentIndex, order.length, tryOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  if (!order.length) return null;
  const poster = POSTERS[order[currentIndex]];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
            className="fixed inset-0 z-60 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-60 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="pointer-events-auto relative max-h-[90vh] w-auto max-w-[min(92vw,600px)]">
              <button
                onClick={close}
                className="absolute -right-2 -top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110 md:-right-3 md:-top-3"
              >
                <svg className="h-4 w-4 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <Image
                src={poster.src}
                alt={poster.alt}
                width={600}
                height={600}
                className="h-auto max-h-[85vh] w-full rounded-2xl object-contain shadow-2xl"
                sizes="(max-width: 640px) 92vw, 600px"
                priority
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
