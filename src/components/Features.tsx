"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  Code2,
  Users,
  Zap,
  Globe,
  Sparkles,
  Brain,
} from "lucide-react";
import Link from "next/link";

const Features = () => {
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

  const features = [
    {
      icon: BookOpen,
      title: "Curated Learning Paths",
      description:
        "Follow expertly designed paths to master frontend, backend, AI/ML, and mobile development step-by-step.",
      gradient: "from-purple-500 to-pink-500",
      size: "large",
      animationDelay: 0,
    },
    {
      icon: Code2,
      title: "Interactive Code Editor",
      description:
        "Practice coding with our built-in Python compiler and live code examples.",
      gradient: "from-blue-500 to-cyan-500",
      size: "medium",
      animationDelay: 200,
    },
    {
      icon: Users,
      title: "Community Support",
      description:
        "Connect with learners and mentors worldwide to accelerate your growth.",
      gradient: "from-green-500 to-emerald-500",
      size: "medium",
      animationDelay: 400,
    },
    {
      icon: Zap,
      title: "Hands-on Projects",
      description:
        "Build real-world projects that showcase your skills and boost your portfolio.",
      gradient: "from-yellow-500 to-orange-500",
      size: "medium",
      animationDelay: 600,
    },
    {
      icon: Globe,
      title: "Learn Anywhere",
      description:
        "Access content on any device, anytime, anywhere in the world.",
      gradient: "from-indigo-500 to-purple-500",
      size: "medium",
      animationDelay: 800,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50 text-[#000000] relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#A435F0]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with animation */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#A435F0]/10 rounded-full">
            <Sparkles className="w-5 h-5 text-[#A435F0] animate-spin-slow" />
            <span className="text-sm font-semibold text-[#A435F0]">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#A435F0] via-[#8710E0] to-[#A435F0] bg-clip-text text-transparent">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes our platform the best place to accelerate your
            development journey
          </p>
        </div>

        {/* Bento Grid Layout - Asymmetric 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className={`
                  group relative overflow-hidden rounded-2xl bg-white border border-gray-200
                  transition-all duration-700 ease-out
                  ${
                    feature.size === "large"
                      ? "md:col-span-2 md:row-span-2"
                      : "md:col-span-1"
                  }
                  ${isVisible ? "animate-feature-reveal" : "opacity-0"}
                `}
                style={{
                  animationDelay: `${feature.animationDelay}ms`,
                }}
              >
                {/* Animated gradient background - always animating */}
                <div
                  className={`
                    absolute inset-0 bg-gradient-to-br ${feature.gradient} 
                    opacity-0 animate-gradient-pulse
                  `}
                  style={{
                    animationDelay: `${feature.animationDelay}ms`,
                  }}
                />

                {/* Shimmer effect - continuous */}
                <div
                  className="absolute inset-0 opacity-0 animate-shimmer"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(164, 53, 240, 0.1), transparent)",
                    animationDelay: `${feature.animationDelay + 1000}ms`,
                  }}
                />

                {/* Animated border gradient - continuous glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 animate-border-glow">
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} blur-xl opacity-20`}
                  />
                </div>

                {/* Content */}
                <div
                  className={`relative p-6 ${
                    feature.size === "large" ? "md:p-8 lg:p-10" : "p-6"
                  } h-full flex flex-col`}
                >
                  {/* Icon with continuous animation */}
                  <div className="mb-4">
                    <div
                      className={`
                        inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient}
                        animate-icon-float
                      `}
                      style={{
                        animationDelay: `${feature.animationDelay}ms`,
                      }}
                    >
                      <Icon
                        className="w-6 h-6 text-white animate-icon-pulse"
                        style={{
                          animationDelay: `${feature.animationDelay + 500}ms`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Title with gradient animation */}
                  <h3
                    className={`
                      text-xl font-bold mb-3 
                      bg-gradient-to-r from-[#000000] via-[#A435F0] to-[#000000]
                      bg-clip-text text-transparent
                      bg-size-200 animate-gradient-text
                      ${
                        feature.size === "large"
                          ? "md:text-2xl lg:text-3xl"
                          : "text-xl"
                      }
                    `}
                    style={{
                      animationDelay: `${feature.animationDelay + 200}ms`,
                    }}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`
                      text-gray-600 flex-grow
                      ${feature.size === "large" ? "md:text-lg" : "text-base"}
                    `}
                  >
                    {feature.description}
                  </p>

                  {/* Floating particles - continuous */}
                  <div
                    className="absolute top-10 right-10 w-2 h-2 bg-[#A435F0] rounded-full animate-particle-float"
                    style={{ animationDelay: `${feature.animationDelay}ms` }}
                  />
                  <div
                    className="absolute bottom-10 left-10 w-2 h-2 bg-blue-500 rounded-full animate-particle-float"
                    style={{
                      animationDelay: `${feature.animationDelay + 1000}ms`,
                    }}
                  />
                  <div
                    className="absolute top-1/2 right-20 w-1 h-1 bg-pink-500 rounded-full animate-particle-float"
                    style={{
                      animationDelay: `${feature.animationDelay + 2000}ms`,
                    }}
                  />
                </div>

                {/* Bottom shine effect - continuous */}
                <div
                  className={`
                    absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient}
                    animate-shine-sweep
                  `}
                  style={{
                    animationDelay: `${feature.animationDelay}ms`,
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA with animation */}
        <div
          className="mt-16 text-center animate-fade-in"
          style={{ animationDelay: "1000ms" }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#A435F0] to-[#8710E0] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
            <Brain className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <Link href="/choose" className="font-semibold">Start Learning Today</Link>
            <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
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

        @keyframes feature-reveal {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
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

        @keyframes border-glow {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes icon-float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
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

        @keyframes gradient-text {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes particle-float {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) scale(1.5);
            opacity: 0.8;
          }
        }

        @keyframes shine-sweep {
          0% {
            transform: scaleX(0);
            transform-origin: left;
          }
          50% {
            transform: scaleX(1);
            transform-origin: left;
          }
          51% {
            transform: scaleX(1);
            transform-origin: right;
          }
          100% {
            transform: scaleX(0);
            transform-origin: right;
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

        .animate-feature-reveal {
          animation: feature-reveal 0.8s ease-out forwards;
        }

        .animate-gradient-pulse {
          animation: gradient-pulse 4s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        .animate-border-glow {
          animation: border-glow 3s ease-in-out infinite;
        }

        .animate-icon-float {
          animation: icon-float 3s ease-in-out infinite;
        }

        .animate-icon-pulse {
          animation: icon-pulse 2s ease-in-out infinite;
        }

        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 4s ease infinite;
        }

        .animate-particle-float {
          animation: particle-float 4s ease-in-out infinite;
        }

        .animate-shine-sweep {
          animation: shine-sweep 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .bg-size-200 {
          background-size: 200% auto;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
};

export default Features;
