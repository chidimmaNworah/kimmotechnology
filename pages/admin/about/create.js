import { useState } from "react";
import axios from "axios";
import styles from "./about.module.scss";
import { Navbar } from "@/components";

export default function Abouts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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

    if (!image) {
      setResponseMessage("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", image);

    try {
      setSubmitting(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/about/abouts/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResponseMessage("About data submitted successfully!");
    } catch (error) {
      setResponseMessage("Error submitting data.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.about}>
        <h1>Add About Data</h1>
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
            <label>Upload Image</label>
            <input type="file" onChange={handleImageChange} required />
          </div>

          <button type="submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </>
  );
}
