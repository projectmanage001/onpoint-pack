import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import "./ServicesDetails.css";

const SERVICES = [
  {
    id: 1,
    title: "🏠 Umzüge (Wohnung, WG, Pflegeheim, Büro)",
    headline: "🇩🇪  Umzug in Berlin – Stressfrei & Zuverlässig",
    description: `
<h3>Ein Umzug in Berlin kann anstrengend sein – mit Möbel Taxi & Umzug wird er unkompliziert!</h3>
<p>Wir planen, tragen, transportieren und montieren – Sie entspannen.<br/>
Unsere erfahrenen Umzugshelfer arbeiten zuverlässig, sorgfältig und pünktlich.</p>

<h3>Vorteile:</h3>
<ul>
<li>Professionelle Umzugshelfer mit Erfahrung</li>
<li>Umzug ab 40 € in Berlin</li>
<li>Versicherung inklusive</li>
<li>Kostenlose Beratung & Angebot</li>
</ul>

<h3>Unser Service:</h3>
<ul>
<li>Privatumzüge & Firmenumzüge</li>
<li>Studentenumzüge & Mini-Umzüge</li>
<li>Verpackungsservice & Montagehilfe</li>
<li>Transporte deutschlandweit</li>
</ul>

<p>📞 Telefon & WhatsApp: +49 1577 1677034<br/>
📧 E-Mail: moebeltaxiumzug@gmail.com<br/>
📸 Instagram: @mobeltaxiumzug</p>
`,
  },
  {
    id: 2,
    title: "🛋️ Möbeltransporte & Mini-Umzüge",
    headline: "🇩🇪  Möbeltransporte in Berlin – Schnell, Sicher & Günstig",
    description: `
<p>Ein Umzug oder Möbeltransport muss nicht stressig sein. Mit Möbel Taxi & Umzug Berlin 
haben Sie einen zuverlässigen Partner an Ihrer Seite. Unser erfahrenes Team transportiert Ihre Möbel sicher, schnell und professionell – egal ob innerhalb Berlins oder deutschlandweit.</p>

<p>Wir bieten Möbeltransporte ab 40 € in Berlin an – ideal für kleine Transporte, einzelne Möbelstücke oder komplette Haushalte.</p>

<h3>Vorteile:</h3>
<ul>
<li>Zuverlässiger & erfahrener Transportservice</li>
<li>Geschulte Mitarbeiter mit Sorgfalt im Umgang mit Möbeln</li>
<li>Schnelle Termine & flexible Einsatzzeiten</li>
<li>Versicherungsschutz für alle Transporte</li>
<li>Faire Preise ohne versteckte Kosten</li>
</ul>

<h3>Unser Service:</h3>
<ul>
<li>Möbeltransporte für Privat- und Geschäftskunden</li>
<li>Abholung & Lieferung von Möbeln (z. B. IKEA, Poco, Roller)</li>
<li>Transport einzelner Möbel oder kompletter Haushalte</li>
<li>Demontage & Montage auf Wunsch</li>
<li>Innerhalb Berlins & deutschlandweit</li>
</ul>
`,
  },
  {
    id: 3,
    title: "♻️ Entrümpelung & Sperrmüllentsorgung",
    headline: "🇩🇪  Entrümpelung in Berlin – Schnell & Diskret",
    description: `
<p>Ob Wohnung, Keller oder Büro – wir übernehmen Entrümpelungen aller Art. Unser Team arbeitet diskret, schnell und umweltbewusst. Möbel Taxi & Umzug Berlin sorgt dafür, dass Ihre Räumlichkeiten schnell wieder sauber und nutzbar sind.</p>

<h3>Vorteile:</h3>
<ul>
<li>Zuverlässig & termintreu</li>
<li>Fachgerechte Entsorgung nach Berliner Vorschriften</li>
<li>Faire Pauschalpreise</li>
<li>Auch kurzfristige Termine möglich</li>
</ul>

<h3>Unser Service:</h3>
<ul>
<li>Haushaltsauflösungen</li>
<li>Keller- & Dachbodenentrümpelungen</li>
<li>Büro- & Firmenauflösungen</li>
<li>Entsorgung von Möbeln, Elektrogeräten & Sperrmüll</li>
</ul>

<p>📞 Telefon & WhatsApp: +49 1577 1677034<br/>
📧 E-Mail: moebeltaxiumzug@gmail.com<br/>
📸 Instagram: @mobeltaxiumzug</p>
`,
  },
  {
    id: 4,
    title: "🔧 Möbelmontage <br/> & <br/> Demontage Service",
    headline: "🇩🇪 Möbelmontage in Berlin – Professionell & Präzise",
    description: `
<p>Möbelmontage kann Zeit und Nerven kosten. Unser erfahrenes Team übernimmt den Aufbau Ihrer Möbel schnell und fachgerecht – ob IKEA, Poco oder andere Marken.</p>

<h3>Vorteile:</h3>
<ul>
<li>Fachgerechte Montage aller Möbeltypen</li>
<li>Auch Demontage & Wiederaufbau möglich</li>
<li>Werkzeug & Material immer dabei</li>
<li>Pünktlich, sauber & zuverlässig</li>
</ul>

<h3>Unser Service:</h3>
<ul>
<li>Aufbau von Schränken, Betten, Küchen & Regalen</li>
<li>Möbelmontage nach Umzügen</li>
<li>Hilfe bei Neuanschaffungen oder Umbauten</li>
</ul>

<p>📞 Telefon & WhatsApp: +49 1577 1677034<br/>
📧 E-Mail: moebeltaxiumzug@gmail.com<br/>
📸 Instagram: @mobeltaxiumzug</p>
`,
  },
  {
    id: 5,
    title: "🏡 Gartenarbeiten: Rasenmähen, Laub Sammeln, Gartenabfälle Entsorgen, Müllentsorgung",
    headline: "🇩🇪 Gartenpflege & Entsorgung in Berlin",
    description: `
<p>Ein gepflegter Garten sorgt für Wohlbefinden – und wir helfen dabei! Unser Team kümmert sich um Gartenpflege, Grünschnitt und die fachgerechte Entsorgung aller Abfälle.</p>

<h3>Vorteile:</h3>
<ul>
<li>Zuverlässiger Gartenservice in Berlin</li>
<li>Fachgerechte Entsorgung von Grünabfällen</li>
<li>Faire Preise & pünktliche Arbeit</li>
<li>Ideal für Privathaushalte & Gewerbe</li>
</ul>

<h3>Unser Service:</h3>
<ul>
<li>Rasenmähen, Heckenschneiden, Laubentsorgung</li>
<li>Entrümpelung von Gärten & Außenanlagen</li>
<li>Abtransport von Gartenabfällen</li>
</ul>

<p>📞 Telefon & WhatsApp: +49 1577 1677034<br/>
📧 E-Mail: moebeltaxiumzug@gmail.com<br/>
📸 Instagram: @mobeltaxiumzug</p>
`,
  },
  {
    id: 6,
    title: "🛒 Lieferung & Aufbau Ihrer Einkäufe von IKEA, Poco, Höffner & Co.",
    headline: "🇩🇪 Möbel Taxi – IKEA, Poco & Co. Lieferungen in Berlin",
    description: `
<p>Keine Lust, schwere Möbel selbst zu transportieren? Mit unserem Möbel Taxi Berlin liefern wir Ihre Einkäufe direkt von IKEA, Poco oder Roller sicher zu Ihnen nach Hause – ab 40 €!</p>

<h3>Vorteile:</h3>
<ul>
<li>Schnelle Lieferung am selben Tag möglich</li>
<li>Sicherer Transport Ihrer neuen Möbel</li>
<li>Auf Wunsch inkl. Aufbau & Verpackungsentsorgung</li>
<li>Flexible Termine – auch abends oder am Wochenende</li>
</ul>

<p>📞 Telefon & WhatsApp: +49 1577 1677034<br/>
📧 E-Mail: moebeltaxiumzug@gmail.com<br/>
📸 Instagram: @mobeltaxiumzug</p>
`,
  },
  {
    id: 7,
    title: "👵 Senioren Umzug & Hilfe beim Umzug für Ältere",
    headline: "🇩🇪 Senioren Umzug & Hilfe beim Umzug für Ältere",
    description: `
<p>Ein Umzug im Alter ist eine besondere Herausforderung. Wir unterstützen Senioren mit Geduld, Einfühlungsvermögen und kompletter Organisation.</p>

<h3>Vorteile:</h3>
<ul>
<li>Freundliches & hilfsbereites Team</li>
<li>Unterstützung beim Ein- & Auspacken</li>
<li>Möbeltransport, Aufbau & Entsorgung aus einer Hand</li>
<li>Zuverlässig, respektvoll & fair</li>
</ul>

<h3>Unser Service:</h3>
<ul>
<li>Komplettumzüge für Senioren</li>
<li>Begleitung und Unterstützung beim Wohnungswechsel</li>
<li>Entsorgung alter Möbel & Entrümpelung</li>
</ul>

<p>📞 Telefon & WhatsApp: +49 1577 1677034<br/>
📧 E-Mail: moebeltaxiumzug@gmail.com<br/>
📸 Instagram: @mobeltaxiumzug</p>
`,
  },
];

const ServiceDetails = () => {
  const { id } = useParams();
  const service = useMemo(() => SERVICES.find((s) => s.id === Number(id)), [id]);

  if (!service) {
    return (
      <div className="text-center py-5">
        <h2>Service nicht gefunden</h2>
        <Link to="/services" className="back-btn">
          ← Zurück zu den Services
        </Link>
      </div>
    );
  }

  const canonicalUrl = `https://moebeltaxi-umzug.de/services/${id}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.headline,
    areaServed: "Berlin",
    provider: {
      "@type": "LocalBusiness",
      name: "Möbel Taxi & Umzug Berlin",
      telephone: "+49 1577 1677034",
      email: "moebeltaxiumzug@gmail.com",
      url: "https://moebeltaxi-umzug.de",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressCountry: "DE",
      },
    },
  };

  return (
    <motion.section
      className="service-details"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Helmet>
        <title>{service.title} | Möbel Taxi & Umzug Berlin</title>
        <meta name="description" content={service.headline} />
        <meta
          name="keywords"
          content={`Umzug Berlin, ${service.title}, Möbeltransport, Entrümpelung Berlin, Möbel Taxi Berlin`}
        />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="container">
        <div className="back-button-container">
          <Link to="/services" className="back-btn">
            ← Zurück zu den Services
          </Link>
        </div>

        <motion.div
          className="service-details-card"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="service-title">{service.headline}</h1>
          <h2
            className="service-subtitle"
            dangerouslySetInnerHTML={{ __html: service.title }}
          />
          <div
            className="service-content"
            dangerouslySetInnerHTML={{ __html: service.description }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServiceDetails;