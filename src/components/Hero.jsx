import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenAudit }) {
  return (
    <section className="relative pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-500/10 dark:from-blue-900/20 via-transparent to-transparent opacity-70 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium mb-6">
            <Zap size={14} /> Custom Software & Growth Tech
          </span>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2] md:leading-[1.15] max-w-4xl mx-auto mb-6">
            Build High-Performance Products & <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 dark:from-blue-400 dark:via-indigo-400 dark:to-teal-300 bg-clip-text text-transparent">Engineered Platforms</span>
          </h1>
          
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            We architect web applications, custom software, and scalable infrastructure that drive modern business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenAudit}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 md:py-4 rounded-full shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
            >
              Book Your Free Tech Audit <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}