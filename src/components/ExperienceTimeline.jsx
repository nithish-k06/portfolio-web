import React from 'react';
import { Briefcase, GraduationCap, Calendar, Award, Building2, MapPin } from 'lucide-react';

export default function ExperienceTimeline() {
  const timelineData = [
    {
      type: 'INTERNSHIP',
      period: '2024 / RECENT',
      title: 'Software Development & Tech Trainee',
      institution: 'TVK Technologies',
      location: 'Tamil Nadu, India',
      description: 'Hands-on practical exposure to full-stack software development workflows, backend API integration, application debugging, and team collaboration standard operating procedures.',
      badge: 'PRACTICAL EXPERIENCE',
      color: 'border-cyan-500 text-cyan-400 bg-cyan-950/40'
    },
    {
      type: 'ACADEMIC',
      period: '2024 – 2028',
      title: 'B.E. Information Technology',
      institution: 'Annamalai University – Faculty of Engineering and Technology',
      location: 'Chidambaram, Tamil Nadu, India',
      description: 'Bachelor of Engineering program focused on Data Structures, Algorithms, Web Engineering, Database Systems, Computer Networks, Operating Systems, and Information Security.',
      badge: 'UNDERGRADUATE DEGREE',
      color: 'border-blue-500 text-blue-400 bg-blue-950/40'
    },
    {
      type: 'ACADEMIC',
      period: '2024',
      title: 'Higher Secondary Certificate (HSC - 12th Grade)',
      institution: 'Kongu Matric Higher Secondary School',
      location: 'Tamil Nadu, India',
      description: 'Completed higher secondary education with strong foundation in Mathematics, Physics, Chemistry, and Computer Science fundamentals.',
      badge: 'HSC ACADEMICS',
      color: 'border-violet-500 text-violet-400 bg-violet-950/40'
    },
    {
      type: 'ACADEMIC',
      period: '2022',
      title: 'Secondary School Leaving Certificate (SSLC - 10th Grade)',
      institution: 'Kongu Matric Higher Secondary School',
      location: 'Tamil Nadu, India',
      description: 'Completed secondary schooling with high academic performance and foundational problem-solving aptitude.',
      badge: 'SSLC ACADEMICS',
      color: 'border-emerald-500 text-emerald-400 bg-emerald-950/40'
    }
  ];

  return (
    <section id="journey" className="py-24 relative border-t border-slate-800/60 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f0ff] tracking-widest uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>06 // JOURNEY</span>
            <div className="w-12 h-[1px] bg-cyan-500/40"></div>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-syne font-bold text-white tracking-tight leading-tight">
            EDUCATION & PRACTICAL <br />
            <span className="text-gradient-cyan">MILESTONES.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
            A chronological timeline of academic achievements, institution degrees, and industry internship experience.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12 font-sans">
          
          {timelineData.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Node Bullet */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#07090e] border-2 border-cyan-400 group-hover:bg-[#00f0ff] transition-colors shadow-[0_0_10px_rgba(0,240,255,0.4)] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:bg-black"></div>
              </div>

              {/* Card Container */}
              <div className="hud-box cyber-card rounded-xl p-6 sm:p-8 border border-slate-800 space-y-4 hover:border-cyan-500/40 bg-[#0c1017]">
                
                <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#00f0ff]" />
                    <span className="text-cyan-400 font-bold">{item.period}</span>
                  </div>
                  <span className={`px-2.5 py-1 rounded text-[10px] font-bold border ${item.color}`}>
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-syne font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1 text-slate-200">
                      <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                      {item.institution}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
