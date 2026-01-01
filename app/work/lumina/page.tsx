'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import { ArrowLeft, ArrowRight, Check, Award } from 'lucide-react';

export default function LuminaCaseStudy() {
  const heroRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroInView = useInView(heroRef, { once: true });
  const resultsInView = useInView(resultsRef, { once: true });
  const processInView = useInView(processRef, { once: true });
  const galleryInView = useInView(galleryRef, { once: true });

  const results = [
    { metric: '+156%', label: 'Conversion Rate Increase', icon: '📈' },
    { metric: '45K+', label: 'Monthly Active Users', icon: '👥' },
    { metric: '$8.2M', label: 'Revenue Generated', icon: '💰' },
    { metric: '4.9/5', label: 'Average Rating', icon: '⭐' },
  ];

  const process = [
    {
      num: '01',
      title: 'Discovery & Audit',
      description: 'Comprehensive analysis of the existing platform, user behaviors, pain points, and competitive landscape. Identified the 68% checkout abandonment rate was due to friction in the payment flow.',
      duration: '2 weeks',
      details: ['UX Audit', 'User Interviews', 'Competitive Analysis', 'Data Mining'],
    },
    {
      num: '02',
      title: 'Design & Strategy',
      description: 'Created wireframes for one-click checkout, mapped personalization engine, and designed mobile-optimized flows. Conducted usability testing with 50+ target users.',
      duration: '3 weeks',
      details: ['Wireframing', 'Prototypes', 'User Testing', 'Design System'],
    },
    {
      num: '03',
      title: 'Development Sprint',
      description: 'Built scalable architecture on Next.js with PostgreSQL backend. Integrated Stripe for seamless payments. Implemented AI recommendation engine and real-time inventory sync.',
      duration: '6 weeks',
      details: ['Backend Dev', 'Frontend Dev', 'API Integration', 'QA Testing'],
    },
    {
      num: '04',
      title: 'Launch & Optimize',
      description: 'Soft launch with 10K users revealed opportunities for further optimization. Implemented A/B testing for CTAs, product placement, and checkout flows. Results exceeded projections.',
      duration: '2 weeks',
      details: ['A/B Testing', 'Analytics', 'Optimization', 'Monitoring'],
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <SmoothScroll />
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-32 pb-20">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em]" style={{ color: 'var(--text-subtle)' }}>Case Study</span>
                  <h1 className="text-6xl sm:text-7xl md:text-8xl font-accent font-black leading-[0.95] mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
                    Lumina
                  </h1>
                  <p className="text-2xl font-light" style={{ color: 'var(--text-muted)' }}>Premium E-Commerce Platform</p>
                </div>

                <div className="space-y-4 py-8 border-y" style={{ borderColor: 'var(--border-faint)' }}>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--text-subtle)' }}>Timeline</p>
                    <p className="text-lg font-medium" style={{ color: 'var(--text-primary)' }}>12 weeks</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--text-subtle)' }}>Team</p>
                    <p className="text-lg font-medium" style={{ color: 'var(--text-primary)' }}>4 Designers, 5 Developers, 2 Product Managers</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--text-subtle)' }}>Tech Stack</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['Next.js', 'React', 'Stripe', 'PostgreSQL', 'Tailwind CSS'].map(tech => (
                        <span key={tech} className="px-3 py-1 text-sm rounded-none border" style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-medium)', color: 'var(--text-primary)' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  A premium shopping experience designed to eliminate friction, personalize interactions, and drive conversions. Built for luxury brands looking to scale their digital presence without compromising on exclusivity.
                </p>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] lg:h-[600px] rounded-none overflow-hidden border" style={{ borderColor: 'var(--border-faint)' }}
            >
              <Image
                src="/images/pimg1.webp"
                alt="Lumina Platform"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl font-accent font-black mb-6" style={{ color: 'var(--text-primary)' }}>
                The Challenge
              </h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  The client was losing 68% of customers at checkout, and their existing platform couldn't handle seasonal traffic spikes. Mobile experience was clunky, personalization was non-existent, and they were hemorrhaging money to cart abandonment.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  We needed to rebuild from the ground up while maintaining their existing customer base and inventory system, all within a tight 12-week timeline.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl sm:text-5xl font-accent font-black mb-6" style={{ color: 'var(--text-primary)' }}>
                Our Solution
              </h2>
              <div className="space-y-4">
                {['One-click checkout with saved payment methods', 'AI-powered product recommendations', 'Progressive web app for mobile-first experience', 'Real-time inventory synchronization', 'Advanced analytics dashboard'].map((solution, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <Check className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'var(--text-muted)' }} />
                    <span className="text-lg" style={{ color: 'var(--text-muted)' }}>{solution}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Inline CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 p-8 sm:p-12 rounded-none border text-center" style={{ borderColor: 'var(--border-faint)', background: 'linear-gradient(to right, var(--bg-elevated), var(--bg-card))' }}
          >
            <h3 className="text-2xl sm:text-3xl font-accent font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Facing Similar E-Commerce Challenges?
            </h3>
            <p className="mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Our proven methodology has helped 50+ brands increase conversion rates by an average of 150%. Let's discuss how we can do the same for you.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 rounded-full font-accent font-bold transition-all" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}>
                Schedule Strategy Session
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section ref={resultsRef} className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={resultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-accent font-black mb-16 text-center" style={{ color: 'var(--text-primary)' }}
          >
            Results That <span style={{ color: 'var(--text-subtle)' }}>Speak Volumes</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={resultsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-none border transition-all group" style={{ borderColor: 'var(--border-faint)', backgroundColor: 'var(--bg-elevated)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-card)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'}
              >
                <div className="text-4xl mb-4">{result.icon}</div>
                <div className="text-5xl font-accent font-black mb-2" style={{ color: 'var(--text-primary)' }}>{result.metric}</div>
                <div className="font-light" style={{ color: 'var(--text-muted)' }}>{result.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-accent font-black mb-16 text-center" style={{ color: 'var(--text-primary)' }}
          >
            Project <span style={{ color: 'var(--text-subtle)' }}>Timeline</span>
          </motion.h2>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index !== process.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, var(--border-medium), transparent)' }} />
                )}

                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full border-2 flex items-center justify-center" style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-medium)' }}>
                      <span className="text-sm font-accent font-bold" style={{ color: 'var(--text-primary)' }}>{step.num}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-accent font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                    <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-muted)' }}>{step.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm italic" style={{ color: 'var(--text-subtle)' }}>{step.duration}</span>
                      <div className="flex gap-3">
                        {step.details && step.details.map((detail, i) => (
                          <span key={i} className="text-xs border px-3 py-1 rounded-none" style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-medium)', color: 'var(--text-muted)' }}>
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA after timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 p-8 rounded-none border text-center" style={{ borderColor: 'var(--border-faint)', backgroundColor: 'var(--bg-elevated)' }}
          >
            <p className="mb-6" style={{ color: 'var(--text-muted)' }}>Ready to transform your e-commerce platform?</p>
            <Link href="/contact">
              <button className="px-8 py-3 rounded-full font-accent font-bold transition-all inline-flex items-center gap-2" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}>
                Start Your Project
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-accent font-black mb-16" style={{ color: 'var(--text-primary)' }}
          >
            Visual <span style={{ color: 'var(--text-subtle)' }}>Showcase</span>
          </motion.h2>

          {/* Full Width Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 relative h-[400px] sm:h-[500px] lg:h-[700px] rounded-none overflow-hidden border" style={{ borderColor: 'var(--border-faint)' }}
          >
            <Image
              src="/images/pimg2.webp"
              alt="Lumina Full Width"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {['/images/pimg3.webp', '/images/pimg4.webp'].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="relative h-[300px] sm:h-[400px] rounded-none overflow-hidden border" style={{ borderColor: 'var(--border-faint)' }}
              >
                <Image
                  src={img}
                  alt={`Lumina Gallery ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Three Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {['/images/pimg5.webp', '/images/pimg6.webp', '/images/pimg7.webp'].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="relative h-[250px] sm:h-[300px] rounded-none overflow-hidden border" style={{ borderColor: 'var(--border-faint)' }}
              >
                <Image
                  src={img}
                  alt={`Lumina Gallery ${idx + 4}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="mb-8 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-3xl">⭐</span>
              ))}
            </div>
            <p className="text-2xl sm:text-3xl font-light leading-relaxed mb-8" style={{ color: 'var(--text-primary)' }}>
              "Working with this team was transformative. They didn't just build a platform—they completely reimagined how our customers experience luxury shopping online."
            </p>
            <div>
              <p className="text-lg font-accent font-bold" style={{ color: 'var(--text-primary)' }}>Sarah Chen</p>
              <p style={{ color: 'var(--text-muted)' }}>CEO, Lumina</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-accent font-black mb-8" style={{ color: 'var(--text-primary)' }}>
              Ready to Transform <span style={{ color: 'var(--text-subtle)' }}>Your Business?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 sm:px-12 py-4 rounded-full font-accent font-bold transition-all" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}>
                  Start Your Project
                </button>
              </Link>
              <Link href="/work">
                <button className="px-8 sm:px-12 py-4 border rounded-full font-accent font-bold transition-all" style={{ borderColor: 'var(--border-light)', color: 'var(--text-primary)' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-medium)'; e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
                  View More Projects
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

