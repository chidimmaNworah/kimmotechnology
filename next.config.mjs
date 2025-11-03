/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    NEXT_PUBLIC_PYTHON_BACKEND_URL: process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL,
    NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },

  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
