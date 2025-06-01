import Link from 'next/link';
import { ArrowLeft, ArrowRight, Braces, Code, Database, Layout } from 'lucide-react';
import BackFooter from '@/components/BackFooter';


const learningPaths = [
  {
    title: "NodeJs Fundamentals",
    description: "Learn the fundamentals of Node.js",
    icon: Code,
    path: "/backenddev/nodetutorial",
    duration: "1-2 hours",
    level: "Beginner"
  },
  {
    title: "ExpressJs Fundamentals",
    description: "Build web applications with Express.js",
    icon: Braces,
    path: "/backenddev/expresstutorial",
    duration: "1-2 hours",
    level: "Intermediate"
  },
  {
    title: "MongoDB Fundamentals",
    description: "Learn MongoDB for database management",
    icon: Database,
    path: "/backenddev/mongotutorial",
    duration: "1-2 hours",
    level: "Intermediate"
  },
  {
    title: "All in One",
    description: "Learn all the backend development concepts",
    icon: Layout,
    path: "/backenddev/allinonetutorial",
    duration: "12-14 hours",
    level: "Advanced"
  }
];

const FrontendDev = () => {
  return (
    <div className="min-h-screen mt-16 bg-white pt-16 pb-12">
      <div className="absolute top-20 left-4 md:left-8">
        <Link 
          href="/choose" 
          className="inline-flex items-center px-4 py-2 text-[#A435F0] hover:text-white border-2 border-[#A435F0] hover:bg-[#A435F0] rounded-sm transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:translate-x-[-2px] transition-transform" />
          Back to Learning Paths
        </Link>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#000000] mb-4">
            Backend Development Path
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Master backend development through our structured learning paths. Choose your starting point and begin your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningPaths.map((path, index) => {
            const IconComponent = path.icon;
            return (
              <Link 
                key={index}
                href={path.path}
                className="group block"
              >
                <div className="h-full p-6 bg-white border border-gray-200 rounded-sm hover:border-[#A435F0] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#A435F0] bg-opacity-10 rounded-sm">
                      <IconComponent className="w-6 h-6 text-[#A435F0]" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-[#000000] mb-2 group-hover:text-[#A435F0] transition-colors">
                        {path.title}
                      </h2>
                      <p className="text-gray-600 mb-4">
                        {path.description}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Duration: {path.duration}</span>
                        <span className="text-gray-500">Level: {path.level}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#A435F0] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      <div>
        <BackFooter />
      </div>
      </div>
    </div>
  );
};

export default FrontendDev;