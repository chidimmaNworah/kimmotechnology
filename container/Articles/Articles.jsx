import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import styles from "./Articles.module.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { FaLockOpen, FaLongArrowAltDown } from "react-icons/fa";
import Link from "next/link";

const Articles = () => {
  const [abouts, setAbouts] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredIndex1, setHoveredIndex1] = useState(true);

  const API_URL = `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/about/abouts/`;

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setAbouts(response.data))
      .catch((error) => console.error("Error fetching abouts:", error));
  }, []);

  return (
    <>
      <div className={styles.app__about}>
        <h2 className="head-text">
          Most Viewed
          <br />
          Articles
        </h2>
        <Link href="" className={styles.secondtext}>
          <p>See more </p>
          <FaLongArrowAltDown />
        </Link>
        <div className={styles.app__profiles}>
          {abouts
            .reverse()
            .slice(0, 4)
            .map((about, index) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: "tween" }}
                className={styles.app__profile_item}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                key={about.title + index}
              >
                <img src={about.img_url} alt={about.title.split("_")[0]} />

                {/* Default text (visible by default, hidden on hover) */}
                <div
                  className={`${styles.overlay1} ${
                    hoveredIndex === index ? styles.hidden : styles.visible
                  }`}
                >
                  <h2 className="bold-text" style={{ marginTop: 20 }}>
                    {about.title.split("_")[0]}
                  </h2>
                  <p className="p-text" style={{ marginTop: 10 }}>
                    {about.description}
                  </p>
                </div>

                {/* Hover content (hidden by default, visible on hover) */}
                <div
                  className={`${styles.overlay} ${
                    hoveredIndex === index
                      ? styles.overlay_visible
                      : styles.overlay_hidden
                  }`}
                >
                  <Link
                    href={about.title.split("_")[1]}
                    className="bold-text"
                    style={{
                      marginTop: 20,
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <FaLockOpen className="mr-2" />
                    Read more
                  </Link>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Articles, "app__about"),
  "articles",
  "app__whitebg"
);
