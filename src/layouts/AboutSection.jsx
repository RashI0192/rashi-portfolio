import React from 'react';
import '../styles/layout.css';
const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          Hi! I’m <strong>Rashi</strong>, a third-year <strong>Computer Science</strong> student at 
          <strong> Nanyang Technological University (NTU)</strong>, with a minor in <strong>Business</strong>.
        </p>
        <p>
          I’m currently exploring different areas within tech, with a growing interest in 
          <strong> Artificial Intelligence</strong> and how it can be used to build systems that are not just smart, 
          but also meaningful and human-centered.
        </p>
        <p>
          This portfolio is actually inspired by the very first programming language I learned in school—<strong>Logo</strong>. 
          It used a small triangle (the “turtle”) to draw shapes using simple commands. That triangle taught me 
          the joy of creating with code, and it’s what first got me excited about computer science.
          This site is a small tribute to that beginning—a personal space to share my work, interests, 
          and the things I'm building along the way.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
