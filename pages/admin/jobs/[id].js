import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import AdminLayout from "@/components/AdminLayout/AdminLayout";
import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
    ["clean"],
  ],
};

export default function EditJob() {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState({
    title: "",
    description: "",
    excerpt: "",
    industry: "",
    category_id: "",
    field: "",
    region: "",
    state: "",
  });
  const [categories, setCategories] = useState([]);
  const [responseMessage, setResponseMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL;

  useEffect(() => {
    if (id) {
      const fetchJob = async () => {
        try {
          const response = await axios.get(`${API_URL}/careers/careers/${id}`);
          setJob(response.data);
        } catch (error) {
          console.error("Error fetching job data:", error);
        }
      };
      fetchJob();
    }
  }, [id, API_URL]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_URL}/career/career-categories/`);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, [API_URL]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData();
    formData.append("title", job.title);
    formData.append("excerpt", job.excerpt);
    formData.append("description", job.description);
    formData.append("category_id", job.category_id);
    formData.append("industry", job.industry);
    formData.append("field", job.field);
    formData.append("region", job.region);
    formData.append("state", job.state);

    try {
      await axios.put(`${API_URL}/careers/careers/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResponseMessage("Job updated successfully!");
    } catch (error) {
      setResponseMessage("Error updating job.");
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "bg-[#0F172A]/80 border border-[#1E293B] rounded-lg px-3 py-2 text-[#F1F5F9] font-['Outfit'] text-sm focus:border-[#22D3EE] outline-none transition-colors w-full";
  const labelClass =
    "text-xs text-[#94A3B8] font-['Outfit'] uppercase tracking-wider mb-1";

  return (
    <AdminLayout>
      <div className="bg-[#060B18] min-h-screen">
        <div className="bg-[#0A1628] py-6 px-4">
          <div className="max-w-2xl mx-auto">
            <Link
              href="/admin/jobs/list"
              className="inline-flex items-center gap-1.5 text-sm text-[#64748B] hover:text-[#22D3EE] transition mb-3 font-['Outfit']"
            >
              <HiOutlineArrowLeft className="w-4 h-4" /> Back to Jobs
            </Link>
            <h1 className="text-[#22D3EE] font-semibold text-2xl font-['Syne'] tracking-wide">
              Edit Job
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full py-8 px-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full max-w-2xl"
          >
            <div className="flex flex-col">
              <label className={labelClass}>Title</label>
              <input
                type="text"
                name="title"
                className={inputClass}
                value={job.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>Excerpt</label>
              <input
                type="text"
                name="excerpt"
                className={inputClass}
                value={job.excerpt}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>Description</label>
              <ReactQuill
                value={job.description}
                theme="snow"
                onChange={(value) =>
                  setJob((prev) => ({ ...prev, description: value }))
                }
                modules={quillModules}
                className="rounded-lg [&_.ql-toolbar]:border-[#1E293B] [&_.ql-toolbar]:bg-[#0F172A]/60 [&_.ql-toolbar]:rounded-t-lg [&_.ql-container]:border-[#1E293B] [&_.ql-container]:bg-[#0F172A]/80 [&_.ql-container]:rounded-b-lg [&_.ql-container]:min-h-[160px] [&_.ql-editor]:text-[#F1F5F9] [&_.ql-editor]:font-['Outfit'] [&_.ql-editor]:text-sm [&_.ql-picker-label]:text-[#94A3B8] [&_.ql-stroke]:stroke-[#94A3B8] [&_.ql-fill]:fill-[#94A3B8]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className={labelClass}>Industry</label>
                <input
                  type="text"
                  name="industry"
                  className={inputClass}
                  value={job.industry}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className={labelClass}>Field</label>
                <input
                  type="text"
                  name="field"
                  className={inputClass}
                  value={job.field}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className={labelClass}>Region</label>
                <input
                  type="text"
                  name="region"
                  className={inputClass}
                  value={job.region}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className={labelClass}>State</label>
                <input
                  type="text"
                  name="state"
                  className={inputClass}
                  value={job.state}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className={labelClass}>Category</label>
              <select
                name="category_id"
                className={inputClass}
                value={job.category_id}
                onChange={handleChange}
                required
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="bg-gradient-to-r from-[#22D3EE] to-[#06B6D4] text-[#060B18] font-semibold rounded-lg py-2.5 text-sm tracking-wider font-['Outfit'] hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all disabled:opacity-50"
            >
              {submitting ? "UPDATING..." : "UPDATE JOB"}
            </button>
          </form>

          {responseMessage && (
            <p className="text-[#22D3EE] mt-4 text-sm font-['Outfit']">
              {responseMessage}
            </p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
