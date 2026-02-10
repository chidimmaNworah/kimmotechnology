import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoIosEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import useAuth from "@/middleware/auth";
import Image from "next/image";

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
  }, [loading, API_URL]);

  const handleEdit = (id) => {
    router.push(`/admin/about/${id}`); // Navigate to the edit page dynamically
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this?",
    );
    if (!confirmDelete) return;

    try {
      // console.log("Deleting about with ID:", id);

      await axios.delete(
        `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/about/abouts/${id}`,
      );
      setAbouts((prev) => prev.filter((about) => about.id !== id)); // Remove from UI
    } catch (error) {
      console.error("Error deleting about:", error);
    }
  };

  if (loading)
    return (
      <div className="py-6 text-center text-sm text-slate-500">
        Loading expertise...
      </div>
    );

  return (
    <div className="p-4">
      <h2 className="text-center text-xl mb-6 underline">ABOUTS</h2>

      <div className="flex flex-wrap justify-around gap-4">
        {abouts.map((about) => (
          <div className="w-40 mb-4" key={about.id}>
            <Image
              src={about.img_url}
              alt={about.title || "About image"}
              width={160}
              height={160}
              className="w-full mb-2 rounded object-cover"
              unoptimized
            />

            <p className="text-xs font-semibold text-slate-900 mb-1">
              {about.title}
            </p>

            <div className="flex items-center gap-2 mt-2 text-xl">
              <button
                type="button"
                className="flex-1 flex items-center justify-center bg-slate-100 rounded-full h-8"
              >
                <IoIosEye />
              </button>

              <button
                type="button"
                onClick={() => handleDelete(about.id)}
                className="flex-1 flex items-center justify-center bg-red-50 text-red-700 rounded-full h-8"
              >
                <MdDelete />
              </button>

              <button
                type="button"
                onClick={() => handleEdit(about.id)}
                className="flex-1 flex items-center justify-center bg-emerald-50 text-emerald-700 rounded-full h-8"
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
