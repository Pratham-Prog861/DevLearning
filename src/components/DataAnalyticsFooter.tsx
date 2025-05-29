import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const DataAnalyticsFooter = () => {
  return (
    <div className='mt-14'>
      {/* Video Section */}
      <div className="mt-8 mb-12">
        <h2 className="text-2xl font-semibold text-[#000000] mb-8">
          Data Analytics in One Shot with Projects.
        </h2>
        <div className="aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/VaSjiJMrq24?si=fUaTbnw01dwgfcsv"
            title="Data Analytics with Python - Full Course"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-sm"
          ></iframe>
        </div>
      </div>
      {/* Resource Grid */}
      <div className="mt-12 p-6 bg-gray-50 rounded-sm">
        <h2 className="text-2xl font-semibold text-[#000000] mb-6">
          Top Data Analytics Libraries & Tools
        </h2>
        <p className="text-gray-600 mb-6">
          Explore essential libraries and tools for data analytics in Python.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link 
            href="https://numpy.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">NumPy</h3>
            <p className="text-gray-600 text-sm mb-2">Fundamental package for numerical computing with Python.</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>

          <Link 
            href="https://pandas.pydata.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">Pandas</h3>
            <p className="text-gray-600 text-sm mb-2">Powerful data structures for data analysis and manipulation.</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>

          <Link 
            href="https://matplotlib.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">Matplotlib</h3>
            <p className="text-gray-600 text-sm mb-2">Comprehensive library for creating static, animated, and interactive visualizations.</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>

          <Link 
            href="https://seaborn.pydata.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">Seaborn</h3>
            <p className="text-gray-600 text-sm mb-2">Statistical data visualization built on top of Matplotlib.</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>

          <Link 
            href="https://scikit-learn.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">Scikit-learn</h3>
            <p className="text-gray-600 text-sm mb-2">Machine learning library for Python.</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>

          <Link 
            href="https://plotly.com/python/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">Plotly</h3>
            <p className="text-gray-600 text-sm mb-2">Interactive graphing library for Python.</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DataAnalyticsFooter;