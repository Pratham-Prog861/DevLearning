import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden bg-white">
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
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-[#A435F0]/30 to-black/20 backdrop-blur-sm" aria-hidden="true" />
        {/* Decorative blurred gradient blob */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[420px] h-[320px] bg-gradient-to-tr from-[#A435F0]/50 via-[#8710E0]/40 to-[#A435F0]/0 rounded-full blur-3xl opacity-60 z-10 pointer-events-none" />
      </div>
      <div className="relative z-20 p-4 max-w-3xl mx-auto flex flex-col items-center">
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 text-[#A435F0] font-semibold text-xs md:text-sm shadow-sm backdrop-blur animate-fade-in-down border border-[#A435F0]/30">
          Empowering Developers
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-up bg-gradient-to-r from-[#A435F0] via-[#8710E0] to-white bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(164,53,240,0.4)]">
          Unlock Your <span className="text-white drop-shadow-[0_2px_8px_rgba(164,53,240,0.5)]">Development</span> Potential
        </h1>
        <p className="text-base md:text-lg mb-8 animate-fade-in delay-200 text-gray-100 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
          Curated learning paths for frontend and backend.<br className="hidden md:block" />
          Master the skills to build the future, with a clean and modern experience.
        </p>
        <Link href="/choose">
          <button className="px-8 py-3 bg-[#A435F0] text-white font-semibold rounded-full shadow-lg hover:bg-[#8710E0] focus:bg-[#8710E0] transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#A435F0]/30 text-base md:text-lg relative after:content-[''] after:absolute after:inset-0 after:rounded-full after:opacity-0 hover:after:opacity-40 after:transition after:duration-300 after:bg-[#A435F0] after:blur-md">
            Start Your Journey
          </button>
        </Link>
      </div>
      {/* Decorative SVG wave at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
          <path fill="#fff" fillOpacity="1" d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,74.7C672,75,768,117,864,128C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;