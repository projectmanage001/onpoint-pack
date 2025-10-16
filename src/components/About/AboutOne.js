import React from "react";

const AboutOne = () => {
  return (
    <section className="about-one about-two">
      <div className="container">
        <div className="row align-items-center">
         

          {/* Sağ taraf: içerik */}
          <div className="col-xl-6">
            <div className="about-one__content">
              <div className="section-title text-left mb-4">
                <span className="section-title__tagline">Über Uns</span>
                <h1 className="section-title__title">
                  Über Möbel Taxi & Umzug Berlin – Ihr zuverlässiger Partner für stressfreie Umzüge
                </h1>
              </div>

              <p className="about-one__text" style={{ fontSize: "18px", lineHeight: "1.8" }}>
                Schnell, sicher und professionell – seit Jahren unterstützen wir Privat- und
                Geschäftskunden in ganz Berlin bei Umzügen, Möbeltransporten und Entrümpelungen.
                Vertrauen Sie auf Erfahrung, Fairness und ein freundliches Team, das Ihre Zufriedenheit
                an erste Stelle setzt.
              </p>

              <p className="about-one__text mt-3" style={{ fontSize: "18px", lineHeight: "1.8" }}>
                Möbel Taxi & Umzug Berlin steht für Termintreue, Sorgfalt und transparente Preise.
                Ob kleiner Umzug, kompletter Wohnungswechsel oder Firmenumzug – wir kümmern uns um alles,
                damit Sie entspannt ankommen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;