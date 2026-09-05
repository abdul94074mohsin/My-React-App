import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FounderSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-100 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden"
        >
          <div className="max-w-3xl">
            <span className="text-blue-600 dark:text-blue-500 font-semibold text-xs tracking-widest uppercase mb-2 block">Our Founder</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">From Code to Impact</h2>
            
            <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
              I founded LeadsByTech with a single mission: <strong className="text-slate-900 dark:text-white">to build high-performance digital solutions</strong> that help businesses scale and automate their operations.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
              With over 4+ years of enterprise development experience, I’ve architected websites, software systems, and automation pipelines that generate measurable ROI for businesses across the globe.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-8">
              I believe in <strong className="text-slate-900 dark:text-white">precision over volume</strong>—every line of code must serve a purpose, every architecture must scale, and every solution must drive business growth.
            </p>

            <a href="#contact" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-xs sm:text-sm hover:underline">
              Read Full Story <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}