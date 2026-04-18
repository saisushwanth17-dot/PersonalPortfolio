import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

export default function Skills() {
  const skillsData = {
    languages: ["Java", "TypeScript", "JavaScript", "Python"],
    frameworks: ["React", "Express", "Node.js"],
    tools: ["Git", "Vite", "Linux"],
    databases: ["PostgreSQL", "MongoDB"]
  };

  const [activeTab, setActiveTab] = useState('languages');

  return (
    <section id="skills" className="py-24 font-mono">
      <SectionHeader 
        command="cat skills.json" 
        comment=""
      />

      <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg overflow-hidden mt-8 shadow-2xl">
        {/* IDE Tabs */}
        <div className="flex overflow-x-auto border-b border-gray-800 bg-[#0d0d0d] hide-scrollbar">
          {Object.keys(skillsData).map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 text-xs tracking-widest uppercase whitespace-nowrap transition-colors border-r border-gray-800 ${
                activeTab === category 
                ? "bg-[#141414] text-cyan-400 border-t-2 border-t-cyan-500" 
                : "text-gray-500 hover:text-gray-300 hover:bg-[#111]"
              }`}
            >
              {category}.json
            </button>
          ))}
        </div>

        {/* IDE Content */}
        <div className="p-6">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm md:text-md leading-loose"
          >
            <pre className="text-gray-300 overflow-x-auto">
<span className="text-gray-600 mr-4 select-none">1</span><span className="text-gray-400">{"{"}</span><br/>
<span className="text-gray-600 mr-4 select-none">2</span>  <span className="text-purple-300">"{activeTab}"</span>: [<br/>
              {skillsData[activeTab].map((skill, index) => (
                <div key={skill} className="group">
<span className="text-gray-600 mr-4 select-none">{index + 3}</span>    <span className="text-green-300 group-hover:text-green-200 transition-colors">"{skill}"</span>{index < skillsData[activeTab].length - 1 ? "," : ""}<br/>
                </div>
              ))}
<span className="text-gray-600 mr-4 select-none">{skillsData[activeTab].length + 3}</span>  ]<br/>
<span className="text-gray-600 mr-4 select-none">{skillsData[activeTab].length + 4}</span><span className="text-gray-400">{"}"}</span>
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
}