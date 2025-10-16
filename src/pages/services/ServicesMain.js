import React from "react";
import ServiceItem from "../../components/Service/ServiceItem";

const ServicesMain = () => {
  const services = [
    {
      iconClass: "icon-postbox",
      title: "🏠 Umzüge (Wohnung, WG, Pflegeheim, Büro)",
      link: "/services/umzug",
    },
    {
      iconClass: "icon-customer-service",
      title: "🛋️ Möbeltransporte & Mini-Umzüge",
      link: "/services/mobeltransporte",
    },
    {
      iconClass: "icon-container",
      title: "♻️ Entrümpelung & Sperrmüllentsorgung",
      link: "/services/entruempelung",
    },
    {
      iconClass: "icon-shipping",
      title: (
        <>
          🔧 <br />
          Möbelmontage & <br />
          Demontage Service
        </>
      ),
      link: "/services/montage",
    },
    {
      iconClass: "icon-crane",
      title:
        "🏡 Gartenarbeiten: Rasenmähen, Laub sammeln, Gartenabfälle entsorgen, Müllentsorgung",
      link: "/services/gartenpflege",
    },
    {
      iconClass: "icon-conveyor-1",
      title:
        "🛒 Lieferung & Aufbau Ihrer Einkäufe von IKEA, Poco, Höffner & Co.",
      link: "/services/lieferung",
    },
  ];

  return (
    <section className="services-page py-5">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-xl-4 col-lg-4 mb-4">
              <ServiceItem
                iconClass={service.iconClass}
                title={service.title}
                link={service.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesMain;