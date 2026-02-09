import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import useAuth from "@/middleware/auth";
import Link from "next/link";

export default function CategoriesList() {
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
      <div className="py-6 text-center text-sm text-slate-500">
        Loading categories...
      </div>
    );

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-semibold text-slate-900">Categories</h2>
        <Link href="/admin/categories/create" legacyBehavior>
          <a className="inline-flex items-center rounded-full bg-slate-900 text-slate-50 text-xs font-medium px-3 py-1.5 hover:bg-black transition">
            + New category
          </a>
        </Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-xl border border-slate-200 shadow-sm p-3 flex flex-col"
          >
            <p className="text-xs font-semibold text-slate-900 mb-1 line-clamp-2">
              {category.name}
            </p>
            <div className="flex items-center gap-2 mt-3 text-xl">
              <button
                type="button"
                onClick={() => handleDelete(category.id)}
                className="flex-1 flex items-center justify-center bg-red-50 text-red-700 rounded-full h-8 hover:bg-red-100 transition"
                title="Delete"
              >
                <MdDelete />
              </button>
              <button
                type="button"
                onClick={() => handleEdit(category.id)}
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
