// src/components/ServiceItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({ iconClass, title, link }) => (
  <div className="services-one__single">
    <div className="services-one__icon">
      <span className={iconClass} />
    </div>

    {/* Başlık kısmı */}
    <h3 className="services-one__title">
      <Link to={link}>
        {title}
      </Link>
    </h3>

    {/* Read More butonu tamamen kaldırıldı */}
  </div>
);

export default ServiceItem;