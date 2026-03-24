import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptop, FaEdit, FaShieldAlt, FaRocket, FaCheckCircle, FaChartLine } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  return (
    <section id="services" className="section-wrapper">
      <div className="container">
        <motion.div 
          className="bento-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="portfolio-header">
            <h2 className="card-title">Results<span className="period">.</span></h2>
            <p className="portfolio-subtitle">Websites optimized for real measurable results.</p>
          </div>

          <div className="bento-grid">
            
            {/* Top Left: Graph */}
            <div className="bento-card span-2 relative-overflow glow-cyan">
              <div className="card-header">
                <div className="dots">
                  <div className="dot cyan"></div><div className="dot purple"></div>
                </div>
              </div>
              <div className="graph-wrapper">
                <svg className="neon-graph" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M0 130 L50 100 L100 120 L150 70 L200 90 L250 50 L300 70 L350 30 L400 50" stroke="#00f0ff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="150" cy="70" r="6" fill="#00f0ff" className="pulse-circle"/>
                  <circle cx="250" cy="50" r="6" fill="#8a2be2" className="pulse-circle"/>
                  <circle cx="350" cy="30" r="6" fill="#00f0ff" className="pulse-circle"/>
                  <path d="M0 130 L50 100 L100 120 L150 70 L200 90 L250 50 L300 70 L350 30 L400 50 L400 150 L0 150 Z" fill="url(#grad1)" opacity="0.2"/>
                  <defs>
                    <linearGradient id="grad1" x1="200" y1="30" x2="200" y2="150" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00f0ff"/>
                      <stop offset="1" stopColor="#00f0ff" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Top Right: Core Results text block */}
            <div className="bento-card span-2 no-bg">
              <h3 className="bento-big-title">Websites built for real business results</h3>
              <div className="bento-features-grid">
                <div className="bento-feature-item">
                  <h4><FaRocket className="icon-cyan"/> OnPage SEO</h4>
                  <p>Ready to be found on Google and dominate search rankings.</p>
                </div>
                <div className="bento-feature-item">
                  <h4><FaChartLine className="icon-purple"/> Tracking & Analytics</h4>
                  <p>Track user statistics, marketing cookies, and conversions.</p>
                </div>
                <div className="bento-feature-item">
                  <h4><FaLaptop className="icon-cyan"/> 100% Responsive</h4>
                  <p>Optimized for desktop, tablet, mobile and everything in between.</p>
                </div>
                <div className="bento-feature-item">
                  <h4><FaCheckCircle className="icon-purple"/> ROI-First</h4>
                  <p>So you get the absolute most out of your advertising budget.</p>
                </div>
              </div>
            </div>

            {/* Middle Left: Full Service floating pills */}
            <div className="bento-card span-2 glow-purple flex-row-between">
              <div>
                <h4 className="bento-heading-italic">Full-Service A to Z</h4>
                <p className="bento-subtext">Benefit from top-notch service and comfort from start to finish.</p>
              </div>
              <div className="floating-pills-container">
                <span className="float-pill p1">Copywriting</span>
                <span className="float-pill p2">Development</span>
                <span className="float-pill p3">Hosting</span>
                <span className="float-pill p4">Strategy</span>
              </div>
            </div>

            {/* Middle Right: Lightning Fast */}
            <div className="bento-card span-2 glow-cyan flex-row-between">
              <div>
                <h4 className="bento-heading-italic">Lightning-Fast Load Times</h4>
                <p className="bento-subtext">Because nobody likes waiting. High-perf tech stacks only.</p>
              </div>
              <div className="score-circle">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="none" />
                  <circle cx="50" cy="50" r="45" stroke="#00f0ff" strokeWidth="6" fill="none" strokeDasharray="283" strokeDashoffset="10" strokeLinecap="round" className="score-circle-anim" />
                  <text x="50" y="55" textAnchor="middle" fill="#fff" fontSize="26" fontWeight="bold">100</text>
                </svg>
              </div>
            </div>

            {/* Bottom Row: 4 small cards */}
            <div className="bento-card span-1 text-center small-card glow-hover">
              <FaLaptop className="bento-icon big-icon"/>
              <h5>Perfectly Integrated</h5>
            </div>
            <div className="bento-card span-1 text-center small-card glow-hover">
              <div className="icon-box"><div className="inner-box"></div></div>
              <h5>Built to Scale</h5>
            </div>
            <div className="bento-card span-1 text-center small-card glow-hover">
              <FaEdit className="bento-icon big-icon"/>
              <h5>Easy to Edit</h5>
            </div>
            <div className="bento-card span-1 text-center small-card glow-hover">
              <FaShieldAlt className="bento-icon big-icon"/>
              <h5>Secure & Compliant</h5>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
