import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import MobileMenu from "./MobileMenu";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa"; // ✅ EKLENDİ

import navImg from "../../../assets/images/resources/logo-1.png";
import "../../Common/StickyBar.css"; // ✅ sticky bar stilleri

// ✅ ÜST SİYAH STICKY BAR BİLEŞENİ
const StickyBar = () => (
  <div className="sticky-bar top">
    <div className="sticky-bar__left">
      <a href="tel:+4915771677034" className="sticky-bar__link">
        <FaPhoneAlt className="icon" />
        <span className="white-text"> Click & Call | Mo–Fr 9–18 Uhr </span>
        <span className="yellow-text"> +49 1577 1677034 </span>
      </a>
      <a href="/contact" className="sticky-bar__link form-link">
        <FaEnvelope className="icon" />
        <span className="white-text"> Zum Anfrageformular </span>
        <span className="yellow-text"> Jetzt Anfragen </span>
      </a>
    </div>

    <div className="sticky-bar__right">
      <a
        href="https://wa.me/4915771677034"
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-bar__link"
      >
        <FaWhatsapp className="icon" />
        <span className="white-text"> Click & Chat | WhatsApp 24/7 </span>
        <span className="yellow-text"> WhatsApp </span>
      </a>
    </div>
  </div>
);

const Header = (props) => {
  const { parentMenu, secondParentMenu, activeMenu } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    if (!isMobileMenu) {
      document.body.classList.add("mobile-menu-visible");
    } else {
      document.body.classList.remove("mobile-menu-visible");
    }
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <StickyBar />

      <header className={`main-header ${isVisible ? "fixed-header" : ""}`}>
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="container">
              <div className="main-menu__wrapper-inner">
                <div className="main-menu__left">
                  <div className="main-menu__logo">
                    <Link to="/" className="main-logo-link">
                      <img src={navImg} alt="Logo" className="navbar-logo" />
                      <span className="navbar-brand-name">
                        MöbelTaxi Umzug & Berlin
                      </span>
                    </Link>
                  </div>

                  <div className="main-menu__main-menu-box">
                    <div
                      className="mobile-nav__toggler"
                      onClick={handleMobileMenu}
                    >
                      <i className="fa fa-bars" />
                    </div>
                    <ul className="main-menu__list">
                      <MenuItems
                        parentMenu={parentMenu}
                        secondParentMenu={secondParentMenu}
                        activeMenu={activeMenu}
                      />
                    </ul>
                  </div>
                </div>

                <div className="main-menu__right">
                  <div className="main-menu__btn-box">
                        <Link to="/contact" className="thm-btn main-menu__btn yellow-btn">
                      Jetzt Kontakt 
                      <span />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div
          className={`stricky-header stricked-menu main-menu ${
            isVisible ? "stricky-fixed" : ""
          }`}
        >
          <div className="sticky-header__content" />
          <nav className="main-menu">
            <div className="main-menu__wrapper">
              <div className="container">
                <div className="main-menu__wrapper-inner">
                  <div className="main-menu__left">
                    <div className="main-menu__logo">
                      <Link to="/" className="main-logo-link">
                        <img src={navImg} alt="Logo" className="navbar-logo" />
                        <span className="navbar-brand-name">
                          MöbelTaxi Umzug & Berlin
                        </span>
                      </Link>
                    </div>

                    <div className="main-menu__main-menu-box">
                      <div
                        className="mobile-nav__toggler"
                        onClick={handleMobileMenu}
                      >
                        <i className="fa fa-bars" />
                      </div>
                      <ul className="main-menu__list">
                        <MenuItems
                          parentMenu={parentMenu}
                          secondParentMenu={secondParentMenu}
                          activeMenu={activeMenu}
                        />
                      </ul>
                    </div>
                  </div>

                  <div className="main-menu__right">
                    <div className="main-menu__btn-box">
                      <Link to="/contact" className="thm-btn main-menu__btn yellow-btn">
                      Jetzt Kontakt
                        <span />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <MobileMenu handleMobileMenu={handleMobileMenu} />
      </header>
    </>
  );
};

export default Header;