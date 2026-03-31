"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const TIKTOK_PROFILE = "https://www.tiktok.com/@letzhgofahrschule";

const VIDEOS = [
  { id: "7620047007863852310", thumbnail: "/images/tiktok/tiktok-1.jpg" },
  { id: "7620025239073721622", thumbnail: "/images/tiktok/tiktok-2.jpg" },
  { id: "7472347387600620822", thumbnail: "/images/tiktok/tiktok-3.jpg" },
  { id: "7332247172097772832", thumbnail: "/images/tiktok/tiktok-4.jpg" },
  { id: "7616746043740261654", thumbnail: "/images/tiktok/tiktok-5.jpg" },
  { id: "7611119346043178262", thumbnail: "/images/tiktok/tiktok-6.jpg" },
];

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z" />
    </svg>
  );
}

export default function TikTokSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const closeModal = useCallback(() => setActiveVideo(null), []);

  return (
    <>
      <section className="relative overflow-hidden bg-[#f7f8fa]">
        <motion.div
          className="pointer-events-none absolute left-12 top-10 hidden md:block"
          initial={{ opacity: 0, y: -16, rotate: -4 }}
          whileInView={{ opacity: 1, y: 0, rotate: -10 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="relative h-24 w-24">
            <Image
              src="/images/tiktok/tiktok.png"
              alt=""
              fill
              className="object-contain opacity-90 drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
              sizes="96px"
            />
          </div>
        </motion.div>
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-14 flex flex-col items-center text-center"
          >
            <div className="flex items-center gap-3">
              <TikTokIcon className="h-8 w-8 text-foreground md:h-10 md:w-10" />
              <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Folge uns auf TikTok
              </h2>
            </div>
            <a
              href={TIKTOK_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-lg text-muted transition-colors hover:text-accent"
            >
              @letzhgofahrschule
            </a>
          </motion.div>

          <div className="mx-auto grid max-w-4xl grid-cols-3 gap-4 md:gap-5">
            {VIDEOS.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, margin: "-40px" }}
              >
                <button
                  type="button"
                  onClick={() => setActiveVideo(video.id)}
                  className="group relative block aspect-[9/16] w-full overflow-hidden rounded-xl bg-neutral-900 shadow-sm transition-shadow hover:shadow-xl"
                >
                  <Image
                    src={video.thumbnail}
                    alt="TikTok Video"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg">
                      <svg className="ml-1 h-6 w-6 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a
              href={TIKTOK_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:opacity-90"
            >
              Alle Videos anzeigen
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[400px]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeModal}
                className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110"
              >
                <svg className="h-5 w-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="overflow-hidden rounded-xl">
                <iframe
                  src={`https://www.tiktok.com/embed/v2/${activeVideo}?lang=de`}
                  className="h-[80vh] max-h-[740px] w-full"
                  allowFullScreen
                  allow="encrypted-media"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
