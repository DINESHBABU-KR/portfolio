import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoBrand from '../assets/logo-brand.png';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setHidden(true); // scrolling down
        setClick(false); // close mobile menu if scrolling down
      } else {
        setHidden(false); // scrolling up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
      <div className="navbar">
        <div className="logo">
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={200} onClick={closeMenu}>
            <img src={logoBrand} alt="Adex Logo" className="logo-img" />
          </Link>
        </div>

        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes size={20} color="#fff" /> : <FaBars size={20} color="#fff" />}
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="services" spy={true} smooth={true} offset={-100} duration={200} onClick={closeMenu}>Services</Link>
          </li>
          <li className="nav-item">
            <Link to="portfolio" spy={true} smooth={true} offset={-100} duration={200} onClick={closeMenu}>Work</Link>
          </li>
          <li className="nav-item">
            <Link to="pricing" spy={true} smooth={true} offset={-100} duration={200} onClick={closeMenu}>Pricing</Link>
          </li>
          <li className="nav-item">
            <Link to="about" spy={true} smooth={true} offset={-100} duration={200} onClick={closeMenu}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="team" spy={true} smooth={true} offset={-100} duration={200} onClick={closeMenu}>Team</Link>
          </li>
          <li className="nav-item">
            <Link to="faq" spy={true} smooth={true} offset={-100} duration={200} onClick={closeMenu}>Faq</Link>
          </li>
        </ul>

        <div className="nav-cta hide-mobile">
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={200}>
            <button className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>Book a Call</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
