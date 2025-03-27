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
          <Link href="/">
            <img src="/assets/Kimmotech_Logo.png" alt="Kimmotech-logo" />
          </Link>
        </div>
        <ul className={styles.app__navbar_links}>
          {[
            { path: "/careers", label: "HOME" },
            { path: "/careers/jobs", label: "JOBS" },
            { path: "/careers/workshops", label: "WORKSHOPS" },
            { path: "/careers/scholarships", label: "SCHOLARSHIPS" },
            { path: "/careers/grants", label: "GRANTS" },
          ].map(({ path, label }) => (
            <li key={path} className={`app__flex`}>
              <div />
              <Link href={path} className={`${isActive(path)}`}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.app__navbar_menu}>
          {!toggle && <HiMenuAlt4 onClick={() => setToggle(true)} />}
          {toggle && (
            <div>
              <HiX onClick={() => setToggle(false)} />
              <ul>
                <li className="font-bold text-[#313BAC]">MENU</li>
                {[
                  { path: "/careers", label: "HOME" },
                  { path: "/careers/jobs", label: "JOBS" },
                  { path: "/careers/workshops", label: "WORKSHOPS" },
                  { path: "/careers/scholarships", label: "SCHOLARSHIPS" },
                  { path: "/careers/grants", label: "GRANTS" },
                ].map(({ path, label }) => (
                  <li key={path}>
                    <Link
                      href={path}
                      className={isActive(path)}
                      onClick={() => setToggle(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
