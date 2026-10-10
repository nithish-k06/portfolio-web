import React, { useState } from 'react';
import { User, BookOpen, Compass, Target, Code2, Download, MapPin, Building2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

export default function AboutMe() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    sound.playSuccess();
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#E50914', '#ffffff', '#0070F3']
    });

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);

    const resumeContent = `================================================================
NITHISH K
Cyber Analyst | IT Student | Python Developer
Location: ${personalInfo.location}
University: ${personalInfo.university}
Degree: ${personalInfo.education} (Expected Graduation: ${personalInfo.graduationYear})
GitHub: ${personalInfo.github}
Email: ${personalInfo.email}
================================================================

PROFILE SUMMARY
---------------
Information Technology undergraduate student at Annamalai University (Faculty of Engineering and Technology) with a core focus on cybersecurity operations, defensive engineering, Python programming, and secure full-stack software development.

EDUCATION
---------
• B.E. Information Technology (2024 – 2028 Expected)
  Annamalai University, Faculty of Engineering and Technology, Tamil Nadu, India
• Higher Secondary Certificate (HSC) (Completed 2024)
  Kongu Matric Hr Sec School, Tamil Nadu, India
• Secondary School Leaving Certificate (SSLC) (Completed 2022)
  Kongu Matric Hr Sec School, Tamil Nadu, India

PRACTICAL EXPERIENCE & TRAINING
--------------------------------
• Software Trainee / Intern | TVK Technologies
  Gained hands-on practical exposure to full-stack software development workflows, backend API integration, application debugging, and modern web technologies.

TECHNICAL SKILLS
----------------
• Cybersecurity: Cybersecurity fundamentals, Networking fundamentals, Security awareness, Linux fundamentals, Digital forensics fundamentals
• Programming: Python, JavaScript, HTML5, CSS3
• Web Development: Django, React, Responsive web design, REST API fundamentals
• Database & Tools: SQL fundamentals, Git & GitHub, VS Code, PostgreSQL / MySQL

FEATURED PROJECTS
-----------------
1. Password Generation and Strength Checker
   Cryptographic password generation and entropy analysis utility built with Python.
2. Tamil Nadu Sports Development Platform
   Full-stack sports administration platform utilizing Django REST, React, and PostgreSQL for 38 districts.
3. AI-Enabled Career Counselling & Family Decision-Support Platform
   Concept and interactive prototype exploring vocational education and guided career pathways.

CAREER OBJECTIVES
-----------------
Seeking cybersecurity analyst and software engineering internships to apply defensive systems knowledge, build reliable software, and contribute to secure digital ecosystems.
`;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'NITHISH_K_RESUME.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-white/10 bg-[#08090d]">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-red-500 tracking-widest uppercase">
            <User className="w-3.5 h-3.5" />
            <span>05 // AUTHENTIC PROFILE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-syne font-black text-white tracking-tight leading-tight">
            ABOUT <span className="text-gradient-red">ME.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Passionate student, curious builder, and aspiring cybersecurity analyst with a genuine drive to understand how systems operate and how to protect them.
          </p>
        </div>

        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Portrait Card & Academic Identity */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="netflix-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6 bg-gradient-to-b from-[#141620] to-[#0a0b10] red-rim-glow">
              
              {/* Profile Image / Cyber Avatar Placeholder */}
              <div className="relative w-full aspect-square max-w-[280px] mx-auto rounded-2xl overflow-hidden border-2 border-red-500/40 bg-gradient-to-b from-red-950/40 via-black to-blue-950/30 flex flex-col items-center justify-center p-6 shadow-2xl group">
                
                {/* Scanner Glow Line */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/10 to-transparent pointer-events-none animate-scanline" />

                <div className="w-24 h-24 rounded-2xl bg-black/60 border border-white/20 flex items-center justify-center text-red-500 shadow-inner group-hover:scale-105 transition-transform">
                  <User className="w-12 h-12" />
                </div>

                <div className="mt-4 text-center space-y-1 relative z-10">
                  <h3 className="font-syne font-black text-xl text-white tracking-wider">
                    {personalInfo.name}
                  </h3>
                  <p className="font-mono text-xs text-red-400">
                    B.E. IT CANDIDATE
                  </p>
                </div>

                <div className="absolute bottom-3 px-3 py-1 rounded-full bg-black/80 border border-white/10 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ACTIVE STUDENT 2024–2028</span>
                </div>
              </div>

              {/* Verified Details Badges */}
              <div className="space-y-3 font-mono text-xs">
                
                <div className="p-3.5 rounded-lg bg-black/60 border border-white/10 flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">INSTITUTION</span>
                    <span className="text-white font-medium">{personalInfo.university}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-black/60 border border-white/10 flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">LOCATION</span>
                    <span className="text-white font-medium">{personalInfo.location}</span>
                  </div>
                </div>

              </div>

              {/* Resume Download Action */}
              <div className="pt-2">
                <button
                  onClick={handleDownload}
                  className="w-full py-4 rounded-xl bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.25)] flex items-center justify-center gap-2 group"
                >
                  <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  <span>{downloaded ? 'RESUME DOWNLOADED!' : 'DOWNLOAD RESUME'}</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Personal Narrative, Interests & Learning Goals */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Introduction Narrative */}
            <div className="netflix-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4 bg-gradient-to-b from-[#141620] to-[#0a0b10]">
              <div className="flex items-center gap-2 font-mono text-xs text-red-400 font-bold">
                <BookOpen className="w-4 h-4 text-red-500" />
                <span>PERSONAL INTRODUCTION</span>
              </div>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Hello! I’m <strong className="text-white font-semibold">{personalInfo.name}</strong>, an Information Technology undergraduate student at <strong className="text-white">Annamalai University (Faculty of Engineering and Technology)</strong>, graduating in <strong className="text-red-400">2028</strong>.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                My journey in computing started with a curiosity about how software functions behind the screen. As I dove deeper into Python programming and full-stack web architectures, I quickly realized that building software is only half the picture—<span className="text-white font-medium underline decoration-red-500/40">securing it against threats, unauthorized access, and data compromises</span> is equally essential.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Rather than claiming decades of industry experience, I present myself authentically as an energetic, disciplined IT student developing solid foundations across defensive cybersecurity, network fundamentals, Python tooling, and modern web application development.
              </p>
            </div>

            {/* Career Interests & Learning Goals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Career Interests */}
              <div className="netflix-card rounded-xl p-5 border border-white/10 space-y-3 bg-[#0c0d12]">
                <div className="flex items-center gap-2 font-mono text-xs text-red-400 font-bold">
                  <Compass className="w-4 h-4 text-red-500" />
                  <span>CAREER INTERESTS</span>
                </div>
                <ul className="space-y-2 text-xs font-mono text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">▸</span>
                    <span>Cybersecurity Analyst & Threat Intelligence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">▸</span>
                    <span>Secure Software Engineering & Defense</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">▸</span>
                    <span>SOC Monitoring & Security Operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">▸</span>
                    <span>Python Backend API Engineering</span>
                  </li>
                </ul>
              </div>

              {/* Learning Goals */}
              <div className="netflix-card rounded-xl p-5 border border-white/10 space-y-3 bg-[#0c0d12]">
                <div className="flex items-center gap-2 font-mono text-xs text-blue-400 font-bold">
                  <Target className="w-4 h-4 text-blue-500" />
                  <span>CURRENT LEARNING GOALS</span>
                </div>
                <ul className="space-y-2 text-xs font-mono text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">▸</span>
                    <span>Hands-on SIEM and Syslog parsing pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">▸</span>
                    <span>Linux server hardening and script automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">▸</span>
                    <span>OWASP Top 10 web defensive mitigations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">▸</span>
                    <span>Advanced relational database indexing</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Technical Interests Badges */}
            <div className="netflix-card rounded-xl p-5 border border-white/10 space-y-3 bg-[#0c0d12]">
              <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                <Code2 className="w-4 h-4 text-red-500" />
                <span>CORE TECHNICAL INTERESTS:</span>
              </div>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {[
                  'Defensive Cybersecurity',
                  'Python Programming',
                  'Django REST Framework',
                  'React Frontend Engineering',
                  'PostgreSQL Relational Design',
                  'Linux Terminal Administration',
                  'Network Protocol Analysis',
                  'Algorithmic Cryptography'
                ].map((item, idx) => (
                  <span key={idx} className="px-3 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
