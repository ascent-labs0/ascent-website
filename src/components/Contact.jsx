import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Instagram, Mail, ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      href: '#'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      href: 'https://github.com/ascent-labs0'
    },
    {
      icon: <Instagram size={24} />,
      label: 'Instagram',
      href: '#'
    },
    {
      icon: <Mail size={24} />,
      label: 'E-mail',
      href: 'mailto:ascentlabsdev1@gmail.com'
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Contact.</h2>
          <p className="contact-subtitle">
            Contact us or follow our social media
          </p>
        </motion.div>

        <motion.div
          className="contact-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              className="contact-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="contact-icon">
                {method.icon}
              </div>
              <div className="contact-text">{method.label}</div>
              <ArrowRight size={16} className="contact-arrow" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;