'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import { Smartphone, Layers } from 'lucide-react';

export default function NexusCaseStudy() {
  const overviewRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const overviewInView = useInView(overviewRef, { once: true });
  const featuresInView = useInView(featuresRef, { once: true });
  const resultsInView = useInView(resultsRef, { once: true });

  const features = [
    {
      title: 'Real-time Collaboration',
      description: 'Teams can work simultaneously on projects with instant synchronization.',
      highlights: ['Live cursors', 'Comments & mentions', 'Activity feed', 'Version history'],
    },
    {
      title: 'Intuitive Interface',
      description: 'Designed for mobile-first usage with zero learning curve.',
      highlights: ['Gesture navigation', 'Voice commands', 'Offline mode', 'Smart notifications'],
    },
    {
      title: 'Enterprise Security',
      description: 'Enterprise-grade encryption and compliance for sensitive data.',
      highlights: ['End-to-end encryption', 'SSO integration', 'Audit logs', 'Data residency'],
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <SmoothScroll />
      <Navigation />

      {/* Hero - Minimalist Design */}
      <section className="relative min-h-[100vh] flex items-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-32">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border" style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-medium)' }}>
                <Smartphone className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
                <span className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>Mobile Product</span>
              </div>

              <h1 className="text-6xl sm:text-7xl md:text-8xl font-accent font-black leading-[0.95] mb-8" style={{ color: 'var(--text-primary)' }}>
                Nexus
              </h1>

              <p className="text-xl sm:text-2xl leading-relaxed mb-8 max-w-2xl" style={{ color: 'var(--text-muted)' }}>
                Cross-platform mobile application for real-time collaboration and project management. Designed to empower distributed teams to work together seamlessly from anywhere in the world.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <button className="px-8 py-4 rounded-full font-accent font-bold transition-all" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}>
                    Get Started
                  </button>
                </Link>
                <Link href="/work">
                  <button className="px-8 py-4 border rounded-full font-accent font-bold transition-all" style={{ borderColor: 'var(--border-light)', color: 'var(--text-primary)' }}>
                    Back to Work
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview - Stats */}
      <section ref={overviewRef} className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={overviewInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
          >
            {[
              { label: 'App Downloads', value: '200K+' },
              { label: '4.8 Star Rating', value: '45K+ Reviews' },
              { label: 'Active Daily Users', value: '85K+' },
              { label: 'Retention Rate', value: '74%' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={overviewInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 rounded-none border transition-all" style={{ borderColor: 'var(--border-faint)', backgroundColor: 'var(--bg-elevated)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-card)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'}
              >
                <p className="text-sm uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--text-muted)' }}>{stat.label}</p>
                <p className="text-3xl sm:text-4xl font-accent font-black" style={{ color: 'var(--text-primary)' }}>{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl font-accent font-black mb-8" style={{ color: 'var(--text-primary)' }}>Challenge</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                Remote work is the new norm, but existing project management tools feel clunky on mobile. Teams were switching between desktop and mobile, losing context and productivity.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                We needed to build a native mobile experience that was as powerful as desktop tools, with zero friction for teams of any size.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl sm:text-5xl font-accent font-black mb-8" style={{ color: 'var(--text-primary)' }}>Solution</h2>
              <ul className="space-y-4">
                {['Native iOS & Android apps with unified codebase', 'Offline-first architecture for seamless experience', 'Voice & gesture-based quick actions', 'Smart AI-powered task suggestions', 'One-tap onboarding for teams'].map((solution, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <Layers className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'var(--text-muted)' }} />
                    <span className="text-lg" style={{ color: 'var(--text-muted)' }}>{solution}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section with Grid Images */}
      <section ref={featuresRef} className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-accent font-black mb-16" style={{ color: 'var(--text-primary)' }}
          >
            Feature <span style={{ color: 'var(--text-subtle)' }}>Highlights</span>
          </motion.h2>

          <div className="space-y-16">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              >
                <div>
                  <h3 className="text-3xl sm:text-4xl font-accent font-black mb-4" style={{ color: 'var(--text-primary)' }}>{feature.title}</h3>
                  <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>{feature.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {feature.highlights.map((highlight, i) => (
                      <div key={i} className="p-4 rounded-none border" style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-faint)' }}>
                        <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative h-[400px] sm:h-[500px] rounded-none overflow-hidden border" style={{ borderColor: 'var(--border-faint)' }}>
                  <Image
                    src={['/images/pimg8.webp', '/images/pimg9.webp', '/images/pimg10.webp'][idx]}
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

      {/* Gallery - Multiple Layouts */}
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-accent font-black mb-16" style={{ color: 'var(--text-primary)' }}
          >
            Development <span style={{ color: 'var(--text-subtle)' }}>Journey</span>
          </motion.h2>

          <div className="max-w-4xl mx-auto mb-16 space-y-6">
            {[
              { sprint: 'Sprint 1-2', title: 'MVP Foundation', desc: 'Core app architecture, authentication system, offline-first data sync, basic task management' },
              { sprint: 'Sprint 3-4', title: 'Real-time Features', desc: 'Live collaboration engine, presence indicators, comment system, activity feed, notifications' },
              { sprint: 'Sprint 5-6', title: 'AI & Automation', desc: 'Smart task suggestions, voice commands, gesture recognition, automated workflows, analytics' },
              { sprint: 'Sprint 7-8', title: 'Polish & Scale', desc: 'Performance optimization, accessibility audit, security hardening, launch preparation, beta testing' },
            ].map((sprint, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-none border transition-all"
                style={{ borderColor: 'var(--border-faint)', backgroundColor: 'var(--bg-elevated)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-card)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'}
              >
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <span className="inline-block px-4 py-2 rounded-none font-accent font-bold text-sm" style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-primary)' }}>{sprint.sprint}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-accent font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{sprint.title}</h4>
                    <p style={{ color: 'var(--text-muted)' }}>{sprint.desc}</p>
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
            className="p-8 sm:p-12 rounded-none border text-center mb-16" style={{ borderColor: 'var(--border-faint)' }}
          >
            <h3 className="text-2xl sm:text-3xl font-accent font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Need a High-Performance Mobile App?
            </h3>
            <p className="mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Our cross-platform expertise has delivered 200K+ downloads and 4.8★ ratings. Let's build your next successful app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-3 rounded-full font-accent font-bold transition-all" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}>
                  Discuss Your App
                </button>
              </Link>
              <button className="px-8 py-3 border rounded-full font-accent font-bold transition-all" style={{ borderColor: 'var(--border-light)', color: 'var(--text-primary)' }}>
                Download App Playbook
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Original Gallery Section */}
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-accent font-black mb-16" style={{ color: 'var(--text-primary)' }}
          >
            Design <span style={{ color: 'var(--text-subtle)' }}>Showcase</span>
          </motion.h2>

          {/* Large Featured */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] sm:h-[600px] rounded-none overflow-hidden border mb-8" style={{ borderColor: 'var(--border-faint)' }}
          >
            <Image
              src="/images/pimg11.webp"
              alt="Nexus App"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Three Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {['/images/pimg4.webp', '/images/pimg5.webp', '/images/pimg6.webp'].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="relative h-[300px] rounded-none overflow-hidden border" style={{ borderColor: 'var(--border-faint)' }}
              >
                <Image
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {['/images/pimg7.webp', '/images/pimg12.webp'].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="relative h-[350px] sm:h-[450px] rounded-none overflow-hidden border" style={{ borderColor: 'var(--border-faint)' }}
              >
                <Image
                  src={img}
                  alt={`Gallery ${idx + 4}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section ref={resultsRef} className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={resultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-accent font-black mb-16 text-center" style={{ color: 'var(--text-primary)' }}
          >
            Business <span style={{ color: 'var(--text-subtle)' }}>Outcomes</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { metric: '200K', label: 'Downloads', subtext: 'First 6 months' },
              { metric: '4.8★', label: 'App Rating', subtext: '45K+ reviews' },
              { metric: '74%', label: 'Retention', subtext: '30-day cohort' },
              { metric: '$4.2M', label: 'ARR', subtext: 'Year 2 projection' },
            ].map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={resultsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-none border transition-all text-center" style={{ borderColor: 'var(--border-faint)', backgroundColor: 'var(--bg-elevated)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-card)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'}
              >
                <div className="text-5xl font-accent font-black mb-2" style={{ color: 'var(--text-primary)' }}>{result.metric}</div>
                <div className="text-lg font-medium mb-1" style={{ color: 'var(--text-primary)' }}>{result.label}</div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{result.subtext}</div>
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
              "Nexus changed how our team works. For the first time, we can manage complex projects entirely from mobile without losing any power."
            </p>
            <div>
              <p className="text-lg font-accent font-bold" style={{ color: 'var(--text-primary)' }}>James Mitchell</p>
              <p style={{ color: 'var(--text-muted)' }}>Product Manager, Fortune 500 Tech Company</p>
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
              Let's Build Your <span style={{ color: 'var(--text-subtle)' }}>Next App</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 sm:px-12 py-4 rounded-full font-accent font-bold transition-all" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}>
                  Start Project
                </button>
              </Link>
              <Link href="/work">
                <button className="px-8 sm:px-12 py-4 border rounded-full font-accent font-bold transition-all" style={{ borderColor: 'var(--border-light)', color: 'var(--text-primary)' }}>
                  See All Projects
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

