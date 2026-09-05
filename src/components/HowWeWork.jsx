import React from 'react';
import { motion } from 'framer-motion';

export default function HowWeWork() {
  const steps = [
    { num: '01', title: 'Requirement & Analysis', desc: 'In-depth consultation to clarify exact technical scope and performance objectives.' },
    { num: '02', title: 'Architecture & UI/UX Design', desc: 'Designing intuitive screen layouts backed by robust system data models.' },
    { num: '03', title: 'Development & Testing', desc: 'Clean, modern full-stack development with continuous quality assurance.' },
    { num: '04', title: 'Deployment & Support', desc: 'Production release, server configuration, and continuous monitoring.' }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">How We Work</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">A clear, transparent lifecycle for every single project.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="relative p-6 bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm"
            >
              <span className="text-3xl sm:text-4xl font-black text-blue-600/20 dark:text-blue-500/20 block mb-2">{step.num}</span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}