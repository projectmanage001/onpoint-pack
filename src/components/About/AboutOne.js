import React from "react";
import { Helmet } from "react-helmet-async";

const AboutOne = () => {
  const title = "Über uns | Möbel Taxi Umzug Berlin – Umzüge & Entrümpelung";
  const description =
    "Ihr zuverlässiger Umzugs- und Entrümpelungsservice in Berlin & ganz Deutschland. Privatumzug, Firmenumzug, Senioren-Umzug, Entrümpelung, Sperrmüll, Gartenpflege & Entsorgung – schnell, professionell und preiswert. Jetzt unverbindlich anfragen!";
  const canonical = "https://www.moebeltaxiumzug.com/about";

  // JSON-LD: LocalBusiness + BreadcrumbList (zengin sonuç desteği)
  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Möbel Taxi Umzug Berlin",
    "url": "https://www.moebeltaxiumzug.com/",
    "telephone": "+49 1577 1677034",
    "priceRange": "€€",
    "image": "https://www.moebeltaxiumzug.com/images/og-preview.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Zeppelinstraße 75",
      "postalCode": "13583",
      "addressLocality": "Berlin",
      "addressCountry": "DE"
    },
    "areaServed": [
      { "@type": "City", "name": "Berlin" },
      { "@type": "AdministrativeArea", "name": "Brandenburg" },
      { "@type": "Country", "name": "Deutschland" }
    ],
    "sameAs": []
  };

  const breadcrumbsLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://www.moebeltaxiumzug.com/" },
      { "@type": "ListItem", "position": 2, "name": "Über uns", "item": canonical }
    ]
  };

  // Inline buton stilleri (harici CSS'e dokunmuyoruz)
  const phoneBtnStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    borderRadius: "999px",
    padding: "12px 18px",
    fontWeight: 700,
    letterSpacing: ".2px",
    textDecoration: "none",
    background: "#FFD100", // sarı
    color: "#111",          // siyah yazı
    border: "2px solid #E8BE00",
    boxShadow: "0 8px 18px rgba(0,0,0,.10)",
  };

  const waBtnStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    borderRadius: "999px",
    padding: "12px 18px",
    fontWeight: 700,
    letterSpacing: ".2px",
    textDecoration: "none",
    background: "#25D366", // WhatsApp yeşili
    color: "#fff",          // beyaz yazı
    border: "2px solid #1CB455",
    boxShadow: "0 8px 18px rgba(0,0,0,.10)",
  };

  const iconStyle = { width: 20, height: 20, display: "block" };

  return (
    <section className="about-one about-two" itemScope itemType="https://schema.org/AboutPage">
      <Helmet prioritizeSeoTags>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />

        {/* Open Graph (index.html genel OG var; burada sayfa özel başlık/açıklama güncel) */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(localBusinessLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbsLd)}</script>
      </Helmet>

      <div className="container">
        <div className="row align-items-center">
          {/* Sol kolon (ileride görsel eklemek istersen diye yer bırakıldı, dokunmadım) */}
          {/* <div className="col-xl-6">
              ... görsel vb. ...
          </div> */}

          {/* Sağ taraf: içerik */}
          <div className="col-xl-6">
            <div className="about-one__content">
              <div className="section-title text-left mb-4">
                <span className="section-title__tagline" itemProp="alternativeHeadline">
                  Über Uns
                </span>
                <h1 className="section-title__title" itemProp="headline">
                  Ihr zuverlässiger Umzugs- und Entrümpelungsservice in Berlin &amp; ganz Deutschland
                </h1>
              </div>

              <div itemProp="mainEntity" itemScope itemType="https://schema.org/Organization">
                <meta itemProp="name" content="Möbel Taxi Umzug Berlin" />
                <p className="about-one__text" style={{ fontSize: "18px", lineHeight: 1.8 }} itemProp="description">
                  Willkommen bei <strong>Möbel Taxi Umzug</strong> – Ihrem professionellen Partner
                  für <strong>Umzüge, Entrümpelung, Sperrmüll, Gartenpflege</strong> und <strong>Entsorgung</strong> in
                  Berlin und in ganz Deutschland.
                </p>

                <p className="about-one__text mt-3" style={{ fontSize: "18px", lineHeight: 1.8 }}>
                  Unser erfahrenes Team besteht aus <strong>qualifizierten Umzugshelfern</strong>,{" "}
                  <strong>Tragekräften</strong> und <strong>erfahrenen Monteuren</strong>, die seit vielen Jahren in der
                  Branche tätig sind. Wir legen großen Wert auf <strong>Zuverlässigkeit</strong>, <strong>Sorgfalt</strong>{" "}
                  und <strong>Kundenzufriedenheit</strong> – denn Ihr Umzug soll für Sie so stressfrei wie möglich
                  ablaufen.
                </p>

                <p className="about-one__text mt-3" style={{ fontSize: "18px", lineHeight: 1.8 }}>
                  Egal ob <strong>Privatumzug</strong>, <strong>Firmenumzug</strong> oder <strong>Senioren-Umzug</strong> – wir übernehmen die
                  komplette <strong>Organisation</strong>, den sicheren <strong>Transport</strong> sowie die fachgerechte{" "}
                  <strong>Montage</strong> Ihrer Möbel. Auch bei <strong>Entrümpelungen</strong>,{" "}
                  <strong>Sperrmüllabholungen</strong> und der <strong>Gartenpflege</strong> stehen wir Ihnen mit Rat und
                  Tat zur Seite.
                </p>

                <p className="about-one__text mt-3" style={{ fontSize: "18px", lineHeight: 1.8 }}>
                  Dank unserer langjährigen Erfahrung und unserem professionellen Service haben wir uns in Berlin und
                  deutschlandweit einen Namen als <strong>zuverlässiges Umzugsunternehmen</strong> gemacht. Vertrauen Sie
                  auf <strong>Möbel Taxi Umzug</strong> – schnell, professionell und preiswert.
                </p>

                <p className="about-one__text mt-3" style={{ fontSize: "18px", lineHeight: 1.8 }}>
                  Kontaktieren Sie uns noch heute für ein <strong>unverbindliches Angebot</strong>!
                </p>

                {/* Dahili SEO linkleri (site içi bağlar, tarayıcıya yol gösterir) */}
                <nav aria-label="Interne Services" className="mt-3">
                  <ul className="list-unstyled" style={{ marginBottom: 0 }}>
                    <li>
                      <a href="/services" className="text-decoration-underline">Leistungen (Übersicht)</a>
                    </li>
                    <li>
                      <a href="/contact" className="text-decoration-underline">Kostenlose Anfrage stellen</a>
                    </li>
                    <li>
                      <a href="/blog" className="text-decoration-underline">Tipps &amp; Ratgeber im Blog</a>
                    </li>
                  </ul>
                </nav>

                {/* Hızlı CTA (kullanıcı niyeti yüksek) */}
                <div className="mt-4" role="group" aria-label="Schneller Kontakt">
                  <a
                    href="tel:+4915771677034"
                    className="btn btn-primary me-2"
                    aria-label="Jetzt anrufen"
                    style={phoneBtnStyle}
                  >
                    {/* Telefon ikonu */}
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={iconStyle}>
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.98.35 1.93.66 2.85a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.23-1.23a2 2 0 0 1 2.11-.45c.92.31 1.87.53 2.85.66A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    Jetzt anrufen: +49 1577 1677034
                  </a>

                  <a
                    href="https://wa.me/4915771677034?text=Hallo!%20Ich%20möchte%20eine%20Anfrage%20stellen."
                    className="btn btn-outline-secondary"
                    aria-label="Per WhatsApp anfragen"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={waBtnStyle}
                  >
                    {/* WhatsApp ikonu */}
                    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" style={iconStyle}>
                      <path d="M19.11 17.17c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14s-.7.88-.86 1.06c-.16.18-.32.2-.59.07-.27-.14-1.12-.41-2.13-1.31-.79-.7-1.32-1.57-1.48-1.84-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34s-.96.94-.96 2.29 1 2.66 1.14 2.84c.14.18 1.98 3.02 4.8 4.23.67.29 1.19.46 1.6.59.67.21 1.28.18 1.77.11.54-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"/>
                      <path d="M16.02 3.1A12.89 12.89 0 0 0 3.1 16.02c0 2.27.6 4.47 1.74 6.41L3 29l6.75-1.77a12.85 12.85 0 0 0 6.27 1.62h.01A12.89 12.89 0 1 0 16.02 3.1zm7.98 20.87a10.9 10.9 0 0 1-15.23 1.22l-.44-.35-4.01 1.05 1.07-3.91-.36-.45A10.92 10.92 0 1 1 24 23.97z"/>
                    </svg>
                    Per WhatsApp anfragen
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Eğer iki sütunlu düzen kullanıyorsan ve sol görsel alanı açıksa, üstteki yorum satırını kaldırıp buraya görsel ekleyebilirsin. */}
        </div>
      </div>
    </section>
  );
};

export default AboutOne;