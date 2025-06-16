"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

const JSTutorial = () => {
  const tutorials = [
    {
      title: "Introduction to JavaScript",
      content:
        "JavaScript is a versatile programming language that enables interactive web pages and is essential for modern web development.",
      examples: [
        {
          code: `// Hello World in JavaScript
console.log("Hello World!");

document.getElementById("demo").innerHTML = "Hello World!";`,
          description: "Different ways to output Hello World in JavaScript",
        },
      ],
    },
    {
      title: "JavaScript Basics",
      content:
        "Learn fundamental JavaScript concepts including variables, data types, and basic operations.",
      examples: [
        {
          code: `// Variables and data types
let number = 42;
const pi = 3.14159;
let isValid = true;
let name = "John";

// Modern ES6+ features
const template = \`Hello \${name}\`;
const [x, y] = [1, 2]; // Array destructuring
const { age, email } = person; // Object destructuring`,
          description: "Variables, data types, and modern JavaScript features",
        },
        {
          code: `// Arrays and Objects
const numbers = [1, 2, 3, 4, 5];
const person = {
    name: "John",
    age: 30,
    greet() {
        console.log(\`Hello, I'm \${this.name}\`);
    }
};

// Array methods
const doubled = numbers.map(n => n * 2);
const sum = numbers.reduce((a, b) => a + b, 0);`,
          description: "Working with arrays and objects in JavaScript",
        },
      ],
    },
    {
      title: "Functions in JavaScript",
      content:
        "JavaScript functions are first-class objects and can be used in various ways.",
      examples: [
        {
          code: `// Function declarations
function greet(name) {
    return \`Hello, \${name}!\`;
}

// Arrow functions
const multiply = (a, b) => a * b;

// Higher-order functions
const twice = (f) => (x) => f(f(x));
const addOne = x => x + 1;
console.log(twice(addOne)(5)); // 7`,
          description: "Different ways to work with functions in JavaScript",
        },
      ],
    },
    {
      title: "Asynchronous JavaScript",
      content: "Learn how to handle asynchronous operations using Promises and async/await.",
      examples: [
        {
          code: `// Promises
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Async/Await
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}`,
          description: "Working with Promises and async/await in JavaScript",
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
          href="/dsa"
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
          modern JavaScript features and asynchronous programming through examples.
        </p>

        {/* Video Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">
            Full Playlist (Watch on Youtube)
          </h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dY-OpnLZRd0?si=vtRuDxDlW6tVOVAD"
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