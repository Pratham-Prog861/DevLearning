"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, X, Play } from "lucide-react";
import Link from "next/link";

const matplotlibTutorials = [
  {
    title: "Introduction to Matplotlib",
    content:
      "Matplotlib is a comprehensive library for creating static, animated, and interactive visualizations in Python.",
    examples: [
      {
        code: `import matplotlib.pyplot as plt\nplt.plot([1, 2, 3, 4], [1, 4, 9, 16])\nplt.show()` ,
        description: "Plot a simple line graph.",
      },
    ],
  },
  {
    title: "Customizing Plots",
    content:
      "You can customize your plots with titles, labels, and colors to make them more informative and visually appealing.",
    examples: [
      {
        code: `import matplotlib.pyplot as plt\nx = [1, 2, 3, 4]\ny = [10, 20, 25, 30]\nplt.plot(x, y, color='green', marker='o')\nplt.title('Sample Plot')\nplt.xlabel('X Axis')\nplt.ylabel('Y Axis')\nplt.show()` ,
        description: "Add titles, labels, and customize colors and markers.",
      },
    ],
  },
  {
    title: "Bar and Scatter Plots",
    content:
      "Matplotlib supports various plot types, including bar and scatter plots for different data visualization needs.",
    examples: [
      {
        code: `import matplotlib.pyplot as plt\n# Bar plot\nplt.bar(['A', 'B', 'C'], [5, 7, 3])\nplt.show()\n\n# Scatter plot\nplt.scatter([1, 2, 3], [4, 5, 6])\nplt.show()` ,
        description: "Create bar and scatter plots.",
      },
    ],
  },
];

export default function MatplotlibTutorial() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isCompilerOpen, setIsCompilerOpen] = useState(false);
  const [currentCode, setCurrentCode] = useState("");
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [chartImage, setChartImage] = useState<string | null>(null);

  const openCompiler = (code: string) => {
    setCurrentCode(code);
    setConsoleOutput([]);
    setChartImage(null);
    setIsCompilerOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeCompiler = () => {
    setIsCompilerOpen(false);
    document.body.style.overflow = 'unset';
  };

  const runCode = async () => {
    setConsoleOutput(['⏳ Loading Python environment with Matplotlib...']);
    
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

      // Load Matplotlib and NumPy packages
      await pyodide.loadPackage(['matplotlib', 'numpy']);

      const output: string[] = [];
      
      // Setup matplotlib for web
      pyodide.runPython(`
import sys
from io import StringIO, BytesIO
import base64
sys.stdout = StringIO()

import matplotlib
matplotlib.use('AGG')
import matplotlib.pyplot as plt
      `);

      // Run user code
      await pyodide.runPythonAsync(currentCode);
      
      // Get console output
      const result = pyodide.runPython('sys.stdout.getvalue()');
      if (result) {
        output.push(...result.split('\n').filter(line => line.trim()));
      }

      // Try to capture the plot
      try {
        const imageData = pyodide.runPython(`
buf = BytesIO()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_str = base64.b64encode(buf.read()).decode('utf-8')
plt.close('all')
img_str
        `);
        
        if (imageData) {
          setChartImage(`data:image/png;base64,${imageData}`);
          output.push('✅ Code executed successfully');
          output.push('📊 Chart displayed below');
        }
      } catch {
        output.push('✅ Code executed successfully');
        output.push('ℹ️ No plot to display');
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
        <h1 className="text-4xl font-bold text-[#000000] mb-6">Matplotlib Tutorial</h1>
        <p className="text-gray-600 text-lg mb-8">
          Learn Matplotlib for data visualization in Python with hands-on examples and clear explanations.
        </p>

        {/* Video Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">Video Tutorial</h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/kM_eVEEWfnE?si=4wg5hC7kmtKHENPw"
              title="Matplotlib Tutorial for Beginners"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-sm"
            ></iframe>
          </div>
        </div>

        <div className="space-y-8">
          {matplotlibTutorials.map((tutorial, index) => (
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
              <h3 className="text-xl font-semibold text-[#000000]">Matplotlib Compiler</h3>
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
                  <span className="text-sm font-medium text-gray-700">Matplotlib Code</span>
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
                    <>
                      {consoleOutput.map((line, idx) => (
                        <div key={idx} className="text-green-400 font-mono text-sm mb-1">
                          {line}
                        </div>
                      ))}
                      {chartImage && (
                        <div className="mt-4 bg-white p-4 rounded">
                          <h4 className="text-sm font-semibold text-gray-800 mb-2">
                            📊 Matplotlib Visualization
                          </h4>
                          <img 
                            src={chartImage} 
                            alt="Matplotlib Chart" 
                            className="max-w-full h-auto border border-gray-300 rounded"
                          />
                        </div>
                      )}
                    </>
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