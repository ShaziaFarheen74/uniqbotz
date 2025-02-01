'use client'

import React, {useEffect, useRef, useState} from 'react';

interface FadeSlideWrapperProps {
    children: React.ReactNode;
    className?: string;
}

const FadeSlideWrapper: React.FC<FadeSlideWrapperProps> = ({children, className = ''}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const currentElement = elementRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false); // Reset when out of view if you want the animation to restart
                    }
                });
            },
            {threshold: 0.1}
        );

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    return (
        <div
            ref={elementRef}
            className={`transition transform duration-1500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-36'
            } ${className}`}
        >
            {children}
        </div>
    );
};

export default FadeSlideWrapper;
