'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import { Palette, Lightbulb } from 'lucide-react';

export default function VertexCaseStudy() {
  const heroRef = useRef<HTMLDivElement>(null);
  const strategyRef = useRef<HTMLDivElement>(null);
  const deliveriesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const heroInView = useInView(heroRef, { once: true });
  const strategyInView = useInView(strategyRef, { once: true });
  const deliveriesInView = useInView(deliveriesRef, { once: true });

  const deliverables = [
    {
      category: 'Brand Identity',
      items: ['Logo System', 'Color Palette', 'Typography', 'Brand Guidelines'],
      image: '/images/pimg3.webp',
    },
    {
      category: 'Design System',
      items: ['Component Library', 'Iconography', 'Motion Design', 'Accessibility'],
      image: '/images/pimg13.webp',
    },
    {
      category: 'Applications',
      items: ['Web Platform', 'Mobile App', 'Marketing Site', 'Internal Tools'],
      image: '/images/pimg14.webp',
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <SmoothScroll />
      <Navigation />

      {/* Immersive Hero */}
      <section ref={heroRef} className="relative min-h-[100vh] flex items-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-32 overflow-hidden">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={heroInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 -z-10"
        >
          <Image
            src="/images/pimg15.webp"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        <div className="w-full max-w-[1920px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border backdrop-blur-sm" style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-medium)' }}>
              <Palette className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
              <span className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>Brand Transformation</span>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl font-accent font-black leading-[0.95] mb-6" style={{ color: 'var(--text-primary)' }}>
              Vertex
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed max-w-2xl mb-8" style={{ color: 'var(--text-muted)' }}>
              Complete brand overhaul for a fintech startup that raised $2.5M in seed funding, positioning them as the disruptive leader in financial technology.
            </p>

            <div className="flex flex-wrap gap-4">
              {['Fintech', 'Brand Strategy', 'Design System', 'Motion'].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-none border text-sm" style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-medium)', color: 'var(--text-primary)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Metrics Below */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20"
          >
            {[
              { label: 'Timeline', value: '16 Weeks' },
              { label: 'Deliverables', value: '150+' },
              { label: 'Funding Raised', value: '$2.5M' },
              { label: 'Design Variance', value: '45+' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.05 }}
              >
                <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--text-muted)' }}>{stat.label}</p>
                <p className="text-2xl sm:text-3xl font-accent font-black" style={{ color: 'var(--text-primary)' }}>{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand Strategy Deep Dive */}
      <section ref={strategyRef} className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={strategyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-accent font-black mb-16" style={{ color: 'var(--text-primary)' }}
          >
            Brand <span style={{ color: 'var(--text-subtle)' }}>Strategy</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Strategy Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                {[
                  {
                    title: 'Market Position',
                    desc: 'Position as the human-first alternative to cold, corporate fintech giants. Trust through transparency.',
                  },
                  {
                    title: 'Brand Voice',
                    desc: 'Confident yet approachable. Financial expertise without the jargon. Authority with empathy.',
                  },
                  {
                    title: 'Visual Language',
                    desc: 'Modern geometric forms suggest stability and growth. Vibrant accents convey innovation and optimism.',
                  },
                  {
                    title: 'Experience Design',
                    desc: 'Every touchpoint reinforces the promise: banking made simple, secure, and human.',
                  },
                ].map((strategy, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <h3 className="text-2xl font-accent font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{strategy.title}</h3>
                    <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>{strategy.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Strategy Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] lg:h-[600px] rounded-none overflow-hidden border" style={{ borderColor: 'var(--border-faint)' }}
            >
              <Image
                src="/images/pimg16.webp"
                alt="Brand Strategy"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Evolution Gallery */}
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-accent font-black mb-16" style={{ color: 'var(--text-primary)' }}
          >
            Visual <span style={{ color: 'var(--text-subtle)' }}>Evolution</span>
          </motion.h2>

          {/* Before and After Split Screen */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--text-muted)' }}>Before</p>
              <div className="relative h-[400px] rounded-none overflow-hidden border" style={{ borderColor: 'var(--border-faint)' }}>
                <Image
                  src="/images/pimg4.webp"
                  alt="Before"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--text-muted)' }}>After</p>
              <div className="relative h-[400px] rounded-none overflow-hidden border" style={{ borderColor: 'var(--border-faint)' }}>
                <Image
                  src="/images/pimg5.webp"
                  alt="After"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Full Width Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] sm:h-[500px] lg:h-[700px] rounded-none overflow-hidden border border-white/10 mb-16"
          >
            <Image
              src="/images/pimg6.webp"
              alt="Brand Showcase"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section ref={deliveriesRef} className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={deliveriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-accent font-black mb-16" style={{ color: 'var(--text-primary)' }}
          >
            Project <span style={{ color: 'var(--text-subtle)' }}>Timeline</span>
          </motion.h2>

          <div className="max-w-4xl mx-auto mb-16 space-y-6">
            {[
              { week: 'Week 1-2', title: 'Brand Strategy & Discovery', desc: 'Competitive analysis, market research, stakeholder interviews, brand positioning workshop' },
              { week: 'Week 3-4', title: 'Logo & Identity System', desc: 'Concept development, logo design iterations, initial brand guidelines, visual language definition' },
              { week: 'Week 5-8', title: 'Extended Design System', desc: 'Typography, color palette refinement, UI components, pattern library, motion design specs' },
              { week: 'Week 9-12', title: 'Implementation & Launch', desc: 'Website redesign, app integration, marketing collateral, launch campaign, training docs' },
              { week: 'Week 13-16', title: 'Post-Launch & Optimization', desc: 'Brand awareness campaign, stakeholder feedback, refinements, expanded guidelines' },
            ].map((timeline, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-none border transition-all" style={{ borderColor: 'var(--border-faint)', backgroundColor: 'var(--bg-elevated)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-card)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'}
              >
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <span className="inline-block px-4 py-2 rounded-none font-accent font-bold text-sm" style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-primary)' }}>{timeline.week}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-accent font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{timeline.title}</h4>
                    <p style={{ color: 'var(--text-muted)' }}>{timeline.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Mid-page */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="p-8 sm:p-12 rounded-none border text-center" style={{ borderColor: 'var(--border-faint)', background: 'linear-gradient(to right, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))' }}
          >
            <h3 className="text-2xl sm:text-3xl font-accent font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Ready to Elevate Your Brand?
            </h3>
            <p className="mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Our brand transformations have helped 200+ companies raise $2.5B+ in funding. Let's build your iconic brand identity.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 rounded-full font-accent font-bold transition-all" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}>
                Start Brand Transformation
              </button>
            </Link>
          </motion.div>

          <div className="mt-16">
            <h2 className="text-4xl sm:text-5xl font-accent font-black mb-8" style={{ color: 'var(--text-primary)' }}>What We <span style={{ color: 'var(--text-subtle)' }}>Delivered</span></h2>

          <div className="space-y-16">
            {deliverables.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Text Content */}
                <div className={idx % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-4xl sm:text-5xl font-accent font-black mb-8 text-white">{section.category}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {section.items.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className="p-4 rounded-none border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Lightbulb className="w-4 h-4 text-white/60" />
                          <span className="text-sm text-white">{item}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={`relative h-[350px] sm:h-[450px] rounded-none overflow-hidden border border-white/10 ${idx % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <Image
                    src={section.image}
                    alt={section.category}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-accent font-black mb-16 text-center" style={{ color: 'var(--text-primary)' }}
          >
            Impact & <span style={{ color: 'var(--text-subtle)' }}>Recognition</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                stat: '$2.5M',
                title: 'Seed Funding Raised',
                desc: 'Investors credited the brand strength as a key differentiator',
              },
              {
                stat: '340%',
                title: 'Website Conversion Lift',
                desc: 'Higher engagement and lower bounce rates immediately post-launch',
              },
              {
                stat: '5',
                title: 'Design Awards',
                desc: 'International recognition for innovation and execution',
              },
              {
                stat: '98%',
                title: 'Brand Recall',
                desc: 'Target audience recognition after 3 months in market',
              },
              {
                stat: '150+',
                title: 'Design Assets',
                desc: 'Complete system for scalability across products and markets',
              },
              {
                stat: '45K+',
                title: 'Early Adopters',
                desc: 'User acquisition driven by brand strength and storytelling',
              },
            ].map((impact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="p-8 rounded-none border transition-all" style={{ borderColor: 'var(--border-faint)', backgroundColor: 'var(--bg-elevated)' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-card)'; e.currentTarget.style.borderColor = 'var(--border-medium)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'; e.currentTarget.style.borderColor = 'var(--border-faint)'; }}
              >
                <div className="text-4xl font-accent font-black mb-2" style={{ color: 'var(--text-primary)' }}>{impact.stat}</div>
                <h4 className="text-xl font-accent font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{impact.title}</h4>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{impact.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <div className="w-full max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-3xl">⭐</span>
              ))}
            </div>
            <p className="text-2xl sm:text-3xl font-light leading-relaxed mb-8" style={{ color: 'var(--text-primary)' }}>
              "This wasn't just a rebrand. They completely reimagined how we communicate our value. The design system alone saved us millions in development costs down the line."
            </p>
            <div>
              <p className="text-lg font-accent font-bold" style={{ color: 'var(--text-primary)' }}>Michael Torres</p>
              <p style={{ color: 'var(--text-muted)' }}>Founder & CEO, Vertex</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-[1920px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-6xl font-accent font-black mb-8" style={{ color: 'var(--text-primary)' }}>
              Ready to Build Your <span style={{ color: 'var(--text-subtle)' }}>Brand Legacy?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 sm:px-12 py-4 rounded-full font-accent font-bold transition-all" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}>
                  Let's Talk
                </button>
              </Link>
              <Link href="/work">
                <button className="px-8 sm:px-12 py-4 border rounded-full font-accent font-bold transition-all" style={{ borderColor: 'var(--border-light)', color: 'var(--text-primary)' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-medium)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-light)'}>
                  See More Work
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
