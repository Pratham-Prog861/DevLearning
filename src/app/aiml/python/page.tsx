"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, Code2 } from "lucide-react";
import Link from "next/link";
import { PythonCompiler } from "@/components/PythonCompiler";

const PythonAIMLTutorial = () => {
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
      title: "Why Python for AI/ML?",
      content:
        "Python is the most popular language for AI and Machine Learning due to its simplicity, extensive libraries, and strong community support. It offers powerful frameworks like NumPy, Pandas, TensorFlow, and PyTorch.",
      examples: [
        {
          code: `# Python advantages for AI/ML:
- Simple and readable syntax
- Rich ecosystem of ML libraries
- Strong community and resources
- Excellent for prototyping
- Cross-platform compatibility`,
          description: "Key reasons Python dominates AI/ML development",
        },
      ],
    },
    {
      title: "Python Basics for AI/ML",
      content:
        "Understanding Python fundamentals is essential before diving into AI/ML. Let's cover the core concepts you'll use frequently.",
      examples: [
        {
          code: `# Variables and data types
name = "AI Model"
accuracy = 0.95
is_trained = True
layers = [128, 64, 32]

# Print information
print(f"Model: {name}, Accuracy: {accuracy * 100}%")`,
          description: "Basic Python variables and string formatting",
        },
        {
          code: `# Lists and list comprehension
numbers = [1, 2, 3, 4, 5]
squared = [x**2 for x in numbers]
print(squared)  # [1, 4, 9, 16, 25]

# Dictionary for storing model config
config = {
    'learning_rate': 0.001,
    'epochs': 100,
    'batch_size': 32
}`,
          description: "Lists, comprehensions, and dictionaries",
        },
      ],
    },
    {
      title: "NumPy for Numerical Computing",
      content:
        "NumPy is the foundation of numerical computing in Python. It provides efficient array operations essential for ML.",
      examples: [
        {
          code: `import numpy as np

# Create arrays
arr = np.array([1, 2, 3, 4, 5])
matrix = np.array([[1, 2], [3, 4], [5, 6]])

# Array operations
print(arr * 2)  # [2, 4, 6, 8, 10]
print(arr.mean())  # 3.0
print(matrix.shape)  # (3, 2)`,
          description: "Creating and manipulating NumPy arrays",
        },
        {
          code: `# Matrix operations
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# Matrix multiplication
C = np.dot(A, B)
print(C)

# Element-wise operations
D = A + B
print(D)`,
          description: "Matrix operations crucial for neural networks",
        },
        {
          code: `# Generate random data (useful for testing)
random_data = np.random.randn(100, 5)  # 100 samples, 5 features
random_labels = np.random.randint(0, 2, 100)  # Binary labels

print(f"Data shape: {random_data.shape}")
print(f"Labels shape: {random_labels.shape}")`,
          description: "Generate random data for testing ML models",
        },
      ],
    },
    {
      title: "Pandas for Data Manipulation",
      content:
        "Pandas is essential for data manipulation and analysis. It provides DataFrames, which are perfect for handling structured data.",
      examples: [
        {
          code: `import pandas as pd

# Create DataFrame
data = {
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35],
    'score': [85, 90, 95]
}
df = pd.DataFrame(data)
print(df)`,
          description: "Creating a Pandas DataFrame",
        },
        {
          code: `# Read CSV file
df = pd.read_csv('data.csv')

# Basic exploration
print(df.head())  # First 5 rows
print(df.info())  # Data types and null counts
print(df.describe())  # Statistical summary

# Select columns
ages = df['age']
subset = df[['name', 'score']]`,
          description: "Loading and exploring data with Pandas",
        },
        {
          code: `# Data filtering and manipulation
high_scorers = df[df['score'] > 90]

# Group by and aggregate
avg_by_category = df.groupby('category')['score'].mean()

# Handle missing values
df.fillna(0, inplace=True)
df.dropna(inplace=True)`,
          description: "Filtering, grouping, and handling missing data",
        },
      ],
    },
    {
      title: "Matplotlib for Visualization",
      content:
        "Visualization is crucial for understanding data and model performance. Matplotlib is the go-to library for creating plots.",
      examples: [
        {
          code: `import matplotlib.pyplot as plt
import numpy as np

# Line plot
x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.figure(figsize=(10, 6))
plt.plot(x, y, label='sin(x)')
plt.xlabel('X axis')
plt.ylabel('Y axis')
plt.title('Sine Wave')
plt.legend()
plt.grid(True)
plt.show()`,
          description: "Creating a basic line plot",
        },
        {
          code: `# Scatter plot for data visualization
plt.figure(figsize=(8, 6))
plt.scatter(df['feature1'], df['feature2'], 
            c=df['label'], cmap='viridis', alpha=0.6)
plt.xlabel('Feature 1')
plt.ylabel('Feature 2')
plt.title('Feature Relationship')
plt.colorbar(label='Class')
plt.show()`,
          description: "Scatter plot for visualizing feature relationships",
        },
      ],
    },
    {
      title: "Functions and Classes",
      content:
        "Writing reusable code with functions and classes is essential for building scalable ML projects.",
      examples: [
        {
          code: `# Function for data preprocessing
def preprocess_data(data, scale=True):
    """Preprocess input data"""
    # Remove missing values
    data = data.dropna()
    
    if scale:
        from sklearn.preprocessing import StandardScaler
        scaler = StandardScaler()
        data = scaler.fit_transform(data)
    
    return data

# Use the function
clean_data = preprocess_data(raw_data, scale=True)`,
          description: "Creating reusable preprocessing function",
        },
        {
          code: `# Class for ML model wrapper
class MLModel:
    def __init__(self, model_type='linear'):
        self.model_type = model_type
        self.model = None
        self.is_trained = False
    
    def train(self, X, y):
        """Train the model"""
        from sklearn.linear_model import LinearRegression
        self.model = LinearRegression()
        self.model.fit(X, y)
        self.is_trained = True
    
    def predict(self, X):
        """Make predictions"""
        if not self.is_trained:
            raise ValueError("Model not trained yet!")
        return self.model.predict(X)

# Usage
ml_model = MLModel()
ml_model.train(X_train, y_train)
predictions = ml_model.predict(X_test)`,
          description: "Creating a class to encapsulate ML model logic",
        },
      ],
    },
    {
      title: "File I/O and Data Loading",
      content:
        "Loading and saving data is a fundamental skill. Python provides multiple ways to work with different file formats.",
      examples: [
        {
          code: `import pandas as pd
import pickle

# Read CSV
df = pd.read_csv('data.csv')

# Read Excel
df = pd.read_excel('data.xlsx')

# Read JSON
df = pd.read_json('data.json')

# Save DataFrame
df.to_csv('output.csv', index=False)`,
          description: "Reading and writing various data formats",
        },
        {
          code: `# Save Python objects with pickle
import pickle

# Save model
with open('model.pkl', 'wb') as f:
    pickle.dump(model, f)

# Load model
with open('model.pkl', 'rb') as f:
    loaded_model = pickle.load(f)`,
          description: "Saving and loading Python objects",
        },
      ],
    },
    {
      title: "Virtual Environments and Package Management",
      content:
        "Managing dependencies and creating isolated environments is crucial for reproducible ML projects.",
      examples: [
        {
          code: `# Create virtual environment
python -m venv ml_env

# Activate (Windows)
ml_env\\Scripts\\activate

# Activate (Mac/Linux)
source ml_env/bin/activate`,
          description: "Creating and activating virtual environment",
        },
        {
          code: `# Install packages
pip install numpy pandas scikit-learn matplotlib

# Save dependencies
pip freeze > requirements.txt

# Install from requirements
pip install -r requirements.txt`,
          description: "Managing project dependencies",
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
          <Code2 className="w-10 h-10 text-[#A435F0]" />
          <h1 className="text-4xl font-bold text-[#000000]">
            Python for AI/ML
          </h1>
        </div>
        <p className="text-gray-600 text-lg mb-8">
          Master Python programming for AI and Machine Learning. Learn NumPy,
          Pandas, Matplotlib, and essential Python concepts for building ML
          applications.
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
              src="https://www.youtube.com/embed/ie4oGI85SAE?si=_XHGOGblhAWx4cGg"
              title="Python for Machine Learning"
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
            <Code2 className="w-6 h-6 text-[#A435F0]" />
            Quick Reference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                Essential Libraries
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">numpy</code> -
                  Numerical computing
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">pandas</code> -
                  Data manipulation
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    matplotlib
                  </code>{" "}
                  - Data visualization
                </li>
                <li>
                  <code className="bg-white px-2 py-0.5 rounded">
                    scikit-learn
                  </code>{" "}
                  - ML algorithms
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#A435F0] mb-2">
                Best Practices
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Use virtual environments</li>
                <li>✓ Write modular, reusable code</li>
                <li>✓ Document your functions</li>
                <li>✓ Follow PEP 8 style guide</li>
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
        packages={["numpy", "pandas"]}
      />
    </div>
  );
};

export default PythonAIMLTutorial;
