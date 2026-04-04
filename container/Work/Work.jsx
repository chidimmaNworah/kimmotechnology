import React, { useState, useEffect, useRef } from "react";
import { AiFillEye } from "react-icons/ai";
import { HiChevronDown } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import styles from "./Work.module.scss";
import Link from "next/link";

// Helper to strip HTML tags for plain text display
const stripHtml = (html) => {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
};

const LIMIT = 6;
const MAX_VISIBLE_FILTERS = 4; // First 4 + "View more" dropdown

const Work = ({ works }) => {
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [categories, setCategories] = useState(["All"]);
  const [selectedWork, setSelectedWork] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch categories from the database
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/category/categories/`,
        );
        const catNames = (res.data || []).map((c) => c.name);
        setCategories(["All", ...catNames]);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (works?.length) {
      const sorted = [...works].sort((a, b) => {
        // Sort by updated_at if available, fallback to id
        if (a.updated_at && b.updated_at) {
          return new Date(b.updated_at) - new Date(a.updated_at);
        }
        return b.id - a.id;
      });
      setFilterWork(sorted.slice(0, LIMIT));
    }
  }, [works]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setIsDropdownOpen(false);
    const sorted = [...works].sort((a, b) => {
      if (a.updated_at && b.updated_at) {
        return new Date(b.updated_at) - new Date(a.updated_at);
      }
      return b.id - a.id;
    });
    if (item === "All") {
      setFilterWork(sorted.slice(0, LIMIT));
    } else {
      setFilterWork(
        sorted.filter((work) => work.category?.name === item).slice(0, LIMIT),
      );
    }
  };

  // Split categories into visible and dropdown
  const visibleCategories = categories.slice(0, MAX_VISIBLE_FILTERS);
  const dropdownCategories = categories.slice(MAX_VISIBLE_FILTERS);
  const hasDropdown = dropdownCategories.length > 0;

  // Check if active filter is in dropdown
  const isActiveInDropdown = dropdownCategories.includes(activeFilter);

  return (
    <section id="work" className={styles.section}>
      <div className={styles.container}>
        {/* Section header */}
        <div className={styles.sectionHeader}>
          <a href="#work" className={styles.label}>
            Portfolio
          </a>
          <h2 className={styles.title}>
            Works & <span className={styles.accent}>Projects</span>
          </h2>
          <p className={styles.subtitle}>
            A curated selection of our latest digital creations
          </p>
        </div>

        {/* Filter tabs */}
        <div className={styles.filters}>
          {visibleCategories.map((item, index) => (
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

          {/* View more dropdown */}
          {hasDropdown && (
            <div className={styles.dropdownWrapper} ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`${styles.filterBtn} ${styles.dropdownBtn} ${
                  isActiveInDropdown ? styles.filterActive : ""
                }`}
              >
                {isActiveInDropdown ? activeFilter : "View more"}
                <HiChevronDown
                  className={`${styles.dropdownIcon} ${isDropdownOpen ? styles.dropdownIconOpen : ""}`}
                />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={styles.dropdown}
                  >
                    {dropdownCategories.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleWorkFilter(item)}
                        className={`${styles.dropdownItem} ${
                          activeFilter === item ? styles.dropdownItemActive : ""
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
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
                  <img src={work.img_url} alt={work.title} loading="lazy" />
                  <div className={styles.cardOverlay}>
                    <button
                      onClick={() => setSelectedWork(work)}
                      className={styles.viewBtn}
                    >
                      <AiFillEye />
                      <span>Preview</span>
                    </button>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardTags}>
                    {work.category && (
                      <Link
                        href={`/portfolio?category=${encodeURIComponent(work.category.name)}`}
                        className={styles.tag}
                      >
                        {work.category.name}
                      </Link>
                    )}
                    {work.tags?.slice(0, 2).map((tag, i) => (
                      <Link
                        key={i}
                        href={`/portfolio?tags=${encodeURIComponent(tag.name)}`}
                        className={`${styles.tag} ${styles.tagViolet}`}
                      >
                        #{tag.name}
                      </Link>
                    ))}
                  </div>
                  <h3 className={styles.cardTitle}>{work.title}</h3>
                  <p
                    className={styles.cardDesc}
                    onClick={() => setSelectedWork(work)}
                  >
                    {stripHtml(work.description)}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all link */}
        <div className={styles.viewAll}>
          <Link href="/portfolio" className={styles.viewAllLink}>
            View All Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10m0 0L9 4m4 4L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
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
              <button
                onClick={() => setSelectedWork(null)}
                className={styles.modalCloseX}
              >
                &times;
              </button>

              {selectedWork.img_url && (
                <div className={styles.modalImage}>
                  <img src={selectedWork.img_url} alt={selectedWork.title} />
                </div>
              )}

              <div className={styles.modalBody}>
                <h3>{selectedWork.title}</h3>

                <div className={styles.modalTags}>
                  {selectedWork.category && (
                    <Link
                      href={`/portfolio?category=${encodeURIComponent(selectedWork.category.name)}`}
                      className={styles.modalTagCyan}
                    >
                      {selectedWork.category.name}
                    </Link>
                  )}
                  {selectedWork.tags?.map((tag, i) => (
                    <Link
                      key={i}
                      href={`/portfolio?tags=${encodeURIComponent(tag.name)}`}
                      className={styles.modalTagViolet}
                    >
                      #{tag.name}
                    </Link>
                  ))}
                </div>

                <div className={styles.modalActions}>
                  {selectedWork.preview_link && (
                    <Link
                      href={selectedWork.preview_link}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.modalPrimary}
                    >
                      <FiExternalLink />
                      Visit Project
                    </Link>
                  )}
                  {selectedWork.github_link && (
                    <Link
                      href={selectedWork.github_link}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.modalSecondary}
                    >
                      <FaGithub />
                      Source Code
                    </Link>
                  )}
                </div>

                <div
                  className="project-description"
                  dangerouslySetInnerHTML={{ __html: selectedWork.description }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
