import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "B.Tech CSE (Core) Student",
      company: "Amrita Vishwa Vidyapeetham",
      time: "2025 - Present",
      hash: "1st-year",
      commit: "init(edu): Commenced degree in Computer Science",
      details: ["Focusing on Java, Data Structures, & Web Dev", "Active in campus coding labs"]
    },
    {
      id: 2,
      role: "Open Source Contributor",
      company: "GitHub",
      time: "2025 - Present",
      hash: "dev-mode",
      commit: "feat(projects): Building frontend & utility apps",
      details: ["Developing the SUVIDHA frontend", "Experimenting with TypeScript and UI libraries"]
    }
  ];

  return (
    <section id="experience" className="py-24 font-mono">
      <SectionHeader 
        command="git log --education --stat" 
        comment=""
      />

      <div className="relative border-l-2 border-gray-800 ml-4 md:ml-8 mt-12 bg-[#0a0a0a] rounded-lg shadow-2xl p-6">
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id}
            className="mb-12 ml-6 relative group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Git Branch / Commit Node */}
            <span className="absolute -left-[45px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#1a1a1a] shadow-[0_0_10px_rgba(34,211,238,0.2)] border border-cyan-500/50 ring-4 ring-[#050505]">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse group-hover:bg-white transition-colors" />
            </span>

            {/* Commit Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between text-sm mb-2 gap-2">
              <div className="flex items-center gap-3">
                <span className="text-yellow-400 font-bold">{exp.hash}</span>
                <span className="text-gray-300 font-semibold">{exp.role} @ <span className="text-cyan-300">{exp.company}</span></span>
              </div>
              <span className="text-gray-500 flex items-center gap-2">
                 <span className="text-blue-400">({exp.time})</span>
              </span>
            </div>

            {/* Commit Message */}
            <h3 className="text-md text-white mb-3 font-semibold break-words">
              {exp.commit}
            </h3>

            {/* Detail Stats */}
            <div className="space-y-1">
              {exp.details.map((detail, idx) => (
                <div key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                  <span className="text-green-500 mt-1">{`+`}</span>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
            
            <div className="text-xs text-gray-600 mt-3 italic border-t border-gray-800/50 pt-2">
               2 files changed, 45 insertions(+), 12 deletions(-)
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}