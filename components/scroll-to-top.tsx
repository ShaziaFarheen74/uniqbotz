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
          className="fixed bottom-32 right-0 cursor-pointer text-foreground transition flex flex-col gap-y-2"
        >
            <span className="-rotate-90 inline-flex gap-x-7 items-center">
                <span className="rotate-90 text-3xl">↑</span>

                Scroll to top
            </span>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
