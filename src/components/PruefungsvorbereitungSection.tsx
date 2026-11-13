"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnim } from "@/hooks/useScrollAnim";
import WegweiserHomeTeaser from "@/components/WegweiserHomeTeaser";
import { EDOOBOX_LINKS } from "@/lib/constants";

const VORMITTAG = [
  "Grundmanöver, wie sie an der Prüfung verlangt werden",
  "Bremsen aus verschiedenen Geschwindigkeiten",
  "Korrektur deiner Fahrtechnik durch den Fahrlehrer",
];

const NACHMITTAG = [
  "Prüfungsrelevante Strecke im Verkehr",
  "Kurvenfahren mit Blickführung und Linienwahl",
  "Typische Fehler, die an der Prüfung Punkte kosten",
];

function Points({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex flex-col gap-2 text-base leading-relaxed text-muted">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PruefungsvorbereitungSection() {
  const anim = useScrollAnim();

  return (
    <section className="bg-background" aria-labelledby="pruefungsvorbereitung-heading">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_380px] md:gap-20 lg:grid-cols-[minmax(0,1fr)_440px]">
          {/* Text */}
          <div className="max-w-2xl">
            <motion.div {...anim({ y: 28, duration: 0.9 })}>
              <h2
                id="pruefungsvorbereitung-heading"
                className="text-3xl font-bold leading-tight text-foreground md:text-4xl"
              >
                Prüfungsvorbereitung Motorrad
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Du hast den Grundkurs abgeschlossen und möchtest dich optimal
                auf die praktische Motorradprüfung vorbereiten? In unserem
                Tageskurs frischen wir dein Wissen auf, verbessern deine
                Fahrtechnik und stärken dein Selbstvertrauen, damit du am
                Prüfungstag souverän und sicher unterwegs bist.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Der Kurs dauert einen Tag. Am Vormittag arbeiten wir auf dem
                Übungsplatz, am Nachmittag geht es auf die Strasse.
              </p>
            </motion.div>

            <motion.div {...anim({ y: 24, delay: 0.1, duration: 0.8 })}>
              <h3 className="mt-12 text-xl font-bold text-foreground md:text-2xl">
                Vormittag: Grundmanöver und Bremsen
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Auf dem Platz gehen wir die Manöver durch, die an der Prüfung
                verlangt werden, und üben das Bremsen, bis es sitzt.
              </p>
              <Points items={VORMITTAG} />
            </motion.div>

            <motion.div {...anim({ y: 24, delay: 0.1, duration: 0.8 })}>
              <h3 className="mt-12 text-xl font-bold text-foreground md:text-2xl">
                Nachmittag: Praxis auf der Strasse
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Im Verkehr fährst du die prüfungsrelevante Strecke und erlebst
                alle Situationen, die am Prüfungstag auf dich zukommen.
              </p>
              <Points items={NACHMITTAG} />
            </motion.div>

            <motion.div {...anim({ y: 24, delay: 0.1, duration: 0.8 })}>
              <p className="mt-12 text-base leading-relaxed text-muted">
                Begleitet wirst du von unserem Motorrad-Team. Wir wünschen dir
                kein Glück zur Prüfung, wir wünschen dir viel Erfolg. Denn
                Glück braucht nur, wer nicht gelernt hat.
              </p>
              <a
                href={EDOOBOX_LINKS.motorrad}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-8 inline-flex items-center gap-2 pb-0.5 text-base font-semibold text-accent no-underline transition-colors after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] after:content-[''] hover:text-accent-dark hover:after:scale-x-100"
              >
                Tageskurs buchen
                <span
                  aria-hidden
                  className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </motion.div>
          </div>

          {/* Bild und Fakten, rechts und beim Scrollen mitlaufend */}
          <motion.div {...anim({ y: 28, delay: 0.1, duration: 0.9 })} className="md:pt-2">
            <div className="md:sticky md:top-32">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_18px_40px_-24px_rgba(8,26,58,0.35)]">
                <Image
                  src="/images/motorrad-team.jpg"
                  alt="Das Motorrad-Team von Let'ZHgo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, 440px"
                />
              </div>

              <dl className="mt-8 divide-y divide-border border-t border-border">
                <div className="grid grid-cols-[120px_1fr] gap-4 py-4">
                  <dt className="text-sm text-muted">Dauer</dt>
                  <dd className="text-base text-foreground">1 Tag, Vormittag und Nachmittag</dd>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-4 py-4">
                  <dt className="text-sm text-muted">Voraussetzung</dt>
                  <dd className="text-base text-foreground">Abgeschlossener Motorrad-Grundkurs</dd>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-4 py-4">
                  <dt className="text-sm text-muted">Anmeldung</dt>
                  <dd className="text-base text-foreground">Online über unsere Kursplattform</dd>
                </div>
              </dl>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 md:mt-32">
          <WegweiserHomeTeaser />
        </div>
      </div>
    </section>
  );
}
