"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, X, Play } from "lucide-react";
import Link from "next/link";

const pandasTutorials = [
  {
    title: "Introduction to Pandas",
    content:
      "Pandas is a powerful Python library for data manipulation and analysis. It provides data structures like Series and DataFrame for handling structured data.",
    examples: [
      {
        code: `import pandas as pd\ndata = {'Name': ['Alice', 'Bob'], 'Age': [25, 30]}\ndf = pd.DataFrame(data)\nprint(df)` ,
        description: "Create a simple DataFrame and print it.",
      },
    ],
  },
  {
    title: "Reading CSV Files",
    content:
      "Pandas makes it easy to read data from CSV files into DataFrames for analysis.",
    examples: [
      {
        code: `import pandas as pd\ndf = pd.read_csv('data.csv')\nprint(df.head())` ,
        description: "Read a CSV file and display the first five rows.",
      },
    ],
  },
  {
    title: "Data Selection and Filtering",
    content:
      "You can select columns, rows, and filter data in Pandas using intuitive syntax.",
    examples: [
      {
        code: `import pandas as pd\ndf = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})\nprint(df['A'])  # Select column\nprint(df[df['B'] > 4])  # Filter rows` ,
        description: "Select a column and filter rows in a DataFrame.",
      },
    ],
  },
];

export default function PandasTutorial() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
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

  const runCode = async () => {
    setConsoleOutput(['⏳ Loading Python environment with Pandas...']);
    
    try {
      // Load Pyodide if not already loaded
      interface PyodideInterface {
        runPython: (code: string) => string;
        runPythonAsync: (code: string) => Promise<void>;
        loadPackage: (packages: string | string[]) => Promise<void>;
      }
      
      const win = window as Window & { 
        pyodide?: PyodideInterface; 
        loadPyodide?: () => Promise<PyodideInterface> 
      };
      
      if (!win.pyodide) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js';
        document.head.appendChild(script);
        
        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
        });
        
        win.pyodide = await win.loadPyodide?.();
      }

      const pyodide = win.pyodide;
      if (!pyodide) {
        setConsoleOutput(['Error: Failed to load Python environment']);
        return;
      }

      // Load Pandas and NumPy packages
      await pyodide.loadPackage(['pandas', 'numpy']);

      const output: string[] = [];
      
      // Capture print statements
      pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
      `);

      // Run user code
      await pyodide.runPythonAsync(currentCode);
      
      // Get output
      const result = pyodide.runPython('sys.stdout.getvalue()');
      
      if (result) {
        output.push(...result.split('\n'));
      } else {
        output.push('Code executed successfully (no output)');
      }
      
      setConsoleOutput(output);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      setConsoleOutput([`Error: ${errorMessage}`]);
    }
  };

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
          href="/dataanalytics"
          className="inline-flex items-center px-4 py-2 text-[#A435F0] hover:text-white border-2 border-[#A435F0] hover:bg-[#A435F0] rounded-sm transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:translate-x-[-2px] transition-transform" />
          Back to Modules
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#000000] mb-6">Pandas Tutorial</h1>
        <p className="text-gray-600 text-lg mb-8">
          Learn Pandas for data analysis and manipulation with hands-on examples and clear explanations.
        </p>

        {/* Video Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">Part 1</h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/qrMnoY8qBJM?si=nZ4Z1bJSnocORKJm"
              title="Pandas Tutorial for Beginners"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-sm"
            ></iframe>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">Part 2</h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/0T9qhK5wBqI?si=lnae07-1uYwYaTcu"
              title="Pandas Tutorial for Beginners"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-sm"
            ></iframe>
          </div>
        </div>

        <div className="space-y-8">
          {pandasTutorials.map((tutorial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-sm p-6 hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-[#000000] mb-4">
                {tutorial.title}
              </h2>
              <p className="text-gray-600 mb-6">{tutorial.content}</p>

              <div className="bg-gray-50 rounded-sm p-4">
                <h3 className="text-lg font-medium text-[#000000] mb-3">Examples:</h3>
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
              <h3 className="text-xl font-semibold text-[#000000]">Pandas Compiler</h3>
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
                  <span className="text-sm font-medium text-gray-700">Pandas Code</span>
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
}