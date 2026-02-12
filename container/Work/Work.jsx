import React, { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Work.module.scss";

const Work = ({ works }) => {
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [categories, setCategories] = useState([]);
  const [selectedWork, setSelectedWork] = useState(null);

  useEffect(() => {
    if (works?.length) {
      const allCategories = works.flatMap((w) =>
        w.categories?.map((c) => c.name)
      );
      const uniqueCategories = [...new Set(allCategories)];
      setCategories(["All", ...uniqueCategories]);
      setFilterWork(works.slice(0, 12));
    }
  }, [works]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    if (item === "All") {
      setFilterWork(works.slice(0, 12));
    } else {
      setFilterWork(
        works
          .filter((work) => work.categories?.some((cat) => cat.name === item))
          .slice(0, 12)
      );
    }
  };

  return (
    <section id="work" className={styles.section}>
      <div className={styles.container}>
        {/* Section header */}
        <div className={styles.sectionHeader}>
          <span className={styles.label}>Portfolio</span>
          <h2 className={styles.title}>
            Works & <span className={styles.accent}>Projects</span>
          </h2>
          <p className={styles.subtitle}>
            A curated selection of our latest digital creations
          </p>
        </div>

        {/* Filter tabs */}
        <div className={styles.filters}>
          {categories.map((item, index) => (
            <button
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`${styles.filterBtn} ${
                activeFilter === item ? styles.filterActive : ""
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filterWork.map((work, index) => (
              <motion.div
                key={work.id || index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={styles.card}
              >
                <div className={styles.cardImage}>
                  <img
                    src={work.img_url}
                    alt={work.title}
                    loading="lazy"
                  />
                  <div className={styles.cardOverlay}>
                    <a
                      href={work.preview_link}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.viewBtn}
                    >
                      <AiFillEye />
                      <span>Preview</span>
                    </a>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardTags}>
                    {work.categories?.map((cat, i) => (
                      <span key={i} className={styles.tag}>
                        {cat.name}
                      </span>
                    ))}
                  </div>
                  <h3 className={styles.cardTitle}>{work.title}</h3>
                  <p
                    className={styles.cardDesc}
                    onClick={() => setSelectedWork(work)}
                  >
                    {work.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all link */}
        <div className={styles.viewAll}>
          <a href="/portfolio/allprojects" className={styles.viewAllLink}>
            View All Projects
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3 8h10m0 0L9 4m4 4L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.modalBackdrop}
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <h3>{selectedWork.title}</h3>
              <p>{selectedWork.description}</p>
              <div className={styles.modalActions}>
                {selectedWork.preview_link && (
                  <a
                    href={selectedWork.preview_link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.modalPrimary}
                  >
                    Visit Project
                  </a>
                )}
                <button
                  onClick={() => setSelectedWork(null)}
                  className={styles.modalClose}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
