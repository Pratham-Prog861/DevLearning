import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const BackFooter = () => {
  return (
    <div className='mt-14'>
        <div className="mt-8 mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-8">
            Full Stack with NextJs
          </h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/zLJoVRleOuc?si=0K7hBatuyT-O4ywT"
              title="HTML Tutorial for Beginners"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-sm"
            ></iframe>
          </div>
        </div>
        <div className="mt-12 p-6 bg-gray-50 rounded-sm">
        <h2 className="text-2xl font-semibold text-[#000000] mb-6">
          Best Packages 
        </h2>
        <p className="text-gray-600 mb-6">
          Discover the best packages for your projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link 
            href="https://www.npmjs.com/package/express" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">Express</h3>
            <p className="text-gray-600 text-sm mb-2">Lightweight and flexible web application framework.</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>

          <Link 
            href="https://mongoosejs.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">Mongoose</h3>
            <p className="text-gray-600 text-sm mb-2">ODM (Object Data Modeling) library for MongoDB and Node.js.</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>

          <Link 
            href="https://www.prisma.io/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">Prisma</h3>
            <p className="text-gray-600 text-sm mb-2">Modern ORM for Node.js and TypeScript.</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>

          <Link 
            href="https://www.npmjs.com/package/jsonwebtoken" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">JWT</h3>
            <p className="text-gray-600 text-sm mb-2">For token-based authentication and API security.</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>

          <Link 
            href="https://www.npmjs.com/package/bcrypt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">Bcrypt</h3>
            <p className="text-gray-600 text-sm mb-2">Secure password hashing and salting.</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>

          <Link 
            href="https://www.npmjs.com/package/cors" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">CORS</h3>
            <p className="text-gray-600 text-sm mb-2">Middleware for enabling CORS (Cross-Origin Resource Sharing) in APIs.</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>

          <Link 
            href="https://axios-http.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">Axios</h3>
            <p className="text-gray-600 text-sm mb-2">Promise-based HTTP client for making API calls.</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>

          <Link 
            href="https://socket.io/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">Socket.io</h3>
            <p className="text-gray-600 text-sm mb-2">For real-time, bidirectional communication between clients and servers.</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>

          <Link 
            href="https://www.npmjs.com/package/multer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">Multer</h3>
            <p className="text-gray-600 text-sm mb-2">Middleware for handling multipart/form-data, especially file uploads.</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>

          <Link 
            href="https://jestjs.io/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">Jest</h3>
            <p className="text-gray-600 text-sm mb-2">Delightful JavaScript testing framework with a focus on simplicity.</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>

          <Link 
            href="https://www.npmjs.com/package/dotenv" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">Dotenv</h3>
            <p className="text-gray-600 text-sm mb-2">Loads environment variables from a .env file into process.env.</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>

          <Link 
            href="https://www.npmjs.com/package/uuid" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">UUID</h3>
            <p className="text-gray-600 text-sm mb-2">Generates universally unique identifiers.</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BackFooter