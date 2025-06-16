import Link from "next/link";
import { ArrowRight, Braces, ChartPie, Code, Database, Figma, GitMerge } from "lucide-react";

export default function ChoosePath() {
  return (
    <div className="min-h-screen mt-12 w-full bg-white">
      <div className="flex flex-col items-center justify-center gap-8 p-8 md:p-16">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-[#000000] mb-6 tracking-tight">
            Choose Your Learning Path
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the development path you want to pursue. Each path contains
            carefully curated resources and a structured learning approach.
          </p>
        </div>

        <div className="mt-12 grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <Link
            href="/frontenddev"
            className="group relative overflow-hidden rounded-xl border border-gray-100 p-8 transition-all duration-300 hover:border-[#A435F0] hover:shadow-[0_0_30px_rgba(164,53,240,0.2)]"
          >
            <div className="relative z-10">
              <div className="mb-6 inline-block rounded-lg bg-[#A435F0]/10 p-3">
                <Code className="h-6 w-6 text-[#A435F0]" />
              </div>
              <h2 className="mb-4 text-2xl font-semibold text-[#000000] group-hover:text-[#A435F0] transition-colors">
                Frontend Development
              </h2>
              <p className="mb-8 text-gray-600">
                Master HTML, CSS, JavaScript, and modern frameworks like React
                and Next.js. Build beautiful, responsive user interfaces.
              </p>
              <div className="flex items-center text-[#A435F0]">
                <span className="font-medium">Start Learning</span>
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </div>
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#A435F0]/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
          <Link
            href="/backenddev"
            className="group relative overflow-hidden rounded-xl border border-gray-100 p-8 transition-all duration-300 hover:border-[#A435F0] hover:shadow-[0_0_30px_rgba(164,53,240,0.2)]"
          >
            <div className="relative z-10">
              <div className="mb-6 inline-block rounded-lg bg-[#A435F0]/10 p-3">
                <Database className="h-6 w-6 text-[#A435F0]" />
              </div>
              <h2 className="mb-4 text-2xl font-semibold text-[#000000] group-hover:text-[#A435F0] transition-colors">
                Backend Development
              </h2>
              <p className="mb-8 text-gray-600">
                Learn server-side programming, databases, APIs, and backend
                frameworks.
              </p>
              <div className="flex items-center text-[#A435F0]">
                <span className="font-medium">Start Learning</span>
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </div>
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#A435F0]/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>


          <Link
            href="/dataanalytics"
            className="group relative overflow-hidden rounded-xl border border-gray-100 p-8 transition-all duration-300 hover:border-[#A435F0] hover:shadow-[0_0_30px_rgba(164,53,240,0.2)]"
          >
            <div className="relative z-10">
              <div className="mb-6 inline-block rounded-lg bg-[#A435F0]/10 p-3">
                <ChartPie className="h-6 w-6 text-[#A435F0]" />
              </div>
              <h2 className="mb-4 text-2xl font-semibold text-[#000000] group-hover:text-[#A435F0] transition-colors">
                Data Analytics
              </h2>
              <p className="mb-8 text-gray-600">
                Learn how to collect, analyze and visualize data to make better decisions. 
              </p>
              <div className="flex items-center text-[#A435F0]">
                <span className="font-medium">Start Learning</span>
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </div>
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#A435F0]/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>

          <Link
            href="/githubtutorial"
            className="group relative overflow-hidden rounded-xl border border-gray-100 p-8 transition-all duration-300 hover:border-[#A435F0] hover:shadow-[0_0_30px_rgba(164,53,240,0.2)]"
          >
            <div className="relative z-10">
              <div className="mb-6 inline-block rounded-lg bg-[#A435F0]/10 p-3">
                <GitMerge className="h-6 w-6 text-[#A435F0]" />
              </div>
              <h2 className="mb-4 text-2xl font-semibold text-[#000000] group-hover:text-[#A435F0] transition-colors">
                Git and Github
              </h2>
              <p className="mb-8 text-gray-600">
                Learn how to use Git and Github to manage your code and collaborate with others.
              </p>
              <div className="flex items-center text-[#A435F0]">
                <span className="font-medium">Start Learning</span>
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </div>
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#A435F0]/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>

          <Link
            href="/uiux"
            className="group relative overflow-hidden rounded-xl border border-gray-100 p-8 transition-all duration-300 hover:border-[#A435F0] hover:shadow-[0_0_30px_rgba(164,53,240,0.2)]"
          >
            <div className="relative z-10">
              <div className="mb-6 inline-block rounded-lg bg-[#A435F0]/10 p-3">
                <Figma className="h-6 w-6 text-[#A435F0]" />
              </div>
              <h2 className="mb-4 text-2xl font-semibold text-[#000000] group-hover:text-[#A435F0] transition-colors">
                UI & UX 
              </h2>
              <p className="mb-8 text-gray-600">
                Learn how to create beautiful and user-friendly interfaces.
              </p>
              <div className="flex items-center text-[#A435F0]">
                <span className="font-medium">Start Learning</span>
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </div>
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#A435F0]/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>

          <Link
            href="/dsa"
            className="group relative overflow-hidden rounded-xl border border-gray-100 p-8 transition-all duration-300 hover:border-[#A435F0] hover:shadow-[0_0_30px_rgba(164,53,240,0.2)]"
          >
            <div className="relative z-10">
              <div className="mb-6 inline-block rounded-lg bg-[#A435F0]/10 p-3">
                <Braces className="h-6 w-6 text-[#A435F0]" />
              </div>
              <h2 className="mb-4 text-2xl font-semibold text-[#000000] group-hover:text-[#A435F0] transition-colors">
                DSA 
              </h2>
              <p className="mb-8 text-gray-600">
                Learn the fundamentals of Data Structures and Algorithms to enhance your problem-solving skills.
              </p>
              <div className="flex items-center text-[#A435F0]">
                <span className="font-medium">Start Learning</span>
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </div>
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#A435F0]/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            More learning paths will be added soon!
          </p>
        </div>
      </div>
    </div>
  );
}
