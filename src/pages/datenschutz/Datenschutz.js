// src/pages/datenschutz/Datenschutz.js

import React from "react";
import { Link } from "react-router-dom";
import "./Datenschutz.css"; // İsteğe bağlı özel stil

const Datenschutz = () => {
  return (
    <section className="datenschutz-section">
      <div className="container">
        <h1>📜 Datenschutzerklärung</h1>
        <p><em>Letzte Aktualisierung: Oktober 2025</em></p>

        <h2>1. Verantwortlicher</h2>
        <p>
          Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist: <br />
          MöbelTaxi Umzug & Berlin <br />
          Adresse: Zeppelinstraße 75, 13583 Berlin <br />
          E-Mail: moebeltaxiumzug@gmail.com <br />
          Telefon: +49 1577 1677034
        </p>

        <h2>2. Erhebung und Speicherung personenbezogener Daten & Art und Zweck von deren Verwendung</h2>
        <p>
          Beim Besuch der Website werden automatisch Informationen generiert – z. B.  
          Ihre IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL und Uhrzeit der Anfrage.  
          Diese Daten sind technisch notwendig zur Anzeige der Website (Server-Logfiles) und werden nicht mit anderen Datenquellen zusammengeführt.
        </p>
        <p>
          Wenn Sie unser Kontaktformular verwenden, verarbeiten wir zusätzlich folgende Daten von Ihnen:
        </p>
        <ul>
          <li>Vorname, Nachname</li>
          <li>E-Mail-Adresse</li>
          <li>Telefonnummer</li>
          <li>Adresse (Abhol- und Lieferadresse)</li>
          <li>Details zur Dienstleistung, Nachricht</li>
        </ul>
        <p>
          Zweck: Bearbeitung Ihrer Anfrage, Angebotserstellung und Kommunikation.  
          Rechtsgrundlage: Art. 6 Abs. 1 lit. a (Einwilligung) DSGVO.
        </p>

        <h2>3. Weitergabe von Daten / Drittanbieter</h2>
        <p>
          Für die Versendung der Nachrichten nutzen wir den Dienst EmailJS. Ihre Daten werden über diesen Dienst verarbeitet.  
          Es kann sein, dass Daten dabei auch in ein Drittland (z. B. USA) übermittelt werden. Wir haben mit EmailJS einen Vertrag zur Auftragsverarbeitung abgeschlossen, um sicherzustellen, dass Ihre Daten geschützt sind.
        </p>
        <p>
          Weitere Dienstenutzung (sofern zutreffend): Google Maps, Google Analytics, etc.  
          (Falls du solche Dienste nutzt – ergänze hier entsprechende Passagen.)
        </p>

        <h2>4. Speicherdauer</h2>
        <p>
          Personenbezogene Daten werden nur solange gespeichert, wie es nötig ist, um die beschriebenen Zwecke zu erfüllen oder gesetzliche Aufbewahrungsfristen bestehen.  
          Danach werden sie entsprechend gelöscht oder anonymisiert.
        </p>

        <h2>5. Ihre Rechte als betroffene Person</h2>
        <ul>
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Recht auf Widerruf Ihrer Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
          <li>Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
        </ul>

        <p>
          Kontaktieren Sie uns, wenn Sie eines dieser Rechte ausüben möchten:
          moebeltaxiumzug@gmail.com
        </p>

        <Link to="/contact" className="back-btn">← Zurück zum Kontaktformular</Link>
      </div>
    </section>
  );
};

export default Datenschutz;