import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./jobs.module.scss";
import AdminLayout from "@/components/AdminLayout/AdminLayout";
import { useRouter } from "next/router";
import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import "react-quill-new/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { toast } from "react-toast";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const quillModules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],

  // imageUpload: true,
  // imageResize: {
  //   parchment: Quill.import("parchment"),
  //   modules: ["Resize", "DisplaySize"],
  // },
};

const quillFormats = [
  "header",
  "font",
  "size", // Text styling
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent", // List formats
  "link",
  "image",
  "video", // Media
  "align",
  "color",
  "background", // Text alignment & color
  "code-block",
  "script",
  "clean",
];

const industries = [
  "Science and Technology",
  "Health",
  "Communications",
  "Works and Constructions",
];

const initialState = {
  title: "",
  description: "",
  excerpt: "",
  industry: "",
  category_id: "",
  field: "",
  region: "",
  state: "",
};

export default function Jobs() {
  const [jobs, setJobs] = useState(initialState);
  const [categories, setCategories] = useState([]);
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL;

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get(
          `${API_URL}/career/career-categories/`
        );
        // console.log("categories", response.data);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    fetchCategories();
  }, [API_URL]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobs((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", jobs.title);
    formData.append("excerpt", jobs.excerpt);
    formData.append("category_id", jobs.category_id);
    formData.append("description", jobs.description);
    formData.append("industry", jobs.industry);
    formData.append("field", jobs.field);
    formData.append("region", jobs.region);
    formData.append("state", jobs.state);

    try {
      await axios.post(`${API_URL}/careers/careers/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setResponseMessage("Job data submitted successfully!");
      toast.success("Job data submitted successfully!");
      // router.push("/admin/jobs/list");
    } catch (error) {
      setResponseMessage("Error submitting data.");
      toast.error("Error submitting data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className={styles.about}>
        <Link href="/admin/jobs/list" className="inline-flex items-center gap-1.5 text-sm text-[#64748B] hover:text-[#22D3EE] transition mb-4 font-['Outfit']">
          <HiOutlineArrowLeft className="w-4 h-4" /> Back to Jobs
        </Link>
        <h1>Add Job Data</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={jobs.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label>Excerpt</label>
            <input
              type="text"
              name="excerpt"
              value={jobs.excerpt}
              onChange={handleChange}
              required
            />
          </div>

          <label>Description</label>
          <ReactQuill
            value={jobs.description}
            theme="snow"
            onChange={(value) =>
              setJobs((prev) => ({ ...prev, description: value }))
            }
            modules={quillModules}
            formats={quillFormats}
            className="rounded-lg mb-4"
          />

          <div className="flex flex-col mb-4">
            <label>Category</label>
            <input
              type="text"
              name="category_id"
              value={jobs.category_id}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label>Region</label>
            <input
              type="text"
              name="region"
              value={jobs.region}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label>State</label>
            <input
              type="text"
              name="state"
              value={jobs.state}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label>Industry</label>
            <input
              type="text"
              name="industry"
              value={jobs.industry}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label>Field</label>
            <input
              type="text"
              name="field"
              value={jobs.field}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </AdminLayout>
  );
}
