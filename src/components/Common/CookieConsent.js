// src/components/Common/CookieConsent.js
import React, { useState, useEffect } from "react";
import "./CookieConsent.css";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p>
        Diese Website verwendet Cookies, um Ihr Benutzererlebnis zu verbessern.{" "}
        <a href="/datenschutzerklaerung" target="_blank" rel="noopener noreferrer">
          Mehr erfahren
        </a>
      </p>
      <div className="cookie-buttons">
        <button onClick={acceptCookies}>Akzeptieren</button>
      </div>
    </div>
  );
};

export default CookieConsent;