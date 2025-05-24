import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ChoosePath() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 p-4">
      <h1 className="text-center text-3xl font-bold md:text-5xl">
        Choose Your Learning Path
      </h1>
      <p className="max-w-2xl text-center text-gray-500 dark:text-gray-400">
        Select the development path you want to pursue. Each path contains carefully curated resources and a structured learning approach.
      </p>
      <div className="mt-8 grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        <Link
          href="/frontenddev"
          className="group relative overflow-hidden rounded-lg border p-8 transition-colors hover:border-blue-500"
        >
          <div className="relative z-10">
            <h2 className="mb-4 text-2xl font-semibold">Frontend Development</h2>
            <p className="mb-6 text-gray-500 dark:text-gray-400">
              Master HTML, CSS, JavaScript, and modern frameworks like React and Next.js. Build beautiful, responsive user interfaces.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90">
              Start Frontend Path
            </Button>
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 transition-opacity group-hover:opacity-10 dark:from-blue-900 dark:to-purple-900" />
        </Link>

        <div className="relative overflow-hidden rounded-lg border p-8 opacity-60">
          <div className="relative z-10">
            <h2 className="mb-4 text-2xl font-semibold">Backend Development</h2>
            <p className="mb-6 text-gray-500 dark:text-gray-400">
              Coming soon! Learn server-side programming, databases, APIs, and backend frameworks.
            </p>
            <Button disabled className="bg-gray-500 text-white">
              Coming Soon
            </Button>
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800" />
        </div>
      </div>
    </div>
  );
}