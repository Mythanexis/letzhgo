"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnim } from "@/hooks/useScrollAnim";

const AVATAR_IMAGES = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
];

export default function CTABanner({ className }: { className?: string }) {
  const anim = useScrollAnim();
  return (
    <section className={className ?? "bg-background"}>
      <div className="px-6 py-24 md:px-16 md:py-32 lg:px-24 xl:px-32">
        <div className="flex flex-col justify-between gap-16 lg:flex-row lg:items-center">
          {/* Left */}
          <motion.div {...anim({ y: 30, delay: 0.1, duration: 1 })} className="lg:flex-1">
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
            {...anim({ y: 30, delay: 0.25, duration: 1 })}
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
                      className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-background"
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-foreground text-[10px] font-semibold text-white">
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
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.instagram.com/letzhgo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent transition-opacity hover:opacity-70"
                  aria-label="Let'ZHgo auf Instagram"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/LetZHgo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent transition-opacity hover:opacity-70"
                  aria-label="Let'ZHgo auf Facebook"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@letzhgofahrschule"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent transition-opacity hover:opacity-70"
                  aria-label="Let'ZHgo auf TikTok"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48.04 2.96.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36 0-4.54-.01-9.09.02-13.62z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@letzhgo9343"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent transition-opacity hover:opacity-70"
                  aria-label="Let'ZHgo auf YouTube"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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
