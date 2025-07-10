// src/components/ExperienceSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import '../styles/experience.css';

const experienceData = [
  {
    company: 'OpenAI',
    year: '2025',
    role: 'AI Intern',
    points: [
      'Worked on LLM alignment tasks with research team',
      'Contributed to prompt tuning and toolchain evaluation',
      'Explored applications of AI in human-centered design',
    ],
  },
  {
    company: 'ByteLeap Tech',
    year: '2024',
    role: 'Frontend Developer Intern',
    points: [
      'Developed interactive dashboards in React.js',
      'Refined responsive UI for multiple screen sizes',
      'Collaborated with backend team to integrate APIs',
    ],
  },
  {
    company: 'NTU ML Lab',
    year: '2023',
    role: 'Research Assistant',
    points: [
      'Assisted in implementing deep learning models in PyTorch',
      'Preprocessed academic datasets and visualized results',
      'Documented experiments and reported findings',
    ],
  },
];

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (mostVisible === null || entry.intersectionRatio > 0.4) {
              mostVisible = index;
            }
          }
        });
        if (mostVisible !== null) {
          setActiveIndex(mostVisible);
        }
      },
      { threshold: 0.3 }
    );

    itemsRef.current.forEach((el, i) => {
      if (el) {
        el.setAttribute('data-index', i);
        observer.observe(el);
      }
    });

    return () => {
      itemsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="timeline">
        {experienceData.map((exp, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className={`timeline-item ${index === activeIndex ? 'active' : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>{exp.company} <span>({exp.year})</span></h3>
              <h4>{exp.role}</h4>
              <ul>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
