import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import CtaSection from "../../components/Common/CtaSection";
import bannerbg from "../../assets/images/resources/cta-one-bg-img.jpg";
import shapeImageUrl from "../../assets/images/shapes/cta-one-shape-1.png";
import ContactMainImg from "../../assets/images/resources/contact-two-img-1.jpg";

// ✅ Ortak İletişim Formu Bileşeni
function ContactFormSection() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [checked, setChecked] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
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
    <section className="section contact-section">
      <h2 style={{ marginTop: "2rem", textAlign: "center" }}>Kontaktformular</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Vorname<input type="text" name="vorname" required /></label>
        <label>Nachname<input type="text" name="nachname" required /></label>
        <label>E-Mail *<input type="email" name="email" required /></label>
        <label>Telefonnummer *<input type="tel" name="telefonnummer" required /></label>
        <p>Wenn Sie einen Rückruf wünschen, bitte ausfüllen.</p>
        <label>Bitte wählen Sie eine Option *
          <select name="dienstleistung" required>
            <option value="">-- Bitte wählen --</option>
            <option>Umzüge</option><option>Möbeltransporte</option>
            <option>Entrümpelung</option><option>Montage</option>
            <option>Gartenarbeiten</option><option>Lieferung</option>
          </select>
        </label>
        <label>Wie viele Träger benötigen Sie? *<input type="number" name="traeger" required /></label>
        <label>Menge der Güter *<textarea name="menge" required></textarea></label>
        <label>Von welchem Stockwerk abholen? *<input type="text" name="abholstock" required /></label>
        <label>In welches Stockwerk liefern? *<input type="text" name="lieferstock" required /></label>
       <label>Gibt es einen Aufzug im Gebäude? *
  <select name="aufzug" required>
    <option value="">-- Bitte wählen --</option>
    <option>Ja, aber nur am Auszugsort.</option>
    <option>Ja, aber nur am Einzugsort.</option>
    <option>Ja, am Auszugs- & Einzugsort.</option>
    <option>Nein, leider nicht.</option>
  </select>
</label>
        <label>Abholadresse *<textarea name="abholadresse" required></textarea></label>
        <label>Lieferadresse *<textarea name="lieferadresse" required></textarea></label>
        <label>Kommentar oder Nachricht *<textarea name="nachricht" required></textarea></label>

        <label className="checkbox-label highlighted-checkbox">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            required
          />
          Ich habe die{" "}
          <a href="/datenschutzerklaerung" target="_blank" rel="noreferrer">Datenschutzerklärung</a>{" "}
          gelesen und stimme zu.
        </label>

        <button type="submit" className="cta-button">Absenden</button>
        {sent && <p style={{ color: "green" }}>Nachricht erfolgreich gesendet ✅</p>}
      </form>
    </section>
  );
}

// ✅ Ana Sayfa Bileşeni
const ContactMain = () => {
  return (
    <React.Fragment>
      {/* İletişim Bilgileri */}
      <section className="contact-one">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              
            </div>
            <h2 className="section-title__title">Nehmen Sie Kontakt mit uns auf</h2>
          </div>
          <div className="contact-one__inner">
            <ul className="contact-one__contact-list list-unstyled">
              <li>
                <div className="icon"><span className="icon-call" /></div>
                <div className="content">
                  <h3>Telefon</h3>
                  <p><a href="tel:+4915771677034">+49 1577 1677034</a></p>
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
          <div className="row">
            <div className="col-xl-7">
              <ContactFormSection />
            </div>
            <div className="col-xl-5">
              <div className="contact-two__right">
                <img src={ContactMainImg} alt="Kontakt" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="google-map-one google-map-two">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.895904438589!2d13.184738577094033!3d52.53743827203902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85d8c7d7b3ddf%3A0x1d4e5de3e7e35b9!2sZeppelinstra%C3%9Fe%2075%2C%2013583%20Berlin%2C%20Almanya!5e0!3m2!1str!2str!4v1728307899827!5m2!1str!2str"
          className="google-map__one"
          allowFullScreen=""
          title="Google Map showing Möbel Taxi Umzug Berlin"
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