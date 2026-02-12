import { CareersFooter, JobNavbar } from "@/components";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import YouMayLike from "@/components/youMayLike";
import RecruiterJobs from "@/components/RecruiterJobs";
import CategoriesList from "@/components/CareerCategories";
import { useRouter } from "next/router";
import FilterByNav from "@/components/filterbynav";
import Newsletter from "@/components/Newsletter";
import { IoCloseCircle } from "react-icons/io5";

export default function Careers({ careers, relatedCareers, categories }) {
  const router = useRouter();
  const { query } = router;
  const posted = query.filter || "";
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeField, setActiveField] = useState(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());

  const lastWeekStart = new Date(startOfWeek);
  lastWeekStart.setDate(lastWeekStart.getDate() - 7);

  const lastWeekEnd = new Date(startOfWeek);
  lastWeekEnd.setDate(lastWeekEnd.getDate() - 1);

  const filteredCareers = careers
    .filter(
      (career) =>
        !selectedCategory || career.category_id === selectedCategory.id
    )
    .filter((career) => {
      if (!posted) return true;
      const careerDate = new Date(career.created_at);
      switch (posted) {
        case "today":
          return careerDate >= today;
        case "yesterday":
          return careerDate >= yesterday && careerDate < today;
        case "this-week":
          return careerDate >= startOfWeek;
        case "last-week":
          return careerDate >= lastWeekStart && careerDate <= lastWeekEnd;
        default:
          return true;
      }
    })
    .filter((career) =>
      !activeField
        ? true
        : career.field?.some((f) => f.toLowerCase() === activeField)
    );

  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    const isNewsletterClosed = localStorage.getItem("newsletter_closed");
    const hasVisited = localStorage.getItem("has_visited");
    const currentTime = new Date().getTime();

    if (
      (!isNewsletterClosed && !hasVisited) ||
      currentTime - isNewsletterClosed > 3600000
    ) {
      localStorage.setItem("has_visited", "true");

      const handleScroll = () => {
        if (window.scrollY > 600) {
          setShowNewsletter(true);
          window.removeEventListener("scroll", handleScroll);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleClose = () => {
    setShowNewsletter(false);
    localStorage.setItem("newsletter_closed", "true");
  };

  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(
    1,
    Math.ceil(filteredCareers.length / ITEMS_PER_PAGE)
  );
  const paginatedData = filteredCareers
    .reverse()
    .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 8000);
    return () => clearTimeout(timeout);
  }, []);

  const pageTitle = selectedCategory
    ? `Category: ${selectedCategory.name}`
    : activeField
    ? activeField.charAt(0).toUpperCase() + activeField.slice(1)
    : posted === "today"
    ? "Posted Today"
    : posted === "yesterday"
    ? "Posted Yesterday"
    : posted === "this-week"
    ? "This Week\u2019s Posts"
    : posted === "last-week"
    ? "Last Week\u2019s Posts"
    : "All Careers";

  return (
    <div className="min-h-screen bg-deep text-txt-primary">
      <Head>
        <title>
          Explore Grants, Jobs, Scholarships &amp; Workshops | Kimmotech Careers
        </title>
        <meta
          name="description"
          content="Find the latest grants, remote and on-site jobs, scholarships, and workshops. Stay ahead with career opportunities in Nigeria and beyond."
        />
        <meta
          property="og:title"
          content="Explore Grants, Jobs, Scholarships & Workshops | Kimmotech Careers"
        />
        <meta
          property="og:description"
          content="Find the latest grants, remote and on-site jobs, scholarships, and workshops."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kimmotech.net/careers" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/kimmoramicky/image/upload/v1742039039/kimmotech/remote_jobs_poster_ht1xw6.png"
        />
      </Head>

      {/* Newsletter popup */}
      {showNewsletter && (
        <div className="fixed z-50 inset-0 flex justify-center items-center bg-deep/70 backdrop-blur-sm">
          <div className="bg-card border border-border-subtle p-6 rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.5)] relative max-w-md w-[90%]">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-txt-muted hover:text-red-400 transition-colors"
              title="close"
            >
              <IoCloseCircle size={32} />
            </button>
            <Newsletter />
          </div>
        </div>
      )}

      <JobNavbar activeField={activeField} setActiveField={setActiveField} />
      <FilterByNav />

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
        {/* Desktop sidebar */}
        <aside className="hidden md:block md:w-64 flex-shrink-0 p-5 border-r border-border-subtle">
          <CategoriesList
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <RecruiterJobs />
          <YouMayLike heading="You May Like" careers={careers} />
        </aside>

        {/* Main content */}
        <main className="flex-1 p-5 md:p-6">
          <h1 className="font-display text-2xl font-bold text-txt-primary mb-6">
            {pageTitle}
          </h1>

          {loading ? (
            <div className="flex items-center gap-3 py-12">
              <div className="w-5 h-5 border-2 border-cyan-accent/30 border-t-cyan-accent rounded-full animate-spin" />
              <span className="text-sm text-txt-muted">Loading careers...</span>
            </div>
          ) : paginatedData.length === 0 ? (
            <p className="text-txt-muted text-sm py-12">No careers found.</p>
          ) : (
            <ul className="space-y-0">
              {paginatedData.map((job) => (
                <li
                  key={job.id}
                  className="border-b border-border-subtle py-5 first:pt-0"
                >
                  <h2 className="font-display text-lg font-semibold text-txt-primary mb-1">
                    {job.title}
                  </h2>
                  <p className="text-xs text-txt-muted mb-2">
                    Posted on {new Date(job.created_at).toDateString()} &middot;
                    kimmotech.net/careers &middot; {job.commentCount} comments
                  </p>
                  <p className="text-sm text-txt-secondary mb-3 line-clamp-2">
                    {job.excerpt}
                  </p>
                  <Link
                    href={`/careers/${job.field[0]
                      .toLowerCase()
                      .replace(/\s+/g, "-")}/${
                      job.field[0].toLowerCase().endsWith("s")
                        ? job.field[0].toLowerCase().slice(0, -1)
                        : "general"
                    }/${job.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-accent hover:underline"
                  >
                    Apply Now &rarr;
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* Pagination */}
          <div className="flex gap-3 mt-10 items-center justify-center">
            <button
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                currentPage === 1
                  ? "bg-surface text-txt-muted cursor-not-allowed"
                  : "bg-card border border-border-subtle text-txt-primary hover:border-cyan-accent/30"
              }`}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              Previous
            </button>
            <span className="text-xs text-txt-muted">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                currentPage === totalPages
                  ? "bg-surface text-txt-muted cursor-not-allowed"
                  : "bg-card border border-border-subtle text-txt-primary hover:border-cyan-accent/30"
              }`}
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
            >
              Next
            </button>
          </div>
        </main>

        {/* Mobile sidebar */}
        <div className="md:hidden w-full px-5 pb-8 mt-8 pt-8 border-t border-border-subtle">
          <CategoriesList
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <RecruiterJobs />
          <YouMayLike heading="You May Like" careers={careers} />
        </div>
      </div>

      <CareersFooter />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/careers/careers/?skip=0&limit=50`
    );

    let careers = [];

    if (
      res.ok &&
      res.headers.get("content-type")?.includes("application/json")
    ) {
      careers = await res.json();
    } else {
      console.warn("Careers fetch did not return JSON!");
    }

    const categoryRes = await fetch(
      `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/career/career-categories/`
    );
    const categories = categoryRes.ok ? await categoryRes.json() : [];

    const relatedCareers = careers;

    const commentCounts = await Promise.all(
      careers.map(async (career) => {
        try {
          const commentRes = await fetch(
            `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/users/comments/${career.id}`
          );

          if (!commentRes.ok) {
            return { careerId: career.id, count: 0 };
          }

          const commentData = await commentRes.json();
          return { careerId: career.id, count: commentData.length || 0 };
        } catch (error) {
          return { careerId: career.id, count: 0 };
        }
      })
    );

    const careersWithComments = careers.map((career) => ({
      ...career,
      commentCount:
        commentCounts.find((c) => c.careerId === career.id)?.count || 0,
    }));

    return {
      props: {
        careers: careersWithComments || [],
        categories,
        relatedCareers: relatedCareers || [],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        careers: [],
        categories: [],
        relatedCareers: [],
      },
    };
  }
}
