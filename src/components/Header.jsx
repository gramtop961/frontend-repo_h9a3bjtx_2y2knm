import React from 'react';
import { Rocket, BookOpen, Phone, Blocks, ListChecks } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 shadow-sm" />
            <span>OmniRAG</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900 transition-colors flex items-center gap-2"><Blocks size={16}/> Features</a>
            <a href="#how" className="hover:text-gray-900 transition-colors flex items-center gap-2"><ListChecks size={16}/> How It Works</a>
            <a href="#use-cases" className="hover:text-gray-900 transition-colors">Use Cases</a>
            <a href="#docs" className="hover:text-gray-900 transition-colors flex items-center gap-2"><BookOpen size={16}/> Documentation</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors flex items-center gap-2"><Phone size={16}/> Contact</a>
          </nav>

          <a href="#get-started" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <Rocket size={16}/> Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
