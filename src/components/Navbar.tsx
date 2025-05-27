'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-lg border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-[#A435F0]">{"<"} CodeWithPratham {"/>"}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              className="text-[#000000] hover:text-[#A435F0] transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/choose"
              className="text-[#000000] hover:text-[#A435F0] transition duration-300"
            >
              Choose Learning
            </Link>
            <Link
              href="/resources"
              className="text-[#000000] hover:text-[#A435F0] transition duration-300"
            >
              Resources
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-[#000000] hover:bg-gray-100 hover:text-[#A435F0] transition duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                href="/"
                className="block rounded-md px-3 py-2 text-base font-medium text-[#000000] hover:bg-gray-100 hover:text-[#A435F0] transition duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/choose"
                className="block rounded-md px-3 py-2 text-base font-medium text-[#000000] hover:bg-gray-100 hover:text-[#A435F0] transition duration-300"
                onClick={toggleMenu}
              >
                Choose Learning
              </Link>
              <Link
                href="/resources"
                className="block rounded-md px-3 py-2 text-base font-medium text-[#000000] hover:bg-gray-100 hover:text-[#A435F0] transition duration-300"
                onClick={toggleMenu}
              >
                Resources
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}