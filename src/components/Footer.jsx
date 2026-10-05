import React from 'react';
import { Shield, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-800 bg-[#07090e] font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Left Brand Identity */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 font-bold text-white text-base">
              <Shield className="w-5 h-5 text-[#00f0ff]" />
              <span>NITHISH K</span>
            </div>
            <p className="text-cyan-400">
              FULL-STACK DEVELOPER × CYBERSECURITY ANALYST
            </p>
            <p className="text-slate-500 font-syne text-sm font-bold tracking-widest uppercase">
              BUILD. SECURE. INNOVATE.
            </p>
          </div>

          {/* Right Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="px-4 py-2.5 rounded bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-400 hover:text-white transition-all flex items-center gap-2 group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © 2026 Nithish K. All rights reserved. Built with React & Tailwind CSS.
          </div>
          <div className="text-slate-600">
            TAMIL NADU, INDIA • B.E. IT ANNAMALAI UNIVERSITY
          </div>
        </div>

      </div>
    </footer>
  );
}
