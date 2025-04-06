import axios from "axios";

const ABOUT_API_URL = `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/about/abouts/`;
const EXPERTISE_API_URL = `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/expertise/expertise/`;
const PROJECTS_API_URL = `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}/project/projects/`;

export const fetchAbouts = async () => {
  try {
    const response = await axios.get(ABOUT_API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching abouts:", error);
    return null;
  }
};

export const fetchExpertise = async () => {
  try {
    const response = await axios.get(EXPERTISE_API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching expertise:", error);
    return [];
  }
};

export const fetchProjects = async () => {
  try {
    const response = await axios.get(PROJECTS_API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};
