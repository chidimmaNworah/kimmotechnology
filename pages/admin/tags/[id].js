import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import AdminLayout from "@/components/AdminLayout/AdminLayout";
import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi";

export default function EditTag() {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const API_URL = `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}`;

  useEffect(() => {
    if (!id) return;

    const fetchTag = async () => {
      try {
        const response = await axios.get(`${API_URL}/tag/tags/${id}`);
        setName(response.data.name);
      } catch (error) {
        console.error("Error fetching tag:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTag();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${API_URL}/tag/tags/${id}`, { name });
      setResponseMessage("Tag updated successfully!");
    } catch (error) {
      console.error("Error updating tag:", error);
      setResponseMessage("Error updating tag.");
    }
  };

  return (
    <AdminLayout>
      <div className="bg-[#060B18] min-h-screen">
        <div className="bg-[#0A1628] py-6 px-4">
          <div className="max-w-md mx-auto">
            <Link
              href="/admin/tags/list"
              className="inline-flex items-center gap-1.5 text-sm text-[#64748B] hover:text-[#22D3EE] transition mb-3 font-['Outfit']"
            >
              <HiOutlineArrowLeft className="w-4 h-4" /> Back to Tags
            </Link>
            <h1 className="text-[#22D3EE] font-semibold text-2xl font-['Syne'] tracking-wide">
              Edit Tag
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full py-8 px-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full max-w-md"
          >
            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-wide text-[#94A3B8] mb-1 font-['Outfit']">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-[#0F172A]/80 border border-[#1E293B] rounded-lg text-[#F1F5F9] px-3 py-2 text-sm font-['Outfit'] focus:border-[#22D3EE] outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="bg-[#22D3EE] text-[#060B18] font-semibold py-2 px-4 rounded-lg hover:bg-[#22D3EE]/80 transition text-sm font-['Outfit']"
            >
              Update Tag
            </button>
          </form>

          {responseMessage && (
            <p
              className="mt-4 text-sm font-['Outfit']"
              style={{
                color: responseMessage.includes("Error")
                  ? "#ef4444"
                  : "#22c55e",
              }}
            >
              {responseMessage}
            </p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
