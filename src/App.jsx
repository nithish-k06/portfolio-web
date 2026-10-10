import React, { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import ProfilePicker from './components/ProfilePicker';
import CanvasBackground from './components/CanvasBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TopMoments from './components/TopMoments';
import SkillUniverse from './components/SkillUniverse';
import FeaturedProjects from './components/FeaturedProjects';
import ProjectGateway from './components/ProjectGateway';
import AboutMe from './components/AboutMe';
import EducationCertifications from './components/EducationCertifications';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import NetflixProjectModal from './components/NetflixProjectModal';
import { profiles } from './data/portfolioData';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showProfilePicker, setShowProfilePicker] = useState(false);
  const [activeProfile, setActiveProfile] = useState(profiles[0]);
  const [gatewayModalProject, setGatewayModalProject] = useState(null);

  // When intro completes, move to profile selection
  const handleIntroComplete = () => {
    setShowIntro(false);
    setShowProfilePicker(true);
  };

  // When profile is picked
  const handleSelectProfile = (profile) => {
    setActiveProfile(profile);
    setShowProfilePicker(false);

    // Smoothly scroll to the corresponding section if applicable
    if (profile?.targetSection) {
      setTimeout(() => {
        const target = document.querySelector(profile.targetSection);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  // Switch profile trigger
  const handleSwitchProfile = () => {
    setShowProfilePicker(true);
  };

  return (
    <div className="relative min-h-screen bg-[#08090d] text-slate-200 overflow-x-hidden font-sans selection:bg-[#E50914] selection:text-white">
      
      {/* 1. Cinematic Intro Screen */}
      {showIntro && <IntroScreen onComplete={handleIntroComplete} />}

      {/* 2. Netflix "Who's watching?" Profile Picker */}
      {showProfilePicker && (
        <ProfilePicker onSelectProfile={handleSelectProfile} />
      )}

      {/* 3. Interactive Ambient Cyber Mesh Background */}
      <CanvasBackground />

      {/* 4. Top Navigation Bar with Profile Switcher */}
      <Navbar
        activeProfile={activeProfile}
        onSwitchProfile={handleSwitchProfile}
      />

      {/* 5. Main Cinematic Portfolio Sections */}
      <main className="relative z-10 space-y-0">
        <Hero activeProfile={activeProfile} />
        <TopMoments />
        <SkillUniverse />
        <FeaturedProjects />
        <ProjectGateway onExploreProject={(proj) => setGatewayModalProject(proj)} />
        <AboutMe />
        <EducationCertifications />
        <ContactSection />
      </main>

      {/* 6. Footer */}
      <FooterSection />

      {/* Gateway Project Modal Popup */}
      {gatewayModalProject && (
        <NetflixProjectModal
          project={gatewayModalProject}
          onClose={() => setGatewayModalProject(null)}
        />
      )}

    </div>
  );
}
