import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 py-12 border-t border-gray-200 shadow-inner" aria-label="Site Footer">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-[#000000] mb-2 tracking-tight">
            <span className="text-[#A435F0]">Code</span>WithPratham
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Empowering developers with structured learning paths and comprehensive resources.
          </p>
        </div>

        <nav className="grid grid-cols-1 pl-8 md:pl-16 lg:pl-32 md:grid-cols-3 gap-8 mb-8 text-left" aria-label="Footer Navigation">
          <div>
            <h3 className="text-lg font-semibold text-[#000000] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-[#A435F0] transition-colors duration-200 focus:outline-none focus:text-[#A435F0]">Home</Link></li>
              <li><Link href="/choose" className="text-gray-600 hover:text-[#A435F0] transition-colors duration-200 focus:outline-none focus:text-[#A435F0]">Choose Learning</Link></li>
              <li><Link href="/resources" className="text-gray-600 hover:text-[#A435F0] transition-colors duration-200 focus:outline-none focus:text-[#A435F0]">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#000000] mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-[#A435F0] transition-colors duration-200 focus:outline-none focus:text-[#A435F0]">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#A435F0] transition-colors duration-200 focus:outline-none focus:text-[#A435F0]">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#000000] mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.linkedin.com/in/pratham-darji-b704092a2/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#A435F0] transition-colors duration-200 focus:outline-none focus:text-[#A435F0]">
                  LinkedIn Profile
                </Link>
              </li>
              <li className="flex items-center space-x-4 mt-3 justify-center md:justify-start">
                <Link
                  href="https://github.com/Pratham-Prog861"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-black justify-center rounded-full p-2 hover:bg-gray-100 focus:bg-gray-200 transition-colors duration-200 focus:outline-none"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-6 h-6" aria-hidden="true" />
                  <span className="sr-only absolute w-px h-px p-0 m-[-1px] overflow-hidden clip-rect whitespace-nowrap border-0">GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/pratham-darji-b704092a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-black   justify-center rounded-full p-2 hover:bg-gray-100 focus:bg-gray-200 transition-colors duration-200 focus:outline-none"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6" aria-hidden="true" />
                  <span className="sr-only absolute w-px h-px p-0 m-[-1px] overflow-hidden clip-rect whitespace-nowrap border-0">LinkedIn</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="border-t border-gray-200 pt-8 mt-8">
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Developed by Pratham Darji. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;