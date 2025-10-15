import React from 'react';
import ServiceItem from '../../components/Service/ServiceItem';



const ServicesMain = () => {
    const services = [
        { iconClass: 'icon-postbox', title: '🏠 Umzüge (Wohnung, WG, Pflegeheim, Büro)', link: '/express-freight-solutions' },
        { iconClass: 'icon-customer-service', title: '🛋️ Möbeltransporte & Mini-Umzüge', link: '/quick-move-logistics' },
        { iconClass: 'icon-container', title: '♻️ Entrümpelung & Sperrmüllentsorgung', link: '/speedy-dispatch' },
        { iconClass: 'icon-shipping', title: (
  <>
    🔧 <br />
    Möbelmontage & <br />
    Demontage Service
  </>
), link: '/swift-supply-chain' },
        { iconClass: 'icon-crane', title: '🏡 Gartenarbeiten: Rasenmähen, Laub sammeln, Gartenabfälle entsorgen, Müllentsorgung', link: '/on-point-distribution' },
        { iconClass: 'icon-conveyor-1', title: '🛒 Lieferung & Aufbau Ihrer Einkäufe von IKEA, Poco, Höffner & Co.', link: '/express-freight-solutions' },
        
    ];

    return (
        <React.Fragment>
            <section className="services-page">
                <div className="container">
                    <div className="row">
                        {services.map((service, index) => (
                            <div key={index} className="col-xl-4 col-lg-4">
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
        </React.Fragment>
    );
};

export default ServicesMain;
