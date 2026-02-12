import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoIosEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import useAuth from "@/middleware/auth";
import Link from "next/link";
import AdminLayout from "@/components/AdminLayout/AdminLayout";

export default function ProjectsList({ embedded = false }) {
  const [projects, setProjects] = useState([]);
  const loading = useAuth();
  const router = useRouter();

  const API_URL = `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}`;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_URL}/project/projects/`);
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    if (!loading) fetchProjects();
  }, [loading]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this?"
    );
    if (!confirmDelete) return;

    try {
      console.log("Deleting project with ID:", id);

      await axios.delete(
        `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/project/projects/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setProjects((prev) => prev.filter((project) => project.id !== id)); // Remove from UI
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  if (loading)
    return (
      <div className="py-6 text-center text-sm text-[#64748B]">
        Loading projects...
      </div>
    );

  const content = (
    <div className={embedded ? "space-y-4 w-full overflow-hidden" : "space-y-4 p-4 sm:p-6 max-w-6xl mx-auto w-full overflow-hidden"}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-[#F1F5F9] font-['Syne']">Projects</h3>
        <Link href="/admin/projects/create" className="inline-flex items-center rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 text-[#22D3EE] text-xs font-medium px-3 py-1.5 hover:bg-[#22D3EE]/25 transition">
          + New Project
        </Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#0F172A]/60 rounded-xl border border-[#1E293B]/60 p-3 flex flex-col hover:border-[#22D3EE]/30 transition-colors min-w-0 overflow-hidden"
          >
            <div className="w-full h-32 mb-3 overflow-hidden rounded-lg">
              <img
                src={project.img_url}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-xs font-semibold text-[#F1F5F9] mb-1 line-clamp-2">
              {project.title}
            </p>
            <p className="text-[11px] text-[#94A3B8] line-clamp-3 mb-2 flex-1">
              {project.description}
            </p>
            <div className="flex items-center gap-2 mt-auto text-xl">
              <button
                type="button"
                className="flex-1 flex items-center justify-center bg-[#1E293B]/60 text-[#94A3B8] rounded-full h-8 hover:bg-[#22D3EE]/10 hover:text-[#22D3EE] transition"
                title="Preview"
              >
                <IoIosEye />
              </button>
              <button
                type="button"
                onClick={() => handleDelete(project.id)}
                className="flex-1 flex items-center justify-center bg-red-950/30 text-red-400 rounded-full h-8 hover:bg-red-950/50 transition"
                title="Delete"
              >
                <MdDelete />
              </button>
              <Link
                href={`/admin/projects/${project.id}`}
                className="flex-1 flex items-center justify-center bg-emerald-950/30 text-emerald-400 rounded-full h-8 hover:bg-emerald-950/50 transition"
                title="Edit"
              >
                <CiEdit />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (embedded) return content;
  return <AdminLayout>{content}</AdminLayout>;
}
