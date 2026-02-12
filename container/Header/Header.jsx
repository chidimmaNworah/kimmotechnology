import React from "react";
import { motion } from "framer-motion";
import styles from "./Header.module.scss";

const Header = () => (
  <section className={styles.hero}>
    {/* Ambient background effects */}
    <div className={styles.ambientOrb1} />
    <div className={styles.ambientOrb2} />
    <div className={styles.gridOverlay} />

    <div className={styles.content}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={styles.textBlock}
      >
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Available for new projects
        </div>

        <h1 className={styles.headline}>
          We Build
          <br />
          <span className={styles.gradientWord}>Digital</span> Products
          <br />
          That Matter
        </h1>

        <p className={styles.subtext}>
          Kimmotech is your trusted partner for web development, UI/UX design,
          and digital transformation. We turn bold ideas into polished,
          high-performance experiences.
        </p>

        <div className={styles.actions}>
          <a href="/#work" className={styles.primaryBtn}>
            View Our Work
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className={styles.arrow}
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
          <a href="/#contact" className={styles.secondaryBtn}>
            Start a Project
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={styles.visual}
      >
        <div className={styles.imageFrame}>
          <img src="/assets/profile.png" alt="Kimmotech" />
          <div className={styles.imageGlow} />
        </div>

        {/* Floating tech badges */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className={`${styles.floatingBadge} ${styles.badge1}`}
        >
          <img src="/assets/react.png" alt="React" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className={`${styles.floatingBadge} ${styles.badge2}`}
        >
          <img src="/assets/sass.png" alt="Sass" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className={`${styles.floatingBadge} ${styles.badge3}`}
        >
          <img src="/assets/flutter.png" alt="Flutter" />
        </motion.div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className={styles.scrollIndicator}
    >
      <div className={styles.scrollLine} />
    </motion.div>
  </section>
);

export default Header;
