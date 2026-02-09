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
      <div className="min-h-screen flex items-center justify-center text-sm text-slate-600">
        Loading admin dashboard...
      </div>
    );

  return (
    <>
      <Navbar />
      <AdminNavbar />
      <main className="min-h-screen bg-slate-50 py-8 px-4">
        <section className="max-w-6xl mx-auto mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
            Admin dashboard
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl">
            Manage content, projects, expertise, and jobs from a single, clean
            workspace.
          </p>
        </section>

        <section className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4">
            <h2 className="text-sm font-semibold text-slate-900 mb-3">
              About highlights
            </h2>
            <AboutsList />
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4">
            <h2 className="text-sm font-semibold text-slate-900 mb-3">
              Recent projects
            </h2>
            <ProjectsList />
          </div>
        </section>
      </main>
    </>
  );
}
