import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import products from '../data/products';
import '../styles/styles.css';
import '../styles/collection.css';

gsap.registerPlugin(ScrollTrigger);

const Collection = () => {
  const [sortBy, setSortBy] = useState('Featured');
  const [filterBy, setFilterBy] = useState('All');

  useEffect(() => {
    gsap.from('.collection-hero-content .section-tag', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.2,
    });
    gsap.from('.collection-hero-content h1', {
      opacity: 0,
      y: 40,
      duration: 0.8,
      delay: 0.4,
    });
    gsap.from('.collection-hero-content p', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.6,
    });

    gsap.from('.product-card', {
      scrollTrigger: {
        trigger: '.collection-grid',
        start: 'top 80%',
      },
      opacity: 0,
      y: 60,
      duration: 0.6,
      stagger: 0.1,
    });

    gsap.from('.collection-story-content .section-tag', {
      scrollTrigger: {
        trigger: '.collection-story',
        start: 'top 70%',
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
    });
    gsap.from('.collection-story-content h2', {
      scrollTrigger: {
        trigger: '.collection-story',
        start: 'top 70%',
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      delay: 0.2,
    });
    gsap.from('.collection-story-content p', {
      scrollTrigger: {
        trigger: '.collection-story',
        start: 'top 70%',
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.4,
    });
    gsap.from('.collection-story-content .btn', {
      scrollTrigger: {
        trigger: '.collection-story',
        start: 'top 70%',
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.6,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const filteredProducts = products.filter((product) => {
    if (filterBy === 'All') return true;
    if (filterBy === 'Daily') return product.collection === 'Signature Collection';
    if (filterBy === 'Evening') return product.collection === 'Evening Collection';
    if (filterBy === 'Layering') return product.collection === 'Limited Edition';
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'Price Low-High') return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
    if (sortBy === 'Price High-Low') return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
    return 0;
  });

  return (
    <div className="collection-page">
      <LoadingScreen />
      <Header />

      <section className="collection-hero">
        <div className="collection-hero-bg">
          <img src={`${process.env.PUBLIC_URL}/img/2.avif`} alt="Signature Collection" className="collection-hero-image"/>
        </div>
        <div className="container">
          <div className="collection-hero-content">
            <p className="section-tag">Spring/Summer 2026</p>
            <h1 className="collection-hero-title">Signature Collection</h1>
            <p className="collection-hero-text">Timeless pieces crafted for the modern woman who embodies elegance, confidence, and contemporary sophistication.</p>
          </div>
        </div>
      </section>

      <section className="collection-filter">
        <div className="container">
          <div className="filter-bar">
            <div className="filter-left">
              <span className="filter-count">{sortedProducts.length} Pieces</span>
            </div>
            <div className="filter-right">
              <div className="filter-group">
                <label>Sort By</label>
                <select className="filter-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="Featured">Featured</option>
                  <option value="Price Low-High">Price: Low to High</option>
                  <option value="Price High-Low">Price: High to Low</option>
                </select>
              </div>
              <div className="filter-group">
                <label>Filter</label>
                <select className="filter-select" value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
                  <option value="All">All</option>
                  <option value="Daily">Daily</option>
                  <option value="Evening">Evening</option>
                  <option value="Layering">Layering</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="collection-products">
        <div className="container">
          <div className="collection-grid">
            {sortedProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <div className="product-image">
                    <img src={`${process.env.PUBLIC_URL}/${product.image}`} alt={product.name} className="product-image-placeholder"/>
                    {product.badge && <div className="product-badge">{product.badge}</div>}
                    <div className="product-quick-view">
                      <button>Quick View</button>
                    </div>
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">{product.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="collection-story">
        <div className="container">
          <div className="collection-story-grid">
            <div className="collection-story-image">
              <img src={`${process.env.PUBLIC_URL}/img/7.avif`} alt="AYRAH Craftsmanship" className="story-image-placeholder"/>
            </div>
            <div className="collection-story-content">
              <p className="section-tag">The Vision</p>
              <h2 className="collection-story-title">Designed for the Modern Saudi Woman</h2>
              <p>Our Signature Collection represents the culmination of heritage craftsmanship and contemporary design. Each piece is thoughtfully created to honor tradition while embracing the future of luxury modest wear.</p>
              <p>From the selection of premium Italian fabrics to the meticulous hand-finishing by our master artisans, every detail reflects our commitment to uncompromising quality.</p>
              <Link to="/#about" className="btn btn-primary">Discover Our Craft</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collection;
