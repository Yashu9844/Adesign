'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import { ArrowRight, Zap, BarChart3 } from 'lucide-react';

export default function HorizonCaseStudy() {
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
      title: 'Real-time Analytics',
      description: 'Live dashboards that update instantly with actionable insights from millions of data points.',
      image: '/images/pimg8.webp',
      icon: '📊',
    },
    {
      title: 'Custom Visualizations',
      description: "Interactive charts and graphs tailored to each user's specific business intelligence needs.",
      image: '/images/pimg9.webp',
      icon: '📈',
    },
    {
      title: 'Predictive Intelligence',
      description: 'Machine learning models that forecast trends and identify opportunities before competitors.',
      image: '/images/pimg10.webp',
      icon: '🤖',
    },
    {
      title: 'Team Collaboration',
      description: 'Seamless sharing, commenting, and version control for analytics teams of any size.',
      image: '/images/pimg11.webp',
      icon: '👥',
    },
  ];

  const approach = [
    { title: 'User Research', subtitle: '500+ interviews and surveys', color: 'from-purple-500/20' },
    { title: 'Data Modeling', subtitle: 'Architected for petabyte scale', color: 'from-blue-500/20' },
    { title: 'Performance', subtitle: 'Sub-second query response times', color: 'from-cyan-500/20' },
    { title: 'Security', subtitle: 'Enterprise-grade encryption & compliance', color: 'from-green-500/20' },
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
                  <span className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>Data Intelligence</span>
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-accent font-black leading-[1.1] mb-6" style={{ color: 'var(--text-primary)' }}>
                  Horizon
                </h1>
                <p className="text-xl leading-relaxed max-w-xl" style={{ color: 'var(--text-muted)' }}>
                  Enterprise analytics platform that transforms raw data into strategic business intelligence.
                </p>
              </div>
            </motion.div>

            {/* Right: Large Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] lg:h-[600px] rounded-none overflow-hidden border" style={{ borderColor: 'var(--border-faint)' }}
            >
              <Image
                src="/images/pimg2.webp"
                alt="Horizon Dashboard"
                fill
                className="object-cover"
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
              { label: '50K+', value: 'Active Users' },
              { label: '2B+', value: 'Queries/Month' },
              { label: '99.9%', value: 'Uptime' },
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
                  Legacy analytics tools were painfully slow, required SQL expertise, and couldn't scale with the client's explosive growth. Data silos meant decisions were made on incomplete information.
                </p>
                <ul className="space-y-4">
                  {['12+ hour report generation times', 'Fragmented data across systems', 'Limited visualization options', 'Steep learning curve for non-technical users'].map((issue, i) => (
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
              <div className="relative h-[400px] rounded-none overflow-hidden border mb-6" style={{ borderColor: 'var(--border-faint)' }}>
                <Image
                  src="/images/pimg12.webp"
                  alt="Horizon Solution"
                  fill
                  className="object-cover"
                />
              </div>
              <ul className="space-y-4">
                {['Sub-second query response', 'Unified data warehouse', 'AI-powered insights', 'No-code dashboard builder'].map((sol, i) => (
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
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Text */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-3xl sm:text-4xl font-accent font-black mb-4" style={{ color: 'var(--text-primary)' }}>{feature.title}</h3>
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>{feature.description}</p>
                </div>

                {/* Image */}
                <div className={`relative h-[350px] sm:h-[450px] rounded-none overflow-hidden border ${index % 2 === 1 ? 'lg:col-start-1' : ''}`} style={{ borderColor: 'var(--border-faint)' }}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
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
            How We Built <span style={{ color: 'var(--text-subtle)' }}>Horizon</span>
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                phase: 'Phase 1: Architecture & Planning',
                details: 'Defined data warehouse schema, identified integration points, designed query optimization strategy. 3 weeks.',
                items: ['Data modeling', 'API design', 'Security planning', 'Scalability roadmap'],
              },
              {
                phase: 'Phase 2: Core Platform Development',
                details: 'Built real-time data pipeline, implemented querying engine, created initial dashboard templates. 5 weeks.',
                items: ['Backend development', 'Database optimization', 'API endpoints', 'Authentication system'],
              },
              {
                phase: 'Phase 3: AI & Advanced Features',
                details: 'Integrated predictive ML models, built visualization engine, implemented collaboration features. 4 weeks.',
                items: ['ML model integration', 'Custom visualizations', 'Team features', 'Advanced filtering'],
              },
              {
                phase: 'Phase 4: Scale & Launch',
                details: 'Load testing at 10x scale, security audits, customer success training, public launch. 2 weeks.',
                items: ['Performance testing', 'Security audit', 'Documentation', 'Go-to-market'],
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
              Need Enterprise Analytics Solutions?
            </h3>
            <p className="mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Our data architecture expertise has powered analytics for 50K+ users. We can architect the same for your business intelligence needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-3 rounded-full font-accent font-bold transition-all" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}>
                  Book Analytics Consultation
                </button>
              </Link>
              <button className="px-8 py-3 border rounded-full font-accent font-bold transition-all" style={{ borderColor: 'var(--border-light)', color: 'var(--text-primary)' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-medium)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-light)'}>
                Download Architecture Guide
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
              { metric: '340%', description: 'Faster query execution', icon: '⚡' },
              { metric: '85%', description: 'Reduction in support tickets', icon: '📉' },
              { metric: '$2.1M', description: 'Saved in infrastructure costs', icon: '💰' },
              { metric: '98%', description: 'User adoption rate', icon: '📈' },
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
                <div className="text-4xl mb-4">{impact.icon}</div>
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
              Transform Your <span style={{ color: 'var(--text-subtle)' }}>Data Into Action</span>
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

