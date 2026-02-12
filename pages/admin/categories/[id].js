import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import AdminLayout from "@/components/AdminLayout/AdminLayout";
import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi";

export default function EditCategory() {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const API_URL = `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}`;

  useEffect(() => {
    if (!id) return;

    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/category/categories/${id}`
        );
        setName(response.data.name);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchCategory();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${API_URL}/category/categories/${id}`, { name });
      setResponseMessage("Category updated successfully!");
    } catch (error) {
      console.error("Error updating category:", error);
      setResponseMessage("Error updating category.");
    }
  };

  return (
    <AdminLayout>
      <div className="bg-[#060B18] min-h-screen">
        <div className="bg-[#0A1628] py-6 px-4">
          <div className="max-w-md mx-auto">
            <Link href="/admin/categories/list" className="inline-flex items-center gap-1.5 text-sm text-[#64748B] hover:text-[#22D3EE] transition mb-3 font-['Outfit']">
              <HiOutlineArrowLeft className="w-4 h-4" /> Back to Categories
            </Link>
            <h1 className="text-[#22D3EE] font-semibold text-2xl font-['Syne'] tracking-wide">
              Edit Category
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full py-8 px-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
            <div className="flex flex-col">
              <label className="text-xs text-[#94A3B8] font-['Outfit'] uppercase tracking-wider mb-1">Name</label>
              <input
                type="text"
                className="bg-[#0F172A]/80 border border-[#1E293B] rounded-lg px-3 py-2 text-[#F1F5F9] font-['Outfit'] text-sm focus:border-[#22D3EE] outline-none transition-colors"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-[#22D3EE] to-[#06B6D4] text-[#060B18] font-semibold rounded-lg py-2.5 text-sm tracking-wider font-['Outfit'] hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all"
            >
              SUBMIT
            </button>
          </form>

          {responseMessage && <p className="text-[#22D3EE] mt-4 text-sm font-['Outfit']">{responseMessage}</p>}
        </div>
      </div>
    </AdminLayout>
  );
}
