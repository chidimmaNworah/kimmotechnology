import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoIosEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Navbar } from "@/components";
import useAuth from "@/middleware/auth";
import Link from "next/link";

export default function ProjectsList() {
  const [jobs, setJobs] = useState([]);
  const loading = useAuth();
  const router = useRouter();

  const API_URL = `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}`;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${API_URL}/careers/careers/`);
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    if (!loading) fetchJobs();
  }, [loading]);

  const handleEdit = (id) => {
    router.push(`/admin/careers/${id}`); // Navigate to the edit page dynamically
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this?"
    );
    if (!confirmDelete) return;

    try {
      // console.log("Deleting project with ID:", id);

      await axios.delete(
        `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/careers/careers/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setJobs((prev) => prev.filter((job) => job.id !== id)); // Remove from UI
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="p-4">
        <h2 className="text-center text-xl mb-6 underline">Jobs</h2>
        <div>
          <ul className="mb-4 text-center">
            <li>
              <Link href="/admin/jobs/create">
                <button>Create New Jobs</button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap justify-around">
          {jobs.map((job, i) => (
            <div className="w-40 mb-4" key={i}>
              <div className="truncate">
                <p className="text-sm mb-4">
                  Title
                  <br />
                  {job.title}
                </p>
                <span className="">
                  Description:
                  <br />
                  {job.description}
                </span>
                <div className="flex justify-start gap-10 mt-4">
                  <IoIosEye className="bg-gray-200 text-black text-2xl h-[2rem] w-full rounded-full p-1" />
                  <MdDelete
                    className="bg-gray-200 text-red-700 text-2xl h-[2rem] w-full rounded-full p-1"
                    onClick={() => handleDelete(job.id)}
                  />
                  <CiEdit
                    className="bg-gray-200 text-green-800 text-2xl h-[2rem] w-full rounded-full p-1"
                    onClick={() => handleEdit(job.id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
