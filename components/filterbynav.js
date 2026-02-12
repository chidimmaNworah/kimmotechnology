import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { IoArrowDown } from "react-icons/io5";

export default function FilterByNav() {
  const router = useRouter();

  const { query } = router;
  const currentFilter = query?.filter || "all";

  const isActive = (filter, path) =>
    currentFilter === filter || router.pathname === path;

  const clearFilter = () => {
    router.push({ pathname: "/careers" }, undefined, { shallow: true });
  };

  const filters = [
    { filter: null, path: "/careers", label: "ALL" },
    { filter: "today", label: "POSTED TODAY" },
    { filter: "yesterday", label: "POSTED YESTERDAY" },
    { filter: "this-week", label: "THIS WEEK" },
    { filter: "last-week", label: "LAST WEEK" },
  ];

  return (
    <div className="w-full bg-surface border-b border-border-subtle">
      <div className="flex items-center gap-1 px-4 py-2 overflow-x-auto scrollbar-thin scrollbar-thumb-border-subtle scrollbar-track-transparent">
        {query.filter && (
          <button
            onClick={clearFilter}
            className="flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold text-red-400 hover:bg-red-500/10 transition-colors"
          >
            ✕
          </button>
        )}
        {filters.map(({ filter, path, label }) => (
          <Link
            key={label}
            href={
              filter
                ? { pathname: "/careers", query: { filter } }
                : "/careers"
            }
            className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide whitespace-nowrap transition-all duration-200 ${
              isActive(filter, path)
                ? "text-cyan-accent bg-cyan-accent/10"
                : "text-txt-secondary hover:text-txt-primary hover:bg-card"
            }`}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/careers/jobs?filter-by-industry"
          className="flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide text-txt-secondary hover:text-txt-primary hover:bg-card transition-all whitespace-nowrap"
        >
          BY REGION <IoArrowDown size={12} />
        </Link>
        <Link
          href="/careers/jobs?filter-by-industry"
          className="flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide text-txt-secondary hover:text-txt-primary hover:bg-card transition-all whitespace-nowrap"
        >
          BY STATE <IoArrowDown size={12} />
        </Link>
        <Link
          href="/careers/jobs?filter-by-industry"
          className="flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide text-txt-secondary hover:text-txt-primary hover:bg-card transition-all whitespace-nowrap"
        >
          BY INDUSTRY <IoArrowDown size={12} />
        </Link>
      </div>
    </div>
  );
}
