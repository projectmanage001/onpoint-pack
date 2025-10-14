import React from "react";
import { Link } from "react-router-dom";

const MenuItems = ({ parentMenu, activeMenu }) => {
  return (
    <>
      <li className={parentMenu === "home" ? "current-menu-item" : ""}>
        <Link to="/" className={activeMenu === "/" ? "active-menu" : ""}>
          Home
        </Link>
      </li>

      <li className={parentMenu === "about" ? "current-menu-item" : ""}>
        <Link to="/about" className={activeMenu === "/about" ? "active-menu" : ""}>
          About
        </Link>
      </li>

      <li className={parentMenu === "services" ? "current-menu-item" : ""}>
        <Link to="/services" className={activeMenu === "/services" ? "active-menu" : ""}>
          Services
        </Link>
      </li>

      <li className={parentMenu === "blog" ? "current-menu-item" : ""}>
        <Link to="/blog" className={activeMenu === "/blog" ? "active-menu" : ""}>
          Blog
        </Link>
      </li>

      <li className={parentMenu === "contact" ? "current-menu-item" : ""}>
        <Link to="/contact" className={activeMenu === "/contact" ? "active-menu" : ""}>
          Contact
        </Link>
      </li>
    </>
  );
};

export default MenuItems;