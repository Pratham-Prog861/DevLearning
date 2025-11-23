"use client";

import React, { useState, useEffect, useRef } from "react";
import { Code2, Brain, Target, Rocket, Sparkles } from "lucide-react";

const Drive = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer to trigger animations when section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const reasons = [
    {
      icon: Code2,
      title: "Passion for Problem Solving",
      description:
        "I thrive on tackling complex challenges and turning them into elegant solutions through code.",
      gradient: "from-purple-500 to-pink-500",
      animationDelay: 0,
    },
    {
      icon: Brain,
      title: "Continuous Learning",
      description:
        "The ever-evolving tech landscape provides endless opportunities to learn and grow.",
      gradient: "from-blue-500 to-cyan-500",
      animationDelay: 150,
    },
    {
      icon: Target,
      title: "Impact and Innovation",
      description:
        "Creating applications that make a meaningful difference in people's lives drives me forward.",
      gradient: "from-green-500 to-emerald-500",
      animationDelay: 300,
    },
    {
      icon: Rocket,
      title: "Building the Future",
      description:
        "Contributing to the digital transformation and shaping tomorrow's technology landscape.",
      gradient: "from-orange-500 to-red-500",
      animationDelay: 450,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#A435F0]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with animation */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#A435F0]/10 rounded-full">
            <Sparkles className="w-5 h-5 text-[#A435F0] animate-spin-slow" />
            <span className="text-sm font-semibold text-[#A435F0]">
              What Drives Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#A435F0] via-[#8710E0] to-[#A435F0] bg-clip-text text-transparent">
            The Drive to Create
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Exploring the driving forces behind my journey in software
            development and the passion that fuels my continuous growth
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={index}
                className={`
                  group relative overflow-hidden rounded-2xl bg-white border border-gray-200
                  transition-all duration-700 ease-out
                  ${isVisible ? "animate-card-reveal" : "opacity-0"}
                `}
                style={{
                  animationDelay: `${reason.animationDelay}ms`,
                }}
              >
                {/* Animated gradient background */}
                <div
                  className={`
                    absolute inset-0 bg-gradient-to-br ${reason.gradient} 
                    opacity-0 animate-gradient-pulse
                  `}
                  style={{
                    animationDelay: `${reason.animationDelay}ms`,
                  }}
                />

                {/* Shimmer effect */}
                <div
                  className="absolute inset-0 opacity-0 animate-shimmer"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(164, 53, 240, 0.1), transparent)",
                    animationDelay: `${reason.animationDelay + 1000}ms`,
                  }}
                />

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${reason.gradient} blur-xl opacity-20`}
                  />
                </div>

                {/* Content */}
                <div className="relative p-6 h-full flex flex-col">
                  {/* Icon with animation */}
                  <div className="mb-4">
                    <div
                      className={`
                        inline-flex p-3 rounded-xl bg-gradient-to-br ${reason.gradient}
                        animate-icon-float
                      `}
                      style={{
                        animationDelay: `${reason.animationDelay}ms`,
                      }}
                    >
                      <Icon
                        className="w-6 h-6 text-white animate-icon-pulse"
                        style={{
                          animationDelay: `${reason.animationDelay + 500}ms`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-[#000000] group-hover:text-[#A435F0] transition-colors duration-300">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 flex-grow text-base">
                    {reason.description}
                  </p>

                  {/* Floating particles */}
                  <div
                    className="absolute top-6 right-6 w-2 h-2 bg-[#A435F0] rounded-full animate-particle-float opacity-0 group-hover:opacity-100"
                    style={{ animationDelay: `${reason.animationDelay}ms` }}
                  />
                  <div
                    className="absolute bottom-6 left-6 w-1 h-1 bg-blue-500 rounded-full animate-particle-float opacity-0 group-hover:opacity-100"
                    style={{
                      animationDelay: `${reason.animationDelay + 500}ms`,
                    }}
                  />
                </div>

                {/* Bottom shine effect */}
                <div
                  className={`
                    absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.gradient}
                    transform origin-left transition-transform duration-500
                    scale-x-0 group-hover:scale-x-100
                  `}
                />
              </div>
            );
          })}
        </div>

        {/* Quote with animation */}
        <div
          className={`
            text-center mt-16 
            ${isVisible ? "animate-fade-in" : "opacity-0"}
          `}
          style={{ animationDelay: "600ms" }}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#A435F0]/20 to-blue-500/20 blur-2xl"></div>
            <p className="relative text-gray-700 text-lg md:text-xl italic px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200">
              &quot;The only way to do great work is to love what you do.&quot;
              <span className="block text-[#A435F0] font-semibold mt-2 not-italic">
                - Steve Jobs
              </span>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes card-reveal {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes gradient-pulse {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 0.08;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes icon-float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(3deg);
          }
        }

        @keyframes icon-pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes particle-float {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-15px) scale(1.3);
            opacity: 0.7;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-card-reveal {
          animation: card-reveal 0.7s ease-out forwards;
        }

        .animate-gradient-pulse {
          animation: gradient-pulse 4s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        .animate-icon-float {
          animation: icon-float 3s ease-in-out infinite;
        }

        .animate-icon-pulse {
          animation: icon-pulse 2s ease-in-out infinite;
        }

        .animate-particle-float {
          animation: particle-float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
};

export default Drive;
