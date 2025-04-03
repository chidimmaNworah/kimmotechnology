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

const GrantsHome = ({ categories, grants, relatedGrants }) => {
  const grantCareers = grants.filter(
    (career) =>
      career.field && career.field.some((f) => f.toLowerCase() === "grants")
  );

  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredCareers = selectedCategory
    ? grants.filter((career) => career.category_id === selectedCategory.id)
    : grantCareers;

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

  return (
    <>
      <Head>
        <title>
          Find the Latest Grants & Funding Opportunities | Kimmotech
        </title>
        <meta
          name="description"
          content="Explore the latest grants and funding opportunities for businesses, startups, NGOs, students, and professionals. Apply now and secure financial support."
        />
        <meta
          property="og:title"
          content="Find the Latest Grants & Funding Opportunities | Kimmotech"
        />
        <meta
          property="og:description"
          content="Discover grants and funding opportunities tailored for businesses, entrepreneurs, students, and organizations. Get financial support today."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://kimmotech.net/careers/grants"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/kimmoramicky/image/upload/v1742039039/kimmotech/grants_poster.png"
        />
      </Head>

      <JobNavbar />
      <div className={styles.jobshome_heroImage}>
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className={styles.jobshome_heroImage_div}
        >
          <h2 className="head-text">FIND FUNDING OPPORTUNITIES</h2>
          <p className="font-bold text-[1rem] text-center">
            FIND LATEST GRANTS AND FUNDINGS YOU DESERVE
          </p>
        </motion.div>
      </div>
      <div className={`${styles.jobshome} flex flex-col md:flex-row gap-6`}>
        <div className="hidden md:block md:w-1/4 w-full p-4 md:border-r border-[#cccccc40]">
          <CategoriesList
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <RecruiterJobs />
          {/* <hr className="border-t border-[#8888C860] my-4" /> */}
          <YouMayLike heading="You May Like" careers={grants} />
        </div>
        <div className="container p-4">
          <h1 className="text-2xl font-bold">
            {selectedCategory
              ? `Category: ${selectedCategory.name}`
              : "Latest Grants"}
          </h1>
          {paginatedData?.length === 0 ? (
            <p className="text-gray-500">Loading...</p>
          ) : (
            <ul className="mt-4 space-y-6">
              {paginatedData
                ?.slice(0, 30)
                .reverse()
                .map((grant) => (
                  <li key={grant.id} className="border-b pb-4">
                    <h2 className="text-xl font-semibold">{grant.title}</h2>
                    <p className="text-gray-500">
                      Posted on {new Date(grant.created_at).toDateString()} -
                      kimmotech.net/careers/grants --- ({grant.commentCount}{" "}
                      comments)
                    </p>
                    <p className="mt-2 text-gray-700">{grant.excerpt}</p>
                    <Link
                      href={`/careers/grants/grant/${grant.id}`}
                      className="mt-2 inline-block text-blue-600 hover:underline"
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
          <YouMayLike heading="You May Like" careers={grants} />
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
    const grants = await res.json();
    const categoryRes = await fetch(
      `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/career/career-categories/`
    );
    const categories = categoryRes.ok ? await categoryRes.json() : [];

    const relatedGrants = await grants;

    const commentCounts = await Promise.all(
      grants.map(async (grant) => {
        try {
          const commentRes = await fetch(
            `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/users/comments/${grant.id}`
          );

          if (!commentRes.ok) {
            console.error(`Failed to fetch comments for grant ID: ${grant.id}`);
            return { grantId: grant.id, count: 0 };
          }

          const commentData = await commentRes.json();
          // console.log("Comment counts response data:", commentData);
          return { grantId: grant.id, count: commentData.length || 0 };
        } catch (error) {
          console.error("Error fetching comments:", error);
          return { grantId: grant.id, count: 0 };
        }
      })
    );

    // Attach comment count to grants
    const grantsWithComments = grants.map((grant) => ({
      ...grant,
      commentCount:
        commentCounts.find((c) => c.grantId === grant.id)?.count || 0,
    }));

    return {
      props: {
        grants: grantsWithComments || [],
        categories,
        relatedGrants: relatedGrants || [],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { grants: [], categories: [], relatedGrants: [] } };
  }
}

export default GrantsHome;
