'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  // Hide indicator once user starts scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 pointer-events-none md:hidden"
    >
      {/* Text label */}
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-light"
        style={{ color: 'var(--text-subtle)' }}
      >
        Scroll
      </motion.span>

      {/* Animated line container */}
      <div className="relative w-[1px] h-12 sm:h-16 overflow-hidden">
        {/* Background line */}
        <div className="absolute inset-0" style={{ backgroundColor: 'var(--text-very-subtle)' }} />
        
        {/* Animated moving line */}
        <motion.div
          className="absolute top-0 left-0 w-full"
          style={{ backgroundColor: 'var(--text-primary)' }}
          initial={{ height: '0%', top: '0%' }}
          animate={{
            height: ['0%', '40%', '40%', '0%'],
            top: ['0%', '0%', '60%', '100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.3, 0.7, 1],
          }}
        />
      </div>

      {/* Chevron arrow */}
      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          style={{ color: 'var(--text-very-subtle)' }}
        >
          <path
            d="M1 1L6 6L11 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
