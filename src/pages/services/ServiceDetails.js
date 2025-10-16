import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SERVICES = [
  {
    id: "umzug",
    title: "🇩🇪 5. Umzug in Berlin – Stressfrei & Zuverlässig",
    description:
      "Ein Umzug in Berlin kann anstrengend sein – mit Möbel Taxi & Umzug wird er unkompliziert! Wir planen, tragen, transportieren und montieren – Sie entspannen.",
    keywords:
      "Umzug Berlin, Privatumzug, Firmenumzug, Studentenumzug, Umzugsservice Berlin, Möbel Taxi & Umzug",
    content: (
      <>
        <h1>🏠 Umzüge in Berlin – Stressfrei & Zuverlässig</h1>
        <p>
          Ein <strong>Umzug in Berlin</strong> kann anstrengend sein – mit Möbel
          Taxi & Umzug wird er unkompliziert! Wir planen, tragen, transportieren
          und montieren – Sie entspannen. Unsere erfahrenen Umzugshelfer
          arbeiten zuverlässig, sorgfältig und pünktlich.
        </p>

        <h2>⭐ Vorteile</h2>
        <ul>
          <li>Professionelle Umzugshelfer mit Erfahrung</li>
          <li>Umzug ab 40 € in Berlin</li>
          <li>Versicherung inklusive</li>
          <li>Kostenlose Beratung & Angebot</li>
        </ul>

        <h2>📦 Unser Service</h2>
        <ul>
          <li>Privatumzüge & Firmenumzüge</li>
          <li>Studentenumzüge & Mini-Umzüge</li>
          <li>Verpackungsservice & Montagehilfe</li>
          <li>Transporte deutschlandweit</li>
        </ul>

        <h3>📞 Kontaktieren Sie uns</h3>
        <ul>
          <li>📞 Telefon & WhatsApp: +49 1577 1677034</li>
          <li>📧 E-Mail: moebeltaxiumzug@gmail.com</li>
          <li>📸 Instagram: @mobeltaxiumzug</li>
        </ul>
      </>
    ),
  },
  {
    id: "mobeltransporte",
    title: "🇩🇪 1. Möbeltransporte in Berlin – Schnell, Sicher & Günstig",
    description:
      "Zuverlässiger Möbeltransport ab 40 € in Berlin. Schnell, sicher, versichert – Möbel Taxi & Umzug transportiert Ihre Möbel professionell.",
    keywords:
      "Möbeltransport Berlin, Mini Umzug Berlin, Umzugsfirma günstig Berlin, Transportservice Berlin",
    content: (
      <>
        <h1>🛋️ Möbeltransporte & Mini-Umzüge in Berlin</h1>
        <p>
          Ein Umzug oder Möbeltransport muss nicht stressig sein. Mit{" "}
          <strong>Möbel Taxi & Umzug Berlin</strong> haben Sie einen zuverlässigen
          Partner an Ihrer Seite. Unser erfahrenes Team transportiert Ihre Möbel
          sicher, schnell und professionell – egal ob innerhalb Berlins oder
          deutschlandweit.
        </p>
        <p>
          Wir bieten <strong>Möbeltransporte ab 40 €</strong> in Berlin an –
          ideal für kleine Transporte, einzelne Möbelstücke oder komplette
          Haushalte.
        </p>

        <h2>⭐ Vorteile</h2>
        <ul>
          <li>Zuverlässiger & erfahrener Transportservice</li>
          <li>Geschulte Mitarbeiter mit Sorgfalt im Umgang mit Möbeln</li>
          <li>Schnelle Termine & flexible Einsatzzeiten</li>
          <li>Versicherungsschutz für alle Transporte</li>
          <li>Faire Preise ohne versteckte Kosten</li>
        </ul>

        <h2>📦 Unser Service</h2>
        <ul>
          <li>Möbeltransporte für Privat- und Geschäftskunden</li>
          <li>Abholung & Lieferung von Möbeln (IKEA, Poco, Roller)</li>
          <li>Transport einzelner Möbel oder kompletter Haushalte</li>
          <li>Demontage & Montage auf Wunsch</li>
          <li>Innerhalb Berlins & deutschlandweit</li>
        </ul>
      </>
    ),
  },
  {
    id: "entruempelung",
    title: "🇩🇪 2. Entrümpelung & Sperrmüllentsorgung in Berlin",
    description:
      "Entrümpelung und Sperrmüllentsorgung in Berlin – schnell, diskret, umweltgerecht. Möbel Taxi & Umzug Berlin entsorgt professionell!",
    keywords:
      "Entrümpelung Berlin, Sperrmüll Abholung Berlin, Haushaltsauflösung Berlin, Entsorgung Berlin",
    content: (
      <>
        <h1>♻️ Entrümpelung & Sperrmüllentsorgung</h1>
        <h2>🇩🇪 2. Entrümpelung in Berlin – Schnell & Diskret</h2>
        <p>
          Ob Wohnung, Keller oder Büro – wir übernehmen Entrümpelungen aller
          Art. Unser Team arbeitet diskret, schnell und umweltbewusst. Möbel Taxi
          & Umzug Berlin sorgt dafür, dass Ihre Räumlichkeiten schnell wieder
          sauber und nutzbar sind.
        </p>

        <h3>⭐ Vorteile</h3>
        <ul>
          <li>Zuverlässig & termintreu</li>
          <li>Fachgerechte Entsorgung nach Berliner Vorschriften</li>
          <li>Faire Pauschalpreise</li>
          <li>Auch kurzfristige Termine möglich</li>
        </ul>

        <h3>📦 Unser Service</h3>
        <ul>
          <li>Haushaltsauflösungen</li>
          <li>Keller- & Dachbodenentrümpelungen</li>
          <li>Büro- & Firmenauflösungen</li>
          <li>Entsorgung von Möbeln, Elektrogeräten & Sperrmüll</li>
        </ul>

        <h2>🇩🇪 3. Sperrmüll Entsorgung in Berlin – Umweltgerecht & Günstig</h2>
        <p>
          Sperrmüll einfach auf die Straße zu stellen kann teuer werden –
          Bußgelder in Berlin sind hoch! Mit Möbel Taxi & Umzug entsorgen Sie
          Ihren Sperrmüll fachgerecht, legal und stressfrei.
        </p>

        <h3>⭐ Vorteile</h3>
        <ul>
          <li>Umweltgerechte Entsorgung</li>
          <li>Schnelle Abholung direkt vor Ort</li>
          <li>Faire Preise & transparente Abrechnung</li>
          <li>Keine Bußgelder oder Probleme mit dem Ordnungsamt</li>
        </ul>

        <h3>📦 Unser Service</h3>
        <ul>
          <li>Sperrmüllabholung für Privat & Gewerbe</li>
          <li>Entsorgung von Möbeln, Matratzen, Elektrogeräten</li>
          <li>Abtransport direkt aus der Wohnung oder vom Hof</li>
        </ul>
      </>
    ),
  },
  {
    id: "montage",
    title: "🇩🇪 8. Möbelmontage in Berlin – Professionell & Präzise",
    description:
      "Möbelmontage vom Profi in Berlin – wir übernehmen Aufbau & Demontage schnell, sauber und fachgerecht.",
    keywords:
      "Möbelmontage Berlin, Möbelaufbau, IKEA Aufbau Berlin, Demontage Service Berlin",
    content: (
      <>
        <h1>🔧 Möbelmontage & Demontage Service</h1>
        <p>
          Möbelmontage kann Zeit und Nerven kosten. Unser erfahrenes Team
          übernimmt den Aufbau Ihrer Möbel schnell und fachgerecht – ob IKEA,
          Poco oder andere Marken.
        </p>

        <h2>⭐ Vorteile</h2>
        <ul>
          <li>Fachgerechte Montage aller Möbeltypen</li>
          <li>Auch Demontage & Wiederaufbau möglich</li>
          <li>Werkzeug & Material immer dabei</li>
          <li>Pünktlich, sauber & zuverlässig</li>
        </ul>

        <h2>📦 Unser Service</h2>
        <ul>
          <li>Aufbau von Schränken, Betten, Küchen & Regalen</li>
          <li>Möbelmontage nach Umzügen</li>
          <li>Hilfe bei Neuanschaffungen oder Umbauten</li>
        </ul>
      </>
    ),
  },
  {
    id: "gartenpflege",
    title: "🇩🇪 6. Gartenpflege & Entsorgung in Berlin",
    description:
      "Professionelle Gartenpflege in Berlin: Rasenmähen, Laub sammeln, Abfälle entsorgen – pünktlich & zuverlässig.",
    keywords:
      "Gartenservice Berlin, Gartenabfall entsorgen, Rasenmähen Berlin, Laubentsorgung Berlin",
    content: (
      <>
        <h1>🏡 Gartenpflege & Entsorgung</h1>
        <p>
          Ein gepflegter Garten sorgt für Wohlbefinden – und wir helfen dabei!
          Unser Team kümmert sich um Gartenpflege, Grünschnitt und die
          fachgerechte Entsorgung aller Abfälle.
        </p>

        <h2>⭐ Vorteile</h2>
        <ul>
          <li>Zuverlässiger Gartenservice in Berlin</li>
          <li>Fachgerechte Entsorgung von Grünabfällen</li>
          <li>Faire Preise & pünktliche Arbeit</li>
          <li>Ideal für Privathaushalte & Gewerbe</li>
        </ul>

        <h2>📦 Unser Service</h2>
        <ul>
          <li>Rasenmähen, Heckenschneiden, Laubentsorgung</li>
          <li>Entrümpelung von Gärten & Außenanlagen</li>
          <li>Abtransport von Gartenabfällen</li>
        </ul>
      </>
    ),
  },
  {
    id: "lieferung",
    title:
      "🇩🇪 4. Möbel Taxi – IKEA, Poco & Co. Lieferungen in Berlin",
    description:
      "Schnelle und sichere Möbel Lieferung von IKEA, Poco oder Höffner direkt zu Ihnen nach Hause – ab 40 €!",
    keywords:
      "Möbel Taxi Berlin, IKEA Lieferung, Poco Transport Berlin, Möbel Lieferung Berlin",
    content: (
      <>
        <h1>🛒 Lieferung & Aufbau Ihrer Einkäufe</h1>
        <p>
          Keine Lust, schwere Möbel selbst zu transportieren? Mit unserem{" "}
          <strong>Möbel Taxi Berlin</strong> liefern wir Ihre Einkäufe direkt von
          IKEA, Poco oder Roller sicher zu Ihnen nach Hause – ab 40 €!
        </p>

        <h2>⭐ Vorteile</h2>
        <ul>
          <li>Schnelle Lieferung am selben Tag möglich</li>
          <li>Sicherer Transport Ihrer neuen Möbel</li>
          <li>Auf Wunsch inkl. Aufbau & Verpackungsentsorgung</li>
          <li>Flexible Termine – auch abends oder am Wochenende</li>
        </ul>
      </>
    ),
  },
];

const ServiceDetails = () => {
  const { id } = useParams();
  const service = useMemo(
    () => SERVICES.find((s) => s.id === id),
    [id]
  );

  if (!service) {
    return (
      <div className="text-center py-5">
        <h2>Service nicht gefunden</h2>
      </div>
    );
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Möbel Taxi & Umzug Berlin",
    },
  };

  return (
    <>
      <Helmet>
        <title>{`${service.title} | Möbel Taxi & Umzug Berlin`}</title>
        <meta name="description" content={service.description} />
        <meta name="keywords" content={service.keywords} />
        <meta property="og:title" content={service.title} />
        <meta property="og:description" content={service.description} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <section className="service-details py-5">
        <div className="container">
          <article style={{ lineHeight: "1.8", color: "#333" }}>
            {service.content}
          </article>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;