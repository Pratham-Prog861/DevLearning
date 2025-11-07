"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, X, Play } from "lucide-react";
import Link from "next/link";

const Page = () => {
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

  interface Step {
    title: string;
    command?: string;
    code?: string;
    structure?: string;
    description: string;
  }

  interface Example {
    displayCode: string;
    executableCode: string;
    description: string;
  }

  interface Tutorial {
    title: string;
    content: string;
    isGuide?: boolean;
    steps?: Step[];
    examples?: Example[];
  }

  const tutorials: Tutorial[] = [
    {
      title: "Project Initialization & Package Management",
      content:
        "Learn how to initialize a Node.js project, manage dependencies, and configure package.json for modern JavaScript (ES Modules).",
      isGuide: true,
      steps: [
        {
          title: "Step 1: Initialize Node.js Project",
          command: "npm init -y",
          description: "Creates a package.json file with default values",
        },
        {
          title: "Step 2: package.json Configuration",
          code: `{
  "name": "backend-project",
  "version": "1.0.0",
  "description": "Complete backend application",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "keywords": ["backend", "express", "mongodb"],
  "author": "Your Name",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.0.0",
    "dotenv": "^16.0.3",
    "cors": "^2.8.5",
    "jsonwebtoken": "^9.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}`,
          description: '✓ "type": "module" enables ES6 import/export syntax',
        },
        {
          title: "Step 3: Install Dependencies",
          command: "npm install express mongoose dotenv cors jsonwebtoken",
          description: "Installs packages and creates node_modules folder and package-lock.json",
        },
        {
          title: "Step 4: Install Dev Dependencies",
          command: "npm install --save-dev nodemon",
          description: "Nodemon auto-restarts server on file changes during development",
        },
        {
          title: "Step 5: Recommended Project Structure",
          structure: `backend-project/
├── node_modules/
├── models/
│   └── User.js
├── routes/
│   └── userRoutes.js
├── middleware/
│   └── auth.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js`,
          description: "Organized folder structure for scalable backend applications",
        },
      ],
    },
    {
      title: "Fetching Data from Real API - GET Request",
      content:
        "Learn how to make GET requests to a real API and handle responses. We'll use the FreeAPI service to fetch user data.",
      examples: [
        {
          displayCode: `// Fetching data from API
const url = 'https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json'
  }
};

async function fetchUsers() {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

fetchUsers();`,
          executableCode: `// API Request Structure for FreeAPI Random Users
console.log('=== API Request Example ===\\n');

// API Endpoint Configuration
const url = 'https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json'
  }
};

console.log('API URL:', url);
console.log('Method:', options.method);
console.log('Headers:', JSON.stringify(options.headers, null, 2));
console.log('\\n--- Simulated API Response ---\\n');

// Simulated response (what you would get from the actual API)
const mockResponse = {
  success: true,
  message: 'Random users fetched successfully',
  data: {
    page: 1,
    limit: 10,
    totalPages: 100,
    data: [
      {
        name: { title: 'Mr', first: 'John', last: 'Doe' },
        email: 'john.doe@example.com',
        gender: 'male',
        location: { country: 'United States', city: 'New York' },
        phone: '(555) 123-4567'
      },
      {
        name: { title: 'Ms', first: 'Jane', last: 'Smith' },
        email: 'jane.smith@example.com',
        gender: 'female',
        location: { country: 'Canada', city: 'Toronto' },
        phone: '(555) 987-6543'
      },
      {
        name: { title: 'Dr', first: 'Alice', last: 'Johnson' },
        email: 'alice.j@example.com',
        gender: 'female',
        location: { country: 'United Kingdom', city: 'London' },
        phone: '(555) 456-7890'
      }
    ]
  }
};

// Processing the response
console.log('Status: 200 OK');
console.log('Success:', mockResponse.success);
console.log('Message:', mockResponse.message);
console.log('\\nTotal Users:', mockResponse.data.data.length);
console.log('Page:', mockResponse.data.page);
console.log('Limit:', mockResponse.data.limit);
console.log('\\nUser Data:\\n');

mockResponse.data.data.forEach((user, index) => {
  console.log(\`User \${index + 1}:\`);
  console.log('  Name:', \`\${user.name.title} \${user.name.first} \${user.name.last}\`);
  console.log('  Email:', user.email);
  console.log('  Gender:', user.gender);
  console.log('  Country:', user.location.country);
  console.log('  City:', user.location.city);
  console.log('  Phone:', user.phone);
  console.log('');
});

console.log('✓ This shows the structure of data from FreeAPI!');
console.log('\\n💡 To use this in your project:');
console.log('   const response = await fetch(url, options);');
console.log('   const data = await response.json();');`,
          description: "Understanding API request structure and response format from FreeAPI random users endpoint",
        },
      ],
    },
    {
      title: "Fetching Random Products - API with Pagination",
      content:
        "Learn how to fetch products from an API with pagination parameters and handle the response data structure.",
      examples: [
        {
          displayCode: `// Fetching products from API
const url = 'https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&query=mens-watches';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json'
  }
};

async function fetchProducts() {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

fetchProducts();`,
          executableCode: `// API Request for FreeAPI Random Products
console.log('=== Products API Example ===\\n');

const url = 'https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid&query=mens-watches';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json'
  }
};

console.log('API URL:', url);
console.log('Query Parameters:');
console.log('  - page: 1');
console.log('  - limit: 10');
console.log('  - query: mens-watches');
console.log('\\n--- Simulated API Response ---\\n');

// Simulated product response
const mockResponse = {
  success: true,
  message: 'Random products fetched successfully',
  data: {
    page: 1,
    limit: 10,
    totalPages: 50,
    data: [
      {
        id: 101,
        title: 'Luxury Chronograph Watch',
        category: 'mens-watches',
        price: 299.99,
        thumbnail: 'https://example.com/watch1.jpg'
      },
      {
        id: 102,
        title: 'Sport Digital Watch',
        category: 'mens-watches',
        price: 149.99,
        thumbnail: 'https://example.com/watch2.jpg'
      },
      {
        id: 103,
        title: 'Classic Leather Watch',
        category: 'mens-watches',
        price: 199.99,
        thumbnail: 'https://example.com/watch3.jpg'
      }
    ]
  }
};

console.log('Status: 200 OK');
console.log('Success:', mockResponse.success);
console.log('Message:', mockResponse.message);
console.log('\\nTotal Products:', mockResponse.data.data.length);
console.log('Page:', mockResponse.data.page);
console.log('Limit:', mockResponse.data.limit);
console.log('\\nProduct Data:\\n');

mockResponse.data.data.forEach((product, index) => {
  console.log(\`Product \${index + 1}:\`);
  console.log('  ID:', product.id);
  console.log('  Title:', product.title);
  console.log('  Category:', product.category);
  console.log('  Price: $' + product.price);
  console.log('  Thumbnail:', product.thumbnail);
  console.log('');
});

console.log('✓ Products API with query parameters and pagination!');`,
          description: "Understanding products API with query parameters and pagination from FreeAPI",
        },
      ],
    },
    {
      title: "Creating Your Own Simple API",
      content:
        "Learn how to create a basic REST API with Express.js. This example shows the fundamental concepts of building API endpoints.",
      examples: [
        {
          displayCode: `// Creating a Simple REST API with Express
const express = require('express');
const app = express();

app.use(express.json());

// In-memory database
const books = [
  { id: 1, title: 'JavaScript Basics', author: 'John Doe', year: 2020 },
  { id: 2, title: 'Node.js Guide', author: 'Jane Smith', year: 2021 },
  { id: 3, title: 'React Mastery', author: 'Bob Johnson', year: 2022 }
];

// GET all books
app.get('/api/books', (req, res) => {
  res.json({ success: true, data: books });
});

// GET single book
app.get('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  res.json({ success: true, data: book });
});

// POST new book
app.post('/api/books', (req, res) => {
  const newBook = { id: books.length + 1, ...req.body };
  books.push(newBook);
  res.status(201).json({ success: true, message: 'Book created', data: newBook });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
          executableCode: `// Creating a Simple REST API with Express
console.log('=== Building Your First API ===\\n');

// Step 1: Setup
console.log('Step 1: Initialize Express');
console.log('const express = require("express");');
console.log('const app = express();\\n');

// Step 2: Data Store
console.log('Step 2: Create Data Store');
const books = [
  { id: 1, title: 'JS Basics', author: 'John' },
  { id: 2, title: 'Node Guide', author: 'Jane' },
  { id: 3, title: 'React Pro', author: 'Bob' }
];
console.log('Books:', books.length, 'items\\n');

// Step 3: API Routes
console.log('Step 3: Define Routes\\n');

// GET all books
console.log('GET /api/books');
console.log('Response:', JSON.stringify({ success: true, count: books.length }));
console.log('');

// GET single book
console.log('GET /api/books/2');
const book = books.find(b => b.id === 2);
console.log('Response:', JSON.stringify({ success: true, data: book }));
console.log('');

// POST new book
console.log('POST /api/books');
const newBook = { id: 4, title: 'Express Pro', author: 'Alice' };
books.push(newBook);
console.log('Body: { title: "Express Pro", author: "Alice" }');
console.log('Response:', JSON.stringify({ success: true, message: 'Created', id: 4 }));
console.log('');

// PUT update book
console.log('PUT /api/books/2');
books[1].title = 'Node.js Advanced';
console.log('Body: { title: "Node.js Advanced" }');
console.log('Response:', JSON.stringify({ success: true, message: 'Updated' }));
console.log('');

// DELETE book
console.log('DELETE /api/books/1');
const index = books.findIndex(b => b.id === 1);
books.splice(index, 1);
console.log('Response:', JSON.stringify({ success: true, message: 'Deleted' }));
console.log('');

console.log('Final Books Count:', books.length);
console.log('\\n✓ API Complete!');
console.log('\\n💡 Endpoints:');
console.log('GET    /api/books');
console.log('GET    /api/books/:id');
console.log('POST   /api/books');
console.log('PUT    /api/books/:id');
console.log('DELETE /api/books/:id');`,
          description: "Step-by-step guide to creating a simple REST API with Express.js",
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
          Complete Backend Development Tutorial
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Master backend development with our comprehensive guide covering Node.js, Express.js, and MongoDB.
          Learn through practical examples and build production-ready applications.
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
              src="https://www.youtube.com/embed/7fjOw8ApZ1I?si=JQqUXYXqGAZ43Shr"
              title="Complete Backend Development Tutorial"
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
              src="https://www.youtube.com/embed/8k-kK3tsJFY?si=0rMYSJKsYZesqZiD"
              title="Complete Backend Development Tutorial"
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

              {tutorial.isGuide ? (
                <div className="space-y-6">
                  {tutorial.steps?.map((step, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-[#A435F0] p-4 rounded-r">
                      <h4 className="font-semibold text-gray-800 mb-2">{step.title}</h4>
                      {step.command && (
                        <div className="relative">
                          <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm mb-2">
                            $ {step.command}
                          </div>
                          <button
                            onClick={() => copyToClipboard(step.command || '', idx)}
                            className="absolute top-2 right-2 p-1.5 rounded bg-gray-100 text-gray-300 hover:bg-[#A435F0] hover:text-white transition-all duration-300 transform active:scale-95"
                            title="Copy command"
                          >
                            {copiedIndex === idx ? (
                              <Check size={14} className="text-green-400" />
                            ) : (
                              <Copy className="text-gray-800" size={14} />
                            )}
                          </button>
                        </div>
                      )}
                      {step.code && (
                        <pre className="bg-gray-100 p-3 rounded overflow-x-auto mb-2">
                          <code className="text-sm text-gray-800">{step.code}</code>
                        </pre>
                      )}
                      {step.structure && (
                        <pre className="bg-gray-100 p-3 rounded overflow-x-auto mb-2">
                          <code className="text-sm text-gray-800">{step.structure}</code>
                        </pre>
                      )}
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="bg-gray-50 rounded-sm p-4">
                    <h3 className="text-lg font-medium text-[#000000] mb-3">
                      Examples:
                    </h3>
                    {tutorial.examples?.map((example, idx) => (
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

                  {tutorial.examples && tutorial.examples.length > 0 && (
                    <button 
                      onClick={() => openCompiler(tutorial.examples![0].displayCode, tutorial.examples![0].executableCode)}
                      className="mt-6 px-4 py-2 border-2 border-[#A435F0] text-[#A435F0] hover:bg-[#A435F0] hover:text-white transition-colors duration-300 rounded-sm"
                    >
                      Try it Yourself
                    </button>
                  )}
                </>
              )}
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
              <h3 className="text-xl font-semibold text-[#000000]">Backend Compiler</h3>
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
                  <span className="text-sm font-medium text-gray-700">Backend Code</span>
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
                    consoleOutput.map((line, idx) => {
                      // Enhanced color coding for better readability
                      let colorClass = 'text-gray-300';
                      
                      if (line.startsWith('===')) {
                        colorClass = 'text-cyan-400 font-bold text-base';
                      } else if (line.startsWith('---')) {
                        colorClass = 'text-yellow-400 font-semibold';
                      } else if (line.includes('API URL:') || line.includes('Method:') || line.includes('Headers:')) {
                        colorClass = 'text-blue-400';
                      } else if (line.includes('Status:') || line.includes('Success:') || line.includes('Message:')) {
                        colorClass = 'text-green-400 font-semibold';
                      } else if (line.includes('Total') || line.includes('Page:') || line.includes('Limit:')) {
                        colorClass = 'text-purple-400';
                      } else if (line.startsWith('User ') || line.startsWith('Product ') || line.startsWith('Joke ')) {
                        colorClass = 'text-yellow-300 font-semibold';
                      } else if (line.startsWith('  ')) {
                        colorClass = 'text-emerald-300';
                      } else if (line.startsWith('✓')) {
                        colorClass = 'text-green-400 font-semibold';
                      } else if (line.startsWith('💡')) {
                        colorClass = 'text-amber-400 font-semibold';
                      } else if (line.startsWith('Error') || line.includes('error')) {
                        colorClass = 'text-red-400 font-semibold';
                      } else if (line.includes('Query Parameters:')) {
                        colorClass = 'text-indigo-400 font-semibold';
                      } else if (line.startsWith('   ')) {
                        colorClass = 'text-gray-400 italic';
                      }
                      
                      return (
                        <div key={idx} className={`font-mono text-sm mb-1 ${colorClass} leading-relaxed`}>
                          {line || '\u00A0'}
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-gray-500 font-mono text-sm flex items-center gap-2">
                      <span className="animate-pulse">▶</span>
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

export default Page;