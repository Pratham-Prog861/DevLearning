"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, X, Play } from "lucide-react";
import Link from "next/link";

const HTMLTutorial = () => {
  const [isCompilerOpen, setIsCompilerOpen] = useState(false);
  const [currentCode, setCurrentCode] = useState("");
  const [compiledOutput, setCompiledOutput] = useState("");

  const openCompiler = (code: string) => {
    setCurrentCode(code);
    setCompiledOutput(code);
    setIsCompilerOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeCompiler = () => {
    setIsCompilerOpen(false);
    document.body.style.overflow = 'unset';
  };

  const runCode = () => {
    setCompiledOutput(currentCode);
  };

  const tutorials = [
    {
      title: "Introduction to HTML",
      content:
        "HTML (HyperText Markup Language) is the standard markup language for creating web pages.",
      examples: [
        {
          code: "<h1>Hello World</h1>",
          description: "A simple heading element",
        },
      ],
    },
    {
      title: "Semantic HTML Tags",
      content:
        "Semantic HTML tags clearly describe their meaning to both the browser and the developer.",
      examples: [
        {
          code: `<header>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
    </ul>
  </nav>
</header>`,
          description:
            "<header> - Defines a header section\n<nav> - Contains navigation links\n<ul> - Unordered list",
        },
        {
          code: `<main>
  <article>
    <h1>Article Title</h1>
    <p>Article content...</p>
  </article>
  <aside>
    <h2>Related Content</h2>
  </aside>
</main>`,
          description:
            "<main> - Main content\n<article> - Self-contained content\n<aside> - Related content",
        },
        {
          code: `<footer>
  <section>
    <h3>Contact Us</h3>
    <address>
      Email: example@email.com
    </address>
  </section>
</footer>`,
          description:
            "<footer> - Footer section\n<section> - Thematic grouping\n<address> - Contact information",
        },
      ],
    },
    {
      title: "HTML Forms",
      content:
        "HTML forms are used to collect user input and send it to a server for processing.",
      examples: [
        {
          code: `<form action="/submit" method="POST">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <button type="submit">Submit</button>
</form>`,
          description: "A basic form with text and email inputs",
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
          HTML Tutorial
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Master HTML fundamentals with our comprehensive tutorial. Learn
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
              src="https://www.youtube.com/embed/4dprtEzunIk?si=WjLlnT53dh-Q0ou6"
              title="HTML Tutorial for Beginners"
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

              <button 
                onClick={() => openCompiler(tutorial.examples[0].code)}
                className="mt-6 px-4 py-2 border-2 border-[#A435F0] text-[#A435F0] hover:bg-[#A435F0] hover:text-white transition-colors duration-300 rounded-sm"
              >
                Try it Yourself
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Compiler Modal */}
      {isCompilerOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-hidden"
          onWheel={(e) => e.stopPropagation()}
          onClick={(e) => e.target === e.currentTarget && closeCompiler()}
        >
          <div className="bg-white rounded-sm w-full max-w-6xl h-[80vh] flex flex-col shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-[#000000]">HTML Compiler</h3>
              <button
                onClick={closeCompiler}
                className="p-2 hover:bg-gray-100 rounded-sm transition-colors"
              >
                <X className="text-black" size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
              {/* Editor */}
              <div className="flex-1 flex flex-col border-r border-gray-200">
                <div className="flex items-center justify-between p-3 bg-gray-50 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-700">HTML Code</span>
                  <button
                    onClick={runCode}
                    className="flex items-center gap-2 px-3 py-1.5 bg-[#A435F0] text-white rounded-sm hover:bg-[#8c2ad1] transition-colors text-sm"
                  >
                    <Play size={14} />
                    Run
                  </button>
                </div>
                <textarea
                  value={currentCode}
                  onChange={(e) => setCurrentCode(e.target.value)}
                  className="flex-1 p-4 font-mono text-sm resize-none focus:outline-none bg-gray-50 text-black"
                  spellCheck={false}
                />
              </div>

              {/* Preview */}
              <div className="flex-1 flex flex-col">
                <div className="p-3 bg-gray-50 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-700">Preview</span>
                </div>
                <div className="flex-1 overflow-auto bg-white">
                  <iframe
                    srcDoc={`
                      <!DOCTYPE html>
                      <html>
                        <head>
                          <meta charset="UTF-8">
                          <meta name="viewport" content="width=device-width, initial-scale=1.0">
                          <style>
                            body { 
                              margin: 16px; 
                              font-family: system-ui, -apple-system, sans-serif;
                            }
                          </style>
                        </head>
                        <body>
                          ${compiledOutput}
                        </body>
                      </html>
                    `}
                    className="w-full h-full border-0"
                    title="HTML Preview"
                    sandbox="allow-scripts"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HTMLTutorial;
