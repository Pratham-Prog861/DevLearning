"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ReactCompiler from "@/components/ReactCompiler";

const NextJSTutorial = () => {
  const [isCompilerOpen, setIsCompilerOpen] = useState(false);
  const [currentCode, setCurrentCode] = useState("");

  const openCompiler = (code: string) => {
    setCurrentCode(code);
    setIsCompilerOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeCompiler = () => {
    setIsCompilerOpen(false);
    document.body.style.overflow = "unset";
  };

  const tutorials = [
    {
      title: "Introduction to Next.js",
      content:
        "Next.js is a powerful React framework that enables features like server-side rendering and static site generation for modern web applications.",
      examples: [
        {
          code: `function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>This is a Next.js page component</p>
      <p>File-based routing makes it easy to create pages</p>
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
          code: `function BlogPost() {
  // Simulating params for demo
  const params = { slug: 'my-first-post' };
  
  return (
    <article>
      <h1>Blog Post: {params.slug}</h1>
      <p>This demonstrates dynamic routing in Next.js</p>
      <p>The slug parameter comes from the URL path</p>
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
          code: `function Page() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulating data fetch
    setTimeout(() => {
      setData([
        { id: 1, title: 'First Post' },
        { id: 2, title: 'Second Post' },
        { id: 3, title: 'Third Post' }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <main>
      <h1>Blog Posts</h1>
      <ul className="post-list">
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </main>
  )
}`,
          description: "Data fetching example in Next.js",
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
                          <Check
                            size={16}
                            className="text-green-500 animate-in fade-in duration-300"
                          />
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

      <ReactCompiler
        isOpen={isCompilerOpen}
        onClose={closeCompiler}
        initialCode={currentCode}
        title="Next.js Live Editor"
      />
    </div>
  );
};

export default NextJSTutorial;
