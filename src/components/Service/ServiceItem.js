// src/components/ServiceItem.js
import React from "react";
import { Link } from "react-router-dom";

const ServiceItem = ({ iconClass, title, link }) => (
  <div className="services-one__single">
    <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="services-one__icon">
        <span className={iconClass} />
      </div>

      <h3 className="services-one__title">
        {title}
      </h3>
    </Link>
  </div>
);

export default ServiceItem;