'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useGSAP(() => {
    if (!textRef.current) return;

    const chars = textRef.current.querySelectorAll('.cta-char');
    gsap.fromTo(
      chars,
      { opacity: 0, y: 100, rotateX: -90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.03,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'top 40%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  const headingText = "Let's Create";
  const subText = 'Something Great';

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-32 sm:py-40 md:py-52 lg:py-64 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] lg:w-[1000px] lg:h-[1000px] rounded-full opacity-20"
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-white/5 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="text-center">
          {/* Main Heading with character animation */}
          <div ref={textRef} className="mb-8 sm:mb-12 perspective-1000">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-accent font-black text-white leading-[0.9] tracking-[-0.02em]">
              {headingText.split('').map((char, i) => (
                <span
                  key={i}
                  className="cta-char inline-block"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h2>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-accent font-black text-white/30 leading-[0.9] tracking-[-0.02em] mt-2 sm:mt-4">
              {subText.split('').map((char, i) => (
                <span
                  key={i}
                  className="cta-char inline-block"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h2>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-white/50 font-light max-w-xl mx-auto mb-12 sm:mb-16"
          >
            Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your vision to life.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            {/* Primary CTA */}
            <Link href="/contact">
              <button className="group relative bg-white text-black px-8 sm:px-12 py-4 sm:py-5 overflow-hidden transition-all duration-500 hover:bg-white/90">
                <span className="relative z-10 flex items-center gap-3">
                  <span className="text-sm sm:text-base font-medium tracking-[0.15em] uppercase">
                    Book a Call
                  </span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </span>
              </button>
            </Link>

            {/* Secondary CTA */}
            <a href="mailto:hello@agency.com">
              <button className="group relative bg-transparent text-white px-8 sm:px-12 py-4 sm:py-5 border border-white/30 overflow-hidden transition-all duration-500 hover:border-white">
                <span className="relative z-10 flex items-center gap-3">
                  <span className="text-sm sm:text-base font-medium tracking-[0.15em] uppercase">
                    hello@agency.com
                  </span>
                  <svg
                    className="w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </a>
          </motion.div>

          {/* Bottom decorative element */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 sm:mt-28 flex items-center justify-center gap-4"
          >
            <div className="w-16 sm:w-24 h-px bg-white/20" />
            <span className="text-[10px] sm:text-xs text-white/30 tracking-[0.3em] uppercase">
              No pitch, just conversation
            </span>
            <div className="w-16 sm:w-24 h-px bg-white/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
