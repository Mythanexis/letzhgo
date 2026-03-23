"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/Breadcrumbs";

const WERDEGANG = [
  { year: "2025", text: "Weiterbildung ChatGPT und andere KI-Systeme: Anwendungsbereiche & Potenziale" },
  { year: "2024", text: "Weiterbildung Fahrassistenzsysteme, Risikodialoge und andere Aktualisierungen im VKU" },
  { year: "2023", text: "Weiterbildung Erkenntnisse der Lern- und Motivationspsychologie nutzen" },
  { year: "2022", text: "Weiterbildung Strategien zur Überwindung von Prüfungsangst" },
  { year: "2021", text: "Weiterbildung Sicheres Kurven Fahren" },
  { year: "2020", text: "Etliche Tests alle vielen zum Glück negativ (Corona)" },
  { year: "2019", text: "Weiterbildung Kommunikation als Erfolgskontrolle" },
  { year: "2018", text: "Weiterbildung Sensibilisierung des Gefahrenbewusstseins" },
  { year: "2017", text: "Weiterbildung Grundlagen der Ladungssicherung" },
  { year: "2016", text: "Motorradfahrlehrer-Ausbildner" },
  { year: "2015", text: "Fahrlehrer-Ausbildner, Titel «Topfahrlehrer 2014», TV Serie SAT 1 «Die Fahrschüler»" },
  { year: "2014", text: "Ausbildung zum Motorbootfahrlehrer, Titel «Topfahrlehrer 2013»" },
  { year: "2013", text: "Titel «Superfahrlehrer 2012»" },
  { year: "2012", text: "Ausbildung zum Motorradfahrlehrer" },
  { year: "2011", text: "SVEB-zertifizierter Erwachsenenbildner, ASTRA-zertifizierter Nothilfeinstruktor" },
  { year: "2010", text: "Fahrlehrer mit eidg. Fachausweis" },
  { year: "2008", text: "Ausbildung zum Fahrlehrer mit eidg. Fachausweis" },
  { year: "1999", text: "Selbstständiger Transportunternehmer" },
  { year: "1998", text: "Motorradprüfung" },
  { year: "1997", text: "Car- und Taxiprüfung" },
  { year: "1996", text: "Motorbootprüfung, Lehrlingsausbildner" },
  { year: "1994", text: "Lastwagen- und Anhänger-Prüfung" },
  { year: "1993", text: "Autoprüfung" },
  { year: "1991", text: "Chauffeur Lehre bei Eberhard Bau AG" },
];

export default function GianniPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-32 pb-20 md:px-16">
      <div className="mb-10">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Fahrlehrer:innen", href: "/#fahrlehrer" },
          { label: "Gianni Sebestin" },
        ]} />
      </div>

      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        {/* Left: Content */}
        <div className="lg:col-span-3">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">Gianni Sebestin</h1>
            <p className="mt-3 text-lg text-muted">Fahrlehrer für Auto, Motorrad und Anhänger, Fahrlehrer-Ausbildner</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="mt-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent">Fachgebiet</p>
                <p className="mt-2 text-foreground">Fahrlehrer für Auto, Motorrad und Anhänger, Fahrlehrer-Ausbildner</p>
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent">Geburtstag</p>
                <p className="mt-2 text-foreground">24.09.1975</p>
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent">Hobbys</p>
                <p className="mt-2 text-foreground">Snowboarden, Autos, Motorrad, Lastwagen, Boot, Arbeiten</p>
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent">Kontakt</p>
                <a href="tel:+41794340966" className="mt-2 block text-foreground hover:text-accent transition-colors">+41 79 434 09 66</a>
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent">Sprachen</p>
                <p className="mt-2 text-foreground">Deutsch, Englisch</p>
              </div>
            </div>

            <a href="https://wa.me/41794340966" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1fb855]">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.553 4.114 1.519 5.847L.525 23.503a.5.5 0 00.607.601l5.771-1.473A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82c-1.88 0-3.66-.5-5.19-1.41l-.36-.22-3.77.99 1.01-3.68-.24-.38A9.8 9.8 0 012.18 12c0-5.42 4.4-9.82 9.82-9.82 5.42 0 9.82 4.4 9.82 9.82 0 5.42-4.4 9.82-9.82 9.82z" /></svg>
              Auf WhatsApp schreiben
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="mt-16">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Werdegang</h2>
            <div className="mt-8 space-y-0 border-l-2 border-accent/20 pl-8">
              {WERDEGANG.map((item, i) => (
                <div key={i} className="relative pb-8 last:pb-0">
                  <div className="absolute -left-[41px] top-0.5 h-4 w-4 rounded-full border-2 border-accent bg-white" />
                  <p className="text-sm font-semibold text-accent">{item.year}</p>
                  <p className="mt-1 text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="mt-12">
            <div className="w-44">
              <Image src="/images/qr-gianni.png" alt="QR Code Gianni Sebestin" width={200} height={200} className="w-full" />
            </div>
            <div className="mt-3 w-36">
              <Image src="/images/scan-mich.png" alt="Scan mich – Meine Kontaktdaten" width={200} height={60} className="w-full" />
            </div>
          </div>

          <Link href="/#fahrlehrer" className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-dark">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Zurück zur Übersicht
          </Link>
        </div>

        {/* Right: Sticky images */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.3 }} className="lg:col-span-2">
          <div className="lg:sticky lg:top-28 space-y-5">
            <div className="overflow-hidden rounded-2xl">
              <Image src="/images/gianni-portrait.png" alt="Gianni Sebestin am Auto" width={600} height={400} className="w-full object-cover" priority />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image src="/images/gianni-moto.png" alt="Gianni Sebestin mit Motorrad" width={600} height={400} className="w-full object-cover" priority />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
