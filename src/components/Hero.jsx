import React from 'react';
import Spline from '@splinetool/react-spline';
import { PlayCircle, Eye } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[88vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-medium shadow-sm ring-1 ring-emerald-200">
            🔒 100% Offline • No Data Leaves Your System
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Search Everything. Find Anything. Instantly.
          </h1>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-2xl">
            A multimodal RAG system that breaks data silos—query documents, images, screenshots, and audio recordings through one unified, AI-powered interface. Works completely offline.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#demo" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-3 text-white font-medium shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition-colors">
              <Eye size={18}/> See Demo
            </a>
            <a href="#overview" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-gray-900 font-medium shadow ring-1 ring-gray-200 hover:bg-gray-50 transition-colors">
              <PlayCircle size={18}/> Watch Overview
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
