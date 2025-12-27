'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import { ArrowUpRight, ArrowLeft, Code2, Database, Cloud, Shield, Rocket, GitBranch, Server, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'React, Next.js, and modern JavaScript frameworks. We build fast, interactive user interfaces.',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Node.js, Python, and serverless architectures. Scalable APIs that power your applications.',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'PostgreSQL, MongoDB, and Redis. Optimized data structures for performance at scale.',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'AWS, Vercel, and Docker deployments. Infrastructure that grows with your business.',
  },
  {
    icon: Shield,
    title: 'Security & Auth',
    description: 'OAuth, JWT, and encryption. Enterprise-grade security for your applications.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Core Web Vitals optimization. Sub-second load times and smooth interactions.',
  },
];

const techStack = [
  { category: 'Frontend', techs: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', techs: ['Node.js', 'Python', 'Prisma', 'GraphQL', 'REST APIs'] },
  { category: 'Database', techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Firebase'] },
  { category: 'DevOps', techs: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Cloudflare'] },
];

const stats = [
  { value: '99.9%', label: 'Uptime Guarantee' },
  { value: '<1s', label: 'Load Time Target' },
  { value: '100+', label: 'Apps Deployed' },
  { value: '500K+', label: 'Daily Users Served' },
];

export default function WebDevelopmentPage() {
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
          <div className="absolute top-0 right-1/3 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
        </motion.div>

        {/* Animated code pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
          <motion.div
            animate={{ y: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="text-[10px] font-mono text-white whitespace-pre leading-tight"
          >
            {Array(50).fill(`const app = () => {\n  return <Component />;\n};\n\nexport default app;\n\n`).join('')}
          </motion.div>
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
              <span className="text-8xl sm:text-9xl font-accent font-black text-white/5">02</span>
              <div className="w-16 h-16 flex items-center justify-center border border-white/20 bg-white/5">
                <Code2 className="w-7 h-7 text-white/80" />
              </div>
            </motion.div>

            {/* Title */}
            <div ref={titleRef} className="mb-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-accent font-black text-white leading-[0.9]">
                <span className="title-word inline-block">WEB</span>{' '}
                <span className="title-word inline-block text-white/40">DEVELOPMENT</span>
              </h1>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl sm:text-2xl text-white/60 max-w-2xl font-light mb-12"
            >
              Production-ready applications built with modern frameworks. 
              Fast, secure, and engineered for growth at any scale.
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

      {/* Tech Stack Section */}
      <TechStackSection />

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
          <span className="text-xs text-white/40 tracking-[0.3em] uppercase mb-4 block">What We Build</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-accent font-bold text-white">
            Development
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
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 mb-6 group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-300">
                  <Icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-accent font-bold text-white mb-3">{cap.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{cap.description}</p>

                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
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
          className="mb-16 sm:mb-24 text-center"
        >
          <span className="text-xs text-white/40 tracking-[0.3em] uppercase mb-4 block">Technologies</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-accent font-bold text-white">
            Our
            <span className="text-white/40"> Tech Stack</span>
          </h2>
        </motion.div>

        {/* Tech Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-lg font-accent font-bold text-white mb-6 pb-4 border-b border-white/10">
                {category.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm text-white/60 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
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
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs text-white/40 tracking-[0.3em] uppercase mb-6 block">Start Building</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-accent font-black text-white mb-8">
            Ready to Build
            <br />
            <span className="text-white/40">Something Powerful?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-12">
            Let's create a web application that scales with your business and delights your users.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="group relative bg-white text-black px-10 py-4 font-medium tracking-wide overflow-hidden transition-all duration-300 hover:bg-white/90">
                <span className="relative z-10 flex items-center gap-2">
                  START A PROJECT
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
