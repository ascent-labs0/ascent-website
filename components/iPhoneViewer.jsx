import React from 'react';
import './iPhoneViewer.css';

const iPhoneViewer = () => {
  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">iOS App Portfolio</h2>
          <p className="section-subtitle">
            Experience our premium iOS applications through real app screenshots
          </p>
        </div>

        <div className="test-gallery">
          <div className="test-iphone">
            <div className="iphone-frame">
              <div className="iphone-screen">
                <div className="status-bar">
                  <div className="time">9:41</div>
                  <div className="status-icons">
                    <div className="signal"></div>
                    <div className="wifi"></div>
                    <div className="battery"></div>
                  </div>
                </div>
                
                <div className="app-preview">
                  <div className="sample-content">
                    <h3>iOS App Screenshot</h3>
                    <p>This is where your actual screenshots will appear</p>
                  </div>
                </div>

                <div className="home-indicator"></div>
              </div>
            </div>
          </div>

          <div className="gallery-info">
            <h3>Sample iOS App</h3>
            <p>This is a sample iOS application screen. Your actual screenshots will be loaded here.</p>
          </div>

          <div className="test-grid">
            <div className="test-item">Screenshot 1</div>
            <div className="test-item">Screenshot 2</div>
            <div className="test-item">Screenshot 3</div>
            <div className="test-item">Screenshot 4</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default iPhoneViewer;