"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Deine Fragen.
            <br />
            Beantwortet.
          </h2>
          <p className="mt-4 text-muted">
            Du bist unsicher, wie der Weg zum Führerschein genau abläuft? Hier
            findest du die wichtigsten Antworten rund um Kurse, Fahrstunden und
            Prüfung.
          </p>
        </div>

        <div className="space-y-0 divide-y divide-border">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left text-lg font-medium text-foreground transition-colors hover:text-accent"
              >
                {item.question}
                <span className="ml-4 shrink-0 text-2xl text-muted">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-muted">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
