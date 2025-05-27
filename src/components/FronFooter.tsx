import React from 'react'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const FronFooter = () => {
  return (
    <div className="mt-16 space-y-8">
      <div className="bg-white border border-gray-200 rounded-sm p-8 hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg">
        <h1 className="text-3xl font-bold text-[#000000] mb-6">Steps to Learn Frontend Development</h1>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-8 flex items-center justify-center bg-[#A435F0] bg-opacity-10 text-[#A435F0] rounded-sm">1</span>
            <p className="text-gray-600">Learn HTML</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="w-8 h-8 flex items-center justify-center bg-[#A435F0] bg-opacity-10 text-[#A435F0] rounded-sm">2</span>
            <p className="text-gray-600">Learn CSS</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="w-8 h-8 flex items-center justify-center bg-[#A435F0] bg-opacity-10 text-[#A435F0] rounded-sm">3</span>
            <p className="text-gray-600">After HTML & CSS, make a clone of any website like Amazon or Netflix</p>
          </div>
        </div>

        <div className="mt-8 mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">
            Video Tutorial
          </h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/nGhKIC_7Mkk?si=WIvFVzsNm9oNxyH5"
              title="HTML Tutorial for Beginners"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-sm"
            ></iframe>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-8 flex items-center justify-center bg-[#A435F0] bg-opacity-10 text-[#A435F0] rounded-sm">4</span>
            <p className="text-gray-600">Learn Javascript</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="w-8 h-8 flex items-center justify-center bg-[#A435F0] bg-opacity-10 text-[#A435F0] rounded-sm">5</span>
            <p className="text-gray-600">After Learning HTML, CSS & JavaScript</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="w-8 h-8 flex items-center justify-center bg-[#A435F0] bg-opacity-10 text-[#A435F0] rounded-sm">6</span>
            <p className="text-gray-600">Make a Project with Above Tech, Below is the tutorial</p>
          </div>
        </div>

        <div className="mt-8 mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">
            Full Tutorial Playlist
          </h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/MIYQR-Ybrn4?si=-g9WqRHCYvpRNP_L"
              title="HTML Tutorial for Beginners"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-sm"
            ></iframe>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-8 flex items-center justify-center bg-[#A435F0] bg-opacity-10 text-[#A435F0] rounded-sm">7</span>
            <p className="text-gray-600">Learn React</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="w-8 h-8 flex items-center justify-center bg-[#A435F0] bg-opacity-10 text-[#A435F0] rounded-sm">8</span>
            <p className="text-gray-600">Make a Project with React like Food Delivery App, etc.</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="w-8 h-8 flex items-center justify-center bg-[#A435F0] bg-opacity-10 text-[#A435F0] rounded-sm">9</span>
            <p className="text-gray-600">Learn Next.js</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="w-8 h-8 flex items-center justify-center bg-[#A435F0] bg-opacity-10 text-[#A435F0] rounded-sm">10</span>
            <p className="text-gray-600">Make a Project with Next.js like Blog Website, etc.</p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-50 rounded-sm">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-8 flex items-center justify-center bg-[#A435F0] bg-opacity-10 text-[#A435F0] rounded-sm">11</span>
            <p className="text-gray-600">You can explore these websites for inspiration:</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link 
              href="https://www.awwwards.com/websites/" 
              className="inline-flex items-center px-4 py-2 text-[#A435F0] hover:text-white border-2 border-[#A435F0] hover:bg-[#A435F0] rounded-sm transition-all duration-300"
            >
              Awwwards
              <ExternalLink className="ml-2 w-4 h-4" />
            </Link>
            <Link 
              href="https://www.behance.net/" 
              className="inline-flex items-center px-4 py-2 text-[#A435F0] hover:text-white border-2 border-[#A435F0] hover:bg-[#A435F0] rounded-sm transition-all duration-300"
            >
              Behance
              <ExternalLink className="ml-2 w-4 h-4" />
            </Link>
            <Link 
              href="https://dribbble.com/" 
              className="inline-flex items-center px-4 py-2 text-[#A435F0] hover:text-white border-2 border-[#A435F0] hover:bg-[#A435F0] rounded-sm transition-all duration-300"
            >
              Dribbble
              <ExternalLink className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-12 p-6 bg-gray-50 rounded-sm">
        <h2 className="text-2xl font-semibold text-[#000000] mb-6">
          UI Libraries and Components
        </h2>
        <p className="text-gray-600 mb-6">
          Below are the UI libraries and component collections that can help you build websites faster:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link 
            href="https://mui.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">MUI</h3>
            <p className="text-gray-600 text-sm mb-2">Move Faster With Intuitive React UI Tools</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>

          <Link 
            href="https://magicui.design/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">MagicUI</h3>
            <p className="text-gray-600 text-sm mb-2">UI library for Design Engineers</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>

          <Link 
            href="https://daisyui.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">DaisyUI</h3>
            <p className="text-gray-600 text-sm mb-2">Component Library for Tailwind CSS</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>

          <Link 
            href="https://uiverse.io/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">UIverse</h3>
            <p className="text-gray-600 text-sm mb-2">Open Source UI Elements</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>

          <Link 
            href="https://tws.zarifprogrammer.com/snippets" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">TailwindSnippets</h3>
            <p className="text-gray-600 text-sm mb-2">Collection of Tailwind CSS Snippets</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>

          <Link 
            href="https://tailwindcss.com/plus/ui-blocks?ref=sidebar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">Tailwind UI</h3>
            <p className="text-gray-600 text-sm mb-2">Beautiful UI components with Tailwind CSS</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>

          <Link 
            href="https://www.21st.dev/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">21st.dev</h3>
            <p className="text-gray-600 text-sm mb-2">Modern UI Components</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>

          <Link 
            href="https://ui.aceternity.com/"
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">Aceternity UI</h3>
            <p className="text-gray-600 text-sm mb-2">Modern UI Components Collection</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>

          <Link 
            href="https://ui.shadcn.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">shadcn/ui</h3>
            <p className="text-gray-600 text-sm mb-2">Re-usable UI Components</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>

          <Link 
            href="https://heroui.net/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">HeroUI</h3>
            <p className="text-gray-600 text-sm mb-2">Tailwind CSS Components</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>

          <Link 
            href="https://chakra-ui.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg group"
          >
            <h3 className="text-lg font-semibold text-[#000000] group-hover:text-[#A435F0]">Chakra UI</h3>
            <p className="text-gray-600 text-sm mb-2">Simple, Modular UI Components</p>
            <ExternalLink className="w-4 h-4 text-[#A435F0] mt-auto self-end" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FronFooter