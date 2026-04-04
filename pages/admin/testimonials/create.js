import { useState } from "react";
import axios from "axios";
import AdminLayout from "@/components/AdminLayout/AdminLayout";
import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi";

export default function CreateTestimonial() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("text", text);
    if (image) formData.append("file", image);

    try {
      setSubmitting(true);
      await axios.post(
        `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/testimonial/testimonials/`,
        formData,
      );
      setResponseMessage("Testimonial added successfully!");
      setName("");
      setText("");
      setImage(null);
    } catch (error) {
      setResponseMessage("Error submitting testimonial.");
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AdminLayout>
      <div className="bg-[#060B18] min-h-screen">
        <div className="bg-[#0A1628] py-6 px-4">
          <div className="max-w-md mx-auto">
            <Link
              href="/admin/testimonials/list"
              className="inline-flex items-center gap-1.5 text-sm text-[#64748B] hover:text-[#22D3EE] transition mb-3 font-['Outfit']"
            >
              <HiOutlineArrowLeft className="w-4 h-4" /> Back to Testimonials
            </Link>
            <h1 className="text-[#22D3EE] font-semibold text-2xl font-['Syne'] tracking-wide">
              Add Testimonial
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full py-8 px-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full max-w-md"
          >
            <div className="flex flex-col">
              <label className="text-xs text-[#94A3B8] font-['Outfit'] uppercase tracking-wider mb-1">
                Name
              </label>
              <input
                type="text"
                className="bg-[#0F172A]/80 border border-[#1E293B] rounded-lg px-3 py-2 text-[#F1F5F9] font-['Outfit'] text-sm focus:border-[#22D3EE] outline-none transition-colors"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John Doe — CEO"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xs text-[#94A3B8] font-['Outfit'] uppercase tracking-wider mb-1">
                Testimonial Text
              </label>
              <textarea
                value={text}
                className="bg-[#0F172A]/80 border border-[#1E293B] rounded-lg px-3 py-2 text-[#F1F5F9] font-['Outfit'] text-sm min-h-[120px] resize-y focus:border-[#22D3EE] outline-none transition-colors"
                onChange={(e) => setText(e.target.value)}
                placeholder="What did the client say?"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xs text-[#94A3B8] font-['Outfit'] uppercase tracking-wider mb-1">
                Photo (optional)
              </label>
              <input
                type="file"
                accept="image/*"
                className="bg-[#0F172A]/80 border border-[#1E293B] rounded-lg px-3 py-2 text-[#64748B] text-sm file:bg-[#22D3EE]/10 file:border file:border-[#22D3EE]/30 file:text-[#22D3EE] file:px-3 file:py-1 file:rounded-md file:cursor-pointer file:mr-3 file:text-xs"
                onChange={handleImageChange}
              />
              <p className="text-[10px] text-[#64748B] mt-1">
                If no image is uploaded, a default avatar will be used.
              </p>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-2.5 rounded-lg font-semibold text-sm bg-[#22D3EE] text-[#060B18] hover:bg-[#67e8f9] transition disabled:opacity-50 disabled:cursor-not-allowed font-['Outfit']"
            >
              {submitting ? "Submitting..." : "Add Testimonial"}
            </button>
          </form>

          {responseMessage && (
            <p
              className={`mt-4 text-sm font-['Outfit'] ${
                responseMessage.includes("Error")
                  ? "text-red-400"
                  : "text-emerald-400"
              }`}
            >
              {responseMessage}
            </p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
