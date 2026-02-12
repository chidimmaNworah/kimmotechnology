import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Articles.module.scss";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Articles = ({ abouts }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="articles" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.label}>Insights</span>
          <h2 className={styles.title}>
            Most Viewed <span className={styles.accent}>Articles</span>
          </h2>
          <p className={styles.subtitle}>
            Dive into our latest thinking on technology, design and digital strategy
          </p>
        </div>

        <div className={styles.grid}>
          {abouts
            ?.slice()
            .reverse()
            .slice(0, 4)
            .map((about, index) => (
              <motion.div
                key={about.title + index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.card}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={styles.cardImage}>
                  <img src={about.img_url} alt={about.title.split("_")[0]} />
                  <div
                    className={`${styles.cardOverlay} ${
                      hoveredIndex === index ? styles.overlayVisible : ""
                    }`}
                  >
                    <Link
                      href={about.title.split("_")[1] || "#"}
                      className={styles.readLink}
                    >
                      Read Article
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>
                    {about.title.split("_")[0]}
                  </h3>
                  <p className={styles.cardDesc}>{about.description}</p>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
