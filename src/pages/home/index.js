// src/pages/home/index.js
import React, { useEffect, useState } from 'react';
import HomeMain from './HomeMain';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';
import BackToTop from '../../components/elements/BackToTop';
import bannerbg from '../../assets/images/backgrounds/page-header-bg.jpg';
import CtaSection from '../../components/Common/CtaSection';
import shapeImageUrl from '../../assets/images/shapes/cta-one-shape-1.png';

// ✅ Sabit banner görseli (tam genişlik, responsive yükseklik)
import sabitBanner from '../../assets/images/backgrounds/sabit-banner.jpg';

// 🔽 Servis kartları için bileşen ve görseller
import ServiceCard from '../../components/Service/ServiceCard';
import imgUmzug from '../../assets/images/services/umzug.jpg';
import imgMoebel from '../../assets/images/services/moebeltransporte.jpg';
import imgEntruempelung from '../../assets/images/services/entruempelung.jpg';
import imgMontage from '../../assets/images/services/montage.jpg';
import imgGarten from '../../assets/images/services/garten.jpg';
import imgLieferung from '../../assets/images/services/lieferung.jpg';
import imgSenioren from '../../assets/images/services/senioren.jpg';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔹 Servis kartları verisi
  const homeServices = [
    { id: 1, title: '🏠 Umzüge (Wohnung, WG, Pflegeheim, Büro)', image: imgUmzug },
    { id: 2, title: '🛋️ Möbeltransporte & Mini-Umzüge', image: imgMoebel },
    { id: 3, title: '♻️ Entrümpelung & Sperrmüllentsorgung', image: imgEntruempelung },
    { id: 4, title: '🔧 Möbelmontage <br/> & <br/> Demontage Service', image: imgMontage },
    { id: 5, title: '🏡 Gartenarbeiten: Rasenmähen, Laub sammeln, Gartenabfälle entsorgen, Müllentsorgung', image: imgGarten },
    { id: 6, title: '🛒 Lieferung & Aufbau Ihrer Einkäufe von IKEA, Poco, Höffner & Co.', image: imgLieferung },
    { id: 7, title: '👵 Senioren Umzug & Hilfe beim Umzug für Ältere', image: imgSenioren },
  ];

  return (
    <>
      <Header />
      <HomeMain />

      {/* 🖼️ SABİT BANNER — Bannerın hemen altı */}
      
<section
  className="fixed-hero-banner"
  style={{
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#000',
  }}
  aria-label="Möbel Taxi Berlin – Fiyatı uygun, hızlı ve güvenilir taşımacılık"
>
  <img
    src={sabitBanner}
    alt="Möbel Taxi Berlin sabit banner"
    style={{
      width: '100%',
      height: 'clamp(240px, 40vw, 580px)',
      objectFit: window.innerWidth > 1024 ? 'contain' : 'cover', // ✅ masaüstünde tamamı görünür
      objectPosition: 'center center',
      display: 'block',
      backgroundColor: '#000',
    }}
    loading="eager"
    fetchpriority="high"
  />
</section>

      {/* 🌟 SEO DOSTU TANITIM BÖLÜMÜ */}
      <section className="home-intro-section py-5" style={{ backgroundColor: '#fafafa' }}>
        <div className="container">
          <h1 className="text-center mb-4 fw-bold" style={{ color: '#222' }}>
            Möbel Taxi Berlin | ab 39€* – Günstiges Möbel Taxi mit Fahrer in Berlin
          </h1>

          <div className="content" style={{ maxWidth: '900px', margin: '0 auto', color: '#333', lineHeight: '1.8' }}>
            <p>
              Suchen Sie ein <strong>Möbeltaxi in Berlin</strong>, das schnell, zuverlässig und günstig ist?
              Dann sind Sie bei <strong>moebeltaxiumzug.com</strong> genau richtig!
              Wir transportieren Ihre Möbel, Elektrogeräte und Einkäufe schon ab <strong>39€*</strong> quer durch Berlin und das Umland.
              Unser <strong>Möbeltransport Berlin</strong> Service bietet Ihnen faire Preise, erfahrene Fahrer und einen versicherten Transport.
            </p>

            <p>
              Egal ob Kühlschrank, Couch, Waschmaschine oder Schrank – wir bringen Ihre Möbel sicher und pünktlich ans Ziel.
              <strong> moebeltaxiumzug.com</strong> – Ihr Partner für Möbeltaxi, Kleintransporte und Umzüge in Berlin.
            </p>

            <h2 className="mt-5 fw-semibold" style={{ color: '#111' }}>Möbel Taxi Berlin | Bordstein zu Bordstein – Schnell & unkompliziert!</h2>
            <p>
              Unser beliebter Bordstein-zu-Bordstein-Service ist ideal für kurze Möbeltransporte in Berlin, etwa für Ebay-Käufe,
              IKEA-Transporte oder Baumarkt-Einkäufe. Ohne Tragehilfe, dafür schnell, günstig und flexibel.
            </p>

            <h3 className="mt-4 fw-semibold" style={{ color: '#111' }}>Möbel Taxi Berlin mit Tragehelfern – Wir übernehmen das Tragen!</h3>
            <p>
              Unsere Tragehelfer Berlin übernehmen das Schleppen für Sie! Ob Treppenhaus, Wohnung oder Büro –
              wir kümmern uns um den sicheren Transport Ihrer Möbel.
            </p>

            <h3 className="mt-4 fw-semibold" style={{ color: '#111' }}>Umzug Berlin | Möbel Taxi für Umzüge & Kleintransporte</h3>
            <p>
              Unser Service geht weit über einfache Transporte hinaus! Mit <strong>moebeltaxiumzug.com</strong> können Sie
              nicht nur Transporter mit Fahrer mieten, sondern auch komplette Umzugsteams mit LKW und Helfern buchen.
            </p>

            <h3 className="mt-4 fw-semibold" style={{ color: '#111' }}>Schnell & einfach per WhatsApp – 24/7 erreichbar!</h3>
            <p>
              Buchen Sie Ihr Möbeltaxi Berlin direkt per WhatsApp unter <strong>+49 1577 1677034</strong>.
              Wir sind <strong>24 Stunden täglich</strong> erreichbar – auch an Wochenenden!
            </p>

            <h3 className="mt-4 fw-semibold" style={{ color: '#111' }}>Möbel Taxi Berlin | Wir transportieren Ihren Einkauf sicher nach Hause!</h3>
            <p>
              Egal ob <strong>IKEA, OBI, Poco oder Ebay Kleinanzeigen</strong> – wir übernehmen den Transport Ihrer Einkäufe.
              Auf Wunsch zahlen wir auch in Vorleistung, wenn Sie uns Ihren Abholschein per WhatsApp senden.
            </p>

            <p className="mt-4">
              <strong>Möbel Taxi & Umzugsservice Berlin</strong> – ab 39€ schnell, sicher & zuverlässig!
              <br />
              📦 Möbeltaxi Berlin günstig – Umzug Berlin leicht gemacht!
            </p>
          </div>
        </div>
      </section>

      {/* 🚚 SERVİS KARTLARI - Tanıtımın hemen ardından */}
      <section className="services-page py-5">
        <div className="container">
          <div className="row">
            {homeServices.map((s, i) => (
              <ServiceCard
                key={s.id}
                id={s.id}
                title={s.title}
                image={s.image}
                delay={i * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <CtaSection
        className="cta-one"
        breadcrumbsImg={bannerbg}
        shapeImageUrl={shapeImageUrl}
        title="Brauchen Sie Hilfe? Kontaktieren Sie uns!"
        text="Brauchen Sie Hilfe?"
        phoneNumber="+49 1577 1677034"
      />

      <BackToTop scroll={isVisible} />
      <Footer />
    </>
  );
};

export default Home;