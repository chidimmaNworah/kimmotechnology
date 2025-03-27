import React from "react";

export default function CategoriesList({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div>
      <h2 className="text-lg font-semibold">Categories</h2>
      <ul className="mt-2 text-gray-600">
        {/* Show "Clear Category" only if a category is selected */}
        {selectedCategory && (
          <li
            className="py-1 border-b cursor-pointer text-red-600 font-semibold"
            onClick={() => setSelectedCategory(null)} // Clear category
          >
            ❌ Clear Category
          </li>
        )}

        {/* Render categories */}
        {categories?.length > 0 ? (
          categories.map((category, index) => (
            <li
              key={index}
              className={`py-1 border-b cursor-pointer ${
                selectedCategory?.id === category.id
                  ? "font-bold text-blue-600"
                  : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.name || "Uncategorized"}
            </li>
          ))
        ) : (
          <p>No categories available</p>
        )}
      </ul>
    </div>
  );
}
