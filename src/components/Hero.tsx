import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        {/* Optional: Add a background pattern or image here */}
      </div>
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
          Unlock Your Development Potential
        </h1>
        <p className="text-lg md:text-xl mb-8 animate-fade-in delay-200">
          Dive deep into curated learning paths for frontend and backend development.
          Master the skills needed to build the future.
        </p>
        <Link href="/choose">
            <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105 animate-fade-in delay-400">
                Start Your Journey
            </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;