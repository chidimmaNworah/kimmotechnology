import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./project.module.scss";
import { Navbar } from "@/components";
import { useRouter } from "next/router";

export default function Projects() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [previewLink, setPreviewLink] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL;

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
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      setResponseMessage("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("github_link", githubLink);
    formData.append("preview_link", previewLink);
    formData.append("category_id", category);
    formData.append("file", image);

    try {
      const response = await axios.post(
        `${API_URL}/project/projects/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResponseMessage("Project data submitted successfully!");
      router.push("/admin");
    } catch (error) {
      setResponseMessage("Error submitting data.");
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.about}>
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
          </div>

          <button type="submit">Submit</button>
        </form>

        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </>
  );
}
