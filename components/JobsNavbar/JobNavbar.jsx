import React, { useEffect, useState } from "react";
import styles from "./JobNavbar.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import { HiMenuAlt4, HiX } from "react-icons/hi";

export default function JobNavbar({ activeField, setActiveField }) {
  const [toggle, setToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();

  const navItems = [
    { field: null, label: "HOME" },
    { field: "jobs", label: "JOBS" },
    { field: "workshops", label: "WORKSHOPS" },
    { field: "scholarships", label: "SCHOLARSHIPS" },
    { field: "grants", label: "GRANTS" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (field) => {
    setActiveField(field); // This will trigger filtering
    setToggle(false);
  };

  return (
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
        {navItems.map(({ field, label }) => (
          <li key={label} className={`app__flex`}>
            <div />
            <button
              onClick={() => handleClick(field)}
              className={`${activeField === field ? styles.active : ""}`}
            >
              {label}
            </button>
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
              {navItems.map(({ field, label }) => (
                <li key={label}>
                  <button
                    onClick={() => handleClick(field)}
                    className={`${activeField === field ? styles.active : ""}`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
