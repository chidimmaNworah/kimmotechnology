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
  const [imageUrl, setImageUrl] = useState("");
  const [useUrlInput, setUseUrlInput] = useState(false);
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

    if (!useUrlInput && !image) {
      setResponseMessage("Please select an image.");
      return;
    }
    if (useUrlInput && !imageUrl.trim()) {
      setResponseMessage("Please enter an image URL.");
      return;
    }

    try {
      setSubmitting(true);
      let img_url;

      if (useUrlInput) {
        // Use the directly provided URL
        img_url = imageUrl.trim();
      } else {
        // Upload image to Cloudinary from the browser
        const uploadData = new FormData();
        uploadData.append("file", image);
        uploadData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

        const uploadRes = await axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
          uploadData,
        );

        img_url = uploadRes.data.secure_url || uploadRes.data.url;
      }

      // Find the selected category name from its id
      const selectedCategory = categories.find(
        (cat) => String(cat.id) === String(category),
      );
      const categoryNames = selectedCategory ? [selectedCategory.name] : [];

      // Send JSON payload to the backend
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
      const errMsg =
        error?.response?.data?.error?.message ||
        error?.response?.data?.detail ||
        error?.message ||
        "Error submitting data.";
      setResponseMessage(`Error: ${errMsg}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AdminLayout>
      <div className={styles.about}>
        <Link
          href="/admin/projects/list"
          className="inline-flex items-center gap-1.5 text-sm text-[#64748B] hover:text-[#22D3EE] transition mb-4 font-['Outfit']"
        >
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
            <label>Image</label>
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                marginBottom: "0.5rem",
              }}
            >
              <button
                type="button"
                onClick={() => {
                  setUseUrlInput(false);
                  setImageUrl("");
                }}
                style={{
                  padding: "0.35rem 0.75rem",
                  borderRadius: "0.375rem",
                  fontSize: "0.85rem",
                  border: "1px solid",
                  borderColor: !useUrlInput ? "#22D3EE" : "#334155",
                  background: !useUrlInput ? "#0F172A" : "transparent",
                  color: !useUrlInput ? "#22D3EE" : "#94A3B8",
                  cursor: "pointer",
                }}
              >
                Upload File
              </button>
              <button
                type="button"
                onClick={() => {
                  setUseUrlInput(true);
                  setImage(null);
                  setImagePreview(null);
                }}
                style={{
                  padding: "0.35rem 0.75rem",
                  borderRadius: "0.375rem",
                  fontSize: "0.85rem",
                  border: "1px solid",
                  borderColor: useUrlInput ? "#22D3EE" : "#334155",
                  background: useUrlInput ? "#0F172A" : "transparent",
                  color: useUrlInput ? "#22D3EE" : "#94A3B8",
                  cursor: "pointer",
                }}
              >
                Paste URL
              </button>
            </div>
            {useUrlInput ? (
              <>
                <input
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  required
                />
                {imageUrl && (
                  <div style={{ marginTop: "1rem" }}>
                    <p className="text-sm mb-2 text-[#94A3B8]">
                      Image preview:
                    </p>
                    <img
                      src={imageUrl}
                      alt="URL image preview"
                      style={{ maxWidth: "200px", borderRadius: "0.5rem" }}
                      className="border border-[#1E293B]"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                      onLoad={(e) => {
                        e.target.style.display = "block";
                      }}
                    />
                  </div>
                )}
              </>
            ) : (
              <>
                <input
                  type="file"
                  onChange={handleImageChange}
                  required={!useUrlInput}
                />
                {imagePreview && (
                  <div style={{ marginTop: "1rem" }}>
                    <p className="text-sm mb-2 text-[#94A3B8]">
                      Image preview:
                    </p>
                    <img
                      src={imagePreview}
                      alt="Selected project image preview"
                      style={{ maxWidth: "200px", borderRadius: "0.5rem" }}
                      className="border border-[#1E293B]"
                    />
                  </div>
                )}
              </>
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
