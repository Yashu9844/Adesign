'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import { ArrowUpRight, ArrowLeft, Smartphone, Monitor, Watch, Tablet, Download, Bell, Fingerprint, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    icon: Smartphone,
    title: 'iOS Development',
    description: 'Native Swift apps optimized for iPhone and iPad. App Store ready with exceptional UX.',
  },
  {
    icon: Monitor,
    title: 'Android Development',
    description: 'Kotlin-powered apps for the entire Android ecosystem. Material Design excellence.',
  },
  {
    icon: Tablet,
    title: 'Cross-Platform',
    description: 'React Native & Flutter for unified codebases. Maximum reach with minimal resources.',
  },
  {
    icon: Watch,
    title: 'Wearable Apps',
    description: 'Apple Watch and WearOS applications. Seamless companion experiences.',
  },
  {
    icon: Bell,
    title: 'Push Notifications',
    description: 'Smart notification systems that drive engagement. Contextual and personalized.',
  },
  {
    icon: Fingerprint,
    title: 'Biometric Security',
    description: 'Face ID, Touch ID, and fingerprint authentication. Bank-level security integration.',
  },
];

const features = [
  { title: 'Offline Mode', description: 'Works without internet connection with smart data syncing' },
  { title: 'Real-time Sync', description: 'Instant data synchronization across all devices' },
  { title: 'Analytics', description: 'Built-in usage analytics and crash reporting' },
  { title: 'Accessibility', description: 'WCAG compliant with VoiceOver and TalkBack support' },
];

const stats = [
  { value: '50+', label: 'Apps Published' },
  { value: '4.8★', label: 'Average Rating' },
  { value: '2M+', label: 'Downloads' },
  { value: '12', label: 'App Awards' },
];

export default function MobileAppsPage() {
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
          <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]" />
        </motion.div>

        {/* Floating phone mockups */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 0.03, y: 0 }}
              transition={{ duration: 1, delay: i * 0.2 }}
              style={{
                position: 'absolute',
                top: `${20 + i * 25}%`,
                right: `${5 + i * 10}%`,
              }}
              className="w-32 h-64 border-4 rounded-3xl"
              style={{ borderColor: 'var(--border-light)' }}
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
              <span className="text-8xl sm:text-9xl font-accent font-black" style={{ color: 'var(--text-number)' }}>03</span>
              <div className="w-16 h-16 flex items-center justify-center border" style={{ borderColor: 'var(--border-medium)', backgroundColor: 'var(--bg-elevated)' }}>
                <Smartphone className="w-7 h-7" style={{ color: 'var(--text-muted)' }} />
              </div>
            </motion.div>

            {/* Title */}
            <div ref={titleRef} className="mb-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-accent font-black leading-[0.9]">
                <span className="title-word inline-block" style={{ color: 'var(--text-primary)' }}>MOBILE</span>{' '}
                <span className="title-word inline-block" style={{ color: 'var(--text-subtle)' }}>APPS</span>
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
              Native and cross-platform applications that users love.
              Pixel-perfect design meets flawless performance.
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

      {/* Features Section */}
      <FeaturesSection />

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
          <span className="text-xs tracking-[0.3em] uppercase mb-4 block" style={{ color: 'var(--text-subtle)' }}>Platforms</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-accent font-bold" style={{ color: 'var(--text-primary)' }}>
            Mobile
            <span style={{ color: 'var(--text-subtle)' }}> Capabilities</span>
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
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-medium)'; e.currentTarget.style.backgroundColor = 'var(--bg-glass)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-faint)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  <Icon className="w-5 h-5 transition-colors" style={{ color: 'var(--text-muted)' }} />
                </div>

                <h3 className="text-xl font-accent font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{cap.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{cap.description}</p>

                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: 'var(--border-faint)' }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 lg:py-40 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase mb-4 block" style={{ color: 'var(--text-subtle)' }}>Built-In</span>
            <h2 className="text-4xl sm:text-5xl font-accent font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
              Essential
              <span style={{ color: 'var(--text-subtle)' }}> Features</span>
            </h2>
            <p className="text-lg mb-12" style={{ color: 'var(--text-muted)' }}>
              Every app we build comes with enterprise-grade features out of the box.
              No compromises on quality or performance.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="border-l-2 pl-6 transition-colors"
                  style={{ borderColor: 'var(--border-medium)' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#10b981'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-medium)'}
                >
                  <h3 className="font-medium mb-1" style={{ color: 'var(--text-primary)' }}>{feature.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Phone mockup */}
              <div className="relative w-64 h-[500px] rounded-[3rem] border p-2" style={{ backgroundImage: 'linear-gradient(to bottom, var(--bg-card), var(--bg-elevated))', borderColor: 'var(--border-medium)' }}>
                <div className="w-full h-full rounded-[2.5rem] relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
                  {/* Screen content */}
                  <div className="absolute inset-4 border rounded-2xl p-4" style={{ borderColor: 'var(--border-faint)' }}>
                    <div className="w-12 h-12 rounded-xl mb-4" style={{ backgroundColor: 'var(--bg-card)' }} />
                    <div className="h-3 w-3/4 rounded mb-2" style={{ backgroundColor: 'var(--bg-card)' }} />
                    <div className="h-3 w-1/2 rounded mb-6" style={{ backgroundColor: 'var(--bg-card)' }} />
                    <div className="space-y-3">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-12 rounded-lg" style={{ backgroundColor: 'var(--bg-elevated)' }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -left-8 top-1/4 border px-4 py-2 rounded-full"
                style={{ backgroundColor: 'rgba(16, 185, 129, 0.2)', borderColor: 'rgba(16, 185, 129, 0.3)' }}
              >
                <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>iOS Ready</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -right-8 top-1/2 border px-4 py-2 rounded-full"
                style={{ backgroundColor: 'rgba(20, 184, 166, 0.2)', borderColor: 'rgba(20, 184, 166, 0.3)' }}
              >
                <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>Android Ready</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
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
        <div className="w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase mb-6 block" style={{ color: 'var(--text-subtle)' }}>Get Started</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-accent font-black mb-8" style={{ color: 'var(--text-primary)' }}>
            Your App,
            <br />
            <span style={{ color: 'var(--text-subtle)' }}>In Their Pockets</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-12" style={{ color: 'var(--text-muted)' }}>
            Let's create a mobile experience that users will open every day.
            From concept to App Store, we've got you covered.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="group relative px-10 py-4 font-medium tracking-wide overflow-hidden transition-all duration-300" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--cta-hover)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--cta-primary)'}>
                <span className="relative z-10 flex items-center gap-2">
                  BUILD YOUR APP
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>
            </Link>
            <Link href="/work">
              <button className="group relative px-10 py-4 border font-medium tracking-wide transition-all duration-300" style={{ backgroundColor: 'transparent', color: 'var(--text-primary)', borderColor: 'var(--border-light)' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--text-primary)'; e.currentTarget.style.backgroundColor = 'var(--bg-card)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
                <span className="flex items-center gap-2">
                  VIEW APP SHOWCASE
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
