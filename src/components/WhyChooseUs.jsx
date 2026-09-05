import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    { title: 'High-Performance Code', desc: 'Optimized architecture ensuring rapid load speeds and high Google PageSpeed scores.' },
    { title: 'Data Security First', desc: 'Enterprise-grade encryption and protocol compliance built directly into every layer.' },
    { title: 'Scalable Architecture', desc: 'Codebases engineered to support seamless future integrations and feature expansion.' },
    { title: 'Dedicated Tech Partner', desc: 'End-to-end transparent communication, strategic consultation, and proactive maintenance.' }
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-slate-100 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">Why Choose Us</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">Engineering standards that guarantee long-term business performance.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 rounded-2xl shadow-sm"
            >
              <CheckCircle2 className="text-blue-600 dark:text-blue-500 mb-4" size={26} />
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}