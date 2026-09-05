import React from 'react';
import { motion } from 'framer-motion';

export default function CTASection({ onOpenAudit }) {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-slate-100 to-blue-100/50 dark:from-slate-950 dark:to-blue-950/40 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight">
            Ready to Build Your Growth Engine?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg mb-8 max-w-xl mx-auto">
            Stop losing revenue to slow systems. Let's architect your digital infrastructure today.
          </p>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenAudit}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-xl shadow-blue-600/30 transition-all text-sm sm:text-base cursor-pointer"
          >
            Book Your Free Tech Audit
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}