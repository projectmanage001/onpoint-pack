// src/components/Layout/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import footerLogo1 from '../../../assets/images/resources/footer-logo-1.png';
import FloatingButtons from '../../Common/FloatingButtons';

// 💳 Ödeme görselleri
import barzahlungImg from '../../../assets/images/payment/sb-barzahlung.jpg';
import paypalImg from '../../../assets/images/payment/sb-paypal.jpg';
import ueberweisungImg from '../../../assets/images/payment/ueberweisung.jpg';

import './FooterPayments.css'; // 🔧 Stil dosyası

const Footer = () => {
  const contactInfo = [
    {
      icon: 'icon-envolop email-icon',
      text: 'moebeltaxiumzug@gmail.com',
      link: 'mailto:moebeltaxiumzug@gmail.com',
    },
    {
      icon: 'icon-location location-icon',
      text: 'Zeppelinstraße 75, 13583 Berlin',
    },
    {
      icon: 'icon-call phone-call',
      text: '+49 1577 1677034',
      link: 'tel:+4915771677034',
    },
  ];

  return (
    <>
      <footer className="site-footer">
        <div className="site-footer__top">
          <div className="container">
            <div className="site-footer__top-inner">
              <div className="row justify-content-center text-center">
                <div className="col-xl-6 col-lg-8 col-md-10">
                  <div className="footer-widget__column footer-widget__about">
                    {/* Logo */}
                    <div className="footer-widget__logo mb-4">
                      <Link to="/">
                        <img
                          src={footerLogo1}
                          alt="Footer Logo"
                          style={{ maxHeight: '80px' }}
                        />
                      </Link>
                    </div>

                    {/* Contact Info */}
                    <ul className="footer-widget__about-contact list-unstyled text-start d-inline-block">
                      {contactInfo.map((info, index) => (
                        <li key={index}>
                          <div className="icon">
                            <span className={info.icon} />
                          </div>
                          <p>
                            {info.link ? (
                              <a href={info.link}>{info.text}</a>
                            ) : (
                              info.text
                            )}
                          </p>
                        </li>
                      ))}
                    </ul>

                    {/* Social Media */}
                    <div className="footer__social mt-4 mb-3">
                      <a
                        href="https://m.facebook.com/61581455103024/"
                        target="_blank"
                        rel="noreferrer"
                        className="mx-2"
                        aria-label="Facebook"
                        style={{ color: '#fff', fontSize: '22px' }}
                      >
                        <FaFacebookSquare />
                      </a>
                      <a
                        href="https://www.instagram.com/mobeltaxiumzug?igsh=MWYwam9xM29ud3RldQ=="
                        target="_blank"
                        rel="noreferrer"
                        className="mx-2"
                        aria-label="Instagram"
                        style={{ color: '#fff', fontSize: '22px' }}
                      >
                        <FaInstagram />
                      </a>
                    </div>

                    {/* 💳 Ödeme yöntemleri */}
                    <div className="footer-payments mt-3">
                      <img src={barzahlungImg} alt="Barzahlung" loading="lazy" />
                      <img src={paypalImg} alt="PayPal" loading="lazy" />
                      <img src={ueberweisungImg} alt="Überweisung" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="site-footer__bottom">
          <div className="container">
            <div className="site-footer__bottom-inner justify-content-center text-center">
              <p className="site-footer__bottom-text">
                © 2025 MöbelTaxi Umzug. Alle Rechte vorbehalten. |{' '}
                <a
                  href="/"
                  onClick={(e) => e.preventDefault()}
                  className="footer-credit-link"
                >
                  Powered by ensgky
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Buttons (WhatsApp & Call) */}
      <FloatingButtons />
    </>
  );
};

export default Footer;