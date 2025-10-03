import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Smartphone, Apple } from 'lucide-react';
import './Formation.css';

const Formation = () => {
  const formations = [
    {
      icon: <Palette size={24} />,
      iconBg: '#8B5CF6',
      title: 'UI/UX Design Masterclass',
      provider: 'Design Academy',
      duration: '24 hours'
    },
    {
      icon: <Code size={24} />,
      iconBg: '#F59E0B',
      title: 'Advanced React Development',
      provider: 'React University',
      duration: '32 hours'
    },
    {
      icon: <Database size={24} />,
      iconBg: '#87CEEB',
      title: 'Database Design & Management',
      provider: 'DataTech Institute',
      duration: '18 hours'
    },
    {
      icon: <Apple size={24} />,
      iconBg: '#3B82F6',
      title: 'iOS Development & App Store Optimization',
      provider: 'Apple Developer Academy',
      duration: '32 hours'
    },
    {
      icon: <Smartphone size={24} />,
      iconBg: '#EF4444',
      title: 'Mobile App Development',
      provider: 'Mobile Academy',
      duration: '35 hours'
    },
    {
      icon: <Code size={24} />,
      iconBg: '#8B5CF6',
      title: 'Full-Stack Web Development',
      provider: 'WebDev Bootcamp',
      duration: '40 hours'
    }
  ];

  return (
    <section id="formation" className="formation section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Formation.</h2>
        </motion.div>

        <div className="formation-grid">
          {formations.map((formation, index) => (
            <motion.div
              key={index}
              className="formation-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className="formation-icon"
                style={{ backgroundColor: formation.iconBg }}
              >
                {formation.icon}
              </div>
              <div className="formation-content">
                <div className="formation-title">{formation.title}</div>
                <div className="formation-provider">{formation.provider}</div>
                <div className="formation-duration">{formation.duration}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formation;
