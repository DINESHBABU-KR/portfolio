import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        <motion.div 
          className="card-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="portfolio-header">
            <h2 className="card-title">About<span className="period">.</span></h2>
            <p className="portfolio-subtitle">The mind behind the work.</p>
          </div>

          <div className="about-grid">
            <div className="about-image-card">
              <div className="badge">Founder & Developer</div>
              <h3 className="about-name">Freelancer</h3>
              <p className="about-meta">Based worldwide</p>
            </div>
            
            <div className="about-content">
              <h3>One mind, clear vision.</h3>
              <p>I am the sole mind behind this portfolio. No big team, no unnecessary meetings, no wasted hours. As a developer with innovative thinking, I work efficiently with quality and fast.</p>
              <p>I manage and execute everything myself to deliver the best result. I am the best partner you'll find when it comes to excellence.</p>
              
              <div className="about-stats">
                <div className="stat-box">
                  <h4>100%</h4>
                  <span>Satisfied Clients</span>
                </div>
                <div className="stat-box">
                  <h4>2020</h4>
                  <span>Year Founded</span>
                </div>
              </div>
              
              <div className="about-tags">
                <span className="tag">WEB DEVELOPMENT</span>
                <span className="tag">UI/UX DESIGN</span>
                <span className="tag">AUTOMATION</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
