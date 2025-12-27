'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import { ArrowUpRight, ArrowLeft, Palette, Layers, MousePointer2, Sparkles, Grid3X3, Lightbulb } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    icon: Palette,
    title: 'UI Design',
    description: 'Beautiful interfaces that users love. Every color, spacing, and element is crafted for visual harmony.',
  },
  {
    icon: MousePointer2,
    title: 'UX Design',
    description: 'Intuitive experiences that convert. We map user journeys and optimize for engagement and action.',
  },
  {
    icon: Layers,
    title: 'Design Systems',
    description: 'Scalable component libraries with design tokens, ensuring consistency across your entire product.',
  },
  {
    icon: Grid3X3,
    title: 'Responsive Design',
    description: 'Perfect on every screen. From mobile to 4K displays, your design adapts flawlessly.',
  },
  {
    icon: Sparkles,
    title: 'Micro-interactions',
    description: 'Delightful animations that bring your interface to life and guide user attention.',
  },
  {
    icon: Lightbulb,
    title: 'Prototyping',
    description: 'Interactive prototypes that validate ideas before a single line of code is written.',
  },
];

const process = [
  {
    phase: 'Research',
    duration: 'Week 1',
    tasks: ['Stakeholder interviews', 'Competitive analysis', 'User research', 'Goal definition'],
  },
  {
    phase: 'Wireframes',
    duration: 'Week 2',
    tasks: ['Information architecture', 'Low-fidelity layouts', 'User flow mapping', 'Content structure'],
  },
  {
    phase: 'Visual Design',
    duration: 'Week 3-4',
    tasks: ['Mood boards', 'High-fidelity mockups', 'Component design', 'Responsive variants'],
  },
  {
    phase: 'Handoff',
    duration: 'Week 5',
    tasks: ['Design documentation', 'Asset export', 'Developer specs', 'Design QA'],
  },
];

const stats = [
  { value: '340%', label: 'Avg. Conversion Lift' },
  { value: '50+', label: 'Websites Designed' },
  { value: '2.5M', label: 'Users Reached' },
  { value: '98%', label: 'Client Satisfaction' },
];

export default function WebDesignPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useGSAP(() => {
    if (!titleRef.current) return;

    const words = titleRef.current.querySelectorAll('.title-word');
    gsap.fromTo(
      words,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power4.out',
        delay: 0.2,
      }
    );
  });

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen w-full overflow-hidden bg-black">
        {/* Background gradient */}
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[800px] h-[800px] bg-violet-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />
        </motion.div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <motion.div style={{ opacity }} className="relative z-10 h-screen flex flex-col justify-center">
          <div className="w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span className="text-sm tracking-wide">Back to Services</span>
              </Link>
            </motion.div>

            {/* Service number & icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-6 mb-8"
            >
              <span className="text-8xl sm:text-9xl font-accent font-black text-white/5">01</span>
              <div className="w-16 h-16 flex items-center justify-center border border-white/20 bg-white/5">
                <Palette className="w-7 h-7 text-white/80" />
              </div>
            </motion.div>

            {/* Title */}
            <div ref={titleRef} className="mb-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-accent font-black text-white leading-[0.9]">
                <span className="title-word inline-block">WEB</span>{' '}
                <span className="title-word inline-block text-white/40">DESIGN</span>
              </h1>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl sm:text-2xl text-white/60 max-w-2xl font-light mb-12"
            >
              Pixel-perfect experiences that captivate users and drive conversions. 
              Every design decision is intentional, every interaction is meaningful.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12"
            >
              {stats.map((stat, index) => (
                <div key={index} className="border-l border-white/10 pl-4">
                  <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/40 tracking-wide">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-white/40 tracking-widest uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Gradient Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Capabilities Section */}
      <CapabilitiesSection />

      {/* Gradient Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Process Section */}
      <ProcessSection />

      {/* Gradient Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Showcase Section */}
      <ShowcaseSection />

      {/* Gradient Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10">
        <div className="w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-center">
          <p className="text-white/40 text-sm">© 2025 Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function CapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 lg:py-40 bg-black overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24"
        >
          <span className="text-xs text-white/40 tracking-[0.3em] uppercase mb-4 block">What We Offer</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-accent font-bold text-white">
            Design
            <span className="text-white/40"> Capabilities</span>
          </h2>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 mb-6 group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-300">
                  <Icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-accent font-bold text-white mb-3">{cap.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{cap.description}</p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 lg:py-40 bg-black overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24"
        >
          <span className="text-xs text-white/40 tracking-[0.3em] uppercase mb-4 block">Our Approach</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-accent font-bold text-white">
            Design
            <span className="text-white/40"> Process</span>
          </h2>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-0 right-0 top-10 h-px bg-white/10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Phase number */}
                <div className="w-20 h-20 flex items-center justify-center bg-black border border-white/20 mb-6 relative z-10">
                  <span className="text-2xl font-accent font-bold text-white">0{index + 1}</span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-accent font-bold text-white">{phase.phase}</h3>
                    <span className="text-xs text-white/40 tracking-wide">{phase.duration}</span>
                  </div>

                  <ul className="space-y-2">
                    {phase.tasks.map((task) => (
                      <li key={task} className="text-sm text-white/50 flex items-start gap-2">
                        <span className="w-1 h-1 bg-white/40 rounded-full mt-2 flex-shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 lg:py-40 bg-black overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <span className="text-xs text-white/40 tracking-[0.3em] uppercase mb-4 block">Featured Work</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-accent font-bold text-white">
              Design
              <span className="text-white/40"> Showcase</span>
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
          >
            <span className="text-sm tracking-wide">View All Work</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/3] bg-white/[0.02] border border-white/10 overflow-hidden cursor-pointer hover:border-white/20 transition-all duration-500"
            >
              {/* Placeholder for project image */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/5" />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-accent font-bold text-white mb-2">Project {item}</h3>
                  <span className="text-sm text-white/60">Web Design</span>
                </div>
              </div>

              {/* Corner arrow */}
              <div className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white">
                <ArrowUpRight className="w-4 h-4 text-black" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="relative py-32 sm:py-40 lg:py-52 bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs text-white/40 tracking-[0.3em] uppercase mb-6 block">Start Your Project</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-accent font-black text-white mb-8">
            Ready for a Design
            <br />
            <span className="text-white/40">That Converts?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-12">
            Let's create a website that not only looks stunning but drives real business results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="group relative bg-white text-black px-10 py-4 font-medium tracking-wide overflow-hidden transition-all duration-300 hover:bg-white/90">
                <span className="relative z-10 flex items-center gap-2">
                  GET A QUOTE
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>
            </Link>
            <Link href="/work">
              <button className="group relative bg-transparent text-white px-10 py-4 border border-white/30 font-medium tracking-wide transition-all duration-300 hover:border-white hover:bg-white/5">
                <span className="flex items-center gap-2">
                  VIEW PORTFOLIO
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
