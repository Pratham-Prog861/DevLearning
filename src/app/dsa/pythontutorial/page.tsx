"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

const PythonTutorial = () => {
  const tutorials = [
    {
      title: "Introduction to Python",
      content:
        "Python is a high-level, interpreted programming language known for its simplicity and readability.",
      examples: [
        {
          code: `# Simple Hello World program
print("Hello World!")`,
          description: "A simple Hello World program in Python",
        },
      ],
    },
    {
      title: "Python Basics",
      content:
        "Learn fundamental Python concepts including variables, data types, and basic operations.",
      examples: [
        {
          code: `# Data types and variables
number = 42
pi = 3.14159
grade = 'A'
is_valid = True
name = "John"

# Dynamic typing
x = 100      # x is an integer
x = "Python" # now x is a string`,
          description: "Common data types and variable declarations in Python",
        },
        {
          code: `# Lists in Python
numbers = [1, 2, 3, 4, 5]
names = []

# List operations
numbers.append(6)
numbers.extend([7, 8])
first_item = numbers[0]
last_item = numbers[-1]`,
          description: "Lists and basic list operations",
        },
      ],
    },
    {
      title: "Python Functions",
      content:
        "Functions in Python are defined using the def keyword and are essential for code organization.",
      examples: [
        {
          code: `def greet(name, greeting="Hello"):
    """
    A simple greeting function
    with optional parameter
    """
    return f"{greeting}, {name}!"

# Function calls
print(greet("Alice"))         # Hello, Alice!
print(greet("Bob", "Hi"))     # Hi, Bob!

# Lambda function
square = lambda x: x * x
print(square(5))              # 25`,
          description: "Functions and lambda expressions in Python",
        },
      ],
    },
    {
      title: "Control Flow and Loops",
      content: "Learn how to control program flow using conditional statements and loops in Python.",
      examples: [
        {
          code: `# If-elif-else statement
score = 85
if score >= 90:
    grade = 'A'
elif score >= 80:
    grade = 'B'
else:
    grade = 'C'

# For loop with range
for i in range(5):
    print(i)

# While loop
count = 0
while count < 3:
    print(f"Count: {count}")
    count += 1

# List comprehension
squares = [x**2 for x in range(5)]`,
          description: "Examples of control flow statements and loops in Python",
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
          Python Tutorial
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Master Python programming with our comprehensive tutorial. Learn
          through examples and hands-on practice with Python&apos;s elegant syntax.
        </p>

        {/* Video Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">
            Full Video Tutorial
          </h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/pkYVOmU3MgA?si=OnQYb06oPEg7ahbY"
              title="Python Tutorial for Beginners"
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

export default PythonTutorial;