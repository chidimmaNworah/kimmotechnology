import React, { useEffect, useState } from "react";
import styles from "./JobNavbar.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import { HiMenuAlt4, HiX } from "react-icons/hi";

export default function JobNavbar({ activeField, setActiveField }) {
  const [toggle, setToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();

  const navItems = [
    { field: null, label: "HOME" },
    { field: "jobs", label: "JOBS" },
    { field: "workshops", label: "WORKSHOPS" },
    { field: "scholarships", label: "SCHOLARSHIPS" },
    { field: "grants", label: "GRANTS" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (field) => {
    if (setActiveField) setActiveField(field);
    setToggle(false);
  };

  return (
    <nav
      className={`w-full flex justify-between items-center px-6 py-3 z-30 transition-all duration-300 ${
        isSticky
          ? "fixed top-0 left-0 bg-deep/80 backdrop-blur-xl border-b border-border-subtle shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "relative bg-deep border-b border-border-subtle"
      }`}
    >
      <Link href="/" className="flex items-center gap-2 group">
        <img
          src="/assets/Kimmotech_Logo.png"
          alt="Kimmotech-logo"
          className="h-5 brightness-200"
        />
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-1">
        {navItems.map(({ field, label }) => (
          <li key={label}>
            <button
              onClick={() => handleClick(field)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide transition-all duration-200 ${
                activeField === field
                  ? "text-cyan-accent bg-cyan-accent/10"
                  : "text-txt-secondary hover:text-txt-primary hover:bg-surface"
              }`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile toggle */}
      <div className="md:hidden">
        {!toggle ? (
          <button
            onClick={() => setToggle(true)}
            className="w-9 h-9 rounded-lg bg-card border border-border-subtle flex items-center justify-center text-txt-primary"
          >
            <HiMenuAlt4 size={18} />
          </button>
        ) : (
          <div className="fixed inset-0 z-50 bg-deep/95 backdrop-blur-xl flex flex-col p-6">
            <button
              onClick={() => setToggle(false)}
              className="self-end w-9 h-9 rounded-lg bg-card border border-border-subtle flex items-center justify-center text-txt-primary mb-8"
            >
              <HiX size={18} />
            </button>
            <ul className="flex flex-col gap-2">
              {navItems.map(({ field, label }) => (
                <li key={label}>
                  <button
                    onClick={() => handleClick(field)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wide transition-all ${
                      activeField === field
                        ? "text-cyan-accent bg-cyan-accent/10 border border-cyan-accent/20"
                        : "text-txt-secondary hover:text-txt-primary hover:bg-surface border border-transparent"
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
