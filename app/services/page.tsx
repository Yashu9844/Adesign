'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowUpRight, Code2, Palette, Smartphone, Brain, Sparkles, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 'web-design',
    number: '01',
    title: 'Web Design',
    tagline: 'Pixel-Perfect Experiences',
    description: 'We craft visually stunning, conversion-focused websites that captivate users and drive business results. Every pixel is intentional.',
    features: ['UI/UX Design', 'Landing Pages', 'Design Systems', 'Prototyping', 'Responsive Design', 'Micro-interactions'],
    icon: Palette,
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
    href: '/services/web-design',
    stats: { value: '340%', label: 'Avg. Conversion Lift' },
  },
  {
    id: 'web-development',
    number: '02',
    title: 'Web Development',
    tagline: 'Code That Scales',
    description: 'Production-ready applications built with modern frameworks. Fast, secure, and engineered for growth.',
    features: ['Next.js & React', 'Full-Stack Apps', 'API Development', 'Performance', 'SEO Optimization', 'Cloud Deploy'],
    icon: Code2,
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    href: '/services/web-development',
    stats: { value: '99.9%', label: 'Uptime Guarantee' },
  },
  {
    id: 'mobile-apps',
    number: '03',
    title: 'Mobile Apps',
    tagline: 'Native & Cross-Platform',
    description: 'Beautiful mobile experiences that users love. From iOS to Android, we build apps that feel native and perform flawlessly.',
    features: ['React Native', 'iOS Development', 'Android Apps', 'App Store Optimization', 'Push Notifications', 'Offline Support'],
    icon: Smartphone,
    gradient: 'from-emerald-500/20 via-green-500/10 to-transparent',
    href: '/services/mobile-apps',
    stats: { value: '4.9★', label: 'Avg. App Rating' },
  },
  {
    id: 'ai-solutions',
    number: '04',
    title: 'AI & Automation',
    tagline: 'Intelligence Built-In',
    description: 'Harness the power of AI to transform your business. From chatbots to predictive analytics, we make AI accessible.',
    features: ['AI Chatbots', 'GPT Integration', 'Machine Learning', 'Process Automation', 'Data Analytics', 'Smart Search'],
    icon: Brain,
    gradient: 'from-orange-500/20 via-amber-500/10 to-transparent',
    href: '/services/ai-solutions',
    stats: { value: '85%', label: 'Efficiency Gain' },
  },
  {
    id: 'brand-identity',
    number: '05',
    title: 'Brand Identity',
    tagline: 'Stand Out. Be Remembered.',
    description: 'Complete brand systems that tell your story. Logo, typography, colors, and guidelines that create lasting impressions.',
    features: ['Logo Design', 'Visual Identity', 'Brand Guidelines', 'Typography', 'Color Systems', 'Brand Strategy'],
    icon: Sparkles,
    gradient: 'from-rose-500/20 via-pink-500/10 to-transparent',
    href: '/services/brand-identity',
    stats: { value: '200+', label: 'Brands Created' },
  },
  {
    id: 'performance',
    number: '06',
    title: 'Performance',
    tagline: 'Speed Is Everything',
    description: 'Optimization that matters. We make your digital products lightning fast, improving user experience and SEO rankings.',
    features: ['Core Web Vitals', 'Load Optimization', 'CDN Setup', 'Code Splitting', 'Image Optimization', 'Caching Strategy'],
    icon: Zap,
    gradient: 'from-yellow-500/20 via-lime-500/10 to-transparent',
    href: '/services/performance',
    stats: { value: '<1s', label: 'Load Time Target' },
  },
];

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(servicesRef, { once: true, amount: 0.1 });

  useGSAP(() => {
    if (!titleRef.current) return;

    // Split text animation for hero title
    const chars = titleRef.current.querySelectorAll('.hero-char');
    gsap.fromTo(
      chars,
      { opacity: 0, y: 100, rotateX: -90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.02,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.3,
      }
    );

    // Parallax effect for floating elements
    gsap.to('.float-element', {
      y: -100,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });
  });

  const heroText = 'SERVICES';

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating decorative elements */}
        <motion.div
          className="float-element absolute top-20 right-20 w-24 h-24 border border-white/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="float-element absolute bottom-40 left-20 w-16 h-16 border border-white/5 rotate-45"
          animate={{ rotate: 405 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="w-12 h-px" style={{ backgroundColor: 'var(--text-subtle)' }} />
            <span className="text-xs sm:text-sm tracking-[0.3em] uppercase" style={{ color: 'var(--text-muted)' }}>What We Do</span>
            <div className="w-12 h-px" style={{ backgroundColor: 'var(--text-subtle)' }} />
          </motion.div>

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="text-[15vw] sm:text-[12vw] md:text-[10vw] font-accent font-black leading-[0.85] tracking-[-0.04em] perspective-1000"
            style={{ color: 'var(--text-primary)' }}
          >
            {heroText.split('').map((char, i) => (
              <span
                key={i}
                className="hero-char inline-block"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {char}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto font-light"
            style={{ color: 'var(--text-muted)' }}
          >
            Transforming ideas into exceptional digital experiences through
            <span style={{ color: 'var(--text-primary)' }}> design</span>,
            <span style={{ color: 'var(--text-primary)' }}> code</span>, and
            <span style={{ color: 'var(--text-primary)' }}> innovation</span>.
          </motion.p>
        </div>

        {/* Scroll indicator - positioned at bottom center of hero section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-subtle)' }}>Explore</span>
            <div className="w-px h-12" style={{ backgroundImage: 'linear-gradient(to bottom, var(--text-subtle), transparent)' }} />
          </motion.div>
        </motion.div>
      </section>

      {/* Gradient Divider */}
      <div className="w-full h-px" style={{ backgroundImage: 'var(--gradient-divider)' }} />

      {/* Services Grid Section */}
      <section ref={servicesRef} className="relative py-24 sm:py-32 lg:py-40 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
        {/* Section Header */}
        <div className="w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
          >
            <div>
              <span className="text-xs tracking-[0.3em] uppercase mb-4 block" style={{ color: 'var(--text-subtle)' }}>Our Expertise</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-accent font-bold" style={{ color: 'var(--text-primary)' }}>
                End-to-End
                <br />
                <span style={{ color: 'var(--text-subtle)' }}>Digital Solutions</span>
              </h2>
            </div>
            <p className="max-w-md text-base sm:text-lg" style={{ color: 'var(--text-muted)' }}>
              From concept to launch and beyond—we handle every aspect of your digital presence with meticulous attention to detail.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="w-full h-px" style={{ backgroundImage: 'var(--gradient-divider)' }} />

      {/* Process Section */}
      <ProcessSection />

      {/* Gradient Divider */}
      <div className="w-full h-px" style={{ backgroundImage: 'var(--gradient-divider)' }} />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Service Card Component
function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  const Icon = service.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="h-full"
    >
      <Link href={service.href} className="block group h-full">
        <div className="relative h-full flex flex-col p-6 sm:p-8 overflow-hidden transition-all duration-500 border" style={{
          backgroundColor: 'var(--bg-elevated)',
          borderColor: 'var(--border-faint)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--bg-card)';
          e.currentTarget.style.borderColor = 'var(--border-medium)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--bg-elevated)';
          e.currentTarget.style.borderColor = 'var(--border-faint)';
        }}
        >
          {/* Gradient overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

          {/* Number */}
          <div className="relative z-10 flex items-start justify-between mb-8">
            <span className="text-6xl sm:text-7xl font-accent font-black transition-colors duration-500" style={{ color: 'var(--text-subtle)' }}>
              {service.number}
            </span>
            <div className="w-12 h-12 flex items-center justify-center border transition-all duration-300" style={{ borderColor: 'var(--border-faint)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-light)';
              e.currentTarget.style.backgroundColor = 'var(--bg-elevated)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-faint)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            >
              <Icon className="w-5 h-5 transition-colors" style={{ color: 'var(--text-muted)' }} />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-4 flex-grow">
            <div>
              <h3 className="text-2xl sm:text-3xl font-accent font-bold mb-1 transition-colors" style={{ color: 'var(--text-primary)' }}>
                {service.title}
              </h3>
              <p className="text-sm tracking-wide" style={{ color: 'var(--text-subtle)' }}>{service.tagline}</p>
            </div>

            <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {service.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 pt-2">
              {service.features.slice(0, 3).map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1 text-[10px] sm:text-xs tracking-wide border" style={{
                    color: 'var(--text-disabled)',
                    backgroundColor: 'var(--bg-elevated)',
                    borderColor: 'var(--border-faint)'
                  }}
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Stats & CTA */}
          <div className="relative z-10 flex items-end justify-between mt-8 pt-6 border-t" style={{ borderColor: 'var(--border-faint)' }}>
            <div>
              <div className="text-2xl sm:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>{service.stats.value}</div>
              <div className="text-xs tracking-wide" style={{ color: 'var(--text-subtle)' }}>{service.stats.label}</div>
            </div>
            <div className="w-10 h-10 flex items-center justify-center border transition-all duration-300" style={{ borderColor: 'var(--border-medium)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--cta-primary)';
              e.currentTarget.style.borderColor = 'var(--cta-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = 'var(--border-medium)';
            }}
            >
              <ArrowUpRight className="w-4 h-4 transition-colors" style={{ color: 'var(--text-muted)' }} />
            </div>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-20 h-20 border-t border-r opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: 'var(--border-faint)' }} />
        </div>
      </Link>
    </motion.div>
  );
}

// Process Section Component
function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const steps = [
    { number: '01', title: 'Discovery', description: 'Deep dive into your vision, goals, and market position.' },
    { number: '02', title: 'Strategy', description: 'Craft a roadmap that aligns design with business objectives.' },
    { number: '03', title: 'Design', description: 'Create stunning visuals that captivate and convert.' },
    { number: '04', title: 'Develop', description: 'Build with clean, scalable, production-ready code.' },
    { number: '05', title: 'Launch', description: 'Deploy with confidence and ongoing support.' },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 lg:py-40 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24"
        >
          <span className="text-xs tracking-[0.3em] uppercase mb-4 block" style={{ color: 'var(--text-subtle)' }}>How We Work</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-accent font-bold" style={{ color: 'var(--text-primary)' }}>
            Our Process
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2" style={{ backgroundImage: 'var(--gradient-divider)' }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative text-center lg:text-left"
              >
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border relative z-10" style={{ borderColor: 'var(--border-medium)', backgroundColor: 'var(--bg-dark)' }}>
                  <span className="text-xl font-accent font-bold" style={{ color: 'var(--text-primary)' }}>{step.number}</span>
                </div>

                <h3 className="text-xl font-accent font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-disabled)' }}>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section Component
function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="relative py-32 sm:py-40 lg:py-52 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full blur-[150px]" style={{ backgroundColor: 'var(--bg-elevated)' }} />
      </div>

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase mb-6 block" style={{ color: 'var(--text-subtle)' }}>Ready to Start?</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-accent font-black mb-8" style={{ color: 'var(--text-primary)' }}>
            Let's Build
            <br />
            <span style={{ color: 'var(--text-subtle)' }}>Something Great</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-12" style={{ color: 'var(--text-muted)' }}>
            Have a project in mind? Let's discuss how we can help bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="group relative px-10 py-4 font-medium tracking-wide overflow-hidden transition-all duration-300" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--cta-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--cta-primary)'}
              >
                <span className="relative z-10 flex items-center gap-2">
                  BOOK A CALL
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>
            </Link>
            <Link href="mailto:hello@agency.com">
              <button className="group relative px-10 py-4 border font-medium tracking-wide transition-all duration-300" style={{ backgroundColor: 'transparent', color: 'var(--text-primary)', borderColor: 'var(--border-light)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--text-primary)';
                e.currentTarget.style.backgroundColor = 'var(--bg-elevated)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-light)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              >
                <span className="flex items-center gap-2">
                  EMAIL US
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
