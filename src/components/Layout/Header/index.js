import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import MobileMenu from './MobileMenu';
import SearchPopup from './SearchPopup';
import Sidebar from './Sidebar';
import navImg from "../../../assets/images/resources/logo-1.png";
import "../../Common/StickyBar.css"; // ✅ sticky bar stilleri

const Header = (props) => {
  const { parentMenu, secondParentMenu, activeMenu } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    if (!isMobileMenu) {
      document.body.classList.add("mobile-menu-visible");
    } else {
      document.body.classList.remove("mobile-menu-visible");
    }
  };

  const handlePopup = () => {
    setIsPopup(!isPopup);
  };

  const handleSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <React.Fragment>
      {/* ✅ ÜST SİYAH STICKY BAR */}
      <div className="sticky-bar top">
        <div className="sticky-bar__left">
          <a href="tel:+491786546148" className="sticky-bar__link">
            <span className="white-text">Click & Call | Mo–Fr 9–18 Uhr</span>{" "}
            <span className="yellow-text">+49 1577 1677034</span>
          </a>
          <a href="/contact" className="sticky-bar__link form-link">
            <span className="white-text">Zum Anfrageformular</span>{" "}
            <span className="yellow-text">Jetzt Anfragen</span>
          </a>
        </div>

        <div className="sticky-bar__right">
          <a
            href="https://wa.me/4915771677034"
            target="_blank"
            rel="noopener noreferrer"
            className="sticky-bar__link"
          >
            <span className="white-text">Click & Chat | WhatsApp 24/7</span>{" "}
            <span className="yellow-text">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* ✅ ANA HEADER */}
      <header className={`main-header ${isVisible ? "fixed-header" : ""}`}>
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="container">
              <div className="main-menu__wrapper-inner">
                <div className="main-menu__left">
                  {/* ✅ LOGO + YAZI */}
                  <div className="main-menu__logo">
                    <Link to="/" className="main-logo-link">
                      <img src={navImg} alt="Logo" className="navbar-logo" />
                      <span className="navbar-brand-name">
                        MoebelTaxi Umzug & Berlin
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
                  <div className="main-menu__search-nav-sidebar-btn-box">
                    <div
                      className="main-menu__search-box"
                      onClick={handlePopup}
                    >
                      <div className="main-menu__search search-toggler fas fa-search" />
                    </div>
                    <div
                      className="main-menu__nav-sidebar-icon"
                      onClick={handleSidebar}
                    >
                      <div className="navSidebar-button">
                        <span className="icon-dots-menu-one" />
                        <span className="icon-dots-menu-two" />
                        <span className="icon-dots-menu-three" />
                      </div>
                    </div>
                    <div className="main-menu__btn-box">
                      <Link to="/about" className="thm-btn main-menu__btn">
                        Read more
                        <span />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* ✅ Sticky Header */}
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
                    {/* ✅ LOGO + YAZI (sticky versiyon) */}
                    <div className="main-menu__logo">
                      <Link to="/" className="main-logo-link">
                        <img
                          src={navImg}
                          alt="Logo"
                          className="navbar-logo"
                        />
                        <span className="navbar-brand-name">
                          MoebelTaxi Umzug & Berlin
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
                    <div className="main-menu__search-nav-sidebar-btn-box">
                      <div
                        className="main-menu__search-box"
                        onClick={handlePopup}
                      >
                        <div className="main-menu__search search-toggler fas fa-search" />
                      </div>
                      <div
                        className="main-menu__nav-sidebar-icon"
                        onClick={handleSidebar}
                      >
                        <div className="navSidebar-button">
                          <span className="icon-dots-menu-one" />
                          <span className="icon-dots-menu-two" />
                          <span className="icon-dots-menu-three" />
                        </div>
                      </div>
                      <div className="main-menu__btn-box">
                        <Link to="/about" className="thm-btn main-menu__btn">
                          Read more
                          <span />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <MobileMenu handleMobileMenu={handleMobileMenu} />
      </header>

      <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />
      <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
    </React.Fragment>
  );
};

export default Header;