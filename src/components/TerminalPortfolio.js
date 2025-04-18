import React from 'react';
import './TerminalPortfolio.css';

const TerminalPortfolio = () => {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-controls">
          <span className="red" />
          <span className="yellow" />
          <span className="green" />
        </div>
        <p className="text-sm">~kellyhuang/portfolio</p>
      </div>

      <div className="terminal-content">
        <pre className="ascii-art">
          {`
    ,--. ,--.      ,--.,--.             ,--.  ,--.                                
    |  .'  / ,---. |  ||  |,--. ,--.    |  '--'  |,--.,--. ,--,--.,--,--,  ,---.  
    |  .  ' | .-. :|  ||  | \\  '  /     |  .--.  ||  ||  |' ,-.  ||      \\| .-. | 
    |  |\\  \\\\   --.|  ||  |  \\   '      |  |  |  |'  ''  '\\ '-'  ||  ||  |' '-' ' 
    \`--' '--' \`----'\`--'\`--'.-'  /      \`--'  \`--' \`----'  \`--\`--'\`--''--'.\`-  /  
                            \`---'                                          \`---'   
          `}
        </pre>

        <h1 className="terminal-line">
          kelly@dev:~$ <span className="command">whoami</span><span className="cursor">_</span>
        </h1>
        <p>
          Hi, I'm <span className="text-blue">Kelly Huang</span>, a software engineer passionate about building scalable backend systems and intuitive user experiences. Currently at <span className="text-pink">company</span> working with Kafka, Kubernetes, and Snowflake.
        </p>

        <h2 className="terminal-line" style={{ marginTop: '2rem' }}>
          kelly@dev:~$ <span className="command">list skills</span><span className="cursor">_</span>
        </h2>
        <p className="text-sm">
          Java, Python, React, Spring Boot, Kafka, Kubernetes, Snowflake, PostgreSQL, Docker, Git
        </p>

        <h2 className="terminal-line" style={{ marginTop: '2rem' }}>
          kelly@dev:~$ <span className="command">list projects</span><span className="cursor">_</span>
        </h2>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
          <li>
            <span className="text-yellow">portfolio-site/</span> – this terminal-inspired personal website [
            <a href="https://github.com/yourusername/portfolio-site">GitHub</a>]
          </li>
          <li>
            <span className="text-yellow">kafka-pipeline/</span> – real-time event pipeline using Kafka, Kubernetes [
            <a href="https://github.com/yourusername/kafka-pipeline">GitHub</a>]
          </li>
          <li>
            <span className="text-yellow">ucb-research/</span> – NLP research at UC Berkeley [
            <a href="https://github.com/yourusername/ucb-research">GitHub</a>]
          </li>
        </ul>

        <h2 className="terminal-line" style={{ marginTop: '2rem' }}>
          kelly@dev:~$ <span className="command">blog --recent</span><span className="cursor">_</span>
        </h2>
        <p>▶ <a href="#">Lessons from Scaling Kafka Pipelines at SoFi</a></p>
        <p>▶ <a href="#">Designing a Terminal-Themed Portfolio Site</a></p>

        <h2 className="terminal-line" style={{ marginTop: '2rem' }}>
          kelly@dev:~$ <span className="command">show contact info</span><span className="cursor">_</span>
        </h2>
        <p>
          Email me at <a href="mailto:kelly@example.com">kelly@example.com</a> or reach out on <a href="https://linkedin.com/in/yourusername">LinkedIn</a>.
        </p>
      </div>
    </div>
  );
};

export default TerminalPortfolio;
