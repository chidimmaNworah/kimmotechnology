import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { AiFillEye } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { fetchProjects } from "@/utils/api";
import { Navbar } from "@/components";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "@/container/Footer/Footer";

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

  useEffect(() => {
    if (typeof window === "undefined") return;
    const rawHash = window.location.hash.replace("#", "");
    if (!rawHash) return;
    const normalizedHash = rawHash.toLowerCase();
    const match = Object.keys(groupedWorks).find(
      (cat) => slugifyCategory(cat) === normalizedHash
    );
    if (match) setActiveCategory(match);
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
        <title>Portfolio &amp; Projects — Kimmotech</title>
        <meta
          name="description"
          content="Browse our curated portfolio of projects across dashboards, web apps, landing pages, and more."
        />
        <meta property="og:title" content="Portfolio & Projects — Kimmotech" />
        <meta
          property="og:description"
          content="Discover our exceptional projects showcasing our expertise and innovation across various domains."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio & Projects — Kimmotech" />
        <meta
          name="twitter:description"
          content="Explore dashboards, web applications, and marketing sites we've crafted."
        />
        <meta name="twitter:image" content="/twitter-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-deep">
        <Navbar />

        {/* Hero strip */}
        <section className="relative pt-28 pb-16 px-4 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-radial from-cyan-accent/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-cyan-accent bg-cyan-accent/8 border border-cyan-accent/15 px-3.5 py-1 rounded-full mb-4">
              Portfolio
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-txt-primary tracking-tight mb-3">
              Selected{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-txt-secondary max-w-2xl mx-auto text-sm md:text-base">
              Discover dashboards, web apps, marketing sites, and platforms we
              have designed and built to solve real problems and drive results.
            </p>
          </div>
        </section>

        {/* Category rows */}
        <main className="max-w-6xl mx-auto px-4 pb-20">
          {Object.keys(groupedWorks).length === 0 && (
            <p className="text-center text-txt-muted py-20">No projects found.</p>
          )}

          {Object.keys(groupedWorks).map((category) => {
            const slug = slugifyCategory(category);
            return (
              <section key={category} id={slug} className="mb-14">
                <div className="flex items-center justify-between gap-4 mb-5">
                  <h2 className="font-display text-lg md:text-xl font-bold text-txt-primary">
                    {category}
                  </h2>
                  <button
                    type="button"
                    onClick={() => handleOpenCategory(category)}
                    className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-card px-3.5 py-1.5 text-xs font-medium text-txt-secondary hover:border-cyan-accent/30 hover:text-cyan-accent transition-all"
                  >
                    <span>View all</span>
                    <span className="text-txt-muted text-[10px]">#{slug}</span>
                  </button>
                </div>

                <div
                  className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-border-subtle scrollbar-track-transparent"
                  onScroll={(e) => handleScroll(e, category)}
                >
                  {groupedWorks[category]
                    .slice(0, visibleCounts[category])
                    .map((work, i) => (
                      <motion.article
                        key={`${work.id || work.title}-${i}`}
                        whileHover={{ y: -4 }}
                        className="flex-shrink-0 w-[300px] bg-card border border-border-subtle rounded-2xl overflow-hidden cursor-pointer hover:border-cyan-accent/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300"
                        onClick={() => setSelectedProject(work)}
                      >
                        <div className="relative w-full h-48 overflow-hidden group">
                          <Image
                            src={work.img_url}
                            alt={work.title}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            unoptimized
                          />
                          <div className="absolute inset-0 bg-deep/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                            {work.preview_link ? (
                              <a
                                href={work.preview_link}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="w-10 h-10 rounded-full bg-cyan-accent/20 border border-cyan-accent/40 flex items-center justify-center text-cyan-accent hover:bg-cyan-accent hover:text-deep transition-all"
                              >
                                <AiFillEye size={18} />
                              </a>
                            ) : (
                              <span className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/50">
                                <AiFillEye size={18} />
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="px-4 py-3">
                          <h3 className="font-display font-semibold text-sm text-txt-primary line-clamp-2">
                            {work.title}
                          </h3>
                          <p className="text-xs text-txt-muted mt-1 line-clamp-3">
                            {work.description}
                          </p>
                        </div>
                      </motion.article>
                    ))}
                </div>
              </section>
            );
          })}
        </main>

        <Footer />
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-deep/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="bg-card border border-border-subtle rounded-2xl p-6 max-w-xl w-full relative shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-4 w-8 h-8 rounded-full bg-surface border border-border-subtle flex items-center justify-center text-txt-muted hover:text-txt-primary hover:border-cyan-accent/30 transition-all"
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
              <h3 className="font-display text-xl font-bold text-txt-primary mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-txt-secondary text-sm mb-4">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 text-xs mb-4">
                {selectedProject.categories?.map((cat, i) => (
                  <span
                    key={i}
                    className="bg-surface border border-border-subtle px-3 py-1 rounded-full text-txt-muted"
                  >
                    {cat.name}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {selectedProject.preview_link && (
                  <a
                    href={selectedProject.preview_link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-accent hover:underline"
                  >
                    View live <FiExternalLink className="text-xs" />
                  </a>
                )}
                {selectedProject.github_link && (
                  <a
                    href={selectedProject.github_link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-txt-muted hover:text-txt-primary transition-colors"
                  >
                    <FaGithub className="text-sm" />
                    Source code
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Category overlay */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-deep/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={handleCloseCategory}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              className="bg-card border border-border-subtle rounded-2xl p-6 max-w-5xl w-full max-h-[80vh] shadow-[0_30px_80px_rgba(0,0,0,0.5)] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="font-display text-xl font-bold text-txt-primary mb-1">
                    All {activeCategory} projects
                  </h3>
                  <p className="text-xs text-txt-muted">
                    Browse every project we have shipped in this category.
                  </p>
                </div>
                <button
                  onClick={handleCloseCategory}
                  className="w-8 h-8 rounded-full bg-surface border border-border-subtle flex items-center justify-center text-txt-muted hover:text-txt-primary hover:border-cyan-accent/30 transition-all"
                >
                  &times;
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 overflow-y-auto pr-1">
                {groupedWorks[activeCategory]?.map((work) => (
                  <article
                    key={work.id || work.title}
                    className="rounded-xl border border-border-subtle bg-surface hover:bg-card-hover hover:border-cyan-accent/20 shadow-sm hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all duration-300 p-3 cursor-pointer flex flex-col"
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
                    <h4 className="font-display text-sm font-semibold text-txt-primary line-clamp-2 mb-1">
                      {work.title}
                    </h4>
                    <p className="text-xs text-txt-muted line-clamp-3 mb-2 flex-1">
                      {work.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-auto">
                      {work.categories?.slice(0, 2).map((cat) => (
                        <span
                          key={cat.name}
                          className="bg-card border border-border-subtle text-[10px] px-2 py-0.5 rounded-full text-txt-muted"
                        >
                          {cat.name}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioPage;
