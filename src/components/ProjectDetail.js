import React from 'react';
import './ProjectDetail.css';

const ProjectDetail = ({ projectId, onBack }) => {
  // Project data - in a real app, this would come from an API or database
  const projects = {
    'portfolio-site': {
      title: 'Terminal Portfolio Site',
      description: 'A terminal-inspired personal website built with React',
      longDescription: 'This portfolio site was designed to showcase my skills and projects in a unique terminal-inspired interface. The site is built with React and styled with CSS, featuring a responsive design that works well on both desktop and mobile devices.',
      image: '/images/portfolio-site.jpg',
      technologies: ['React', 'CSS', 'JavaScript', 'HTML'],
      github: 'https://github.com/yourusername/portfolio-site',
      demo: 'https://yourusername.github.io/portfolio-site',
      features: [
        'Terminal-inspired UI with command-line interface',
        'Responsive design for all devices',
        'Project showcase with detailed information',
        'Blog section for technical articles',
        'Contact information and social links'
      ]
    },
    'kafka-pipeline': {
      title: 'Kafka Event Pipeline',
      description: 'Real-time event processing pipeline using Kafka and Kubernetes',
      longDescription: 'This project implements a scalable real-time event processing pipeline using Apache Kafka and Kubernetes. It handles high-throughput data streams, processes events in real-time, and stores the results in a distributed database.',
      image: '/images/kafka-pipeline.jpg',
      technologies: ['Kafka', 'Kubernetes', 'Java', 'Spring Boot', 'Docker'],
      github: 'https://github.com/yourusername/kafka-pipeline',
      demo: null,
      features: [
        'High-throughput event processing',
        'Scalable architecture with Kubernetes',
        'Real-time data analytics',
        'Fault tolerance and data replication',
        'Monitoring and alerting system'
      ]
    },
    'ucb-research': {
      title: 'NLP Research at UC Berkeley',
      description: 'Natural Language Processing research project at UC Berkeley',
      longDescription: 'This research project at UC Berkeley focused on developing novel approaches to natural language processing. The project explored transformer-based models for text classification and generation, with a focus on improving efficiency and reducing computational requirements.',
      image: '/images/ucb-research.jpg',
      technologies: ['Python', 'PyTorch', 'Transformers', 'NLP', 'Machine Learning'],
      github: 'https://github.com/yourusername/ucb-research',
      demo: null,
      features: [
        'Novel transformer architecture for NLP tasks',
        'Improved efficiency in language models',
        'Text classification and generation capabilities',
        'Published research paper in NLP conference',
        'Collaboration with UC Berkeley NLP lab'
      ]
    }
  };

  const project = projects[projectId];

  if (!project) {
    return (
      <div className="project-detail">
        <p className="error-message">Project not found. Please go back and try again.</p>
        <button className="back-button" onClick={onBack}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="project-detail">
        <button className="back-button" onClick={onBack}>&lt;- Go Back to All Projects</button>
      <div className="project-header">
        <div className="project-title-section">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="project-image-large">
          <img src={project.image} alt={project.title} />
        </div>
          <div className="project-links">
            <a href={project.github} className="github-link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            {project.demo && (
              <a href={project.demo} className="demo-link" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="section-title">About</h3>
        <p>{project.longDescription}</p>
        
        <h3 className="section-title">Technologies Used</h3>
        <div className="tech-stack">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        
        <h3 className="section-title">Key Features</h3>
        <ul className="features-list">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetail; 