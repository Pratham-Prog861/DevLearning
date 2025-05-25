"use client";
import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

const CSSTutorial = () => {
  const tutorials = [
    {
      title: "Introduction to CSS",
      content:
        "CSS (Cascading Style Sheets) is the language used to style and layout web pages, controlling the visual appearance of HTML elements.",
      examples: [
        {
          code: `body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
  color: #333333;
}`,
          description: "Basic CSS styling for the body element",
        },
      ],
    },
    {
      title: "CSS Selectors",
      content:
        "CSS selectors define which elements to style. They range from simple element selectors to complex combinators and pseudo-classes.",
      examples: [
        {
          code: `.class-name {
  color: blue;
}

#unique-id {
  border: 1px solid black;
}

div > p {
  margin: 10px;
}`,
          description: "Class selector, ID selector, and Child combinator examples",
        },
      ],
    },
    {
      title: "Flexbox Layout",
      content:
        "Flexbox is a powerful layout model that makes it easier to design flexible responsive layouts without using floats or positioning.",
      examples: [
        {
          code: `.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.item {
  flex: 1;
  padding: 20px;
}`,
          description: "Basic flexbox container and item setup",
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
    <div className="min-h-screen mt-12 bg-white pt-16 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#000000] mb-6">
          CSS Tutorial
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Master CSS styling with our comprehensive tutorial. Learn modern layout techniques
          and responsive design principles through practical examples.
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
              src="https://www.youtube.com/embed/OXGznpKZ_sA"
              title="CSS Tutorial for Beginners"
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

        <div className="mt-12 p-6 bg-gray-50 rounded-sm border border-gray-200">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">
            Ready to Practice?
          </h2>
          <p className="text-gray-600 mb-6">
            Put your CSS knowledge to the test with our interactive exercises.
          </p>
          <button className="px-6 py-3 bg-[#A435F0] text-white hover:bg-[#8710E0] transition-colors duration-300 rounded-sm">
            Start Practicing
          </button>
        </div>
      </div>
    </div>
  );
};

export default CSSTutorial;