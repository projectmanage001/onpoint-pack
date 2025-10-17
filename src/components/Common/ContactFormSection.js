// src/components/Common/ContactFormSection.js
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

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
        "service_m5e9zfv",
        "template_fk75mjp",
        form.current,
        "m8spZLGqXBIEqNGr0"
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

export default ContactFormSection;