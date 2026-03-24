import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Explore.css';

const portfolioData = [
  {
    title: 'Law Firm Website',
    desc: 'Professional online presence for a modern law firm, featuring practice areas, attorney profiles, and secure contact forms.',
    imgUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Tailwind', 'Node.js']
  },
  {
    title: 'SV Construction',
    desc: 'Robust website for a construction company, showcasing completed projects, interactive maps, and services.',
    imgUrl: 'https://images.unsplash.com/photo-1541888086425-d81bb192a0f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'Framer Motion', 'MongoDB']
  },
  {
    title: 'E-Commerce Platform',
    desc: 'High-conversion online store with a seamless checkout experience and dynamic inventory management.',
    imgUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Redux', 'Stripe API']
  }
];

const Explore = () => {
  return (
    <section id="portfolio" className="section-wrapper">
      <div className="container">
        <motion.div 
          className="card-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="portfolio-header">
            <h2 className="card-title">Portfolio<span className="period">.</span></h2>
            <p className="portfolio-subtitle">Selected work. From local businesses to international platforms.</p>
          </div>

          <div className="portfolio-grid">
            {portfolioData.map((project, index) => (
              <motion.div 
                className="portfolio-item"
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="portfolio-img-wrapper">
                  <img src={project.imgUrl} alt={project.title} className="portfolio-img" />
                  <div className="portfolio-img-overlay">
                    <div className="portfolio-visit-btn">Visit Site <FaExternalLinkAlt size={12} style={{marginLeft: '6px'}}/></div>
                  </div>
                </div>
                <div className="portfolio-details">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Explore;
