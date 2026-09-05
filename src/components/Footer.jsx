import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-slate-400">
        
        {/* Brand */}
        <button 
          onClick={() => navigate('/')} 
          className="text-base font-bold text-white tracking-tight cursor-pointer"
        >
          LeadsBy<span className="text-blue-500">Tech</span>
        </button>

        {/* Dynamic Route Links */}
        <div className="flex flex-wrap justify-center gap-6">
          <button onClick={() => navigate('/services')} className="hover:text-white transition-colors cursor-pointer">Services</button>
          <button onClick={() => navigate('/why-us')} className="hover:text-white transition-colors cursor-pointer">Why Us</button>
          <button onClick={() => navigate('/process')} className="hover:text-white transition-colors cursor-pointer">Process</button>
          <button onClick={() => navigate('/tech')} className="hover:text-white transition-colors cursor-pointer">Tech Stack</button>
          <button onClick={() => navigate('/about')} className="hover:text-white transition-colors cursor-pointer">About</button>
        </div>

        {/* Copyright */}
        <p>© {new Date().getFullYear()} LeadsByTech. All rights reserved.</p>
      </div>
    </footer>
  );
}