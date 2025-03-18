import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "./jobs.module.scss";
import { Navbar } from "@/components";

export default function Projects() {
  const [project, setProject] = useState({
    title: "",
    description: "",
    githubLink: "",
    previewLink: "",
    category: "",
  });
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [responseMessage, setResponseMessage] = useState("");

  const router = useRouter();
  const { id } = router.query;

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
    formData.append("title", project.title);
    formData.append("description", project.description);
    formData.append("github_link", project.githubLink);
    formData.append("preview_link", project.previewLink);
    formData.append("category_id", project.category);
    formData.append("file", image);

    try {
      const response = await axios.put(
        `${API_URL}/project/projects/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResponseMessage("Project data submitted successfully!");
    } catch (error) {
      setResponseMessage("Error submitting data.");
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.about}>
        <h1>Edit Project Data</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <input
              type="text"
              value={project.title}
              onChange={(e) => setProject(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Description</label>
            <textarea
              value={project.description}
              onChange={(e) => setProject(e.target.value)}
              required
            />
          </div>

          <div>
            <label>GitHub Link</label>
            <input
              type="url"
              value={project.githubLink}
              onChange={(e) => setProject(e.target.value)}
            />
          </div>

          <div>
            <label>Preview Link</label>
            <input
              type="url"
              value={project.previewLink}
              onChange={(e) => setProject(e.target.value)}
            />
          </div>

          <div>
            <label>Category</label>
            <select
              value={project.category}
              onChange={(e) => setProject(e.target.value)}
              required
            >
              <option value="">{project.category}</option>
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
