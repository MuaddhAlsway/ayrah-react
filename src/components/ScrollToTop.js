import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
