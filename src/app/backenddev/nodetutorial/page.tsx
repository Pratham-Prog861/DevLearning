"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, X, Play } from "lucide-react";
import Link from "next/link";

const NodeTutorial = () => {
  const [isCompilerOpen, setIsCompilerOpen] = useState(false);
  const [currentCode, setCurrentCode] = useState("");
  const [executableCode, setExecutableCode] = useState("");
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const openCompiler = (displayCode: string, execCode: string) => {
    setCurrentCode(displayCode);
    setExecutableCode(execCode);
    setConsoleOutput([]);
    setIsCompilerOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeCompiler = () => {
    setIsCompilerOpen(false);
    document.body.style.overflow = 'unset';
  };

  const runCode = async () => {
    setConsoleOutput(['Running code...']);
    
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
              content: executableCode,
            },
          ],
        }),
      });

      const result = await response.json();
      
      if (result.run) {
        const output: string[] = [];
        
        if (result.run.stdout) {
          output.push(...result.run.stdout.split('\n'));
        }
        
        if (result.run.stderr) {
          output.push('Error:', ...result.run.stderr.split('\n'));
        }
        
        if (result.run.output) {
          output.push(...result.run.output.split('\n'));
        }
        
        setConsoleOutput(output.length > 0 ? output : ['No output']);
      } else {
        setConsoleOutput(['Error: Unable to execute code']);
      }
    } catch (error) {
      setConsoleOutput([`Error: ${error instanceof Error ? error.message : 'Failed to execute code'}`]);
    }
  };

  interface Example {
    displayCode: string;
    executableCode: string;
    description: string;
  }

  interface Tutorial {
    title: string;
    content: string;
    examples: Example[];
  }

  const tutorials: Tutorial[] = [
    {
      title: "Introduction to Node.js",
      content:
        "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to run JavaScript on the server side.",
      examples: [
        {
          displayCode: `// Basic Node.js program
const name = 'Node.js';
const year = 2009;

// Working with variables
const greeting = \`Hello from \${name}!\`;
const info = \`\${name} was created in \${year}\`;

// Simple calculation
const sum = 10 + 20;

// Node.js provides process object
const version = process.version;
const platform = process.platform;`,
          executableCode: `// Basic Node.js program
console.log('Hello from Node.js!');
console.log('Node.js version:', process.version);
console.log('Platform:', process.platform);

// Working with variables
const name = 'Node.js';
const year = 2009;
console.log(\`\${name} was created in \${year}\`);

// Simple calculation
const sum = 10 + 20;
console.log('Sum:', sum);`,
          description: "A simple Node.js program with variables and process object",
        },
      ],
    },
    {
      title: "Working with Arrays and Objects",
      content:
        "Node.js uses JavaScript, so you can work with arrays, objects, and all JavaScript features.",
      examples: [
        {
          displayCode: `// Working with Arrays
const fruits = ['Apple', 'Banana', 'Orange'];
const firstFruit = fruits[0];

// Array methods
fruits.push('Mango');
const fruitCount = fruits.length;

// Working with Objects
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// Accessing object properties
const personName = person.name;
const personAge = person.age;

// Object methods
const personInfo = \`\${person.name} is \${person.age} years old\`;`,
          executableCode: `// Working with Arrays
const fruits = ['Apple', 'Banana', 'Orange'];
console.log('Fruits:', fruits);
console.log('First fruit:', fruits[0]);

// Array methods
fruits.push('Mango');
console.log('After push:', fruits);

// Working with Objects
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

console.log('Person:', person);
console.log('Name:', person.name);
console.log('Age:', person.age);`,
          description: "Working with arrays and objects in Node.js",
        },
      ],
    },
    {
      title: "Functions and Async Programming",
      content:
        "Node.js excels at handling asynchronous operations using callbacks, promises, and async/await.",
      examples: [
        {
          displayCode: `// Regular function
function greet(name) {
  return \`Hello, \${name}!\`;
}

const greeting = greet('World');

// Arrow function
const add = (a, b) => a + b;
const result = add(5, 3);

// Async function with Promise
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncExample() {
  await delay(100);
  return 'Done';
}

// Using async function
asyncExample().then(result => {
  // Handle result
});`,
          executableCode: `// Regular function
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));

// Arrow function
const add = (a, b) => a + b;
console.log('5 + 3 =', add(5, 3));

// Async function with Promise
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncExample() {
  console.log('Starting async operation...');
  await delay(100);
  console.log('Async operation completed!');
  return 'Done';
}

asyncExample().then(result => console.log(result));`,
          description: "Functions and async/await in Node.js",
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
          href="/backenddev" 
          className="inline-flex items-center px-4 py-2 text-[#A435F0] hover:text-white border-2 border-[#A435F0] hover:bg-[#A435F0] rounded-sm transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:translate-x-[-2px] transition-transform" />
          Back to Modules
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#000000] mb-6">
          Node.js Tutorial
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Master Node.js fundamentals with our comprehensive tutorial. Learn
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
              src="https://www.youtube.com/embed/BLl32FvcdVM?si=Liqyfyb4vHjGIZYt"
              title="Node.js Tutorial for Beginners"
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
                        <code className="text-[#A435F0]">{example.displayCode}</code>
                      </pre>
                      <button
                        onClick={() => copyToClipboard(example.displayCode, idx)}
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
                onClick={() => openCompiler(tutorial.examples[0].displayCode, tutorial.examples[0].executableCode)}
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
              <h3 className="text-xl font-semibold text-[#000000]">Node.js Compiler</h3>
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
                  <span className="text-sm font-medium text-gray-700">Node.js Code</span>
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

export default NodeTutorial;