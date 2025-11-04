import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Sections from './components/Sections.jsx';
import CallToAction from './components/CallToAction.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="relative">
        <Hero />
        <Sections />
        <CallToAction />
      </main>
    </div>
  );
}

export default App;
