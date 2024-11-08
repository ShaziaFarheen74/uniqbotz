'use client'

import { useEffect, useState } from 'react';

export default function Typewriter({mainText, words, className, wordClassName}: {mainText?: string; words: string[], className?: string; wordClassName?: string}) {
  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [speed, setSpeed] = useState(200);

  useEffect(() => {
    const handleTyping = () => {
      const currentFullWord = words[wordIndex];
      const updatedWord = isDeleting
        ? currentFullWord.substring(0, currentWord.length - 1)
        : currentFullWord.substring(0, currentWord.length + 1);

      setCurrentWord(updatedWord);

      // Adjust typing speed when deleting
      const typingSpeed = isDeleting ? 100 : 200;
      setSpeed(typingSpeed);

      if (!isDeleting && updatedWord === currentFullWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && updatedWord === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, speed, wordIndex, words]);

  return (
    <div className={className}>
      <span>{mainText}</span>
      <span className={wordClassName}>{currentWord}</span>
    </div>
  );
}
