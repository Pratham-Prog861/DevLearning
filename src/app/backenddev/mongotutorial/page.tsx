"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

const MongoTutorial = () => {
  const tutorials = [
    {
      title: "Introduction to MongoDB",
      content:
        "MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. It provides high performance, high availability, and easy scalability.",
      examples: [
        {
          code: `const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myproject';

async function main() {
  await client.connect();
  console.log('Connected successfully to MongoDB');
  
  const db = client.db(dbName);
  const collection = db.collection('documents');

  return 'MongoDB connection initialized';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());`,
          description: "Basic MongoDB connection setup using the Node.js driver",
        },
      ],
    },
    {
      title: "CRUD Operations in MongoDB",
      content:
        "Learn how to perform Create, Read, Update, and Delete operations in MongoDB using the MongoDB Node.js driver.",
      examples: [
        {
          code: `// Insert a document
await collection.insertOne({
  name: 'John Doe',
  age: 30,
  email: 'john@example.com'
});

// Find documents
const user = await collection.findOne({ name: 'John Doe' });

// Update a document
await collection.updateOne(
  { name: 'John Doe' },
  { $set: { age: 31 } }
);

// Delete a document
await collection.deleteOne({ name: 'John Doe' });`,
          description: "Basic CRUD operations in MongoDB",
        },
      ],
    },
    {
      title: "MongoDB Aggregation Pipeline",
      content:
        "The aggregation pipeline is a powerful framework for data aggregation and transformation in MongoDB.",
      examples: [
        {
          code: `const result = await collection.aggregate([
  // Match stage - filter documents
  { $match: { age: { $gt: 25 } } },
  
  // Group stage - group and calculate
  { $group: {
      _id: "$department",
      avgAge: { $avg: "$age" },
      totalEmployees: { $sum: 1 }
    }
  },
  
  // Sort stage - sort by average age
  { $sort: { avgAge: -1 } }
]).toArray();

console.log(result);`,
          description: "Using MongoDB's aggregation pipeline for complex data analysis",
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

              <button className="mt-6 px-4 py-2 border-2 border-[#A435F0] text-[#A435F0] hover:bg-[#A435F0] hover:text-white transition-colors duration-300 rounded-sm">
                Try it Yourself
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MongoTutorial;