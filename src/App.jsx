// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResumeViewer from './components/ResumeViewer';
import './styles/layout.css'; // Import global styles
import './styles/colors.css'; // Import NavBar styles
import GridBackground from './components/GridBackground';
import NetworkCanvas from './components/NetworkCanvas';
import HeroSection from './layouts/HeroSection';
import AboutSection from './layouts/AboutSection';
import TriangleCursor from './components/TriangleCursor';
import NavBar from './components/NavBar';
import FooterBar from './components/FooterBar';
import ProjectSection from './layouts/ProjectSection';
import ExperienceSection from './layouts/ExperienceSection';
import CertificationPage from './components/CertificationPage';

function App() {
  return (
    <Router>
      <NavBar />
      <TriangleCursor />

      <Routes>
        {/* Main portfolio route */}
        <Route
          path="/"
          element={
            <>
              <NetworkCanvas />
              <GridBackground />
              <HeroSection />
              <AboutSection />
              <ProjectSection />
              <ExperienceSection />
              <TriangleCursor />
              <FooterBar />
            </>
          }
        />

        {/* Resume route */}
        <Route path="/resume" element={<ResumeViewer />} />
        <Route path="/certifications" element={<CertificationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
