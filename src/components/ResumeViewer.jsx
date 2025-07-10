// src/components/ResumeViewer.jsx
const ResumeViewer = () => {
    return (
      <div style={{ height: '100vh', padding: '2rem' }}>
        <h2 style={{ color: '#27ae60', marginBottom: '1rem' }}>My Resume</h2>
        <iframe
          src="/resume.pdf"
          title="Resume"
          width="100%"
          height="90%"
          style={{ border: 'none' }}
        ></iframe>
      </div>
    );
  };
  
  export default ResumeViewer;
  