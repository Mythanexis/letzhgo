import Image from "next/image";
import Link from "next/link";
import { SITE, IMAGES, EDOOBOX_LINKS } from "@/lib/constants";

const FOOTER_LINKS = {
  Kurse: [
    { label: "Nothelferkurs", href: "/services/nothelferkurs" },
    { label: "Verkehrskunde", href: "/services/verkehrskunde" },
    { label: "Motorrad-Grundkurs", href: "/services/motorrad" },
    { label: "Fahrstunden", href: "/services/fahrstunden" },
  ],
  Anmeldung: [
    { label: "Nothelferkurs buchen", href: EDOOBOX_LINKS.nothelferkurs, external: true },
    { label: "VKU buchen", href: EDOOBOX_LINKS.verkehrskunde, external: true },
    { label: "Motorradkurs buchen", href: EDOOBOX_LINKS.motorrad, external: true },
  ],
  Navigation: [
    { label: "Home", href: "/" },
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Services", href: "/services" },
    { label: "Kontakt", href: "/kontakt" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative w-full">
      <Image
        src={IMAGES.footerBg}
        alt=""
        fill
        className="object-cover brightness-[0.2]"
        sizes="100vw"
      />

      <div className="relative z-10">
        <div className="mx-auto grid max-w-7xl gap-16 px-8 py-20 md:px-16 lg:grid-cols-2">
          {/* Left: CTA */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Let&apos;s go
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
              Bereit für deinen
              <br />
              Führerschein?
            </h2>
            <p className="mt-6 max-w-md text-white/60">
              Starte jetzt mit dem passenden Kurs – Nothelfer, Verkehrskunde
              oder Fahrstunden. Wir begleiten dich Schritt für Schritt bis zur
              Prüfung.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/kontakt"
                className="rounded-full bg-accent px-8 py-3 font-medium text-white transition-colors hover:bg-accent-dark"
              >
                Jetzt starten
              </Link>
              <a
                href={`mailto:${SITE.email}`}
                className="rounded-full border border-white/20 px-8 py-3 font-medium text-white transition-colors hover:bg-white/10"
              >
                {SITE.email}
              </a>
            </div>
          </div>

          {/* Right: Link columns */}
          <div className="grid gap-10 sm:grid-cols-3">
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category}>
                <p className="text-sm font-semibold uppercase tracking-widest text-white/40">
                  {category}
                </p>
                <ul className="mt-5 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      {"external" in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-white/70 transition-colors hover:text-white"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-white/70 transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 py-6 md:flex-row md:px-16">
            <span className="text-sm text-white/40">
              © {new Date().getFullYear()} {SITE.name} · Fahrschule Zürich
            </span>
            <span className="text-sm text-white/40">
              Designed with passion
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
