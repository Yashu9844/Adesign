'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 1,
    number: '01',
    title: 'Discovery',
    description:
      'We dive deep into your vision, goals, and challenges. Through strategic workshops and research, we uncover insights that shape the foundation of your project.',
    details: ['Stakeholder Interviews', 'Competitive Analysis', 'User Research', 'Goal Definition'],
    duration: '1-2 Weeks',
  },
  {
    id: 2,
    number: '02',
    title: 'Strategy',
    description:
      'Armed with insights, we craft a comprehensive roadmap. Every decision is intentional, every feature purposeful—designed to achieve your objectives.',
    details: ['Information Architecture', 'User Flows', 'Technical Planning', 'Timeline & Milestones'],
    duration: '1-2 Weeks',
  },
  {
    id: 3,
    number: '03',
    title: 'Design',
    description:
      'This is where ideas become visual. We create stunning, user-centered designs that not only look exceptional but drive meaningful engagement.',
    details: ['Wireframing', 'Visual Design', 'Prototyping', 'Design System'],
    duration: '2-4 Weeks',
  },
  {
    id: 4,
    number: '04',
    title: 'Development',
    description:
      'Our engineers bring designs to life with clean, performant code. We build scalable solutions using cutting-edge technologies.',
    details: ['Frontend Development', 'Backend Integration', 'Testing & QA', 'Performance Optimization'],
    duration: '4-8 Weeks',
  },
  {
    id: 5,
    number: '05',
    title: 'Launch',
    description:
      'The moment of truth. We ensure a flawless deployment and provide ongoing support to guarantee your success post-launch.',
    details: ['Deployment', 'Monitoring', 'Training', 'Ongoing Support'],
    duration: 'Ongoing',
  },
];

export default function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  useGSAP(() => {
    if (!headingRef.current) return;

    const words = headingRef.current.querySelectorAll('.process-word');
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

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative w-full bg-black py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Animated Background Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: i * 0.2 }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div ref={headingRef} className="mb-16 sm:mb-20 md:mb-28 lg:mb-32">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6 sm:mb-8"
          >
            <div className="w-12 sm:w-16 h-px bg-white/40" />
            <span className="text-[11px] sm:text-xs text-white/50 tracking-[0.3em] uppercase font-light">
              Our Process
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-accent text-white font-black leading-[0.95] tracking-[-0.02em]">
              <span className="process-word inline-block mr-4 sm:mr-6">How</span>
              <span className="process-word inline-block mr-4 sm:mr-6">We</span>
              <br className="hidden sm:block" />
              <span className="process-word inline-block text-white/40">Work</span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-white/50 font-light leading-relaxed max-w-md lg:text-right"
            >
              A proven methodology refined over years of delivering exceptional digital experiences.
            </motion.p>
          </div>
        </div>

        {/* Process Steps - Timeline Layout */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-8 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 ${
                  index % 2 === 0 ? '' : 'lg:direction-rtl'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-8 lg:left-1/2 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white border-4 border-black z-10" />

                {/* Content */}
                <div
                  className={`pl-12 sm:pl-20 lg:pl-0 ${
                    index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'
                  }`}
                >
                  {/* Number & Duration */}
                  <div
                    className={`flex items-center gap-4 mb-4 ${
                      index % 2 === 0 ? 'lg:justify-end' : ''
                    }`}
                  >
                    <span className="text-5xl sm:text-6xl lg:text-7xl font-accent font-black text-white/[0.07]">
                      {step.number}
                    </span>
                    <span className="px-3 py-1 text-[11px] sm:text-xs text-white/50 border border-white/10 tracking-wider">
                      {step.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-accent font-bold text-white mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-white/50 font-light leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? 'lg:justify-end' : ''
                    }`}
                  >
                    {step.details.map((detail) => (
                      <span
                        key={detail}
                        className="px-3 py-1.5 text-[11px] sm:text-xs text-white/60 bg-white/5 border border-white/10 tracking-wide"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
