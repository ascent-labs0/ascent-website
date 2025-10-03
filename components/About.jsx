import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Target } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-image">
            <div className="image-placeholder">
              <div className="gradient-box">
                <Code size={40} />
              </div>
            </div>
          </div>

          <div className="about-text">
            <h2 className="section-title">About.</h2>
            <div className="about-description">
              <p>
                Ascent Labs specializes in creating exceptional digital experiences 
                that drive business growth and exceed expectations.
              </p>
              <p>
                Currently, our focus is on delivering cutting-edge web applications and premium 
                iOS applications. We have a solid foundation in modern web technologies including 
                React, Node.js, Python, and specialized expertise in iOS development for App Store.
              </p>
              <p>
                We are passionate about transforming ideas into powerful digital solutions that 
                help businesses thrive in the digital world. Our team combines technical expertise 
                with creative vision to deliver projects that exceed expectations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;