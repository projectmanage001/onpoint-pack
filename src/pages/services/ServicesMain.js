import React from "react";
import ServiceCard from "../../components/Service/ServiceCard";

const ServicesMain = () => {
  const services = [
    { id: 1, iconClass: "icon-postbox", title: "🏠 Umzüge (Wohnung, WG, Pflegeheim, Büro)" },
    { id: 2, iconClass: "icon-customer-service", title: "🛋️ Möbeltransporte & Mini-Umzüge" },
    { id: 3, iconClass: "icon-container", title: "♻️ Entrümpelung & Sperrmüllentsorgung" },
    { id: 4, iconClass: "icon-shipping",   title: "🔧 Möbelmontage <br/> & <br/> Demontage Service"  },
    { id: 5, iconClass: "icon-crane", title: "🏡 Gartenarbeiten: Rasenmähen, Laub sammeln, Gartenabfälle entsorgen, Müllentsorgung" },
    { id: 6, iconClass: "icon-conveyor-1", title: "🛒 Lieferung & Aufbau Ihrer Einkäufe von IKEA, Poco, Höffner & Co." },
  ];

  return (
    <section className="services-page py-5">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              iconClass={service.iconClass}
              title={service.title}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesMain;