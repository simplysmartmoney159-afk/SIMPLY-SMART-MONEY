'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-navy-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-navy-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-playfair font-bold text-lg">$</span>
            </div>
            <span className="font-playfair font-bold text-xl text-navy-900 hidden sm:inline">
              Simply Smart Money
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link
              href="/"
              className="text-navy-900 font-sourceSans font-medium hover:text-navy-600"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-navy-900 font-sourceSans font-medium hover:text-navy-600"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-navy-900 font-sourceSans font-medium hover:text-navy-600"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-navy-900 font-sourceSans font-medium hover:text-navy-600"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <span
              className={`w-6 h-0.5 bg-navy-900 transition-all ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-navy-900 transition-all ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-navy-900 transition-all ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-navy-100">
            <Link
              href="/"
              className="block py-2 text-navy-900 hover:text-navy-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="block py-2 text-navy-900 hover:text-navy-600"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="block py-2 text-navy-900 hover:text-navy-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-navy-900 hover:text-navy-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
