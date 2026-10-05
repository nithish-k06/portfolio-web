import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Terminal, ArrowUpRight } from 'lucide-react';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SECURITY', href: '#security' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'SECURITY LAB', href: '#security-lab' },
    { label: 'JOURNEY', href: '#journey' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07090e]/85 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group text-white font-mono text-sm tracking-wider font-bold"
          >
            <div className="w-8 h-8 rounded bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center group-hover:border-cyan-400 transition-colors shadow-[0_0_10px_rgba(0,240,255,0.2)]">
              <Shield className="w-4 h-4 text-[#00f0ff]" />
            </div>
            <span>
              NITHISH <span className="text-[#00f0ff]">// 01</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 font-mono text-xs tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-400 hover:text-[#00f0ff] transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00f0ff] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Status Badge */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2 font-mono text-[11px] text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>● OPEN TO OPPORTUNITIES</span>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 bg-[#0c1017]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#00f0ff]" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07090e]/95 backdrop-blur-xl border-b border-cyan-500/20 px-6 py-6 font-mono text-sm space-y-4 animate-in fade-in slide-in-from-top-4">
          <div className="pb-3 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              OPEN TO OPPORTUNITIES
            </span>
            <span className="text-slate-500">TAMIL NADU, INDIA</span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded bg-[#0c1017] border border-slate-800 text-slate-300 hover:text-[#00f0ff] hover:border-cyan-500/30 flex items-center justify-between text-xs tracking-wider"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
