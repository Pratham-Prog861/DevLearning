"use client";
import UiUxFooter from "@/components/UiUxFooter";
import {ArrowLeft } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen mt-16 bg-white pt-16 pb-12 relative">
      <div className="absolute top-5 left-4 md:left-8">
        <Link 
          href="/choose" 
          className="inline-flex items-center px-4 py-2 text-[#A435F0] hover:text-white border-2 border-[#A435F0] hover:bg-[#A435F0] rounded-sm transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:translate-x-[-2px] transition-transform" />
          Back to Learning Paths
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#000000] mb-6">
          UI/UX Design Tutorial
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Learn the principles and practices of UI/UX design to create intuitive and engaging user experiences.
        </p>

        {/* Video Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">
            Comprehensive UI/UX Course
          </h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Y40J_DomBu4?si=iHmUyEjPPVf_aLYu" 
              title="UI/UX Design Full Course"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-sm"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="p-6">
        <UiUxFooter />
      </div>
    </div>
  );
};

export default Page;