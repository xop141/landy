"use client";
import React, { useState, useMemo, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCafe } from "@/context/CafeContext";

const SearchBar = () => {
  const router = useRouter();
  const { cafes } = useCafe();
  const [query, setQuery] = useState("");
  const containerRef = useRef(null);

  const filteredCafes = useMemo(() => {
    if (!query) return [];
    return cafes.filter((cafe) =>
      cafe.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, cafes]);

  const jump = (id) => {
    router.push(`/pcs/${id}`);
    setQuery("");
  };

  // Optional: close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="w-full flex flex-col items-center relative">
      {/* Search input */}
      <div className="flex items-center w-full px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-md gap-2">
  <Search className="text-gray-300 flex-shrink-0" />
  <input
    type="text"
    placeholder="Search cafes..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    className="bg-transparent outline-none text-white placeholder-gray-300 w-full pl-1"
  />
</div>


      {/* Dropdown results */}
      {query && (
        <div className="absolute top-full left-0 mt-2 w-full max-w-md bg-white rounded-xl shadow-xl z-50 overflow-y-auto max-h-60">
          {filteredCafes.length === 0 ? (
            <p className="px-3 py-2 text-gray-400 text-sm">No results found</p>
          ) : (
            filteredCafes.map((cafe) => (
              <div
                key={cafe.id}
                className="px-3 py-2 hover:bg-white/20 cursor-pointer transition bg-white/30 text-black"
                onClick={() => jump(cafe.id)}
              >
                {cafe.name}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
