import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Ahmed Al-Mansoori",
      role: "CEO, Tech Ventures Qatar",
      quote: "LeadsByTech transformed our lead generation process. Our conversion rate increased by 250% within the first month. The quality of execution is exceptional."
    },
    {
      name: "Neha Sharma",
      role: "Marketing Director",
      quote: "The team delivering access to our platform was stellar. Drift bounce rate dropped from 48% to 12%. The team was responsive, professional, and delivered on time."
    },
    {
      name: "Rajesh Patel",
      role: "Founder, ScaleUp",
      quote: "They delivered our SaaS platform on time, within budget, and with exceptional code quality. Communication was clear, consistent, and highly execution-focused."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">Client Feedback</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">Here is what founders say about working with LeadsByTech.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col justify-between shadow-sm"
            >
              <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <div className="flex text-amber-500 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{t.name}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}