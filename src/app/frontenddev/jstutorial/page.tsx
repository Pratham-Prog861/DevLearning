"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

const JSTutorial = () => {
  const tutorials = [
    {
      title: "Introduction to JavaScript",
      content:
        "JavaScript is a versatile programming language that enables interactive and dynamic web content. It's essential for modern web development.",
      examples: [
        {
          code: `// Variables and Data Types
let name = "John";
const age = 25;
var isStudent = true;

// Basic Operations
console.log("Hello, " + name);
console.log(\`Age: \${age}\`);`,
          description: "Basic JavaScript syntax and string operations",
        },
      ],
    },
    {
      title: "Functions and Control Flow",
      content:
        "Functions are reusable blocks of code, and control flow determines how your program executes.",
      examples: [
        {
          code: `// Function Declaration
function greet(name) {
  return "Hello, " + name;
}

// Arrow Function
const multiply = (a, b) => a * b;

// Conditional Statements
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}`,
          description: "Functions, arrow syntax, and conditional statements",
        },
      ],
    },
    {
      title: "Arrays and Objects",
      content:
        "Arrays and objects are fundamental data structures in JavaScript for organizing and managing data.",
      examples: [
        {
          code: `// Arrays
const fruits = ["apple", "banana", "orange"];
fruits.push("grape");
fruits.map(fruit => console.log(fruit));

// Objects
const person = {
  name: "John",
  age: 25,
  hobbies: ["reading", "gaming"],
  greet() {
    console.log("Hello!");
  }
};`,
          description: "Working with arrays and objects in JavaScript",
        },
      ],
    },
  ];

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
          href="/frontenddev" 
          className="inline-flex items-center px-4 py-2 text-[#A435F0] hover:text-white border-2 border-[#A435F0] hover:bg-[#A435F0] rounded-sm transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:translate-x-[-2px] transition-transform" />
          Back to Modules
        </Link>
      </div>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#000000] mb-6">
          JavaScript Tutorial
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Master JavaScript programming with our comprehensive tutorial. Learn
          through practical examples and hands-on coding exercises.
        </p>

        {/* Video Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">
            Part 1: JavaScript Fundamentals
          </h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/sscX432bMZo?si=qMDJpKKibzzRwjzB"
              title="JavaScript Tutorial for Beginners"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-sm"
            ></iframe>
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">
            Part 2: JavaScript Fundamentals
          </h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/_TjtAyMkiTI?si=kOC0Ar4APc5CZgMU"
              title="JavaScript Tutorial for Beginners"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-sm"
            ></iframe>
          </div>
        </div>

        <div className="space-y-8">
          {tutorials.map((tutorial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-sm p-6 hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-[#000000] mb-4">
                {tutorial.title}
              </h2>
              <p className="text-gray-600 mb-6">{tutorial.content}</p>

              <div className="bg-gray-50 rounded-sm p-4">
                <h3 className="text-lg font-medium text-[#000000] mb-3">
                  Examples:
                </h3>
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
};

export default JSTutorial;