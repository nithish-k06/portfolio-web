# 🛡️ NITHISH K — Cinematic Netflix-Inspired Personal Portfolio

A modern, cinematic personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**, inspired by Netflix's iconic streaming interface, customized for **Nithish K** (Cyber Analyst | Python Developer | IT Student).

---

## 🎬 Key Highlights & Features

1. **Cinematic Opening Intro (`IntroScreen.jsx`)**:
   - Dramatic red ambient backlight with glowing uppercase typography: **NITHISH K**.
   - Subtitle: **"CYBER ANALYST IN THE MAKING"**.
   - Web Audio API synthesized **"TA-DUM"** cinematic chord (zero external audio dependencies, works 100% offline).
   - "Skip Intro" button and automatic support for `prefers-reduced-motion`.

2. **Netflix "Who's watching?" Profile Picker (`ProfilePicker.jsx`)**:
   - 4 Interactive profile persona cards:
     - 🛡️ **Cyber Analyst** (Red shield avatar, threat monitoring focus)
     - 💻 **Developer** (Code bracket avatar, Python & full-stack focus)
     - 📁 **Projects** (Terminal/folder avatar, project catalog focus)
     - 👤 **About Me** (Profile avatar, academic journey focus)
   - Hover scaling, glowing borders, audio effects, and smooth anchor routing to corresponding sections.
   - Switch profile accessible anytime from the top navigation bar.

3. **Cinematic Billboard Hero (`Hero.jsx`)**:
   - Featured title layout with large typography, red rim lighting, and high-contrast composition.
   - Action buttons: "Explore My Work" (Netflix Play-style), "View Skills" (Info button), and "Contact Me".
   - Live interactive Cybersecurity Telemetry HUD with real-time diagnostic simulation.
   - Verified student badges for Annamalai University (Class of 2028).

4. **Trending "TOP MOMENTS" Carousel (`TopMoments.jsx`)**:
   - Horizontal scrolling content row featuring stylized Netflix giant rank numbers (`1`, `2`, `3`, `4`, `5`).
   - Cards covering: Cybersecurity Journey, Python Development, Problem Solving, Web Development, and Learning & Innovation.
   - Smooth desktop arrow controls and touch-friendly mobile swiping.

5. **My Skill Universe (`SkillUniverse.jsx`)**:
   - Category filter tabs: Cybersecurity, Programming, Web Development, and Database & Tools.
   - Animated proficiency meters, verified competency badges, and interactive inspector banner.

6. **Featured Projects & Modals (`FeaturedProjects.jsx` & `NetflixProjectModal.jsx`)**:
   - **Password Generation and Strength Checker**: Includes a live client-side password entropy evaluation tool right on the page!
   - **Tamil Nadu Sports Development Platform**: Flagship full-stack system for all 38 districts with interactive district selector.
   - **AI-Enabled Career Counselling Platform**: Visionary prototype for vocational learners and family decision support.
   - Detailed Netflix-style modal popup with architecture, security controls, and GitHub links.

7. **Project Gateway (`ProjectGateway.jsx`)**:
   - Wide cinematic billboard spotlighting the Tamil Nadu Sports Development Platform with district hub inspection.

8. **About Me (`AboutMe.jsx`)**:
   - Split-screen layout with cyber portrait scanner, authentic personal narrative, career interests, and current learning goals.
   - Instant downloadable formatted resume with celebratory confetti.

9. **Education & Certifications (`EducationCertifications.jsx`)**:
   - Verified chronological timeline:
     - B.E. Information Technology @ Annamalai University (Expected 2028)
     - Software Trainee / Intern @ TVK Technologies
     - HSC & SSLC @ Kongu Matric Hr Sec School

10. **Encrypted Contact Channel (`ContactSection.jsx`)**:
    - Heading: *"LET'S BUILD SOMETHING SECURE."*
    - Validated form with Name, Email, Subject, and Message fields.
    - Real working mailto launch fallback (no fake or dead submissions).

11. **Minimal Sticky Navigation & Footer (`Navbar.jsx` & `FooterSection.jsx`)**:
    - Sticky header with active section scroll spy, sound mute/unmute toggle, profile switcher, and back-to-top button.

---

## 📂 Project Architecture

```
portfolio-web/
├── index.html                   # HTML5 shell, SEO metadata, Google Fonts & Red 'N' Favicon
├── package.json                 # Project dependencies & Vite scripts
├── vite.config.js               # Vite bundler configuration
├── src/
│   ├── App.jsx                  # Main application orchestrator & modal state
│   ├── index.css                # Netflix design system, glow tokens, custom scrollbars
│   ├── main.jsx                 # React root entry point
│   ├── components/
│   │   ├── IntroScreen.jsx             # Dramatic cinematic intro screen
│   │   ├── ProfilePicker.jsx           # Netflix "Who's watching?" profile selector
│   │   ├── Navbar.jsx                  # Sticky header HUD with sound & profile switcher
│   │   ├── Hero.jsx                    # Billboard Hero with telemetry diagnostics
│   │   ├── TopMoments.jsx              # Horizontal carousel with Netflix rank numbers
│   │   ├── SkillUniverse.jsx           # Categorized skill matrix with progress meters
│   │   ├── FeaturedProjects.jsx        # Project catalog with live interactive widgets
│   │   ├── NetflixProjectModal.jsx     # Detail popup with case studies
│   │   ├── ProjectGateway.jsx          # Feature panel spotlighting flagship project
│   │   ├── AboutMe.jsx                 # Split-screen bio & resume generator
│   │   ├── EducationCertifications.jsx # Timeline cards for university & training
│   │   ├── ContactSection.jsx          # "LET'S BUILD SOMETHING SECURE" form
│   │   ├── FooterSection.jsx           # Branding, back-to-top, copyright
│   │   ├── CanvasBackground.jsx        # Ambient red/blue interactive node grid
│   │   └── BrandIcons.jsx              # SVG brand icons for GitHub & LinkedIn
│   ├── data/
│   │   └── portfolioData.js     # Single source of truth for personal data, skills & projects
│   └── utils/
│       └── soundEffects.js      # Web Audio API synthesizer for cinematic SFX
```

---

## 🚀 Setup & Local Execution

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

### Installation
```bash
# Clone the repository
git clone https://github.com/nithish-k06/portfolio-web.git

# Navigate to project folder
cd portfolio-web

# Install all dependencies
npm install
```

### Running Locally
```bash
# Start local development server with Hot Module Replacement (HMR)
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production
```bash
# Generate optimized production bundle in /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Publishing Instructions

### Option 1: Vercel (Recommended & Easiest)
1. Push your repository to GitHub: `https://github.com/nithish-k06/portfolio-web`.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository `portfolio-web`.
4. Framework Preset: **Vite**.
5. Click **"Deploy"**. Your website will be live with free SSL in under 1 minute!

### Option 2: GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. In `vite.config.js`, set `base: '/portfolio-web/'` (or `'/'` if using custom domain or `username.github.io`).
3. Add the deploy script to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run:
   ```bash
   npm run deploy
   ```

---

## ✏️ Details to Customize & Replace

All data is conveniently centralized in **[`src/data/portfolioData.js`](file:///d:/Portfolio%20web/src/data/portfolioData.js)**. Simply update the fields:

| Field | Current Default | File Location |
| :--- | :--- | :--- |
| **Email Address** | `nithish.k.cyber@gmail.com` | `src/data/portfolioData.js` (`personalInfo.email`) |
| **LinkedIn URL** | `https://linkedin.com/in/nithish-k-cyber` | `src/data/portfolioData.js` (`personalInfo.linkedin`) |
| **GitHub URL** | `https://github.com/nithish-k06` | `src/data/portfolioData.js` (`personalInfo.github`) |
| **Resume File** | Generated dynamically or link your PDF in `public/` | `src/components/AboutMe.jsx` |
| **Profile Photo** | SVG Avatar with scanner effect | Place image in `public/avatar.jpg` and reference in `AboutMe.jsx` |

---

## ✅ Quality & Testing Checklist

- [x] **Intro Screen**: Dramatic audio-visual reveal with "NITHISH K" & "CYBER ANALYST IN THE MAKING".
- [x] **Skip Intro**: Works smoothly and respects reduced motion.
- [x] **Profile Picker**: Netflix-style 4 persona cards with hover scaling and smooth anchor navigation.
- [x] **Sound Engine**: Web Audio API synthesizes cinematic "TA-DUM" & UI clicks with mute toggle.
- [x] **Hero Section**: Billboard layout with Play & Info CTAs and interactive telemetry HUD.
- [x] **Top Moments**: Netflix giant rank numbers 1-5 with horizontal desktop controls & mobile touch swipe.
- [x] **Skill Universe**: Filter tabs with clean icons and animated progress meters.
- [x] **Featured Projects**: Live password generator widget + Tamil Nadu Sports Platform + AI Career Concept.
- [x] **Project Modal**: Netflix case study popup with technical architecture and GitHub link.
- [x] **Project Gateway**: Wide spotlight panel with interactive district hub preview.
- [x] **About Me**: Split-screen narrative, education at Annamalai University, and downloadable resume.
- [x] **Certifications/Education**: Timeline cards for B.E. IT, TVK Technologies internship, and school.
- [x] **Contact Form**: Validated 4-field form with feedback and direct email fallback.
- [x] **Responsive Layout**: Fluid layouts tested across mobile, tablet, and widescreen desktop.
- [x] **No Console Errors**: Verified clean build (`npm run build`).
