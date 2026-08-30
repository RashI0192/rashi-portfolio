// src/components/ExperienceSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import '../styles/experience.css';

const experienceData = [
  {
  company: 'WorldQuant, Singapore',
  year: 'Aug 2025 – Present',
  role: 'Quantitative Research Consultant (Remote)',
  tags: ['Quantitative Finance', 'Data Analysis','Internship'],
  points: [
    'Developed predictive quantitative alpha signals across global financial markets, applying data-driven analysis to identify patterns and evaluate investment hypotheses.',
    'Researched, designed and evaluated 20+ systematic trading models using large-scale multi-market datasets, applying statistical analysis, simulation and iterative hypothesis testing to identify performance drivers and improve model outcomes.',
    'Automated research and backtesting workflows through the WorldQuant BRAIN API, analysing model performance and synthesising findings into actionable insights for systematic strategy development.',
  ],
},
  {
  company: 'Panasonic, Singapore',
  year: 'Jan 2026 – May 2026',
  role: 'GEN AI Intern',
  tags: ['Internship', 'Artificial Intelligence'],
  points: [
    'Translated the requirement to operate a single LLM across standard and safety modes into a plug-and-play guardrail architecture, replacing a two-model approach with lightweight adapters to improve operational efficiency and flexibility.',
    'Designed and evaluated the solution across 3 transformer architectures, comparing alternative approaches for pre-generation content screening and achieving 96.7% detection accuracy.',
    'Optimised and validated the adapter-based approach, enabling reliable switching between standard and guardrail behaviours at runtime with zero failures across testing.',
  ],
},
  {
    company: 'Peach Lab ETH Zurich, Switzerland',
    year: 'Sept 2025 – Dec 2025',
    role: 'Semester Project Mobility',
    tags: ['Research', 'Data Analysis', 'Software Engineering'],
    points: [
      'Led user-centered design through end-to-end UX research methods, conducting 11 user interviews and 43 user surveys, performing research synthesis to generate actionable user insights, personas, and user journeys that informed 3 iterative design prototypes.',
      'Conducted A/B testing on context-aware nudges and visual feedback, and analyzed usability and interaction data with computational methods and cognitive modeling to optimize the UI designs and improve independent thinking behaviors by 35%.',
      'Executed research-to-design workflows through usability testing, heuristic evaluation, and Nielsen guideline reviews, delivering wireframes, mockups, and interactive prototypes that increased task clarity and engagement.',
    ],
  },
  {
    company: 'Tan Tock Seng Hospital, Singapore',
    year: 'Aug 2025 – Nov 2025',
    role: 'Software Automation (Remote)',
    tags: ['Software Engineering', 'Industry Project', 'Automation', 'Machine Learning'],
    points: [
      'Deployed an end-to-end ML automation pipeline integrating FastAPI, UiPath, and Streamlit, enabling classification of 100+ emails per run with confidence-based routing and human-in-the-loop review.',
      'Architected and augmented a medical email dataset across 9 classes, generating 5× more minority-class samples using templating and LLM-based synthesis to resolve severe class imbalance.',
      'Trained and benchmarked 7 NLP models (BERT, RoBERTa, mDeBERTa, hybrid real+synthetic) and achieved 95% accuracy / 0.95 weighted F1, outperforming real-only and zero-shot baselines.',
    ],
  },

  {
    company: 'Fallgard, India',
    year: 'May 2025 – Jul 2025',
    role: 'Computer Vision & Edge AI Intern',
    tags: ['Internship', 'Computer Vision', 'Machine Learning'],
    points: [
      'Replaced heuristic pose estimation with an unsupervised anomaly detection model using time-series pose data and preprocessing, boosting real-time fall detection accuracy by 25% through user behaviour modelling.',
      'Led data acquisition, augmentation, and model optimisation to evaluate algorithm robustness, improving deployment efficiency by 40%.',
      'Collaborated with hardware engineers on end-to-end application development, including model fine-tuning and multimodal integration.',
    ],
  },
  {
    company: 'Singtel PEAK X NTU Programme, Singapore',
    year: 'Jun 2025 – July 2025',
    role: 'Audit Leadership Fellowship',
    tags: ['Internship', 'Leadership', 'Communication', 'Data Analysis'],
    points: [
      'Selected as 1 of 30 fellows (from 300+ applicants) for the Singtel–NTU Leadership Development Fellowship, emphasizing business strategy, design thinking and innovation.',
      'Co-drove an Audit business case study and design thinking sprints with a team of 5 under the guidance of Singtel Audit Directors, uncovering process inefficiencies worth ~1,200 hours annually to shape AI integrations aligned with Singtel goals.',
      'Led the prototyping of a GenAI-powered auditing tool using DeepSeek, collaborating with 10+ senior business stakeholders to deliver NLP-based compliance checks that reduced document review time by 22%.',
      'Proposed AI-driven process integrations aligned with Singtel’s enterprise audit and compliance goals.',
    ],
  },
  {
    company: 'NTU (URECA Programme), Singapore',
    year: 'Aug 2024 – April 2025',
    role: 'Undergraduate Researcher',
    tags: ['Research','Ethics in AI','Artificial Intelligence'],
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
    tags: ['Research', 'Communication','Ethics in AI'],
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
    tags: ['Internship', 'Machine Learning', 'Data Analysis'],
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
    tags: ['Leadership', 'Extracurricular', 'Communication'],
    points: [
      'Secured SGD 10,000+ sponsorships by designing pitch decks and fostering industry relationships with corporate and alumni partners.',
      'Led end-to-end marketing for flagship event (500+ attendees), increasing registration by 40% and LinkedIn engagement by 20%.',
      'Directed 3 subcommittees (design, outreach, content) and introduced campaign planning workflows, reducing turnaround time by 35%.',
    ],
  },
  {
    company: 'NTU AI Safety Research Fellowship, Singapore',
    year: 'Feb 2025 – April 2025',
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
    company: 'NTU Open Source Society (Finance AI Project)',
    year: 'December 2024 – March 2025',
    role: 'Machine Learning Engineer',
    tags: ['Machine Learning', 'Software Engineering', 'Extracurricular', 'Leadership'],
    points: [
      'Engineered an end-to-end AI-driven financial planning platform, integrating Gradient Boosting models and LSTM time-series forecasting for stock and budget prediction.',
      'Achieved R² = 0.87 for stock return predictions and implemented a risk-tiered health score system for long-term financial decision support.',
      'Deployed production-ready full-stack app using Flask (backend), React.js (frontend) and Plotly Dash for real-time visual analytics.',
      'Led documentation and unit testing efforts for open-source release, supporting future contributions and model reproducibility.',
    ],
  },
  {
    company: 'Earthlink NTU',
    year: 'Sep 2023 – March 2025',
    role: 'Publicity Officer',
    tags: ['Extracurricular', 'Communication'],
    points: [
      'Overhauled website architecture and UI/UX, increasing average user time-on-site by 35% and reducing bounce rate by 18%.',
      'Designed 30+ branded graphics for sustainability campaigns, leading to a 25% spike in student engagement across Instagram and Telegram.',
      'Produced 5+ monthly video campaigns for campus-wide events, aligning messaging with Earthlink’s green advocacy goals.',
    ],
  },
  {
    company: 'NTU School Of Computer Science And Engineering (SCSE) Orientation',
    year: 'August 2024',
    role: 'Group Leader',
    tags: ['Leadership', 'Extracurricular', 'Communication'],
    points: [
      'Led a group of over 100 freshmen during NTU orientation week, ensuring safety, team bonding, and smooth logistics throughout campus activities.',
      'Collaborated with 20+ student leaders to design and execute engaging events and games, enhancing new student experience and confidence.',
      'Provided peer mentorship, campus navigation support, and emotional reassurance, fostering a welcoming community for incoming students.',
    ],
  },
];

const allTags = [
  'Internship',
  'Research',
  'Industry Project',
  'Machine Learning',
  'Leadership',
  'Extracurricular',
  'Communication',
  'Ethics in AI',
  'Artificial Intelligence',
  'Software Engineering',
  'Automation',
  'Data Analysis',
  'Quantitative Finance',
];

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedTag, setSelectedTag] = useState('All');
  const itemsRef = useRef([]);

  const filteredExperience =
    selectedTag === 'All'
      ? experienceData
      : experienceData.filter((exp) => exp.tags.includes(selectedTag));

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
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, [selectedTag]);

  const handleTagChange = (e) => {
    setSelectedTag(e.target.value);
    setActiveIndex(null);
    itemsRef.current = [];
  };

  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>

      {/* Filter Dropdown */}
      <div className="filter-container">
        <label htmlFor="tag-filter">Filter by Tag:</label>

        <select
          id="tag-filter"
          value={selectedTag}
          onChange={handleTagChange}
        >
          <option value="All">All</option>

          {allTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* Timeline Items */}
      <div className="timeline">
        {filteredExperience.map((exp, index) => (
          <div
            key={`${exp.company}-${exp.role}`}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            className={`timeline-item ${
              index === activeIndex ? 'active' : ''
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="timeline-marker"></div>

            <div className="timeline-content">
              <h3>
                {exp.company} <span>({exp.year})</span>
              </h3>

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
