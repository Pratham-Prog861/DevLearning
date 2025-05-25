import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-50 to-white">
        {/* Optional: Add a background pattern or image here */}
      </div>
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up text-[#000000]">
          Unlock Your Development Potential
        </h1>
        <p className="text-lg md:text-xl mb-8 animate-fade-in delay-200 text-gray-600">
          Dive deep into curated learning paths for frontend and backend development.
          Master the skills needed to build the future.
        </p>
        <Link href="/choose">
            <button className="px-8 py-3 bg-[#A435F0] text-white font-semibold rounded-sm shadow-lg hover:bg-[#8710E0] transition duration-300 transform hover:-translate-y-0.5 animate-fade-in delay-400">
                Start Your Journey
            </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;