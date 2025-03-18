import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoIosEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Navbar } from "@/components";
import useAuth from "@/middleware/auth";
import Link from "next/link";

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const loading = useAuth();
  const router = useRouter();

  const API_URL = `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}`;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_URL}/project/projects/`);
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching abouts:", error);
      }
    };
    if (!loading) fetchProjects();
  }, [loading]);

  const handleEdit = (id) => {
    router.push(`/admin/project/${id}`); // Navigate to the edit page dynamically
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this?"
    );
    if (!confirmDelete) return;

    try {
      console.log("Deleting project with ID:", id);

      await axios.delete(
        `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/project/projects/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setProjects((prev) => prev.filter((about) => about.id !== id)); // Remove from UI
    } catch (error) {
      console.error("Error deleting about:", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="p-4">
        <h2 className="text-center text-xl mb-6 underline">PROJECTS</h2>
        <div>
          <ul className="mb-4 text-center">
            <li>
              <Link href="/admin/projects/create">
                <button>Create New Project</button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap justify-around">
          {projects.map((project, i) => (
            <div className="w-40 mb-4">
              <div key={i} className="truncate">
                <div className="w-40 w-full">
                  <img
                    src={project.img_url}
                    alt=""
                    className="w-full mb-2 rounded"
                  />
                </div>
                <p className="text-sm mb-4">
                  Title
                  <br />
                  {project.title}
                </p>
                <span className="">
                  Description:
                  <br />
                  {project.description}
                </span>
                <div className="flex justify-start gap-10 mt-4">
                  <IoIosEye className="bg-gray-200 text-black text-2xl h-[2rem] w-full rounded-full p-1" />
                  <MdDelete
                    className="bg-gray-200 text-red-700 text-2xl h-[2rem] w-full rounded-full p-1"
                    onClick={() => handleDelete(project.id)}
                  />
                  <CiEdit
                    className="bg-gray-200 text-green-800 text-2xl h-[2rem] w-full rounded-full p-1"
                    onClick={() => handleEdit(project.id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
