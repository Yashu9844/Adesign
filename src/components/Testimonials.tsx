'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    quote:
      "Working with this team was transformative. They didn't just build us a website—they crafted a digital experience that truly represents who we are. Our conversions increased by 340% within the first quarter.",
    author: 'Jennifer Walsh',
    role: 'CEO',
    company: 'Lumina Tech',
    image: '/images/testimonial1.png',
    metric: '+340%',
    metricLabel: 'Conversions',
  },
  {
    id: 2,
    quote:
      'The attention to detail is unmatched. Every pixel, every interaction was thoughtfully designed. They understood our vision better than we did ourselves.',
    author: 'Michael Torres',
    role: 'Founder',
    company: 'Horizon Ventures',
    image: '/images/testimonial2.png',
    metric: '2.5M',
    metricLabel: 'Users Reached',
  },
  {
    id: 3,
    quote:
      "From concept to launch in 8 weeks. They moved fast without compromising quality. The team's expertise in both design and development is rare to find.",
    author: 'Rachel Kim',
    role: 'Head of Product',
    company: 'Vertex Labs',
    image: '/images/testimonial3.png',
    metric: '8 Weeks',
    metricLabel: 'To Launch',
  },
  {
    id: 4,
    quote:
      'They challenged our assumptions and pushed us to think bigger. The result was a brand identity that has become the cornerstone of our market positioning.',
    author: 'David Chen',
    role: 'CMO',
    company: 'Apex Industries',
    image: '/images/testimonial4.png',
    metric: '#1',
    metricLabel: 'Market Position',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useGSAP(() => {
    if (!headingRef.current) return;

    const words = headingRef.current.querySelectorAll('.testimonial-word');
    gsap.fromTo(
      words,
      { opacity: 0.3, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative w-full bg-black py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background Quote Mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02]">
        <Quote className="w-100 h-100 sm:w-150 sm:h-150" />
      </div>

      <div className="relative z-10 w-full max-w-480 mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div ref={headingRef} className="mb-16 sm:mb-20 md:mb-24 lg:mb-32 text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6 sm:mb-8"
          >
            <div className="w-12 sm:w-16 h-px bg-white/40" />
            <span className="text-[11px] sm:text-xs text-white/50 tracking-[0.3em] uppercase font-light">
              Testimonials
            </span>
            <div className="w-12 sm:w-16 h-px bg-white/40" />
          </motion.div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-accent text-white font-black leading-[0.95] tracking-[-0.02em]">
            <span className="testimonial-word inline-block mr-4 sm:mr-6">What</span>
            <span className="testimonial-word inline-block mr-4 sm:mr-6">Clients</span>
            <br className="hidden sm:block" />
            <span className="testimonial-word inline-block text-white/40">Say</span>
          </h2>
        </div>

        {/* Testimonial Display */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Main Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
                {/* Image & Metric */}
                <div className="md:col-span-1 lg:col-span-4 flex flex-col items-center lg:items-start">
                  {/* Author Image */}
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mb-6">
                    <div className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent rounded-full" />
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.author}
                      className="w-full h-full object-cover rounded-full grayscale"
                    />
                    {/* Decorative Ring */}
                    <div className="absolute -inset-2 border border-white/10 rounded-full" />
                    <div className="absolute -inset-4 border border-white/5 rounded-full" />
                  </div>

                  {/* Metric Badge */}
                  <div className="text-center lg:text-left">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-accent font-bold text-white mb-1">
                      {currentTestimonial.metric}
                    </div>
                    <div className="text-xs sm:text-sm text-white/40 tracking-wider uppercase">
                      {currentTestimonial.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Quote & Info */}
                <div className="md:col-span-1 lg:col-span-8">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-white/20 mb-6" />

                  {/* Quote Text */}
                  <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-light leading-relaxed mb-8">
                    "{currentTestimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-white/30" />
                    <div>
                      <div className="text-base sm:text-lg font-medium text-white">
                        {currentTestimonial.author}
                      </div>
                      <div className="text-sm text-white/50">
                        {currentTestimonial.role}, {currentTestimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center lg:justify-end gap-4 mt-12 sm:mt-16">
            {/* Dots */}
            <div className="flex items-center gap-2 mr-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-white w-6'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 flex items-center justify-center border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 flex items-center justify-center border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
