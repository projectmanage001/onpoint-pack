import React from "react";
import { Link } from "react-router-dom";

const MenuItems = ({ parentMenu, activeMenu }) => {
  return (
    <>
      <li className={parentMenu === "home" ? "current-menu-item" : ""}>
        <Link to="/" className={activeMenu === "/" ? "active-menu" : ""}>
          Startseite

        </Link>
      </li>

      <li className={parentMenu === "about" ? "current-menu-item" : ""}>
        <Link to="/about" className={activeMenu === "/about" ? "active-menu" : ""}>
          Über uns

        </Link>
      </li>

      <li className={parentMenu === "services" ? "current-menu-item" : ""}>
        <Link to="/services" className={activeMenu === "/services" ? "active-menu" : ""}>
          MÖBELTAXİ

        </Link>
      </li>

      <li className={parentMenu === "blog" ? "current-menu-item" : ""}>
        <Link to="/blog" className={activeMenu === "/blog" ? "active-menu" : ""}>
          LEİSTUNGEN
        </Link>
      </li>

      <li className={parentMenu === "contact" ? "current-menu-item" : ""}>
        <Link to="/contact" className={activeMenu === "/contact" ? "active-menu" : ""}>
          Kontakt

        </Link>
      </li>
    </>
  );
};

export default MenuItems;