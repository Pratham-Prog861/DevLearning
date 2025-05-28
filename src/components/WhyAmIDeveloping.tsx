"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Target, Rocket } from 'lucide-react';

const WhyAmIDeveloping = () => {
  const reasons = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Passion for Problem Solving",
      description: "I thrive on tackling complex challenges and turning them into elegant solutions through code."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "The ever-evolving tech landscape provides endless opportunities to learn and grow."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Impact and Innovation",
      description: "Creating applications that make a meaningful difference in people's lives drives me forward."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Building the Future",
      description: "Contributing to the digital transformation and shaping tomorrow's technology landscape."
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const container = containerRef.current;

    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div 
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-8 transition-all duration-1000"
      >
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-[#000000] mb-4"
          >
            Why Am I Developing?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Exploring the driving forces behind my journey in software development
            and the passion that fuels my continuous growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-sm border border-gray-200 hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
            >
              <div className="text-[#A435F0] mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#000000] mb-3 group-hover:text-[#A435F0] transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-600">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-lg italic">
            "The only way to do great work is to love what you do." - Steve Jobs
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAmIDeveloping;