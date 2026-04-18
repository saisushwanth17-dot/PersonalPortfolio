import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "ASHAHelper",
      status: "public",
      size: "TS",
      date: "Recent",
      desc: "TypeScript based utility application",
      tech: ["TypeScript"],
      link: "https://github.com/saisushwanth17-dot/ASHAHelper"
    },
    {
      id: 2,
      name: "OOPS_LAB",
      status: "academic",
      size: "Java",
      date: "Recent",
      desc: "The basic java programs done in class",
      tech: ["Java", "OOP"],
      link: "https://github.com/saisushwanth17-dot/OOPS_LAB"
    },
    {
      id: 3,
      name: "SUVIDHA-FRONTEND",
      status: "public",
      size: "TS/JS",
      date: "Recent",
      desc: "Contains code for the frontend of SUVIDHA project",
      tech: ["TypeScript"],
      link: "https://github.com/saisushwanth17-dot/SUVIDHA-FRONTEND"
    },
    {
      id: 4,
      name: "TestRepo",
      status: "public",
      size: "JS",
      date: "Recent",
      desc: "Exploration repository for JavaScript",
      tech: ["JavaScript"],
      link: "https://github.com/saisushwanth17-dot/TestRepo"
    }
  ];

  return (
    <section id="projects" className="py-24 font-mono">
      <SectionHeader 
        command="ls -la ./projects" 
        comment="Total 4 items"
      />

      <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg overflow-hidden mt-8 shadow-2xl p-6 text-sm text-gray-300">
        <div className="hidden md:grid grid-cols-12 gap-4 text-gray-500 mb-4 pb-2 border-b border-gray-800 tracking-wider">
          <div className="col-span-1">PERMS</div>
          <div className="col-span-1">LINKS</div>
          <div className="col-span-2">USER</div>
          <div className="col-span-1">SIZE</div>
          <div className="col-span-2">DATE</div>
          <div className="col-span-5">NAME</div>
        </div>

        <div className="space-y-6 md:space-y-2">
          {projects.map((proj, index) => (
            <motion.div 
              key={proj.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 hover:bg-white/5 p-2 rounded transition-colors group cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Mobile View */}
              <div className="md:hidden flex justify-between items-center mb-2">
                <span className="text-cyan-400 font-bold">{proj.name}</span>
                <span className={proj.status === 'deployed' ? "text-green-400" : "text-yellow-400"}>
                  [{proj.status}]
                </span>
              </div>
              <div className="md:hidden text-xs text-gray-400 mb-2">{proj.desc}</div>
              <div className="md:hidden flex flex-wrap gap-2">
                {proj.tech.map(t => <span key={t} className="text-xs bg-gray-800 px-2 py-1 rounded text-purple-300">{t}</span>)}
              </div>

              {/* Desktop View */}
              <div className="hidden md:flex col-span-1 text-gray-500">drwxr-xr-x</div>
              <div className="hidden md:flex col-span-1 text-gray-500">2</div>
              <div className="hidden md:flex col-span-2 text-purple-400">sushwanth</div>
              <div className="hidden md:flex col-span-1 text-gray-400">{proj.size}</div>
              <div className="hidden md:flex col-span-2 text-blue-300">{proj.date}</div>
              
              <div className="hidden md:block col-span-5 relative">
                <div className="flex items-center gap-2 group-hover:text-white transition-colors">
                  <span className="text-cyan-400">{proj.name}</span>
                  <span className="text-gray-600 text-xs">/* {proj.desc} */</span>
                </div>
                
                {/* Tech stack tags that appear on hover */}
                <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2 bg-[#0a0a0a] pl-2">
                  {proj.tech.map(t => (
                    <span key={t} className="text-xs bg-gray-800 text-white px-2 py-0.5 rounded border border-gray-700">
                      {t}
                    </span>
                  ))}
                  <a href={proj.link} className="text-xs bg-cyan-900/30 text-cyan-400 px-2 py-0.5 rounded border border-cyan-800 hover:bg-cyan-900/50">
                    VIEW
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-gray-800 text-gray-500 flex items-center justify-between">
           <span>$ <span className="animate-pulse">_</span></span>
           <span className="text-xs">Hint: Hover over rows (desktop) for details</span>
        </div>
      </div>
    </section>
  );
}