import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, ExternalLink, Github } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Pet Activities Tracker',
      description: 'Comprehensive pet activity monitoring with rewards system, streak tracking, and progress analytics for pet owners',
      image: '/screen-shots/Simulator Screenshot - iPhone 16 Pro - 2025-10-02 at 21.52.35.png',
      technologies: ['Swift', 'SwiftUI', 'Core Data', 'HealthKit'],
      category: 'iOS App',
      liveUrl: '#',
      githubUrl: 'https://github.com/ascent-labs0'
    },
    {
      id: 2,
      title: 'Social Learning Platform',
      description: 'Interactive social learning app with streak tracking, XP system, achievements, and community features',
      image: '/screen-shots/Simulator Screenshot - iPhone 16 Pro - 2025-10-02 at 21.54.14.png',
      technologies: ['Swift', 'Firebase', 'Core Data', 'Push Notifications'],
      category: 'iOS App',
      liveUrl: '#',
      githubUrl: 'https://github.com/ascent-labs0'
    },
    {
      id: 3,
      title: 'Fitness & Health Tracker',
      description: 'Advanced fitness tracking with workout plans, health metrics, and personalized recommendations',
      image: '/screen-shots/Simulator Screenshot - iPhone 16 Pro - 2025-10-02 at 21.54.26.png',
      technologies: ['Swift', 'HealthKit', 'Core Motion', 'Charts'],
      category: 'iOS App',
      liveUrl: '#',
      githubUrl: 'https://github.com/ascent-labs0'
    },
    {
      id: 4,
      title: 'Productivity Dashboard',
      description: 'Comprehensive productivity suite with task management, analytics, and goal tracking features',
      image: '/screen-shots/Simulator Screenshot - iPhone 16 Pro - 2025-10-02 at 21.56.00.png',
      technologies: ['Swift', 'SwiftUI', 'Core Data', 'CloudKit'],
      category: 'iOS App',
      liveUrl: '#',
      githubUrl: 'https://github.com/ascent-labs0'
    },
    {
      id: 5,
      title: 'E-Commerce Mobile App',
      description: 'Premium shopping experience with secure payments, product catalog, and order management',
      image: '/screen-shots/Simulator Screenshot - iPhone 16 Pro - 2025-10-02 at 21.56.05.png',
      technologies: ['Swift', 'Stripe', 'Core Data', 'REST APIs'],
      category: 'iOS App',
      liveUrl: '#',
      githubUrl: 'https://github.com/ascent-labs0'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">
            Explore our premium iOS applications and see the quality of our work
          </p>
        </motion.div>

        <div className="portfolio-showcase">
          <div className="main-project">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="project-card"
            >
              <div className="iphone-mockup">
                <div className="iphone-frame">
                  <div className="iphone-screen">
                    
                    <div className="app-content">
                      <img 
                        src={projects[currentProject].image} 
                        alt={projects[currentProject].title}
                        className="app-screenshot"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="fallback-content" style={{ display: 'none' }}>
                        <div className="app-icon">
                          {projects[currentProject].title.charAt(0)}
                        </div>
                        <h3>{projects[currentProject].title}</h3>
                      </div>
                    </div>

                    <div className="home-indicator"></div>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <div className="project-header">
                  <span className="project-category">{projects[currentProject].category}</span>
                  <h3>{projects[currentProject].title}</h3>
                  <p>{projects[currentProject].description}</p>
                </div>

                <div className="project-technologies">
                  {projects[currentProject].technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

              </div>
            </motion.div>
          </div>

          <div className="portfolio-controls">
            <button onClick={prevProject} className="control-btn">
              <ChevronLeft size={20} />
            </button>
            
            <button onClick={togglePlay} className="control-btn play-btn">
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <button onClick={nextProject} className="control-btn">
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="project-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentProject ? 'active' : ''}`}
                onClick={() => setCurrentProject(index)}
              />
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-thumbnail ${index === currentProject ? 'active' : ''}`}
              onClick={() => setCurrentProject(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="thumbnail-frame">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="thumbnail-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="thumbnail-fallback" style={{ display: 'none' }}>
                  <div className="thumbnail-icon">{project.title.charAt(0)}</div>
                </div>
              </div>
              <div className="thumbnail-info">
                <h4>{project.title}</h4>
                <span className="thumbnail-category">{project.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;