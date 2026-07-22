import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Work',    href: '#projects' },
  { label: 'About',   href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map(({ href }) => document.querySelector(href)).filter(Boolean);
    const onScroll = () => {
      const y = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= y) {
          setActive(NAV_ITEMS[i].href);
          return;
        }
      }
      setActive('');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`navbar${scrolled ? ' scrolled' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
    >
      <div className="navbar-inner container">
        <a href="#hero" className="nav-logo" onClick={(e) => handleClick(e, '#hero')}>
          Z Y
        </a>
        <div className="nav-right">
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`nav-link${active === href ? ' active' : ''}`}
              onClick={(e) => handleClick(e, href)}
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={(e) => handleClick(e, '#contact')}>
            Get in Touch
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
