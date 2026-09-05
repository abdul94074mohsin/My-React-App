import React from 'react';
import { motion } from 'framer-motion';

export default function TrustStats() {
  const stats = [
    { label: 'Project Delivered', value: '15+' },
    { label: 'Client Satisfaction', value: '100%' },
    { label: 'Avg ROI Increase', value: '3.5x' },
    { label: 'System Uptime', value: '99.9%' }
  ];

  return (
    <div className="py-8 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-4 text-center rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 shadow-sm"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-1">{stat.value}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}