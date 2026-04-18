import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-mono ${
        scrolled 
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-gray-800 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter flex items-center gap-2"
        >
          <span className="text-cyan-400">~/</span><span className="text-white hover:text-cyan-300 transition-colors cursor-pointer">Sushwanth</span>
          <span className="animate-pulse inline-block w-2 h-4 bg-purple-500 ml-1"></span>
        </motion.div>

        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm text-gray-400 hover:text-white hover:border-b hover:border-cyan-500 pb-1 transition-all uppercase tracking-widest"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="/resume.pdf"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="ml-4 px-4 py-2 text-xs border border-cyan-700 text-cyan-400 hover:bg-cyan-900/30 rounded uppercase tracking-widest transition-colors font-bold"
          >
            Get Resume
          </motion.a>
        </nav>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden text-cyan-400 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen 
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-gray-800"
          >
            <div className="flex flex-col items-center py-6 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-white text-sm uppercase tracking-widest w-full text-center"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-2 border border-cyan-700 text-cyan-400 bg-cyan-900/10 rounded text-sm uppercase tracking-widest"
              >
                Get Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}