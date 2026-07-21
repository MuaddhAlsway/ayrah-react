import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import '../styles/styles.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const revealTextRef = useRef([]);
  const revealUpRef = useRef([]);
  const revealLeftRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.hero-background', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        y: 150,
        scale: 1.1,
      });

      revealTextRef.current.forEach((el) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });

      revealUpRef.current.forEach((el) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });

      revealLeftRef.current.forEach((el) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, x: -60 },
            {
              opacity: 1,
              x: 0,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });

      document.querySelectorAll('.collections-grid, .products-grid, .craftsmanship-grid, .testimonials-grid, .instagram-grid').forEach((grid) => {
        const items = grid.children;
        gsap.fromTo(
          items,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: grid,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const addRevealText = (el) => {
    if (el && !revealTextRef.current.includes(el)) {
      revealTextRef.current.push(el);
    }
  };

  const addRevealUp = (el) => {
    if (el && !revealUpRef.current.includes(el)) {
      revealUpRef.current.push(el);
    }
  };

  const addRevealLeft = (el) => {
    if (el && !revealLeftRef.current.includes(el)) {
      revealLeftRef.current.push(el);
    }
  };

  const testimonials = [
    {
      name: 'Fatima Al-Rashid',
      location: 'Riyadh, Saudi Arabia',
      text: '"The quality is extraordinary. Every detail speaks of luxury and refinement. AYRAH has redefined my wardrobe."',
    },
    {
      name: 'Noura Al-Saud',
      location: 'Jeddah, Saudi Arabia',
      text: '"Finally, a brand that understands modern modest luxury. The craftsmanship is unparalleled."',
    },
    {
      name: 'Layla Mahmoud',
      location: 'Dubai, UAE',
      text: '"AYRAH represents everything I look for in luxury fashion. Elegant, sophisticated, and unmistakably premium."',
    },
  ];

  return (
    <div className="home">
      <LoadingScreen />
      <Header />

      {/* Hero Section */}
      <section className="hero" id="hero" ref={heroRef}>
        <div className="hero-background">
          <img src={`${process.env.PUBLIC_URL}/img/2.avif`} alt="Luxury Abaya Fashion" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <p className="hero-tagline reveal-text" ref={addRevealText}>New Season 2026</p>
          <h1 className="hero-title reveal-text" ref={addRevealText}>Timeless Elegance<br/>for the Modern Woman</h1>
          <p className="hero-subtitle reveal-text" ref={addRevealText}>Premium abayas crafted with exceptional fabrics, refined tailoring, and contemporary Saudi sophistication.</p>
          <div className="hero-cta reveal-text" ref={addRevealText}>
            <Link to="/collection" className="btn btn-primary">Shop Collection</Link>
            <a href="#about" className="btn btn-secondary">Discover Our Story</a>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll to Explore</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section" id="trust">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item reveal-up" ref={addRevealUp}>
              <div className="trust-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>Premium Fabrics</h3>
              <p>Curated from the finest Italian and Japanese mills</p>
            </div>
            <div className="trust-item reveal-up" ref={addRevealUp}>
              <div className="trust-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>Handmade Finishing</h3>
              <p>Every piece handcrafted by master artisans</p>
            </div>
            <div className="trust-item reveal-up" ref={addRevealUp}>
              <div className="trust-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="1" y="3" width="15" height="13"/>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              </div>
              <h3>GCC Shipping</h3>
              <p>Complimentary delivery across the Gulf region</p>
            </div>
            <div className="trust-item reveal-up" ref={addRevealUp}>
              <div className="trust-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h3>Limited Collections</h3>
              <p>Exclusive designs with limited production runs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="collections-section" id="collections">
        <div className="container">
          <div className="section-header">
            <p className="section-tag reveal-text" ref={addRevealText}>Curated For You</p>
            <h2 className="section-title reveal-text" ref={addRevealText}>Featured Collections</h2>
          </div>
          <div className="collections-grid">
            <Link to="/collection" className="collection-card collection-card-large reveal-up" ref={addRevealUp}>
              <div className="collection-image">
                <img src={`${process.env.PUBLIC_URL}/img/3.avif`} alt="Signature Collection" className="collection-image-placeholder"/>
                <div className="collection-overlay">
                  <span className="collection-cta">Explore Collection</span>
                </div>
              </div>
              <div className="collection-info">
                <h3>Signature Collection</h3>
                <p>Timeless pieces for the modern woman</p>
              </div>
            </Link>
            <Link to="/collection" className="collection-card reveal-up" ref={addRevealUp}>
              <div className="collection-image">
                <img src={`${process.env.PUBLIC_URL}/img/4.avif`} alt="Evening Collection" className="collection-image-placeholder"/>
                <div className="collection-overlay">
                  <span className="collection-cta">Explore Collection</span>
                </div>
              </div>
              <div className="collection-info">
                <h3>Evening Collection</h3>
                <p>Refined elegance for special occasions</p>
              </div>
            </Link>
            <Link to="/collection" className="collection-card reveal-up" ref={addRevealUp}>
              <div className="collection-image">
                <img src={`${process.env.PUBLIC_URL}/img/5.avif`} alt="Limited Edition" className="collection-image-placeholder"/>
                <div className="collection-overlay">
                  <span className="collection-cta">Explore Collection</span>
                </div>
              </div>
              <div className="collection-info">
                <h3>Limited Edition</h3>
                <p>Exclusive designs, limited availability</p>
              </div>
            </Link>
            <Link to="/collection" className="collection-card reveal-up" ref={addRevealUp}>
              <div className="collection-image">
                <img src={`${process.env.PUBLIC_URL}/img/6.avif`} alt="Ramadan Collection" className="collection-image-placeholder"/>
                <div className="collection-overlay">
                  <span className="collection-cta">Explore Collection</span>
                </div>
              </div>
              <div className="collection-info">
                <h3>Ramadan Collection</h3>
                <p>Celebrating heritage with modern grace</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="story-section" id="about">
        <div className="container">
          <div className="story-grid">
            <div className="story-image reveal-left" ref={addRevealLeft}>
              <img src={`${process.env.PUBLIC_URL}/img/7.avif`} alt="AYRAH Craftsmanship" className="story-image-placeholder"/>
            </div>
            <div className="story-content">
              <p className="section-tag reveal-text" ref={addRevealText}>Our Heritage</p>
              <h2 className="story-title reveal-text" ref={addRevealText}>Crafted Between Heritage and Modernity</h2>
              <p className="story-text reveal-text" ref={addRevealText}>AYRAH was born from a vision to redefine luxury modest wear for the contemporary Saudi woman. We blend centuries-old craftsmanship with modern design sensibility, creating abayas that honor tradition while embracing the future.</p>
              <p className="story-text reveal-text" ref={addRevealText}>Each piece is a testament to our commitment to exceptional quality, from the selection of premium fabrics sourced from the world's finest mills to the meticulous hand-finishing by our master artisans in Riyadh.</p>
              <a href="#" className="btn btn-primary reveal-text" ref={addRevealText}>Read Our Story</a>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bestsellers-section" id="new-arrivals">
        <div className="container">
          <div className="section-header">
            <p className="section-tag reveal-text" ref={addRevealText}>Most Loved</p>
            <h2 className="section-title reveal-text" ref={addRevealText}>Best Sellers</h2>
          </div>
          <div className="products-grid">
            <Link to="/product/1" className="product-card reveal-up" ref={addRevealUp}>
              <div className="product-image">
                <img src={`${process.env.PUBLIC_URL}/img/3.avif`} alt="The Riyadh Abaya" className="product-image-placeholder"/>
                <div className="product-quick-view">
                  <button>Quick View</button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">The Riyadh Abaya</h3>
                <p className="product-price">1,850 SAR</p>
              </div>
            </Link>
            <Link to="/product/2" className="product-card reveal-up" ref={addRevealUp}>
              <div className="product-image">
                <img src={`${process.env.PUBLIC_URL}/img/4.avif`} alt="The Midnight Abaya" className="product-image-placeholder"/>
                <div className="product-quick-view">
                  <button>Quick View</button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">The Midnight Abaya</h3>
                <p className="product-price">2,200 SAR</p>
              </div>
            </Link>
            <Link to="/product/3" className="product-card reveal-up" ref={addRevealUp}>
              <div className="product-image">
                <img src={`${process.env.PUBLIC_URL}/img/5.avif`} alt="The Gold Signature" className="product-image-placeholder"/>
                <div className="product-quick-view">
                  <button>Quick View</button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">The Gold Signature</h3>
                <p className="product-price">2,800 SAR</p>
              </div>
            </Link>
            <Link to="/product/4" className="product-card reveal-up" ref={addRevealUp}>
              <div className="product-image">
                <img src={`${process.env.PUBLIC_URL}/img/6.avif`} alt="The Ivory Classic" className="product-image-placeholder"/>
                <div className="product-quick-view">
                  <button>Quick View</button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">The Ivory Classic</h3>
                <p className="product-price">1,650 SAR</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="craftsmanship-section" id="craftsmanship">
        <div className="craftsmanship-background"></div>
        <div className="container">
          <div className="craftsmanship-content">
            <p className="section-tag section-tag-light reveal-text" ref={addRevealText}>Our Process</p>
            <h2 className="section-title section-title-light reveal-text" ref={addRevealText}>Luxury Lives in the Details</h2>
            <div className="craftsmanship-grid">
              <div className="craftsmanship-item reveal-up" ref={addRevealUp}>
                <div className="craftsmanship-number">01</div>
                <h3>Premium Fabrics</h3>
                <p>Hand-selected from Italy's finest mills, our fabrics embody understated luxury with exceptional drape and feel.</p>
              </div>
              <div className="craftsmanship-item reveal-up" ref={addRevealUp}>
                <div className="craftsmanship-number">02</div>
                <h3>Precision Tailoring</h3>
                <p>Every stitch is placed with intention, creating silhouettes that flatter and empower the modern woman.</p>
              </div>
              <div className="craftsmanship-item reveal-up" ref={addRevealUp}>
                <div className="craftsmanship-number">03</div>
                <h3>Hand-Finished Details</h3>
                <p>Our artisans spend over 40 hours on each piece, ensuring every detail meets our uncompromising standards.</p>
              </div>
              <div className="craftsmanship-item reveal-up" ref={addRevealUp}>
                <div className="craftsmanship-number">04</div>
                <h3>Quality Control</h3>
                <p>Each abaya undergoes rigorous inspection before earning the AYRAH seal of excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Campaign */}
      <section className="editorial-section" id="journal">
        <div className="editorial-background"></div>
        <div className="container">
          <div className="editorial-content">
            <p className="section-tag section-tag-light reveal-text" ref={addRevealText}>Spring/Summer 2026</p>
            <h2 className="editorial-title reveal-text" ref={addRevealText}>A New Expression of<br/>Modest Luxury</h2>
            <p className="editorial-text reveal-text" ref={addRevealText}>Our latest campaign celebrates the intersection of heritage and contemporary design, captured against the stunning architecture of Riyadh.</p>
            <a href="#" className="btn btn-light reveal-text" ref={addRevealText}>View Campaign</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <div className="section-header">
            <p className="section-tag reveal-text" ref={addRevealText}>Client Stories</p>
            <h2 className="section-title reveal-text" ref={addRevealText}>What Our Clients Say</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card reveal-up" key={index} ref={addRevealUp}>
                <div className="testimonial-stars">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <p className="testimonial-name">{testimonial.name}</p>
                  <p className="testimonial-location">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Members Club */}
      <section className="vip-section" id="vip">
        <div className="container">
          <div className="vip-content">
            <p className="section-tag reveal-text" ref={addRevealText}>Exclusive Access</p>
            <h2 className="section-title reveal-text" ref={addRevealText}>Join the House of AYRAH</h2>
            <p className="vip-text reveal-text" ref={addRevealText}>Be the first to discover new collections, receive private invitations, and enjoy exclusive offers reserved for our most valued clients.</p>
            <div className="vip-benefits reveal-up" ref={addRevealUp}>
              <div className="vip-benefit">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Early Collection Access</span>
              </div>
              <div className="vip-benefit">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Private Releases</span>
              </div>
              <div className="vip-benefit">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>VIP Invitations</span>
              </div>
              <div className="vip-benefit">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Exclusive Offers</span>
              </div>
            </div>
            <form className="vip-form reveal-up" ref={addRevealUp} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" className="vip-input" required />
              <button type="submit" className="btn btn-primary">Join Now</button>
            </form>
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="instagram-section" id="instagram">
        <div className="container">
          <div className="section-header">
            <p className="section-tag reveal-text" ref={addRevealText}>@ayrahabayas</p>
            <h2 className="section-title reveal-text" ref={addRevealText}>Follow Our Journey</h2>
          </div>
        </div>
        <div className="instagram-grid">
          {[3, 4, 5, 6, 7, 2].map((num) => (
            <div className="instagram-item" key={num}>
              <img src={`${process.env.PUBLIC_URL}/img/${num}.avif`} alt={`AYRAH Instagram`} className="instagram-placeholder"/>
              <div className="instagram-overlay">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
