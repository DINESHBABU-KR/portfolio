import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import './Pricing.css';

const pricingData = [
  {
    title: 'landing page',
    desc: 'A professional page with contact form and automatic emails. Quickly online.',
    type: 'SINGLE PAYMENT',
    price: '₹999',
    features: ['1 page (landing page)', 'Contact form', 'Automatic emails', 'Mobile optimized'],
    isPopular: false,
    btnText: 'Get Started'
  },
  {
    title: 'standard',
    desc: 'The perfect start for professional demands. Ideal for established websites.',
    type: 'SINGLE PAYMENT',
    price: '₹2,999',
    features: ['3 pages', 'Contact form', 'Automatic emails', 'Mobile optimized'],
    isPopular: true,
    btnText: 'Get Started'
  },
  {
    title: 'big project',
    desc: 'For complex web applications, large platforms, and customized full trading sites.',
    type: 'CUSTOM ARCHITECTURE',
    price: 'Variable',
    features: ['Tailored Solutions', 'Advanced Features', 'Database Integration', 'Priority Support'],
    isPopular: false,
    btnText: 'Let\'s Talk'
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-wrapper">
      <div className="container">
        <motion.div 
          className="card-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="portfolio-header">
            <h2 className="card-title">Pricing<span className="period">.</span></h2>
            <p className="portfolio-subtitle">Transparent costs. High quality approach.</p>
          </div>

          <div className="pricing-grid">
            {pricingData.map((tier, index) => (
              <motion.div 
                className={`pricing-card ${tier.isPopular ? 'popular' : ''}`}
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {tier.isPopular && <div className="popular-badge">POPULAR</div>}
                <h3 className="pricing-title">{tier.title}</h3>
                <p className="pricing-desc">{tier.desc}</p>
                <div className="pricing-type">{tier.type}</div>
                <div className="pricing-price">{tier.price}</div>
                <ul className="pricing-features">
                  {tier.features.map((feature, i) => (
                    <li key={i}><FaCheck className="check-icon" /> {feature}</li>
                  ))}
                </ul>
                <button className={tier.isPopular ? 'btn-accent-blue' : 'btn-accent'}>
                  {tier.btnText} &rarr;
                </button>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
