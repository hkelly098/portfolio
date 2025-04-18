import React, { useState } from 'react';
import './TerminalPortfolio.css';
import ProjectDetail from './ProjectDetail';
import TerminalPrompt from './TerminalPrompt';

const TerminalPortfolio = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-controls">
          <span className="red" />
          <span className="yellow" />
          <span className="green" />
          <div className="menu-button" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <p className="text-sm">~/kellyhuang/portfolio</p>
        <div className="terminal-tabs">
          <button 
            className={`tab-button ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            Home
          </button>
          <button 
            className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button 
            className={`tab-button ${activeTab === 'resume' ? 'active' : ''}`}
            onClick={() => setActiveTab('resume')}
          >
            Resume
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            <button 
              className={`menu-item ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('home');
                setMenuOpen(false);
              }}
            >
              Home
            </button>
            <button 
              className={`menu-item ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('projects');
                setMenuOpen(false);
              }}
            >
              Projects
            </button>
            <button 
              className={`menu-item ${activeTab === 'resume' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('resume');
                setMenuOpen(false);
              }}
            >
              Resume
            </button>
          </div>
        )}
      </div>

      <div className="terminal-content">
        {activeTab === 'home' && (
          <>
            <pre className="ascii-art">
              {`
    ,--. ,--.      ,--.,--.             ,--.  ,--.                                
    |  .'  / ,---. |  ||  |,--. ,--.    |  '--'  |,--.,--. ,--,--.,--,--,  ,---.  
    |  .  ' | .-. :|  ||  | \\  '  /     |  .--.  ||  ||  |' ,-.  ||      \\| .-. | 
    |  |\\   \\   --.|  ||  |  \\   '      |  |  |  |'  ''  '\\ '-'  ||  ||  |' '-' ' 
    \`--' '--' \`----'\`--'\`--'.-'  /       \`--'  \`--' \`----'  \`--\`--'\`--''--'.\`-  /  
                            \`---'                                          \`---'   
              `}
            </pre>

            <h1 className="terminal-line">
              <TerminalPrompt command="whoami" />
            </h1>
            <p>
              Hi, I'm <span className="text-blue">Kelly Huang</span>, a software engineer passionate about building scalable backend systems and intuitive user experiences. Currently at <span className="text-pink">company</span> working with Kafka, Kubernetes, and Snowflake.
            </p>

            <h2 className="terminal-line" style={{ marginTop: '2rem' }}>
              <TerminalPrompt command="list skills" />
            </h2>
            <p className="text-sm">
              Java, Python, React, Spring Boot, Kafka, Kubernetes, Snowflake, PostgreSQL, Docker, Git
            </p>

            <h2 className="terminal-line" style={{ marginTop: '2rem' }}>
              <TerminalPrompt command="list projects" />
            </h2>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
              <li>
                <span className="text-yellow">portfolio-site/</span> – this terminal-inspired personal website [
                <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('projects'); handleProjectClick('portfolio-site'); }}>View</a>]
              </li>
              <li>
                <span className="text-yellow">kafka-pipeline/</span> – real-time event pipeline using Kafka, Kubernetes [
                <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('projects'); handleProjectClick('kafka-pipeline'); }}>View</a>]
              </li>
              <li>
                <span className="text-yellow">ucb-research/</span> – NLP research at UC Berkeley [
                <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('projects'); handleProjectClick('ucb-research'); }}>View</a>]
              </li>
            </ul>

            <h2 className="terminal-line" style={{ marginTop: '2rem' }}>
              <TerminalPrompt command="blog --recent" />
            </h2>
            <p>▶ <a href="#">Lessons from Scaling Kafka Pipelines</a></p>
            <p>▶ <a href="#">Designing a Terminal-Themed Portfolio Site</a></p>

            <h2 className="terminal-line" style={{ marginTop: '2rem' }}>
              <TerminalPrompt command="show contact info" />
            </h2>
            <p>
              Email me at <a href="mailto:kelly@example.com">kelly@example.com</a> or reach out on <a href="https://linkedin.com/in/yourusername">LinkedIn</a>.
            </p>
          </>
        )}

        {activeTab === 'projects' && !selectedProject && (
          <div className="projects-container">
            <h1 className="terminal-line">
              <TerminalPrompt command="list projects" />
            </h1>
            <div className="projects-grid">
              <div className="project-card" onClick={() => handleProjectClick('portfolio-site')}>
                <div className="project-image">
                  <img src="/images/portfolio-site.jpg" alt="Portfolio Site" />
                </div>
                <div className="project-info">
                  <h3>Terminal Portfolio Site</h3>
                  <p>A terminal-inspired personal website built with React</p>
                  <div className="project-tech">
                    <span>React</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                  </div>
                  <a href="#" className="project-link">View Details</a>
                </div>
              </div>
              
              <div className="project-card" onClick={() => handleProjectClick('kafka-pipeline')}>
                <div className="project-image">
                  <img src="/images/kafka-pipeline.jpg" alt="Kafka Pipeline" />
                </div>
                <div className="project-info">
                  <h3>Kafka Event Pipeline</h3>
                  <p>Real-time event processing pipeline using Kafka and Kubernetes</p>
                  <div className="project-tech">
                    <span>Kafka</span>
                    <span>Kubernetes</span>
                    <span>Java</span>
                  </div>
                  <a href="#" className="project-link">View Details</a>
                </div>
              </div>
              
              <div className="project-card" onClick={() => handleProjectClick('ucb-research')}>
                <div className="project-image">
                  <img src="/images/ucb-research.jpg" alt="UCB Research" />
                </div>
                <div className="project-info">
                  <h3>NLP Research at UC Berkeley</h3>
                  <p>Natural Language Processing research project at UC Berkeley</p>
                  <div className="project-tech">
                    <span>Python</span>
                    <span>NLP</span>
                    <span>Machine Learning</span>
                  </div>
                  <a href="#" className="project-link">View Details</a>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && selectedProject && (
          <ProjectDetail projectId={selectedProject} onBack={handleBackToProjects} />
        )}

        {activeTab === 'resume' && (
          <div className="resume-container">
            <h1 className="terminal-line">
              <TerminalPrompt command="read resume" />
            </h1>
            <div className="resume-preview">
              <p>Click below to view or download my resume:</p>
              <a href="portfolio/resume.pdf" className="resume-link" target="_blank" rel="noopener noreferrer">
                View Resume (PDF)
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalPortfolio;
