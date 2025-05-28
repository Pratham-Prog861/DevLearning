"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

const ExpressTutorial = () => {
  const tutorials = [
    {
      title: "Introduction to Express.js",
      content:
        "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
      examples: [
        {
          code: `const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});`,
          description: "A basic Express.js server setup",
        },
      ],
    },
    {
      title: "Express.js Routing",
      content:
        "Routing refers to determining how your application responds to client requests to particular endpoints (URIs).",
      examples: [
        {
          code: `const express = require('express');
const app = express();

// Handle GET request
app.get('/users', (req, res) => {
  res.json([{ name: 'John' }, { name: 'Jane' }]);
});

// Handle POST request
app.post('/users', (req, res) => {
  // Create new user
  res.status(201).send('User created');
});

// Route parameters
app.get('/users/:id', (req, res) => {
  res.send(\`User ID: \${req.params.id}\`);
});`,
          description: "Different types of route handlers in Express.js",
        },
      ],
    },
    {
      title: "Middleware in Express.js",
      content:
        "Middleware functions are functions that have access to the request object, response object, and the next middleware function in the application's request-response cycle.",
      examples: [
        {
          code: `const express = require('express');
const app = express();

// Custom middleware
const logger = (req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next();
};

// Use middleware
app.use(logger);

// Built-in middleware
app.use(express.json());
app.use(express.static('public'));

app.post('/api/data', (req, res) => {
  console.log(req.body); // Parsed JSON data
  res.json({ received: true });
});`,
          description: "Using built-in and custom middleware in Express.js",
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
          Express.js Tutorial
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Master Express.js fundamentals with our comprehensive tutorial. Learn
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
              src="https://www.youtube.com/embed/pKJ4GGyDgJo?si=phLs_l0fhjMtMvvX"
              title="Express.js Tutorial for Beginners"
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

export default ExpressTutorial;