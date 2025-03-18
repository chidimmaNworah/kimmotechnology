import React, { useEffect, useState } from "react";
import styles from "./JobNavbar.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import { HiMenuAlt4, HiX } from "react-icons/hi";

export default function Job() {
  const [toggle, setToggle] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;
  const isActive = (path) => (currentPath === path ? styles.active : "");

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = window.innerWidth * 0.5;
      setIsSticky(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
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
          <li className="app__flex">
            <div />
            <a href="/careers/jobs" target="_blank" rel="noreferrer">
              JOBS
            </a>
          </li>
          <li className="app__flex">
            <div />
            <a href="/careers/workshops" target="_blank" rel="noreferrer">
              WORKSHOPS
            </a>
          </li>
          <li className="app__flex">
            <div />
            <a href="/careers/scholarships" target="_blank" rel="noreferrer">
              SCHOLARSHIPS
            </a>
          </li>

          <li className="app__flex">
            <div />
            <a href="/careers/grants" target="_blank" rel="noreferrer">
              GRANTS
            </a>
          </li>
        </ul>
        <div className={styles.app__navbar_menu}>
          {!toggle && <HiMenuAlt4 onClick={() => setToggle(true)} />}

          {toggle && (
            <div>
              <HiX onClick={() => setToggle(false)} />
              <ul>
                <li className="font-bold text-[#313BAC]">MENU</li>
                <li>
                  <a
                    href="/careers/jobs"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setToggle(false)}
                  >
                    JOBS
                  </a>
                </li>
                <li>
                  <a
                    href="/careers/workshops"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setToggle(false)}
                  >
                    WORKSHOPS
                  </a>
                </li>
                <li>
                  <a
                    href="/careers/scholarships"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setToggle(false)}
                  >
                    SCHOLARSHIPS
                  </a>
                </li>
                <li>
                  <a
                    href="/careers/grants"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setToggle(false)}
                  >
                    GRANTS
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
