import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Code, Cpu, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const navigate = useNavigate();

  const servicesList = [
    {
      icon: Globe,
      title: 'Website Development',
      desc: 'Scalable, lightning-fast web architectures engineered for maximum performance, engagement, and conversion optimization.'
    },
    {
      icon: Code,
      title: 'Enterprise Software',
      desc: 'Bespoke software systems designed to simplify complex operational workflows and boost productivity.'
    },
    {
      icon: Cpu,
      title: 'B2B Automation & Platforms',
      desc: 'Custom digital platforms and integrated CRM solutions built to power automated business growth.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">Enterprise Solutions</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">Tailored digital engineering to elevate your enterprise workflow.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {servicesList.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-blue-500/50 shadow-sm transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">{service.desc}</p>
              </div>

              {/* ❌ <a href="#contact"> ki jagah  ✅ useNavigate() use kiya hai */}
              <button 
                onClick={() => navigate('/services')} 
                className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform cursor-pointer border-none bg-transparent p-0 text-left"
              >
                Learn More <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}