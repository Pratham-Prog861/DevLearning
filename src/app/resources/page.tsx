'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Spotlight } from '@/components/ui/spotlight';
import { ExternalLink } from 'lucide-react';

const resources = [
  {
    title: 'Documentation',
    description: 'Official guides and references for web development technologies.',
    link: 'https://developer.mozilla.org/',
    icon: '📚'
  },
  {
    title: 'Code Challenges',
    description: 'Practice coding skills with real-world problems.',
    link: 'https://leetcode.com/',
    icon: '💻'
  },
  {
    title: 'Developer Tools',
    description: 'Essential tools and extensions for web development.',
    link: 'https://marketplace.visualstudio.com/',
    icon: '🛠️'
  },
  {
    title: 'Community Forums',
    description: 'Connect with developers and get help with coding questions.',
    link: 'https://stackoverflow.com/',
    icon: '👥'
  },
  {
    title: 'Design Resources',
    description: 'UI/UX design tools and inspiration for developers.',
    link: 'https://mobbin.com/discover/apps/web/latest',
    icon: '🎨'
  }
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white py-24 px-4 sm:px-6 lg:px-8">
      <Spotlight fill="#A435F0" className="z-0 opacity-20" />
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#000000] mb-4 animate-fade-in">
            Development Resources
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto animate-fade-in-delayed">
            Curated collection of tools and resources to enhance your development journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              {...resource}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
  index: number;
  icon: string;
}

function ResourceCard({ title, description, link, index, icon }: ResourceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current; // Store ref value in a variable
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

    if (card) {
      observer.observe(card);
    }

    return () => {
      if (card) { // Use the stored variable instead of cardRef.current
        observer.unobserve(card);
      }
    };
  }, []);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div
        ref={cardRef}
        className={cn(
          'resource-card opacity-0 translate-y-8',
          'bg-white rounded-xl p-6',
          'transform transition-all duration-700 ease-out',
          'hover:shadow-[0_0_30px_rgba(164,53,240,0.2)] hover:-translate-y-1',
          'cursor-pointer border border-gray-100',
          'relative overflow-hidden'
        )}
        style={{
          transitionDelay: `${index * 10}ms`
        }}
      >
        <div className="relative z-10 flex items-start gap-4">
          <span className="text-3xl">{icon}</span>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-[#000000] mb-2 group-hover:text-[#A435F0] transition-colors">
                {title}
              </h3>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#A435F0] transition-colors" />
            </div>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#A435F0]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
        />
      </div>
    </a>
  );
}