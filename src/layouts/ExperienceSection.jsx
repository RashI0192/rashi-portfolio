// src/components/ExperienceSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import '../styles/experience.css';

const experienceData = [
  {
    company: 'Singtel PEAK X NTU Programme, Singapore',
    year: 'Jun 2025 – Present',
    role: 'Audit Leadership Intern',
    tags: ['Internship', 'Leadership', 'Communication'],
    points: [
      'Spearheaded enterprise audit innovation project using Microsoft Copilot and Azure Cognitive Services, identifying efficiency gaps and reducing manual audit time by 22%.',
      'Collaborated through design thinking sprints and stakeholder interviews; delivered business transformation roadmap for streamlining Audit with AI and compliance monitoring.',
      'Developed dual-layer strategy integrating NLP-based document summarizers and public awareness tools, presented to Singtel’s AI Governance Taskforce, influencing roadmap for internal service AI rollout.',
    ],
  },
  {
    company: 'NTU (URECA Programme), Singapore',
    year: 'Aug 2024 – Present',
    role: 'Undergraduate Researcher',
    tags: ['Research','Fellowship'],
    points: [
      'Applied advanced mechanistic interpretability techniques to transformer-based RL agents using TransformerLens, analyzing over 120M model parameters for decision pathway tracing.',
      'Deconstructed attention head circuits and activation patterns across layers, improving policy explainability and boosting interpretability precision by 30%.',
      'Preparing submission to MIT Undergraduate Research Technology Conference, proposing novel frameworks for transparent alignment in RL-based decision models.',
    ],
  },
  {
    company: 'International Conference of Undergraduate Research (ICUR)',
    year: 'Jun 2025',
    role: 'ICUR 2025 Presenter',
    tags: ['Research', 'Public Speaking', 'Communication'],
    points: [
      'Selected among 300+ global undergraduate researchers across 18+ institutions to present research on transparency in reinforcement learning agents.',
      'Delivered live presentation titled “Enhancing Transparency in AI: Uncovering Knowledge in Reinforcement Learning Agents” to an audience spanning 15 countries and 6 continents.',
      'Received top-tier feedback score (95%) for depth, technical clarity, and relevance during post-conference presenter evaluation.',
    ],
  },
  {
    company: 'National Healthcare Group (NHG), Singapore',
    year: 'Jan 2025 – March 2025',
    role: 'AI Engineer Intern (Venture Project with NTU)',
    tags: ['Internship','Fellowship'],
    points: [
      'Co-developed AI-powered diagnostic tool for early detection of diabetic foot ulcers, impacting 200,000+ diabetic patients across Singapore.',
      'Built and deployed 4 angiosome-specific CNN models with symmetry detection and preprocessing pipelines, achieving 93% test accuracy and a 10% reduction in false positives.',
      'Integrated Grad-CAM visualizations and SHAP explainability features, enabling clinician-trusted diagnosis in NHG hospital workflows and increasing tool adoption by 2 pilot clinics.',
    ],
  },
  {
    company: 'IEEE NTU Student Chapter',
    year: 'August 2023 – April 2025',
    role: 'Marketing Director',
    tags: ['Leadership', 'Extracurricular', 'Communication','Creative Design'],
    points: [
      'Secured SGD 10,000+ sponsorships by designing pitch decks and fostering industry relationships with corporate and alumni partners.',
      'Led end-to-end marketing for flagship event (500+ attendees), increasing registration by 40% and LinkedIn engagement by 20%.',
      'Directed 3 subcommittees (design, outreach, content) and introduced campaign planning workflows, reducing turnaround time by 35%.',
    ],
  },
  {
    company: 'NTU AI Safety Research Fellowship, Singapore',
    year: 'Feb 2025 – Apr 2025',
    role: 'AI Safety Fellow',
    tags: ['Fellowship', 'Research', 'Ethics in AI'],
    points: [
      'Completed an intensive 8-week curriculum covering advanced AI safety concepts including RLHF, goal misgeneralization, mechanistic interpretability, and scalable oversight.',
      'Explored state-of-the-art research on deceptive alignment, sycophancy, specification gaming, and control in LLMs through hands-on engagement with 50+ core and supplemental readings.',
      'Mentored weekly by alignment researchers; deep-dived into papers from OpenAI, Anthropic, DeepMind, and MATS covering topics such as “Sleeper Agents,” “Sparse Autoencoders,” and “Reward Model Overoptimization.”',
      'Practiced critical discussion on frontier risks and policy, contributing to debates on oversight mechanisms, model evaluation, and red teaming strategies in the context of alignment research.',
    ],
  },
  
  {
    company: 'Earthlink NTU',
    year: 'Sep 2023 – Mar 2025',
    role: 'Publicity Officer',
    tags: ['Extracurricular', 'Creative Design', 'Communication'],
    points: [
      'Overhauled website architecture and UI/UX, increasing average user time-on-site by 35% and reducing bounce rate by 18%.',
      'Designed 30+ branded graphics for sustainability campaigns, leading to a 25% spike in student engagement across Instagram and Telegram.',
      'Produced 5+ monthly video campaigns for campus-wide events, aligning messaging with Earthlink’s green advocacy goals.',
    ],
  },
 
  {
    company: ' NTU Open Source Society (Finance AI Project)',
    year: 'December 2024- March 2025',
    role: 'Machine Learning Engineer',
    tags: ['Leadership', 'Extracurricular', 'Communication'],
    points: [
      'Engineered an end-to-end AI-driven financial planning platform, integrating Gradient Boosting models and LSTM time-series forecasting for stock and budget prediction.',
      'Achieved R² = 0.87 for stock return predictions and implemented a risk-tiered health score system for long-term financial decision support.',
      'Deployed production-ready full-stack app using Flask (backend), React.js (frontend) and Plotly Dash for real-time visual analytics.',
      'Led documentation and unit testing efforts for open-source release, supporting future contributions and model reproducibility.',
    ],
  },
  {
    company: 'NTU School Of Computer Science And Engineering (SCSE) Orientation',
    year: 'August 2025',
    role: 'Group Leader',
    tags: ['Leadership', 'Extracurricular', 'Communication'],
    points: [
      'Led a group of over 100 freshmen during NTU orientation week, ensuring safety, team bonding, and smooth logistics throughout campus activities.',
      'Collaborated with 20+ student leaders to design and execute engaging events and games, enhancing new student experience and confidence.',
      'Provided peer mentorship, campus navigation support, and emotional reassurance, fostering a welcoming community for incoming students.',
    ],
  }
];


const allTags = [
  'Internship',
  'Research',
  'Fellowship',
  'Leadership',
  'Extracurricular',
  'Communication',
  'Creative Design',
  'Public Speaking',
  'Ethics in AI',
];

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedTag, setSelectedTag] = useState('All');
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

  const handleTagChange = (e) => {
    setSelectedTag(e.target.value);
  };

  const filteredExperience = selectedTag === 'All'
    ? experienceData
    : experienceData.filter(exp => exp.tags.includes(selectedTag));

  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>

      {/* Filter Dropdown */}
      <div className="filter-container">
        <label htmlFor="tag-filter">Filter by Tag:</label>
        <select id="tag-filter" value={selectedTag} onChange={handleTagChange}>
          <option value="All">All</option>
          {allTags.map((tag) => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
      </div>

      {/* Timeline Items */}
      <div className="timeline">
        {filteredExperience.map((exp, index) => (
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

