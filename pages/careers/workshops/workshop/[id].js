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
        .then((response) => setComments(response.data || []))
        .catch((error) => {
          console.error("Error fetching comments:", error);
          setComments([]);
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

      const updatedComments = await axios.get(
        `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/users/comments/${id}`
      );
      setComments(updatedComments.data);
    } catch (error) {
      console.error("Error submitting comment:", error);
    }

    setLoading(false);
  };

  if (!job) {
    return (
      <div className="min-h-screen bg-[#060B18] flex items-center justify-center">
        <p className="text-[#94A3B8] text-lg">Workshop not found.</p>
      </div>
    );
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
      <div className="bg-[#060B18] min-h-screen flex flex-col md:flex-row gap-6">
        {/* Desktop Sidebar */}
        <div className="hidden md:block md:w-1/4 w-full p-6 md:border-r border-[#1E293B]/60">
          <h2 className="text-lg font-semibold text-[#F1F5F9] font-['Syne'] mb-3">Categories</h2>
          <ul className="mt-2">
            {categories?.length > 0 ? (
              categories.map((category, index) => (
                <li key={index} className="py-2 border-b border-[#1E293B]/40 last:border-none text-[#94A3B8] hover:text-[#22D3EE] transition-colors cursor-pointer">
                  {category.name || "Uncategorized"}
                </li>
              ))
            ) : (
              <p className="text-[#64748B]">No categories available</p>
            )}
          </ul>
          <RecruiterJobs />
          <YouMayLike heading="You May Like" careers={jobs} />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-3 text-[#F1F5F9] font-['Syne']">{job.title}</h1>
          <p className="text-[#64748B] mb-8 text-sm">
            Posted on {new Date(job.created_at).toDateString()} -
            kimmotech.net/careers/workshops --- ({comments.length}{" "}
            {comments.length === 1 ? "comment" : "comments"})
          </p>
          <p className="text-[#94A3B8]">{job.excerpt}</p>
          <div className="mt-4">
            <p className="text-[#CBD5E1]">
              <strong className="text-[#F1F5F9]">Industry:</strong> {job.industry || "N/A"}
            </p>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-[#F1F5F9] font-['Syne'] mb-3">Description</h2>
            <div
              className={`mt-2 text-[#CBD5E1] ${styles.reactquillDetails}`}
              dangerouslySetInnerHTML={{ __html: job.description }}
            />
          </div>

          {/* Comments */}
          <h3 className="mt-10 font-bold uppercase tracking-wider border-b border-[#22D3EE]/30 pb-2 text-[#F1F5F9] font-['Syne']">
            Comments:
          </h3>
          {comments.length > 0 ? (
            <ul className="mt-4 space-y-4">
              {comments.map((comment) => (
                <li key={comment.id} className="py-3 border-b border-[#1E293B]/40">
                  <p className="font-bold text-[#22D3EE]">{comment.name}</p>
                  <p className="ml-4 text-[#CBD5E1] mt-1">{comment.content}</p>
                  <span className="text-sm text-[#64748B] ml-4">
                    {new Date(comment.created_at).toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[#64748B] mt-4">No comments yet. Be the first to comment!</p>
          )}

          <h3 className="font-bold mt-8 text-[#F1F5F9]">Share this post:</h3>
          <Share post={job} />

          {!isFormSubmitted ? (
            <div className={`${styles.form}`}>
              <h3 className="head-text mt-14 pt-8 border-t border-[#1E293B]/60 text-[#F1F5F9]">
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
            <div className="mt-8 p-4 rounded-lg border border-[#22D3EE]/30 bg-[#22D3EE]/5">
              <h3 className="text-[#22D3EE] font-semibold">Your Comment has been posted!</h3>
            </div>
          )}

          {/* Mobile Sidebar */}
          <div className="md:hidden sm:block w-full mt-12 pt-12 border-t border-[#1E293B]/60">
            <h2 className="text-lg font-semibold text-[#F1F5F9] font-['Syne'] mb-3">Categories</h2>
            <ul className="mt-2">
              {categories?.length > 0 ? (
                categories.map((category, index) => (
                  <li key={index} className="py-2 border-b border-[#1E293B]/40 last:border-none text-[#94A3B8]">
                    {category.name || "Uncategorized"}
                  </li>
                ))
              ) : (
                <p className="text-[#64748B]">No categories available</p>
              )}
            </ul>
            <RecruiterJobs />
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
