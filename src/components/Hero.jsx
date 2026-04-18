import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const codeString = `
import { Developer } from '@sushwanth/core';

const profile = new Developer({
  name: "Sushwanth Varma",
  role: "CS(Core) Student & Developer",
  focus: "Building applications & exploring Java/TS",
  passion: "Open source & problem solving",
});

profile.initialize();
`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(codeString.slice(0, index));
      index++;
      if (index > codeString.length) clearInterval(interval);
    }, 20); // Typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 px-4 md:px-0 font-mono relative overflow-hidden">
      
      {/* Background terminal decoration */}
      <div className="absolute inset-0 z-[-1] opacity-5 pointer-events-none hidden md:block">
         <div className="absolute top-[20%] left-[10%] text-xs text-green-500 whitespace-pre">
           {`$ sys_info\nOS: Linux 5.15.0\nUptime: 42 days, 14:12\nLoad: 0.42, 0.51, 0.48`}
         </div>
         <div className="absolute bottom-[20%] right-[10%] text-xs text-green-500 whitespace-pre">
           {`$ npm run build\n[vite] building...\n[vite] done in 2.41s`}
         </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl mx-auto"
      >
        <div className="mb-6 flex items-center text-gray-500 text-sm">
          <span className="text-green-400 mr-2">➜</span>
          <span>~/portfolio</span>
          <span className="ml-2 text-cyan-400 border-b border-cyan-400 bg-cyan-900/20 px-1">main</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-bold mb-4 tracking-tight min-h-[4rem] text-white">
          <span className="text-purple-500">&lt;</span>
          Sushwanth Varma 
          <span className="text-purple-500"> /&gt;</span>
        </h1>
        
        <h2 className="text-xl md:text-3xl text-gray-400 mb-8 border-l-4 border-cyan-500 pl-4 py-1">
          CS(Core) Student @ Amrita Vishwa Vidyapeetham
        </h2>

        {/* Mock IDE Window */}
        <div className="bg-[#0a0a0a] rounded-lg shadow-2xl border border-gray-800 overflow-hidden">
          {/* Header */}
          <div className="bg-[#111111] px-4 py-2 flex items-center border-b border-gray-800">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-gray-500 text-xs flex-1 text-center font-sans tracking-wide">
              portfolio.tsx - VS Code
            </div>
          </div>
          
          {/* Body */}
          <div className="p-4 md:p-6 text-sm md:text-base overflow-x-auto text-gray-300">
            <pre>
              <code>
                {typedText}
                <span className="animate-pulse bg-white/50 w-2 h-5 inline-block align-middle ml-1"></span>
              </code>
            </pre>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#projects" className="bg-cyan-600 hover:bg-cyan-500 text-black px-6 py-3 rounded font-bold uppercase tracking-widest text-sm transition-colors shadow-[0_0_15px_rgba(8,145,178,0.4)]">
            Explore Work
          </a>
          <a href="#contact" className="border border-gray-600 hover:border-gray-400 text-gray-300 px-6 py-3 rounded font-bold uppercase tracking-widest text-sm transition-colors">
            Init Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
}