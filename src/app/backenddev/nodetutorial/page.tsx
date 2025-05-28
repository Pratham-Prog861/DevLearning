"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

const NodeTutorial = () => {
  const tutorials = [
    {
      title: "Introduction to Node.js",
      content:
        "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to run JavaScript on the server side.",
      examples: [
        {
          code: `console.log('Hello from Node.js');

// Basic HTTP Server
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`,
          description: "A simple Node.js HTTP server example",
        },
      ],
    },
    {
      title: "Node.js Modules",
      content:
        "Node.js uses a modular system to organize code into reusable components.",
      examples: [
        {
          code: `// math.js
module.exports = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b
};

// main.js
const math = require('./math');
console.log(math.add(5, 3));      // Output: 8
console.log(math.multiply(2, 4)); // Output: 8`,
          description: "Creating and using custom modules in Node.js",
        },
      ],
    },
    {
      title: "Async Programming in Node.js",
      content:
        "Node.js excels at handling asynchronous operations using callbacks, promises, and async/await.",
      examples: [
        {
          code: `// Using async/await
const fs = require('fs').promises;

async function readFile() {
  try {
    const data = await fs.readFile('example.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
}

readFile();`,
          description: "Reading a file asynchronously using async/await",
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
    }, 2000); // Reset after 2 seconds
  };

  return (
    <div className="min-h-screen mt-12 bg-white pt-16 pb-12 relative">
      <div className="absolute top-8 left-4 md:left-8">
        <Link 
          href="/backenddev" 
          className="inline-flex items-center px-4 py-2 text-[#A435F0] hover:text-white border-2 border-[#A435F0] hover:bg-[#A435F0] rounded-sm transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:translate-x-[-2px] transition-transform" />
          Back to Modules
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#000000] mb-6">
          Node.js Tutorial
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Master Node.js fundamentals with our comprehensive tutorial. Learn
          through examples and hands-on practice.
        </p>

        {/* Video Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">
            Video Tutorial
          </h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/BLl32FvcdVM?si=Liqyfyb4vHjGIZYt"
              title="Node.js Tutorial for Beginners"
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

export default NodeTutorial;