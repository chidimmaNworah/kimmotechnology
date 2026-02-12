import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import useAuth from "@/middleware/auth";
import Link from "next/link";
import AdminLayout from "@/components/AdminLayout/AdminLayout";

export default function CategoriesList({ embedded = false }) {
  const [categories, setCategories] = useState([]);
  const loading = useAuth();
  const router = useRouter();

  const API_URL = `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}`;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_URL}/category/categories/`);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    if (!loading) fetchCategories();
  }, [loading]);

  const handleEdit = (id) => {
    router.push(`/admin/categories/${id}`);
  };

  // Optional: implement delete later when backend supports it
  const handleDelete = async (id) => {
    window.alert("Deleting categories is not implemented yet.");
  };

  if (loading)
    return (
      <div className="py-6 text-center text-sm text-[#64748B]">
        Loading categories...
      </div>
    );

  const content = (
    <div className={embedded ? "space-y-4 w-full overflow-hidden" : "space-y-4 p-4 sm:p-6 max-w-6xl mx-auto w-full overflow-hidden"}>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-semibold text-[#F1F5F9] font-['Syne']">Categories</h2>
        <Link href="/admin/categories/create" className="inline-flex items-center rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 text-[#22D3EE] text-xs font-medium px-3 py-1.5 hover:bg-[#22D3EE]/25 transition">
          + New Category
        </Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-[#0F172A]/60 rounded-xl border border-[#1E293B]/60 p-3 flex flex-col hover:border-[#22D3EE]/30 transition-colors min-w-0 overflow-hidden"
          >
            <p className="text-xs font-semibold text-[#F1F5F9] mb-1 line-clamp-2">
              {category.name}
            </p>
            <div className="flex items-center gap-2 mt-3 text-xl">
              <button
                type="button"
                onClick={() => handleDelete(category.id)}
                className="flex-1 flex items-center justify-center bg-red-950/30 text-red-400 rounded-full h-8 hover:bg-red-950/50 transition"
                title="Delete"
              >
                <MdDelete />
              </button>
              <button
                type="button"
                onClick={() => handleEdit(category.id)}
                className="flex-1 flex items-center justify-center bg-emerald-950/30 text-emerald-400 rounded-full h-8 hover:bg-emerald-950/50 transition"
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

  if (embedded) return content;
  return <AdminLayout>{content}</AdminLayout>;
}
