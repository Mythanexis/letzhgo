"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { EDOOBOX_LINKS, WEGWEISER_MOTORRAD_IMAGES } from "@/lib/constants";
import Breadcrumbs from "@/components/Breadcrumbs";

interface StepContent {
  id: string;
  title: string;
  description: string[];
  note?: string;
  cta?: { label: string; href: string };
}

const STEPS_RAW: StepContent[] = [
  {
    id: "01",
    title: "Nothelfer Kurs",
    description: [
      "Bevor Du das Lernfahrgesuch beim Strassenverkehrsamt einreichen kannst, musst Du unter anderem einen Nothilfekurs absolvieren. Falls Du bereits im Besitz eines Nothelferausweises bist, ist dieser ab Ausstellungsdatum 6 Jahre gültig.",
    ],
    note: "Nicht notwendig für Inhaber der Kategorie B (Auto), weiter mit Schritt 2",
    cta: { label: "Jetzt anmelden", href: EDOOBOX_LINKS.nothelferkurs },
  },
  {
    id: "02",
    title: "Lernfahrgesuch",
    description: [
      "Fülle das Lernfahrgesuch vollständig und wahrheitsgetreu aus und geh damit zu einem Optiker oder Augenarzt, um den Sehtest eintragen zu lassen. Anschliessend mit dem ausgefüllten Anmeldeformular, Nothilfeausweis, einem farbigen Passfoto und ID/Pass persönlich beim Strassenverkehrsamt oder bei der Einwohnerkontrolle vorbeigehen.",
      "Neue Regeln ab 01.01.21:\n• Kategorie A1 bis maximal 50ccm, 45km/h und 4kW ab 15 Jahren\n• Kategorie A1 bis maximal 125ccm ab 16 Jahren\n• Kategorie A beschränkt bis 35kW ab 18 Jahren\n• Kategorie A unbeschränkt ab 35kW – 2 Jahre Fahrpraxis mit A beschränkt und 2. Fahrprüfung",
    ],
    cta: {
      label: "Lernfahrgesuch für Zürich",
      href: "https://www.zh.ch/de/mobilitaet/fuehrerausweis-fahren-lernen/fahren-lernen/anmeldung-lernfahrer.html",
    },
  },
  {
    id: "03",
    title: "Theorieprüfung",
    description: [
      "Nach erfolgter Anmeldung erhältst Du eine Bestätigung mit PIN-Code, mit dem Du dich an die Theorieprüfung anmelden kannst. Um sich optimal vorzubereiten, empfehlen wir Dir mit einem Theoriebuch zu lernen und anschliessend die Fragen mit einer Lern-CD oder App zu üben.",
      "Nimm Dir genügend Zeit zum Lernen, aber auch nicht so viel, dass Du Zeit hast das Gelernte wieder zu vergessen. Teile Dir das Lernen ein und mach einen Zeitplan. Falls dann noch Fragen offen sind, kontaktiere uns einfach für Theorie-Einzellektionen. Denn eine solide theoretische Grundlage spart Fahrstunden!",
    ],
    note: "Nicht notwendig für Inhaber der Kategorie B (Auto), weiter mit Schritt 5 Fahrstunden.",
  },
  {
    id: "04",
    title: "Verkehrskunde VKU",
    description: [
      "Im total achtstündigen Verkehrskundekurs VKU wirst Du von unseren Fahrlehrern ausführlich auf den Alltag im Strassenverkehr vorbereitet. Der Abschluss des Verkehrskundekurses VKU ist obligatorisch und Voraussetzung, um sich bei der praktischen Führerprüfung anmelden zu können.",
      "Wir empfehlen Dir den Verkehrskundekurs VKU gleich zu Beginn der praktischen Fahrausbildung zu besuchen, da Du das erlernte Wissen direkt in den Motorradfahrstunden umsetzen kannst.",
    ],
    cta: { label: "Anmeldung Verkehrskunde VKU", href: EDOOBOX_LINKS.verkehrskunde },
  },
  {
    id: "05",
    title: "Fahrstunden",
    description: [
      "Wir empfehlen Dir die ersten Fahrstunden gleich zu Beginn beim Fahrlehrer in Angriff zu nehmen.",
      "Wir stellen Dir für die Erstlektion kostenlos eine Kawasaki Z650 von hostettler moto ag, Klotenerstrasse 10, 8153 Rümlang zur Verfügung.",
      "Für die Prüfungsvorbereitung macht es Sinn Dir Deinen Feinschliff ebenfalls beim Fahrlehrer zu holen. So wirst Du ein sicherer Motorradfahrer oder eine sichere Motorradfahrerin und bestehst die Fahrprüfung beim ersten Versuch.",
      "Denk daran, solange Du mit dem Lernfahrausweis unterwegs bist, darfst Du nur Leute hinten auf dem Motorrad mitnehmen, die selber bereits im Besitz des Führerausweises der gleichen Kategorie oder höher sind.",
    ],
    cta: { label: "Anmeldung Motorradkurse", href: EDOOBOX_LINKS.motorrad },
  },
  {
    id: "06",
    title: "Grundkurs",
    description: [
      "In den ersten vier Monaten musst Du den Grundkurs absolvieren. Danach wird dein Lernfahrausweis um weitere 12 Monate verlängert, in denen Du die Fahrprüfung bestehen musst (Aufgepasst! Zwischen Anfangs/Mitte November und Anfangs/Mitte März finden keine Fahrprüfungen statt). Wir führen monatlich Grundkurse durch. Eine Doppellektion kostet bei uns CHF 180.-.",
      "Wir bieten auch bei einem Neukauf eines Motorrads eine Erstlektion, wo wir den Töff erklären, ins Industriequartier fahren und den Schüler fahren lassen.",
      "Der Grundkurs dauert im Normalfall 3 x 4h. Bist du bereits im Besitz der Kategorie A1 (ohne 45km/h Beschränkung), dann musst Du nur den 3. Kursteil besuchen. Bitte bei der Anmeldung entsprechend auswählen. Bist Du allerdings noch nie mit einem geschalteten Motorrad gefahren, empfehlen wir dir für die ersten Fahrversuche 1-2 Fahrlektionen beim Fahrlehrer zu machen. Da Du sehr viel lernen kannst und danach ein viel sicherer Motorradfahrer oder eine deutlich sicherere Motorradfahrerin bist, empfehlen wir ebenfalls alle 3 Kursteile zu besuchen.",
    ],
    cta: { label: "Anmeldung Motorradkurse", href: EDOOBOX_LINKS.motorrad },
  },
  {
    id: "07",
    title: "Praktische Prüfung",
    description: [
      "Um die praktische Führerprüfung zu bestehen, braucht es heute mehr denn je. Trotz diesen hohen Anforderungen, hast Du mit einer seriösen und umfangreichen Fahrausbildung gute Erfolgschancen die Führerprüfung beim 1. Versuch souverän zu bestehen. Die Motorrad-Fahrprüfung beginnt in der Regel mit dem Manöverteil wie z.B. Spurgasse, versetzter Slalom und die 8-fahren.",
      "Anschliessend möchte der Verkehrsexperte sehen, wie Du dein Motorrad von 50km/h möglichst schnell und sicher zum Stillstand bringst. Anschliessend musst Du bei der Kategorie A35kW oder A unlimitiert noch beweisen, dass auch eine zweite Person auf deinem Motorrad und gleichzeitig im Strassenverkehr unterwegs zu sein, kein Problem für dich darstellt. Bei der Kategorie A1 bis maximal 125ccm und 11kW fahren die Experten mit eigenem Fahrzeug hinter dir her und wenn Du bereits im Besitz des Führerausweises der Kategorie B Auto bist, dann erhältst Du jene Kategorie sogar prüfungsfrei.",
      "Über die Anforderungen an das Prüfungsfahrzeug und die Sicherheitskleider, findet Ihr Informationen dazu auf der Zürcher Strassenverkehrsamt-Seite.",
    ],
    note: "Tipp: Übt mit Sicherheitskleidern! So habt ihr ein besseres Gefühl!",
    cta: { label: "Anmeldung Motorradkurse", href: EDOOBOX_LINKS.motorrad },
  },
  {
    id: "08",
    title: "Weiterausbildung",
    description: [
      "Wie überall im Leben hat man auch beim Motorrad fahren nie ausgelernt. Mehrmals im Jahr veranstalten wir Events und Trainings-Lektionen bei denen Du deine Fähigkeiten vertiefen kannst. Hast Du Interesse, dann kontaktiere uns völlig unverbindlich.",
    ],
    cta: { label: "Kontakt aufnehmen", href: "/kontakt" },
  },
];

const STEPS = STEPS_RAW.map((step, i) => ({
  ...step,
  image: WEGWEISER_MOTORRAD_IMAGES.steps[i]!,
}));

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function WegweiserMotorradFuehrerscheinPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[55vh] min-h-[380px] items-end overflow-hidden">
        <Image
          src={WEGWEISER_MOTORRAD_IMAGES.pageHero}
          alt="Wegweiser Motorrad-Führerschein – Wegweiser-Schild und Motorradfahrer in den Bergen"
          fill
          className="object-cover object-[32%_center] brightness-[0.38] max-md:object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative z-10 max-w-4xl px-8 pb-12 md:px-16 md:pb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium uppercase tracking-widest text-accent"
          >
            Motorrad
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-3 text-4xl font-bold text-white md:text-6xl"
          >
            Wegweiser Motorrad-Führerschein
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
          >
            Oft fragen uns Mütter, wie ihr Kind bei uns die Motorrad-Prüfung
            absolvieren kann? Wir haben einen Wegweiser erstellt, in dem die
            Abläufe zusammengefasst sind.
          </motion.p>
        </div>
      </section>

      {/* Breadcrumbs + Steps */}
      <main className="w-full pb-16 md:pb-24">
        <div className="px-6 pt-10 pb-6 sm:px-10 md:px-14 xl:px-20">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Wegweiser Motorrad-Führerschein" },
            ]}
          />
        </div>

        <div>
          {STEPS.map((step, index) => (
            <motion.article
              key={step.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`grid w-full grid-cols-1 lg:grid-cols-2 lg:min-h-[min(520px,75vh)] ${
                index % 2 === 0 ? "bg-background" : "bg-[#f7f8fa]"
              }`}
            >
              {/* Text column – always left */}
              <motion.div
                variants={slideInLeft}
                className="flex flex-col justify-center px-6 py-10 sm:px-10 md:px-14 lg:order-1 lg:py-14 xl:px-20"
              >
                <motion.p
                  variants={fadeUp}
                  custom={0.1}
                  className="text-sm font-semibold uppercase tracking-widest text-accent"
                >
                  Schritt {step.id}
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  custom={0.15}
                  className="mt-3 text-2xl font-bold text-foreground md:text-3xl"
                >
                  {step.title}
                </motion.h2>

                <motion.div variants={fadeUp} custom={0.25} className="mt-5 space-y-4">
                  {step.description.map((paragraph, pIdx) => (
                    <p
                      key={pIdx}
                      className="whitespace-pre-line text-base leading-relaxed text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </motion.div>

                {step.note && (
                  <motion.p
                    variants={fadeUp}
                    custom={0.35}
                    className="mt-5 rounded-xl border border-accent/20 bg-accent/5 px-5 py-3 text-sm font-medium text-accent"
                  >
                    {step.note}
                  </motion.p>
                )}

                {step.cta && (
                  <motion.div variants={fadeUp} custom={0.4} className="mt-8">
                    <Link
                      href={step.cta.href}
                      target={step.cta.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        step.cta.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-accent-dark"
                    >
                      {step.cta.label}
                    </Link>
                  </motion.div>
                )}
              </motion.div>

              {/* Image column – always right */}
              <motion.div
                variants={slideInRight}
                className="relative h-full min-h-[260px] w-full lg:order-2 lg:min-h-0"
              >
                <Image
                  src={step.image}
                  alt={`${step.title} – Schritt ${step.id}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={index === 0}
                />
              </motion.div>
            </motion.article>
          ))}
        </div>
      </main>
    </>
  );
}
