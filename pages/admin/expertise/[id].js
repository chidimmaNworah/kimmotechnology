import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import AdminLayout from "@/components/AdminLayout/AdminLayout";
import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi";

export default function EditAbout() {
  const router = useRouter();
  const { id } = router.query;
  const [about, setAbout] = useState({
    title: "",
    description: "",
    img_url: "",
  });
  const [image, setImage] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    if (id) {
      const fetchAbout = async () => {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/about/abouts/${id}`
          );
          setAbout(response.data);
        } catch (error) {
          console.error("Error fetching about data:", error);
        }
      };
      fetchAbout();
    }
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", about.title);
    formData.append("description", about.description);
    if (image) formData.append("file", image);

    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/about/abouts/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResponseMessage("About data updated successfully!");
    } catch (error) {
      setResponseMessage("Error updating data.");
      console.error(error);
    }
  };

  return (
    <AdminLayout>
      <div className="bg-[#060B18] min-h-screen">
        <div className="bg-[#0A1628] py-6 px-4">
          <div className="max-w-md mx-auto">
            <Link href="/admin/expertise/list" className="inline-flex items-center gap-1.5 text-sm text-[#64748B] hover:text-[#22D3EE] transition mb-3 font-['Outfit']">
              <HiOutlineArrowLeft className="w-4 h-4" /> Back to Expertise
            </Link>
            <h1 className="text-[#22D3EE] font-semibold text-2xl font-['Syne'] tracking-wide">
              Edit Expertise
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full py-8 px-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
            <div className="flex flex-col">
              <label className="text-xs text-[#94A3B8] font-['Outfit'] uppercase tracking-wider mb-1">Title</label>
              <input
                type="text"
                className="bg-[#0F172A]/80 border border-[#1E293B] rounded-lg px-3 py-2 text-[#F1F5F9] font-['Outfit'] text-sm focus:border-[#22D3EE] outline-none transition-colors"
                value={about.title}
                onChange={(e) => setAbout({ ...about, title: e.target.value })}
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xs text-[#94A3B8] font-['Outfit'] uppercase tracking-wider mb-1">Description</label>
              <textarea
                value={about.description}
                className="bg-[#0F172A]/80 border border-[#1E293B] rounded-lg px-3 py-2 text-[#F1F5F9] font-['Outfit'] text-sm min-h-[120px] resize-y focus:border-[#22D3EE] outline-none transition-colors"
                onChange={(e) =>
                  setAbout({ ...about, description: e.target.value })
                }
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xs text-[#94A3B8] font-['Outfit'] uppercase tracking-wider mb-1">Upload Image</label>
              <input
                type="file"
                className="bg-[#0F172A]/80 border border-[#1E293B] rounded-lg px-3 py-2 text-[#64748B] text-sm file:bg-[#22D3EE]/10 file:border file:border-[#22D3EE]/30 file:text-[#22D3EE] file:px-3 file:py-1 file:rounded-md file:cursor-pointer file:mr-3 file:text-xs"
                onChange={handleImageChange}
              />
              {about.img_url && (
                <div className="mt-3">
                  <img
                    src={about.img_url}
                    alt="About Image"
                    className="rounded-lg border border-[#1E293B]"
                    width={100}
                  />
                </div>
              )}
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
