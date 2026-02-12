import React from "react";

export default function CategoriesList({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div>
      <h2 className="font-display text-sm font-bold text-txt-primary uppercase tracking-wide mb-3">Categories</h2>
      <ul className="space-y-0.5">
        {selectedCategory && (
          <li
            className="px-3 py-2 rounded-lg cursor-pointer text-red-400 text-xs font-semibold hover:bg-red-500/10 transition-colors"
            onClick={() => setSelectedCategory(null)}
          >
            ✕ Clear filter
          </li>
        )}
        {categories?.length > 0 ? (
          categories.map((category, index) => (
            <li
              key={index}
              className={`px-3 py-2 rounded-lg cursor-pointer text-sm transition-all duration-200 ${
                selectedCategory?.id === category.id
                  ? "text-cyan-accent bg-cyan-accent/10 font-semibold"
                  : "text-txt-secondary hover:text-txt-primary hover:bg-surface"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.name || "Uncategorized"}
            </li>
          ))
        ) : (
          <p className="text-xs text-txt-muted px-3 py-2">No categories available</p>
        )}
      </ul>
    </div>
  );
}
