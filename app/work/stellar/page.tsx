'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import { Zap, Brain, Database } from 'lucide-react';

export default function FreshworkCaseStudy() {
  const heroRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroInView = useInView(heroRef, { once: true });
  const techInView = useInView(techRef, { once: true });
  const resultsInView = useInView(resultsRef, { once: true });

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <SmoothScroll />
      <Navigation />

      {/* Hero - Tech Focused */}
      <section ref={heroRef} className="relative min-h-[100vh] flex items-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-32 overflow-hidden">
        {/* Animated background grid effect */}
        <motion.div
          animate={{ backgroundPosition: ['0 0', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(45deg, var(--text-primary) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="w-full max-w-[1920px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border" style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-medium)' }}>
              <Brain className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
              <span className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>AI Enterprise Solution</span>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl font-accent font-black leading-[0.95] mb-8" style={{ color: 'var(--text-primary)' }}>
              Freshwork
            </h1>

            <p className="text-xl sm:text-2xl leading-relaxed mb-8 max-w-2xl" style={{ color: 'var(--text-muted)' }}>
              An intelligent AI automation platform streamlining data input and business workflows with custom engines. Automates complex workflows and reduces manual data entry significantly.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              {['CRM Data Extraction', 'AI Engine', 'Sales Automation', 'Workflow Integration'].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-none border text-sm" style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-medium)', color: 'var(--text-primary)' }}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 rounded-full font-accent font-bold transition-all" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}>
                  Discuss Implementation
                </button>
              </Link>
              <Link href="/work">
                <button className="px-8 py-4 border rounded-full font-accent font-bold transition-all" style={{ borderColor: 'var(--border-light)', color: 'var(--text-primary)' }}>
                  View All Work
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
          >
            {[
              { metric: '10x', label: 'Faster Workflows' },
              { metric: '98%', label: 'Data Accuracy' },
              { metric: '500+', label: 'Agencies Using It' },
              { metric: '5M+', label: 'Leads Processed' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 rounded-none border transition-all" style={{ borderColor: 'var(--border-faint)', backgroundColor: 'var(--bg-elevated)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-card)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'}
              >
                <p className="text-3xl sm:text-4xl font-accent font-black mb-2" style={{ color: 'var(--text-primary)' }}>{item.metric}</p>
                <p className="text-sm uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl font-accent font-black mb-8" style={{ color: 'var(--text-primary)' }}>The Challenge</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                Sales teams were drowning in manual CRM data entry. Extracting lead data from various platforms and copy-pasting it into CRM workflows took hours each day and was highly error-prone, killing sales velocity.
              </p>
              <ul className="space-y-4">
                {['Hours lost to manual data entry daily', 'High error rates from human fatigue', 'Inconsistent CRM data formats', 'Impossible to scale outreach campaigns'].map((problem, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-red-400 font-bold mt-1">✕</span>
                    <span style={{ color: 'var(--text-muted)' }}>{problem}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl sm:text-5xl font-accent font-black mb-8" style={{ color: 'var(--text-primary)' }}>AI-Powered Solution</h2>
              <ul className="space-y-4 mb-8">
                {['Custom AI engine for intelligent data extraction', 'Automated syncing directly to CRM platforms', 'Instant validation and formatting correction', 'Seamless integration across mobile and PC'].map((solution, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Zap className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span style={{ color: 'var(--text-muted)' }}>{solution}</span>
                  </li>
                ))}
              </ul>
              <div className="p-6 rounded-none border" style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-faint)' }}>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  Result: Manual data entry eliminated completely. Sales teams save 15+ hours a week, and CRM accuracy is maintained at 98%.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section ref={techRef} className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={techInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-accent font-black mb-16" style={{ color: 'var(--text-primary)' }}
          >
            Technology <span style={{ color: 'var(--text-subtle)' }}>Stack</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'AI & ML',
                icon: <Brain className="w-8 h-8" />,
                tech: ['OpenAI GPT-4', 'LangChain', 'Vector Embeddings', 'Fine-tuning'],
              },
              {
                title: 'Backend Infrastructure',
                icon: <Database className="w-8 h-8" />,
                tech: ['Python FastAPI', 'PostgreSQL', 'Redis Cache', 'AWS Services'],
              },
              {
                title: 'Document Processing',
                icon: <Zap className="w-8 h-8" />,
                tech: ['OCR Engine', 'Blob Storage', 'Job Queues', 'Webhooks'],
              },
              {
                title: 'Frontend',
                tech: ['Next.js', 'React', 'TailwindCSS', 'Real-time Updates'],
              },
              {
                title: 'Security & Compliance',
                tech: ['Role-based Access', 'OAuth Authentication', 'Token Encryption', 'Rate Limiting'],
              },
              {
                title: 'Analytics',
                tech: ['Bigquery', 'Mixpanel', 'Custom dashboards', 'Performance tracking'],
              },
            ].map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={techInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-none border transition-all" style={{ borderColor: 'var(--border-faint)', backgroundColor: 'var(--bg-elevated)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-card)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'}
              >
                <div className="mb-4" style={{ color: 'var(--text-muted)' }}>{category.icon}</div>
                <h3 className="text-xl font-accent font-bold mb-4" style={{ color: 'var(--text-primary)' }}>{category.title}</h3>
                <ul className="space-y-2">
                  {category.tech.map((item, j) => (
                    <li key={j} className="text-sm flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--border-medium)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Development Timeline */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={techInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl font-accent font-bold mb-8" style={{ color: 'var(--text-primary)' }}
          >
            Project <span style={{ color: 'var(--text-subtle)' }}>Timeline</span>
          </motion.h3>

          <div className="space-y-6">
            {[
              { 
                phase: 'Phase 1: Architecture', 
                title: 'Enterprise Requirements & System Design', 
                details: 'Requirements gathering, AI model selection, system architecture, compliance planning, security framework',
                duration: '3-4 weeks'
              },
              { 
                phase: 'Phase 2: Core Platform', 
                title: 'API Development & ML Integration', 
                details: 'Backend API development, document processing pipeline, ML model integration, data pipeline setup',
                duration: '6-8 weeks'
              },
              { 
                phase: 'Phase 3: Advanced Features', 
                title: 'Security & Advanced Capabilities', 
                details: 'Audit trails, compliance hardening, advanced analytics, security testing, performance optimization',
                duration: '4-6 weeks'
              },
              { 
                phase: 'Phase 4: Deployment', 
                title: 'Enterprise Rollout & Support', 
                details: 'Deployment orchestration, staff training, documentation, ongoing support setup, optimization',
                duration: '2-3 weeks'
              },
            ].map((timeline, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={techInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                className="p-6 sm:p-8 rounded-none border transition-all"
                style={{ borderColor: 'var(--border-faint)', backgroundColor: 'var(--bg-elevated)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-card)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'}
              >
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <span className="inline-block px-4 py-2 rounded-none font-accent font-bold text-sm" style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-primary)' }}>{timeline.phase}</span>
                    <span className="block text-xs mt-2" style={{ color: 'var(--text-muted)' }}>{timeline.duration}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-accent font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{timeline.title}</h4>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{timeline.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={techInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 p-8 sm:p-12 rounded-none border text-center" style={{ borderColor: 'var(--border-faint)' }}
          >
            <h3 className="text-2xl sm:text-3xl font-accent font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Deploy Enterprise AI Solutions
            </h3>
            <p className="mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Enterprise-grade AI platforms that improve operational efficiency by 40%+ while maintaining security and compliance. Start your AI transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-3 rounded-full font-accent font-bold transition-all" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}>
                  Start AI Project
                </button>
              </Link>
              <button className="px-8 py-3 border rounded-full font-accent font-bold transition-all" style={{ borderColor: 'var(--border-light)', color: 'var(--text-primary)' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-medium)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-light)'}>
                Download AI Implementation Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Gallery */}
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-accent font-black mb-16" style={{ color: 'var(--text-primary)' }}
          >
            Solution in <span style={{ color: 'var(--text-subtle)' }}>Action</span>
          </motion.h2>

          <div className="space-y-8">
            {/* Full width */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] sm:h-[600px] rounded-none overflow-hidden border" style={{ borderColor: 'var(--border-faint)' }}
            >
              <Image
                src="/portfolio-images-work/freshwork/home.png"
                alt="Freshwork Solution"
                fill
                className="object-contain p-4 drop-shadow-2xl mix-blend-luminosity opacity-90 hover:opacity-100 hover:mix-blend-normal transition-all"
              />
            </motion.div>

            {/* Two columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {['/portfolio-images-work/freshwork/automation_form.png', '/portfolio-images-work/freshwork/compatible in mobile and pc.png'].map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="relative h-[350px] rounded-none overflow-hidden border" style={{ borderColor: 'var(--border-faint)' }}
                >
                  <Image
                    src={img}
                    alt={`Freshwork ${idx + 2}`}
                    fill
                    className="object-contain p-4 drop-shadow-2xl mix-blend-luminosity opacity-90 hover:opacity-100 hover:mix-blend-normal transition-all"
                  />
                </motion.div>
              ))}
            </div>

            {/* Three columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {['/portfolio-images-work/freshwork/data input , our ai workflow uisng engine , automation.png', '/portfolio-images-work/freshwork/how it works.jpg', '/portfolio-images-work/freshwork/home.png'].map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="relative h-[250px] rounded-none overflow-hidden border" style={{ borderColor: 'var(--border-faint)' }}
                >
                  <Image
                    src={img}
                    alt={`Freshwork ${idx + 5}`}
                    fill
                    className="object-contain p-4 drop-shadow-2xl mix-blend-luminosity opacity-90 hover:opacity-100 hover:mix-blend-normal transition-all"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Results */}
      <section ref={resultsRef} className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <div className="w-full max-w-[1920px] mx-auto">
          {/* Pre-Results CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={resultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16 p-8 sm:p-12 rounded-none border text-center" style={{ borderColor: 'var(--border-faint)' }}
          >
            <h3 className="text-2xl sm:text-3xl font-accent font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Automate Document Processing at Scale
            </h3>
            <p className="mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Reduce processing time by 90%, improve accuracy to 95%, and cut costs dramatically. Let's discuss how AI can transform your operations.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 rounded-full font-accent font-bold transition-all" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}>
                Schedule Enterprise Demo
              </button>
            </Link>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={resultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl font-accent font-black mb-16 text-center" style={{ color: 'var(--text-primary)' }}
          >
            Enterprise <span style={{ color: 'var(--text-subtle)' }}>Impact</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                stat: '$2M+',
                title: 'Revenue Generated',
                desc: 'Combined value of recovered sales time',
              },
              {
                stat: '50+',
                title: 'Agency Partners',
                desc: 'Using the tool daily for client work',
              },
              {
                stat: '100%',
                title: 'CRM Sync Rate',
                desc: 'Flawless integration with major platforms',
              },
              {
                stat: '15 hrs',
                title: 'Saved Weekly',
                desc: 'Per sales agent on manual data entry',
              },
              {
                stat: 'Zero',
                title: 'Manual Errors',
                desc: 'AI handles formatting perfectly',
              },
              {
                stat: '2x',
                title: 'Scale Allowed',
                desc: 'Agencies doubled their client load',
              },
            ].map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={resultsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="p-8 rounded-none border transition-all" style={{ borderColor: 'var(--border-faint)', backgroundColor: 'var(--bg-elevated)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-card)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'}
              >
                <div className="text-4xl font-accent font-black mb-2" style={{ color: 'var(--text-primary)' }}>{result.stat}</div>
                <h4 className="text-lg font-accent font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{result.title}</h4>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{result.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
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
              "This AI extraction tool fundamentally transformed our workflow. What used to take our sales team 15 hours a week of mind-numbing data entry now happens instantly. The ROI was immediate."
            </p>
            <div>
              <p className="text-lg font-accent font-bold" style={{ color: 'var(--text-primary)' }}>Alex Turner</p>
              <p style={{ color: 'var(--text-muted)' }}>Sales Director, Top Growth Agency</p>
            </div>
          </motion.div>
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
            <h2 className="text-5xl sm:text-6xl font-accent font-black mb-8" style={{ color: 'var(--text-primary)' }}>
              Ready to Deploy <span style={{ color: 'var(--text-subtle)' }}>Enterprise AI?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 sm:px-12 py-4 rounded-full font-accent font-bold transition-all" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}>
                  Start AI Project
                </button>
              </Link>
              <Link href="/work">
                <button className="px-8 sm:px-12 py-4 border rounded-full font-accent font-bold transition-all" style={{ borderColor: 'var(--border-light)', color: 'var(--text-primary)' }}>
                  View All Projects
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

