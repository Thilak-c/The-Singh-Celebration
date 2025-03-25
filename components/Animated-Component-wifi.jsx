'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function AnimatedImage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const imageElement = document.getElementById('animated-image');
      const rect = imageElement.getBoundingClientRect();

      if (rect.top >= 0 && rect.top <= window.innerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.img
      id="animated-image"
      src="/bg/img-10.jpg"
      alt="Animated Image"
      initial={{ opacity: 0, x: 0 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      className="w-full h-auto"
    />
  );
}
