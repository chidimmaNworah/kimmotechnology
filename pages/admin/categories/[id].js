import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Navbar } from "@/components";

export default function EditCategory() {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const API_URL = `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}`;

  useEffect(() => {
    if (!id) return;

    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/category/categories/${id}`
        );
        setName(response.data.name);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchCategory();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${API_URL}/category/categories/${id}`, { name });
      setResponseMessage("Category updated successfully!");
    } catch (error) {
      console.error("Error updating category:", error);
      setResponseMessage("Error updating category.");
    }
  };

  return (
    <>
      <Navbar />
      <h1 className="text-[#39459C] mb-4 bg-gray-100 opacity-1 py-6 font-bold text-2xl text-center">
        Edit Category
      </h1>
      <div className="flex flex-col justify-center items-center w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col bg-transparent">
            <label className="text-xs font-light tracking-wider">Name</label>
            <input
              type="text"
              className="bg-transparent border rounded px-2 py-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#ffffff80] rounded py-2 tracking-wider font-light hover:bg-[#ffffff90]"
          >
            SUBMIT
          </button>
        </form>

        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </>
  );
}
