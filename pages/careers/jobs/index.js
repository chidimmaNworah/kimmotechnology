import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { CareersFooter, JobNavbar } from "@/components";
import FilterByNav from "@/components/filterbynav";
import styles from "./jobs.module.scss";
import { motion } from "framer-motion";
import Head from "next/head";

const JobsHome = ({ categories }) => {
  const [jobs, setJobs] = useState([]);
  console.log(
    "API URL:",
    `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/jobs/jobs/`
  );

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/jobs/jobs/`
        );
        setJobs(res.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

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
      <FilterByNav />
      <div className={styles.jobshome_heroImage}>
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className={styles.jobshome_heroImage_div}
        >
          <h2 className="head-text">WORK FROM HOME</h2>
          <p className="bold-text">
            FIND REMOTE JOBS FOR ALL OCCUPATIONS IN NAIJA & BEYOND
          </p>
        </motion.div>
      </div>
      <div className={`${styles.jobshome} flex flex-col md:flex-row gap-6`}>
        <div className="hidden md:block md:w-1/4 w-full p-4 md:border-r border-[#cccccc40]">
          <h2 className="text-lg font-semibold">Categories</h2>
          <ul className="mt-2 text-gray-600">
            {categories?.length > 0 ? (
              categories.map((category, index) => (
                <li key={index} className="py-1 border-b last:border-none">
                  {category || "Uncategorized"}
                </li>
              ))
            ) : (
              <p>No categories available</p>
            )}
          </ul>
          <ul className="mt-10 text-[#313BAC] text-sm">
            <li className="py-1 border-b border-[#cccccc40] last:border-none">
              RECRUITER -DASHBOARD
            </li>
            <li className="py-1 border-b border-[#cccccc40] last:border-none">
              PAID JOB POST
            </li>
            <li className="py-1 border-b border-[#cccccc40] last:border-none">
              PAID JOB PLANS
            </li>
            <li className="py-1 border-b border-[#cccccc40] last:border-none">
              FREE JOB POSTS
            </li>
          </ul>
          {/* <hr className="border-t border-[#8888C860] my-4" /> */}
          <h2 className="text-lg font-semibold mb-2 mt-10">Related Jobs</h2>
          <ul>
            {jobs.length > 0 ? (
              jobs?.slice(7, 23).map((relatedJob) => (
                <li key={relatedJob.id} className="mb-2">
                  <Link
                    href={`/careers/jobs/job/${relatedJob.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {relatedJob.title}
                  </Link>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No related jobs found</p>
            )}
          </ul>
        </div>
        <div className="container p-4">
          <h1 className="text-2xl font-bold">Latest Jobs</h1>
          {jobs?.length === 0 ? (
            <p className="text-gray-500">No jobs available.</p>
          ) : (
            <ul className="mt-4 space-y-6">
              {jobs
                ?.slice(0, 30)
                .reverse()
                .map((job) => (
                  <li key={job.id} className="border-b pb-4">
                    <h2 className="text-xl font-semibold">{job.title}</h2>
                    <p className="text-gray-500">
                      Posted on {new Date(job.created_at).toDateString()} -
                      kimmotech.net/careers/jobs --- (0 comments)
                    </p>
                    <p className="mt-2 text-gray-700">{job.excerpt}</p>
                    <Link
                      href={`/careers/jobs/job/${job.id}`}
                      className="mt-2 inline-block text-blue-600 hover:underline"
                    >
                      Apply Now
                    </Link>
                  </li>
                ))}
            </ul>
          )}
        </div>
        <div className="md:hidden sm:block w-full px-4 mt-12 pt-12 sm:border-t border-[#cccccc40]">
          <h2 className="text-lg font-semibold">Categories</h2>
          <ul className="mt-2 text-gray-600">
            {categories?.length > 0 ? (
              categories.map((category, index) => (
                <li key={index} className="py-1 border-b last:border-none">
                  {category || "Uncategorized"}
                </li>
              ))
            ) : (
              <p>No categories available</p>
            )}
          </ul>
          <ul className="mt-10 text-[#313BAC] text-sm">
            <li className="py-1 border-b border-[#cccccc40] last:border-none">
              RECRUITER -DASHBOARD
            </li>
            <li className="py-1 border-b border-[#cccccc40] last:border-none">
              PAID JOB POST
            </li>
            <li className="py-1 border-b border-[#cccccc40] last:border-none">
              PAID JOB PLANS
            </li>
            <li className="py-1 border-b border-[#cccccc40] last:border-none">
              FREE JOB POSTS
            </li>
          </ul>
          <h2 className="text-lg font-semibold mb-2 mt-10">Related Jobs</h2>
          <ul>
            {jobs.length > 0 ? (
              jobs?.slice(7, 23).map((relatedJob) => (
                <li key={relatedJob.id} className="mb-2">
                  <Link
                    href={`/careers/jobs/job/${relatedJob.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {relatedJob.title}
                  </Link>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No related jobs found</p>
            )}
          </ul>
        </div>
      </div>
      <CareersFooter />
    </>
  );
};

export async function getServerSideProps() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/jobs/jobs/`
    );
    const jobs = await res.json();

    // Extract unique categories from jobs
    const categories = [
      ...new Set(jobs.flatMap((job) => job.categories || [])),
    ];

    if (!res.ok) {
      return { props: { jobs: [], categories: [] } };
    }

    return { props: { jobs: jobs || [], categories } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { jobs: [], categories: [], relatedJobs: [] } };
  }
}

export default JobsHome;
