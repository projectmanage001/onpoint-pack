import React from "react";
import { FaPhoneAlt, FaClipboardList, FaWhatsapp } from "react-icons/fa";
import "./StickyBar.css";

const StickyBar = () => {
  return (
    <div className="sticky-bar top">
      <div className="sticky-bar__left">
        {/* 📞 Telefon */}
        <a href="tel:+4915771677034" className="sticky-bar__link">
          <div className="sticky-bar__item">
            <FaPhoneAlt className="sticky-icon" />
            <div className="sticky-bar__text">
              <span className="white-text">Click & Call | Mo–Fr 9–18 Uhr</span>
              <span className="yellow-text">+49 1577 1677034</span>
            </div>
          </div>
        </a>

        {/* 📋 Form */}
        <a href="/contact" className="sticky-bar__link">
          <div className="sticky-bar__item">
            <FaClipboardList className="sticky-icon" />
            <div className="sticky-bar__text">
              <span className="white-text">Zum Anfrageformular</span>
              <span className="yellow-text">Jetzt Anfragen</span>
            </div>
          </div>
        </a>
      </div>

      <div className="sticky-bar__right">
        {/* 💬 WhatsApp */}
        <a
          href="https://wa.me/4915771677034"
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-bar__link"
        >
          <div className="sticky-bar__item">
            <FaWhatsapp className="sticky-icon" />
            <div className="sticky-bar__text">
              <span className="white-text">Click & Chat | WhatsApp 24/7</span>
              <span className="yellow-text">WhatsApp</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default StickyBar;