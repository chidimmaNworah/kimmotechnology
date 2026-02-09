import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoIosEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import useAuth from "@/middleware/auth";

export default function AboutsList() {
  const [abouts, setAbouts] = useState([]);
  const loading = useAuth();
  const router = useRouter();

  const API_URL = `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}`;

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await axios.get(`${API_URL}/about/abouts/`);
        setAbouts(response.data);
      } catch (error) {
        console.error("Error fetching abouts:", error);
      }
    };
    if (!loading) fetchAbout();
  }, [loading]);

  const handleEdit = (id) => {
    router.push(`/admin/about/${id}`); // Navigate to the edit page dynamically
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this?"
    );
    if (!confirmDelete) return;

    try {
      // console.log("Deleting about with ID:", id);

      await axios.delete(
        `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/about/abouts/${id}`
      );
      setAbouts((prev) => prev.filter((about) => about.id !== id)); // Remove from UI
    } catch (error) {
      console.error("Error deleting about:", error);
    }
  };

  if (loading)
    return (
      <div className="py-6 text-center text-sm text-slate-500">
        Loading about entries...
      </div>
    );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-slate-900">About entries</h3>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {abouts.map((about) => (
          <div
            key={about.id}
            className="bg-white rounded-xl border border-slate-200 shadow-sm p-3 flex flex-col"
          >
            <div className="w-full h-32 mb-3 overflow-hidden rounded-lg">
              <img
                src={about.img_url}
                alt={about.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-xs font-semibold text-slate-900 mb-1 line-clamp-2">
              {about.title}
            </p>
            <p className="text-[11px] text-slate-600 line-clamp-3 mb-2 flex-1">
              {about.description}
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
                onClick={() => handleDelete(about.id)}
                className="flex-1 flex items-center justify-center bg-red-50 text-red-700 rounded-full h-8 hover:bg-red-100 transition"
                title="Delete"
              >
                <MdDelete />
              </button>
              <button
                type="button"
                onClick={() => handleEdit(about.id)}
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
