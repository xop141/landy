"use client";
import React from "react";
import SearchBar from "../ui/SearchBar";

const Header = () => {
  return (
    <header className="w-full flex items-center gap-4 sticky top-0 backdrop-blur-xl z-50">
      {/* Logo */}
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-lg font-bold text-gray-900 shadow-md flex-shrink-0"></div>
      {/* Search Bar */}
      <div className="flex-1">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
