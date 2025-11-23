"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, Brain } from "lucide-react";
import Link from "next/link";
import { PythonCompiler } from "@/components/PythonCompiler";

const MachineLearningTutorial = () => {
  const [isCompilerOpen, setIsCompilerOpen] = useState(false);
  const [compilerCode, setCompilerCode] = useState("");

  const openCompiler = (code: string) => {
    setCompilerCode(code);
    setIsCompilerOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeCompiler = () => {
    setIsCompilerOpen(false);
    document.body.style.overflow = "unset";
  };

  const tutorials = [
    {
      title: "Introduction to Machine Learning",
      content:
        "Machine Learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. It focuses on developing computer programs that can access data and use it to learn for themselves.",
      examples: [
        {
          code: `# Simple example
print("Machine Learning Types:")
print("1. Supervised Learning")
print("2. Unsupervised Learning")
print("3. Reinforcement Learning")`,
          description: "Three main types of machine learning approaches",
        },
      ],
    },
    {
      title: "Setting Up Your ML Environment",
      content:
        "Before starting with machine learning, you need to set up your development environment with essential libraries.",
      examples: [
        {
          code: `# Import commonly used ML libraries
import numpy as np
print(f"NumPy version: {np.__version__}")
print("NumPy imported successfully!")`,
          description: "Import commonly used ML libraries",
        },
      ],
    },
    {
      title: "Working with NumPy Arrays",
      content:
        "NumPy is the foundation for numerical computing in Python and machine learning.",
      examples: [
        {
          code: `import numpy as np

# Create arrays
arr = np.array([1, 2, 3, 4, 5])
matrix = np.array([[1, 2], [3, 4]])

print("Array:", arr)
print("Matrix:\\n", matrix)
print("Array mean:", arr.mean())
print("Matrix shape:", matrix.shape)`,
          description: "Basic NumPy array operations",
        },
      ],
    },
    {
      title: "Simple Linear Regression Example",
      content:
        "Linear regression is a fundamental supervised learning algorithm.",
      examples: [
        {
          code: `import numpy as np

# Simple dataset
X = np.array([1, 2, 3, 4, 5])
y = np.array([2, 4, 5, 4, 5])

# Calculate slope and intercept manually
mean_x = np.mean(X)
mean_y = np.mean(Y)
slope = np.sum((X - mean_x) * (y - mean_y)) / np.sum((X - mean_x)**2)
intercept = mean_y - slope * mean_x

print(f"Slope: {slope:.2f}")
print(f"Intercept: {intercept:.2f}")
print(f"Equation: y = {slope:.2f}x + {intercept:.2f}")`,
          description: "Simple linear regression calculation",
        },
      ],
    },
    {
      title: "Data Preprocessing Example",
      content: "Learn basic data preprocessing techniques.",
      examples: [
        {
          code: `import numpy as np

# Sample data with missing values
data = np.array([1.0, 2.0, np.nan, 4.0, 5.0])
print("Original data:", data)

# Handle missing values (replace with mean)
mean_value = np.nanmean(data)
data_clean = np.where(np.isnan(data), mean_value, data)
print("Cleaned data:", data_clean)

# Normalize data (0-1 scale)
data_normalized = (data_clean - data_clean.min()) / (data_clean.max() - data_clean.min())
print("Normalized:", data_normalized)`,
          description: "Basic data cleaning and normalization",
        },
      ],
    },
  ];

  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const copyToClipboard = (text: string, idx: string) => {
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
          href="/aiml"
          className="inline-flex items-center px-4 py-2 text-[#A435F0] hover:text-white border-2 border-[#A435F0] hover:bg-[#A435F0] rounded-sm transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:translate-x-[-2px] transition-transform" />
          Back to AI/ML
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <Brain className="w-10 h-10 text-[#A435F0]" />
          <h1 className="text-4xl font-bold text-[#000000]">
            Machine Learning Basics
          </h1>
        </div>
        <p className="text-gray-600 text-lg mb-8">
          Master the fundamentals of machine learning with our comprehensive
          tutorial. Learn supervised and unsupervised learning, data
          preprocessing, and model evaluation.
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
              src="https://www.youtube.com/embed/ukzFI9rgwfU"
              title="Machine Learning Tutorial for Beginners"
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
                <div className="space-y-4">
                  {tutorial.examples.map((example, idx) => {
                    const uniqueId = `${index}-${idx}`;
                    return (
                      <div key={idx} className="space-y-2">
                        <div className="relative">
                          <pre className="bg-gray-100 p-3 rounded-sm overflow-x-auto">
                            <code className="text-[#A435F0]">
                              {example.code}
                            </code>
                          </pre>
                          <button
                            onClick={() =>
                              copyToClipboard(example.code, uniqueId)
                            }
                            className="absolute top-2 right-2 p-2 rounded-sm bg-gray-200/50 backdrop-blur-sm text-gray-600 hover:bg-[#A435F0]/20 hover:text-[#A435F0] transition-all duration-300 transform active:scale-95"
                            title="Copy to clipboard"
                          >
                            {copiedIndex === uniqueId ? (
                              <Check
                                size={16}
                                className="text-green-400 animate-in fade-in duration-300"
                              />
                            ) : (
                              <Copy size={16} />
                            )}
                          </button>
                        </div>
                        <p className="text-gray-600 text-sm whitespace-pre-line pl-2 border-l-2 border-[#A435F0]">
                          {example.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Try it Yourself Button */}
              <button
                onClick={() => openCompiler(tutorial.examples[0].code)}
                className="mt-6 px-4 py-2 border-2 border-[#A435F0] text-[#A435F0] hover:bg-[#A435F0] hover:text-white transition-colors duration-300 rounded-sm"
              >
                Try it Yourself
              </button>
            </div>
          ))}
        </div>

        {/* Quick Reference Card */}
        <div className="mt-12 bg-gradient-to-br from-[#A435F0]/5 to-[#A435F0]/10 border border-[#A435F0]/20 rounded-sm p-6">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4 flex items-center gap-2">
            <Brain className="w-6 h-6 text-[#A435F0]" />
            Quick Reference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                Essential Libraries
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    scikit-learn
                  </code>{" "}
                  - ML algorithms
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">pandas</code> -
                  Data manipulation
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">numpy</code> -
                  Numerical computing
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    matplotlib
                  </code>{" "}
                  - Visualization
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                Best Practices
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Always split data into train/test sets</li>
                <li>✓ Scale features before training</li>
                <li>✓ Use cross-validation for evaluation</li>
                <li>✓ Avoid overfitting with regularization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Python Compiler Modal */}
      <PythonCompiler
        isOpen={isCompilerOpen}
        onClose={closeCompiler}
        initialCode={compilerCode}
        packages={["numpy", "scikit-learn"]}
      />
    </div>
  );
};

export default MachineLearningTutorial;
