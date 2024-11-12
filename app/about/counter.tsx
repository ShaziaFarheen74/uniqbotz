'use client'

import { useState, useEffect, useRef } from "react";
import { formatNumber } from "@/lib/utils";

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function Counter({ target, suffix = "", duration = 1000, className }: CounterProps) {
  const [count, setCount] = useState<number>(0);
  const elementRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const animateCount = () => {
      let start = 0;
      const increment = target / (duration / 16); // approx 60fps, 16ms per frame

      const animate = () => {
        start += increment;
        if (start < target) {
          setCount(Math.floor(start));
          requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };
      animate();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(); // Start counting when visible
          } else {
            setCount(0); // Reset count when out of view
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <h2 ref={elementRef} className={className}>
      {formatNumber(count)}{suffix}
    </h2>
  );
}
