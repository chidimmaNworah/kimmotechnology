import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import styles from "./Header.module.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className={`${styles.app__header} app__flex`}>
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className={styles.app__header_info}
    >
      <div className={styles.app__header_badge}>
        <div className={`${styles.badge_cmp} app__flex`}>
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text text-black">Hello, Welcome to</p>
            <h1 className="head-text text-black" style={{ fontSize: "1.7rem" }}>
              Kimmotech
            </h1>
          </div>
        </div>

        <div className={`${styles.tag_cmp} app__flex`}>
          <p className="p-text text-black">Find all tech</p>
          <p className="p-text text-black">solutions here</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className={styles.app__header_img}
    >
      <img src="/assets/profile.png" alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src="/assets/circle.svg"
        alt="profile_circle"
        className={styles.overlay_circle}
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className={styles.app__header_circles}
    >
      <div className={`${styles.circle_cmp} app__flex`}>
        <img src="/assets/flutter.png" alt="flutter" />
        <img src="/assets/redux.png" alt="redux" />
        <img src="/assets/sass.png" alt="sass" />
      </div>
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
