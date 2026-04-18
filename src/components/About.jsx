import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <section id="about" className="py-32 font-mono">
      <SectionHeader 
        command="whoami && cat mission.txt" 
        comment=""
      />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-12 items-start relative">
        {/* Terminal Text */}
        <motion.div 
          className="md:col-span-3 text-gray-300 leading-loose text-sm md:text-base p-6 bg-[#0a0a0a] border border-gray-800 rounded-lg shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle bg noise / line numbers */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-[#111] border-r border-gray-800 flex flex-col pt-6 font-xs text-gray-600 items-center justify-start pointer-events-none select-none hidden md:flex">
             <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
          </div>

          <div className="md:ml-6">
            <p className="mb-6"><span className="text-purple-400">const</span> sushwanth <span className="text-white">=</span> <span className="text-cyan-300">new Developer</span>();</p>
            <p className="mb-4">
              I am a first-year <span className="text-blue-300 border-b border-blue-900 border-dashed">Computer Science (Core)</span> student at 
              <span className="text-green-300 border-b border-green-900 border-dashed"> Amrita Vishwa Vidyapeetham, Chennai</span>. 
              My passion lies in exploring software development and building scalable applications.
            </p>
            <p className="mb-4">
              Currently focusing on Java, object-oriented programming, and modern web development (React, TypeScript). When I'm not writing code, I'm participating in labs or exploring new tech stacks.
            </p>
            
            <p className="mt-8 text-gray-500 italic">
              // Continuously learning new tech stacks.
            </p>
            <p className="text-gray-500 italic">
              // Next goal: Master distributed systems.
            </p>
          </div>
        </motion.div>

        {/* Binary Image / ASCII Art Representation */}
        <motion.div 
          className="md:col-span-2 flex flex-col justify-center items-center p-8 bg-[#0a0a0a] border border-gray-800 rounded-lg shadow-2xl min-h-[300px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-xs text-green-500 opacity-60 overflow-hidden text-center whitespace-pre font-mono leading-none tracking-tighter hover:text-cyan-400 hover:opacity-100 transition-colors duration-500 cursor-default">
            {`
.oOOo.  .oOOOo.
o     o o     o
O     O O     O
oOooOo. oOooOo.
o     O o     O
O     o O     o
.oOOo'  .oOOo' 
            `}
            <br />
            <span className="mt-4 block font-bold tracking-widest uppercase">IMAGE_PLACEHOLDER</span>
            <span className="block mt-2 font-normal text-gray-500 animate-pulse text-[10px]">Uploading profile data...</span>
          </div>
        </motion.div>
        
        {/* Connection line */}
        <div className="hidden md:block absolute left-[60%] top-[20%] w-[5%] border-t border-dashed border-gray-700 z-[-1]"></div>
      </div>
    </section>
  );
}