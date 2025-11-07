"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, X, Play } from "lucide-react";
import Link from "next/link";

const CPPTutorial = () => {
  const [isCompilerOpen, setIsCompilerOpen] = useState(false);
  const [currentCode, setCurrentCode] = useState("");
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

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

  const runCode = async () => {
    setIsRunning(true);
    setConsoleOutput(['⏳ Compiling and running C++ code...']);

    try {
      // Using Piston API for C++ compilation (free and reliable)
      const response = await fetch('https://emkc.org/api/v2/piston/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          language: 'c++',
          version: '10.2.0',
          files: [
            {
              name: 'main.cpp',
              content: currentCode,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error('Compilation failed');
      }

      const result = await response.json();
      
      const output: string[] = ['✅ Output:', ''];
      
      // Add stdout (normal output)
      if (result.run && result.run.stdout) {
        output.push(...result.run.stdout.trim().split('\n'));
      }
      
      // Add stderr (errors/warnings)
      if (result.run && result.run.stderr) {
        output.push('', '⚠️ Errors/Warnings:', '');
        output.push(...result.run.stderr.trim().split('\n'));
      }
      
      // If no output at all
      if (!result.run.stdout && !result.run.stderr) {
        output.push('(No output - code compiled successfully)');
      }
      
      setConsoleOutput(output);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setConsoleOutput([
        '❌ Error running code',
        '',
        errorMessage,
        '',
        '💡 Alternative options:',
        '• Try online: onlinegdb.com, programiz.com',
        '• Install locally: g++ compiler',
        '• Use IDE: VS Code, CLion, Code::Blocks',
      ]);
    } finally {
      setIsRunning(false);
    }
  };

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
          code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int number = 42;
    double pi = 3.14159;
    char grade = 'A';
    bool isValid = true;
    string name = "John";
    
    cout << "Number: " << number << endl;
    cout << "Pi: " << pi << endl;
    cout << "Grade: " << grade << endl;
    cout << "Is Valid: " << isValid << endl;
    cout << "Name: " << name << endl;
    
    return 0;
}`,
          description: "Common data types and variable declarations with output",
        },
        {
          code: `#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 3;
    
    // Arithmetic operators
    int sum = a + b;
    int difference = a - b;
    int product = a * b;
    int quotient = a / b;
    int remainder = a % b;
    
    cout << "Sum: " << sum << endl;
    cout << "Difference: " << difference << endl;
    cout << "Product: " << product << endl;
    cout << "Quotient: " << quotient << endl;
    cout << "Remainder: " << remainder << endl;
    
    return 0;
}`,
          description: "Basic arithmetic operators in C++ with output",
        },
      ],
    },
    {
      title: "Control Structures",
      content:
        "Control structures allow you to control the flow of program execution.",
      examples: [
        {
          code: `#include <iostream>
using namespace std;

int main() {
    // If-else statement
    int score = 85;
    cout << "Score: " << score << " - ";
    
    if (score >= 90) {
        cout << "Grade A" << endl;
    } else if (score >= 80) {
        cout << "Grade B" << endl;
    } else {
        cout << "Grade C" << endl;
    }
    
    // For loop
    cout << "For loop output: ";
    for (int i = 0; i < 5; i++) {
        cout << i << " ";
    }
    cout << endl;
    
    // While loop
    cout << "While loop output: ";
    int count = 0;
    while (count < 5) {
        cout << count << " ";
        count++;
    }
    cout << endl;
    
    return 0;
}`,
          description: "Common control structures in C++ with output",
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
              <h3 className="text-xl font-semibold text-[#000000]">C++ Compiler</h3>
              <button
                onClick={closeCompiler}
                className="p-2 hover:bg-gray-100 rounded-sm transition-colors"
              >
                <X className="text-black" size={20} />
              </button>
            </div>

            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
              <div className="flex-1 flex flex-col border-r border-gray-200">
                <div className="flex items-center justify-between p-3 bg-gray-50 border-b border-gray-200">
                  <span className="text-sm font-medium text-gray-700">C++ Code</span>
                  <button
                    onClick={runCode}
                    disabled={isRunning}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-sm text-white text-sm transition-colors ${
                      isRunning 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-[#A435F0] hover:bg-[#8c2ad1]'
                    }`}
                  >
                    <Play size={14} />
                    {isRunning ? 'Running...' : 'Run'}
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
                  <span className="text-sm font-medium text-gray-700">Output</span>
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

export default CPPTutorial;