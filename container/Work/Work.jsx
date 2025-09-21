import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import styles from "./Work.module.scss";

const Work = ({ works }) => {
  const [filterWork, setFilterWork] = useState(works);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.category.name === item));
      }
    }, 500);
  };

  return (
    <div className="w-full">
      <div className={styles.app__works}>
        <h2 className="head-text text-black">
          Works & <span>Projects</span>
        </h2>

        <p className={styles.viewall}>
          <a href="/portfolio/allprojects">View All</a>
        </p>

        <div className={styles.app__work_filter}>
          {[
            "Landing Pages",
            "E-Commerce",
            "Dashboards",
            "Blogs & News",
            "All",
          ].map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`${styles.app__work_filter_item} ${
                styles.app__flex
              } p-text ${activeFilter === item ? styles.itemactive : ""}`}
            >
              {item}
            </div>
          ))}
        </div>

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className={styles.app__work_portfolio}
        >
          {filterWork
            ?.slice(0, 6)
            .reverse()
            .map((work, index) => (
              <div
                key={index}
                className={`${styles.app__work_item} ${styles.app__flex}`}
              >
                <div
                  className={`${styles.app__work_img} ${styles.app__flex}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img src={work.img_url} alt={work.title} />

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                      staggerChildren: 0.5,
                    }}
                    className={`${styles.app__work_hover} ${styles.app__flex}`}
                  >
                    <a
                      href={work.preview_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className={`${styles.app__flex}`}
                      >
                        <AiFillEye />
                      </motion.div>
                    </a>
                    {/* <a href={work.github_link} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className={`${styles.app__flex}`}
                      >
                        <AiFillGithub />
                      </motion.div>
                    </a> */}
                  </motion.div>
                </div>

                <div
                  className={`${styles.app__work_content} ${styles.app__flex}`}
                >
                  <h4 className="bold-text">{work.title}</h4>
                  <p className="p-text " style={{ marginTop: 10 }}>
                    {work.description}
                  </p>

                  <div
                    className={`${styles.app__work_tag} ${styles.app__flex}`}
                  >
                    <p className="p-text">{work.category.name}</p>
                  </div>
                </div>
              </div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

// export default AppWrap(
//   MotionWrap(Work, "app__works"),
//   "work",
//   "app__primarybg"
// );

const WrappedWorks = AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);

export default (props) => <WrappedWorks {...props} />;
