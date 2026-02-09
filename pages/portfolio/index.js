import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillEye } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import styles from "../../container/Work/Work.module.scss";
import { fetchProjects } from "@/utils/api";
import { Navbar } from "@/components";
import Head from "next/head";
import { useRouter } from "next/router";

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

const slugifyCategory = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const PortfolioPage = ({ works }) => {
  const [groupedWorks, setGroupedWorks] = useState({});
  const [visibleCounts, setVisibleCounts] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!works || !Array.isArray(works)) return;

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

  // Open category overlay based on URL hash (e.g. /portfolio#dashboards)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const rawHash = window.location.hash.replace("#", "");
    if (!rawHash) return;

    const normalizedHash = rawHash.toLowerCase();

    const match = Object.keys(groupedWorks).find(
      (cat) => slugifyCategory(cat) === normalizedHash,
    );

    if (match) {
      setActiveCategory(match);
    }
  }, [groupedWorks]);

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

  const handleOpenCategory = (category) => {
    const slug = slugifyCategory(category);
    setSelectedProject(null);
    setActiveCategory(category);
    router.push(`/portfolio#${slug}`, undefined, { shallow: true });
  };

  const handleCloseCategory = () => {
    setActiveCategory(null);
    router.push("/portfolio", undefined, { shallow: true });
  };

  return (
    <>
      <Head>
        <title>Portfolio & Projects</title>
        <meta
          name="description"
          content="Browse our curated portfolio of projects across dashboards, web apps, landing pages, and more."
        />
        <meta
          name="keywords"
          content="portfolio, projects, dashboards, web apps, case studies"
        />
        <meta property="og:title" content="Portfolio & Projects" />
        <meta
          property="og:description"
          content="Discover our exceptional projects showcasing our expertise and innovation across various domains."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio & Projects" />
        <meta
          name="twitter:description"
          content="Explore dashboards, web applications, and marketing sites we've crafted."
        />
        <meta name="twitter:image" content="/twitter-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="w-full min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 py-16 px-4">
        <section className="max-w-6xl mx-auto">
          <header className="text-center mb-10">
            <p className="inline-flex items-center rounded-full bg-slate-900 text-slate-50 px-4 py-1 text-xs tracking-wide uppercase mb-4">
              Portfolio
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">
              Selected <span className="text-indigo-600">Projects</span>
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
              Discover dashboards, web apps, marketing sites, and platforms we
              have designed and built to solve real problems and drive results.
            </p>
          </header>

          {Object.keys(groupedWorks).length === 0 && (
            <p className="text-center text-gray-500">No projects found.</p>
          )}

          {Object.keys(groupedWorks).map((category) => {
            const slug = slugifyCategory(category);
            return (
              <section key={category} id={slug} className="mb-10">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h2 className="text-lg md:text-xl font-semibold text-slate-900">
                    {category}
                  </h2>
                  <button
                    type="button"
                    onClick={() => handleOpenCategory(category)}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs md:text-sm font-medium text-slate-700 shadow-sm hover:border-slate-400 hover:bg-slate-50 transition"
                  >
                    <span>View all</span>
                    <span className="text-slate-400 text-xs"># {slug}</span>
                  </button>
                </div>

                <div
                  className="flex overflow-x-auto gap-4 pb-4 no-scrollbar"
                  onScroll={(e) => handleScroll(e, category)}
                >
                  {groupedWorks[category]
                    .slice(0, visibleCounts[category])
                    .map((work, i) => (
                      <motion.article
                        key={`${work.id || work.title}-${i}`}
                        whileHover={{ scale: 1.03, translateY: -4 }}
                        className={`${styles.app__work_item} flex-shrink-0 bg-white/80 border border-slate-200 shadow-sm hover:shadow-md transition rounded-2xl overflow-hidden`}
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
                            className="rounded-xl w-full h-48 object-cover"
                            unoptimized
                          />
                          <div
                            className={`${styles.app__work_hover} ${styles.app__flex}`}
                          >
                            {work.preview_link ? (
                              <a
                                href={work.preview_link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <AiFillEye size={22} />
                              </a>
                            ) : (
                              <AiFillEye size={22} />
                            )}
                          </div>
                        </div>
                        <div className="mt-3 px-2 pb-3">
                          <h3 className="font-semibold text-sm text-slate-900 line-clamp-2">
                            {work.title}
                          </h3>
                          <p className="text-xs text-slate-600 mt-1 line-clamp-3">
                            {work.description}
                          </p>
                        </div>
                      </motion.article>
                    ))}
                </div>
              </section>
            );
          })}
        </section>

        {/* (Pricing moved to the homepage "pricing" section) */}
      </main>

      {/* Project detail modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-6 max-w-xl w-[90%] relative shadow-xl border border-slate-100"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
            >
              &times;
            </button>
            <Image
              src={selectedProject.img_url}
              alt={selectedProject.title}
              width={800}
              height={400}
              className="rounded-xl w-full h-56 object-cover mb-4"
              unoptimized
            />
            <h3 className="text-2xl font-semibold mb-2 text-slate-900">
              {selectedProject.title}
            </h3>
            <p className="text-slate-700 mb-3 text-sm md:text-base">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {selectedProject.categories?.map((cat, i) => (
                <span
                  key={i}
                  className="bg-slate-100 px-3 py-1 rounded-full border border-slate-200 text-slate-700"
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
                className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                <span>View live project</span>
                <FiExternalLink className="text-xs" />
              </a>
            )}

            {selectedProject.github_link && (
              <a
                href={selectedProject.github_link}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-700"
              >
                <FaGithub className="text-sm" />
                <span>View code on GitHub</span>
              </a>
            )}
          </motion.div>
        </div>
      )}

      {/* Category overlay showing all projects in that category */}
      {activeCategory && (
        <div className="fixed inset-0 bg-black/55 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white rounded-2xl p-6 max-w-5xl w-[94%] max-h-[80vh] shadow-2xl border border-slate-100 flex flex-col"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-1">
                  All {activeCategory} projects
                </h3>
                <p className="text-xs text-slate-500">
                  Browse every project we have shipped in this category.
                </p>
              </div>
              <button
                onClick={handleCloseCategory}
                className="text-gray-500 hover:text-black text-xl leading-none"
              >
                &times;
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 overflow-y-auto pr-1">
              {groupedWorks[activeCategory]?.map((work) => (
                <article
                  key={work.id || work.title}
                  className="rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white shadow-sm hover:shadow-md transition p-3 cursor-pointer flex flex-col"
                  onClick={() => {
                    setSelectedProject(work);
                    handleCloseCategory();
                  }}
                >
                  <div className="relative w-full h-36 mb-3 overflow-hidden rounded-lg">
                    <Image
                      src={work.img_url}
                      alt={work.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 line-clamp-2 mb-1">
                    {work.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-3 mb-2 flex-1">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {work.categories?.slice(0, 2).map((cat) => (
                      <span
                        key={cat.name}
                        className="bg-white border border-slate-200 text-[10px] px-2 py-0.5 rounded-full text-slate-700"
                      >
                        {cat.name}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default PortfolioPage;
