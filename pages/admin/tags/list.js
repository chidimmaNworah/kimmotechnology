import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import useAuth from "@/middleware/auth";
import Link from "next/link";
import AdminLayout from "@/components/AdminLayout/AdminLayout";

export default function TagsList({ embedded = false }) {
  const [tags, setTags] = useState([]);
  const loading = useAuth();

  const API_URL = `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}`;

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get(`${API_URL}/tag/tags/`);
        setTags(response.data);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };
    if (!loading) fetchTags();
  }, [loading]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this tag?",
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_URL}/tag/tags/${id}`);
      setTags((prev) => prev.filter((tag) => tag.id !== id));
    } catch (error) {
      console.error("Error deleting tag:", error);
    }
  };

  if (loading)
    return (
      <div className="py-6 text-center text-sm text-[#64748B]">
        Loading tags...
      </div>
    );

  const content = (
    <div
      className={
        embedded
          ? "space-y-4 w-full overflow-hidden"
          : "space-y-4 p-4 sm:p-6 max-w-6xl mx-auto w-full overflow-hidden"
      }
    >
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-semibold text-[#F1F5F9] font-['Syne']">
          Tags
        </h2>
        <Link
          href="/admin/tags/create"
          className="inline-flex items-center rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 text-[#22D3EE] text-xs font-medium px-3 py-1.5 hover:bg-[#22D3EE]/25 transition"
        >
          + New Tag
        </Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {tags.map((tag) => (
          <div
            key={tag.id}
            className="bg-[#0F172A]/60 rounded-xl border border-[#1E293B]/60 p-3 flex flex-col hover:border-[#22D3EE]/30 transition-colors min-w-0 overflow-hidden"
          >
            <p className="text-xs font-semibold text-[#F1F5F9] mb-1 line-clamp-2">
              {tag.name}
            </p>
            <div className="flex items-center gap-2 mt-3 text-xl">
              <button
                type="button"
                onClick={() => handleDelete(tag.id)}
                className="flex-1 flex items-center justify-center bg-red-950/30 text-red-400 rounded-full h-8 hover:bg-red-950/50 transition"
                title="Delete"
              >
                <MdDelete />
              </button>
              <Link
                href={`/admin/tags/${tag.id}`}
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
