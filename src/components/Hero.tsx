"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);

  const codeSnippets = [
    {
      language: "JavaScript",
      code: `// React Component
function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="app">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
    },
    {
      language: "Python",
      code: `# Machine Learning
import numpy as np
from sklearn.model_selection import train_test_split

# Load and split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model
model.fit(X_train, y_train)
accuracy = model.score(X_test, y_test)
print(f"Accuracy: {accuracy:.2f}")`,
    },
    {
      language: "TypeScript",
      code: `// Next.js API Route
export async function GET(request: Request) {
  const data = await fetchData();
  
  return Response.json({
    success: true,
    data: data,
    timestamp: new Date().toISOString()
  });
}`,
    },
    {
      language: "Docker",
      code: `# Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]`,
    },
    {
      language: "Swift",
      code: `// SwiftUI View
struct ContentView: View {
    @State private var count = 0
    
    var body: some View {
        VStack(spacing: 20) {
            Text("Count: \\(count)")
                .font(.largeTitle)
            Button("Increment") {
                count += 1
            }
        }
    }
}`,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCodeIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [codeSnippets.length]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white py-16 md:py-0">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Darker overlay for better text contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-black/70 via-[#A435F0]/30 to-black/20 backdrop-blur-sm"
          aria-hidden="true"
        />
        {/* Decorative blurred gradient blob */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[280px] h-[220px] md:w-[420px] md:h-[320px] bg-gradient-to-tr from-[#A435F0]/50 via-[#8710E0]/40 to-[#A435F0]/0 rounded-full blur-3xl opacity-60 z-10 pointer-events-none" />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 w-full lg:max-w-2xl text-center lg:text-left">
            <span className="inline-block mb-3 md:mb-4 px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-white/10 text-[#A435F0] font-semibold text-xs md:text-sm shadow-sm backdrop-blur animate-fade-in-down border border-[#A435F0]/30">
              Empowering Developers
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 md:mb-4 animate-fade-in-up bg-gradient-to-r from-[#A435F0] via-[#8710E0] to-white bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(164,53,240,0.4)]">
              Unlock Your{" "}
              <span className="text-white drop-shadow-[0_2px_8px_rgba(164,53,240,0.5)]">
                Development
              </span>{" "}
              Potential
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 animate-fade-in delay-200 text-gray-100 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] max-w-xl mx-auto lg:mx-0">
              Curated learning paths for frontend, backend, AI/ML, and mobile
              development.
              <br className="hidden sm:block" />
              Master the skills to build the future, with a clean and modern
              experience.
            </p>
            <Link href="/choose">
              <button className="px-6 md:px-8 py-2.5 md:py-3 bg-[#A435F0] text-white font-semibold rounded-full shadow-lg hover:bg-[#8710E0] focus:bg-[#8710E0] transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#A435F0]/30 text-sm md:text-base lg:text-lg relative after:content-[''] after:absolute after:inset-0 after:rounded-full after:opacity-0 hover:after:opacity-40 after:transition after:duration-300 after:bg-[#A435F0] after:blur-md">
                Start Your Journey
              </button>
            </Link>
          </div>

          {/* Right side - Animated Code Window (Hidden on mobile and tablet) */}
          <div className="hidden lg:block flex-1 w-full lg:max-w-xl">
            <div className="relative bg-gray-900/90 backdrop-blur-md rounded-lg shadow-2xl border border-gray-700/50 overflow-hidden transform hover:scale-105 transition-transform duration-300">
              {/* Window header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/90 border-b border-gray-700/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse delay-75"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse delay-150"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-gray-400 font-mono">
                    {codeSnippets[currentCodeIndex].language}
                  </span>
                </div>
              </div>

              {/* Code content */}
              <div className="p-4 h-80 overflow-hidden relative">
                {codeSnippets.map((snippet, index) => (
                  <pre
                    key={index}
                    className={`absolute inset-4 font-mono text-sm transition-all duration-700 ${
                      index === currentCodeIndex
                        ? "opacity-100 translate-y-0"
                        : index < currentCodeIndex
                        ? "opacity-0 -translate-y-4"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <code className="text-green-400 leading-relaxed">
                      {snippet.code}
                    </code>
                  </pre>
                ))}

                {/* Typing cursor animation */}
                <div
                  className={`absolute bottom-4 left-4 w-2 h-5 bg-[#A435F0] animate-pulse transition-all duration-700`}
                  style={{
                    transform: `translateY(${currentCodeIndex * 20}px)`,
                  }}
                ></div>
              </div>

              {/* Progress indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
                <div
                  className="h-full bg-gradient-to-r from-[#A435F0] to-[#8710E0] transition-all duration-5000 ease-linear"
                  style={{
                    width: "100%",
                    animation: "progress 5s linear infinite",
                  }}
                ></div>
              </div>
            </div>

            {/* Floating dots decoration */}
            <div className="absolute -z-10 top-10 right-10 w-20 h-20 bg-[#A435F0]/20 rounded-full blur-xl animate-bounce"></div>
            <div className="absolute -z-10 bottom-10 right-20 w-16 h-16 bg-[#8710E0]/20 rounded-full blur-xl animate-bounce delay-300"></div>
          </div>
        </div>
      </div>

      {/* Decorative SVG wave at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-20 md:h-24"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,74.7C672,75,768,117,864,128C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
