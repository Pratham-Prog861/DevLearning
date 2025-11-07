"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, X, Play } from "lucide-react";
import Link from "next/link";

const ReactJSTutorial = () => {
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
    if (currentCode.includes('function Welcome') && !currentCode.includes('useState')) {
      output.push('⚛️ Basic React Component:');
      output.push('• Creates a simple functional component');
      output.push('• Returns JSX (HTML-like syntax in JavaScript)');
      output.push('• Can be reused anywhere with <Welcome />');
      output.push('• Renders "Hello, React!" heading');
      output.push('');
      output.push('📌 Key Concepts:');
      output.push('• Function component - Modern React pattern');
      output.push('• JSX - JavaScript XML syntax');
      output.push('• return - What the component renders');
      output.push('• Self-closing tags - <Welcome /> to use component');
    } else if (currentCode.includes('useState') && currentCode.includes('useEffect')) {
      output.push('🪝 React Hooks (useState & useEffect):');
      output.push('• useState - Manages component state (data that changes)');
      output.push('• count starts at 0, setCount updates it');
      output.push('• useEffect - Runs side effects (like updating page title)');
      output.push('• [count] dependency - Effect runs when count changes');
      output.push('• Button click increments counter');
      output.push('');
      output.push('📌 Key Concepts:');
      output.push('• useState(0) - Initial state value is 0');
      output.push('• setCount - Function to update state');
      output.push('• useEffect - Lifecycle hook for side effects');
      output.push('• onClick handler - Responds to button clicks');
      output.push('• Re-renders automatically when state changes');
    } else if (currentCode.includes('{ name, role, avatar }') || currentCode.includes('UserCard')) {
      output.push('📦 Component Props:');
      output.push('• Props pass data from parent to child components');
      output.push('• Destructuring { name, role, avatar } extracts props');
      output.push('• Makes components reusable with different data');
      output.push('• Example: <UserCard name="John" role="Developer" />');
      output.push('');
      output.push('📌 Key Concepts:');
      output.push('• Props - Component inputs (like function parameters)');
      output.push('• Destructuring - Clean way to extract prop values');
      output.push('• Reusability - Same component, different data');
      output.push('• Dynamic content - {name}, {role} display prop values');
      output.push('• Parent controls child data');
    } else {
      output.push('This is a React component example.');
    }

    output.push('');
    output.push('💡 To Run This Code:');
    output.push('• Create React app: npx create-react-app my-app');
    output.push('• Or use Vite: npm create vite@latest');
    output.push('• Add code to a .jsx or .tsx file');
    output.push('• Run: npm start or npm run dev');
    output.push('• Or try online at codesandbox.io or stackblitz.com');

    setConsoleOutput(output);
  };

  const tutorials = [
    {
      title: "Introduction to React",
      content:
        "React is a JavaScript library for building user interfaces, particularly single-page applications where you need a fast, interactive user experience.",
      examples: [
        {
          code: `function Welcome() {
  return <h1>Hello, React!</h1>;
}

// Using the component
<Welcome />`,
          description: "A simple React functional component",
        },
      ],
    },
    {
      title: "React Hooks",
      content:
        "Hooks are functions that let you 'hook into' React state and lifecycle features from function components.",
      examples: [
        {
          code: `import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`,
          description: "useState and useEffect hooks example",
        },
      ],
    },
    {
      title: "Component Props",
      content:
        "Props are React's way of passing data from parent to child components, making your components reusable and dynamic.",
      examples: [
        {
          code: `function UserCard({ name, role, avatar }) {
  return (
    <div className="card">
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

// Using the component
<UserCard 
  name="John Doe"
  role="Developer"
  avatar="/john.jpg"
/>`,
          description: "Component props and their usage",
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
          React.js Tutorial
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Master React.js development with our comprehensive tutorial. Learn
          modern React patterns and best practices through hands-on examples.
        </p>

        {/* Video Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">
            Part 1
          </h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/FxgM9k1rg0Q?si=ZqfmeuqMWiJOi6XY"
              title="React Tutorial for Beginners"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-sm"
            ></iframe>
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">
            Part 2
          </h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/IdlF1zsUN3M?si=ERjZxm_1ON9ow36F"
              title="React Tutorial for Beginners"
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
              <h3 className="text-xl font-semibold text-[#000000]">React.js Compiler</h3>
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
                  <span className="text-sm font-medium text-gray-700">React Code</span>
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

export default ReactJSTutorial;