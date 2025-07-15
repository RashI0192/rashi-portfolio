import React from 'react';
import '../styles/layout.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          Hello! I am Rashi, a third-year <span className="highlight">Computer Science</span> student at 
          Nanyang Technological University (NTU), minoring in <span className="highlight">Business</span>.
        </p>
        <p>
          I am passionate about <span className="highlight">artificial intelligence</span>, 
          <span className="highlight"> quantitative finance</span>, and <span className="highlight">machine learning</span>, 
          and I love building software at the intersection of <span className="highlight">large language models</span>, 
          research, and experimentation.
        </p>
        <p>
          This portfolio is inspired by the first programming language I ever learned: <span className="highlight">Logo</span>. 
          It used a tiny triangle to draw shapes with simple commands — and that triangle was what first sparked my love for code. 
          This site is a small tribute to that beginning and a space for me to share what I’m learning, building, and exploring.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;

export default AboutSection;
