// File: src/layouts/ProjectSection.jsx

import React, { useState } from 'react';
import '../styles/project.css';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'AuditGen: Multi-Modal Auditing Assistant',
    techStack: 'Streamlit · Hugging Face Transformers · RAG · LangChain · Streamlit · Large Language Models',
    bullets: [
      'Designed and implemented a modular multi-modal Retrieval-Augmented Generation (RAG) system combining text, tables, and images using advanced models including Groq’s llama3-70b-8192, BLIP for image captioning and VQA, and FAISS vector search to deliver context-aware answers from complex PDF reports.',
      'Engineered a semantic query classifier with sentence-transformers (all-MiniLM-L6-v2) achieving over 90% accuracy in routing user questions to appropriate text or image pipelines, effectively reducing hallucinations from large language models by 75%.',
      'Developed and integrated custom OpenCV-based visual trend detection using HSV masking, Canny edge detection, and HoughLines to analyze chart images, enabling automated inference of upward/downward/flat trends with >85% accuracy.',
    ],
    github: 'https://github.com/RashI0192/AI-Powered-Multimodal-Audit',
    tags: [
      
      'Software Engineering',
      'Machine Learning',
      'Natural Language Processing (NLP)',
      'Computer Vision',
      'Large Language Models (LLM)',
      'Data Analytics'
    ]
    },
  {
    title: 'Regime-Aware Stock Trading using Reinforcement Learning',
    techStack: 'Python · Reinforcement Learning · Hierarchical DQN · Google Finance API',
    bullets: [
      'Developed a modular G-Learning reinforcement learning pipeline with a four-phase curriculum, adaptive KL-regularization, and regime-sensitive reward shaping to optimize trading strategies across both short- and long-term market cycles.',
      'Engineered Sharpe-scaled reward functions and implemented dynamic volatility capping, resulting in robust policy generalization and portfolio return growth under varying market conditions.',
      'Designed a curriculum controller with dynamic phase transitions and KL-annealing, reducing policy volatility by over 30% and improving strategic confidence during periods of regime shift.',
    ],
    github: 'https://github.com/RashI0192/Regime-Aware-Stock-Trading-using-Reinforcement-Learning',
    tags: ['Machine Learning',
    'Software Engineering',
    'Data Analytics',
    'Domain-Specific Applications'],
  },
  
  {
    title: 'Eusarthria – Dysarthria-Speech-Refinement App',
    techStack: 'Streamlit · gTTS · PyTorch · Librosa · NumPy · TensorFlow · Transformers · Hugging Face APIs · Scikit-learn · Matplotlib · Jupyter Notebook',
    bullets: [
      'Engineered a full-stack Streamlit application for clinical speech processing, combining CNNs, Transformers, and LLMs to detect Dysarthria, convert and refine slurred audio, and synthesize natural voice speech in real-time.',
      
      'Achieved 96.7% diagnostic accuracy in slurred speech detection by training a deep CNN on spectral audio features with Librosa, enabling precise classification and live feedback for accessibility and healthcare use cases.',
'Enhanced transcription quality by 15% through an ensemble architecture (Latent + X-Hierarchy + AlexNet) and fine-tuned Mistral-7B LLM, optimizing performance with GPU-efficient gradient accumulation and scalable model deployment.'
 ],
    github: 'https://github.com/RashI0192/Dysarthria-Speech-Refinement',
    tags: ['Large Language Models (LLM)',
    'Natural Language Processing (NLP)',
    'Machine Learning',
    'Software Engineering',
    'Domain-Specific Applications'],
  },
  {
    title: 'MOOC Platform with Cheating Detection Microservice',
    techStack: 'MongoDB · Express.js · React · Node.js · Spring Boot · Java · REST APIs',
    bullets: [
      'Engineered a scalable MOOC platform using the MERN stack, and architected a modular cheating detection microservice in Spring Boot with secure RESTful API integration for real-time, non-invasive behavioral monitoring (e.g., tab switches, cursor movement, source URLs).',
      'Pioneered a novel pace anomaly detection algorithm to identify irregular learning patterns, boosting cheating detection accuracy by 3.2×.',
      'Deployed an instructor-facing dashboard with auto-generated trust scores, timestamped violations, and source traceability, reducing manual review time by over 70%.'
    ],
    github: 'https://github.com/RashI0192/MOOC-Platform-with-Cheating-Detection-Microservice',
    tags: ['Software Engineering'],
  },
  
  {
    title: 'Epidemiological-Truth-Validator',
    techStack: 'Java · Python · React.js · Hugging Face Transformers · Google Flan-T5 · REST APIs · Tailwind CSS',
    bullets: [
      'Built a real-time AI chatbot powered by a fine-tuned Google Flan-T5 model and Java backend, achieving 95% accuracy in detecting and correcting health misinformation across 30K+ social media posts.',
      'Engineered a multi-stage NLP pipeline with stratified K-fold classification and response generation, delivering explainable, science-backed replies with confidence scores >90',
      'Enhanced model generalization and interpretability by 20%, using random search hyperparameter tuning, early stopping, and modular architecture for scalable deployment in public health domains.'

    ],
    github: 'https://github.com/RashI0192/Epidemiological-Truth-Validator',
    tags: [ 'Large Language Models (LLM)',
    'Natural Language Processing (NLP)',
    'Machine Learning',
    'Software Engineering',
    'Domain-Specific Applications'],
  },
  {
    title: 'Driver Drowsiness Detection',
    techStack: 'Python · PyTorch · OpenCV · DeiT Transformer · PIL · NumPy',
    bullets: [
      'Developed a real-time driver drowsiness detection system using DeiT (Data-efficient Vision Transformer)pretrained on ImageNet, achieving 99.73% classification accuracy on a dataset of 41,790+ facial images.',
      'Engineered an optimized training pipeline with data augmentation, multiprocessing, and class rebalancing, accelerating training by 2.3× and reducing memory load using image resizing and efficient DataLoader batching.',
      'Enhanced model generalization and reliability via confusion matrix analysis, F1 scoring, and cross-entropy loss tracking—supporting deployment for real-world road safety systems and accident prevention AI.',
    ],
    github: 'https://github.com/RashI0192/Driver-Drowsiness',
    tags: ['Computer Vision',
    'Machine Learning',
    'Data Analytics',
    'Domain-Specific Applications'],
  },
  {
    title: 'Blossom AI – Content Platform for Influencers',
    techStack: 'Next.js · React · Tailwind CSS · TypeScript · Google Gemini · Clerk · REST APIs',
    bullets: [
      'Developed a full-stack AI platform empowering content creators to generate SEO-optimized blogs, YouTube descriptions, and creative ideas via Google Gemini LLM, reducing content production time by up to 45%.',
      'Optimized creator workflow with real-time editing, formatting, and export tools, and integrated secure Google OAuth with Clerk, driving a 35% increase in user engagement and repeat usage.',
      'Engineered a lightning-fast, scalable interface with Next.js (SSR), React, and Tailwind, achieving <1s content rendering and delivering a streamlined UX tailored for high-output content professionals.',
    ],
    github: 'https://github.com/RashI0192/BlossomAI',
    tags: [ 'Large Language Models (LLM)',
    'Natural Language Processing (NLP)',
    'Software Engineering'],
  },
  {
    title: 'Fake Logo Detector',
    techStack: 'TensorFlow · Keras · NumPy · Pandas · Matplotlib · Data Augmentation',
    bullets: [
      'Built a CNN-based image classifier to detect fake vs genuine logos, achieving 96.4% accuracy using a custom 6-layer ConvNet with end-to-end EDA, preprocessing, and 80/10/10 dataset split for generalization.',
      'Optimized training pipeline for CPU-based environments using aggressive data augmentation, caching, and prefetching, reducing preprocessing time by 30% and minimizing I/O latency.',
      'Boosted real-world detection reliability by 28% through confusion matrix-driven tuning, class balancing, and custom loss function refinement for high-precision classification. https://github.com/RashI0192/Fake-Logo-detector'
    ],
    github: 'https://github.com/RashI0192/Fake-Logo-detector',
    tags: ['Computer Vision',
    'Machine Learning',
    'Software Engineering'],
  },
  {
    title: 'HR-Analytics – Attrition Prediction Tool',
    techStack: 'Python · Pandas · Scikit-learn · SHAP · XGBoost · Logistic Regression · Random Forest',
    bullets: [
      'Built predictive models to identify employee attrition and performance patterns, achieving 93% accuracy (Logistic Regression) and 85% accuracy (Gradient Boosting) using cross-validation and RandomizedSearchCV for optimized training.',
  
      'Engineered features from domain-specific HR data across departments (Sales, R&D, HR), leveraging EDA and correlation analysis to reduce overfitting and improve generalization across diverse employee profiles.',
      'Enabled 100% transparent decision-making with SHAP explainability, quantifying individual feature impacts and improving HR trust in predictions, leading to a 30% improvement in model-driven retention recommendations.',
    ],
    github: 'https://github.com/RashI0192/HR-Analytics',
    tags: ['Machine Learning',
    'Data Analytics',],
  },
  {
    title: 'Hybrid Doctor & Specialist Recommendation System',
    techStack: 'Python · Scikit-learn · NLP · TF-IDF · Content-Based & Collaborative Filtering',
    bullets: [
      'Built a hybrid recommendation engine by integrating disease prediction (Random Forest, 91% accuracy) with content-based and collaborative filtering models to match patients with ideal medical specialists based on symptoms, ratings, and qualifications.',
      'Engineered robust features using one-hot encoding of 130+ symptoms, custom dictionary mapping, and TF-IDF similarity scoring, enabling context-aware doctor suggestions across two national healthcare datasets.',
      'Increased access to trustworthy medical care by boosting recommendation accuracy by 27%, leveraging patient feedback, qualification scores, and language-based matching to deliver equitable, data-driven healthcare navigation.',
    ],
    github: 'https://github.com/RashI0192/Recommendation-Machine',
    tags: ['Natural Language Processing (NLP)',
    'Machine Learning',
    'Data Analytics','Domain-Specific Applications'],
  },

  {
    title: 'Paddy Leaves – Thermal Imaging Crop Diagnosis',
    techStack: 'Python · OpenCV · NumPy · Thermal Imaging · Plant Pathology',
    bullets: [
      'Processed and visualized 5,000+ thermal images of paddy leaves across 6 disease categories, leveraging domain knowledge to annotate temperature anomalies and train models for visual disease recognition.',
      'Detected disease-specific heat deviations of ±5–8°C in infected regions (e.g., reduced transpiration in Blight, localized heat spikes in Hispa), achieving 92% visual classification accuracy across test samples.',
      'Built a scalable, interpretable diagnostic framework for thermal image analysis, enabling real-time, non-invasive monitoring and reducing manual inspection effort by over 60% in field trials.',
    ],
    github: 'https://github.com/RashI0192/Paddy-Leaves-Thermal-Images',
    tags: ['Computer Vision','Machine Learning',
    'Data Analytics','Domain-Specific Applications'],
  },
  {
    title: 'Twitter Hate Speech Detector',
    techStack: 'Python · Scikit-learn · NLTK · Multilingual NLP (English, Hindi, Chinese)',
    bullets: [
      'Engineered a multi-lingual hate speech detection pipeline using five ML models (Random Forest, Logistic Regression, KNN, Naive Bayes, Decision Tree), trained on 40,000+ annotated social media texts and optimized via cross-validation to flag hate, aggression, and toxicity with 97% accuracy.',
      'Performed robust data cleaning, multilingual tokenization, and TF-IDF vectorization to support real-time classification across top 3 global languages ',
      'Built a scalable content moderation system capable of improving community safety by automating toxic content detection with up to 35% improvement in precision over baseline heuristics, ready for deployment in research, policy, or moderation APIs.',
    ],
    github: 'https://github.com/RashI0192/SC1015',
    tags: ['Natural Language Processing (NLP)',
    'Machine Learning',
    'Data Analytics'],
  },
];



const ProjectCard = ({ project, isFlipped, onClick }) => {
  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3 className="project-title">{project.title}</h3>
          <p className="tech-stack"><em>{project.techStack}</em></p>
        </div>
        <div className="flip-card-back">
          <ul className="project-bullets">
            {project.bullets.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

const TAGS = [
  'All',
  'Large Language Models (LLM)',
  'Natural Language Processing (NLP)',
  'Computer Vision',
  'Software Engineering',
  'Machine Learning',
  'Data Analytics',
  'Domain-Specific Applications'
];

const ProjectSection = () => {
  const [flipped, setFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTag, setSelectedTag] = useState('All');

  const filteredProjects = selectedTag === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(selectedTag));

  const nextProject = () => {
    setFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const handleTagChange = (e) => {
    setSelectedTag(e.target.value);
    setCurrentIndex(0); // reset view on filter change
    setFlipped(false);
  };

  return (
    <section id="projects" className="project-section">
      <h2>Projects</h2>

      {/* 🔽 Dropdown Filter */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="tag-filter" style={{ marginRight: '1rem', fontWeight: 'bold' }}>
          Filter:
        </label>
        <select id="tag-filter" value={selectedTag} onChange={handleTagChange}>
          {TAGS.map((tag) => (
            <option key={tag} value={tag}>
              #{tag}
            </option>
          ))}
        </select>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="project-card-wrapper">
          <ProjectCard
            project={filteredProjects[currentIndex]}
            isFlipped={flipped}
            onClick={() => setFlipped(!flipped)}
          />
          <div className="project-controls">
            <button onClick={prevProject}>&larr; </button>
            <button onClick={nextProject}> &rarr;</button>
          </div>
        </div>
      ) : (
        <p>No matching projects.</p>
      )}

      <canvas className="project-network-bg"></canvas>
    </section>
  );
};

export default ProjectSection;