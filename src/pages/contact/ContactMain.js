// src/pages/contact/index.js  (yada ContactMain bileşeni hangi dosyadaysa)
import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet-async"; // ✅ SEO head
import emailjs from "@emailjs/browser";
import CtaSection from "../../components/Common/CtaSection";
import bannerbg from "../../assets/images/resources/cta-one-bg-img.jpg";
import shapeImageUrl from "../../assets/images/shapes/cta-one-shape-1.png";
import ContactMainImg from "../../assets/images/resources/contact-two-img-1.jpg";
import { Link } from "react-router-dom";

// ✅ Ortak İletişim Formu Bileşeni
function ContactFormSection() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [checked, setChecked] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Honeypot (bot) kontrolü
    const hp = form.current?.querySelector('input[name="website"]')?.value;
    if (hp) return; // bot doldurmuşsa gönderme

    if (!checked) {
      alert("Bitte bestätigen Sie die Datenschutzerklärung.");
      return;
    }
    emailjs
      .sendForm(
        "service_m5e9zfv", // 🔧 kendi EmailJS Service ID
        "template_fk75mjp", // 🔧 kendi Template ID
        form.current,
        "m8spZLGqXBIEqNGr0" // 🔧 kendi Public Key
      )
      .then(() => {
        setSent(true);
        form.current.reset();
        setChecked(false);
      })
      .catch(() => alert("Fehler beim Senden."));
  };

  return (
    <section className="section contact-section" aria-labelledby="contactform-title">
      <h2 id="contactform-title" style={{ marginTop: "2rem", textAlign: "center" }}>
        Kontaktformular
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
        name="kontakt-form"
        method="post"
        noValidate
      >
        {/* Honeypot (gizli alan) */}
        <input type="text" name="website" tabIndex="-1" autoComplete="off" style={{ display: "none" }} />

        <label htmlFor="vorname">Vorname
          <input id="vorname" type="text" name="vorname" autoComplete="given-name" required />
        </label>

        <label htmlFor="nachname">Nachname
          <input id="nachname" type="text" name="nachname" autoComplete="family-name" required />
        </label>

        <label htmlFor="email">E-Mail *
          <input id="email" type="email" name="email" autoComplete="email" required />
        </label>

        <label htmlFor="telefonnummer">Telefonnummer *
          <input
            id="telefonnummer"
            type="tel"
            name="telefonnummer"
            inputMode="tel"
            placeholder="+49 ..."
            autoComplete="tel"
            required
          />
        </label>
        <p>Wenn Sie einen Rückruf wünschen, bitte ausfüllen.</p>

        <label htmlFor="dienstleistung">Bitte wählen Sie eine Option *
          <select id="dienstleistung" name="dienstleistung" required>
            <option value="">-- Bitte wählen --</option>
            <option>Umzüge</option><option>Möbeltransporte</option>
            <option>Entrümpelung</option><option>Montage</option>
            <option>Gartenarbeiten</option><option>Lieferung</option>
          </select>
        </label>

        <label htmlFor="traeger">Wie viele Träger benötigen Sie? *
          <input id="traeger" type="number" name="traeger" min="1" step="1" required />
        </label>

        <label htmlFor="menge">Menge der Güter *
          <textarea id="menge" name="menge" rows={3} required></textarea>
        </label>

        <label htmlFor="abholstock">Von welchem Stockwerk abholen? *
          <input id="abholstock" type="text" name="abholstock" required />
        </label>

        <label htmlFor="lieferstock">In welches Stockwerk liefern? *
          <input id="lieferstock" type="text" name="lieferstock" required />
        </label>

        <label htmlFor="aufzug">Gibt es einen Aufzug im Gebäude? *
          <select id="aufzug" name="aufzug" required>
            <option value="">-- Bitte wählen --</option>
            <option>Ja, aber nur am Auszugsort.</option>
            <option>Ja, aber nur am Einzugsort.</option>
            <option>Ja, am Auszugs- & Einzugsort.</option>
            <option>Nein, leider nicht.</option>
          </select>
        </label>

        <label htmlFor="abholadresse">Abholadresse *
          <textarea id="abholadresse" name="abholadresse" rows={2} required></textarea>
        </label>

        <label htmlFor="lieferadresse">Lieferadresse *
          <textarea id="lieferadresse" name="lieferadresse" rows={2} required></textarea>
        </label>

        <label htmlFor="nachricht">Kommentar oder Nachricht *
          <textarea id="nachricht" name="nachricht" rows={4} required></textarea>
        </label>

        <label className="checkbox-label highlighted-checkbox">
          <input
            id="ds-check"
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            required
          />
          Ich habe die{" "}
          <Link to="/datenschutz" target="_blank" rel="noopener noreferrer">
            Datenschutzerklärung
          </Link>{" "}
          gelesen und stimme zu.
        </label>

        <button type="submit" className="cta-button">Absenden</button>
        {sent && <p style={{ color: "green" }}>Nachricht erfolgreich gesendet ✅</p>}
      </form>
    </section>
  );
}

// ✅ Ana Sayfa Bileşeni (Contact Page)
const ContactMain = () => {
  return (
    <React.Fragment>
      {/* 🔹 Sayfa-özel SEO */}
      <Helmet prioritizeSeoTags>
        <title>Kontakt | Möbeltaxi & Umzug Berlin</title>
        <meta
          name="description"
          content="Kontaktieren Sie Möbeltaxi & Umzug Berlin: Angebote für Umzüge, Möbeltransporte, Entrümpelung, Montage & Lieferung. 24/7 per WhatsApp/Telefon: +49 1577 1677034."
        />
        <link rel="canonical" href="https://www.moebeltaxiumzug.com/contact" />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />

        {/* Open Graph / Twitter opsiyonel override (index.html zaten genel OG sağlıyorsa şart değil) */}
        <meta property="og:title" content="Kontakt | Möbeltaxi & Umzug Berlin" />
        <meta property="og:description" content="Anfrage für Umzug & Transporte in Berlin. Schnell, zuverlässig, günstig – jetzt Kontakt aufnehmen!" />
        <meta property="og:url" content="https://www.moebeltaxiumzug.com/contact" />
        <meta property="og:type" content="website" />

        {/* JSON-LD: ContactPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Kontakt – Möbeltaxi & Umzug Berlin",
            "url": "https://www.moebeltaxiumzug.com/contact",
            "about": {
              "@type": "LocalBusiness",
              "name": "Möbeltaxi & Umzug Berlin",
              "areaServed": ["Berlin","Brandenburg"],
              "telephone": "+49 1577 1677034",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Zeppelinstraße 75",
                "postalCode": "13583",
                "addressLocality": "Berlin",
                "addressCountry": "DE"
              }
            }
          })}
        </script>
      </Helmet>

      {/* İletişim Bilgileri */}
      <section className="contact-one" aria-labelledby="contact-heading">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box"></div>
            <h1 id="contact-heading" className="section-title__title">Nehmen Sie Kontakt mit uns auf</h1>
          </div>
          <div className="contact-one__inner">
            <ul className="contact-one__contact-list list-unstyled">
              <li>
                <div className="icon"><span className="icon-call" /></div>
                <div className="content">
                  <h3>Telefon</h3>
                  <p>
                    <a href="tel:+4915771677034" rel="nofollow">+49 1577 1677034</a>
                  </p>
                </div>
              </li>
              <li>
                <div className="icon"><span className="icon-location" /></div>
                <div className="content">
                  <h3>Adresse</h3>
                  <p>Zeppelinstraße 75, 13583 Berlin</p>
                </div>
              </li>
              <li>
                <div className="icon"><span className="icon-envolop" /></div>
                <div className="content">
                  <h3>Email</h3>
                  <p><a href="mailto:moebeltaxiumzug@gmail.com">moebeltaxiumzug@gmail.com</a></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ✅ Yeni Modern Form */}
      <section className="contact-two">
        <div className="container">
          <div className="row" role="region" aria-label="Kontaktformular und Bild">
            <div className="col-xl-7">
              <ContactFormSection />
            </div>
            <div className="col-xl-5">
              <div className="contact-two__right">
                <img src={ContactMainImg} alt="Kontakt – Möbel Taxi & Umzug Berlin" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="google-map-one google-map-two" aria-label="Anfahrt">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.895904438589!2d13.184738577094033!3d52.53743827203902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85d8c7d7b3ddf%3A0x1d4e5de3e7e35b9!2sZeppelinstra%C3%9Fe%2075%2C%2013583%20Berlin%2C%20Almanya!5e0!3m2!1str!2str!4v1728307899827!5m2!1str!2str"
          className="google-map__one"
          allowFullScreen
          title="Google Map showing Möbel Taxi Umzug Berlin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* CTA Bölümü */}
      <CtaSection
        breadcrumbsImg={bannerbg}
        shapeImageUrl={shapeImageUrl}
        title="Brauchen Sie Hilfe? Kontaktieren Sie uns!"
        text="Wir helfen Ihnen gerne."
        phoneNumber="+49 1577 1677034"
      />
    </React.Fragment>
  );
};

export default ContactMain;