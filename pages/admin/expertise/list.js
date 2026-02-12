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
      <div className="py-6 text-center text-sm text-[#64748B]">
        Loading expertise...
      </div>
    );

  return (
    <div className="p-4 bg-[#060B18] min-h-screen">
      <h2 className="text-center text-xl mb-6 text-[#22D3EE] font-['Syne'] font-semibold tracking-wide uppercase">Expertise</h2>

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

            <p className="text-xs font-semibold text-[#F1F5F9] mb-1">
              {about.title}
            </p>

            <div className="flex items-center gap-2 mt-2 text-xl">
              <button
                type="button"
                className="flex-1 flex items-center justify-center bg-[#1E293B]/60 text-[#94A3B8] rounded-full h-8 hover:bg-[#22D3EE]/10 hover:text-[#22D3EE] transition"
              >
                <IoIosEye />
              </button>

              <button
                type="button"
                onClick={() => handleDelete(about.id)}
                className="flex-1 flex items-center justify-center bg-red-950/30 text-red-400 rounded-full h-8 hover:bg-red-950/50 transition"
              >
                <MdDelete />
              </button>

              <button
                type="button"
                onClick={() => handleEdit(about.id)}
                className="flex-1 flex items-center justify-center bg-emerald-950/30 text-emerald-400 rounded-full h-8 hover:bg-emerald-950/50 transition"
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
