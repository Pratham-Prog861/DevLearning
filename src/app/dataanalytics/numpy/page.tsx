"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

const numpyTutorials = [
  {
    title: "Introduction to NumPy",
    content:
      "NumPy is the fundamental package for scientific computing with Python. It provides support for large, multi-dimensional arrays and matrices, along with a collection of mathematical functions to operate on them.",
    examples: [
      {
        code: `import numpy as np\narr = np.array([1, 2, 3, 4])\nprint(arr)`,
        description: "Create a simple NumPy array and print it.",
      },
    ],
  },
  {
    title: "Array Operations",
    content:
      "NumPy allows you to perform element-wise operations on arrays, making mathematical computations efficient and concise.",
    examples: [
      {
        code: `import numpy as np\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nprint(a + b)  # [5 7 9]\nprint(a * b)  # [ 4 10 18]`,
        description: "Element-wise addition and multiplication of NumPy arrays.",
      },
    ],
  },
  {
    title: "Array Slicing and Indexing",
    content:
      "NumPy arrays can be sliced and indexed in powerful ways, similar to Python lists but with more features.",
    examples: [
      {
        code: `import numpy as np\narr = np.array([10, 20, 30, 40, 50])\nprint(arr[1:4])  # [20 30 40]` ,
        description: "Slice a NumPy array to get a subarray.",
      },
    ],
  },
];

export default function NumpyTutorial() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen mt-12 bg-white pt-16 pb-12 relative">
      <div className="absolute top-8 left-4 md:left-8">
        <Link
          href="/dataanalytics"
          className="inline-flex items-center px-4 py-2 text-[#A435F0] hover:text-white border-2 border-[#A435F0] hover:bg-[#A435F0] rounded-sm transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:translate-x-[-2px] transition-transform" />
          Back to Modules
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#000000] mb-6">NumPy Tutorial</h1>
        <p className="text-gray-600 text-lg mb-8">
          Learn NumPy essentials for data analytics and scientific computing with hands-on examples.
        </p>

        {/* Video Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">Video Tutorial</h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/x7ULDYs4X84?si=cG07RICu1DBWQ4Gw"
              title="NumPy Tutorial for Beginners"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-sm"
            ></iframe>
          </div>
        </div>

        <div className="space-y-8">
          {numpyTutorials.map((tutorial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-sm p-6 hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-[#000000] mb-4">
                {tutorial.title}
              </h2>
              <p className="text-gray-600 mb-6">{tutorial.content}</p>

              <div className="bg-gray-50 rounded-sm p-4">
                <h3 className="text-lg font-medium text-[#000000] mb-3">Examples:</h3>
                {tutorial.examples.map((example, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="relative">
                      <pre className="bg-gray-100 p-3 rounded-sm overflow-x-auto">
                        <code className="text-[#A435F0]">{example.code}</code>
                      </pre>
                      <button
                        onClick={() => copyToClipboard(example.code, idx)}
                        className="absolute top-2 right-2 p-2 rounded-sm bg-gray-200/50 backdrop-blur-sm text-gray-600 hover:bg-[#A435F0]/10 hover:text-[#A435F0] transition-all duration-300 transform active:scale-95"
                        title="Copy to clipboard"
                      >
                        {copiedIndex === idx ? (
                          <Check size={16} className="text-green-500 animate-in fade-in duration-300" />
                        ) : (
                          <Copy size={16} />
                        )}
                      </button>
                    </div>
                    <p className="text-gray-600 text-sm whitespace-pre-line">
                      {example.description}
                    </p>
                  </div>
                ))}
              </div>

              <button className="mt-6 px-4 py-2 border-2 border-[#A435F0] text-[#A435F0] hover:bg-[#A435F0] hover:text-white transition-colors duration-300 rounded-sm">
                Try it Yourself
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}