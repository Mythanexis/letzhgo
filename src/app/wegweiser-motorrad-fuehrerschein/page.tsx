"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import { IMAGES, EDOOBOX_LINKS } from "@/lib/constants";

const STEPS = [
  {
    id: 1,
    title: "Nothelfer Kurs",
    image: IMAGES.nothelferkurs,
    description: [
      "Bevor Du das Lernfahrgesuch beim Strassenverkehrsamt einreichen kannst, musst Du unter anderem einen Nothelferkurs absolvieren.",
      "Falls Du bereits im Besitz eines Nothelferausweises bist, ist dieser ab Ausstellungsdatum 6 Jahre gültig.",
      "Nicht notwendig für Inhaber der Kategorie B (Auto), weiter mit Schritt 2.",
    ],
    ctaLabel: "Jetzt anmelden",
    ctaHref: EDOOBOX_LINKS.nothelferkurs,
  },
  {
    id: 2,
    title: "Lernfahrgesuch",
    image: IMAGES.autoFahrstunden,
    description: [
      "Fülle das Lernfahrgesuch vollständig und wahrheitsgetreu aus und geh damit zu einem Optiker oder Augenarzt, um den Sehtest eintragen zu lassen.",
      "Anschliessend mit dem ausgefüllten Anmeldeformular, Nothelferausweis, einem farbigen Passfoto und ID/Pass persönlich beim Strassenverkehrsamt oder bei der Einwohnerkontrolle vorbeigehen.",
      "Neue Regeln ab 01.01.21:",
      "Kategorie A1 bis maximal 50ccm, 45 km/h und 4 kW ab 15 Jahren.",
      "Kategorie A1 bis maximal 125ccm ab 16 Jahren.",
      "Kategorie A beschränkt bis 35 kW ab 18 Jahren.",
      "Kategorie A unbeschränkt ab 35 kW: 2 Jahre Fahrpraxis mit A beschränkt und 2. Fahrprüfung.",
    ],
    noteLabel: "Lernfahrgesuch für Zürich",
    noteHref: "https://www.zh.ch/de/mobilitaet/fuehrerausweise-und-fahrzeuge/fuehrerausweise.html",
  },
  {
    id: 3,
    title: "Theorieprüfung",
    image: IMAGES.verkehrskunde,
    description: [
      "Nach erfolgter Anmeldung erhältst Du eine Bestätigung mit PIN-Code, mit dem Du dich an die Theorieprüfung anmelden kannst.",
      "Um dich optimal vorzubereiten, empfehlen wir Dir mit einem Theoriebuch zu lernen und anschliessend die Fragen mit einer Lern-CD oder App zu üben.",
      "Nimm Dir genügend Zeit zum Lernen, aber auch nicht so viel, dass Du Zeit hast, das Gelernte wieder zu vergessen.",
      "Teile Dir das Lernen ein und mach einen Zeitplan. Falls dann noch Fragen offen sind, kontaktiere uns einfach für Theorie-Einzellektionen. Denn eine solide theoretische Grundlage spart Fahrstunden!",
      "Nicht notwendig für Inhaber der Kategorie B (Auto), weiter mit Schritt 5 Fahrstunden.",
    ],
  },
  {
    id: 4,
    title: "Verkehrskunde VKU",
    image: IMAGES.verkehrskunde,
    description: [
      "Im total achtstündigen Verkehrskundekurs VKU wirst Du von unseren Fahrlehrern ausführlich auf den Alltag im Strassenverkehr vorbereitet.",
      "Der Abschluss des Verkehrskundekurses VKU ist obligatorisch und Voraussetzung, um sich bei der praktischen Führerprüfung anmelden zu können.",
      "Wir empfehlen Dir, den Verkehrskundekurs VKU gleich zu Beginn der praktischen Fahrausbildung zu besuchen, da Du das erlernte Wissen direkt in den Fahrstunden umsetzen kannst.",
    ],
    ctaLabel: "Anmeldung Verkehrskunde VKU",
    ctaHref: EDOOBOX_LINKS.verkehrskunde,
  },
  {
    id: 5,
    title: "Fahrstunden",
    image: IMAGES.motorrad,
    description: [
      "Wir empfehlen Dir, die ersten Fahrstunden gleich zu Beginn beim Fahrlehrer in Angriff zu nehmen.",
      "Wir stellen Dir für die Erstlektion kostenlos eine Kawasaki Z650 von hostettler moto ag, Klotenerstrasse 10, 8153 Rümlang zur Verfügung.",
      "Für die Prüfungsvorbereitung macht es Sinn, Dir Deinen Feinschliff ebenfalls beim Fahrlehrer zu holen. So wirst Du ein sicherer Motorradfahrer oder eine sichere Motorradfahrerin und bestehst die Fahrprüfung beim ersten Versuch.",
      "Denk daran: Solange Du mit dem Lernfahrausweis unterwegs bist, darfst Du nur Leute hinten auf dem Motorrad mitnehmen, die selber bereits im Besitz des Führerausweises der gleichen Kategorie oder höher sind.",
    ],
    ctaLabel: "Anmeldung Motorradkurse",
    ctaHref: EDOOBOX_LINKS.motorrad,
  },
  {
    id: 6,
    title: "Grundkurs",
    image: IMAGES.motorrad,
    description: [
      "In den ersten vier Monaten musst Du den Grundkurs absolvieren. Danach wird dein Lernfahrausweis um weitere 12 Monate verlängert, in denen Du die Fahrprüfung bestehen musst (Achtung: Zwischen Anfang/Mitte November und Anfang/Mitte März finden keine Fahrprüfungen statt).",
      "Wir führen monatlich Grundkurse durch. Eine Doppellektion kostet bei uns CHF 180.-.",
      "Wir bieten auch bei einem Neukauf eines Motorrads eine Erstlektion, bei der wir dir den Töff erklären, ins Industriequartier fahren und dich fahren lassen.",
      "Der Grundkurs dauert im Normalfall 3 x 4 Stunden. Bist du bereits im Besitz der Kategorie A1 (ohne 45 km/h-Beschränkung), musst Du nur den 3. Kursteil besuchen. Bitte bei der Anmeldung entsprechend auswählen.",
      "Bist Du allerdings noch nie mit einem geschalteten Motorrad gefahren, empfehlen wir Dir für die ersten Fahrversuche 1–2 Fahrlektionen beim Fahrlehrer zu machen und ebenfalls alle 3 Kursteile zu besuchen.",
    ],
    ctaLabel: "Anmeldung Motorradkurse",
    ctaHref: EDOOBOX_LINKS.motorrad,
  },
  {
    id: 7,
    title: "Praktische Prüfung",
    image: IMAGES.motorrad,
    description: [
      "Um die praktische Führerprüfung zu bestehen, braucht es heute mehr denn je eine seriöse Vorbereitung.",
      "Trotz dieser hohen Anforderungen hast Du mit einer seriösen und umfangreichen Fahrausbildung gute Erfolgschancen, die Führerprüfung beim ersten Versuch souverän zu bestehen.",
      "Die Motorradprüfung beginnt in der Regel mit dem Manöverteil wie z.B. Spurgasse, versetzter Slalom und dem 8-Fahren.",
      "Anschliessend möchte der Verkehrsexperte sehen, wie Du dein Motorrad von 50 km/h möglichst schnell und sicher zum Stillstand bringst.",
      "Bei der Kategorie A35kW oder A unlimitiert musst Du zudem beweisen, dass auch eine zweite Person auf deinem Motorrad und gleichzeitig im Strassenverkehr unterwegs zu sein, kein Problem für dich darstellt.",
      "Bei der Kategorie A1 bis maximal 125ccm und 11 kW fahren die Experten mit eigenem Fahrzeug hinter dir her und wenn Du bereits im Besitz des Führerausweises der Kategorie B (Auto) bist, dann erhältst Du jene Kategorie sogar prüfungsfrei.",
      "Über die Anforderungen an das Prüfungsfahrzeug und die Sicherheitskleider findest Du Informationen auf der Seite des Zürcher Strassenverkehrsamts.",
      "Tipp: Übt mit Sicherheitskleidern! So habt ihr ein besseres Gefühl!",
    ],
    noteLabel: "Infos zu Prüfungsfahrzeug & Sicherheitskleider",
    noteHref: "https://www.zh.ch/de/mobilitaet/fuehrerausweise-und-fahrzeuge/fuehrerausweise/pruefung.html",
    ctaLabel: "Anmeldung Motorradkurse",
    ctaHref: EDOOBOX_LINKS.motorrad,
  },
  {
    id: 8,
    title: "Weiterausbildung",
    image: IMAGES.motorrad,
    description: [
      "Wie überall im Leben hat man auch beim Motorradfahren nie ausgelernt.",
      "Mehrmals im Jahr veranstalten wir Events und Trainingslektionen, bei denen Du deine Fähigkeiten vertiefen kannst.",
      "Hast Du Interesse, dann kontaktiere uns völlig unverbindlich.",
    ],
  },
];

export default function WegweiserMotorradFuehrerscheinPage() {
  return (
    <>
      {/* Hero-Bereich */}
      <section className="relative overflow-hidden bg-[#f7f8fa]">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.motorrad}
            alt="Motorradfahren bei Let'ZHgo"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col px-6 py-24 md:py-32 lg:flex-row lg:items-end">
          <div className="max-w-3xl text-white">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium uppercase tracking-[0.25em] text-accent"
            >
              Wegweiser
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl lg:text-6xl"
            >
              Wegweiser Motorrad-Führerschein
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
            >
              Oft fragen uns Mütter, wie ihr Kind bei uns die Motorrad-Prüfung
              absolvieren kann. Auf dieser Seite findest Du alle Schritte – vom
              ersten Kurs bis zur praktischen Prüfung – übersichtlich erklärt.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Inhalt mit Schritten */}
      <main className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-10">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Wegweiser Motorrad-Führerschein" },
            ]}
          />
        </div>

        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Der Ablauf im Überblick
          </h2>
          <p className="mt-4 text-muted">
            Wir haben einen Wegweiser erstellt, in dem die Abläufe
            zusammengefasst sind. So siehst Du auf einen Blick, welche Schritte
            wann anstehen und worauf Du achten solltest.
          </p>
        </div>

        <div className="mt-12 space-y-16">
          {STEPS.map((step) => (
            <motion.section
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-80px" }}
              className="grid gap-8 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] md:items-stretch"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                  Schritt {step.id.toString().padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl font-bold text-foreground md:text-2xl">
                  {step.title}
                </h3>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted md:text-base">
                  {step.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                {(step.ctaLabel || step.noteLabel) && (
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    {step.ctaLabel && step.ctaHref && (
                      <Link
                        href={step.ctaHref}
                        target={step.ctaHref.startsWith("http") ? "_blank" : undefined}
                        rel={step.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition-transform hover:translate-y-[-1px] hover:bg-accent-dark"
                      >
                        {step.ctaLabel}
                      </Link>
                    )}
                    {step.noteLabel && step.noteHref && (
                      <Link
                        href={step.noteHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-dark"
                      >
                        {step.noteLabel}
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M4 8h8M8 4l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                )}
              </div>

              <div className="relative min-h-[220px] md:min-h-[260px] overflow-hidden md:justify-self-end">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover object-right"
                  sizes="(min-width: 1024px) 320px, 100vw"
                />
              </div>
            </motion.section>
          ))}
        </div>
      </main>
    </>
  );
}
