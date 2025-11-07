"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft, X, Play } from "lucide-react";
import Link from "next/link";

const MongoTutorial = () => {
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
      title: "MongoDB Document Structure",
      content:
        "MongoDB stores data in flexible, JSON-like documents. Let's understand the document structure and how data is organized.",
      examples: [
        {
          displayCode: `// MongoDB Document Structure
// A MongoDB document (similar to a row in SQL)
const userDocument = {
  _id: "507f1f77bcf86cd799439011",
  name: "John Doe",
  age: 30,
  email: "john@example.com",
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA"
  },
  hobbies: ["reading", "coding", "gaming"],
  createdAt: new Date("2024-01-15")
};

// Document Features:
// • _id: Unique identifier (auto-generated)
// • Nested objects: address field contains sub-document
// • Arrays: hobbies field stores multiple values
// • Flexible schema: No predefined structure needed`,
          executableCode: `// MongoDB Document Structure Simulation
console.log('=== MongoDB Document Example ===\\n');

const userDocument = {
  _id: "507f1f77bcf86cd799439011",
  name: "John Doe",
  age: 30,
  email: "john@example.com",
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA"
  },
  hobbies: ["reading", "coding", "gaming"],
  createdAt: new Date("2024-01-15")
};

console.log('User Document:');
console.log(JSON.stringify(userDocument, null, 2));
console.log('');
console.log('Document Features:');
console.log('• _id: Unique identifier (auto-generated)');
console.log('• Nested objects: address field contains sub-document');
console.log('• Arrays: hobbies field stores multiple values');
console.log('• Flexible schema: No predefined structure needed');
console.log('');
console.log('✓ MongoDB documents are flexible and schema-less!');`,
          description: "Understanding MongoDB document structure with nested objects and arrays",
        },
      ],
    },
    {
      title: "CRUD Operations in MongoDB",
      content:
        "Learn how to perform Create, Read, Update, and Delete operations in MongoDB. This simulation shows what happens when you execute these operations.",
      examples: [
        {
          displayCode: `// MongoDB CRUD Operations
import { MongoClient } from 'mongodb';

async function crudOperations() {
  const client = new MongoClient('mongodb://localhost:27017');
  await client.connect();
  const db = client.db('myDatabase');
  const collection = db.collection('users');

  // CREATE - insertOne()
  const newUser = {
    name: "John Doe",
    age: 30,
    email: "john@example.com"
  };
  await collection.insertOne(newUser);

  // READ - findOne()
  const foundUser = await collection.findOne({ name: "John Doe" });

  // UPDATE - updateOne()
  await collection.updateOne(
    { name: "John Doe" },
    { $set: { age: 31 } }
  );

  // DELETE - deleteOne()
  await collection.deleteOne({ name: "John Doe" });

  await client.close();
}

crudOperations();`,
          executableCode: `// MongoDB CRUD Operations Simulation
console.log('=== MongoDB CRUD Operations ===\\n');

let users = [];

// CREATE - insertOne()
console.log('1. CREATE (insertOne)');
const newUser = {
  _id: "1",
  name: "John Doe",
  age: 30,
  email: "john@example.com"
};
users.push(newUser);
console.log('Inserted:', JSON.stringify(newUser, null, 2));
console.log('Result: { acknowledged: true, insertedId: "1" }\\n');

// READ - findOne()
console.log('2. READ (findOne)');
console.log('Query: { name: "John Doe" }');
const foundUser = users.find(u => u.name === "John Doe");
console.log('Found:', JSON.stringify(foundUser, null, 2));
console.log('');

// UPDATE - updateOne()
console.log('3. UPDATE (updateOne)');
console.log('Query: { name: "John Doe" }');
console.log('Update: { $set: { age: 31 } }');
const userToUpdate = users.find(u => u.name === "John Doe");
if (userToUpdate) userToUpdate.age = 31;
console.log('Updated:', JSON.stringify(userToUpdate, null, 2));
console.log('Result: { acknowledged: true, modifiedCount: 1 }\\n');

// DELETE - deleteOne()
console.log('4. DELETE (deleteOne)');
console.log('Query: { name: "John Doe" }');
const index = users.findIndex(u => u.name === "John Doe");
if (index > -1) users.splice(index, 1);
console.log('Result: { acknowledged: true, deletedCount: 1 }');
console.log('Remaining users:', users.length);
console.log('');

console.log('✓ CRUD operations completed!');`,
          description: "Simulating MongoDB CRUD operations with actual results",
        },
      ],
    },
    {
      title: "MongoDB Query Operators",
      content:
        "MongoDB provides powerful query operators to filter and find documents. Learn the most common operators used in queries.",
      examples: [
        {
          displayCode: `// MongoDB Query Operators
import { MongoClient } from 'mongodb';

async function queryExamples() {
  const client = new MongoClient('mongodb://localhost:27017');
  await client.connect();
  const collection = client.db('shop').collection('products');

  // $gt (greater than)
  const expensive = await collection.find({ 
    price: { $gt: 200 } 
  }).toArray();

  // $eq (equals)
  const electronics = await collection.find({ 
    category: { $eq: "Electronics" } 
  }).toArray();

  // $in (in array)
  const selected = await collection.find({ 
    category: { $in: ["Electronics", "Furniture"] } 
  }).toArray();

  // $and (logical AND)
  const filtered = await collection.find({ 
    $and: [
      { price: { $lt: 500 } }, 
      { stock: { $gt: 10 } }
    ] 
  }).toArray();

  await client.close();
}

queryExamples();`,
          executableCode: `// MongoDB Query Operators Simulation
console.log('=== MongoDB Query Operators ===\\n');

const products = [
  { _id: 1, name: "Laptop", price: 1200, category: "Electronics", stock: 15 },
  { _id: 2, name: "Mouse", price: 25, category: "Electronics", stock: 50 },
  { _id: 3, name: "Desk", price: 300, category: "Furniture", stock: 8 },
  { _id: 4, name: "Chair", price: 150, category: "Furniture", stock: 20 },
  { _id: 5, name: "Monitor", price: 400, category: "Electronics", stock: 12 }
];

console.log('Total Products:', products.length);
console.log('');

// $gt (greater than)
console.log('1. $gt (Greater Than)');
console.log('Query: { price: { $gt: 200 } }');
const expensive = products.filter(p => p.price > 200);
console.log('Found:', expensive.length, 'products');
console.log(expensive.map(p => \`\${p.name} ($\${p.price})\`).join(', '));
console.log('');

// $eq (equals)
console.log('2. $eq (Equals)');
console.log('Query: { category: { $eq: "Electronics" } }');
const electronics = products.filter(p => p.category === "Electronics");
console.log('Found:', electronics.length, 'products');
console.log(electronics.map(p => p.name).join(', '));
console.log('');

// $in (in array)
console.log('3. $in (In Array)');
console.log('Query: { category: { $in: ["Electronics", "Furniture"] } }');
const selected = products.filter(p => ["Electronics", "Furniture"].includes(p.category));
console.log('Found:', selected.length, 'products');
console.log('');

// $and (logical AND)
console.log('4. $and (Logical AND)');
console.log('Query: { $and: [{ price: { $lt: 500 } }, { stock: { $gt: 10 } }] }');
const filtered = products.filter(p => p.price < 500 && p.stock > 10);
console.log('Found:', filtered.length, 'products');
console.log(filtered.map(p => \`\${p.name} ($\${p.price}, stock: \${p.stock})\`).join(', '));
console.log('');

console.log('✓ Query operators help filter data efficiently!');`,
          description: "Understanding MongoDB query operators with practical examples",
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
          MongoDB Tutorial
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Master MongoDB fundamentals with our comprehensive tutorial. Learn
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
              src="https://www.youtube.com/embed/J6mDkcqU_ZE?si=HzTvcIYE24tvKgS7"
              title="MongoDB Tutorial for Beginners"
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
              <h3 className="text-xl font-semibold text-[#000000]">MongoDB Compiler</h3>
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
                  <span className="text-sm font-medium text-gray-700">MongoDB Code</span>
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
                      // Enhanced color coding for MongoDB output
                      let colorClass = 'text-gray-300';
                      
                      if (line.startsWith('===')) {
                        colorClass = 'text-cyan-400 font-bold text-base';
                      } else if (line.startsWith('---')) {
                        colorClass = 'text-yellow-400 font-semibold';
                      } else if (line.match(/^\d+\./)) {
                        colorClass = 'text-yellow-300 font-semibold';
                      } else if (line.includes('Query:') || line.includes('Update:') || line.includes('Result:')) {
                        colorClass = 'text-blue-400 font-semibold';
                      } else if (line.includes('Inserted:') || line.includes('Found:') || line.includes('Updated:')) {
                        colorClass = 'text-green-400 font-semibold';
                      } else if (line.includes('Total') || line.includes('Remaining')) {
                        colorClass = 'text-purple-400';
                      } else if (line.startsWith('{') || line.startsWith('[') || line.includes('"_id"') || line.includes('"name"')) {
                        colorClass = 'text-emerald-300';
                      } else if (line.startsWith('  ')) {
                        colorClass = 'text-gray-400';
                      } else if (line.startsWith('•')) {
                        colorClass = 'text-amber-300';
                      } else if (line.startsWith('✓')) {
                        colorClass = 'text-green-400 font-semibold';
                      } else if (line.startsWith('💡')) {
                        colorClass = 'text-amber-400 font-semibold';
                      } else if (line.startsWith('Error') || line.includes('error')) {
                        colorClass = 'text-red-400 font-semibold';
                      } else if (line.includes('CREATE') || line.includes('READ') || line.includes('UPDATE') || line.includes('DELETE')) {
                        colorClass = 'text-pink-400 font-bold';
                      } else if (line.includes('$gt') || line.includes('$eq') || line.includes('$in') || line.includes('$and')) {
                        colorClass = 'text-indigo-400 font-semibold';
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

export default MongoTutorial;