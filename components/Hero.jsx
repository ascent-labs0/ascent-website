import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Code } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const socialIcons = [
    { icon: <Github size={20} />, href: 'https://github.com/ascent-labs0', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Mail size={20} />, href: 'mailto:ascentlabsdev1@gmail.com', label: 'Email' },
    { icon: <Code size={20} />, href: '#', label: 'Portfolio' },
  ];

  const skills = [
    'iOS', 'SWIFT', 'APP STORE', 'SWIFTUI', 'XCODE', 
    'REACT', 'JAVASCRIPT', 'NODE.JS', 'PYTHON', 'MONGODB', 'FIGMA', 'GIT'
  ];

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Hi, I'm <span className="text-gradient">Ascent Labs</span>
            </h1>
            <p className="hero-subtitle">Premium iOS & Web Development Company</p>
            
            <div className="social-icons">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="social-icon"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-image">
              <div className="image-placeholder">
                <Code size={60} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="skills-bar">
        <div className="skills-scroll">
          {skills.map((skill, index) => (
            <span key={index} className="skill-item">
              {skill}
            </span>
          ))}
          {skills.map((skill, index) => (
            <span key={`duplicate-${index}`} className="skill-item">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;