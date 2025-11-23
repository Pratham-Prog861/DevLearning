"use client";
import React, { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { searchContent, SearchItem } from "@/lib/searchIndex";

interface SearchBarProps {
  isMobile?: boolean;
  onClose?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ isMobile = false, onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<(SearchItem & { score: number })[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (query.trim().length > 0) {
      const searchResults = searchContent(query);
      setResults(searchResults);
      setIsOpen(true);
      setSelectedIndex(0);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case "Enter":
        e.preventDefault();
        if (results[selectedIndex]) {
          window.location.href = results[selectedIndex].path;
        }
        break;
      case "Escape":
        setIsOpen(false);
        setQuery("");
        break;
    }
  };

  const handleClear = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const handleResultClick = () => {
    setIsOpen(false);
    setQuery("");
    if (onClose) onClose();
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Frontend Development": "bg-blue-100 text-blue-700",
      "Backend Development": "bg-green-100 text-green-700",
      "DSA": "bg-purple-100 text-purple-700",
      "Data Analytics": "bg-orange-100 text-orange-700",
      "UI/UX": "bg-pink-100 text-pink-700",
      "Tools": "bg-gray-100 text-gray-700",
      "Resources": "bg-yellow-100 text-yellow-700",
      "Career": "bg-indigo-100 text-indigo-700",
      "DevOps": "bg-blue-100 text-blue-700",
      "AI & ML": "bg-blue-100 text-blue-700",
      "Mobile App Development": "bg-blue-100 text-blue-700",
    };
    return colors[category] || "bg-gray-100 text-gray-700";
  };

  return (
    <div ref={searchRef} className={`relative ${isMobile ? "w-full" : "w-full max-w-md"}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.trim().length > 0 && setIsOpen(true)}
          placeholder="Search tutorials... (e.g., HTML, React)"
          className="w-full pl-10 pr-24 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A435F0] focus:border-transparent text-gray-900 placeholder-gray-500"
        />
        {!isMobile && !query && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1 text-xs text-gray-400">
            <kbd className="px-1.5 py-0.5 bg-gray-100 rounded border border-gray-300">Ctrl</kbd>
            <span>+</span>
            <kbd className="px-1.5 py-0.5 bg-gray-100 rounded border border-gray-300">K</kbd>
          </div>
        )}
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-xl max-h-96 overflow-y-auto z-50">
          <div className="p-2">
            <div className="text-xs text-gray-500 px-3 py-2">
              Found {results.length} result{results.length !== 1 ? "s" : ""}
            </div>
            {results.map((result, index) => (
              <Link
                key={result.id}
                href={result.path}
                onClick={handleResultClick}
                className={`block px-3 py-3 rounded-lg transition-colors ${
                  index === selectedIndex
                    ? "bg-[#A435F0]/10 border border-[#A435F0]"
                    : "hover:bg-gray-50 border border-transparent"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 truncate">
                      {result.title}
                    </div>
                    <div className="text-sm text-gray-600 line-clamp-2 mt-1">
                      {result.description}
                    </div>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${getCategoryColor(
                      result.category
                    )}`}
                  >
                    {result.category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {isOpen && query.trim().length > 0 && results.length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-xl p-4 z-50">
          <div className="text-center text-gray-500">
            <Search className="mx-auto mb-2 text-gray-400" size={24} />
            <p className="text-sm">No results found for &quot;{query}&quot;</p>
            <p className="text-xs mt-1">Try searching for HTML, CSS, JavaScript, React, Python, etc.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
