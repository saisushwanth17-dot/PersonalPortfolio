import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ command, comment }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mb-12 font-mono"
    >
      <div className="flex items-center text-xl md:text-3xl font-bold mb-4">
        <span className="text-gray-600 mr-4">##</span>
        <span className="text-gray-400 mr-3">$</span>
        <span className="text-gray-100">{command}</span>
      </div>
      {comment && (
        <p className="text-gray-500 text-sm md:text-base border-l-2 border-gray-800 pl-4 py-1 italic">
          {comment}
        </p>
      )}
    </motion.div>
  );
}