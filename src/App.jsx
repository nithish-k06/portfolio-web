import React from 'react';
import CanvasBackground from './components/CanvasBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SecurityFocus from './components/SecurityFocus';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import SecurityLab from './components/SecurityLab';
import ExperienceTimeline from './components/ExperienceTimeline';
import CurrentFocus from './components/CurrentFocus';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-200 overflow-x-hidden font-sans selection:bg-[#00f0ff] selection:text-black">
      {/* Background Interactive Cyber Node Grid Canvas */}
      <CanvasBackground />

      {/* Navigation HUD Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-0">
        <Hero />
        <About />
        <SecurityFocus />
        <TechStack />
        <Projects />
        <SecurityLab />
        <ExperienceTimeline />
        <CurrentFocus />
        <ResumeSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
