import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Navbar } from "@/components";

export default function EditAbout() {
  const router = useRouter();
  const { id } = router.query;
  const [about, setAbout] = useState({
    title: "",
    description: "",
    img_url: "",
  });
  const [image, setImage] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    if (id) {
      const fetchAbout = async () => {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/about/abouts/${id}`
          );
          setAbout(response.data);
        } catch (error) {
          console.error("Error fetching about data:", error);
        }
      };
      fetchAbout();
    }
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", about.title);
    formData.append("description", about.description);
    if (image) formData.append("file", image);

    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/about/abouts/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResponseMessage("About data updated successfully!");
    } catch (error) {
      setResponseMessage("Error updating data.");
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <h1 className="text-[#39459C] mb-4 bg-gray-100 opacity-1 py-6 font-bold text-2xl">
        Edit About Information
      </h1>
      <div className="flex flex-col justify-center items-center w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col bg-transparent">
            <label className="text-xs font-light tracking-wider">Title</label>
            <input
              type="text"
              className="bg-transparent border rounded px-2 py-1"
              value={about.title}
              onChange={(e) => setAbout({ ...about, title: e.target.value })}
              required
            />
          </div>

          <div className="flex flex-col bg-transparent">
            <label className="text-xs tracking-wide">Description</label>
            <textarea
              value={about.description}
              className="bg-transparent border rounded px-2 py-1"
              onChange={(e) =>
                setAbout({ ...about, description: e.target.value })
              }
              required
            />
          </div>

          <div className="flex flex-col bg-transparent">
            <label className="tracking-wide text-xs">Upload Image</label>
            <input
              type="file"
              className="bg-transparent border rounded px-2 py-1"
              onChange={handleImageChange}
            />
            {about.img_url && (
              <div>
                <img
                  src={about.img_url}
                  alt="About Image"
                  className="rounded"
                  width={100}
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#ffffff80] rounded py-2 font tracking-wider font-light hover:bg-[#ffffff90]"
          >
            SUBMIT
          </button>
        </form>

        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </>
  );
}
