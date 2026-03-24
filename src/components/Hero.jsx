import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { SiReact, SiNodedotjs, SiNextdotjs, SiMongodb, SiSpringboot, SiMysql, SiFirebase, SiSupabase } from 'react-icons/si';
import logoBrand from '../assets/logo-brand.png';
import './Hero.css';

const TechLogos = () => (
  <>
    <div className="slide"><SiReact size={30} color="#61DAFB" /><span>React</span></div>
    <div className="slide"><SiNodedotjs size={30} color="#339933" /><span>Node.js</span></div>
    <div className="slide"><SiNextdotjs size={30} color="#fff" /><span>Next.js</span></div>
    <div className="slide"><SiMongodb size={30} color="#47A248" /><span>MongoDB</span></div>
    <div className="slide"><SiSpringboot size={30} color="#6DB33F" /><span>Spring Boot</span></div>
    <div className="slide"><SiMysql size={30} color="#4479A1" /><span>MySQL</span></div>
    <div className="slide"><SiFirebase size={30} color="#FFCA28" /><span>Firebase</span></div>
    <div className="slide"><SiSupabase size={30} color="#3ECF8E" /><span>Supabase</span></div>
  </>
);

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
      <div className="hero-grid-bg"></div>
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <img src={logoBrand} alt="Adex" className="badge-logo" />
            <span className="badge-text" style={{ fontWeight: '600' }}>Adex</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We build websites that <br />
            <span className="text-gradient">grow your business</span>
          </motion.h1>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Premium web design, React development, and SEO optimization. We
            deliver stunning, high-performing websites tailored to scale your brand.
          </motion.p>
          <motion.div
            className="hero-btns"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link to="contact" spy={true} smooth={true} offset={-80} duration={200}>
              <button className="btn-primary">Book a Call</button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-slider-container">
        <div className="hero-slide-track">
          <div className="slide-group"><TechLogos /></div>
          <div className="slide-group"><TechLogos /></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
