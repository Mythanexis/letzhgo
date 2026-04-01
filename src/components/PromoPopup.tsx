"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES, EDOOBOX_LINKS } from "@/lib/constants";
import { requestOpen, notifyClose } from "@/lib/popup-coordinator";

interface Promo {
  id: string;
  image: string;
  alt: string;
  badge: string;
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  detail?: string;
  ctaText: string;
  href: string;
}

export default function PromoPopup() {
  const PROMOS: Promo[] = [
    {
      id: "vku",
      image: IMAGES.vkuPopup,
      alt: "Verkehrskundeunterricht",
      badge: "Aktion",
      title: "Verkehrskundeunterricht",
      description:
        "Jetzt zum Aktionspreis! Lerne Gefahren frühzeitig zu erkennen und sicher im Strassenverkehr unterwegs zu sein.",
      price: "CHF 150.–",
      oldPrice: "CHF 200.–",
      discount: "–25%",
      ctaText: "Jetzt buchen",
      href: EDOOBOX_LINKS.verkehrskunde,
    },
    {
      id: "schnupperkurs",
      image: "/images/schnupperkurs.png",
      alt: "Motorrad Schnupperkurs bei Let'ZHgo",
      badge: "Neu",
      title: "Schnupperkurs Motorrad",
      description:
        "Wir bieten dir auch wieder ab 9. Mai 2026 einen Schnupperkurs an. Minderjährige müssen in Begleitung eines Elternteils sein.",
      price: "CHF 80.–",
      detail: "Samstag, 9. Mai 2026 · 13:00 – 15:00",
      ctaText: "Jetzt anmelden",
      href: EDOOBOX_LINKS.schnupperkurs,
    },
    {
      id: "manoeverplatz",
      image: "/images/larag-areal.jpg",
      alt: "LARAG-Areal Rümlang – Manöverplatz",
      badge: "Wieder offen",
      title: "Manöverplatz",
      description:
        "Der Manöverplatz ist ab 25.03.2026 wieder offen. Jeden Mittwoch von 19:00 – 21:00 Uhr auf dem LARAG-Areal in Rümlang.",
      price: "CHF 50.–",
      detail: "Jeden Mittwoch · 19:00 – 21:00 Uhr",
      ctaText: "Standort öffnen",
      href: "https://www.google.com/maps/search/?api=1&query=Riedgrabenstrasse+26+8153+Rümlang",
    },
  ];

  const INITIAL_DELAY_MS = 5000;
  const NEXT_POPUP_DELAY_MS = 30000;

  const [order, setOrder] = useState<number[]>([]);
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const tryOpen = () => {
    if (requestOpen("promo")) {
      setIsOpen(true);
    } else {
      timerRef.current = setTimeout(tryOpen, 30_000);
    }
  };

  useEffect(() => {
    const shuffled = PROMOS.map((_, i) => i).sort(() => Math.random() - 0.5);
    setOrder(shuffled);
    timerRef.current = setTimeout(tryOpen, INITIAL_DELAY_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  function close() {
    setIsOpen(false);
    notifyClose("promo");
    const hasNext = currentPromoIndex < order.length - 1;
    if (hasNext) {
      timerRef.current = setTimeout(tryOpen, NEXT_POPUP_DELAY_MS);
    }
  }

  if (!order.length) return null;
  const promo = PROMOS[order[currentPromoIndex]];

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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pb-[max(1rem,env(safe-area-inset-bottom))] pointer-events-none"
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
                  src={promo.image}
                  alt={promo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 448px) 100vw, 448px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                    {promo.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">
                  {promo.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {promo.description}
                </p>

                {/* Pricing */}
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-2xl font-bold text-accent">{promo.price}</span>
                  {promo.oldPrice && (
                    <span className="text-sm text-muted line-through">{promo.oldPrice}</span>
                  )}
                  {promo.discount && (
                    <span className="rounded-md bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                      {promo.discount}
                    </span>
                  )}
                </div>
                {promo.detail && (
                  <p className="mt-2 text-xs font-medium text-muted">{promo.detail}</p>
                )}

                {/* CTA */}
                <a
                  href={promo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-dark hover:scale-[1.02] active:scale-[0.98]"
                >
                  {promo.ctaText}
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
