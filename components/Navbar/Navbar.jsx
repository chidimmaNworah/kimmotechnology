import React, { useEffect, useState, useRef } from "react";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";
import { HiMenuAlt4, HiX, HiOutlineChevronDown } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const resourcesRef = useRef(null);
  const router = useRouter();

  const isActive = (item) => {
    if (item === "home") return router.pathname === "/";
    if (item === "projects") return router.pathname.startsWith("/portfolio");
    if (item === "careers") return router.pathname.startsWith("/careers");
    return false;
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close resources dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/portfolio/allprojects" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "https://blog.kimmotech.net", external: true },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <img src="/assets/Kimmotech_Logo.png" alt="Kimmotech" />
        </Link>

        {/* Desktop Links */}
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`${styles.link} ${
                  isActive(link.label.toLowerCase()) ? styles.activeLink : ""
                }`}
                {...(link.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Resources Dropdown */}
          <li ref={resourcesRef} className={styles.dropdown}>
            <button
              className={styles.link}
              onClick={() => setResourcesOpen(!resourcesOpen)}
            >
              Resources
              <HiOutlineChevronDown
                className={`${styles.chevron} ${
                  resourcesOpen ? styles.chevronOpen : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {resourcesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className={styles.dropdownMenu}
                >
                  <Link href="/portfolio/allprojects">All Projects</Link>
                  <Link
                    href="https://blog.kimmotech.net"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Blog
                  </Link>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                  <Link href="/terms-of-use">Terms of Use</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        </ul>

        {/* CTA Button (desktop) */}
        <Link href="/#contact" className={styles.cta}>
          Get in Touch
        </Link>

        {/* Mobile Toggle */}
        <button
          className={styles.menuBtn}
          onClick={() => setToggle(!toggle)}
          aria-label="Toggle menu"
        >
          {toggle ? <HiX /> : <HiMenuAlt4 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={styles.mobileMenu}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`${styles.mobileLink} ${
                  isActive(link.label.toLowerCase())
                    ? styles.mobileLinkActive
                    : ""
                }`}
                onClick={() => setToggle(false)}
                {...(link.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className={styles.mobileCta}
              onClick={() => setToggle(false)}
            >
              Get in Touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
