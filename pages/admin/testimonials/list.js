import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoIosEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import useAuth from "@/middleware/auth";
import AdminLayout from "@/components/AdminLayout/AdminLayout";
import Link from "next/link";

const DEFAULT_AVATAR =
  "https://res.cloudinary.com/kimmoramicky/image/upload/v1741379248/kimmotech/avatar-placeholder.png";

export default function TestimonialsList() {
  const [testimonials, setTestimonials] = useState([]);
  const loading = useAuth();
  const router = useRouter();

  const API_URL = `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}`;

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/testimonial/testimonials/`,
        );
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    if (!loading) fetchTestimonials();
  }, [loading]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this testimonial?",
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/testimonial/testimonials/${id}`,
      );
      setTestimonials((prev) => prev.filter((t) => t.id !== id));
    } catch (error) {
      console.error("Error deleting testimonial:", error);
    }
  };

  if (loading)
    return (
      <div className="py-6 text-center text-sm text-[#64748B]">
        Loading testimonials...
      </div>
    );

  return (
    <AdminLayout>
      <div className="space-y-4 p-4 sm:p-6 max-w-6xl mx-auto w-full overflow-hidden">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-[#F1F5F9] font-['Syne']">
            Testimonials
          </h3>
          <Link
            href="/admin/testimonials/create"
            className="inline-flex items-center rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 text-[#22D3EE] text-xs font-medium px-3 py-1.5 hover:bg-[#22D3EE]/25 transition"
          >
            + New Testimonial
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#0F172A]/60 rounded-xl border border-[#1E293B]/60 p-3 flex flex-col hover:border-[#22D3EE]/30 transition-colors min-w-0 overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#1E293B] flex-shrink-0">
                  <img
                    src={testimonial.image || DEFAULT_AVATAR}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = DEFAULT_AVATAR;
                    }}
                  />
                </div>
                <p className="text-xs font-semibold text-[#F1F5F9] line-clamp-2">
                  {testimonial.name}
                </p>
              </div>
              <p className="text-[11px] text-[#94A3B8] line-clamp-4 mb-2 flex-1 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-2 mt-auto text-xl">
                <button
                  type="button"
                  onClick={() => handleDelete(testimonial.id)}
                  className="flex-1 flex items-center justify-center bg-red-950/30 text-red-400 rounded-full h-8 hover:bg-red-950/50 transition"
                  title="Delete"
                >
                  <MdDelete />
                </button>
                <Link
                  href={`/admin/testimonials/${testimonial.id}`}
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
    </AdminLayout>
  );
}
