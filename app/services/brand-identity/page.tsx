'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import { ArrowUpRight, ArrowLeft, Sparkles, Palette, Type, Layers, FileText, Package, Camera, Stamp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    icon: Stamp,
    title: 'Logo Design',
    description: 'Iconic marks that capture your essence. Memorable, versatile, and timeless.',
  },
  {
    icon: Palette,
    title: 'Color Systems',
    description: 'Strategic color palettes that evoke emotion. Psychology-driven selections.',
  },
  {
    icon: Type,
    title: 'Typography',
    description: 'Custom type selections and pairings. Voice through letterforms.',
  },
  {
    icon: Layers,
    title: 'Visual Language',
    description: 'Cohesive imagery, patterns, and graphic elements. Your unique visual DNA.',
  },
  {
    icon: FileText,
    title: 'Brand Guidelines',
    description: 'Comprehensive documentation. Ensure consistency across every touchpoint.',
  },
  {
    icon: Package,
    title: 'Brand Collateral',
    description: 'Business cards, letterheads, and more. Every detail considered.',
  },
];

const process = [
  {
    phase: '01',
    title: 'Discovery',
    description: 'Deep dive into your vision, values, and market position',
  },
  {
    phase: '02',
    title: 'Strategy',
    description: 'Define brand positioning, personality, and messaging',
  },
  {
    phase: '03',
    title: 'Design',
    description: 'Create visual identity concepts and iterate to perfection',
  },
  {
    phase: '04',
    title: 'Delivery',
    description: 'Comprehensive brand assets and implementation guidelines',
  },
];

const stats = [
  { value: '200+', label: 'Brands Created' },
  { value: '15', label: 'Years Experience' },
  { value: '98%', label: 'Client Retention' },
  { value: '12', label: 'Design Awards' },
];

export default function BrandIdentityPage() {
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
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
        {/* Background gradient */}
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-rose-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px]" />
        </motion.div>

        {/* Animated abstract shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/4 right-1/4 w-64 h-64 border rounded-full"
            style={{ borderColor: 'var(--border-faint)' }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/3 right-1/3 w-48 h-48 border"
            style={{ borderColor: 'var(--border-faint)' }}
            style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
          />
        </div>

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
                className="inline-flex items-center gap-2 transition-colors group"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
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
              <span className="text-8xl sm:text-9xl font-accent font-black" style={{ color: 'var(--text-number)' }}>05</span>
              <div className="w-16 h-16 flex items-center justify-center border" style={{ borderColor: 'var(--border-medium)', backgroundColor: 'var(--bg-elevated)' }}>
                <Sparkles className="w-7 h-7" style={{ color: 'var(--text-muted)' }} />
              </div>
            </motion.div>

            {/* Title */}
            <div ref={titleRef} className="mb-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-accent font-black leading-[0.9]">
                <span className="title-word inline-block" style={{ color: 'var(--text-primary)' }}>BRAND</span>{' '}
                <span className="title-word inline-block" style={{ color: 'var(--text-subtle)' }}>IDENTITY</span>
              </h1>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl sm:text-2xl max-w-2xl font-light mb-12"
              style={{ color: 'var(--text-muted)' }}
            >
              Strategic brand development that creates lasting connections.
              Your story, beautifully told across every touchpoint.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12"
            >
              {stats.map((stat, index) => (
                <div key={index} className="border-l pl-4" style={{ borderColor: 'var(--border-medium)' }}>
                  <div className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>{stat.value}</div>
                  <div className="text-sm tracking-wide" style={{ color: 'var(--text-subtle)' }}>{stat.label}</div>
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
            <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-subtle)' }}>Scroll</span>
            <div className="w-px h-12" style={{ backgroundImage: 'linear-gradient(to bottom, var(--text-subtle), transparent)' }} />
          </motion.div>
        </motion.div>
      </section>

      {/* Gradient Divider */}
      <div className="w-full h-px" style={{ backgroundImage: 'var(--gradient-divider)' }} />

      {/* Capabilities Section */}
      <CapabilitiesSection />

      {/* Gradient Divider */}
      <div className="w-full h-px" style={{ backgroundImage: 'var(--gradient-divider)' }} />

      {/* Process Section */}
      <ProcessSection />

      {/* Gradient Divider */}
      <div className="w-full h-px" style={{ backgroundImage: 'var(--gradient-divider)' }} />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <footer className="py-12 border-t" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-faint)' }}>
        <div className="w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-center">
          <p className="text-sm" style={{ color: 'var(--text-subtle)' }}>© 2025 Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function CapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 lg:py-40 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24"
        >
          <span className="text-xs tracking-[0.3em] uppercase mb-4 block" style={{ color: 'var(--text-subtle)' }}>What We Create</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-accent font-bold" style={{ color: 'var(--text-primary)' }}>
            Brand
            <span style={{ color: 'var(--text-subtle)' }}> Elements</span>
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
                className="group relative p-8 border transition-all duration-500"
                style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-faint)' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-card)'; e.currentTarget.style.borderColor = 'var(--border-medium)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'; e.currentTarget.style.borderColor = 'var(--border-faint)'; }}
              >
                <div className="w-12 h-12 flex items-center justify-center border mb-6 transition-all duration-300" style={{ borderColor: 'var(--border-faint)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#fb7185'; e.currentTarget.style.backgroundColor = 'rgba(251, 113, 133, 0.1)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-faint)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  <Icon className="w-5 h-5 transition-colors" style={{ color: 'var(--text-muted)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fb7185'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'} />
                </div>

                <h3 className="text-xl font-accent font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{cap.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{cap.description}</p>

                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: 'rgba(251, 113, 133, 0.2)' }} />
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
    <section ref={sectionRef} className="relative py-24 sm:py-32 lg:py-40 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24 text-center"
        >
          <span className="text-xs tracking-[0.3em] uppercase mb-4 block" style={{ color: 'var(--text-subtle)' }}>Approach</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-accent font-bold" style={{ color: 'var(--text-primary)' }}>
            Our
            <span style={{ color: 'var(--text-subtle)' }}> Process</span>
          </h2>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-px hidden lg:block" style={{ backgroundImage: 'var(--gradient-divider)' }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Phase number */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6 border z-10" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-medium)' }}>
                  <span className="text-2xl font-accent font-bold" style={{ color: 'var(--text-primary)' }}>{step.phase}</span>
                </div>

                <h3 className="text-xl font-accent font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 p-8 border"
          style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-faint)' }}
        >
          <h3 className="text-xl font-accent font-bold mb-6 text-center" style={{ color: 'var(--text-primary)' }}>What You'll Receive</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Logo Suite',
              'Color Palette',
              'Typography System',
              'Brand Guidelines',
              'Business Cards',
              'Social Templates',
              'Letterhead',
              'Email Signature',
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 text-sm border transition-all duration-300"
                style={{ color: 'var(--text-muted)', backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-faint)' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(251, 113, 133, 0.1)'; e.currentTarget.style.borderColor = 'rgba(251, 113, 133, 0.3)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'; e.currentTarget.style.borderColor = 'var(--border-faint)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="relative py-32 sm:py-40 lg:py-52 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase mb-6 block" style={{ color: 'var(--text-subtle)' }}>Start Here</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-accent font-black mb-8" style={{ color: 'var(--text-primary)' }}>
            Ready to Define
            <br />
            <span style={{ color: 'var(--text-subtle)' }}>Your Brand?</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-12" style={{ color: 'var(--text-muted)' }}>
            Let's create a brand identity that resonates with your audience 
            and sets you apart from the competition.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="group relative px-10 py-4 font-medium tracking-wide overflow-hidden transition-all duration-300" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--cta-hover)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--cta-primary)'}>
                <span className="relative z-10 flex items-center gap-2">
                  START BRANDING
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>
            </Link>
            <Link href="/work">
              <button className="group relative px-10 py-4 border font-medium tracking-wide transition-all duration-300" style={{ backgroundColor: 'transparent', color: 'var(--text-primary)', borderColor: 'var(--border-light)' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--text-primary)'; e.currentTarget.style.backgroundColor = 'var(--bg-card)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
                <span className="flex items-center gap-2">
                  VIEW BRAND WORK
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
