import { CareersFooter, JobNavbar } from "@/components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../jobs.module.scss";
import FilterByNav from "@/components/filterbynav";
import Share from "@/components/share";
import axios from "axios";
import Head from "next/head";

const JobDetail = ({ job, jobs, categories, relatedJobs = [] }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { name, email, content } = formData;

  useEffect(() => {
    if (id) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/users/comments/${id}`
        )
        .then((response) => setComments(response.data || [])) // ✅ Ensure it's always an array
        .catch((error) => {
          console.error("Error fetching comments:", error);
          setComments([]); // ✅ Fallback to empty array on error
        });
    }
  }, [id]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.content) {
      alert("All fields are required!");
      return;
    }
    setLoading(true);
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/users/comments`,
        { job_id: id, ...formData }
      );
      setIsFormSubmitted(true);
      setFormData({ name: "", email: "", content: "" });

      // Refresh comments after submission
      const updatedComments = await axios.get(
        `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/users/comments/${id}`
      );
      setComments(updatedComments.data);
    } catch (error) {
      console.error("Error submitting comment:", error);
    }

    setLoading(false);
  };

  // if (router.isFallback) {
  //   return <p>Loading...</p>;
  // }

  if (!job) {
    return <p>Job not found.</p>;
  }

  return (
    <>
      <Head>
        <title>{job.title} - Careers at Kimmotech</title>
        <meta
          name="description"
          content={
            job.excerpt ||
            "Explore exciting career opportunities at Kimmotech. Apply now!"
          }
        />
        <meta
          name="keywords"
          content="remote jobs, tech careers, job openings, Kimmotech jobs, apply now, software jobs"
        />
        <meta name="author" content="Kimmotech" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`${job.title} - Careers at Kimmotech`}
        />
        <meta
          property="og:description"
          content={
            job.excerpt ||
            "Join our team and take your career to the next level!"
          }
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/kimmoramicky/image/upload/v1742039039/kimmotech/remote_jobs_poster_ht1xw6.png"
        />
        <meta property="og:image:alt" content="Kimmotech Careers Job Poster" />
        <meta
          property="og:url"
          content={`https://kimmotech.net/careers/jobs/job/${job.id}`}
        />
        <meta property="og:site_name" content="Kimmotech Careers" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${job.title} - Careers at Kimmotech`}
        />
        <meta
          name="twitter:description"
          content={
            job.excerpt ||
            "Explore career opportunities at Kimmotech. Apply now!"
          }
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/kimmoramicky/image/upload/v1742039039/kimmotech/remote_jobs_poster_ht1xw6.png"
        />
        <meta name="twitter:image:alt" content="Kimmotech Careers Job Poster" />
        <meta name="twitter:site" content="@kimmotech" />

        {/* Canonical Link */}
        <link
          rel="canonical"
          href={`https://kimmotech.net/careers/jobs/job/${job.id}`}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <JobNavbar />
      <FilterByNav />
      <div className="flex flex-col md:flex-row gap-6">
        <div className="sm:hidden md:block md:w-1/4 w-full p-4 md:border-r border-[#cccccc40]">
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
          {/* <hr className="border-t border-[#8888C860] my-4" /> */}
          <h2 className="text-lg font-semibold mb-2 mt-10">Related Jobs</h2>
          <ul>
            {relatedJobs?.length > 0 ? (
              relatedJobs.map((relatedJob) => (
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

        <div className="container mx-auto p-4 md:w-3/4 w-full container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
          <p className="text-gray-500 mb-8">
            Posted on {new Date(job.created_at).toDateString()} -
            kimmotech.net/careers/jobs --- ({comments.length}{" "}
            {comments.length === 1 ? "comment" : "comments"})
          </p>
          <p className="text-gray-600">{job.excerpt}</p>
          <div className="mt-4">
            <p>
              <strong>Industry:</strong> {job.industry || "N/A"}
            </p>
            <p>
              <strong>Field:</strong> {job.field || "N/A"}
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Description</h2>
            <div
              className="mt-2 text-gray-700"
              dangerouslySetInnerHTML={{ __html: job.description }}
            />
          </div>
          <h3 className="mt-6 font-semibold">Comments</h3>
          {comments.length > 0 ? (
            <ul>
              {comments.map((comment) => (
                <li key={comment.id} className="border-b py-2">
                  <p className="font-bold">{comment.name}:</p>
                  <p>{comment.content}</p>
                  <span className="text-sm text-gray-500">
                    {new Date(comment.created_at).toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
          <h3 className="bold-text mt-4">Share this job:</h3>
          <Share post={job} />

          {!isFormSubmitted ? (
            <div className={`${styles.form}`}>
              <h3 className="head-text mt-14 pt-8 border-t border-[#cccccc40] ">
                Leave a comment
              </h3>
              <div className="app__flex gap-4">
                <input
                  className="p-text"
                  type="text"
                  placeholder="Your Name *"
                  name="name"
                  value={name}
                  onChange={handleChangeInput}
                />
                <input
                  className="p-text"
                  type="email"
                  placeholder="Your Email *"
                  name="email"
                  value={email}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <textarea
                  className="p-text"
                  placeholder="Your Comment *"
                  value={content}
                  name="content"
                  onChange={handleChangeInput}
                />
              </div>
              <button type="button" className="p-text" onClick={handleSubmit}>
                {!loading ? "Send Comment" : "Sending..."}
              </button>
            </div>
          ) : (
            <div>
              <h3 className="head-text">Your Comment has been posted!</h3>
            </div>
          )}

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
            {/* <hr className="border-t border-[#8888C860] my-4" /> */}
            <h2 className="text-lg font-semibold mb-2 mt-10">Related Jobs</h2>
            <ul>
              {relatedJobs?.length > 0 ? (
                relatedJobs.map((relatedJob) => (
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
      </div>
      <CareersFooter />
    </>
  );
};

export async function getServerSideProps({ params }) {
  try {
    // Fetch single job details
    const slugres = await fetch(
      `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/jobs/jobs/${params.id}`
    );
    if (!slugres.ok) {
      return { props: { job: null, jobs: [], categories: [] } };
    }
    const job = await slugres.json();

    // Fetch all jobs to extract categories
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/jobs/jobs/`
    );
    if (!res.ok) {
      return { props: { job, jobs: [], categories: [] } };
    }
    const jobs = await res.json();

    // Extract unique categories from jobs
    const categories = [
      ...new Set(jobs.flatMap((job) => job.categories || [])),
    ];

    // Filter related jobs by matching categories, industry, or field
    const relatedJobs = jobs
      .filter(
        (j) =>
          j.id !== job.id &&
          (j.categories?.some((cat) => job.categories?.includes(cat)) ||
            (j.industry && j.industry === job.industry) ||
            j.field?.some((fld) => job.field?.includes(fld)))
      )
      .slice(0, 5); // Limit to 5 related jobs

    return { props: { job, jobs, categories, relatedJobs: relatedJobs || [] } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { job: null, jobs: [], categories: [], relatedJobs: [] } };
  }
}

export default JobDetail;
