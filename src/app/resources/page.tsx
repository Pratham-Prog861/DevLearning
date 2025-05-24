'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Spotlight } from '@/components/ui/spotlight';

const resources = [
  {
    title: 'Documentation',
    description: 'Official guides and references for web development technologies.',
    link: 'https://developer.mozilla.org/'
  },

  {
    title: 'Code Challenges',
    description: 'Practice coding skills with real-world problems.',
    link: 'https://leetcode.com/'
  },
  {
    title: 'Developer Tools',
    description: 'Essential tools and extensions for web development.',
    link: 'https://marketplace.visualstudio.com/'
  },
  {
    title: 'Community Forums',
    description: 'Connect with developers and get help with coding questions.',
    link: 'https://stackoverflow.com/'
  },
  {
    title: 'Design Resources',
    description: 'UI/UX design tools and inspiration for developers.',
    link: 'https://dribbble.com/'
  }
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 py-24 px-4 sm:px-6 lg:px-8">
      <Spotlight fill="white" className="z-0" />
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">
            Development Resources
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-fade-in-delayed">
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
}

function ResourceCard({ title, description, link, index }: ResourceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div
        ref={cardRef}
        className={cn(
          'resource-card opacity-0 translate-y-8',
          'bg-white/10 backdrop-blur-lg rounded-xl p-6',
          'transform transition-all duration-700 ease-out',
          'hover:bg-white/20 hover:shadow-xl hover:-translate-y-1',
          'cursor-pointer border border-white/10',
          'relative overflow-hidden'
        )}
        style={{
          transitionDelay: `${index * 1}ms`
        }}
      >
        <div className="relative z-10">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </a>
  );
}