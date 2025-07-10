// src/layouts/CertificationSection.jsx
import React from 'react';
import '../styles/certifications.css';

const certifications = [
  {
    name: 'Deep Learning Specialization',
    issuer: 'Coursera (by DeepLearning.AI)',
    date: 'Jan 2024',
    link: 'https://www.coursera.org/account/accomplishments/certificate/XYZ123',
  },
  {
    name: 'AI for Everyone',
    issuer: 'Coursera',
    date: 'Aug 2023',
    link: 'https://www.coursera.org/account/accomplishments/certificate/ABC456',
  },
  {
    name: 'Foundations of User Experience (UX) Design',
    issuer: 'Google | Coursera',
    date: 'May 2023',
    link: '',
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
