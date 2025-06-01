"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

const pythonTutorials = [
  {
    title: "Introduction to Python",
    content:
      "Python is a popular, high-level, interpreted programming language known for its simplicity and readability.",
    examples: [
      {
        code: "print('Hello, World!')",
        description: "Prints 'Hello, World!' to the console.",
      },
    ],
  },
  {
    title: "Variables and Data Types",
    content:
      "Variables in Python do not need explicit declaration to reserve memory space. The declaration happens automatically when you assign a value to a variable.",
    examples: [
      {
        code: "x = 5  # Integer\ny = 3.14  # Float\nname = 'Alice'  # String\nis_active = True  # Boolean",
        description: "Examples of different data types in Python.",
      },
    ],
  },
  {
    title: "Control Flow (if, for, while)",
    content:
      "Python uses indentation to define blocks of code. Control flow statements like if, for, and while are used to control the execution of code.",
    examples: [
      {
        code: "# If statement\nx = 10\nif x > 5:\n    print('x is greater than 5')\n\n# For loop\nfor i in range(3):\n    print(i)\n\n# While loop\ncount = 0\nwhile count < 3:\n    print(count)\n    count += 1",
        description: "Basic control flow examples in Python.",
      },
    ],
  },
];

export default function PythonTutorial() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen mt-16 bg-white pt-16 pb-12 relative">
      <div className="absolute top-5 left-4 md:left-8">
        <Link
          href="/dataanalytics"
          className="inline-flex items-center px-4 py-2 text-[#A435F0] hover:text-white border-2 border-[#A435F0] hover:bg-[#A435F0] rounded-sm transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:translate-x-[-2px] transition-transform" />
          Back to Modules
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#000000] mb-6">Python Tutorial</h1>
        <p className="text-gray-600 text-lg mb-8">
          Learn Python fundamentals with hands-on examples and clear explanations.
        </p>

        {/* Video Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">Video Tutorial</h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/gPvYox9JIYI?si=IBmryAH20kaJ_4zI"
              title="Python Tutorial for Beginners"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-sm"
            ></iframe>
          </div>
        </div>

        <div className="space-y-8">
          {pythonTutorials.map((tutorial, index) => (
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