import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import '../styles/styles.css';
import '../styles/sizeguide.css';

const SizeGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sizeguide-page">
      <LoadingScreen />
      <Header />

      <section className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/collection">Collection</Link>
          <span>/</span>
          <span className="current">Size Guide</span>
        </div>
      </section>

      <section className="sizeguide-hero">
        <div className="container">
          <p className="section-tag">Find Your Perfect Fit</p>
          <h1>Size Guide</h1>
          <p className="sizeguide-subtitle">Our abayas are designed with a relaxed, elegant silhouette. Use the guide below to find your ideal size.</p>
        </div>
      </section>

      <section className="sizeguide-content">
        <div className="container">

          <div className="sizeguide-measurement">
            <h2>How to Measure</h2>
            <div className="measurement-grid">
              <div className="measurement-card">
                <div className="measurement-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2a3 3 0 0 0-3 3v1a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
                    <path d="M19 10H5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2z"/>
                    <path d="M12 15v7"/>
                    <path d="M8 22h8"/>
                  </svg>
                </div>
                <h3>Bust</h3>
                <p>Measure around the fullest part of your chest, keeping the tape level and comfortable.</p>
              </div>
              <div className="measurement-card">
                <div className="measurement-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22c-4-3.5-8-7-8-11a8 8 0 0 1 16 0c0 4-4 7.5-8 11z"/>
                    <circle cx="12" cy="11" r="3"/>
                  </svg>
                </div>
                <h3>Waist</h3>
                <p>Measure around the narrowest part of your natural waistline, typically above the navel.</p>
              </div>
              <div className="measurement-card">
                <div className="measurement-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <ellipse cx="12" cy="5" rx="9" ry="3"/>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                  </svg>
                </div>
                <h3>Hips</h3>
                <p>Measure around the fullest part of your hips and buttocks, keeping the tape level.</p>
              </div>
              <div className="measurement-card">
                <div className="measurement-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2v20"/>
                    <path d="M17 7l-5-5-5 5"/>
                    <path d="M5 12h14"/>
                  </svg>
                </div>
                <h3>Length</h3>
                <p>Measure from the highest point of your shoulder straight down to your desired hemline.</p>
              </div>
            </div>
          </div>

          <div className="sizeguide-table-section">
            <h2>Size Chart</h2>
            <p className="table-note">All measurements are in centimeters (cm). Our abayas are designed with a relaxed fit.</p>
            <div className="size-table-wrapper">
              <table className="size-table">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Label</th>
                    <th>Bust</th>
                    <th>Waist</th>
                    <th>Hips</th>
                    <th>Length</th>
                    <th>Shoulder</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="size-badge">XS</span></td>
                    <td>Extra Small</td>
                    <td>86 - 90</td>
                    <td>66 - 70</td>
                    <td>92 - 96</td>
                    <td>140</td>
                    <td>38</td>
                  </tr>
                  <tr>
                    <td><span className="size-badge">S</span></td>
                    <td>Small</td>
                    <td>90 - 94</td>
                    <td>70 - 74</td>
                    <td>96 - 100</td>
                    <td>142</td>
                    <td>39</td>
                  </tr>
                  <tr>
                    <td><span className="size-badge active">M</span></td>
                    <td>Medium</td>
                    <td>94 - 98</td>
                    <td>74 - 78</td>
                    <td>100 - 104</td>
                    <td>144</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td><span className="size-badge">L</span></td>
                    <td>Large</td>
                    <td>98 - 102</td>
                    <td>78 - 82</td>
                    <td>104 - 108</td>
                    <td>146</td>
                    <td>41</td>
                  </tr>
                  <tr>
                    <td><span className="size-badge">XL</span></td>
                    <td>Extra Large</td>
                    <td>102 - 106</td>
                    <td>82 - 86</td>
                    <td>108 - 112</td>
                    <td>148</td>
                    <td>42</td>
                  </tr>
                  <tr>
                    <td><span className="size-badge">XXL</span></td>
                    <td>Double Extra Large</td>
                    <td>106 - 110</td>
                    <td>86 - 90</td>
                    <td>112 - 116</td>
                    <td>150</td>
                    <td>43</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="sizeguide-tips">
            <h2>Fitting Tips</h2>
            <div className="tips-grid">
              <div className="tip-card">
                <span className="tip-number">01</span>
                <h3>Between Sizes?</h3>
                <p>If your measurements fall between two sizes, we recommend sizing up for a more comfortable, flowing fit that aligns with our signature silhouette.</p>
              </div>
              <div className="tip-card">
                <span className="tip-number">02</span>
                <h3>Length Preference</h3>
                <p>Our standard length reaches the ankle. For a shorter or longer fit, contact our styling team for custom alterations.</p>
              </div>
              <div className="tip-card">
                <span className="tip-number">03</span>
                <h3>Fabric Drape</h3>
                <p>Our premium Italian crepe and silk fabrics have natural drape. The abaya will settle beautifully with wear, conforming to your silhouette.</p>
              </div>
              <div className="tip-card">
                <span className="tip-number">04</span>
                <h3>Personal Styling</h3>
                <p>Not sure about your size? Book a complimentary virtual or in-store styling consultation with our expert team.</p>
              </div>
            </div>
          </div>

          <div className="sizeguide-cta">
            <h2>Still Need Help?</h2>
            <p>Our styling team is available to help you find the perfect fit.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Schedule a Consultation</button>
              <button className="btn btn-secondary">Contact Us</button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SizeGuide;
