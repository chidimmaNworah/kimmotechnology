import { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import styles from "./project.module.scss";
import AdminLayout from "@/components/AdminLayout/AdminLayout";
import Link from "next/link";
import { HiOutlineArrowLeft, HiX } from "react-icons/hi";
import "react-quill-new/dist/quill.snow.css";

// Dynamic import for QuillEditor to avoid SSR issues
const QuillEditor = dynamic(() => import("@/components/QuillEditor"), {
  ssr: false,
  loading: () => (
    <div className="h-48 bg-[#0f172a] rounded-lg border border-[#1e293b] animate-pulse" />
  ),
});

export default function EditProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [previewLink, setPreviewLink] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [existingImageUrl, setExistingImageUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [useUrlInput, setUseUrlInput] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { id } = router.query;

  const API_URL = process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL;
  const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const CLOUDINARY_UPLOAD_PRESET =
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  // Fetch categories
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
  }, [API_URL]);

  // Fetch existing project data
  useEffect(() => {
    const fetchProject = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/project/projects/${id}`);
        const project = response.data;

        setTitle(project.title || "");
        setDescription(project.description || "");
        setGithubLink(project.github_link || "");
        setPreviewLink(project.preview_link || "");
        setExistingImageUrl(project.img_url || "");

        // Set selected categories from project data
        if (project.categories && Array.isArray(project.categories)) {
          const categoryIds = project.categories.map((cat) => cat.id);
          setSelectedCategories(categoryIds);
        }
      } catch (error) {
        console.error("Error fetching project:", error);
        setResponseMessage("Error loading project data.");
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id, API_URL]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedCategories.length === 0) {
      setResponseMessage("Please select at least one category.");
      return;
    }

    try {
      setSubmitting(true);
      let img_url = existingImageUrl;

      // Only upload new image if one was selected
      if (useUrlInput && imageUrl.trim()) {
        img_url = imageUrl.trim();
      } else if (!useUrlInput && image) {
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

      // Get selected category names
      const categoryNames = selectedCategories
        .map((catId) => {
          const cat = categories.find((c) => String(c.id) === String(catId));
          return cat?.name;
        })
        .filter(Boolean);

      // Send JSON payload to the backend
      await axios.put(`${API_URL}/project/projects/${id}`, {
        title,
        description,
        github_link: githubLink || null,
        preview_link: previewLink || null,
        img_url,
        categories: categoryNames,
      });

      setResponseMessage("Project updated successfully!");
      setTimeout(() => {
        router.push("/admin/projects/list");
      }, 1500);
    } catch (error) {
      const errMsg =
        error?.response?.data?.error?.message ||
        error?.response?.data?.detail ||
        error?.message ||
        "Error updating project.";
      setResponseMessage(`Error: ${errMsg}`);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className={styles.about}>
          <p style={{ color: "#94a3b8" }}>Loading project...</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className={styles.about}>
        <Link
          href="/admin/projects/list"
          className="inline-flex items-center gap-1.5 text-sm text-[#64748B] hover:text-[#22D3EE] transition mb-4 font-['Outfit']"
        >
          <HiOutlineArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>
        <h1>Edit Project</h1>
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
            <QuillEditor
              value={description}
              onChange={setDescription}
              placeholder="Enter project description with rich formatting..."
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
            <label>Categories</label>
            <div
              onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
              style={{
                background: "rgba(15, 23, 42, 0.8)",
                border: "1px solid #1e293b",
                borderRadius: "8px",
                minHeight: "48px",
                padding: "0.5rem 0.75rem",
                cursor: "pointer",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              {selectedCategories.length > 0 ? (
                selectedCategories.map((catId) => {
                  const cat = categories.find(
                    (c) => String(c.id) === String(catId),
                  );
                  return (
                    <span
                      key={catId}
                      style={{
                        background: "rgba(34, 211, 238, 0.1)",
                        border: "1px solid rgba(34, 211, 238, 0.3)",
                        color: "#22d3ee",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "9999px",
                        fontSize: "0.75rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                      }}
                    >
                      {cat?.name}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCategories((prev) =>
                            prev.filter((id) => id !== catId),
                          );
                        }}
                        style={{
                          background: "transparent",
                          border: "none",
                          color: "#22d3ee",
                          cursor: "pointer",
                          padding: 0,
                          display: "flex",
                        }}
                      >
                        <HiX size={14} />
                      </button>
                    </span>
                  );
                })
              ) : (
                <span style={{ color: "#64748b", fontSize: "0.875rem" }}>
                  Click to select categories...
                </span>
              )}
            </div>
            {isCategoryDropdownOpen && (
              <div
                style={{
                  background: "#0f172a",
                  border: "1px solid #1e293b",
                  borderRadius: "8px",
                  marginTop: "0.5rem",
                  maxHeight: "200px",
                  overflowY: "auto",
                }}
              >
                {categories.map((cat) => (
                  <div
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategories((prev) =>
                        prev.includes(cat.id)
                          ? prev.filter((id) => id !== cat.id)
                          : [...prev, cat.id],
                      );
                    }}
                    style={{
                      padding: "0.75rem 1rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      cursor: "pointer",
                      borderBottom: "1px solid #1e293b",
                      background: selectedCategories.includes(cat.id)
                        ? "rgba(34, 211, 238, 0.1)"
                        : "transparent",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat.id)}
                      onChange={() => {}}
                      style={{
                        width: "16px",
                        height: "16px",
                        accentColor: "#22d3ee",
                      }}
                    />
                    <span style={{ color: "#f1f5f9", fontSize: "0.875rem" }}>
                      {cat.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <label>Image</label>
            {existingImageUrl && (
              <div style={{ marginBottom: "1rem" }}>
                <p className="text-sm mb-2 text-[#94A3B8]">Current image:</p>
                <img
                  src={existingImageUrl}
                  alt="Current project image"
                  style={{ maxWidth: "200px", borderRadius: "0.5rem" }}
                  className="border border-[#1E293B]"
                />
              </div>
            )}
            <p className="text-xs text-[#64748b] mb-2">
              Leave empty to keep current image, or choose a new one:
            </p>
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
                />
                {imageUrl && (
                  <div style={{ marginTop: "1rem" }}>
                    <p className="text-sm mb-2 text-[#94A3B8]">
                      New image preview:
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
                <input type="file" onChange={handleImageChange} />
                {imagePreview && (
                  <div style={{ marginTop: "1rem" }}>
                    <p className="text-sm mb-2 text-[#94A3B8]">
                      New image preview:
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
            {submitting ? "Updating..." : "Update Project"}
          </button>
        </form>

        {responseMessage && (
          <p
            style={{
              color: responseMessage.includes("Error") ? "#ef4444" : "#22c55e",
              marginTop: "1rem",
            }}
          >
            {responseMessage}
          </p>
        )}
      </div>
    </AdminLayout>
  );
}
