import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./jobs.module.scss";
import { Navbar } from "@/components";
import { useRouter } from "next/router";
import "react-quill-new/dist/quill.snow.css";
import dynamic from "next/dynamic";

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
  "font",
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "color",
  "background",
  "script",
  "blockquote",
  "code-block",
  "list",
  "bullet",
  "indent",
  "align",
  "link",
  "image",
  "video",
  "clean",
];

const industries = [
  "Science and Technology",
  "Health",
  "Communications",
  "Works and Constructions",
];

const region = [
  "Benin Republic",
  "Cameroun",
  "Kenya",
  "Nigeria",
  "South Africa",
  "USA",
];
const state = [
  "Abuja",
  "Akwa Ibom",
  "Bauchi",
  "Borno",
  "Cross River",
  "Delta",
  "Edo",
  "Ebonyi",
  "Ekiti",
];

const initialState = {
  title: "",
  description: "",
  excerpt: "",
  industry: "",
  categories: "",
  field: "",
  region: "",
  state: "",
};

export default function Jobs() {
  const [jobs, setJobs] = useState(initialState);
  const [responseMessage, setResponseMessage] = useState("");

  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobs((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", jobs.title);
    formData.append("excerpt", jobs.excerpt);
    formData.append("categories", jobs.categories);
    formData.append("description", jobs.description);
    formData.append("industry", jobs.industry);
    formData.append("field", jobs.field);
    formData.append("region", jobs.region);
    formData.append("state", jobs.state);

    try {
      await axios.post(`${API_URL}/jobs/jobs/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setResponseMessage("Project data submitted successfully!");
      router.push("/admin/jobs/list");
    } catch (error) {
      setResponseMessage("Error submitting data.");
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.about}>
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
            className="rounded mb-4"
          />

          <div className="flex flex-col mb-4">
            <label>Categories</label>
            <input
              type="text"
              name="categories"
              value={jobs.categories}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label>Region</label>
            <select
              name="region"
              value={jobs.region}
              onChange={handleChange}
              className="text-black rounded-lg py-2"
            >
              <option value="">Select Region</option>
              {region.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col mb-4">
            <label>State</label>
            <select
              name="state"
              value={jobs.state}
              onChange={handleChange}
              className="text-black rounded-lg py-2"
            >
              <option value="">Select State</option>
              {state.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col mb-4">
            <label>Industry</label>
            <select
              name="industry"
              value={jobs.industry}
              onChange={handleChange}
              className="text-black rounded-lg py-2"
            >
              <option value="">Select Industry</option>
              {industries.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
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

          <button type="submit">Submit</button>
        </form>

        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </>
  );
}
