'use client'
import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button when scrolling
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-32 right-8 cursor-pointer flex justify-center items-center w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:bg-primary/80 transition-all duration-300"
        >
          <span className="text-2xl font-bold">↑</span>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;

