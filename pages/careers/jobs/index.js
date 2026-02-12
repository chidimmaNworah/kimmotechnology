import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { CareersFooter, JobNavbar } from "@/components";
import styles from "./jobs.module.scss";
import { motion } from "framer-motion";
import Head from "next/head";
import YouMayLike from "@/components/youMayLike";
import RecruiterJobs from "@/components/RecruiterJobs";
import CategoriesList from "@/components/CareerCategories";

const JobsHome = ({ categories, jobs, relatedJobs }) => {
  const jobCareers = jobs.filter(
    (career) =>
      career.field && career.field.some((f) => f.toLowerCase() === "jobs")
  );

  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredCareers = selectedCategory
    ? jobs.filter((career) => career.category_id === selectedCategory.id)
    : jobCareers;

  const ITEMS_PER_PAGE = 10;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredCareers.length / ITEMS_PER_PAGE)
  );

  const paginatedData = filteredCareers
    .reverse()
    .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <>
      <Head>
        <title>Find Remote Jobs | Work from Home in Naija & Beyond</title>
        <meta
          name="description"
          content="Discover remote job opportunities across different occupations in Nigeria and beyond. Browse latest job listings, categories, and apply today."
        />
        <meta
          property="og:title"
          content="Find Remote Jobs | Work from Home in Naija & Beyond"
        />
        <meta
          property="og:description"
          content="Discover remote job opportunities across different occupations in Nigeria and beyond."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kimmotech.net/careers/jobs" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/kimmoramicky/image/upload/v1742039039/kimmotech/remote_jobs_poster_ht1xw6.png"
        />
      </Head>
      <JobNavbar />
      <div className={styles.jobshome_heroImage}>
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className={styles.jobshome_heroImage_div}
        >
          <h2 className="head-text">WORK FROM HOME</h2>
          <p className="font-bold text-[1rem] text-center">
            FIND REMOTE JOBS FOR ALL OCCUPATIONS IN NAIJA & BEYOND
          </p>
        </motion.div>
      </div>
      <div className={`bg-[#060B18] flex flex-col md:flex-row gap-6 min-h-screen`}>
        {/* Desktop Sidebar */}
        <div className="hidden md:block md:w-1/4 w-full p-6 md:border-r border-[#1E293B]/60">
          <CategoriesList
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <RecruiterJobs />
          <YouMayLike heading="You May Like" careers={jobs} />
        </div>
        {/* Main Content */}
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-[#F1F5F9] font-['Syne']">
            {selectedCategory
              ? `Category: ${selectedCategory.name}`
              : "Latest Jobs"}
          </h1>
          {paginatedData?.length === 0 ? (
            <p className="text-[#64748B] mt-4">No jobs available.</p>
          ) : (
            <ul className="mt-6 space-y-6">
              {paginatedData
                ?.slice(0, 30)
                .reverse()
                .map((job) => (
                  <li key={job.id} className="border-b border-[#1E293B]/60 pb-5 group">
                    <h2 className="text-xl font-semibold text-[#F1F5F9] group-hover:text-[#22D3EE] transition-colors">{job.title}</h2>
                    <p className="text-[#64748B] text-sm mt-1">
                      Posted on {new Date(job.created_at).toDateString()} -
                      kimmotech.net/careers/jobs --- ({job.commentCount}{" "}
                      comments)
                    </p>
                    <p className="mt-2 text-[#94A3B8]">{job.excerpt}</p>
                    <Link
                      href={`/careers/jobs/job/${job.id}`}
                      className="mt-3 inline-flex items-center gap-1 text-[#22D3EE] hover:text-[#67E8F9] font-medium transition-colors"
                    >
                      Apply Now
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  </li>
                ))}
            </ul>
          )}
          {/* Pagination */}
          <div className="flex gap-3 mt-10 items-center justify-center">
            <button
              className={`${
                currentPage === 1 ? "bg-[#0F172A] text-[#475569] cursor-not-allowed" : "bg-[#22D3EE] text-[#060B18] hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              } px-4 py-2 rounded-lg font-medium transition-all`}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              Previous
            </button>
            <span className="text-[#94A3B8]">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className={`${
                currentPage === totalPages ? "bg-[#0F172A] text-[#475569] cursor-not-allowed" : "bg-[#22D3EE] text-[#060B18] hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              } px-4 py-2 rounded-lg font-medium transition-all`}
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
            >
              Next
            </button>
          </div>
        </div>
        {/* Mobile Sidebar */}
        <div className="md:hidden sm:block w-full px-6 mt-12 pt-12 sm:border-t border-[#1E293B]/60">
          <CategoriesList
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <RecruiterJobs />
          <YouMayLike heading="You May Like" careers={jobs} />
        </div>
      </div>
      <CareersFooter />
    </>
  );
};

export async function getServerSideProps() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/careers/careers/`
    );
    const jobs = await res.json();
    const categoryRes = await fetch(
      `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/career/career-categories/`
    );
    const categories = categoryRes.ok ? await categoryRes.json() : [];

    const relatedJobs = await jobs;

    const commentCounts = await Promise.all(
      jobs.map(async (job) => {
        try {
          const commentRes = await fetch(
            `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/users/comments/${job.id}`
          );

          if (!commentRes.ok) {
            console.error(`Failed to fetch comments for job ID: ${job.id}`);
            return { jobId: job.id, count: 0 };
          }

          const commentData = await commentRes.json();
          // console.log("Comment counts response data:", commentData);
          return { jobId: job.id, count: commentData.length || 0 };
        } catch (error) {
          console.error("Error fetching comments:", error);
          return { jobId: job.id, count: 0 };
        }
      })
    );

    // Attach comment count to jobs
    const jobsWithComments = jobs.map((job) => ({
      ...job,
      commentCount: commentCounts.find((c) => c.jobId === job.id)?.count || 0,
    }));

    return {
      props: {
        jobs: jobsWithComments || [],
        categories,
        relatedJobs: relatedJobs || [],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { jobs: [], categories: [], relatedJobs: [] } };
  }
}

export default JobsHome;
