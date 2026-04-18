import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-[#050505] text-gray-300 font-['Inter'] selection:bg-cyan-500/30 overflow-hidden relative min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10 pt-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}