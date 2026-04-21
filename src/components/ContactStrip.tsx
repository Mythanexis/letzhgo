import Link from "next/link";

const CHANNELS = [
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "Telefon",
    value: "+41 43 300 14 55",
    href: "tel:+41433001455",
    external: false,
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.685-1.244A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.583l-.376-.228-2.786.74.754-2.704-.25-.39A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "Direkt schreiben",
    href: "https://wa.me/41794340966",
    external: true,
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
      </svg>
    ),
    label: "E-Mail",
    value: "info@letzhgo.ch",
    href: "mailto:info@letzhgo.ch",
    external: false,
  },
];

export default function ContactStrip() {
  return (
    <section className="bg-[#f7f8fa]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-20">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Kontakt
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Noch Fragen? Wir sind für dich da.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              Ruf einfach an, schreib uns auf WhatsApp oder nutze das Formular –
              wir melden uns schnell und unkompliziert.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {CHANNELS.map((ch) => (
                <a
                  key={ch.label}
                  href={ch.href}
                  {...(ch.external ? { target: "_blank", rel: "nofollow noopener noreferrer" } : {})}
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-white p-5 transition-all hover:border-accent/25 hover:shadow-md"
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/8 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    {ch.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                      {ch.label}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-foreground group-hover:text-accent">
                      {ch.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-sm transition-all hover:scale-[1.02] hover:bg-accent-dark"
            >
              Kontaktformular öffnen
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M4 8h8M9 4l4 4-4 4" />
              </svg>
            </Link>
            <p className="text-xs text-muted lg:text-right">
              Antwort meist innerhalb von wenigen Stunden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
