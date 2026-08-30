// src/layouts/CertificationSection.jsx
import React from 'react';
import '../styles/certifications.css';

const certifications = [
  {
    name: 'Google Business Intelligence Specialization',
    issuer: 'Google | Coursera',
    date: 'Mar 2026',
    link: 'https://coursera.org/share/626a89157be68e34a409d76faebbfcda',
  },
  {
    name: 'Google Advanced Data Analytics Specialization',
    issuer: 'Google | Coursera',
    date: 'Jun 2026',
    link: 'https://coursera.org/share/b3cb96962acf2f9bba63259f115a6de5',
  },
  {
    name: 'Google IT Automation with Python Specialization',
    issuer: 'Google | Coursera',
    date: 'Jun 2026',
    link: 'https://coursera.org/share/d9e23a912c892612ff39d9c97e64c550',
  },
  {
    name: 'Google Project Management Specialization',
    issuer: 'Google | Coursera',
    date: 'Mar 2026',
    link: 'https://coursera.org/share/0ed83f2b0989157b69602df0dba17476',
  },
];

const CertificationSection = () => {
  return (
    <section id="certifications" className="certification-section">
      <h2>Certifications</h2>
      <div className="certification-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <h3>{cert.name}</h3>
            <p className="issuer">{cert.issuer}</p>
            <p className="date">{cert.date}</p>
            {cert.link && (
              <a
                className="view-link"
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationSection;
