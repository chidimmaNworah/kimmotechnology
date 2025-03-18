import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const protectedRoutes = [
  "/dashboard",
  "/admin",
  "/admin/*",
  "/profile",
  "/admin/projects",
]; // List of authenticated routes

const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL;

  useEffect(() => {
    if (!protectedRoutes.includes(router.pathname)) {
      setLoading(false);
      return;
    }

    const verifyToken = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/");
        return;
      }

      try {
        const response = await axios.get(
          `${API_URL}/auth/verify-token/${token}`
        );
        if (response.status !== 200) {
          throw new Error("Token verification failed");
        }
      } catch (error) {
        localStorage.removeItem("token");
        router.push("/");
        return;
      }

      setLoading(false);
    };

    verifyToken();
  }, [router]);

  return loading;
};

export default useAuth;
