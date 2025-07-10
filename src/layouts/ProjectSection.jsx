// File: src/layouts/ProjectSection.jsx

import React, { useState } from 'react';
import '../styles/project.css';

const projects = [
  {
    title: 'AI Chatbot',
    description: 'A conversational AI built with NLP to assist users with real-time queries.',
    github: 'https://github.com/your-ai-chatbot',
  },
  {
    title: 'Portfolio Website',
    description: 'This website! Built using React with a custom aesthetic inspired by Logo.',
    github: 'https://github.com/your-portfolio',
  },
  {
    title: 'Data Dashboard',
    description: 'A dashboard to visualize trends and patterns in real-time datasets.',
    github: 'https://github.com/your-dashboard',
  },
];

const ProjectCard = ({ project, isFlipped, onClick }) => {
  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>{project.title}</h3>
        </div>
        <div className="flip-card-back">
          <p>{project.description}</p>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectSection = () => {
  const [flipped, setFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="project-section">
      <h2>Projects</h2>
      <div className="project-card-wrapper">
        <ProjectCard
          project={projects[currentIndex]}
          isFlipped={flipped}
          onClick={() => setFlipped(!flipped)}
        />
        <div className="project-controls">
          <button onClick={prevProject}>&larr; </button>
          <button onClick={nextProject}> &rarr;</button>
        </div>
      </div>
      <canvas className="project-network-bg"></canvas>
    </section>
  );
};

export default ProjectSection;