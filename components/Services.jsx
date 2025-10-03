import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Database, 
  Apple, 
  Shield,
  Code,
  Palette,
  Search,
  Zap
} from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Globe size={40} />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Node.js, and more.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross-browser Compatible"]
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      features: ["iOS & Android", "Cross-platform", "Native Performance", "App Store Ready"]
    },
    {
      icon: <ShoppingCart size={40} />,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment processing, inventory management, and analytics.",
      features: ["Payment Integration", "Inventory Management", "Order Tracking", "Analytics Dashboard"]
    },
    {
      icon: <Database size={40} />,
      title: "Backend Development",
      description: "Robust server-side solutions, APIs, and database architecture for scalable applications.",
      features: ["RESTful APIs", "Database Design", "iOS Integration", "Security Implementation"]
    },
    {
      icon: <Apple size={40} />,
      title: "iOS App Development",
      description: "Premium iOS applications designed for the App Store with exceptional user experience and performance.",
      features: ["Swift & SwiftUI", "App Store Optimization", "Core Data", "Push Notifications"]
    },
    {
      icon: <Shield size={40} />,
      title: "Security & Maintenance",
      description: "Ongoing security updates, maintenance, and support to keep your applications running smoothly.",
      features: ["Security Audits", "Regular Updates", "24/7 Monitoring", "Backup Solutions"]
    }
  ];

  const technologies = [
    { name: "React", icon: <Code size={24} /> },
    { name: "Node.js", icon: <Code size={24} /> },
    { name: "Python", icon: <Code size={24} /> },
    { name: "JavaScript", icon: <Code size={24} /> },
    { name: "TypeScript", icon: <Code size={24} /> },
    { name: "MongoDB", icon: <Database size={24} /> },
    { name: "PostgreSQL", icon: <Database size={24} /> },
    { name: "Swift", icon: <Apple size={24} /> },
    { name: "iOS", icon: <Apple size={24} /> },
    { name: "Figma", icon: <Palette size={24} /> }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer comprehensive development services to help your business thrive in the digital world.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <Zap size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="technologies-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="technologies-title">Technologies We Use</h3>
          <div className="technologies-grid">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="tech-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="tech-icon">
                  {tech.icon}
                </div>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="cta-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3>Ready to Start Your Project?</h3>
            <p>Let's discuss how we can help bring your vision to life.</p>
            <button 
              className="btn btn-primary"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

