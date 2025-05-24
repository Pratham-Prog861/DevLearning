import { Button } from "@/components/ui/button";

const learningModules = [
  {
    title: "HTML Fundamentals",
    description: "Learn the building blocks of web development with HTML5.",
    videoUrl: "https://www.youtube.com/embed/kUMe1FH4CHE",
    resources: [
      { name: "HTML Cheatsheet", url: "#" },
      { name: "HTML Best Practices", url: "#" },
    ],
  },
  {
    title: "CSS Mastery",
    description: "Style your websites with modern CSS techniques and frameworks.",
    videoUrl: "https://www.youtube.com/embed/OXGznpKZ_sA",
    resources: [
      { name: "CSS Flexbox Guide", url: "#" },
      { name: "CSS Grid Layout", url: "#" },
    ],
  },
  {
    title: "JavaScript Essentials",
    description: "Master the core concepts of JavaScript programming.",
    videoUrl: "https://www.youtube.com/embed/PkZNo7MFNFg",
    resources: [
      { name: "JavaScript Fundamentals", url: "#" },
      { name: "ES6+ Features", url: "#" },
    ],
  },
  {
    title: "React & Next.js",
    description: "Build modern web applications with React and Next.js.",
    videoUrl: "https://www.youtube.com/embed/Rh3tobg7hEo",
    resources: [
      { name: "React Hooks Guide", url: "#" },
      { name: "Next.js Documentation", url: "#" },
    ],
  },
];

export default function FrontendDev() {
  return (
    <div className="min-h-screen w-full mt-12 p-4 md:p-8 bg-gradient-to-b from-blue-700 via-purple-700 to-blue-900 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-3xl font-bold md:text-5xl text-white">
          Frontend Development Path
        </h1>
        <p className="mb-8 text-gray-300">
          Follow this structured learning path to master frontend development. Each module includes curated video content and helpful resources.
        </p>

        <div className="grid gap-8">
          {learningModules.map((module, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg bg-gradient-to-r from-blue-800 via-purple-800 to-blue-900 p-6 transition-transform transform hover:scale-105 border border-gray-700 hover:border-white"
            >
              <h2 className="mb-4 text-2xl font-semibold text-white">{module.title}</h2>
              <p className="mb-6 text-gray-300">
                {module.description}
              </p>

              <div className="mb-6 aspect-video w-full overflow-hidden rounded-lg shadow-md">
                <iframe
                  width="100%"
                  height="100%"
                  src={module.videoUrl}
                  title={module.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="border-0"
                />
              </div>

              <div className="flex flex-wrap gap-4">
                {module.resources.map((resource, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    className="border-white text-white hover:bg-blue-700"
                    asChild
                  >
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      {resource.name}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}