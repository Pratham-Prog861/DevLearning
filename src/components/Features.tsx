"use client"
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-700 via-purple-700 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <p className="text-xl text-center mb-16">Discover what makes our platform the best place to learn.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Feature Card 1 */}
          <FeatureCard
            title="Curated Learning Paths"
            description="Follow expertly designed paths to master frontend and backend development step-by-step."
            index={0}
          />
          {/* Feature Card 2 */}
          <FeatureCard
            title="Hands-on Projects"
            description="Apply your knowledge with real-world projects that build your portfolio."
            index={1}
          />
          {/* Feature Card 3 */}
          <FeatureCard
            title="Community Support"
            description="Connect with other learners and mentors to get help and stay motivated."
            index={2}
          />
          {/* Feature Card 4 */}
          <FeatureCard
            title="Regular Updates"
            description="Stay current with the latest technologies and industry trends."
            index={3}
          />
          {/* Feature Card 5 */}
          <FeatureCard
            title="Flexible Learning"
            description="Learn at your own pace, anytime, anywhere, on any device."
            index={4}
          />
          {/* Feature Card 6 */}
          <FeatureCard
            title="Expert Instructors"
            description="Learn from experienced professionals with real-world expertise."
            index={5}
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  index: number;
}

function FeatureCard({ title, description, index }: FeatureCardProps) {
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
    <div
      ref={cardRef}
      className={cn(
        'resource-card opacity-0 translate-y-8',
        'bg-white/10 backdrop-blur-lg rounded-xl p-6',
        'transform transition-all duration-700 ease-out',
        'hover:bg-white/20 hover:shadow-xl hover:-translate-y-1',
        'cursor-pointer border border-white/10'
      )}
      style={{
        transitionDelay: `${index * 1}ms`
      }}
    >
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default Features;