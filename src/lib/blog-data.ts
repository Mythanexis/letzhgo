export interface BlogSection {
  heading: string;
  text: string;
}

export interface BlogCta {
  label: string;
  href: string;
  external?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  coverImage: string;
  cta?: BlogCta;
  sections: BlogSection[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "der-weg-zum-fuehrerschein",
    title: "Der Weg zum Führerschein – Schritt für Schritt erklärt",
    excerpt:
      "Vom Nothelferkurs bis zur praktischen Prüfung: Wir zeigen dir, welche Schritte auf dem Weg zum Führerschein in der Schweiz notwendig sind.",
    category: "Ratgeber",
    readTime: "8 Min.",
    publishedAt: "2026-03-15",
    coverImage: "/images/blog/der-weg-zum-fuehrerschein.jpg",
    cta: { label: "Unsere Services entdecken", href: "/services" },
    sections: [
      {
        heading: "Der erste Schritt: Nothelferkurs",
        text: "Bevor du den Lernfahrausweis beantragen kannst, musst du einen Nothelferkurs absolvieren. Dieser Kurs dauert in der Regel zehn Stunden und vermittelt dir die Grundlagen der Ersten Hilfe. Du lernst, wie du eine Unfallstelle absicherst, Verletzte ansprichst und lebensrettende Sofortmassnahmen wie die Herz-Lungen-Wiederbelebung durchführst. Der Ausweis ist sechs Jahre gültig und ist Voraussetzung für die Anmeldung zur Theorieprüfung.",
      },
      {
        heading: "Lernfahrausweis und Theorieprüfung",
        text: "Mit dem Nothelferkurs-Zertifikat und einem aktuellen Sehtest kannst du beim Strassenverkehrsamt den Lernfahrausweis beantragen. Sobald du diesen erhalten hast, darfst du in Begleitung einer mindestens 23-jährigen Person mit drei Jahren Fahrpraxis Lernfahrten unternehmen. Parallel dazu bereitest du dich auf die Theorieprüfung vor – am besten mit einer offiziellen Lern-App und regelmässigem Üben.",
      },
      {
        heading: "Verkehrskundeunterricht (VKU)",
        text: "Der Verkehrskundeunterricht ist obligatorisch und umfasst acht Lektionen, aufgeteilt auf vier Abende. Er behandelt Themen wie Verkehrssehen, Verkehrsumwelt, Verkehrsdynamik und Verkehrstaktik. Der VKU hilft dir, Gefahren frühzeitig zu erkennen und vorausschauend zu fahren. Du kannst den VKU erst besuchen, wenn du den Lernfahrausweis besitzt.",
      },
      {
        heading: "Fahrstunden und praktische Ausbildung",
        text: "Die Anzahl benötigter Fahrstunden variiert stark – manche Fahrschüler:innen brauchen 15, andere über 30. In den Fahrstunden lernst du das sichere Führen eines Fahrzeugs im Stadtverkehr, auf der Autobahn und in verschiedenen Verkehrssituationen. Dein Fahrlehrer oder deine Fahrlehrerin passt jede Lektion individuell an deinen Fortschritt an. Zwischen den Fahrstunden kannst du mit Begleitpersonen private Übungsfahrten machen.",
      },
      {
        heading: "Die praktische Prüfung",
        text: "Wenn dein Fahrlehrer oder deine Fahrlehrerin dich für prüfungsreif hält, meldest du dich zur praktischen Fahrprüfung an. Diese dauert etwa 45 Minuten und findet im regulären Strassenverkehr statt. Der Experte bewertet dein Fahrverhalten, deine Verkehrssicherheit und deine Selbstständigkeit am Steuer. Nach bestandener Prüfung erhältst du zunächst einen Führerausweis auf Probe, der drei Jahre gültig ist.",
      },
      {
        heading: "Nach der Prüfung: WAB-Kurs",
        text: "Innerhalb der dreijährigen Probephase musst du einen WAB-Kurs (Weiterausbildungskurs) absolvieren. Dieser eintägige Kurs vertieft dein Wissen über umweltbewusstes Fahren und Fahrdynamik. Nach Ablauf der Probezeit – und ohne Verstösse – wird dein Führerausweis automatisch in einen unbefristeten Ausweis umgewandelt.",
      },
    ],
  },
  {
    slug: "verkehrskundeunterricht-vku",
    title: "Verkehrskundeunterricht (VKU) – Was dich erwartet",
    excerpt:
      "Der VKU ist Pflicht auf dem Weg zum Führerschein. Erfahre, was dich in den vier Abenden erwartet und wie du dich optimal vorbereitest.",
    category: "Ausbildung",
    readTime: "6 Min.",
    publishedAt: "2026-02-28",
    coverImage: "/images/blog/verkehrskunde-blog.jpg",
    cta: { label: "VKU jetzt buchen", href: "https://app1.edoobox.com/de/LetZHgo/Verkehrskundekurse/?edref=letzhgo", external: true },
    sections: [
      {
        heading: "Was ist der VKU?",
        text: "Der Verkehrskundeunterricht (VKU) ist ein obligatorischer Kurs für alle, die den Führerschein der Kategorien A oder B erwerben möchten. Er umfasst acht Lektionen à 45 Minuten und wird auf vier Abende verteilt. Der Kurs findet in der Fahrschule statt und wird von einem zertifizierten Verkehrskundelehrer durchgeführt. Ziel ist es, dich für die Gefahren im Strassenverkehr zu sensibilisieren und dein vorausschauendes Denken zu schulen.",
      },
      {
        heading: "Abend 1: Verkehrssehen",
        text: "Am ersten Abend lernst du, wie du deine Umgebung im Strassenverkehr richtig wahrnimmst. Es geht um Blickführung, das Erkennen von Gefahrensituationen und die richtige Einschätzung von Abständen und Geschwindigkeiten. Du erfährst, wie optische Täuschungen dein Fahrverhalten beeinflussen können und warum die Blicktechnik so entscheidend ist.",
      },
      {
        heading: "Abend 2: Verkehrsumwelt",
        text: "Der zweite Abend widmet sich den äusseren Faktoren: Wie beeinflussen Wetter, Tageszeit und Strassenverhältnisse dein Fahren? Du lernst, das Verhalten anderer Verkehrsteilnehmer einzuschätzen und erkennst, warum Fussgänger, Velofahrer und Kinder besondere Aufmerksamkeit verdienen. Auch das Fahren bei Nacht und bei schlechter Sicht wird behandelt.",
      },
      {
        heading: "Abend 3 & 4: Verkehrsdynamik und Verkehrstaktik",
        text: "Am dritten Abend geht es um die physikalischen Kräfte beim Fahren – Bremsweg, Fliehkraft, Aquaplaning und Fahrzeugzustand. Du verstehst, warum die richtige Bereifung und der Reifendruck so wichtig sind. Der vierte Abend behandelt die Fahrfähigkeit: Müdigkeit, Ablenkung, Alkohol und Medikamente. Du lernst, wie du dich selbst einschätzt und wann du lieber nicht fährst.",
      },
      {
        heading: "Tipps für den VKU",
        text: "Sei aufmerksam und stelle Fragen – der VKU ist kein Frontalunterricht, sondern lebt vom Austausch. Komme ausgeruht und bringe Schreibmaterial mit. Die Inhalte helfen dir nicht nur für die Theorieprüfung, sondern auch für die Praxis. Viele Fahrschüler:innen berichten, dass sie nach dem VKU Situationen im Verkehr ganz anders wahrnehmen. Bei Let'ZHgo gestalten wir den VKU praxisnah und interaktiv, damit du wirklich etwas mitnimmst.",
      },
    ],
  },
  {
    slug: "nothelferkurs-warum-wichtig",
    title: "Nothelferkurs – Warum er so wichtig ist",
    excerpt:
      "Der Nothelferkurs ist mehr als eine Pflicht: Er kann Leben retten. Erfahre, was du lernst und warum jeder diesen Kurs machen sollte.",
    category: "Ausbildung",
    readTime: "5 Min.",
    publishedAt: "2026-02-10",
    coverImage: "/images/blog/nothelfer-blog.PNG",
    cta: { label: "Nothelferkurs buchen", href: "https://app1.edoobox.com/de/LetZHgo/Nothelferkurse/?edref=letzhgo", external: true },
    sections: [
      {
        heading: "Mehr als nur Pflicht",
        text: "Der Nothelferkurs ist gesetzlich vorgeschrieben, bevor du den Lernfahrausweis beantragen kannst. Doch seine Bedeutung geht weit über die formale Anforderung hinaus. In der Schweiz ereignen sich jährlich tausende Verkehrsunfälle, und die ersten Minuten nach einem Unfall sind oft entscheidend. Als Ersthelfer kannst du den Unterschied machen – zwischen einer rechtzeitigen Versorgung und einer verpassten Chance.",
      },
      {
        heading: "Was du im Kurs lernst",
        text: "Der Nothelferkurs umfasst zehn Stunden und deckt alle wesentlichen Aspekte der Ersten Hilfe ab. Du lernst, eine Unfallstelle korrekt abzusichern, den Notruf richtig abzusetzen und Verletzte zu versorgen. Herzstück des Kurses ist die Herz-Lungen-Wiederbelebung (CPR), die du an Übungspuppen praktisch trainierst. Auch die stabile Seitenlage, Wundversorgung und der Umgang mit Schock werden geübt.",
      },
      {
        heading: "Praxis statt Theorie",
        text: "Bei Let'ZHgo legen wir grossen Wert darauf, dass der Nothelferkurs nicht nur theoretisch abläuft. Unsere Instruktor:innen schaffen realistische Szenarien, in denen du unter kontrollierten Bedingungen lernst, richtig zu reagieren. Das Ziel ist, dass du im Ernstfall automatisch handelst und nicht in Panik verfällst. Das praktische Üben gibt dir die Sicherheit, die du brauchst.",
      },
      {
        heading: "Gültigkeit und Anmeldung",
        text: "Das Nothelferkurs-Zertifikat ist sechs Jahre lang gültig. Du kannst den Kurs also frühzeitig absolvieren, auch wenn du noch nicht sofort mit dem Führerschein beginnen möchtest. Wir empfehlen, den Kurs als Erstes zu machen, da er die Grundlage für alle weiteren Schritte bildet. Die Anmeldung erfolgt bequem über unsere Kursplattform, und die Kurse finden regelmässig an unseren Standorten statt.",
      },
    ],
  },
  {
    slug: "tipps-praktische-fahrpruefung",
    title: "10 Tipps für die praktische Fahrprüfung",
    excerpt:
      "Die praktische Prüfung steht bevor? Mit diesen bewährten Tipps gehst du entspannt und vorbereitet in die Prüfung.",
    category: "Prüfung",
    readTime: "7 Min.",
    publishedAt: "2026-01-20",
    coverImage: "/images/blog/fahrpruefung-blog.PNG",
    cta: { label: "Fahrstunde buchen", href: "/kontakt" },
    sections: [
      {
        heading: "Vorbereitung ist alles",
        text: "Die beste Vorbereitung auf die Fahrprüfung beginnt lange vor dem Prüfungstag. Fahre regelmässig und in verschiedenen Verkehrssituationen – im Stadtverkehr, auf der Autobahn, bei Nacht und bei Regen. Nutze die letzten Fahrstunden gezielt für Prüfungssimulationen, bei denen dein Fahrlehrer die Rolle des Experten übernimmt. So gewöhnst du dich an den Ablauf und die Anweisungen.",
      },
      {
        heading: "Am Prüfungstag: Ruhe bewahren",
        text: "Schlafe am Abend vorher ausreichend und plane genug Zeit für die Anreise ein. Iss ein leichtes Frühstück und trinke genug Wasser, aber vermeide Koffein in grossen Mengen, wenn du dadurch nervös wirst. Ziehe bequeme Kleidung und Schuhe an, in denen du gut die Pedale bedienen kannst. Denke daran: Nervosität ist völlig normal und die Experten wissen das.",
      },
      {
        heading: "Während der Prüfung: Systematisch fahren",
        text: "Höre den Anweisungen des Experten genau zu und frage nach, wenn du etwas nicht verstanden hast – das ist erlaubt und zeigt Verantwortungsbewusstsein. Fahre so, wie du es in den Fahrstunden gelernt hast: Spiegel kontrollieren, Schulterblick machen, Geschwindigkeit anpassen. Setze klare Zeichen für deine Absichten und fahre vorausschauend. Kleine Fehler bedeuten nicht automatisch ein Durchfallen.",
      },
      {
        heading: "Häufige Stolpersteine",
        text: "Die häufigsten Gründe für ein Nichtbestehen sind mangelnde Verkehrsbeobachtung, fehlender Schulterblick beim Spurwechsel, zu schnelles Fahren in Tempo-30-Zonen und unsicheres Verhalten an Kreuzungen. Auch das Einparken und Rückwärtsfahren bereiten vielen Mühe. Übe diese Manöver gezielt und wiederhole sie so oft, bis sie sitzen.",
      },
      {
        heading: "Positiv denken und dranbleiben",
        text: "Geh mit einer positiven Einstellung in die Prüfung. Du hast dich vorbereitet, dein Fahrlehrer hält dich für bereit – vertraue darauf. Falls es trotzdem nicht klappen sollte: Das ist kein Weltuntergang. Rund 30 Prozent der Kandidat:innen bestehen beim ersten Mal nicht. Besprich mit deinem Fahrlehrer, woran es lag, und arbeite gezielt daran. Beim nächsten Mal wird es klappen.",
      },
    ],
  },
  {
    slug: "autofahren-ab-17",
    title: "Autofahren ab 17 – Was du wissen musst",
    excerpt:
      "Seit 2021 dürfen Jugendliche ab 17 den Lernfahrausweis beantragen. Wir erklären, was die neue Regelung bedeutet und welche Vorteile sie bietet.",
    category: "Ratgeber",
    readTime: "5 Min.",
    publishedAt: "2025-12-15",
    coverImage: "/images/blog/autofahren-mit-siebzehn.PNG",
    cta: { label: "Jetzt Kontakt aufnehmen", href: "/kontakt" },
    sections: [
      {
        heading: "Die neue Regelung seit 2021",
        text: "Seit dem 1. Januar 2021 können Jugendliche in der Schweiz bereits ab 17 Jahren den Lernfahrausweis für die Kategorie B (Personenwagen) beantragen. Zuvor lag das Mindestalter bei 18 Jahren. Die Änderung wurde eingeführt, um jungen Fahrer:innen mehr Übungszeit zu ermöglichen und so die Verkehrssicherheit zu erhöhen. Studien aus anderen Ländern haben gezeigt, dass ein früherer Beginn der begleiteten Fahrpraxis zu weniger Unfällen im ersten Jahr nach Erhalt des Führerscheins führt.",
      },
      {
        heading: "Voraussetzungen",
        text: "Um den Lernfahrausweis ab 17 zu beantragen, brauchst du dieselben Voraussetzungen wie mit 18: einen gültigen Nothelferkurs-Ausweis, einen aktuellen Sehtest und das Bestehen der Theorieprüfung. Zusätzlich ist die Einwilligung der Erziehungsberechtigten erforderlich. Die Begleitperson muss mindestens 23 Jahre alt sein und seit mindestens drei Jahren den Führerschein besitzen.",
      },
      {
        heading: "Der Vorteil: Mehr Fahrpraxis",
        text: "Der grösste Vorteil liegt auf der Hand: Du hast bis zu einem Jahr mehr Zeit, um Fahrpraxis zu sammeln, bevor du die praktische Prüfung ablegst. Diese zusätzliche Übungszeit zahlt sich aus. Je mehr verschiedene Situationen du erlebst – Stadtverkehr, Autobahn, Nachtfahrten, schlechte Witterung – desto sicherer wirst du am Steuer. Bei Let'ZHgo empfehlen wir, diese Zeit optimal zu nutzen und regelmässig zu fahren.",
      },
      {
        heading: "So läuft es ab",
        text: "Der Ablauf ist identisch zur regulären Führerscheinausbildung: Nothelferkurs, Lernfahrausweis, VKU, Fahrstunden, praktische Prüfung. Die praktische Prüfung kannst du frühestens mit 18 Jahren ablegen. Das bedeutet, dass du ein Jahr lang mit Begleitperson fahren und dich optimal vorbereiten kannst. Nach bestandener Prüfung erhältst du wie alle Neulenkenden den Führerausweis auf Probe.",
      },
    ],
  },
  {
    slug: "motorrad-fuehrerschein-schweiz",
    title: "Motorrad-Führerschein in der Schweiz – Der komplette Guide",
    excerpt:
      "Vom Grundkurs bis zur Prüfung: Alles, was du über den Motorrad-Führerschein in der Schweiz wissen musst.",
    category: "Motorrad",
    readTime: "9 Min.",
    publishedAt: "2025-11-28",
    coverImage: "/images/blog/motorrad-fuehrerschein-schweiz.jpg",
    cta: { label: "Motorrad-Grundkurs buchen", href: "https://app1.edoobox.com/de/LetZHgo/Motorradkurse/?edref=letzhgo", external: true },
    sections: [
      {
        heading: "Die Führerschein-Kategorien",
        text: "In der Schweiz gibt es verschiedene Motorrad-Führerschein-Kategorien. Die Kategorie A1 erlaubt das Fahren von Motorrädern bis 125 ccm und 11 kW und ist ab 16 Jahren erhältlich. Die Kategorie A (beschränkt) gilt für Motorräder bis 35 kW und ist ab 18 Jahren möglich. Die unbeschränkte Kategorie A erhältst du entweder nach zwei Jahren mit A beschränkt oder direkt ab 25 Jahren. Je nach Kategorie unterscheiden sich die Ausbildungsanforderungen.",
      },
      {
        heading: "Der Grundkurs",
        text: "Der obligatorische Grundkurs umfasst 12 Stunden und ist aufgeteilt auf drei Teile à vier Stunden. Im Grundkurs lernst du die Fahrzeugbeherrschung, Brems- und Kurventechnik, Blickführung und das sichere Manövrieren im Verkehr. Bei Let'ZHgo findet der Grundkurs auf dem Übungsplatz statt, wo du unter sicheren Bedingungen die Motorrad-Basics trainierst. Der Grundkurs muss innerhalb von vier Monaten nach Erhalt des Lernfahrausweises abgeschlossen werden.",
      },
      {
        heading: "Fahrstunden und Praxistraining",
        text: "Nach dem Grundkurs folgen die individuellen Fahrstunden im Strassenverkehr. Hier vertiefst du die im Grundkurs erlernten Techniken und wendest sie in realen Verkehrssituationen an. Besonders wichtig sind das Kurvenfahren auf Landstrassen, das Fahren in Gruppen, die Autobahnauffahrt und das defensive Fahren. Die Anzahl der benötigten Fahrstunden ist individuell, jedoch empfehlen wir mindestens 8 bis 12 Lektionen.",
      },
      {
        heading: "Ausrüstung und Sicherheit",
        text: "Für den Grundkurs und die Fahrstunden brauchst du die richtige Ausrüstung: einen zugelassenen Helm, Motorradhandschuhe, eine Motorradjacke mit Protektoren, Motorradhosen und knöchelhohe Stiefel. Diese Ausrüstung ist nicht nur vorgeschrieben, sondern schützt dich im Falle eines Sturzes. Bei Let'ZHgo haben wir Übungsmotorräder und können dich bezüglich der richtigen Ausrüstung beraten.",
      },
      {
        heading: "Die praktische Prüfung",
        text: "Die Motorrad-Fahrprüfung dauert etwa 30 bis 45 Minuten und findet im Strassenverkehr statt. Der Experte folgt dir auf einem separaten Fahrzeug und gibt Anweisungen über Funk. Geprüft werden Fahrzeugbeherrschung, Verkehrsverhalten, Kurventechnik und die Einhaltung der Verkehrsregeln. Eine gute Vorbereitung mit deinem Fahrlehrer und ausreichend Praxiserfahrung sind der Schlüssel zum Erfolg.",
      },
    ],
  },
  {
    slug: "haeufigste-fehler-fahrpruefung",
    title: "Die häufigsten Fehler bei der Fahrprüfung",
    excerpt:
      "Was wirklich über Bestehen oder Durchfallen entscheidet: drei Erkenntnisse aus der Praxis – direkt von unserem Fahrlehrer-Team.",
    category: "Prüfung",
    readTime: "4 Min.",
    publishedAt: "2025-11-10",
    coverImage: "/images/blog/zehn-fehler-blog.PNG",
    cta: { label: "Fahrstunde buchen", href: "/kontakt" },
    sections: [
      {
        heading: "Der unterschätzte Fehler: Auf falsche Ratschläge hören",
        text: "Einer der häufigsten Gründe für das Durchfallen bei der Fahrprüfung ist, dass Fahrschüler von dem abweichen, was sie in der Fahrschule gelernt haben. Vertraue in der Prüfung ausschliesslich auf das, was dir dein Fahrlehrer beigebracht hat und was ihr gemeinsam geübt habt. Gut gemeinte Tipps von Eltern oder Freunden – wie zum Beispiel «fahr einfach etwas langsamer, dann machst du weniger Fehler» – können in der Prüfung schnell zu Unsicherheiten oder falschem Verhalten führen. Solche Abweichungen vom gelernten Ablauf sind ein häufiger Grund, warum Prüfungen nicht bestanden werden. Halte dich daher konsequent an deine Ausbildung – sie ist genau auf die Prüfung abgestimmt.",
      },
      {
        heading: "Vorausschauend und mitdenkend fahren",
        text: "Ein entscheidender Punkt, den viele unterschätzen: Es reicht nicht, selbst alles richtig zu machen. Du musst jederzeit damit rechnen, dass andere Verkehrsteilnehmer Fehler machen. Fahr vorausschauend, denk mit und rechne mit möglichen Situationen – zum Beispiel ein Auto, das plötzlich bremst, oder jemand, der dir die Vorfahrt nimmt. Der Prüfer bewertet dein Verhalten. Auch wenn jemand anderes einen Fehler macht, zählt allein, wie du reagierst. Wer aufmerksam fährt und Fehler anderer ausgleicht, zeigt genau das, was in der Prüfung erwartet wird.",
      },
      {
        heading: "Bestehen ist kein Zufall",
        text: "Die Fahrprüfung ist keine Glückssache – sie ist das Ergebnis deiner Vorbereitung und deiner Einstellung. Du musst nicht perfekt fahren. Aber du musst zeigen, dass du sicher, aufmerksam und verantwortungsvoll unterwegs bist. Vertraue auf dein Können, fahr konzentriert und denk immer einen Schritt voraus – dann steht deinem Führerschein nichts mehr im Weg.",
      },
    ],
  },
  {
    slug: "sicher-fahren-im-winter",
    title: "Sicher fahren im Winter – Tipps für Schnee und Eis",
    excerpt:
      "Winterliche Strassenverhältnisse stellen besondere Anforderungen an Fahranfänger:innen. So bist du sicher unterwegs.",
    category: "Sicherheit",
    readTime: "6 Min.",
    publishedAt: "2025-10-25",
    coverImage: "/images/blog/fahren-im-winter-blog.PNG",
    cta: { label: "Fahrstunde buchen", href: "/kontakt" },
    sections: [
      {
        heading: "Winterreifen sind Pflicht",
        text: "In der Schweiz gibt es zwar keine generelle Winterreifenpflicht, doch bei winterlichen Verhältnissen können ungeeignete Reifen zu einer Busse und im Schadensfall zu einer Mitschuld führen. Winterreifen bieten auf kalter, nasser und verschneiter Fahrbahn deutlich mehr Grip als Sommerreifen. Wir empfehlen, spätestens ab Oktober auf Winterreifen zu wechseln und diese bis Ostern draufzulassen. Achte auch auf die Mindestprofiltiefe von 1.6 mm – empfohlen werden mindestens 4 mm.",
      },
      {
        heading: "Fahrtechnik bei Schnee und Eis",
        text: "Auf rutschigem Untergrund gelten andere Regeln: Fahre deutlich langsamer als gewohnt und halte den doppelten bis dreifachen Sicherheitsabstand. Bremse sanft und frühzeitig, um Blockierungen zu vermeiden. Bei modernen Fahrzeugen unterstützt dich das ABS, aber verlasse dich nicht blind darauf. Lenke ruhig und vermeide hektische Lenkbewegungen. Beim Anfahren auf Schnee kann es helfen, im zweiten Gang zu starten, um das Durchdrehen der Räder zu verhindern.",
      },
      {
        heading: "Sicht und Beleuchtung",
        text: "Sorge dafür, dass dein Fahrzeug vollständig von Schnee und Eis befreit ist – das gilt für alle Scheiben, die Scheinwerfer, die Rückleuchten und das Dach. Ein zugeschneites Autodach ist nicht nur gefährlich, weil der Schnee bei Bremsmanövern auf die Windschutzscheibe rutschen kann, sondern auch bussenpflichtig. Überprüfe regelmässig den Füllstand deiner Scheibenwaschanlage und verwende Winterreiniger.",
      },
      {
        heading: "Was tun bei Aquaplaning und Glätte?",
        text: "Wenn dein Fahrzeug ins Rutschen gerät, gilt: Nicht panisch bremsen oder lenken. Nimm den Fuss vom Gas, tritt die Kupplung und lenke vorsichtig in die Richtung, in die du fahren möchtest. Bei Aquaplaning – wenn das Fahrzeug auf einem Wasserfilm aufschwimmt – halte das Lenkrad gerade und warte, bis die Reifen wieder Kontakt zur Strasse haben. Diese Situationen lassen sich am besten in einem Fahrsicherheitstraining üben.",
      },
      {
        heading: "Vorbereitung des Fahrzeugs",
        text: "Neben Winterreifen solltest du vor der kalten Jahreszeit einen Winter-Check machen lassen: Batterie prüfen, Frostschutz im Kühlwasser kontrollieren, Beleuchtung testen und einen Eiskratzer sowie Handschuhe ins Auto legen. Eine Decke und eine Taschenlampe im Kofferraum können bei einer Panne Gold wert sein. Wer gut vorbereitet ist, fährt auch im Winter entspannt und sicher.",
      },
    ],
  },
  {
    slug: "lernfahrausweis-beantragen",
    title: "Lernfahrausweis beantragen – So geht's in Zürich",
    excerpt:
      "Der Lernfahrausweis ist dein Startticket in die Welt des Fahrens. Wir erklären Schritt für Schritt, wie du ihn im Kanton Zürich beantragst.",
    category: "Ratgeber",
    readTime: "5 Min.",
    publishedAt: "2025-10-10",
    coverImage: "/images/blog/lernfahrausweis-blog.PNG",
    cta: { label: "Nothelferkurs buchen", href: "https://app1.edoobox.com/de/LetZHgo/Nothelferkurse/?edref=letzhgo", external: true },
    sections: [
      {
        heading: "Voraussetzungen im Überblick",
        text: "Um den Lernfahrausweis im Kanton Zürich zu beantragen, musst du drei Dinge mitbringen: einen gültigen Nothelferkurs-Ausweis (nicht älter als sechs Jahre), einen aktuellen Sehtest (nicht älter als zwei Jahre, durchgeführt von einem Optiker oder Augenarzt) und ein Passfoto. Wenn du unter 18 bist, brauchst du zusätzlich die Einwilligung deiner Erziehungsberechtigten.",
      },
      {
        heading: "Online-Gesuch beim Strassenverkehrsamt",
        text: "Im Kanton Zürich kannst du das Gesuch für den Lernfahrausweis bequem online über die Webseite des Strassenverkehrsamts einreichen. Du füllst das Formular aus, lädst die erforderlichen Dokumente hoch und bezahlst die Gebühr. Die Kosten für den Lernfahrausweis betragen im Kanton Zürich rund CHF 80. Nach der Bearbeitung erhältst du eine Bestätigung und kannst dich zur Theorieprüfung anmelden.",
      },
      {
        heading: "Die Theorieprüfung",
        text: "Die Theorieprüfung findet am Computer beim Strassenverkehrsamt statt und dauert 45 Minuten. Du beantwortest 50 Fragen – um zu bestehen, darfst du maximal 15 Fehlerpunkte haben. Die Fragen decken Verkehrsregeln, Signale, Vortrittsrecht und situatives Fahrverhalten ab. Bereite dich gründlich vor, am besten mit einer offiziellen Lern-App wie iTheorie oder Theorie24. Übe regelmässig und simuliere die Prüfungssituation.",
      },
      {
        heading: "Nach bestandener Theorieprüfung",
        text: "Sobald du die Theorieprüfung bestanden hast, wird dir der Lernfahrausweis per Post zugestellt. Er ist ab Ausstellungsdatum zwei Jahre gültig. Ab sofort darfst du in Begleitung einer qualifizierten Person Lernfahrten durchführen. Der Lernfahrausweis muss bei jeder Lernfahrt mitgeführt werden. Denke auch daran, dein Fahrzeug mit dem blauen L-Schild zu kennzeichnen.",
      },
      {
        heading: "Unsere Empfehlung",
        text: "Wir empfehlen, den Lernfahrausweis möglichst früh zu beantragen und parallel den Nothelferkurs bei uns zu besuchen. So kannst du schnell mit den Fahrstunden beginnen und hast genug Zeit, um in Ruhe Fahrpraxis zu sammeln. Bei Fragen zum Ablauf oder zur Anmeldung stehen wir dir jederzeit gerne zur Verfügung.",
      },
    ],
  },
  {
    slug: "fuehrerschein-kosten-zuerich",
    title: "Was kostet der Führerschein in Zürich?",
    excerpt:
      "Führerschein-Kosten können schnell unübersichtlich werden. Wir geben dir einen transparenten Überblick über alle Ausgaben.",
    category: "Ratgeber",
    readTime: "7 Min.",
    publishedAt: "2025-09-20",
    coverImage: "/images/blog/fuehrerschein-kosten-zurich.PNG",
    cta: { label: "Unsere Preise ansehen", href: "/services" },
    sections: [
      {
        heading: "Gesamtkosten im Überblick",
        text: "Die Gesamtkosten für den Führerschein in Zürich liegen je nach Anzahl der Fahrstunden zwischen CHF 3'000 und CHF 5'000. Diese Spanne erklärt sich hauptsächlich durch die unterschiedliche Anzahl benötigter Fahrstunden. Während manche Lernende nur 15 Stunden brauchen, benötigen andere 30 oder mehr. Im Folgenden schlüsseln wir die einzelnen Posten auf, damit du realistisch planen kannst.",
      },
      {
        heading: "Fixe Pflichtkosten",
        text: "Einige Kosten sind für alle gleich: Der Nothelferkurs kostet bei Let'ZHgo CHF 120, der Sehtest beim Optiker ca. CHF 15 bis 20, und die Gebühr für den Lernfahrausweis beträgt rund CHF 80. Die Theorieprüfung kostet ca. CHF 40, der obligatorische Verkehrskundeunterricht CHF 150 und die Anmeldegebühr für die praktische Prüfung ca. CHF 130. Zusammen sind das rund CHF 540 bis 560 an Pflichtkosten.",
      },
      {
        heading: "Fahrstunden – der grösste Posten",
        text: "Die Fahrstunden machen den Löwenanteil der Kosten aus. Eine Fahrstunde bei einer professionellen Fahrschule in Zürich kostet in der Regel zwischen CHF 90 und CHF 110 pro Lektion (45 bis 50 Minuten). Bei 20 Fahrstunden ergeben sich CHF 1'800 bis 2'200, bei 30 Stunden bereits CHF 2'700 bis 3'300. Bei Let'ZHgo bieten wir transparente Preise und passen die Ausbildung an dein Budget und Tempo an.",
      },
      {
        heading: "Versteckte Kosten vermeiden",
        text: "Achte darauf, dass die Fahrschule keine versteckten Kosten hat – etwa für Lehrmaterial, Prüfungsvorbereitung oder administrative Gebühren. Bei Let'ZHgo sind alle Kosten transparent. Auch der WAB-Kurs, den du innerhalb der Probezeit absolvieren musst, kostet zusätzlich rund CHF 300 bis 400. Plane diesen Posten von Anfang an mit ein.",
      },
      {
        heading: "Spartipps für den Führerschein",
        text: "Du kannst Geld sparen, indem du zwischen den Fahrstunden viel mit einer Begleitperson übst. Je mehr Fahrpraxis du privat sammelst, desto weniger professionelle Fahrstunden brauchst du. Achte aber darauf, dir keine falschen Gewohnheiten anzueignen. Regelmässiges Fahren ist effektiver als seltene, lange Übungseinheiten. Manche Arbeitgeber oder Elternvereinigungen bieten auch Zuschüsse für die Fahrausbildung – frage nach.",
      },
    ],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getLatestPosts(count: number): BlogPost[] {
  return [...BLOG_POSTS]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, count);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("de-CH", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
