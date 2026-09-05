import React from 'react';
import { motion } from 'framer-motion';

export default function TechStack() {
  const stack = ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Docker', 'AWS'];

  return (
    <section id="tech" className="py-16 md:py-24 bg-slate-100 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">Our Technology Stack</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">Built with industry-proven tools and modern frameworks.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6">
          {stack.map((tech, idx) => (
            <motion.span 
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm shadow-sm"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}