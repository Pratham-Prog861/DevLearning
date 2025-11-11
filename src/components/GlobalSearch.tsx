"use client";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import SearchBar from "./SearchBar";

const GlobalSearch = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+K or Cmd+K to open search
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      // Escape to close
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-start justify-center pt-20 px-4"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Search</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={20} className="text-gray-600" />
            </button>
          </div>
          <SearchBar onClose={() => setIsOpen(false)} />
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Press ESC to close</span>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-gray-100 rounded border border-gray-300">↑</kbd>
                <kbd className="px-2 py-1 bg-gray-100 rounded border border-gray-300">↓</kbd>
                <span>to navigate</span>
                <kbd className="px-2 py-1 bg-gray-100 rounded border border-gray-300">↵</kbd>
                <span>to select</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalSearch;
