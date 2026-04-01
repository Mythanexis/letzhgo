export default function ImpressumPage() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(920px 520px at 12% 18%, rgba(30, 99, 255, 0.12), transparent 60%), radial-gradient(860px 560px at 85% 75%, rgba(30, 99, 255, 0.1), transparent 62%), linear-gradient(180deg, rgba(30, 99, 255, 0.05), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Rechtliches
        </p>
        <h1 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
          Impressum
        </h1>

        <div className="mt-12 space-y-12 text-muted">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                KONTAKT-ADRESSE
              </h2>
              <p>
                Let’ZHgo! Fahrschule
                <br />
                Binzmühlestrasse 15
                <br />
                CH-8050 Zürich
                <br />
                Schweiz
              </p>
              <p>
                Telefon: +41 43 300 14 55
                <br />
                E-Mail: info@letzhgo.ch
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                VERTRETUNGSBERECHTIGTE PERSON(EN)
              </h2>
              <p>
                Gianni Sebestin
                <br />
                Telefon: +41 79 434 09 66
                <br />
                E-Mail: gianni@letzhgo.ch
              </p>
              <p>
                Samir Radič
                <br />
                Telefon: +41 78 888 88 99
                <br />
                E-Mail: samir@letzhgo.ch
              </p>
              <p>
                Domagoj Caleta
                <br />
                Telefon: +41 79 338 80 32
                <br />
                E-Mail: doma@letzhgo.ch
              </p>
              <p>
                Tomislav Caleta
                <br />
                Telefon: +41 76 430 31 01
                <br />
                E-Mail: tomi@letzhgo.ch
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                MEHRWERTSTEUER-NUMMER
              </h2>
              <p>CHE-105.168.305 (Gianni Sebestin)</p>
              <p>CHE-307.336.916 (Domagoj Caleta)</p>

              <p>CHE-112.384.587 (Samir Radič)</p>
              <p>CHE-249.988.596 (Tomislav Caleta)</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">GOOGLE FONTS</h2>
              <p>
                Diese Website verwendet Google Fonts, um eine Vielzahl von
                Schriftarten anzubieten. Google Fonts ist eine kostenlose und
                Open-Source-Schriftbibliothek, die von Google bereitgestellt
                wird.
              </p>
              <p>
                Um die Privatsphäre unserer Besucher zu schützen, haben wir die
                Google Fonts lokal auf unserem Server gespeichert. Dies bedeutet,
                dass keine Daten an Google gesendet werden, wenn Sie unsere
                Website besuchen.
              </p>
              <p>
                Die von uns verwendeten Google Fonts sind für den kommerziellen
                Gebrauch unter den Bedingungen der Google Fonts-Lizenz
                freigegeben. Diese Lizenz erlaubt es Ihnen, die Schriftarten in
                Ihren eigenen kommerziellen Produkten und Dienstleistungen zu
                verwenden.
              </p>
            </section>
          </div>
      </div>
    </section>
  );
}
