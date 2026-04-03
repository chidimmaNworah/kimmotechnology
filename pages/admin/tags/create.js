import { useState } from "react";
import axios from "axios";
import styles from "../about/about.module.scss";
import AdminLayout from "@/components/AdminLayout/AdminLayout";
import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi";

export default function CreateTag() {
  const [name, setName] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const API_URL = `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);
      await axios.post(`${API_URL}/tag/tags/`, { name });
      setResponseMessage("Tag created successfully!");
      setName("");
    } catch (error) {
      const errMsg = error?.response?.data?.detail || "Error creating tag.";
      setResponseMessage(errMsg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AdminLayout>
      <div className={styles.about}>
        <Link
          href="/admin/tags/list"
          className="inline-flex items-center gap-1.5 text-sm text-[#64748B] hover:text-[#22D3EE] transition mb-4 font-['Outfit']"
        >
          <HiOutlineArrowLeft className="w-4 h-4" /> Back to Tags
        </Link>
        <h1>Add Tag</h1>
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
    </AdminLayout>
  );
}
