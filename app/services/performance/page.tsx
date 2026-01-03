'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowUpRight, ArrowLeft, Zap, Gauge, TrendingUp, Search, LineChart, Globe, Timer, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    icon: Gauge,
    title: 'Core Web Vitals',
    description: 'LCP, FID, CLS optimization. Pass Google\'s performance thresholds with room to spare.',
  },
  {
    icon: Timer,
    title: 'Speed Optimization',
    description: 'Sub-second load times through code splitting, lazy loading, and CDN optimization.',
  },
  {
    icon: Search,
    title: 'Technical SEO',
    description: 'Schema markup, meta optimization, and crawlability. Rank higher, get found faster.',
  },
  {
    icon: Globe,
    title: 'CDN & Caching',
    description: 'Global content delivery with intelligent caching. Fast everywhere, always.',
  },
  {
    icon: LineChart,
    title: 'Analytics Setup',
    description: 'GA4, custom events, and conversion tracking. Measure what matters.',
  },
  {
    icon: Shield,
    title: 'Security Hardening',
    description: 'HTTPS, CSP, and vulnerability patching. Protect your users and your brand.',
  },
];

const metrics = [
  {
    label: 'LCP',
    before: '4.2s',
    after: '1.2s',
    improvement: '71%',
    description: 'Largest Contentful Paint',
  },
  {
    label: 'FID',
    before: '280ms',
    after: '45ms',
    improvement: '84%',
    description: 'First Input Delay',
  },
  {
    label: 'CLS',
    before: '0.32',
    after: '0.02',
    improvement: '94%',
    description: 'Cumulative Layout Shift',
  },
  {
    label: 'TTI',
    before: '8.5s',
    after: '2.1s',
    improvement: '75%',
    description: 'Time to Interactive',
  },
];

const stats = [
  { value: '100', label: 'Lighthouse Score' },
  { value: '<1s', label: 'Load Time' },
  { value: '50%', label: 'Bounce Reduction' },
  { value: '3x', label: 'Conversion Boost' },
];

export default function PerformancePage() {
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
          <div className="absolute top-1/4 right-1/3 w-[700px] h-[700px] bg-yellow-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-lime-500/10 rounded-full blur-[120px]" />
        </motion.div>

        {/* Animated speed lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: '200%', opacity: [0, 0.1, 0] }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
              style={{ top: `${15 + i * 10}%`, width: '40%' }}
            />
          ))}
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
                className="inline-flex items-center gap-2 hover:opacity-100 transition-all group"
                style={{ color: 'var(--text-muted)', opacity: 0.6 }}
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
              <span className="text-8xl sm:text-9xl font-accent font-black" style={{ color: 'var(--text-number)' }}>06</span>
              <div className="w-16 h-16 flex items-center justify-center" style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'var(--border-faint)', backgroundColor: 'var(--bg-elevated)' }}>
                <Zap className="w-7 h-7" style={{ color: 'var(--text-secondary)' }} />
              </div>
            </motion.div>

            {/* Title */}
            <div ref={titleRef} className="mb-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-accent font-black leading-[0.9]" style={{ color: 'var(--text-primary)' }}>
                <span className="title-word inline-block">PERFORMANCE</span>{' '}
                <span className="title-word inline-block" style={{ color: 'var(--text-disabled)' }}>& SEO</span>
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
              Lightning-fast experiences that rank. Optimize speed, 
              climb search results, and convert more visitors.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12"
            >
              {stats.map((stat, index) => (
                <div key={index} className="pl-4" style={{ borderLeft: '1px solid var(--border-faint)' }}>
                  <div className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>{stat.value}</div>
                  <div className="text-sm tracking-wide" style={{ color: 'var(--text-disabled)' }}>{stat.label}</div>
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
            <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-disabled)' }}>Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b" style={{ backgroundImage: 'linear-gradient(to bottom, var(--text-disabled), transparent)' }} />
          </motion.div>
        </motion.div>
      </section>

      {/* Gradient Divider */}
      <div className="w-full h-px bg-gradient-to-r" style={{ backgroundImage: 'linear-gradient(to right, transparent, var(--border-faint), transparent)' }} />

      {/* Capabilities Section */}
      <CapabilitiesSection />

      {/* Gradient Divider */}
      <div className="w-full h-px bg-gradient-to-r" style={{ backgroundImage: 'linear-gradient(to right, transparent, var(--border-faint), transparent)' }} />

      {/* Metrics Section */}
      <MetricsSection />

      {/* Gradient Divider */}
      <div className="w-full h-px bg-gradient-to-r" style={{ backgroundImage: 'linear-gradient(to right, transparent, var(--border-faint), transparent)' }} />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
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
          <span className="text-xs tracking-[0.3em] uppercase mb-4 block" style={{ color: 'var(--text-disabled)' }}>Optimization</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-accent font-bold" style={{ color: 'var(--text-primary)' }}>
            Performance
            <span style={{ color: 'var(--text-disabled)' }}> Capabilities</span>
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
                className="group relative p-8 hover:bg-opacity-80 transition-all duration-500"
                style={{ backgroundColor: 'var(--bg-elevated)', borderWidth: '1px', borderStyle: 'solid', borderColor: 'var(--border-faint)' }}
              >
                <div className="w-12 h-12 flex items-center justify-center mb-6 group-hover:border-yellow-500/30 group-hover:bg-yellow-500/5 transition-all duration-300" style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'var(--border-faint)' }}>
                  <Icon className="w-5 h-5 group-hover:text-yellow-400 transition-colors" style={{ color: 'var(--text-muted)' }} />
                </div>

                <h3 className="text-xl font-accent font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{cap.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{cap.description}</p>

                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MetricsSection() {
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
          <span className="text-xs tracking-[0.3em] uppercase mb-4 block" style={{ color: 'var(--text-disabled)' }}>Results</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-accent font-bold" style={{ color: 'var(--text-primary)' }}>
            Real
            <span style={{ color: 'var(--text-disabled)' }}> Improvements</span>
          </h2>
          <p className="mt-4 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Average metrics improvements across our optimization projects
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 bg-gradient-to-b text-center"
              style={{ backgroundImage: 'linear-gradient(to bottom, var(--bg-elevated), transparent)', borderWidth: '1px', borderStyle: 'solid', borderColor: 'var(--border-faint)' }}
            >
              {/* Improvement badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500/20 border border-yellow-500/30 px-3 py-1 rounded-full">
                <span className="text-xs font-bold text-yellow-400">↑ {metric.improvement}</span>
              </div>

              <h3 className="text-2xl font-accent font-black mt-4 mb-1" style={{ color: 'var(--text-primary)' }}>{metric.label}</h3>
              <p className="text-xs mb-6" style={{ color: 'var(--text-disabled)' }}>{metric.description}</p>

              <div className="flex items-center justify-center gap-6">
                <div>
                  <div className="text-lg line-through" style={{ color: 'var(--text-disabled)', opacity: 0.5 }}>{metric.before}</div>
                  <div className="text-[10px] uppercase" style={{ color: 'var(--text-disabled)', opacity: 0.3 }}>Before</div>
                </div>
                <div className="w-8 h-px bg-gradient-to-r from-white/20 to-yellow-500/50" />
                <div>
                  <div className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{metric.after}</div>
                  <div className="text-[10px] uppercase" style={{ color: 'var(--text-disabled)' }}>After</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm mb-6" style={{ color: 'var(--text-disabled)' }}>Tools We Use</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['Lighthouse', 'PageSpeed Insights', 'GTmetrix', 'WebPageTest', 'Semrush', 'Ahrefs'].map((tool) => (
              <span key={tool} className="hover:opacity-80 transition-colors text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                {tool}
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
        <div className="w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase mb-6 block" style={{ color: 'var(--text-disabled)' }}>Speed Up</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-accent font-black mb-8" style={{ color: 'var(--text-primary)' }}>
            Slow Sites Lose
            <br />
            <span style={{ color: 'var(--text-disabled)' }}>Let's Fix That</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-12" style={{ color: 'var(--text-muted)' }}>
            Every second of load time costs you customers. 
            Get a free performance audit and see what's holding you back.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="group relative bg-white text-black px-10 py-4 font-medium tracking-wide overflow-hidden transition-all duration-300 hover:bg-white/90">
                <span className="relative z-10 flex items-center gap-2">
                  GET FREE AUDIT
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>
            </Link>
            <Link href="/work">
              <button className="group relative bg-transparent px-10 py-4 font-medium tracking-wide transition-all duration-300 hover:opacity-80" style={{ color: 'var(--text-primary)', borderWidth: '1px', borderStyle: 'solid', borderColor: 'var(--border-medium)' }}>
                <span className="flex items-center gap-2">
                  VIEW CASE STUDIES
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
