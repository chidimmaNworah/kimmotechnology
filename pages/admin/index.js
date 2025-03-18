import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoIosEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { JobNavbar, Navbar } from "@/components";
import useAuth from "@/middleware/auth";
import AboutsList from "./about/list";
import ProjectsList from "./projects/list";

export default function Dashboard() {
  const loading = useAuth();
  const router = useRouter();

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      {/* <JobNavbar /> */}
      <h1 className="text-[#39459C] mb-4 bg-gray-100 opacity-1 text-center py-6 font-bold text-2xl">
        WELCOME TO THE ADMIN DASHBOARD
      </h1>

      <AboutsList />
      <ProjectsList />
    </>
  );
}
