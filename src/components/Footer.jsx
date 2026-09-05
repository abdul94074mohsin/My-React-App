import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} LeadsByTech. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-400">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}