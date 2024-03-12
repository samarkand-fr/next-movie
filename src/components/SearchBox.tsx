"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// SearchBox component for handling user search input
export default function SearchBox() {
  // State to manage the search input value
  const [search, setSearch] = useState("");
  // Next.js router for handling navigation
  const router = useRouter();

  // Function to handle form submission
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Navigate to the search results page with the entered search term
    router.push(`/search/${search}`);
  };
  
  // Render the search input form
  return (
    <form
      className="flex justify-between px-5 max-w-6xl mx-auto"
      onSubmit={handleSubmit}
    >
      {/* Search input field */}
      <input
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-md placeholder-gray-600 dark:placeholder-gray-300 outline-none  bg-transparent flex-1 focus:border-b-2 focus:border-amber-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* Submit button */}
      <button
        className="text-amber-600 disabled:text-gray-600 dark:disabled:text-gray-300 " 
        disabled={search === ""}
      >
        Search
      </button>
    </form>
  );
}
