import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillEye } from "react-icons/ai";
import styles from "../../container/Work/Work.module.scss";
import { fetchProjects } from "@/utils/api"; // ✅ same util you used on index
import { Navbar } from "@/components";
import Head from "next/head";

// Fetch projects server-side
export async function getServerSideProps() {
  try {
    const projects = await fetchProjects();
    return { props: { works: projects || [] } };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return { props: { works: [] } };
  }
}

const AllProjects = ({ works }) => {
  const [groupedWorks, setGroupedWorks] = useState({});
  const [visibleCounts, setVisibleCounts] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!works || !Array.isArray(works)) return; // ✅ prevents crash

    const grouped = {};
    works.forEach((work) => {
      (work.categories || []).forEach((cat) => {
        if (!grouped[cat.name]) grouped[cat.name] = [];
        grouped[cat.name].push(work);
      });
    });

    setGroupedWorks(grouped);

    const initialVisible = {};
    Object.keys(grouped).forEach((cat) => {
      initialVisible[cat] = 5;
    });
    setVisibleCounts(initialVisible);
  }, [works]);

  const handleScroll = (e, category) => {
    const target = e.target;
    const atEnd =
      Math.ceil(target.scrollLeft + target.clientWidth) >= target.scrollWidth;

    if (atEnd) {
      setVisibleCounts((prev) => ({
        ...prev,
        [category]: (prev[category] || 0) + 5,
      }));
    }
  };

  return (
    <>
      <Head>
        <title>All projects</title>
        <meta
          name="description"
          content="Discover our exceptional projects showcasing our expertise and innovation across various domains."
        />
        <meta
          name="keywords"
          content="expertise, services, work, articles, testimonials"
        />
        <meta property="og:title" content="All projects" />
        <meta
          property="og:description"
          content="Discover our exceptional projects showcasing our expertise and innovation across various domains."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home - Your Trusted Partner" />
        <meta
          name="twitter:description"
          content="Discover our exceptional projects showcasing our expertise and innovation across various domains."
        />
        <meta name="twitter:image" content="/twitter-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="w-full min-h-screen py-10 px-4">
        <h2 className="head-text text-black mb-6">
          All <span>Projects</span>
        </h2>
        <p className="text-center max-w-80 mx-auto">
          Discover our exceptional projects showcasing our expertise and
          innovation across various domains.
        </p>

        {Object.keys(groupedWorks).length === 0 && (
          <p className="text-center text-gray-500">No projects found.</p>
        )}

        {Object.keys(groupedWorks).map((category) => (
          <div key={category} className="mb-8 ">
            <h3 className="bold-text mb-4">{category}</h3>

            <div
              className="flex overflow-x-auto gap-4 pb-4 overflow-y-scroll no-scrollbar"
              onScroll={(e) => handleScroll(e, category)}
            >
              {groupedWorks[category]
                .slice(0, visibleCounts[category])
                .map((work, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className={`${styles.app__work_item} flex-shrink-0`}
                    style={{ width: 300 }}
                    onClick={() => setSelectedProject(work)}
                  >
                    <div
                      className={`${styles.app__work_img} ${styles.app__flex}`}
                    >
                      <Image
                        src={work.img_url}
                        alt={work.title}
                        width={400}
                        height={300}
                        className="rounded-lg w-full h-48 object-cover"
                        unoptimized
                      />
                      <div
                        className={`${styles.app__work_hover} ${styles.app__flex}`}
                      >
                        <AiFillEye size={24} />
                      </div>
                    </div>
                    <div className="mt-3">
                      <h4 className="bold-text">{work.title}</h4>
                      <p className="p-text mt-1 text-sm line-clamp-3">
                        {work.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}

        {/* --- Popup Modal --- */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-2xl p-6 max-w-xl w-[90%] relative shadow-lg"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-4 text-gray-600 hover:text-black text-xl"
              >
                ✕
              </button>
              <Image
                src={selectedProject.img_url}
                alt={selectedProject.title}
                width={800}
                height={400}
                className="rounded-lg w-full h-56 object-cover mb-4"
                unoptimized
              />
              <h3 className="text-2xl font-bold mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-700 mb-3">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 text-sm mb-4">
                {selectedProject.categories?.map((cat, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 px-3 py-1 rounded-full border text-gray-700"
                  >
                    {cat.name}
                  </span>
                ))}
              </div>

              {selectedProject.preview_link && (
                <a
                  href={selectedProject.preview_link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  View Live Project →
                </a>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
};

export default AllProjects;
