"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

const CPPTutorial = () => {
  const tutorials = [
    {
      title: "Introduction to C++",
      content:
        "C++ is a powerful general-purpose programming language that extends C with object-oriented features.",
      examples: [
        {
          code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello World!" << endl;
    return 0;
}`,
          description: "A simple Hello World program in C++",
        },
      ],
    },
    {
      title: "Basic C++ Syntax",
      content:
        "Learn the fundamental syntax and structure of C++ programs including variables, data types, and operators.",
      examples: [
        {
          code: `int number = 42;
double pi = 3.14159;
char grade = 'A';
bool isValid = true;
string name = "John";`,
          description: "Common data types and variable declarations",
        },
        {
          code: `// Arithmetic operators
int sum = a + b;
int difference = a - b;
int product = a * b;
int quotient = a / b;
int remainder = a % b;`,
          description: "Basic arithmetic operators in C++",
        },
      ],
    },
    {
      title: "Control Structures",
      content:
        "Control structures allow you to control the flow of program execution.",
      examples: [
        {
          code: `// If-else statement
if (score >= 90) {
    cout << "Grade A";
} else if (score >= 80) {
    cout << "Grade B";
} else {
    cout << "Grade C";
}

// For loop
for (int i = 0; i < 5; i++) {
    cout << i << " ";
}

// While loop
while (condition) {
    // code block
}`,
          description: "Common control structures in C++",
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
          C++ Tutorial
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Master C++ programming with our comprehensive tutorial. Learn
          through examples and hands-on practice.
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
              src="https://www.youtube.com/embed/VTLCoHnyACE?si=4B2CZZWRg3c6FnoY"
              title="C++ Tutorial for Beginners"
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

export default CPPTutorial;