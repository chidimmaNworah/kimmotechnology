import Link from "next/link";
import React from "react";

export default function YouMayLike({ heading, related, careers }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2 mt-10">{heading}</h2>
      <ul>
        {careers?.length > 0 ? (
          careers.slice(10, 25).map((career) => (
            <li key={career.id} className="mb-2">
              <Link
                href={`/careers/${career.field[0]
                  .toLowerCase()
                  .replace(/\s+/g, "-")}/${
                  career.field[0].toLowerCase().endsWith("s")
                    ? career.field[0].toLowerCase().slice(0, -1) || "general"
                    : "general"
                }/${career.id}`}
                className="text-blue-600 hover:underline"
              >
                {career.title}
              </Link>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No related jobs found</p>
        )}
      </ul>
    </div>
  );
}
