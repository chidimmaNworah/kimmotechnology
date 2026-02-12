import Link from "next/link";
import React from "react";

export default function YouMayLike({ heading, related, careers }) {
  return (
    <div className="mt-8">
      <h2 className="font-display text-sm font-bold text-txt-primary uppercase tracking-wide mb-3">{heading}</h2>
      <ul className="space-y-1">
        {careers?.length > 0 ? (
          careers.slice(10, 25).map((career) => (
            <li key={career.id}>
              <Link
                href={`/careers/${career.field[0]
                  .toLowerCase()
                  .replace(/\s+/g, "-")}/${
                  career.field[0].toLowerCase().endsWith("s")
                    ? career.field[0].toLowerCase().slice(0, -1) || "general"
                    : "general"
                }/${career.id}`}
                className="block px-3 py-2 rounded-lg text-sm text-txt-secondary hover:text-cyan-accent hover:bg-surface transition-colors line-clamp-1"
              >
                {career.title}
              </Link>
            </li>
          ))
        ) : (
          <p className="text-xs text-txt-muted px-3 py-2">No related jobs found</p>
        )}
      </ul>
    </div>
  );
}
