"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

const JavaTutorial = () => {
  const tutorials = [
    {
      title: "Introduction to Java",
      content:
        "Java is a class-based, object-oriented programming language designed to be platform-independent and secure.",
      examples: [
        {
          code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}`,
          description: "A simple Hello World program in Java",
        },
      ],
    },
    {
      title: "Java Basics",
      content:
        "Learn fundamental Java concepts including variables, data types, and basic operations.",
      examples: [
        {
          code: `// Data types and variables
int number = 42;
double pi = 3.14159;
char grade = 'A';
boolean isValid = true;
String name = "John";`,
          description: "Common data types and variable declarations in Java",
        },
        {
          code: `// Basic array declaration
int[] numbers = {1, 2, 3, 4, 5};
String[] names = new String[3];

// ArrayList example
ArrayList<String> list = new ArrayList<>();
list.add("Java");
list.add("Programming");`,
          description: "Arrays and ArrayList examples",
        },
      ],
    },
    {
      title: "Object-Oriented Programming",
      content:
        "Java is built around OOP principles: encapsulation, inheritance, polymorphism, and abstraction.",
      examples: [
        {
          code: `public class Student {
    private String name;
    private int age;
    
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void study() {
        System.out.println(name + " is studying.");
    }
}`,
          description: "A simple class demonstrating OOP concepts",
        },
      ],
    },
    {
        title: "Control Flow and Loops",
        content: "Learn how to control program flow using conditional statements and loops in Java.",
        examples: [
            {
                code: `// If-else statement
    if (score >= 90) {
            grade = 'A';
    } else if (score >= 80) {
            grade = 'B';
    } else {
            grade = 'C';
    }

    // For loop
    for (int i = 0; i < 5; i++) {
            System.out.println(i);
    }

    // While loop
    int count = 0;
    while (count < 3) {
            System.out.println("Count: " + count);
            count++;
    }`,
                description: "Examples of control flow statements and loops in Java"
            }
        ]
    }
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
          Java Tutorial
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Master Java programming with our comprehensive tutorial. Learn
          object-oriented programming through examples and hands-on practice.
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
              src="https://www.youtube.com/embed/yRpLlJmRo2w?si=9u95D8IdaY8tgjhk"
              title="Java Tutorial for Beginners"
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

export default JavaTutorial;