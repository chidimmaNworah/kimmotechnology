import { CareersFooter, JobNavbar } from "@/components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../jobs.module.scss";
import Share from "@/components/share";
import axios from "axios";
import Head from "next/head";
import YouMayLike from "@/components/youMayLike";
import RecruiterJobs from "@/components/RecruiterJobs";

const WorkshopDetail = ({ job, jobs, categories, relatedJobs = [] }) => {
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
        { career_id: id, ...formData }
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
    return <p>Grant not found.</p>;
  }

  return (
    <>
      <Head>
        <title>{job?.title} | Workshop Details & Registration</title>
        <meta
          name="description"
          content={`Join the ${job?.title} workshop to gain hands-on experience and expert insights. Learn from professionals and advance your career.`}
        />
        <meta
          property="og:title"
          content={`${job?.title} | Workshop Details & Registration`}
        />
        <meta
          property="og:description"
          content={`Discover details about ${job?.title}. Register now to learn from experts and enhance your skills.`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://kimmotech.net/careers/workshops/${job?.slug}`}
        />
        <meta
          property="og:image"
          content={
            job?.image ||
            "https://res.cloudinary.com/kimmoramicky/image/upload/v1742039039/kimmotech/workshop_training_banner.png"
          }
        />
      </Head>

      <JobNavbar />
      <div className="flex flex-col md:flex-row gap-6">
        <div className="hidden md:block md:w-1/4 w-full p-4 md:border-r border-[#cccccc40]">
          <h2 className="text-lg font-semibold">Categories</h2>
          <ul className="mt-2 text-gray-600">
            {categories?.length > 0 ? (
              categories.map((category, index) => (
                <li key={index} className="py-1 border-b last:border-none">
                  {category.name || "Uncategorized"}
                </li>
              ))
            ) : (
              <p>No categories available</p>
            )}
          </ul>
          <RecruiterJobs />
          {/* <hr className="border-t border-[#8888C860] my-4" /> */}
          <YouMayLike heading="You May Like" careers={jobs} />
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
            {/* <p>
              <strong>Field:</strong> {job.field || "N/A"}
            </p> */}
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Description</h2>
            <div
              className="mt-2 text-gray-700"
              dangerouslySetInnerHTML={{ __html: job.description }}
            />
          </div>
          <h3 className="mt-6 bold-text uppercase tracking-wider border-b border-[#3541CC]">
            Comments:
          </h3>
          {comments.length > 0 ? (
            <ul>
              {comments.map((comment) => (
                <li key={comment.id} className=" py-2">
                  <p className="font-bold text-[#3541CC]">{comment.name}</p>
                  <p className="ml-4">{comment.content}</p>
                  <span className="text-sm text-gray-500 ml-4">
                    {new Date(comment.created_at).toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
          <h3 className="bold-text mt-4">Share this post:</h3>
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
                    {category.name || "Uncategorized"}
                  </li>
                ))
              ) : (
                <p>No categories available</p>
              )}
            </ul>
            <RecruiterJobs />
            {/* <hr className="border-t border-[#8888C860] my-4" /> */}
            <YouMayLike heading="You May Like" careers={jobs} />
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
      `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/careers/careers/${params.id}`
    );
    if (!slugres.ok) {
      return { props: { job: null, jobs: [], categories: [] } };
    }
    const job = await slugres.json();

    // Fetch all jobs to extract categories
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/careers/careers/`
    );
    if (!res.ok) {
      return { props: { job, jobs: [], categories: [] } };
    }
    const jobs = await res.json();

    const categoryRes = await fetch(
      `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/career/career-categories/`
    );
    const categories = categoryRes.ok ? await categoryRes.json() : [];

    const relatedJobs = jobs
      .filter(
        (j) =>
          j.id !== job.id &&
          ((j.industry && j.industry === job.industry) ||
            j.field?.some((fld) => job.field?.includes(fld)))
      )
      .slice(0, 5); // Limit to 5 related jobs

    return { props: { job, jobs, categories, relatedJobs: relatedJobs || [] } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { job: null, jobs: [], categories: [], relatedJobs: [] } };
  }
}

export default WorkshopDetail;
