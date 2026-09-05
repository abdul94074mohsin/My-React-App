import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

export default function AuditModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-md p-6 relative shadow-2xl transition-colors duration-300"
        >
          <button onClick={onClose} className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer">
            <X size={20} />
          </button>

          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
            <Sparkles size={18} />
            <span className="text-xs font-bold uppercase tracking-wider">Free Technical Audit</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Schedule Your Audit</h3>

          <form onSubmit={(e) => { e.preventDefault(); onClose(); }} className="space-y-4">
            <div>
              <label className="text-xs text-slate-600 dark:text-slate-400 block mb-1">Your Name</label>
              <input type="text" placeholder="John Doe" required className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="text-xs text-slate-600 dark:text-slate-400 block mb-1">Email Address</label>
              <input type="email" placeholder="john@example.com" required className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="text-xs text-slate-600 dark:text-slate-400 block mb-1">Website / Project Details</label>
              <textarea rows="3" placeholder="Tell us about your current stack or goals..." className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500" />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-lg transition-all text-sm shadow-lg shadow-blue-600/30 cursor-pointer">
              Submit Audit Request
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}