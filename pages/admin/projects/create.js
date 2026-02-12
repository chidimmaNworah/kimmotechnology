import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./project.module.scss";
import AdminLayout from "@/components/AdminLayout/AdminLayout";
import { useRouter } from "next/router";
import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi";

export default function Projects() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [previewLink, setPreviewLink] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL;
  const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const CLOUDINARY_UPLOAD_PRESET =
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_URL}/category/categories/`);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      setResponseMessage("Please select an image.");
      return;
    }

    try {
      setSubmitting(true);
      // 1) Upload image to Cloudinary from the browser
      const uploadData = new FormData();
      uploadData.append("file", image);
      uploadData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      const uploadRes = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        uploadData
      );

      const img_url = uploadRes.data.secure_url || uploadRes.data.url;

      // Find the selected category name from its id
      const selectedCategory = categories.find(
        (cat) => String(cat.id) === String(category)
      );
      const categoryNames = selectedCategory ? [selectedCategory.name] : [];

      // 2) Send JSON payload with Cloudinary URL to the backend
      await axios.post(`${API_URL}/project/projects/`, {
        title,
        description,
        github_link: githubLink || null,
        preview_link: previewLink || null,
        img_url,
        categories: categoryNames,
      });
      setResponseMessage("Project data submitted successfully!");
      router.push("/admin");
    } catch (error) {
      setResponseMessage("Error submitting data.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AdminLayout>
      <div className={styles.about}>
        <Link href="/admin/projects/list" className="inline-flex items-center gap-1.5 text-sm text-[#64748B] hover:text-[#22D3EE] transition mb-4 font-['Outfit']">
          <HiOutlineArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>
        <h1>Add Project Data</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div>
            <label>GitHub Link</label>
            <input
              type="url"
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
            />
          </div>

          <div>
            <label>Preview Link</label>
            <input
              type="url"
              value={previewLink}
              onChange={(e) => setPreviewLink(e.target.value)}
            />
          </div>

          <div>
            <label>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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

          <div>
            <label>Upload Image</label>
            <input type="file" onChange={handleImageChange} required />
            {imagePreview && (
              <div style={{ marginTop: "1rem" }}>
                <p className="text-sm mb-2 text-[#94A3B8]">Image preview:</p>
                <img
                  src={imagePreview}
                  alt="Selected project image preview"
                  style={{ maxWidth: "200px", borderRadius: "0.5rem" }}
                  className="border border-[#1E293B]"
                />
              </div>
            )}
          </div>

          <button type="submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </AdminLayout>
  );
}
