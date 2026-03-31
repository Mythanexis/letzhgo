export default function AgbPage() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(820px 520px at 10% 18%, rgba(30, 99, 255, 0.1), transparent 60%), radial-gradient(860px 560px at 85% 78%, rgba(30, 99, 255, 0.12), transparent 62%), linear-gradient(180deg, rgba(30, 99, 255, 0.05), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Rechtliches
        </p>
        <h1 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
          AGB
        </h1>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted">
            <p>
              Der Lernfahrausweis ist auf jeder Lernfahrt mitzuführen und ohne
              Aufforderung, zu Beginn der Lernfahrt vorzuweisen, ansonsten können
              keine Lernfahrten absolviert werden, Vermerkte Auflagen müssen
              eingehalten werden, ansonsten können keine Lernfahrten absolviert
              werden!
            </p>
            <p>
              Kosten für Fahrlektionen oder Abonnement sind im Voraus bar, mit
              MasterCard, Visa, Maestro, American Express oder EC zu begleichen,
              ebenso die einmalige Fahrschulversicherung. Prüfungsfahrten und
              dabei anfallende Wartezeiten sind Kostenpflichtig.
            </p>
            <p>
              Vereinbarte Fahrlektionen müssen mindestens 48 Stunden im Voraus
              abgemeldet werden, ansonsten müssen diese verrechnet werden.
            </p>
            <p>
              Lernfahrten dürfen nur in fahrfähigem Zustand absolviert werden.
              Jeder Grund der die Fahrfähigkeit ausschliesst, ist vor Beginn der
              Lernfahrt zu melden. Gründe für eine Fahrunfähigkeit sind; Alkohol
              Drogen, Medikamente, Bewegungseinschränkungen, Unwohlsein und
              andere medizinische Gründe.
            </p>
          </div>
      </div>
    </section>
  );
}
