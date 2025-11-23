"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { searchContent, SearchItem } from "@/lib/searchIndex";

const SearchContent = () => {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<(SearchItem & { score: number })[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) {
      setQuery(q);
      performSearch(q);
    }
  }, [searchParams]);

  const performSearch = (searchQuery: string) => {
    setIsLoading(true);
    setTimeout(() => {
      const searchResults = searchContent(searchQuery);
      setResults(searchResults);
      setIsLoading(false);
    }, 100);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      performSearch(query);
      window.history.pushState({}, "", `/search?q=${encodeURIComponent(query)}`);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Frontend Development": "bg-blue-100 text-blue-700 border-blue-200",
      "Backend Development": "bg-green-100 text-green-700 border-green-200",
      "DSA": "bg-purple-100 text-purple-700 border-purple-200",
      "Data Analytics": "bg-orange-100 text-orange-700 border-orange-200",
      "UI/UX": "bg-pink-100 text-pink-700 border-pink-200",
      "Tools": "bg-gray-100 text-gray-700 border-gray-200",
      "Resources": "bg-yellow-100 text-yellow-700 border-yellow-200",
      "Career": "bg-indigo-100 text-indigo-700 border-indigo-200",
      "DevOps": "bg-blue-100 text-blue-700 border-blue-200",
      "Mobile App": "bg-green-100 text-green-700 border-green-200",
      "AI & ML": "bg-purple-100 text-purple-700 border-purple-200",
    };
    return colors[category] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Search Tutorials</h1>
          <p className="text-gray-600">
            Find the perfect tutorial to boost your development skills
          </p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for HTML, CSS, JavaScript, React, Python..."
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A435F0] focus:border-transparent text-gray-900 placeholder-gray-400"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-[#A435F0] text-white rounded-lg hover:bg-[#8c2ad1] transition-colors"
            >
              Search
            </button>
          </div>
        </form>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-[#A435F0]"></div>
            <p className="mt-4 text-gray-600">Searching...</p>
          </div>
        )}

        {/* Results */}
        {!isLoading && query && (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {results.length > 0
                  ? `Found ${results.length} result${results.length !== 1 ? "s" : ""} for "${query}"`
                  : `No results found for "${query}"`}
              </h2>
            </div>

            {results.length > 0 ? (
              <div className="space-y-4">
                {results.map((result) => (
                  <Link
                    key={result.id}
                    href={result.path}
                    className="block bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#A435F0] hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#A435F0] transition-colors">
                            {result.title}
                          </h3>
                          <ArrowRight className="text-gray-400 group-hover:text-[#A435F0] group-hover:translate-x-1 transition-all" size={20} />
                        </div>
                        <p className="text-gray-600 mb-3">{result.description}</p>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm px-3 py-1 rounded-full border ${getCategoryColor(result.category)}`}>
                            {result.category}
                          </span>
                          {result.keywords.slice(0, 3).map((keyword, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-white border-2 border-gray-200 rounded-xl p-12 text-center">
                <Search className="mx-auto mb-4 text-gray-400" size={48} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600 mb-6">
                  Try searching with different keywords or browse our categories
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["HTML", "CSS", "JavaScript", "React", "Python", "Node.js"].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => {
                        setQuery(suggestion);
                        performSearch(suggestion);
                      }}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-[#A435F0] hover:text-white transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Popular Searches */}
        {!query && !isLoading && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Popular Searches</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { term: "HTML", category: "Frontend" },
                { term: "React", category: "Frontend" },
                { term: "Python", category: "Data Analytics" },
                { term: "Node.js", category: "Backend" },
                { term: "JavaScript", category: "Frontend" },
                { term: "MongoDB", category: "Backend" },
              ].map((item) => (
                <button
                  key={item.term}
                  onClick={() => {
                    setQuery(item.term);
                    performSearch(item.term);
                  }}
                  className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-[#A435F0] hover:shadow-md transition-all text-left group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-[#A435F0]">
                        {item.term}
                      </h3>
                      <p className="text-sm text-gray-600">{item.category}</p>
                    </div>
                    <ArrowRight className="text-gray-400 group-hover:text-[#A435F0] group-hover:translate-x-1 transition-all" size={20} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const SearchPage = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-[#A435F0]"></div>
            <p className="mt-4 text-gray-600">Loading search...</p>
          </div>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
};

export default SearchPage;
