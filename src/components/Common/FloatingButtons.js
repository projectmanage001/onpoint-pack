import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "./FloatingButtons.css";

const FloatingButtons = () => {
  const phoneNumber = "+4915771677034"; // Arama numarası
  const whatsappNumber = "4915771677034"; // WhatsApp numarası (+ olmadan)

  return (
    <>
      {/* ✅ WhatsApp Butonu */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        className="floating-btn whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="icon" />
      </a>

      {/* ✅ Arama Butonu */}
      <a href={`tel:${phoneNumber}`} className="floating-btn call-btn">
        <FaPhoneAlt className="icon" />
      </a>
    </>
  );
};

export default FloatingButtons;