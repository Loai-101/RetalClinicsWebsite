import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ fadeOut }) => {
  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-logo">
          <img 
            src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1762684308/Screenshot_2025-11-09_133136_zgpuja.png" 
            alt="Retal clinics Logo" 
            className="loading-logo-image"
          />
        </div>
        <h1 className="loading-title">Retal clinics</h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
