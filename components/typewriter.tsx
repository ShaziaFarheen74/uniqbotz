'use client'

import { useEffect, useState } from 'react';
import {cn} from "@/lib/utils";

export default function Typewriter({mainText, words, className, wordClassName}: {mainText?: string; words: string[], className?: string; wordClassName?: string}) {
  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [speed, setSpeed] = useState(90);

  useEffect(() => {
    const handleTyping = () => {
      const currentFullWord = words[wordIndex];
      const updatedWord = isDeleting
        ? currentFullWord.substring(0, currentWord.length - 1)
        : currentFullWord.substring(0, currentWord.length + 1);

      setCurrentWord(updatedWord);

      // Adjust typing speed when deleting
      const typingSpeed = isDeleting ? 50 : 90;
      setSpeed(typingSpeed);

      if (!isDeleting && updatedWord === currentFullWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedWord === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, speed, wordIndex, words]);

  return (
    <h1 className={cn("min-h", className)}>
      <span>{mainText}</span>
      <br className=""/>
      <span className={cn("inline-block min-h-20", wordClassName)}>{currentWord}</span>
    </h1>
  );
}
