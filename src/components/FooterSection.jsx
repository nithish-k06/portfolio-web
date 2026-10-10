import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

export default function FooterSection() {
  const scrollToTop = () => {
    sound.playHover();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'TOP MOMENTS', href: '#moments' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'ABOUT', href: '#about' },
    { label: 'EDUCATION', href: '#certifications' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[#06070a] py-14 font-sans text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Row: Branding, Nav Links, Back to top */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Brand */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-b from-red-600 to-black border border-red-500/50 flex items-center justify-center">
                <span className="font-syne font-black text-[#E50914] text-lg leading-none">N</span>
              </div>
              <span className="font-syne text-xl font-black text-white tracking-wider">
                {personalInfo.name}
              </span>
            </div>
            <p className="font-mono text-xs text-slate-500">
              {personalInfo.title}
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 font-mono text-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => sound.playHover()}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="self-start md:self-auto p-3 rounded-full bg-white/5 border border-white/10 hover:border-red-500 hover:text-white transition-colors text-slate-400 flex items-center gap-2 font-mono text-xs"
            title="Back to Top"
          >
            <span>TOP</span>
            <ArrowUp className="w-4 h-4 text-red-500" />
          </button>

        </div>

        {/* Bottom Row: Socials, Copyright & Tagline */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-slate-500">
          
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
            <p className="text-slate-600 text-[11px]">
              Designed with curiosity and code.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playHover()}
              className="p-2 rounded bg-white/5 border border-white/10 hover:border-red-500 hover:text-white text-slate-400 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playHover()}
              className="p-2 rounded bg-white/5 border border-white/10 hover:border-blue-500 hover:text-white text-slate-400 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
