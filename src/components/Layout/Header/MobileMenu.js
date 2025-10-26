import { Link } from 'react-router-dom';
import logo from '../../../assets/images/resources/footer-logo-1.png';

const MobileMenu = ({ handleMobileMenu }) => {
  return (
    <>
      <div className="mobile-nav__wrapper">
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={handleMobileMenu}
        ></div>

        <div className="mobile-nav__content">
          {/* ❌ Kapatma butonu */}
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times"></i>
          </span>

          {/* ✅ LOGO */}
          <div className="logo-box">
            <Link to="/" aria-label="Logo image" onClick={handleMobileMenu}>
              <img src={logo} width="150" alt="Logo" />
            </Link>
          </div>

          {/* ✅ ANA MENÜ */}
          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              <li>
                <Link to="/" onClick={handleMobileMenu}>
                  Startseite
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleMobileMenu}>
                  Über Uns
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={handleMobileMenu}>
                  Möbeltaxi
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={handleMobileMenu}>
                  Leistungen
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleMobileMenu}>
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* ✅ İLETİŞİM BİLGİLERİ */}
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:moebeltaxiumzug@gmail.com">
                moebeltaxiumzug@gmail.com
              </a>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <a href="tel:+4915771677034">+49 1577 1677034</a>
            </li>
          </ul>

          {/* ✅ SOSYAL MEDYA LİNKLERİ */}
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a
                href="https://m.facebook.com/61581455103024/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="fab fa-facebook-square"
              ></a>
              <a
                href="https://www.instagram.com/mobeltaxiumzug?igsh=MWYwam9xM29ud3RldQ=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="fab fa-instagram"
              ></a>
              <a
                href="https://wa.me/4915771677034"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="fab fa-whatsapp"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;