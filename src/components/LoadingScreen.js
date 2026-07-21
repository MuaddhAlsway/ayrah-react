import React, { useState, useEffect } from 'react';
import '../styles/styles.css';

function LoadingScreen() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-screen${hidden ? ' hidden' : ''}`}>
      <div className="loading-content">
        <div className="loading-logo">AYRAH</div>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
        <div className="loading-text">Loading Experience</div>
      </div>
    </div>
  );
}

export default LoadingScreen;
