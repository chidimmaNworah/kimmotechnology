import React from "react";
import { Navbar } from "@/components";
import useAuth from "@/middleware/auth";
import AboutsList from "./about/list";
import ProjectsList from "./projects/list";
import AdminNavbar from "@/components/AdminNavbar/AdminNavbar";

export default function Dashboard() {
  const loading = useAuth();

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-sm text-[#64748B] bg-[#060B18]">
        Loading admin dashboard...
      </div>
    );

  return (
    <>
      <Navbar />
      <AdminNavbar />
      <main className="min-h-screen bg-[#060B18] py-8 px-4">
        <section className="max-w-6xl mx-auto mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#F1F5F9] mb-2 font-['Syne']">
            Admin Dashboard
          </h1>
          <p className="text-sm text-[#94A3B8] max-w-2xl font-['Outfit']">
            Manage content, projects, expertise, and jobs from a single workspace.
          </p>
        </section>

        <section className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          <div className="bg-[#0F172A]/80 rounded-2xl border border-[#1E293B]/60 p-4 backdrop-blur-sm">
            <h2 className="text-sm font-semibold text-[#22D3EE] mb-3 font-['Syne'] tracking-wide uppercase">
              About Highlights
            </h2>
            <AboutsList />
          </div>

          <div className="bg-[#0F172A]/80 rounded-2xl border border-[#1E293B]/60 p-4 backdrop-blur-sm">
            <h2 className="text-sm font-semibold text-[#22D3EE] mb-3 font-['Syne'] tracking-wide uppercase">
              Recent Projects
            </h2>
            <ProjectsList />
          </div>
        </section>
      </main>
    </>
  );
}
