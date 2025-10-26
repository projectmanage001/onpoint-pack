import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./ServiceCard.css";

/**
 * Props:
 *  - id: number | string      (zorunlu)
 *  - image: string            (önerilir)
 *  - title: string (HTML olabilir: <br/> vs.)
 *  - delay: number            (opsiyonel, giriş animasyonu gecikmesi)
 */
const ServiceCard = ({ id, image, title, delay = 0.1 }) => {
  return (
    <motion.div
      className="col-xl-4 col-lg-4 col-md-6 mb-4"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Link to={`/services/${id}`} className="svc-min-card">
        <div className="svc-min-card__media">
          {image ? (
            <img
              src={image}
              alt={String(title).replace(/<[^>]*>?/gm, "")}
              loading="lazy"
            />
          ) : (
            <div className="svc-min-card__ph" />
          )}
        </div>

        <h3
          className="svc-min-card__title"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <span className="svc-min-card__btn">Mehr erfahren</span>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;