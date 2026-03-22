"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const AVATAR_IMAGES = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
];

export default function CTABanner() {
  return (
    <section className="bg-[#f7f8fa]">
      <div className="px-8 py-24 md:px-16 md:py-32 lg:px-24 xl:px-32">
        <div className="flex flex-col justify-between gap-16 lg:flex-row lg:items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="lg:flex-1"
          >
            <h2 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Bereit für
              <br />
              <span className="text-accent">deinen Führerschein?</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Jeder Schritt ist klar strukturiert und auf dich abgestimmt –
              vom Nothelferkurs über die Verkehrskunde bis zu deinen
              Fahrstunden. Egal ob Auto, Motorrad oder Anhänger: Wir
              begleiten dich sicher bis zur Prüfung.
            </p>
            <Link
              href="/kontakt"
              className="mt-10 inline-block rounded-full bg-accent px-8 py-4 text-lg font-medium text-white transition-all hover:bg-accent-dark hover:scale-105"
            >
              Jetzt starten
            </Link>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-8 lg:mr-16 lg:max-w-xs lg:shrink-0"
          >
            {/* Reviews */}
            <div>
              <p className="text-sm text-muted">450+ zufriedene Schüler</p>
              <div className="mt-3 flex items-center">
                <div className="flex -space-x-3">
                  {AVATAR_IMAGES.map((src, i) => (
                    <div
                      key={i}
                      className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#f7f8fa]"
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                  ))}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#f7f8fa] bg-foreground text-[10px] font-semibold text-white">
                    +450
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground">
                  Excellente 5 von 5
                </span>
                <svg className="h-4 w-4 text-[#f5a623]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-sm font-semibold text-foreground">Trustindex</span>
              </div>
            </div>

            {/* Contact & Social */}
            <div>
              <p className="text-sm text-muted">
                Fragen?{" "}
                <Link href="/kontakt" className="text-accent hover:text-accent-dark">
                  Schreib uns
                </Link>{" "}
                oder folge uns auf Social Media – wir helfen dir gerne weiter.
              </p>
              <div className="mt-5 flex items-center gap-4">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent transition-opacity hover:opacity-70"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent transition-opacity hover:opacity-70"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M15 9h-2a2 2 0 00-2 2v10M9 14h6" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent transition-opacity hover:opacity-70"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="4" />
                    <path d="M10 9l5 3-5 3V9z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
