import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Volume2, VolumeX, Users } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

export default function Navbar({ activeProfile, onSwitchProfile }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [muted, setMuted] = useState(sound.isMuted());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      // Section Spy
      const sections = ['home', 'moments', 'skills', 'projects', 'gateway', 'about', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'TOP MOMENTS', href: '#moments', id: 'moments' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'EDUCATION', href: '#certifications', id: 'certifications' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const toggleSound = () => {
    const next = sound.toggleMute();
    setMuted(next);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090d]/92 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with Netflix Red 'N' styling */}
          <a
            href="#home"
            onClick={() => sound.playHover()}
            className="flex items-center gap-2.5 group text-white font-syne font-bold tracking-wider text-base"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-b from-red-600 to-black border border-red-500/50 flex items-center justify-center group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(229,9,20,0.4)]">
              <span className="font-extrabold text-[#E50914] text-lg leading-none">N</span>
            </div>
            <div className="flex flex-col">
              <span className="leading-tight group-hover:text-red-400 transition-colors">
                {personalInfo.name}
              </span>
              <span className="font-mono text-[9px] text-red-500 tracking-widest font-normal uppercase">
                CYBER OPS // 2026
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 font-mono text-xs tracking-wider">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => sound.playHover()}
                  className={`transition-colors relative py-1 group ${
                    isActive ? 'text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#E50914] transition-all duration-300 ${
                      isActive ? 'w-full shadow-[0_0_8px_#E50914]' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Switch Profile, Sound, GitHub, Mobile Toggle */}
          <div className="flex items-center gap-3">
            
            {/* Switch Profile Button */}
            <button
              onClick={() => {
                sound.playHover();
                onSwitchProfile();
              }}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-red-500 hover:bg-red-950/30 text-xs font-mono text-slate-300 hover:text-white transition-all group"
              title="Switch Portfolio Profile"
            >
              <div className="w-4 h-4 rounded bg-red-600 flex items-center justify-center text-[10px] font-bold text-white">
                {activeProfile?.name ? activeProfile.name.charAt(0) : 'P'}
              </div>
              <span className="text-[11px]">{activeProfile?.name || 'Profile'}</span>
              <Users className="w-3.5 h-3.5 text-slate-500 group-hover:text-red-400 transition-colors" />
            </button>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 text-slate-300 hover:text-white transition-colors"
              title={muted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {muted ? <VolumeX className="w-4 h-4 text-slate-500" /> : <Volume2 className="w-4 h-4 text-red-500" />}
            </button>

            {/* GitHub Icon Link */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playHover()}
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-red-950/20 text-slate-300 hover:text-white transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                sound.playHover();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 rounded-lg border border-white/10 text-slate-300 hover:text-white bg-white/5"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-red-500" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#08090d]/98 backdrop-blur-2xl border-b border-red-500/20 px-6 py-6 font-mono text-sm space-y-4 animate-in fade-in slide-in-from-top-4">
          <div className="pb-3 border-b border-white/10 flex items-center justify-between text-xs">
            <span className="text-red-400 flex items-center gap-1.5 font-bold">
              <span className="h-2 w-2 rounded-full bg-[#E50914] animate-pulse" />
              {personalInfo.title.split('|')[0].trim()}
            </span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSwitchProfile();
              }}
              className="text-slate-400 hover:text-white underline underline-offset-2 flex items-center gap-1"
            >
              <Users className="w-3.5 h-3.5 text-red-500" />
              <span>Switch Profile</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2.5 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  sound.playHover();
                  setMobileMenuOpen(false);
                }}
                className={`py-3 px-3.5 rounded-lg border text-xs tracking-wider flex items-center justify-between transition-colors ${
                  activeSection === link.id
                    ? 'bg-red-950/40 border-red-500/60 text-white font-bold'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:border-white/30'
                }`}
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
