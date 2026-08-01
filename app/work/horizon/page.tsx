'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import { ArrowRight, Zap, BarChart3, TrendingDown, Target, Rocket } from 'lucide-react';

export default function CodeQuestCaseStudy() {
  const heroRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroInView = useInView(heroRef, { once: true });
  const approachInView = useInView(approachRef, { once: true });
  const featuresInView = useInView(featuresRef, { once: true });

  const features = [
    {
      title: 'Seamless Lead Generation',
      description: 'An intuitive, beautifully designed enquiry modal for schools and partners to easily submit project requirements. This streamlined approach minimizes friction, ensuring high conversion rates and allowing the CCQ team to capture essential details instantly without disrupting the user\'s browsing experience.',
      image: '/portfolio-images-work/codequest/screenshot2.png',
    },
    {
      title: 'Interactive Photo Gallery',
      description: 'A visually engaging masonry gallery capturing real moments of learning, innovation, and community events. Built with dynamic loading and optimized image delivery, it creates an immersive visual journey that authenticates the brand\'s real-world impact and student engagement.',
      image: '/portfolio-images-work/codequest/screenshot3.png',
    },
    {
      title: 'Mission & Vision Showcase',
      description: 'A clean, structured layout detailing CCQ\'s durable impact, highlighting their focus on innovation, collaborative delivery, and outcome-oriented programs. The organized card layout breaks down complex educational philosophies into digestible, highly readable core values. We implemented this using a CSS Grid layout with subtle hover interactions that encourage users to explore each value proposition. This section acts as a critical trust-building anchor for the site, demonstrating their long-term commitment to education and establishing authority in their field.',
      image: '/portfolio-images-work/codequest/screenshot4.png',
    },
    {
      title: 'Hero & Core Value Proposition',
      description: 'A striking hero section communicating CCQ PVT LTD\'s mission to build future-ready learning experiences. Featuring custom typography and smooth entrance animations, it immediately establishes trust and clearly articulates the value of their hackathons and software internships.',
      image: '/portfolio-images-work/codequest/screenshot1.png',
    },
  ];

  const approach = [
    { title: 'Brand Identity', subtitle: 'Modern, tech-focused design', color: 'from-purple-500/20' },
    { title: 'UI/UX Design', subtitle: 'High-fidelity prototyping', color: 'from-blue-500/20' },
    { title: 'Frontend Dev', subtitle: 'React, Next.js, Framer Motion', color: 'from-cyan-500/20' },
    { title: 'Optimization', subtitle: 'Lighthouse score 100/100', color: 'from-green-500/20' },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <SmoothScroll />
      <Navigation />

      {/* Hero with Split Layout */}
      <section ref={heroRef} className="relative min-h-[100vh] flex items-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-32">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Gradient Background with Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative p-12 lg:p-16 rounded-none overflow-hidden border" style={{ borderColor: 'var(--border-faint)' }}
              style={{
                background: 'radial-gradient(circle at top right, rgba(59, 130, 246, 0.1), transparent)',
              }}
            >
              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border" style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-medium)' }}>
                  <Zap className="w-4 h-4" style={{ color: 'var(--text-primary)' }} />
                  <span className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>Web Portfolio</span>
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-accent font-black leading-[1.1] mb-6" style={{ color: 'var(--text-primary)' }}>
                  Code Quest
                </h1>
                <p className="text-xl leading-relaxed max-w-xl" style={{ color: 'var(--text-muted)' }}>
                  A dynamic company portfolio showcasing technical expertise, serving over 500k requests with high performance.
                </p>
              </div>
            </motion.div>

            {/* Right: Large Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full rounded-none overflow-hidden border" style={{ borderColor: 'var(--border-faint)' }}
            >
              <Image
                src="/portfolio-images-work/codequest/screenshot1.png"
                alt="Code Quest Portfolio"
                width={1920}
                height={1080}
                className="w-full h-auto drop-shadow-xl"
              />
            </motion.div>
          </div>

          {/* Stats Row Below */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-6 mt-16"
          >
            {[
              { label: '20K+', value: 'Unique Visitors' },
              { label: '500K+', value: 'Requests Served' },
              { label: '< 0.5s', value: 'Load Time' },
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-none border" style={{ borderColor: 'var(--border-faint)', backgroundColor: 'var(--bg-elevated)' }}>
                <div className="text-3xl font-accent font-black" style={{ color: 'var(--text-primary)' }}>{stat.label}</div>
                <div className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>{stat.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution with Images */}
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Problem Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-accent font-black mb-8" style={{ color: 'var(--text-primary)' }}>Problem</h2>
              <div className="space-y-6">
                <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
                  The client needed a modern, high-performance portfolio to showcase their tech capabilities. Their previous site was slow, outdated, and failed to capture leads effectively in a competitive market.
                </p>
                <ul className="space-y-4">
                  {['High bounce rates due to slow load times', 'Outdated design language', 'Poor mobile responsiveness', 'Lack of SEO optimization'].map((issue, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="text-red-400 font-bold text-xl flex-shrink-0">×</span>
                      <span style={{ color: 'var(--text-muted)' }}>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Solution Side with Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-accent font-black mb-8" style={{ color: 'var(--text-primary)' }}>Solution</h2>
              <div className="w-full rounded-none overflow-hidden border mb-6" style={{ borderColor: 'var(--border-faint)' }}>
                <Image
                  src="/portfolio-images-work/codequest/screenshot2.png"
                  alt="Code Quest Tech"
                  width={1920}
                  height={1080}
                  className="w-full h-auto drop-shadow-xl"
                />
              </div>
              <ul className="space-y-4">
                {['Next.js App Router for instant loads', 'Tailwind CSS for responsive design', 'Framer Motion for fluid animations', 'SEO optimized architecture'].map((sol, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="text-green-400 font-bold text-xl flex-shrink-0">✓</span>
                    <span style={{ color: 'var(--text-muted)' }}>{sol}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section ref={approachRef} className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={approachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-accent font-black mb-16 text-center" style={{ color: 'var(--text-primary)' }}
          >
            Design <span style={{ color: 'var(--text-subtle)' }}>Approach</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={approachInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`p-8 rounded-none border bg-gradient-to-br ${item.color} to-transparent transition-all`} style={{ borderColor: 'var(--border-faint)' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-light)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-faint)'}
              >
                <h3 className="text-2xl font-accent font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid with Images */}
      <section ref={featuresRef} className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-accent font-black mb-16" style={{ color: 'var(--text-primary)' }}
          >
            Key <span style={{ color: 'var(--text-subtle)' }}>Features</span>
          </motion.h2>

          <div className="space-y-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              >
                {/* Text */}
                <div className={index % 2 === 1 ? 'lg:order-last' : ''}>
                  <h3 className="text-3xl sm:text-4xl font-accent font-black mb-4" style={{ color: 'var(--text-primary)' }}>{feature.title}</h3>
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>{feature.description}</p>
                </div>

                {/* Image */}
                <div className="w-full rounded-none overflow-hidden border" style={{ borderColor: 'var(--border-faint)' }}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={1920}
                    height={1080}
                    className="w-full h-auto drop-shadow-xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Built It - Timeline */}
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-accent font-black mb-16 text-center" style={{ color: 'var(--text-primary)' }}
          >
            How We Built <span style={{ color: 'var(--text-subtle)' }}>Code Quest</span>
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                phase: 'Phase 1: Design & Planning',
                details: 'Defined brand guidelines, typography, and color palette. Created initial wireframes. 2 weeks.',
                items: ['Wireframing', 'UI/UX Design', 'Asset creation', 'Architecture roadmap'],
              },
              {
                phase: 'Phase 2: Core Platform Development',
                details: 'Developed custom React components, integrated Framer Motion animations, set up layout routing. 3 weeks.',
                items: ['Frontend development', 'Animation logic', 'Responsive styling', 'Component library'],
              },
              {
                phase: 'Phase 3: CMS & Content',
                details: 'Implemented dynamic routing, optimized images, and added interactive project galleries. 2 weeks.',
                items: ['Data structuring', 'Image optimization', 'Interactive elements', 'SEO metadata'],
              },
              {
                phase: 'Phase 4: Launch & Optimize',
                details: 'Lighthouse performance audits, cross-browser testing, and production deployment. 1 week.',
                items: ['Performance testing', 'Accessibility audit', 'Deployment', 'Go-to-market'],
              },
            ].map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-none border transition-all"
                style={{ 
                  borderColor: 'var(--border-faint)', 
                  backgroundColor: 'var(--bg-elevated)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-card)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'}
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-accent font-bold" style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-primary)' }}>
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-accent font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{phase.phase}</h3>
                    <p className="mb-4" style={{ color: 'var(--text-muted)' }}>{phase.details}</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.items.map((item, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-none" style={{ backgroundColor: 'var(--bg-elevated)', border: '1px solid var(--border-medium)', color: 'var(--text-muted)' }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 p-8 sm:p-12 rounded-none border text-center" style={{ borderColor: 'var(--border-faint)' }}
          >
            <h3 className="text-2xl sm:text-3xl font-accent font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Need a High-Performance Portfolio?
            </h3>
            <p className="mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Our web development expertise has powered fast, beautiful portfolios for top agencies. We can build the same for your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-3 rounded-full font-accent font-bold transition-all" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}>
                  Book Web Consultation
                </button>
              </Link>
              <button className="px-8 py-3 border rounded-full font-accent font-bold transition-all" style={{ borderColor: 'var(--border-light)', color: 'var(--text-primary)' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-medium)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-light)'}>
                View More Portfolios
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl font-accent font-black mb-8" style={{ color: 'var(--text-primary)' }}>
              Business <span style={{ color: 'var(--text-subtle)' }}>Impact</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { metric: '340%', description: 'Increase in Lead Generation', icon: <Zap className="w-10 h-10 mx-auto" style={{ color: 'var(--text-primary)' }} /> },
              { metric: '85%', description: 'Lower Bounce Rate', icon: <TrendingDown className="w-10 h-10 mx-auto" style={{ color: 'var(--text-primary)' }} /> },
              { metric: '100/100', description: 'Lighthouse Performance', icon: <Target className="w-10 h-10 mx-auto" style={{ color: 'var(--text-primary)' }} /> },
              { metric: '500k+', description: 'Requests Served Smoothly', icon: <Rocket className="w-10 h-10 mx-auto" style={{ color: 'var(--text-primary)' }} /> },
            ].map((impact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-none border transition-all text-center"
                style={{ 
                  borderColor: 'var(--border-faint)', 
                  backgroundColor: 'var(--bg-elevated)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-card)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'}
              >
                <div className="mb-4 flex justify-center">{impact.icon}</div>
                <div className="text-5xl sm:text-6xl font-accent font-black mb-2" style={{ color: 'var(--text-primary)' }}>{impact.metric}</div>
                <p style={{ color: 'var(--text-muted)' }}>{impact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <div className="w-full max-w-[1920px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-accent font-black mb-8" style={{ color: 'var(--text-primary)' }}>
              Elevate Your <span style={{ color: 'var(--text-subtle)' }}>Digital Presence</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 sm:px-12 py-4 rounded-full font-accent font-bold transition-all inline-flex items-center gap-2" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}>
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/work">
                <button className="px-8 sm:px-12 py-4 border rounded-full font-accent font-bold transition-all" style={{ borderColor: 'var(--border-light)', color: 'var(--text-primary)' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-medium)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-light)'}>
                  Back to Portfolio
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

