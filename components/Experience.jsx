import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      date: 'Mar 2023 - Present',
      title: 'Senior Full-Stack iOS Developer',
      company: 'ProductivityTech Solutions',
      description: 'Led development of a $2.5M productivity and gaming hybrid iOS application serving 500K+ users. Architected scalable backend systems using Swift, Node.js, and AWS, resulting in 40% increase in user retention and $1.2M in additional revenue.'
    },
    {
      date: 'Sep 2021 - Feb 2023',
      title: 'Frontend Developer',
      company: 'Fortune 500 E-commerce Platform',
      description: 'Developed responsive web applications for a $50M+ e-commerce platform serving 2M+ monthly users. Implemented React, TypeScript, and advanced state management, increasing conversion rates by 35% and generating $8M in additional sales.'
    },
    {
      date: 'Jun 2020 - Aug 2021',
      title: 'Junior Developer',
      company: 'Epic Games Studio',
      description: 'Contributed to high-budget gaming applications with $10M+ development budgets. Built interactive web components and mobile-responsive interfaces using modern JavaScript frameworks, supporting games with 1M+ concurrent players.'
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience.</h2>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-date">{exp.date}</div>
              <div className="timeline-title">
                {exp.title}
                <ArrowRight size={16} />
              </div>
              <div className="timeline-company">{exp.company}</div>
              <div className="timeline-description">{exp.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
