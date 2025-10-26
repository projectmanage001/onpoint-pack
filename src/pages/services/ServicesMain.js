// src/pages/services/ServicesMain.js
import React from "react";
import ServiceCard from "../../components/Service/ServiceCard";
import ContactFormSection from "../../components/Common/ContactFormSection";

// 🔽 Servis görsellerini ekleyin (boyut önerisi: 1280x720 veya 640x360, .jpg/.webp)
// Dosyaları şu klasöre koyun: src/assets/images/services/
import imgUmzug from "../../assets/images/services/umzug.jpg";
import imgMoebel from "../../assets/images/services/moebeltransporte.jpg";
import imgEntruempelung from "../../assets/images/services/entruempelung.jpg";
import imgMontage from "../../assets/images/services/montage.jpg";
import imgGarten from "../../assets/images/services/garten.jpg";
import imgLieferung from "../../assets/images/services/lieferung.jpg";
import imgSenioren from "../../assets/images/services/senioren.jpg";

const ServicesMain = () => {
  const services = [
    {
      id: 1,
      iconClass: "icon-postbox",
      title: "🏠 Umzüge (Wohnung, WG, Pflegeheim, Büro)",
      image: imgUmzug,
    },
    {
      id: 2,
      iconClass: "icon-customer-service",
      title: "🛋️ Möbeltransporte & Mini-Umzüge",
      image: imgMoebel,
    },
    {
      id: 3,
      iconClass: "icon-container",
      title: "♻️ Entrümpelung & Sperrmüllentsorgung",
      image: imgEntruempelung,
    },
    {
      id: 4,
      iconClass: "icon-shipping",
      title: "🔧 Möbelmontage <br/> & <br/> Demontage Service",
      image: imgMontage,
    },
    {
      id: 5,
      iconClass: "icon-crane",
      title:
        "🏡 Gartenarbeiten: Rasenmähen, Laub sammeln, Gartenabfälle entsorgen, Müllentsorgung",
      image: imgGarten,
    },
    {
      id: 6,
      iconClass: "icon-conveyor-1",
      title:
        "🛒 Lieferung & Aufbau Ihrer Einkäufe von IKEA, Poco, Höffner & Co.",
      image: imgLieferung,
    },
    {
      id: 7,
      iconClass: "icon-ionic-ios-people",
      title: "👵 Senioren Umzug & Hilfe beim Umzug für Ältere",
      image: imgSenioren,
    },
  ];

  return (
    <>
      {/* 🔹 Hizmet Kartları */}
      <section className="services-page py-5">
        <div className="container">
          <div className="row">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                // geriye dönük uyum için iconClass bırakıldı
                iconClass={service.iconClass}
                title={service.title}
                // yeni düzen için görsel prop’u
                image={service.image}
                delay={index * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Footer’dan hemen önce iletişim formu */}
      <ContactFormSection />
    </>
  );
};

export default ServicesMain;