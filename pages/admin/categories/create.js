import { useState } from "react";
import axios from "axios";
import { Navbar } from "@/components";
import styles from "../about/about.module.scss";

export default function CreateCategory() {
  const [name, setName] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const API_URL = `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);
      await axios.post(`${API_URL}/category/categories/`, { name });
      setResponseMessage("Category created successfully!");
      setName("");
    } catch (error) {
      console.error("Error creating category:", error);
      setResponseMessage("Error creating category.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.about}>
        <h1>Add Category</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
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
