// src/pages/about/AboutMain.js
import React from "react";
import AboutOne from "../../components/About/AboutOne";
import ContactFormSection from "../../components/Common/ContactFormSection";

// 🔽 Ödeme ikonlarını proje içine koyun:
// src/assets/images/payment/sb-barzahlung.jpg
// src/assets/images/payment/sb-paypal.jpg
// src/assets/images/payment/ueberweisung.jpg
import barzahlungImg from "../../assets/images/payment/sb-barzahlung.jpg";
import paypalImg from "../../assets/images/payment/sb-paypal.jpg";
import ueberweisungImg from "../../assets/images/payment/ueberweisung.jpg";

import "./AboutPayments.css"; // 🔧 stil dosyası

const AboutMain = () => {
  return (
    <React.Fragment>
      {/* 📄 Hakkımızda içeriği */}
      <AboutOne />

      {/* 💳 Ödeme Yöntemleri */}
      <section className="payment-methods" aria-label="Zahlungsmethoden">
        <div className="container">
          <h2 className="payment-methods__title">
            Sichere & bequeme Zahlungsmethoden
          </h2>

          <div className="payment-methods__wrap">
            <figure className="payment-methods__item">
              <img
                src={barzahlungImg}
                alt="Barzahlung"
                loading="lazy"
                width="200"
                height="100"
              />
              <figcaption>Barzahlung</figcaption>
            </figure>

            <figure className="payment-methods__item">
              <img
                src={paypalImg}
                alt="PayPal – Click &amp; Pay"
                loading="lazy"
                width="200"
                height="100"
              />
              <figcaption>PayPal – Click &amp; Pay</figcaption>
            </figure>

            <figure className="payment-methods__item">
              <img
                src={ueberweisungImg}
                alt="Vorkasse / Überweisung"
                loading="lazy"
                width="200"
                height="100"
              />
              <figcaption>Vorkasse / Überweisung</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ✅ Footer’dan hemen önce görünmesi için iletişim formu */}
      <ContactFormSection />
    </React.Fragment>
  );
};

export default AboutMain;