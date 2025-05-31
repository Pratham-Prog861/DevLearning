"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

const gitTutorials = [
  {
    title: "Introduction to Git",
    content:
      "Git is a distributed version control system that helps you track changes in your code and collaborate with others.",
    examples: [
      {
        code: "git --version",
        description: "Check your installed Git version.",
      },
      {
        code: "git config --global user.name \"Your Name\"\ngit config --global user.email \"you@example.com\"",
        description: "Set your global username and email for Git commits.",
      },
    ],
  },
  {
    title: "Initialize a Repository",
    content:
      "Start tracking your project with Git by initializing a new repository.",
    examples: [
      {
        code: "git init",
        description: "Initialize a new Git repository in your current directory.",
      },
    ],
  },
  {
    title: "Basic Workflow",
    content:
      "Add files, commit changes, and view your commit history.",
    examples: [
      {
        code: "git add .\ngit commit -m 'Initial commit'\ngit log",
        description: "Add all files, commit with a message, and view commit history.",
      },
    ],
  },
  {
    title: "Connect to GitHub",
    content:
      "Push your local repository to GitHub to collaborate and back up your code.",
    examples: [
      {
        code: "git remote add origin https://github.com/yourusername/your-repo.git\ngit push -u origin main",
        description: "Connect to a remote GitHub repository and push your code.",
      },
    ],
  },
  {
    title: "Clone a Repository",
    content:
      "Download a project from GitHub to your local machine.",
    examples: [
      {
        code: "git clone https://github.com/username/repo.git",
        description: "Clone a repository from GitHub.",
      },
    ],
  },
];

const GithubTutorial = () => {
  const [copiedIndex, setCopiedIndex] = useState<{card: number, example: number} | null>(null);

  const copyToClipboard = (text: string, cardIdx: number, exampleIdx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex({ card: cardIdx, example: exampleIdx });
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen mt-12 bg-white pt-16 pb-12 relative">
      <div className="absolute top-15 left-4 md:left-8">
        <Link 
          href="/choose" 
          className="inline-flex items-center px-4 py-2 text-[#A435F0] hover:text-white border-2 border-[#A435F0] hover:bg-[#A435F0] rounded-sm transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:translate-x-[-2px] transition-transform" />
          Back to Learning Paths
        </Link>
      </div>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#000000] mb-6 text-center">
          Git & GitHub Tutorial
        </h1>
        <p className="text-gray-600 text-lg mb-8 text-center">
          Learn how to use Git and GitHub to manage your code and collaborate with others.
        </p>

        {/* Video Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4 text-center">
            Video Tutorial
          </h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/q8EevlEpQ2A?si=zC9if8pOywlN0D59"
              title="Git and Github Tutorial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-sm"
            ></iframe>
          </div>
        </div>

        <div className="space-y-8">
          {gitTutorials.map((tutorial, cardIdx) => (
            <div
              key={cardIdx}
              className="bg-white border border-gray-200 rounded-sm p-6 hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-[#000000] mb-4">
                {tutorial.title}
              </h2>
              <p className="text-gray-600 mb-6">{tutorial.content}</p>

              <div className="bg-gray-50 rounded-sm p-4">
                <h3 className="text-lg font-medium text-[#000000] mb-3">Examples:</h3>
                {tutorial.examples.map((example, exampleIdx) => (
                  <div key={exampleIdx} className="space-y-2">
                    <div className="relative">
                      <pre className="bg-gray-100 p-3 rounded-sm overflow-x-auto">
                        <code className="text-[#A435F0]">{example.code}</code>
                      </pre>
                      <button
                        onClick={() => copyToClipboard(example.code, cardIdx, exampleIdx)}
                        className="absolute top-2 right-2 p-2 rounded-sm bg-gray-200/50 backdrop-blur-sm text-gray-600 hover:bg-[#A435F0]/10 hover:text-[#A435F0] transition-all duration-300 transform active:scale-95"
                        title="Copy to clipboard"
                      >
                        {copiedIndex && copiedIndex.card === cardIdx && copiedIndex.example === exampleIdx ? (
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

export default GithubTutorial;
