// src/components/Testimonial/TestimonialsPreview.jsx
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialsPreview = ({
  className = "",
  items,
  showImage = false,   // görsel kapalı
  compact = true,      // kompakt kart
  autoplay = true,     // otomatik kaydırma
  intervalMs = 4000,   // 4 sn
  gapBottom = 40,      // footer’dan önce boşluk (px)
}) => {
  // Varsayılan 10 gerçekçi yorum (Berlin ve çevresi)
  const data = useMemo(
    () =>
      items?.length
        ? items
        : [
            {
              clientName: "Familie K.",
              clientTitle: "Privatumzug • Prenzlauer Berg",
              rating: 5,
              testimonialText:
                "Sehr pünktlich und freundlich. Unsere 3-Zimmer-Wohnung war schneller umgezogen als gedacht. Möbel wurden professionell gesichert – klare Empfehlung.",
            },
            {
              clientName: "Herr S.",
              clientTitle: "Möbeltransport • Neukölln → Charlottenburg",
              rating: 5,
              testimonialText:
                "Spontan am selben Tag einen Transport bekommen. Couch und Esstisch kamen ohne Kratzer an. Preis fair, Kommunikation per WhatsApp super.",
            },
            {
              clientName: "Start-up Team",
              clientTitle: "Büroumzug • Friedrichshain",
              rating: 5,
              testimonialText:
                "Monitore, Schreibtische, Kartons – alles sauber verpackt und beschriftet. Team war strukturiert, zügig und sehr freundlich. Gerne wieder!",
            },
            {
              clientName: "Frau L.",
              clientTitle: "Entrümpelung • Spandau",
              rating: 5,
              testimonialText:
                "Kellerentrümpelung inkl. Abtransport. Diskret, sauber und schnell erledigt. Fixpreis eingehalten. Hat uns viel Stress abgenommen.",
            },
            {
              clientName: "Herr & Frau M.",
              clientTitle: "Seniorenumzug • Steglitz",
              rating: 5,
              testimonialText:
                "Sehr einfühlsames Team. Ein- und Auspacken sowie Möbelaufbau perfekt. Alles in Ruhe erklärt, keine Hektik. Herzlichen Dank!",
            },
            {
              clientName: "Kunde aus Potsdam",
              clientTitle: "Möbeltaxi • IKEA Abholung",
              rating: 4,
              testimonialText:
                "IKEA-Einkauf wurde pünktlich abgeholt und bis in die Wohnung getragen. Ein Karton war leicht eingedrückt, Inhalt aber unbeschädigt. Insgesamt top Service.",
            },
            {
              clientName: "Frau R.",
              clientTitle: "Montage • Pankow",
              rating: 5,
              testimonialText:
                "Kleiderschrank + Regal fachgerecht aufgebaut, alte Verpackung mitgenommen. Werkzeug alles dabei, sehr sauber gearbeitet. Preis-Leistung stimmt.",
            },
            {
              clientName: "Herr T.",
              clientTitle: "Kleintransport • Kreuzberg",
              rating: 5,
              testimonialText:
                "Ebay-Kleinanzeigen-Fund schnell geholt. Fahrer hat beim Tragen geholfen, Treppenhaus kein Problem. Bezahlung unkompliziert, transparent.",
            },
            {
              clientName: "WG-Team",
              clientTitle: "Mini-Umzug • Wedding",
              rating: 4,
              testimonialText:
                "Für einen Mini-Umzug absolut ideal. Zwei Fahrten, alles gut gesichert. Ein Karton hat sich gelöst, wurde sofort nachgesichert – professionell gelöst.",
            },
            {
              clientName: "Herr B.",
              clientTitle: "Bundesweiter Transport • Berlin → Leipzig",
              rating: 5,
              testimonialText:
                "Terminabsprache verbindlich, Ankunft auf die Minute. TV und Glasvitrine extra geschützt. Versicherungspapiere wurden vorab geschickt – sehr seriös.",
            },
          ],
    [items]
  );

  const [index, setIndex] = useState(0);

  // Otomatik kaydırma
  useEffect(() => {
    if (!autoplay || data.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [autoplay, data.length, intervalMs]);

  const goPrev = () => setIndex((p) => (p - 1 + data.length) % data.length);
  const goNext = () => setIndex((p) => (p + 1) % data.length);

  const item = data[index];

  // Kompakt, görselsiz kart stili
  const cardStyle = {
    width: "100%",
    maxWidth: compact ? 620 : 760,
    margin: "0 auto",
    background: "#fff",
    borderRadius: 16,
    padding: compact ? "20px 22px" : "28px 30px",
    boxShadow: "0 8px 24px rgba(0,0,0,.08), 0 2px 8px rgba(0,0,0,.04)",
  };

  const starRow = (
    <div style={{ display: "flex", gap: 4, marginBottom: 10 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            fontSize: compact ? 16 : 18,
            lineHeight: 1,
            opacity: i < (item?.rating || 0) ? 1 : 0.3,
          }}
        >
          ★
        </span>
      ))}
      <span className="sr-only">{item?.rating || 0} von 5 Sternen</span>
    </div>
  );

  return (
    <section
      className={`home-testimonials-preview ${className}`}
      aria-label="Kundenbewertungen"
      style={{
        padding: "40px 0",
        marginBottom: gapBottom, // footer’dan önce boşluk
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="container">
        {/* Başlık */}
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <h2
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: "#111",
              margin: 0,
            }}
          >
            Was unsere Kunden sagen
          </h2>
          <p style={{ color: "#555", marginTop: 8 }}>
            Echte Erfahrungen – zuverlässig, freundlich, pünktlich.
          </p>
        </div>

        {/* Tek kart + yumuşak geçiş */}
        <div style={{ position: "relative" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              style={cardStyle}
            >
              {/* Görsel kapalı (showImage=false). Dilersen açabilirsin. */}
              {showImage && item?.imageUrl ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 14,
                  }}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.clientName}
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ) : null}

              {starRow}

              <p
                style={{
                  color: "#333",
                  lineHeight: 1.7,
                  marginBottom: 14,
                  fontSize: compact ? 15.5 : 16.5,
                }}
              >
                {item?.testimonialText}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "baseline",
                  color: "#111",
                  fontWeight: 600,
                }}
              >
                <span>{item?.clientName}</span>
                <span
                  style={{
                    color: "#666",
                    fontWeight: 500,
                    fontSize: 14,
                  }}
                >
                  • {item?.clientTitle}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Önceki / Sonraki düğmeler */}
          {data.length > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Vorheriges Testimonial"
                style={navBtnStyle("left")}
              >
                ‹
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Nächstes Testimonial"
                style={navBtnStyle("right")}
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Nokta göstergeleri */}
        {data.length > 1 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 8,
              marginTop: 14,
            }}
            role="tablist"
            aria-label="Testimonial navigation dots"
          >
            {data.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Gehe zu Kommentar ${i + 1}`}
                aria-selected={i === index}
                role="tab"
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  border: 0,
                  background: i === index ? "#111" : "#d0d0d0",
                  transition: "background .2s",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// Küçük ve zarif ok düğmeleri
const navBtnStyle = (side) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  [side]: -2,
  width: 36,
  height: 36,
  borderRadius: 999,
  border: "1px solid rgba(0,0,0,.12)",
  background: "#fff",
  boxShadow: "0 6px 16px rgba(0,0,0,.08)",
  display: "grid",
  placeItems: "center",
  cursor: "pointer",
  fontSize: 20,
  lineHeight: 1,
  color: "#111",
});

export default TestimonialsPreview;