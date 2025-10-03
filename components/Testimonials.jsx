import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "AVision Studios transformed our business with their exceptional web platform. The team's attention to detail and technical expertise exceeded our expectations. Our online sales increased by 300% within the first quarter."
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "HealthTech Solutions",
      role: "CTO",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Working with AVision Studios was a game-changer for our mobile app development. They delivered a robust, user-friendly application that our customers love. Their ongoing support and maintenance services are outstanding."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "EcoGreen Co.",
      role: "Founder",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The e-commerce solution AVision Studios built for us is incredible. The user experience is seamless, and the backend integration works flawlessly. They truly understand both the technical and business aspects of development."
    },
    {
      id: 4,
      name: "David Thompson",
      company: "FinanceFlow",
      role: "Product Manager",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "AVision Studios delivered our SaaS dashboard ahead of schedule and under budget. The real-time analytics and reporting features they implemented have been crucial for our business growth. Highly recommended!"
    },
    {
      id: 5,
      name: "Lisa Wang",
      company: "EduTech Academy",
      role: "Director",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Their educational platform development was outstanding. The interactive features and mobile responsiveness have significantly improved student engagement. The team's communication throughout the project was excellent."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={index < rating ? 'star-filled' : 'star-empty'}
      />
    ));
  };

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </motion.div>

        <div className="testimonials-container">
          <motion.div
            className="testimonial-card"
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="quote-icon">
              <Quote size={40} />
            </div>
            
            <div className="testimonial-content">
              <div className="testimonial-rating">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              
              <p className="testimonial-text">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <div className="testimonial-author">
                <div className="author-image">
                  <div className="image-placeholder">
                    <span>{testimonials[currentTestimonial].name.charAt(0)}</span>
                  </div>
                </div>
                <div className="author-info">
                  <h4>{testimonials[currentTestimonial].name}</h4>
                  <p>{testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="testimonial-controls">
            <button 
              className="control-btn"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="control-btn"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <motion.div
          className="testimonials-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="stats-grid">
            <div className="stat-item">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3>4.9/5</h3>
              <p>Average Rating</p>
            </div>
            <div className="stat-item">
              <h3>95%</h3>
              <p>Repeat Business</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

