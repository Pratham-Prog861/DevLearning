"use client";
import React, { useState } from "react";
import { X, Play } from "lucide-react";

interface PythonCompilerProps {
  isOpen: boolean;
  onClose: () => void;
  initialCode: string;
  packages?: string[];
}

export const PythonCompiler: React.FC<PythonCompilerProps> = ({
  isOpen,
  onClose,
  initialCode,
  packages = [],
}) => {
  const [currentCode, setCurrentCode] = useState(initialCode);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  React.useEffect(() => {
    setCurrentCode(initialCode);
    setConsoleOutput([]);
  }, [initialCode]);

  const runCode = async () => {
    setConsoleOutput(["⏳ Loading Python environment..."]);

    try {
      interface PyodideInterface {
        runPython: (code: string) => string;
        runPythonAsync: (code: string) => Promise<void>;
        loadPackage: (packages: string | string[]) => Promise<void>;
      }

      const win = window as Window & {
        pyodide?: PyodideInterface;
        loadPyodide?: () => Promise<PyodideInterface>;
      };

      if (!win.pyodide) {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js";
        document.head.appendChild(script);

        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
        });

        win.pyodide = await win.loadPyodide?.();
      }

      const pyodide = win.pyodide;
      if (!pyodide) {
        setConsoleOutput(["Error: Failed to load Python environment"]);
        return;
      }

      // Load required packages
      if (packages.length > 0) {
        try {
          setConsoleOutput(["⏳ Loading packages..."]);
          await pyodide.loadPackage(packages);
        } catch (e) {
          // Package might already be loaded
        }
      }

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
      const result = pyodide.runPython("sys.stdout.getvalue()");

      if (result) {
        output.push(...result.split("\n"));
      } else {
        output.push("Code executed successfully (no output)");
      }

      setConsoleOutput(output);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      setConsoleOutput([`Error: ${errorMessage}`]);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-hidden"
      onWheel={(e) => e.stopPropagation()}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-sm w-full max-w-6xl h-[80vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-[#000000]">
            Python Compiler
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-sm transition-colors"
          >
            <X className="text-black" size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Editor */}
          <div className="flex-1 flex flex-col border-r border-gray-200">
            <div className="flex items-center justify-between p-3 bg-gray-50 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-700">
                Python Code
              </span>
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

          {/* Output */}
          <div className="flex-1 flex flex-col">
            <div className="p-3 bg-gray-50 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-700">Output</span>
            </div>
            <div className="flex-1 overflow-auto bg-gray-900 p-4">
              {consoleOutput.length > 0 ? (
                consoleOutput.map((line, idx) => (
                  <div
                    key={idx}
                    className="text-green-400 font-mono text-sm mb-1"
                  >
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
  );
};
