"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, X, Play } from "lucide-react";
import Link from "next/link";

const ExpressTutorial = () => {
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
      title: "Introduction to Express.js Concepts",
      content:
        "Express.js is a minimal and flexible Node.js web application framework. Let's explore core JavaScript concepts used in Express applications.",
      examples: [
        {
          displayCode: `// Express.js route handler
const express = require('express');
const app = express();

// Route handler function
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
          executableCode: `// Simulating Express.js route handler concept
console.log('=== Express.js Route Handler Simulation ===');

// Mock request and response objects
const mockRequest = {
  method: 'GET',
  url: '/',
  params: {},
  query: {}
};

const mockResponse = {
  statusCode: 200,
  body: '',
  send: function(data) {
    this.body = data;
    console.log('Response sent:', data);
    return this;
  },
  json: function(data) {
    this.body = JSON.stringify(data);
    console.log('JSON Response:', this.body);
    return this;
  }
};

// Route handler function
function handleGetRequest(req, res) {
  console.log(\`Handling \${req.method} request to \${req.url}\`);
  res.send('Hello from Express!');
}

// Execute the handler
handleGetRequest(mockRequest, mockResponse);
console.log('Status Code:', mockResponse.statusCode);`,
          description: "Understanding Express.js route handler concepts with simulation",
        },
      ],
    },
    {
      title: "Express.js Routing Patterns",
      content:
        "Routing determines how your application responds to client requests. Let's simulate routing logic.",
      examples: [
        {
          displayCode: `// Express.js Routing
const express = require('express');
const app = express();

// Mock users database
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
];

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// POST create user
app.post('/users', (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(3000);`,
          executableCode: `// Simulating Express.js routing
console.log('=== Express.js Routing Simulation ===');

// Mock users database
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
];

// Route: GET /users
function getAllUsers() {
  console.log('GET /users');
  console.log('Returning all users:', JSON.stringify(users, null, 2));
  return users;
}

// Route: GET /users/:id
function getUserById(id) {
  console.log(\`GET /users/\${id}\`);
  const user = users.find(u => u.id === parseInt(id));
  if (user) {
    console.log('User found:', JSON.stringify(user, null, 2));
  } else {
    console.log('User not found');
  }
  return user;
}

// Route: POST /users
function createUser(newUser) {
  console.log('POST /users');
  const user = { id: users.length + 1, ...newUser };
  users.push(user);
  console.log('User created:', JSON.stringify(user, null, 2));
  return user;
}

// Test the routes
getAllUsers();
console.log('---');
getUserById(2);
console.log('---');
createUser({ name: 'Alice Brown', email: 'alice@example.com' });`,
          description: "Simulating different route handlers and HTTP methods",
        },
      ],
    },
    {
      title: "Middleware Concept",
      content:
        "Middleware functions process requests before they reach route handlers. Let's understand the middleware chain.",
      examples: [
        {
          displayCode: `// Express.js Middleware
const express = require('express');
const app = express();

// Middleware 1: Logger
app.use((req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  req.timestamp = Date.now();
  next();
});

// Middleware 2: Authentication
const authMiddleware = (req, res, next) => {
  // Check authentication
  req.authenticated = true;
  next();
};

app.use(authMiddleware);

// Middleware 3: Body Parser
app.use(express.json());

// Route handler
app.post('/api/users', (req, res) => {
  const timeTaken = Date.now() - req.timestamp;
  res.json({
    message: 'Request processed',
    timeTaken,
    authenticated: req.authenticated,
    data: req.body
  });
});

app.listen(3000);`,
          executableCode: `// Simulating Express.js middleware chain
console.log('=== Middleware Chain Simulation ===');

// Mock request object
const request = {
  method: 'POST',
  url: '/api/users',
  body: { name: 'John', age: 30 },
  timestamp: null,
  authenticated: false
};

// Middleware 1: Logger
function loggerMiddleware(req, next) {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  req.timestamp = Date.now();
  next();
}

// Middleware 2: Authentication
function authMiddleware(req, next) {
  console.log('Checking authentication...');
  req.authenticated = true;
  console.log('User authenticated');
  next();
}

// Middleware 3: Body Parser
function bodyParserMiddleware(req, next) {
  console.log('Parsing request body...');
  console.log('Body:', JSON.stringify(req.body, null, 2));
  next();
}

// Final route handler
function routeHandler(req) {
  console.log('\\n=== Route Handler ===');
  console.log('Request processed successfully');
  console.log('Time taken:', Date.now() - req.timestamp, 'ms');
  console.log('Authenticated:', req.authenticated);
  console.log('Data:', req.body);
}

// Execute middleware chain
console.log('Starting request processing...\\n');
loggerMiddleware(request, () => {
  authMiddleware(request, () => {
    bodyParserMiddleware(request, () => {
      routeHandler(request);
    });
  });
});`,
          description: "Understanding middleware chain execution order",
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
          Express.js Tutorial
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Master Express.js fundamentals with our comprehensive tutorial. Learn
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
              src="https://www.youtube.com/embed/pKJ4GGyDgJo?si=phLs_l0fhjMtMvvX"
              title="Express.js Tutorial for Beginners"
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
              <h3 className="text-xl font-semibold text-[#000000]">Express.js Compiler</h3>
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
                  <span className="text-sm font-medium text-gray-700">Express.js Code</span>
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

export default ExpressTutorial;