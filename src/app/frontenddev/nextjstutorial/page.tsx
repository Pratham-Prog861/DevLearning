"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, X, Play } from "lucide-react";
import Link from "next/link";

const NextJSTutorial = () => {
  const [isCompilerOpen, setIsCompilerOpen] = useState(false);
  const [currentCode, setCurrentCode] = useState("");
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const openCompiler = (code: string) => {
    setCurrentCode(code);
    setConsoleOutput([]);
    setIsCompilerOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeCompiler = () => {
    setIsCompilerOpen(false);
    document.body.style.overflow = 'unset';
  };

  const runCode = () => {
    const output: string[] = ['📝 Code Explanation:', ''];

    // Analyze the code and provide explanation
    if (currentCode.includes('export default function Home')) {
      output.push('🏠 Next.js Page Component:');
      output.push('• Creates a basic Next.js page component');
      output.push('• Uses React JSX syntax for UI');
      output.push('• Automatically becomes a route at "/"');
      output.push('• Renders "Welcome to Next.js!" heading');
      output.push('');
      output.push('📌 Key Concepts:');
      output.push('• export default - Makes this the page component');
      output.push('• Function component - Modern React pattern');
      output.push('• JSX - HTML-like syntax in JavaScript');
      output.push('• File-based routing - File location = URL path');
    } else if (currentCode.includes('[slug]') || currentCode.includes('params')) {
      output.push('🔀 Dynamic Routing:');
      output.push('• Creates dynamic routes with URL parameters');
      output.push('• [slug] in filename = dynamic route segment');
      output.push('• params.slug accesses the URL parameter');
      output.push('• Example: /blog/hello-world → slug = "hello-world"');
      output.push('');
      output.push('📌 Key Concepts:');
      output.push('• Dynamic segments - [slug] creates variable routes');
      output.push('• params prop - Contains route parameters');
      output.push('• App Router - Next.js 13+ routing system');
      output.push('• SEO-friendly URLs with dynamic content');
    } else if (currentCode.includes('async function getData') || currentCode.includes('await fetch')) {
      output.push('⚡ Server-Side Data Fetching:');
      output.push('• Fetches data on the server before rendering');
      output.push('• Uses async/await for API calls');
      output.push('• Data is ready when page loads (no loading state)');
      output.push('• Better SEO and initial page load performance');
      output.push('');
      output.push('📌 Key Concepts:');
      output.push('• async function - Enables await keyword');
      output.push('• fetch() - Makes HTTP requests');
      output.push('• Server Component - Runs on server, not browser');
      output.push('• res.json() - Parses JSON response');
      output.push('• map() - Renders list of items');
    } else {
      output.push('This is a Next.js component example.');
    }

    output.push('');
    output.push('💡 To Run This Code:');
    output.push('• Create Next.js app: npx create-next-app@latest');
    output.push('• Place code in appropriate file (e.g., app/page.js)');
    output.push('• Run: npm run dev');
    output.push('• Or try online at stackblitz.com or codesandbox.io');

    setConsoleOutput(output);
  };

  const tutorials = [
    {
      title: "Introduction to Next.js",
      content:
        "Next.js is a powerful React framework that enables features like server-side rendering and static site generation for modern web applications.",
      examples: [
        {
          code: `// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
    </div>
  )
}`,
          description: "A simple Next.js page component",
        },
      ],
    },
    {
      title: "Routing in Next.js",
      content:
        "Next.js features a file-system based router built on the concept of pages, making routing simple and intuitive.",
      examples: [
        {
          code: `// app/blog/[slug]/page.js
export default function BlogPost({ params }) {
  return (
    <article>
      <h1>Post: {params.slug}</h1>
    </article>
  )
}`,
          description: "Dynamic routing with Next.js App Router",
        },
      ],
    },
    {
      title: "Data Fetching",
      content:
        "Next.js provides powerful data fetching methods for both server and client components.",
      examples: [
        {
          code: `// Server Component
async function getData() {
  const res = await fetch('https://api.example.com/data')
  return res.json()
}

export default async function Page() {
  const data = await getData()
  
  return (
    <main>
      {data.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </main>
  )
}`,
          description: "Server-side data fetching in Next.js 13+",
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
          Next.js Tutorial
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Master Next.js development with our comprehensive tutorial. Learn
          server-side rendering, routing, and modern React patterns.
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
              src="https://www.youtube.com/embed/cVKB5NQPiFA?si=plgl3WzupWJbb-ft"
              title="Next.js Tutorial for Beginners"
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
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-[#000000]">Next.js Compiler</h3>
              <button
                onClick={() => setIsCompilerOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-sm transition-colors"
              >
                <X className="text-black" size={20} />
              </button>
            </div>

            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
              <div className="flex-1 flex flex-col border-r border-gray-200">
                <div className="flex items-center justify-between p-3 bg-gray-50 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-700">Next.js Code</span>
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

              <div className="flex-1 flex flex-col">
                <div className="p-3 bg-gray-50 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-700">Console Output</span>
                </div>
                <div className="flex-1 overflow-auto bg-gray-900 p-4">
                  {consoleOutput.length > 0 ? (
                    consoleOutput.map((line, idx) => (
                      <div key={idx} className="text-green-400 font-mono text-sm mb-1">
                        {line}
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500 font-mono text-sm">
                      Click Run to see output...
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NextJSTutorial;