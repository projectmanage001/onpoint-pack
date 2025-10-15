// src/components/ServiceItem.js
import React from 'react';

const ServiceItem = ({ iconClass, title }) => (
  <div className="services-one__single">
    <div className="services-one__icon">
      <span className={iconClass} />
    </div>

    {/* Başlık kısmı - artık link yok, sadece düz metin */}
    <h3 className="services-one__title">
      {title}
    </h3>
  </div>
);

export default ServiceItem;