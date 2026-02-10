import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
// import Logo from '../../assets/Kimmotech_Logo.png'
import { images } from "@/constants";
import { useRouter } from "next/router";
import {
  HiMenuAlt4,
  HiX,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
} from "react-icons/hi";
import { motion } from "framer-motion";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [visible, setVisible] = useState(false);

  const [isSticky, setIsSticky] = useState(false);

  const router = useRouter();

  // const getSectionId = (item) => {
  //   if (item === "skills" || item === "about") {
  //     return "expertises";
  //   }

  //   return item;
  // };

  const isMainNavActive = (item) => {
    if (item === "home") {
      return router.pathname === "/" || router.asPath === "/#home";
    }

    if (item === "projects") {
      return router.pathname.startsWith("/portfolio");
    }

    const sectionId = getSectionId(item);
    return router.asPath.endsWith(`#${sectionId}`);
  };

  const isCareersActive = router.pathname.startsWith("/careers");

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 100px
      if (window.scrollY > 400) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add the scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.app__navbar} ${
        isSticky ? styles.app__navbar_fixed : ""
      }`}
    >
      <div className={styles.app__navbar_logo}>
        <a href="/">
          <img src="/assets/Kimmotech_Logo.png" alt="Kimmotech-logo" />
        </a>
      </div>
      <ul className={styles.app__navbar_links}>
        {["home", "projects", "contact"].map((item) => (
          <li
            className={`app__flex p-text text-white ${
              isMainNavActive(item) ? styles.active : ""
            }`}
            key={`link-${item}`}
          >
            <div />
            {item === "projects" ? (
              <a href="/portfolio/allprojects">Projects</a>
            ) : (
              <a href={`/#${getSectionId(item)}`}>{item}</a>
            )}
          </li>
        ))}

        <li
          className={`app__flex p-text text-white ${
            isCareersActive ? styles.active : ""
          }`}
        >
          <div />
          <a href="/careers" target="_blank" rel="noreferrer">
            Careers
          </a>
        </li>
        <li className="app__flex p-text text-white">
          <div />
          <a href="https://blog.kimmotech.net" target="_blank" rel="noreferrer">
            Blog
          </a>
        </li>
        <li
          className="app__flex p-text text-white"
          onClick={() => setVisible(!visible)}
        >
          <div />
          <div>
            <p className="">
              RESOURCES {/* <span> */}
              {visible ? (
                <HiOutlineChevronUp />
              ) : (
                <HiOutlineChevronDown className="" />
              )}
              {/* </span> */}
            </p>
            {visible && (
              <span>
                <a
                  href="https://blog.kimmotech.net"
                  rel="noreferrer"
                  target="_blank"
                >
                  Blog
                </a>
                <a href="/careers" rel="noreferrer" target="_blank">
                  Careers
                </a>
                <a href="/recognitions" rel="noreferrer" target="_blank">
                  Recognitions
                </a>
                <a
                  href="/portfolio/allprojects"
                  rel="noreferrer"
                  target="_blank"
                >
                  All Projects
                </a>

                <a
                  href="https://blog.kimmotech.net/privacy-policy"
                  rel="noreferrer"
                  target="_blank"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://blog.kimmotech.net/terms-of-use"
                  rel="noreferrer"
                  target="_blank"
                >
                  Terms of use
                </a>
              </span>
            )}
          </div>
        </li>
      </ul>

      <div className={styles.app__navbar_menu}>
        {!toggle && <HiMenuAlt4 onClick={() => setToggle(true)} />}

        {toggle && (
          <div>
            {/* <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            > */}
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "projects", "about", "contact"].map((item) => (
                <li
                  key={item}
                  className={
                    isMainNavActive(item) && item !== "about"
                      ? styles.active
                      : ""
                  }
                >
                  {item === "projects" ? (
                    <a
                      href="/portfolio/allprojects"
                      onClick={() => setToggle(false)}
                    >
                      Projects
                    </a>
                  ) : (
                    <a
                      href={`#${getSectionId(item)}`}
                      onClick={() => setToggle(false)}
                    >
                      {item}
                    </a>
                  )}
                </li>
              ))}

              <li className={isCareersActive ? styles.active : ""}>
                <a
                  href="https://blog.kimmotech.net"
                  rel="noreferrer"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li className={isCareersActive ? styles.active : ""}>
                <a href="/careers" rel="noreferrer" target="_blank">
                  Careers
                </a>
              </li>
              <li
                className={`${styles.app__flex} ${styles.p_text} ${styles.pages_dropdown}`}
                onClick={() => setVisible(!visible)}
              >
                RESOURCES{" "}
                <span>
                  {visible ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
                </span>
              </li>
              {visible && (
                <ul className={styles.visible_pages}>
                  <li>
                    <a
                      href="/resources/recognitions"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Recognitions
                    </a>
                  </li>
                  <li>
                    <a
                      href="/portfolio/allprojects"
                      rel="noreferrer"
                      target="_blank"
                    >
                      All Projects
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="/coverletters/bento"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Bento Cover Letter
                    </a>
                  </li> */}
                </ul>
              )}
            </ul>

            {/* </motion.div> */}
          </div>
        )}
      </div>
    </nav>
  );
}

// export default Navbar;
