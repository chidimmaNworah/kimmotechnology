import React, { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import styles from "./Work.module.scss";

const Work = ({ works }) => {
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedWork, setSelectedWork] = useState(null); // For modal popup

  // Extract unique categories dynamically from DB data
  useEffect(() => {
    if (works?.length) {
      const allCategories = works.flatMap((w) =>
        w.categories?.map((c) => c.name)
      );
      const uniqueCategories = [...new Set(allCategories)];
      setCategories(["All", ...uniqueCategories]);
      setFilterWork(works.slice(0, 20)); // limit 20 projects
    }
  }, [works]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works.slice(0, 20));
      } else {
        setFilterWork(
          works
            .filter((work) => work.categories?.some((cat) => cat.name === item))
            .slice(0, 20)
        );
      }
    }, 400);
  };

  return (
    <div className="w-full">
      <div className={styles.app__works}>
        <h2 className="head-text text-black">
          Works & <span>Projects</span>
        </h2>

        <p className={styles.viewall}>
          <a href="/portfolio">View All</a>
        </p>

        {/* ✅ Dynamic filter categories */}
        <div className={styles.app__work_filter}>
          {categories.map((item, index) => (
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

        {/* ✅ Horizontally scrollable projects */}
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className={`${styles.app__work_portfolio} overflow-x-auto flex gap-6 no-scrollbar`}
        >
          {filterWork.map((work, index) => (
            <div
              key={index}
              className={`${styles.app__work_item} ${styles.app__flex} min-w-[320px]`}
            >
              <div
                className={`${styles.app__work_img} ${styles.app__flex}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* ✅ Cloudinary image (no optimization issues) */}
                <img
                  src={work.img_url}
                  alt={work.title}
                  className="object-cover w-full h-64 rounded-lg"
                  loading="lazy"
                />

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
                  <a href={work.preview_link} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className={`${styles.app__flex}`}
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              {/* ✅ Description clamp + modal */}
              <div
                className={`${styles.app__work_content} ${styles.app__flex}`}
              >
                <h4 className="bold-text">{work.title}</h4>
                <p
                  className="p-text line-clamp-3 text-gray-700 cursor-pointer"
                  style={{
                    marginTop: 10,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                  onClick={() => setSelectedWork(work)}
                >
                  {work.description}
                  {work.description?.length > 100 && (
                    <span className="text-blue-500 ml-1">See more</span>
                  )}
                </p>

                <div className={`${styles.app__work_tag} ${styles.app__flex}`}>
                  <p className="p-text">
                    {work.categories?.map((cat) => cat.name).join(", ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ✅ Modal popup for full description */}
      {selectedWork && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setSelectedWork(null)}
        >
          <div
            className="bg-white p-6 rounded-xl max-w-lg w-11/12 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold mb-2">{selectedWork.title}</h3>
            <p className="text-gray-700 mb-4">{selectedWork.description}</p>
            <button
              onClick={() => setSelectedWork(null)}
              className="bg-black text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const WrappedWorks = AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);

export default (props) => <WrappedWorks {...props} />;
