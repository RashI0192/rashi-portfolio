import React from 'react';

const ResumeViewer = () => {
  return (
    <div style={{ height: '100vh', padding: '2rem' }}>
      <h2 style={{ color: '#27ae60', marginBottom: '1rem' }}>My Resume</h2>
      <iframe
        src={`${import.meta.env.BASE_URL}resume.pdf`} // ← this resolves to: /rashi-portfolio/resume.pdf
        title="Resume"
        width="100%"
        height="90%"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
};

export default ResumeViewer;
