import { CareersFooter, JobNavbar, CareerCategories } from "@/components";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./jobs/jobs.module.scss";
import YouMayLike from "@/components/youMayLike";
import RecruiterJobs from "@/components/RecruiterJobs";
import CategoriesList from "@/components/CareerCategories";
import { useRouter } from "next/router";
import FilterByNav from "@/components/filterbynav";
import Newsletter from "@/components/Newsletter";
import { IoCloseCircle, IoCloseOutline } from "react-icons/io5";
import Countdown from "@/components/CountDown";

export default function Careers({ careers, relatedCareers, categories }) {
  const router = useRouter();
  const { query } = router;
  const posted = query.filter || "";
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Get the start of today, yesterday, this week, and last week
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

  // const filteredCareers = selectedCategory
  //   ? careers.filter((career) => career.category_id === selectedCategory.id)
  //   : careers;

  const filteredCareers = careers
    .filter(
      (career) =>
        !selectedCategory || career.category_id === selectedCategory.id
    )
    .filter((career) => {
      if (!posted) return true; // No filter, return all

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
    });

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

  // const totalPages = Math.ceil(filteredCareers.length / ITEMS_PER_PAGE);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredCareers.length / ITEMS_PER_PAGE)
  );

  // Get paginated data
  const paginatedData = filteredCareers
    .reverse()
    .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 8000); // simulate loading

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <Head>
        <title>
          Explore Grants, Jobs, Scholarships & Workshops | Kimmotech Careers
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
          content="Find the latest grants, remote and on-site jobs, scholarships, and workshops. Stay ahead with career opportunities in Nigeria and beyond."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kimmotech.net/careers" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/kimmoramicky/image/upload/v1742039039/kimmotech/remote_jobs_poster_ht1xw6.png"
        />
      </Head>
      {showNewsletter && (
        <div className="fixed z-20 top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-md">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-600 "
              title="close"
            >
              <IoCloseCircle size={60} />
            </button>
            <Newsletter />
          </div>
        </div>
      )}
      <JobNavbar />
      <Countdown targetDate="2025-04-19T07:30:00" />
      <FilterByNav />
      {/* <div className={styles.jobshome_heroImage}>
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className={styles.jobshome_heroImage_div}
        >
          <h2 className="head-text">REMOTE OR NOTHING</h2>
          <p className="font-bold text-[1rem] text-center">
            WE WILL ASSIST YOU DEVELOP WITHOUT THE NEED TO MOVE
          </p>
        </motion.div>
      </div> */}
      <div className={`${styles.jobshome} flex flex-col md:flex-row gap-6`}>
        <div className="hidden md:block md:w-1/4 w-full p-4 md:border-r border-[#cccccc40]">
          <CategoriesList
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <RecruiterJobs />
          {/* <hr className="border-t border-[#8888C860] my-4" /> */}
          <YouMayLike heading="You May Like" careers={careers} />
        </div>
        <div className="container p-4">
          <h1 className="text-2xl font-bold">
            {selectedCategory
              ? `Category: ${selectedCategory.name}`
              : "All Careers"}
          </h1>
          {loading ? (
            <p className="text-gray-500">Loading...</p>
          ) : (
            <ul className="mt-4 space-y-6">
              {paginatedData
                // ?.slice(0, 30)
                .map((job) => (
                  <li key={job.id} className="border-b pb-4">
                    <h2 className="text-xl font-semibold">{job.title}</h2>
                    <p className="text-gray-500">
                      Posted on {new Date(job.created_at).toDateString()} -
                      kimmotech.net/careers --- ({job.commentCount} comments)
                    </p>
                    <p className="mt-2 text-gray-700">{job.excerpt}</p>
                    <Link
                      href={`/careers/${job.field[0]
                        .toLowerCase()
                        .replace(/\s+/g, "-")}/${
                        job.field[0].toLowerCase().endsWith("s")
                          ? job.field[0].toLowerCase().slice(0, -1)
                          : "general"
                      }/${job.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      Apply Now
                    </Link>
                  </li>
                ))}
            </ul>
          )}
          <div className="flex gap-3 mt-10 items-center justify-center">
            <button
              className={`${
                currentPage === 1 ? "bg-gray-400/80" : "bg-[#5A62BD]"
              } px-3 py-1 rounded w-30 h-10`}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className={`${
                currentPage === totalPages ? "bg-gray-400/80" : "bg-[#5A62BD]"
              } px-3 py-1 rounded w-30 h-10`}
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
            >
              Next
            </button>
          </div>
        </div>

        <div className="md:hidden sm:block w-full px-4 mt-12 pt-12 sm:border-t border-[#cccccc40]">
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
      `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/careers/careers/`
    );
    if (!res.ok) {
      console.log("careers fetch not ok!");
    }
    const careers = await res.json();
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
            console.error(
              `Failed to fetch comments for career ID: ${career.id}`
            );
            return { careerId: career.id, count: 0 };
          }

          const commentData = await commentRes.json();
          // console.log("Comment counts response data:", commentData);
          return { careerId: career.id, count: commentData.length || 0 };
        } catch (error) {
          console.error("Error fetching comments:", error);
          return { careerId: career.id, count: 0 };
        }
      })
    );

    // Attach comment count to careers
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
    return { props: { careers: [], categories: [], relatedCareers: [] } };
  }
}
