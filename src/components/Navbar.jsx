import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext'; // Import custom hook

export default function Navbar({ onOpenAudit }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Consume Theme Context

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            LeadsBy<span className="text-blue-600 dark:text-blue-500">Tech</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700 dark:text-slate-300">
          <a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a>
          <a href="#why-us" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Why Choose Us</a>
          <a href="#process" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">How We Work</a>
          <a href="#tech" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Tech Stack</a>
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</a>
        </nav>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-slate-700" />}
          </button>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenAudit}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg shadow-blue-600/25 transition-all cursor-pointer"
          >
            Book Free Tech Audit
          </motion.button>
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-slate-700" />}
          </button>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-slate-800 dark:text-slate-300 p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </header>
  );
}