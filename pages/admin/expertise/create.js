import { useState } from "react";
import axios from "axios";
import styles from "./about.module.scss";
import { Navbar } from "@/components";
import { useRouter } from "next/router";

export default function Expertise() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [responseMessage, setResponseMessage] = useState("");
  const router = useRouter();

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (images.length === 0) {
      setResponseMessage("Please select at least one image.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", title);
      formData.append("description", description);

      images.forEach((image) => {
        formData.append("images", image); // Attach images to formData
      });

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/expertise/expertise/`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setResponseMessage("Expertise data submitted successfully!");
      router.push("/admin");
    } catch (error) {
      setResponseMessage("Error submitting data.");
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.about}>
        <h1>Add Expertise</h1>
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
            <label>Upload Images</label>
            <input type="file" multiple onChange={handleImageChange} required />
          </div>

          {/* Display selected images */}
          <div>
            {images.length > 0 && (
              <ul>
                {images.map((img, index) => (
                  <li key={index}>{img.name}</li>
                ))}
              </ul>
            )}
          </div>

          <button type="submit">Submit</button>
        </form>

        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </>
  );
}
