import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Img1 from "../../assets/images/blog/blog-1.jpg";
import Img2 from "../../assets/images/blog/blog-2.jpg";
import Img3 from "../../assets/images/blog/blog-3.jpg";
import Img4 from "../../assets/images/blog/blog-4.jpg";
import Img5 from "../../assets/images/blog/blog-5.jpg";
import Img6 from "../../assets/images/blog/blog-6.jpg";
import Img7 from "../../assets/images/blog/blog-7.jpg";
import Img8 from "../../assets/images/blog/blog-8.jpg";
import Img9 from "../../assets/images/blog/blog-9.jpg";

const POSTS = [
  {
    id: 1,
    imageUrl: Img1,
    date: "2024-01-29",
    title: "🇩🇪 Umzug in Berlin – 10 Tipps für einen stressfreien Umzug",
    description:
      "Mit guter Planung und einem zuverlässigen Partner wird Ihr Umzug in Berlin stressfrei. Möbel Taxi & Umzug Berlin erklärt die 10 wichtigsten Tipps.",
    keywords:
      "Umzug Berlin, Umzugsservice Berlin, Umzug günstig Berlin, Möbel Taxi & Umzug Berlin",
    content: (
      <>
        <p>
          Ein <strong>Umzug in Berlin</strong> kann schnell zu einer großen
          Herausforderung werden: volle Straßen, enge Treppenhäuser, Zeitdruck
          und unzählige Kisten. Doch mit einer guten Planung und dem richtigen
          Partner an Ihrer Seite wird Ihr Umzug stressfrei und effizient.
        </p>

        <h2>🧳 1. Frühzeitig planen</h2>
        <p>
          Beginnen Sie mindestens 4 Wochen vor Ihrem Umzug mit der Planung.
          Erstellen Sie eine Checkliste, damit Sie nichts vergessen – von der
          Kündigung des alten Mietvertrags bis zum Ummelden beim
          Einwohnermeldeamt.
        </p>

        <h2>📦 2. Entrümpeln Sie vor dem Umzug</h2>
        <p>
          Nutzen Sie die Gelegenheit, alte oder ungenutzte Gegenstände
          auszusortieren. Das spart Platz, Zeit und Geld. Unser Team unterstützt
          Sie gerne mit einer professionellen Entrümpelung in Berlin.
        </p>

        <h2>📅 3. Rechtzeitig Umzugshelfer buchen</h2>
        <p>
          Gerade in Berlin sind gute Umzugsunternehmen oft ausgebucht. Buchen
          Sie Ihren Umzug daher frühzeitig – bei uns schon ab 40 € in Berlin.
        </p>

        <h2>🪟 4. Parkverbotszone beantragen</h2>
        <p>
          Damit der Umzugswagen direkt vor Ihrer Tür halten kann, beantragen Sie
          rechtzeitig eine Halteverbotszone. Auf Wunsch übernehmen wir das gerne
          für Sie.
        </p>

        <h2>💪 5. Richtig packen</h2>
        <p>
          Verwenden Sie stabile Kartons und beschriften Sie sie deutlich.
          Schwere Gegenstände wie Bücher kommen nach unten, leichte Dinge nach
          oben.
        </p>

        <h2>🛋️ 6. Möbel sicher transportieren</h2>
        <p>
          Schützen Sie empfindliche Möbel mit Decken und Folie. Unsere erfahrenen
          Mitarbeiter transportieren Ihre Möbel mit größter Sorgfalt – schnell,
          sicher und zuverlässig.
        </p>

        <h2>🧰 7. Möbelmontage vom Profi</h2>
        <p>
          Nach dem Transport übernehmen wir gerne den Auf- und Abbau Ihrer Möbel
          – sauber, schnell und fachgerecht.
        </p>

        <h2>⏰ 8. Zeitpuffer einplanen</h2>
        <p>
          Ein Umzug dauert oft länger als gedacht. Planen Sie daher ausreichend
          Zeit ein und vermeiden Sie unnötigen Stress.
        </p>

        <h2>🧼 9. Reinigung & Übergabe</h2>
        <p>
          Nach dem Auszug sollte Ihre alte Wohnung besenrein übergeben werden.
          Wir helfen Ihnen auf Wunsch auch bei der Entsorgung alter Möbel oder
          Sperrmüll.
        </p>

        <h2>🏡 10. Entspannt ankommen</h2>
        <p>
          Mit einem zuverlässigen Umzugsservice wie Möbel Taxi & Umzug Berlin
          können Sie sich entspannt zurücklehnen. Wir kümmern uns um den Rest –
          professionell, freundlich und termintreu.
        </p>

        <h3>📞 Kontaktieren Sie uns jetzt!</h3>
        <ul>
          <li>
            📞 Telefon & WhatsApp:{" "}
            <a href="tel:+4915771677034">+49 1577 1677034</a>
          </li>
          <li>
            📧 E-Mail:{" "}
            <a href="mailto:moebeltaxiumzug@gmail.com">
              moebeltaxiumzug@gmail.com
            </a>
          </li>
          <li>
            📸 Instagram:{" "}
            <a
              href="https://instagram.com/mobeltaxiumzug"
              target="_blank"
              rel="noopener noreferrer"
            >
              @mobeltaxiumzug
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    imageUrl: Img2,
    date: "2024-02-12",
    title: "🇩🇪 Möbeltransport Berlin – So finden Sie den richtigen Anbieter",
    description:
      "So finden Sie den passenden Möbeltransport in Berlin. Tipps für Preis, Professionalität, Sicherheit und Service – von Möbel Taxi & Umzug Berlin.",
    keywords:
      "Möbeltransport Berlin, Möbel Taxi Berlin, Möbeltransport ab 40€, Möbel transportieren Berlin",
    content: (
      <>
        <p>
          Ein <strong>Möbeltransport in Berlin</strong> kann eine große
          Herausforderung sein – besonders bei schweren Möbeln oder empfindlichen
          Gegenständen. Möbel Taxi & Umzug Berlin erklärt, worauf Sie achten
          sollten.
        </p>

        <h2>🚚 1. Erfahrung & Professionalität</h2>
        <p>
          Achten Sie darauf, dass das Unternehmen über jahrelange Erfahrung
          verfügt und geschultes Personal einsetzt.
        </p>

        <h2>🏙️ 2. Ortskenntnis in Berlin</h2>
        <p>
          Ein lokaler Anbieter kennt enge Straßen, Einbahnstraßen und Parkzonen
          und plant effizient, um Verzögerungen zu vermeiden.
        </p>

        <h2>💶 3. Transparente Preise</h2>
        <p>
          Ein seriöser Anbieter bietet klare und transparente Preise ohne
          versteckte Kosten – bei uns ab 40 € in Berlin.
        </p>

        <h2>🛋️ 4. Schutz Ihrer Möbel</h2>
        <p>
          Decken, Folien und Gurte schützen Ihre Möbel vor Kratzern und Schäden.
          Diese Sicherheitsmaßnahmen sind bei uns Standard.
        </p>

        <h2>📦 5. Umfangreicher Service</h2>
        <ul>
          <li>Ab- und Aufbau Ihrer Möbel</li>
          <li>Lieferung neuer Möbel (IKEA, Poco, Roller)</li>
          <li>Unterstützung beim Ein- und Auspacken</li>
        </ul>

        <h2>📅 6. Flexible Terminplanung</h2>
        <p>
          Seriöse Anbieter bieten Termine nach Ihren Bedürfnissen – auch abends
          oder am Wochenende.
        </p>

        <h3>✅ Fazit</h3>
        <p>
          Mit Möbel Taxi & Umzug Berlin erhalten Sie Professionalität, Erfahrung
          und faire Preise. So kommt Ihr Möbeltransport sicher und stressfrei ans
          Ziel.
        </p>
        <ul>
          <li>
            📞 Telefon & WhatsApp:{" "}
            <a href="tel:+4915771677034">+49 1577 1677034</a>
          </li>
          <li>
            📧 E-Mail:{" "}
            <a href="mailto:moebeltaxiumzug@gmail.com">
              moebeltaxiumzug@gmail.com
            </a>
          </li>
          <li>
            📸 Instagram:{" "}
            <a
              href="https://instagram.com/mobeltaxiumzug"
              target="_blank"
              rel="noopener noreferrer"
            >
              @mobeltaxiumzug
            </a>
          </li>
        </ul>
      
      </>
    ),
  },
  {
    id: 3,
    imageUrl: Img3,
    date: "2024-03-15",
    title: "🇩🇪 Möbeltaxi Berlin – Wann lohnt sich der Service wirklich?",
    description:
      "Möbeltaxi Berlin – ideal für kleine Transporte. Möbel Taxi & Umzug Berlin erklärt, wann sich der Service lohnt und welche Vorteile Sie haben.",
    keywords:
      "Möbeltaxi Berlin, Möbeltransport Berlin günstig, Möbel sicher transportieren, Möbel Taxi & Umzug",
    content: (
      <>
        <p>
          Unsere Mitarbeiter transportieren Ihre Möbel professionell und sicher.
          Polsterungen, Decken und Gurte schützen Ihre Einrichtung vor Kratzern
          und Schäden – ganz ohne zusätzlichen Aufwand für Sie.
        </p>

        <h2>📦 Zusatzleistungen</h2>
        <ul>
          <li>Ab- und Aufbau Ihrer Möbel</li>
          <li>Lieferung direkt aus dem Möbelhaus</li>
          <li>Unterstützung beim Tragen und Einpacken</li>
        </ul>

        <h2>💡 Wann lohnt sich ein Möbeltaxi?</h2>
        <ul>
          <li>Einzelne Möbelstücke schnell transportieren</li>
          <li>Auto zu klein für Transport</li>
          <li>Professionelle Sicherheit für empfindliche Möbel</li>
        </ul>

        <h3>✅ Fazit</h3>
        <p>
          Ein Möbeltaxi ist perfekt für kleine bis mittlere Transporte in Berlin.
          Mit Möbel Taxi & Umzug sparen Sie Zeit, vermeiden Stress und sichern
          Ihre Möbel zuverlässig.
        </p>
        <ul>
          <li>
            📞 Telefon & WhatsApp:{" "}
            <a href="tel:+4915771677034">+49 1577 1677034</a>
          </li>
          <li>
            📧 E-Mail:{" "}
            <a href="mailto:moebeltaxiumzug@gmail.com">
              moebeltaxiumzug@gmail.com
            </a>
          </li>
          <li>
            📸 Instagram:{" "}
            <a
              href="https://instagram.com/mobeltaxiumzug"
              target="_blank"
              rel="noopener noreferrer"
            >
              @mobeltaxiumzug
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    imageUrl: Img4,
    date: "2024-04-02",
    title:
      "🇩🇪 Entrümpelung leicht gemacht – So sparen Sie Zeit & Geld in Berlin",
    description:
      "Effiziente Entrümpelung in Berlin mit Möbel Taxi & Umzug Berlin. Stressfrei, schnell und umweltgerecht – vom Profi.",
    keywords:
      "Entrümpelung Berlin, Haushaltsauflösung Berlin, Sperrmüll entsorgen Berlin, Entrümpelungsservice Berlin",
    content: (
      <>
        <p>
          Entrümpelungen in Berlin können zeitaufwendig und stressig werden. Möbel Taxi & Umzug Berlin hilft, Räume schnell und umweltgerecht zu entrümpeln.
        </p>

        <h2>🧹 1. Frühzeitig planen</h2>
        <p>Erstellen Sie eine Liste der zu entrümpelnden Gegenstände.</p>

        <h2>📦 2. Professionelle Hilfe nutzen</h2>
        <p>Unser erfahrenes Team übernimmt Tragen, Entsorgung und Transport.</p>

        <h2>🌱 3. Umweltgerechte Entsorgung</h2>
        <p>Wir entsorgen Sperrmüll fachgerecht und gemäß Berliner Vorschriften.</p>

        <h2>💰 4. Kosten sparen</h2>
        <p>Gezielte Planung verhindert doppelte Fahrten oder Schäden.</p>

        <h2>🏠 5. Entrümpelung für jede Situation</h2>
        <ul>
          <li>Wohnungsentrümpelung</li>
          <li>Keller & Dachboden</li>
          <li>Büro & Gewerbe</li>
        </ul>

        <h3>✅ Fazit</h3>
        <p>Mit Möbel Taxi & Umzug Berlin erhalten Sie schnelle, effiziente und kostengünstige Lösungen.</p>
        <ul>
          <li>
            📞 Telefon & WhatsApp:{" "}
            <a href="tel:+4915771677034">+49 1577 1677034</a>
          </li>
          <li>
            📧 E-Mail:{" "}
            <a href="mailto:moebeltaxiumzug@gmail.com">
              moebeltaxiumzug@gmail.com
            </a>
          </li>
          <li>
            📸 Instagram:{" "}
            <a
              href="https://instagram.com/mobeltaxiumzug"
              target="_blank"
              rel="noopener noreferrer"
            >
              @mobeltaxiumzug
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    imageUrl: Img5,
    date: "2024-04-18",
    title: "🇩🇪 Sperrmüll richtig entsorgen – Bußgelder in Berlin erklärt",
    description:
      "So entsorgen Sie Sperrmüll legal & umweltfreundlich in Berlin. Möbel Taxi & Umzug Berlin erklärt die Regeln und Kosten.",
    keywords:
      "Sperrmüll Berlin, Sperrmüll entsorgen Berlin, BSR Berlin, Sperrmüll Abholung Berlin",
    content: (
      <>
        <p>
          In Berlin einfach Sperrmüll auf die Straße zu stellen, kann teuer werden. Möbel Taxi & Umzug Berlin erklärt, wie Sie Bußgelder vermeiden.
        </p>

        <h2>🗑️ 1. Sperrmüll anmelden</h2>
        <p>BSR-Anmeldung oder Abholung direkt durch uns.</p>

        <h2>⚠️ 2. Bußgelder vermeiden</h2>
        <p>Illegale Entsorgung kostet bis zu mehrere hundert Euro.</p>

        <h2>♻️ 3. Umweltgerechte Entsorgung</h2>
        <p>Wir recyceln oder entsorgen fachgerecht nach Vorschrift.</p>

        <h2>💪 4. Vorteile eines professionellen Dienstleisters</h2>
        <ul>
          <li>Zeitersparnis durch Abholung</li>
          <li>Keine Schlepperei</li>
          <li>Fachgerechte Entsorgung von Möbeln & Elektrogeräten</li>
        </ul>

        <h3>✅ Fazit</h3>
        <p>
          Mit Möbel Taxi & Umzug Berlin sparen Sie Zeit, vermeiden Bußgelder und handeln umweltgerecht.
        </p>
        <ul>
          <li>
            📞 Telefon & WhatsApp:{" "}
            <a href="tel:+4915771677034">+49 1577 1677034</a>
          </li>
          <li>
            📧 E-Mail:{" "}
            <a href="mailto:moebeltaxiumzug@gmail.com">
              moebeltaxiumzug@gmail.com
            </a>
          </li>
          <li>
            📸 Instagram:{" "}
            <a
              href="https://instagram.com/mobeltaxiumzug"
              target="_blank"
              rel="noopener noreferrer"
            >
              @mobeltaxiumzug
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    imageUrl: Img6,
    date: "2024-05-10",
    title: "🇩🇪 Seniorenumzug in Berlin – Mit Herz und Erfahrung",
    description:
      "Seniorenumzug mit Herz und Professionalität in Berlin. Möbel Taxi & Umzug Berlin sorgt für Sicherheit und Komfort.",
    keywords:
      "Seniorenumzug Berlin, Umzugshilfe Senioren, Senioren Umzug Berlin, Möbel Taxi & Umzug",
    content: (
      <>
        <p>
          Ein Umzug im Alter ist eine besondere Herausforderung. Möbel Taxi & Umzug Berlin bietet einen einfühlsamen Service speziell für Senioren.
        </p>

        <h2>💛 1. Einfühlsame Unterstützung</h2>
        <p>Respektvoller und geduldiger Umgang mit älteren Kunden.</p>

        <h2>🏠 2. Planung & Organisation</h2>
        <p>Schrittweise Planung für stressfreie Abläufe.</p>

        <h2>🧰 3. Komplettservice</h2>
        <ul>
          <li>Möbeltransport & Montage</li>
          <li>Einpacken & Auspacken</li>
          <li>Entsorgung alter Möbel & Sperrmüll</li>
        </ul>

        <h2>💡 4. Sicherheit & Vertrauen</h2>
        <p>Geschulte und vertrauenswürdige Mitarbeiter.</p>

        <h3>✅ Fazit</h3>
        <p>
          Mit Möbel Taxi & Umzug Berlin wird der Seniorenumzug sicher und angenehm.
        </p>
        <ul>
          <li>
            📞 Telefon & WhatsApp:{" "}
            <a href="tel:+4915771677034">+49 1577 1677034</a>
          </li>
          <li>
            📧 E-Mail:{" "}
            <a href="mailto:moebeltaxiumzug@gmail.com">
              moebeltaxiumzug@gmail.com
            </a>
          </li>
          <li>
            📸 Instagram:{" "}
            <a
              href="https://instagram.com/mobeltaxiumzug"
              target="_blank"
              rel="noopener noreferrer"
            >
              @mobeltaxiumzug
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 7,
    imageUrl: Img7,
    date: "2024-06-02",
    title: "🇩🇪 Möbelmontage in Berlin – Warum Sie Profis beauftragen sollten",
    description:
      "Professionelle Möbelmontage in Berlin – schnell, sauber, sicher. Möbel Taxi & Umzug Berlin erklärt die Vorteile.",
    keywords:
      "Möbelmontage Berlin, Möbelaufbau Berlin, IKEA Montage Berlin, Möbel Taxi & Umzug",
    content: (
      <>
        <p>
          Die Montage von Möbeln kann zeitaufwendig sein. Mit Möbel Taxi & Umzug Berlin sparen Sie Zeit und vermeiden Schäden.
        </p>

        <h2>🛠️ 1. Zeitersparnis</h2>
        <p>Profis arbeiten effizient und routiniert.</p>

        <h2>🪑 2. Fachgerechter Aufbau</h2>
        <p>Experten montieren Schränke, Betten, Regale und Küchenmöbel korrekt.</p>

        <h2>📦 3. Demontage & Wiederaufbau</h2>
        <p>Wir übernehmen auch den Ab- und Aufbau beim Umzug.</p>

        <h2>💡 4. Sicherheit & Schutz</h2>
        <p>Wir verwenden eigenes Werkzeug und Schutzmaterialien.</p>

        <h3>✅ Fazit</h3>
        <p>Professionelle Möbelmontage spart Zeit, Nerven und schützt Ihre Möbel.</p>
        <ul>
          <li>
            📞 Telefon & WhatsApp:{" "}
            <a href="tel:+4915771677034">+49 1577 1677034</a>
          </li>
          <li>
            📧 E-Mail:{" "}
            <a href="mailto:moebeltaxiumzug@gmail.com">
              moebeltaxiumzug@gmail.com
            </a>
          </li>
          <li>
            📸 Instagram:{" "}
            <a
              href="https://instagram.com/mobeltaxiumzug"
              target="_blank"
              rel="noopener noreferrer"
            >
              @mobeltaxiumzug
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 8,
    imageUrl: Img8,
    date: "2024-06-20",
    title: "🇩🇪 Gartenabfälle richtig entsorgen – Ihre Möglichkeiten in Berlin",
    description:
      "So entsorgen Sie Gartenabfälle in Berlin korrekt & umweltfreundlich. Möbel Taxi & Umzug Berlin erklärt die Optionen.",
    keywords:
      "Gartenabfälle Berlin, Entsorgung Grünabfälle Berlin, Gartenservice Berlin, Gartenabfall abholen",
    content: (
      <>
        <p>
          Gartenpflege macht Freude – aber was tun mit Laub, Ästen oder Grünschnitt? Möbel Taxi & Umzug Berlin erklärt umweltfreundliche Entsorgungsmöglichkeiten.
        </p>

        <h2>🌱 1. Grünschnitt richtig trennen</h2>
        <p>Äste, Laub und Rasenschnitt trennen erleichtert Recycling.</p>

        <h2>🗑️ 2. Offizielle Entsorgung</h2>
        <p>BSR Berlin bietet Grünabfall-Sammelstellen. Wir holen alternativ direkt ab.</p>

        <h2>💪 3. Professionelle Hilfe spart Zeit</h2>
        <p>Unser Team erledigt Transport, Entsorgung und Reinigung effizient.</p>

        <h3>✅ Fazit</h3>
        <p>Mit Möbel Taxi & Umzug Berlin entsorgen Sie Gartenabfälle stressfrei und umweltfreundlich.</p>
        <ul>
          <li>
            📞 Telefon & WhatsApp:{" "}
            <a href="tel:+4915771677034">+49 1577 1677034</a>
          </li>
          <li>
            📧 E-Mail:{" "}
            <a href="mailto:moebeltaxiumzug@gmail.com">
              moebeltaxiumzug@gmail.com
            </a>
          </li>
          <li>
            📸 Instagram:{" "}
            <a
              href="https://instagram.com/mobeltaxiumzug"
              target="_blank"
              rel="noopener noreferrer"
            >
              @mobeltaxiumzug
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 9,
    imageUrl: Img9,
    date: "2024-07-01",
    title: "🇩🇪 Nachhaltig umziehen – So funktioniert ein umweltfreundlicher Umzug",
    description:
      "Nachhaltig umziehen in Berlin – umweltfreundliche Verpackungen, effiziente Routen & Recycling mit Möbel Taxi & Umzug Berlin.",
    keywords:
      "Nachhaltiger Umzug Berlin, Umweltfreundlich umziehen Berlin, Möbeltransport nachhaltig, Möbel Taxi & Umzug Berlin",
    content: (
      <>
        <p>
          Ein <strong>Umzug muss nicht nur stressfrei</strong>, sondern auch umweltfreundlich sein. Möbel Taxi & Umzug Berlin zeigt, wie Sie Ihren CO₂-Fußabdruck minimieren.
        </p>

        <h2>🌱 1. Wiederverwendbare Verpackungen</h2>
        <p>Kartons mehrfach nutzen oder Mehrwegbehälter verwenden.</p>

        <h2>🚚 2. Profi-Umzugsunternehmen wählen</h2>
        <p>Wir optimieren Transportwege und reduzieren Fahrten.</p>

        <h2>♻️ 3. Entsorgung nachhaltig gestalten</h2>
        <p>Überflüssige Möbel oder Verpackungen recyceln oder spenden.</p>

        <h2>💡 4. Energie sparen</h2>
        <p>Transporte bündeln – spart Kosten und Emissionen.</p>

        <h3>✅ Fazit</h3>
        <p>Mit Möbel Taxi & Umzug Berlin kombinieren Sie Effizienz, Sicherheit und Umweltschutz.</p>
        <ul>
          <li>
            📞 Telefon & WhatsApp:{" "}
            <a href="tel:+4915771677034">+49 1577 1677034</a>
          </li>
          <li>
            📧 E-Mail:{" "}
            <a href="mailto:moebeltaxiumzug@gmail.com">
              moebeltaxiumzug@gmail.com
            </a>
          </li>
          <li>
            📸 Instagram:{" "}
            <a
              href="https://instagram.com/mobeltaxiumzug"
              target="_blank"
              rel="noopener noreferrer"
            >
              @mobeltaxiumzug
            </a>
          </li>
        </ul>
      </>
    ),
  },
];

const BlogDetailsMain = () => {
  const { id } = useParams();
  const post = useMemo(() => POSTS.find((p) => p.id === Number(id)), [id]);

  if (!post) {
    return (
      <div className="text-center py-5">
        <h2>Blogpost nicht gefunden</h2>
      </div>
    );
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.imageUrl,
    author: {
      "@type": "Organization",
      name: "Möbel Taxi & Umzug Berlin",
    },
    publisher: {
      "@type": "Organization",
      name: "Möbel Taxi & Umzug Berlin",
      logo: {
        "@type": "ImageObject",
        url: "https://mobeltaxiumzug.de/logo.png",
      },
    },
    datePublished: post.date,
  };

  return (
    <>
      <Helmet>
        <title>{`${post.title} | Möbel Taxi & Umzug Berlin`}</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post.imageUrl} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <section className="blog-details py-5">
        <div className="container">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="img-fluid rounded mb-4"
            loading="lazy"
          />
          <h1 className="mb-3">{post.title}</h1>
          <p className="text-muted mb-4">
            {new Date(post.date).toLocaleDateString("de-DE")}
          </p>
          <article className="blog-content" style={{ lineHeight: "1.8" }}>
            {post.content}
          </article>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsMain;