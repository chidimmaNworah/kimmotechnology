import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoIosEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
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
        console.log(response.data);
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

  if (loading)
    return (
      <div className="py-6 text-center text-sm text-slate-500">
        Loading jobs...
      </div>
    );

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-semibold text-slate-900">Jobs</h2>
        <Link href="/admin/jobs/create" className="inline-flex items-center rounded-full bg-slate-900 text-slate-50 text-xs font-medium px-3 py-1.5 hover:bg-black transition">
          + New job
        </Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.slice(0, 6).map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-xl border border-slate-200 shadow-sm p-3 flex flex-col"
          >
            <p className="text-xs font-semibold text-slate-900 mb-1 line-clamp-2">
              {job.title}
            </p>
            <p className="text-[11px] text-slate-600 line-clamp-3 mb-2 flex-1">
              {job.description}
            </p>
            <div className="flex items-center gap-2 mt-auto text-xl">
              <button
                type="button"
                className="flex-1 flex items-center justify-center bg-slate-100 text-slate-700 rounded-full h-8 hover:bg-slate-200 transition"
                title="Preview"
              >
                <IoIosEye />
              </button>
              <button
                type="button"
                onClick={() => handleDelete(job.id)}
                className="flex-1 flex items-center justify-center bg-red-50 text-red-700 rounded-full h-8 hover:bg-red-100 transition"
                title="Delete"
              >
                <MdDelete />
              </button>
              <button
                type="button"
                onClick={() => handleEdit(job.id)}
                className="flex-1 flex items-center justify-center bg-emerald-50 text-emerald-700 rounded-full h-8 hover:bg-emerald-100 transition"
                title="Edit"
              >
                <CiEdit />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
