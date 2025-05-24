import React from 'react'

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-down">Key Features</h2>
        <p className="text-xl text-center mb-16 animate-fade-in delay-200">Discover what makes our platform the best place to learn.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Feature Card 1 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform transition duration-500 hover:scale-105 animate-fade-in delay-400">
            <h3 className="text-2xl font-semibold mb-4">Curated Learning Paths</h3>
            <p className="text-gray-300">Follow expertly designed paths to master frontend and backend development step-by-step.</p>
          </div>
          {/* Feature Card 2 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform transition duration-500 hover:scale-105 animate-fade-in delay-500">
            <h3 className="text-2xl font-semibold mb-4">Hands-on Projects</h3>
            <p className="text-gray-300">Apply your knowledge with real-world projects that build your portfolio.</p>
          </div>
          {/* Feature Card 3 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform transition duration-500 hover:scale-105 animate-fade-in delay-600">
            <h3 className="text-2xl font-semibold mb-4">Community Support</h3>
            <p className="text-gray-300">Connect with other learners and mentors to get help and stay motivated.</p>
          </div>
          {/* Feature Card 4 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform transition duration-500 hover:scale-105 animate-fade-in delay-700">
            <h3 className="text-2xl font-semibold mb-4">Regular Updates</h3>
            <p className="text-gray-300">Stay current with the latest technologies and industry trends.</p>
          </div>
          {/* Feature Card 5 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform transition duration-500 hover:scale-105 animate-fade-in delay-800">
            <h3 className="text-2xl font-semibold mb-4">Flexible Learning</h3>
            <p className="text-gray-300">Learn at your own pace, anytime, anywhere, on any device.</p>
          </div>
          {/* Feature Card 6 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform transition duration-500 hover:scale-105 animate-fade-in delay-900">
            <h3 className="text-2xl font-semibold mb-4">Expert Instructors</h3>
            <p className="text-gray-300">Learn from experienced professionals with real-world expertise.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features