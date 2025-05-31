import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const UiUxFooter = () => {
  return (
      <div className="mt-[-10px] mb-12 text-center p-6">
      {/* Resource Grid */}
      <div className="mt-12 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-inner"> {/* Gradient background and inner shadow */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4 text-center"> {/* Centered, larger heading */}
          Essential UI/UX Design Tools & Resources
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center"> {/* Centered description */}
          Explore key tools and resources that will elevate your UI/UX design skills.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
          <Link 
            href="https://www.figma.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group bg-white"
          >
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#A435F0] mb-2">Figma</h3> {/* Bolder title */}
            <p className="text-gray-600 text-base mb-4 flex-grow">Leading interface design tool for teams, offering powerful collaboration features.</p> {/* More descriptive text */}
            <ExternalLink className="w-5 h-5 text-[#A435F0] mt-auto self-end" /> {/* Slightly larger icon */}
          </Link>

          <Link 
            href="https://www.framer.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group bg-white"
          >
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#A435F0] mb-2">Framer</h3> {/* Bolder title */}
            <p className="text-gray-600 text-base mb-4 flex-grow">User-friendly prototyping tool for creating interactive prototypes.</p> {/* More descriptive text */}
            <ExternalLink className="w-5 h-5 text-[#A435F0] mt-auto self-end" /> {/* Slightly larger icon */}
          </Link>

          <Link 
            href="https://creatie.ai/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group bg-white"
          >
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#A435F0] mb-2">Creatie AI</h3> {/* Bolder title */}
            <p className="text-gray-600 text-base mb-4 flex-grow">AI-powered design tool for creating stunning visuals and animations.</p> {/* More descriptive text */}
            <ExternalLink className="w-5 h-5 text-[#A435F0] mt-auto self-end" /> {/* Slightly larger icon */}
          </Link>

          <Link 
            href="https://mobbin.com/discover/apps/ios/latest" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group bg-white"
          >
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#A435F0] mb-2">Mobbin</h3> {/* Bolder title */}
            <p className="text-gray-600 text-base mb-4 flex-grow">Use this site to find the best inspiration for your needs.</p> {/* More descriptive text */}
            <ExternalLink className="w-5 h-5 text-[#A435F0] mt-auto self-end" /> {/* Slightly larger icon */}
          </Link>

          <Link 
            href="https://uizard.io/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group bg-white"
          >
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#A435F0] mb-2">UIzard</h3> {/* Bolder title */}
            <p className="text-gray-600 text-base mb-4 flex-grow">A free platform for design inspiration and UI/UX resources.</p> {/* More descriptive text */}
            <ExternalLink className="w-5 h-5 text-[#A435F0] mt-auto self-end" /> {/* Slightly larger icon */}
          </Link>

          <Link 
            href="https://www.canva.com/online-whiteboard/ui-design-tool/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group bg-white"
          >
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#A435F0] mb-2">Canva</h3> {/* Bolder title */}
            <p className="text-gray-600 text-base mb-4 flex-grow">Online whiteboard tool for designing and prototyping UI/UX designs.</p> {/* More descriptive text */}
            <ExternalLink className="w-5 h-5 text-[#A435F0] mt-auto self-end" /> {/* Slightly larger icon */}
          </Link>
        </div>  
      </div>
    </div>
  );
};

export default UiUxFooter;