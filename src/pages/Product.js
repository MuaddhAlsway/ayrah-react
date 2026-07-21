import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import products from '../data/products';
import '../styles/styles.css';
import '../styles/product.css';

gsap.registerPlugin(ScrollTrigger);

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id)) || products[0];

  const [activeThumb, setActiveThumb] = useState(0);
  const [activeSize, setActiveSize] = useState('S');
  const [activeColor, setActiveColor] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  const mainImageRef = useRef(null);
  const revealTextRef = useRef([]);
  const revealUpRef = useRef([]);

  useEffect(() => {
    setActiveThumb(0);
    setActiveSize('S');
    setActiveColor(0);
    setOpenAccordion(null);
    window.scrollTo(0, 0);
  }, [id]);

  const thumbnails = product.thumbnails.map((t) => `${process.env.PUBLIC_URL}/${t}`);
  const mainImage = thumbnails[activeThumb];

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  const colors = [
    { name: 'Ivory Sand', color: '#d9c7a3' },
    { name: 'Obsidian Black', color: '#0d0d0d' },
    { name: 'Champagne Gold', color: '#c8a96b' },
    { name: 'Pearl White', color: '#f7f4ef' },
  ];

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleThumbnailClick = (index) => {
    if (index === activeThumb) return;
    const img = mainImageRef.current;
    gsap.to(img, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.inOut',
      onComplete: () => {
        setActiveThumb(index);
        gsap.to(img, {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.inOut',
        });
      },
    });
  };

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.product-main-image',
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
      );

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
              delay: 0.3,
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
              delay: 0.5,
            }
          );
        }
      });

      document.querySelectorAll('.products-grid').forEach((grid) => {
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
  }, [id]);

  return (
    <div className="product-page">
      <LoadingScreen />
      <Header />

      <section className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/collection">{product.collection}</Link>
          <span>/</span>
          <span className="current">{product.name}</span>
        </div>
      </section>

      <section className="product-detail">
        <div className="container">
          <div className="product-detail-grid">
            <div className="product-gallery">
              <div className="product-main-image">
                <img
                  ref={mainImageRef}
                  src={mainImage}
                  alt={product.name}
                  className="product-image-placeholder"
                />
              </div>
              <div className="product-thumbnails">
                {thumbnails.map((thumb, index) => (
                  <div
                    key={index}
                    className={`thumbnail${activeThumb === index ? ' active' : ''}`}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <img src={thumb} alt={`Thumbnail ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            <div className="product-info-detail">
              <p className="product-collection-tag reveal-text" ref={addRevealText}>{product.collection}</p>
              <h1 className="product-title reveal-text" ref={addRevealText}>{product.name}</h1>
              <p className="product-price-large reveal-text" ref={addRevealText}>{product.price}</p>

              <div className="product-description reveal-text" ref={addRevealText}>
                <p>{product.description}</p>
              </div>

              <div className="product-meta reveal-up" ref={addRevealUp}>
                <div className="meta-item">
                  <span className="meta-label">Fabric</span>
                  <span className="meta-value">{product.fabric}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Origin</span>
                  <span className="meta-value">{product.origin}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Care</span>
                  <span className="meta-value">{product.care}</span>
                </div>
              </div>

              <div className="product-options reveal-up" ref={addRevealUp}>
                <p className="option-label">Size</p>
                <div className="size-options">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={`size-btn${activeSize === size ? ' active' : ''}`}
                      onClick={() => setActiveSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <a href="#size-guide" className="size-guide-link">Size Guide</a>
              </div>

              <div className="product-options reveal-up" ref={addRevealUp}>
                <p className="option-label">Color: <span className="selected-color">{colors[activeColor].name}</span></p>
                <div className="color-options">
                  {colors.map((c, index) => (
                    <button
                      key={index}
                      className={`color-btn${activeColor === index ? ' active' : ''}`}
                      style={{ background: c.color }}
                      onClick={() => setActiveColor(index)}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>

              <div className="product-actions reveal-up" ref={addRevealUp}>
                <button className="btn btn-primary btn-add-to-bag">Add to Bag</button>
                <button className="btn-wishlist" aria-label="Add to Wishlist">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
              </div>

              <div className="product-accordion">
                <div className={`accordion-item${openAccordion === 0 ? ' active' : ''}`}>
                  <button className="accordion-header" onClick={() => toggleAccordion(0)}>
                    <span>Details & Composition</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </button>
                  <div className="accordion-content">
                    <ul>
                      {product.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`accordion-item${openAccordion === 1 ? ' active' : ''}`}>
                  <button className="accordion-header" onClick={() => toggleAccordion(1)}>
                    <span>Care Instructions</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </button>
                  <div className="accordion-content">
                    <p>{product.careInstructions}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related-products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">You May Also Like</h2>
          </div>
          <div className="products-grid">
            {relatedProducts.map((p) => (
              <div className="product-card" key={p.id}>
                <Link to={`/product/${p.id}`}>
                  <div className="product-image">
                    <img src={`${process.env.PUBLIC_URL}/${p.image}`} alt={p.name} className="product-image-placeholder"/>
                    <div className="product-quick-view">
                      <button>Quick View</button>
                    </div>
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{p.name}</h3>
                    <p className="product-price">{p.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;
