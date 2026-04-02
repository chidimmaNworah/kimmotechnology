import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { AiFillEye } from "react-icons/ai";
import { FiExternalLink, FiSearch, FiFilter, FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import axios from "axios";
import { fetchProjects } from "@/utils/api";
import { Navbar } from "@/components";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "@/container/Footer/Footer";

// Helper function to strip HTML tags for plain text display
const stripHtml = (html) => {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
};

// Fetch projects and filter options server-side
export async function getServerSideProps({ query }) {
  try {
    const API_URL = process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL;
    const [projectsRes, categoriesRes, tagsRes] = await Promise.all([
      fetchProjects(),
      axios.get(`${API_URL}/category/categories/`).catch(() => ({ data: [] })),
      axios.get(`${API_URL}/tag/tags/`).catch(() => ({ data: [] })),
    ]);

    return {
      props: {
        works: projectsRes || [],
        categories: categoriesRes.data || [],
        tags: tagsRes.data || [],
        initialQuery: query || {},
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        works: [],
        categories: [],
        tags: [],
        initialQuery: {},
      },
    };
  }
}

const ITEMS_PER_PAGE = 12;

const PortfolioPage = ({ works, categories, tags, initialQuery }) => {
  const router = useRouter();
  const filterPanelRef = useRef(null);

  // State
  const [filteredWorks, setFilteredWorks] = useState([]);
  const [displayedWorks, setDisplayedWorks] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Filter state from URL params
  const [searchQuery, setSearchQuery] = useState(initialQuery.q || "");
  const [selectedCategory, setSelectedCategory] = useState(
    initialQuery.category || "",
  );
  const [selectedTags, setSelectedTags] = useState(
    initialQuery.tags ? initialQuery.tags.split(",") : [],
  );

  // Update URL with filters
  const updateURL = useCallback(
    (search, category, tagList) => {
      const params = new URLSearchParams();
      if (search) params.set("q", search);
      if (category) params.set("category", category);
      if (tagList.length > 0) params.set("tags", tagList.join(","));

      const queryString = params.toString();
      const newPath = queryString ? `/portfolio?${queryString}` : "/portfolio";
      router.push(newPath, undefined, { shallow: true });
    },
    [router],
  );

  // Apply filters
  useEffect(() => {
    if (!works || !Array.isArray(works)) return;

    let result = [...works].sort((a, b) => b.id - a.id);

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (work) =>
          work.title?.toLowerCase().includes(q) ||
          stripHtml(work.description)?.toLowerCase().includes(q),
      );
    }

    // Category filter
    if (selectedCategory) {
      result = result.filter(
        (work) => work.category?.name === selectedCategory,
      );
    }

    // Tags filter
    if (selectedTags.length > 0) {
      result = result.filter((work) =>
        selectedTags.every((tag) => work.tags?.some((t) => t.name === tag)),
      );
    }

    setFilteredWorks(result);
    setVisibleCount(ITEMS_PER_PAGE);
  }, [works, searchQuery, selectedCategory, selectedTags]);

  // Display paginated results
  useEffect(() => {
    setDisplayedWorks(filteredWorks.slice(0, visibleCount));
  }, [filteredWorks, visibleCount]);

  // Close filter panel on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        filterPanelRef.current &&
        !filterPanelRef.current.contains(e.target)
      ) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handlers
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    updateURL(value, selectedCategory, selectedTags);
  };

  const handleCategoryChange = (category) => {
    const newCategory = selectedCategory === category ? "" : category;
    setSelectedCategory(newCategory);
    updateURL(searchQuery, newCategory, selectedTags);
  };

  const handleTagToggle = (tag) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newTags);
    updateURL(searchQuery, selectedCategory, newTags);
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSelectedTags([]);
    router.push("/portfolio", undefined, { shallow: true });
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const hasActiveFilters =
    searchQuery || selectedCategory || selectedTags.length > 0;

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
        <section className="relative pt-28 pb-12 px-4 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-radial from-cyan-accent/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-cyan-accent bg-cyan-accent/8 border border-cyan-accent/15 px-3.5 py-1 rounded-full mb-4">
              Portfolio
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-txt-primary tracking-tight mb-3">
              All{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-txt-secondary max-w-2xl mx-auto text-sm md:text-base">
              Explore our complete collection of dashboards, web apps, marketing
              sites, and platforms.
            </p>
          </div>
        </section>

        {/* Search and Filter Bar */}
        <section className="max-w-6xl mx-auto px-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            {/* Search Input */}
            <div className="relative flex-1">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-txt-muted w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full bg-card border border-border-subtle rounded-xl py-3 pl-12 pr-4 text-txt-primary placeholder:text-txt-muted text-sm focus:outline-none focus:border-cyan-accent/50 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    updateURL("", selectedCategory, selectedTags);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-txt-muted hover:text-txt-primary"
                >
                  <FiX className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter Button */}
            <div className="relative" ref={filterPanelRef}>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-medium transition-all ${
                  isFilterOpen || hasActiveFilters
                    ? "bg-cyan-accent/10 border-cyan-accent/30 text-cyan-accent"
                    : "bg-card border-border-subtle text-txt-secondary hover:border-txt-muted"
                }`}
              >
                <FiFilter className="w-4 h-4" />
                <span>Filters</span>
                {hasActiveFilters && (
                  <span className="bg-cyan-accent text-deep text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {(selectedCategory ? 1 : 0) + selectedTags.length}
                  </span>
                )}
                <HiChevronDown
                  className={`w-4 h-4 transition-transform ${isFilterOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Filter Dropdown Panel */}
              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 top-full mt-2 w-80 max-h-[400px] overflow-y-auto bg-card border border-border-subtle rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] z-50"
                  >
                    <div className="p-4">
                      {/* Clear Filters */}
                      {hasActiveFilters && (
                        <button
                          onClick={clearAllFilters}
                          className="w-full mb-4 py-2 text-xs font-medium text-txt-muted hover:text-txt-primary border border-border-subtle rounded-lg hover:border-txt-muted transition-all"
                        >
                          Clear all filters
                        </button>
                      )}

                      {/* Categories */}
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-txt-muted mb-3">
                          Category
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {categories.map((cat) => (
                            <button
                              key={cat.id}
                              onClick={() => handleCategoryChange(cat.name)}
                              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                                selectedCategory === cat.name
                                  ? "bg-cyan-accent/10 border-cyan-accent/30 text-cyan-accent"
                                  : "bg-surface border-border-subtle text-txt-secondary hover:text-txt-primary hover:border-txt-muted"
                              }`}
                            >
                              {cat.name}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Tags */}
                      {tags.length > 0 && (
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-txt-muted mb-3">
                            Tags
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                              <button
                                key={tag.id}
                                onClick={() => handleTagToggle(tag.name)}
                                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                                  selectedTags.includes(tag.name)
                                    ? "bg-violet-500/10 border-violet-500/30 text-violet-400"
                                    : "bg-surface border-border-subtle text-txt-secondary hover:text-txt-primary hover:border-txt-muted"
                                }`}
                              >
                                {tag.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Active Filters Pills */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-xs text-txt-muted">Active filters:</span>
              {selectedCategory && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-cyan-accent/10 border border-cyan-accent/20 text-cyan-accent rounded-full">
                  {selectedCategory}
                  <button
                    onClick={() => handleCategoryChange(selectedCategory)}
                    className="hover:text-white"
                  >
                    <FiX className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-violet-500/10 border border-violet-500/20 text-violet-400 rounded-full"
                >
                  {tag}
                  <button
                    onClick={() => handleTagToggle(tag)}
                    className="hover:text-white"
                  >
                    <FiX className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Results count */}
          <p className="text-xs text-txt-muted mt-4">
            Showing {displayedWorks.length} of {filteredWorks.length} projects
          </p>
        </section>

        {/* Projects Grid */}
        <main className="max-w-6xl mx-auto px-4 pb-20">
          {filteredWorks.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-txt-muted mb-4">
                No projects match your filters.
              </p>
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="text-cyan-accent hover:underline text-sm"
                >
                  Clear all filters
                </button>
              )}
            </div>
          ) : (
            <>
              <motion.div
                layout
                className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
              >
                <AnimatePresence mode="popLayout">
                  {displayedWorks.map((work, index) => (
                    <motion.article
                      key={work.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      className="bg-card border border-border-subtle rounded-2xl overflow-hidden cursor-pointer hover:border-cyan-accent/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300"
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
                          {work.preview_link && (
                            <a
                              href={work.preview_link}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="w-10 h-10 rounded-full bg-cyan-accent/20 border border-cyan-accent/40 flex items-center justify-center text-cyan-accent hover:bg-cyan-accent hover:text-deep transition-all"
                            >
                              <AiFillEye size={18} />
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="p-4">
                        {/* Category & Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {work.category && (
                            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-cyan-accent/10 text-cyan-accent border border-cyan-accent/20">
                              {work.category.name}
                            </span>
                          )}
                          {work.tags?.slice(0, 2).map((tag) => (
                            <span
                              key={tag.id}
                              className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-surface text-txt-muted border border-border-subtle"
                            >
                              {tag.name}
                            </span>
                          ))}
                        </div>
                        <h3 className="font-display font-semibold text-sm text-txt-primary line-clamp-2 mb-1">
                          {work.title}
                        </h3>
                        <p className="text-xs text-txt-muted line-clamp-2">
                          {stripHtml(work.description)}
                        </p>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* Load More Button */}
              {visibleCount < filteredWorks.length && (
                <div className="text-center mt-10">
                  <button
                    onClick={loadMore}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-cyan-accent border border-cyan-accent/20 rounded-xl hover:bg-cyan-accent/10 transition-all"
                  >
                    Load more projects
                    <span className="text-txt-muted">
                      ({filteredWorks.length - visibleCount} remaining)
                    </span>
                  </button>
                </div>
              )}
            </>
          )}
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
              className="bg-card border border-border-subtle rounded-2xl p-6 max-w-xl w-full max-h-[90vh] overflow-y-auto relative shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
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
              <div
                className="text-txt-secondary text-sm mb-4 prose prose-invert prose-sm max-w-none project-description"
                dangerouslySetInnerHTML={{
                  __html: selectedProject.description,
                }}
              />

              <div className="flex flex-wrap gap-2 text-xs mb-4">
                {selectedProject.category && (
                  <span className="bg-cyan-accent/10 border border-cyan-accent/20 px-3 py-1 rounded-full text-cyan-accent">
                    {selectedProject.category.name}
                  </span>
                )}
                {selectedProject.tags?.map((tag) => (
                  <span
                    key={tag.id}
                    className="bg-surface border border-border-subtle px-3 py-1 rounded-full text-txt-muted"
                  >
                    {tag.name}
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
    </>
  );
};

export default PortfolioPage;
