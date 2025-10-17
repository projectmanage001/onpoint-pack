// src/components/Service/ServiceCard.js
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceCard = ({ id, delay, iconClass, title }) => {
  return (
    <motion.div
      className="col-xl-4 col-lg-4 col-md-6 mb-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay || 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="services-one__single">
        <Link
          to={`/services/${id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="services-one__icon">
            <span className={iconClass} />
          </div>

          <h3
  className="services-one__title"
  dangerouslySetInnerHTML={{ __html: title }}
/>

          <div className="services-one__btn-box">
            <span className="thm-btn services-one__btn">
              Mehr erfahren <span />
            </span>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;