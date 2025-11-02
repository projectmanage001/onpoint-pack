// src/pages/home/index.js
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async'; // ✅ eklendi
import HomeMain from './HomeMain';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';
import BackToTop from '../../components/elements/BackToTop';
import bannerbg from '../../assets/images/backgrounds/page-header-bg.jpg';
import CtaSection from '../../components/Common/CtaSection';
import shapeImageUrl from '../../assets/images/shapes/cta-one-shape-1.png';

// ✅ Sabit banner görseli (tam genişlik, responsive mantık)
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

// ✅ Yorumlar (footer'dan hemen önce gösterilecek)
import TestimonialsPreview from '../../components/Testimonial/TestimonialsPreview';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);

    // Ekran genişliğini dinle (masaüstü/mobil ayrımı)
    const mqDesktop = window.matchMedia('(min-width: 1024px)');
    const mqMobile  = window.matchMedia('(max-width: 767px)');

    const applyDesktop = e => setIsDesktop(e.matches);
    const applyMobile  = e => setIsMobile(e.matches);

    applyDesktop(mqDesktop);
    applyMobile(mqMobile);

    mqDesktop.addEventListener ? mqDesktop.addEventListener('change', applyDesktop) : mqDesktop.addListener(applyDesktop);
    mqMobile.addEventListener  ? mqMobile.addEventListener('change', applyMobile)   : mqMobile.addListener(applyMobile);

    return () => {
      window.removeEventListener('scroll', onScroll);
      mqDesktop.removeEventListener ? mqDesktop.removeEventListener('change', applyDesktop) : mqDesktop.removeListener(applyDesktop);
      mqMobile.removeEventListener  ? mqMobile.removeEventListener('change', applyMobile)   : mqMobile.removeListener(applyMobile);
    };
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
      {/* ✅ Sayfa-özel SEO (global index.html meta’larını tamamlar) */}
      <Helmet prioritizeSeoTags>
        <title>Möbeltaxi & Umzug Berlin – Günstig, schnell & zuverlässig ab 39€</title>
        <meta
          name="description"
          content="Möbeltaxi & Umzug Berlin: Schnell, zuverlässig und günstig ab 39€. Transporte, Mini-Umzüge, Möbelmontage, Entrümpelung & Lieferung (IKEA, Poco, Höffner). 24/7 WhatsApp: +49 1577 1677034."
        />
        <link rel="canonical" href="https://www.moebeltaxiumzug.com/" />
        {/* İstersen ana sayfa için OG/Twitter’ı da override edebilirsin; index.html’de varsa şart değil */}
      </Helmet>

      <Header />
      <HomeMain />

      {/* 🖼️ SABİT BANNER — Masaüstünde tam ekran, mobilde kırpmasız ve az boşluklu */}
      <section
        className="fixed-hero-banner"
        aria-label="Möbel Taxi Berlin – Fiyatı uygun, hızlı ve güvenilir taşımacılık"
        style={{
          width: '100%',
          // Masaüstünde tam ekran boy, mobilde otomatik yükseklik (fazla boşluk yok)
          minHeight: isDesktop ? '100vh' : 'auto',
          backgroundColor: '#fff',   // siyah çerçeve yerine beyaz zemin
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          // Yukarı/aşağıdaki bölümlerle boşluğu sıkı tut
          margin: 0,
          padding: 0,
        }}
      >
        <img
          src={sabitBanner}
          alt="Möbel Taxi Berlin sabit banner"
          style={{
            // Masaüstü: ekranı dolduracak şekilde contain ile tam görünüm
            // Mobil: genişliğe göre ölçeklen, yükseklik otomatik kalsın (fazla boşluk oluşmasın)
            width: isMobile ? '100%' : 'auto',
            height: isDesktop ? '100vh' : (isMobile ? 'auto' : 'auto'),
            maxWidth: isDesktop ? '100vw' : '100%',
            maxHeight: isDesktop ? '100vh' : '80vh', // mobil/tablette aşırı uzun olmasın
            objectFit: 'contain',
            display: 'block',
          }}
          loading="eager"
          fetchpriority="high"
          sizes="100vw"
        />
      </section>

      {/* 🌟 SEO DOSTU TANITIM BÖLÜMÜ */}
      <section
        className="home-intro-section"
        style={{
          backgroundColor: '#fafafa',
          // Mobilde üst padding’i küçült → banner ile aradaki boşluk azalır
          padding: isMobile ? '16px 0 28px' : '40px 0 48px',
        }}
      >
        <div className="container">
          <h1 className="text-center mb-4 fw-bold" style={{ color: '#222', marginTop: 0 }}>
            Möbel Taxi Berlin | ab 39€* – Günstiges Möbel Taxi mit Fahrer in Berlin
          </h1>

          <div className="content" style={{ maxWidth: '900px', margin: '0 auto', color: '#333', lineHeight: 1.8 }}>
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
      <section className="services-page py-5" style={{ paddingTop: isMobile ? 24 : undefined }}>
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

      {/* ⭐ YORUMLAR — Footer'dan hemen önce */}
      <TestimonialsPreview className="my-5" gapBottom={96} />

      <BackToTop scroll={isVisible} />
      <Footer />
    </>
  );
};

export default Home;