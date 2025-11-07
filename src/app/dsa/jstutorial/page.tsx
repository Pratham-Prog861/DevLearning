"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, X, Play } from "lucide-react";
import Link from "next/link";

const JSTutorial = () => {
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
    setConsoleOutput(['⏳ Running JavaScript code...']);

    try {
      const response = await fetch('https://emkc.org/api/v2/piston/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          language: 'javascript',
          version: '18.15.0',
          files: [
            {
              name: 'main.js',
              content: currentCode,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error('Execution failed');
      }

      const result = await response.json();
      
      const output: string[] = ['✅ Output:', ''];
      
      if (result.run && result.run.stdout) {
        output.push(...result.run.stdout.trim().split('\n'));
      }
      
      if (result.run && result.run.stderr) {
        output.push('', '⚠️ Errors/Warnings:', '');
        output.push(...result.run.stderr.trim().split('\n'));
      }
      
      if (!result.run.stdout && !result.run.stderr) {
        output.push('(No output - code executed successfully)');
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
        '• Try online: jsfiddle.net, codepen.io',
        '• Use browser console (F12)',
        '• Install Node.js locally',
      ]);
    } finally {
      setIsRunning(false);
    }
  };

  const tutorials = [
    {
      title: "Introduction to JavaScript",
      content:
        "JavaScript is a versatile programming language that enables interactive web pages and is essential for modern web development.",
      examples: [
        {
          code: `// Hello World in JavaScript
console.log("Hello World!");
console.log("Welcome to JavaScript!");`,
          description: "Simple Hello World program in JavaScript",
        },
      ],
    },
    {
      title: "JavaScript Basics",
      content:
        "Learn fundamental JavaScript concepts including variables, data types, and basic operations.",
      examples: [
        {
          code: `// Variables and data types
let number = 42;
const pi = 3.14159;
let isValid = true;
let name = "John";

console.log("Number:", number);
console.log("Pi:", pi);
console.log("Is Valid:", isValid);
console.log("Name:", name);

// Modern ES6+ features
const template = \`Hello \${name}\`;
console.log("Template:", template);

const [x, y] = [1, 2];
console.log("Destructured x:", x, "y:", y);`,
          description: "Variables, data types, and modern JavaScript features",
        },
        {
          code: `// Arrays and Objects
const numbers = [1, 2, 3, 4, 5];
const person = {
    name: "John",
    age: 30,
    greet() {
        console.log(\`Hello, I'm \${this.name}\`);
    }
};

console.log("Numbers:", numbers);
person.greet();

// Array methods
const doubled = numbers.map(n => n * 2);
const sum = numbers.reduce((a, b) => a + b, 0);

console.log("Doubled:", doubled);
console.log("Sum:", sum);`,
          description: "Working with arrays and objects in JavaScript",
        },
      ],
    },
    {
      title: "Functions in JavaScript",
      content:
        "JavaScript functions are first-class objects and can be used in various ways.",
      examples: [
        {
          code: `// Function declarations
function greet(name) {
    return \`Hello, \${name}!\`;
}

// Arrow functions
const multiply = (a, b) => a * b;

// Higher-order functions
const twice = (f) => (x) => f(f(x));
const addOne = x => x + 1;
console.log(twice(addOne)(5)); // 7`,
          description: "Different ways to work with functions in JavaScript",
        },
      ],
    },
    {
      title: "Asynchronous JavaScript",
      content: "Learn how to handle asynchronous operations using Promises and async/await.",
      examples: [
        {
          code: `// Promises example
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 1000);
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.error(error));

// Async/Await example
async function processData() {
    console.log("Processing...");
    
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 500));
    
    console.log("Data processed successfully!");
    return "Complete";
}

processData().then(result => console.log(result));`,
          description: "Working with Promises and async/await in JavaScript",
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
          JavaScript Tutorial
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Master JavaScript programming with our comprehensive tutorial. Learn
          modern JavaScript features and asynchronous programming through examples.
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
              src="https://www.youtube.com/embed/dY-OpnLZRd0?si=vtRuDxDlW6tVOVAD"
              title="JavaScript Tutorial for Beginners"
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
              <h3 className="text-xl font-semibold text-[#000000]">JavaScript Compiler</h3>
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
                  <span className="text-sm font-medium text-gray-700">JavaScript Code</span>
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

export default JSTutorial;