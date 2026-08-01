'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import { Zap, TrendingUp, Eye, BookOpen, LineChart, GraduationCap } from 'lucide-react';

export default function MedhasyaCaseStudy() {
  const heroRef = useRef<HTMLDivElement>(null);
  const strategyRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroInView = useInView(heroRef, { once: true });
  const strategyInView = useInView(strategyRef, { once: true });
  const resultsInView = useInView(resultsRef, { once: true });

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <SmoothScroll />
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[100vh] flex items-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-32">
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="space-y-8 max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border" style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-medium)' }}
            >
              <Eye className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
              <span className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>Marketing Website</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl sm:text-7xl md:text-8xl font-accent font-black leading-[0.95]" style={{ color: 'var(--text-primary)' }}
            >
              Medhasya Academy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl sm:text-2xl leading-relaxed max-w-2xl" style={{ color: 'var(--text-muted)' }}
            >
              A comprehensive educational website and marketing campaign driving high local SEO rankings and conversions for a premier academy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/contact">
                <button className="px-8 py-4 rounded-full font-accent font-bold transition-all" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}>
                  Collaborate
                </button>
              </Link>
              <Link href="/work">
                <button className="px-8 py-4 border rounded-full font-accent font-bold transition-all" style={{ borderColor: 'var(--border-light)', color: 'var(--text-primary)' }}>
                  View Portfolio
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-20"
      >
        <div className="w-full max-w-[1920px] mx-auto relative h-[400px] sm:h-[600px] lg:h-[800px] rounded-none overflow-hidden border" style={{ borderColor: 'var(--border-faint)' }}>
          <Image
            src="/portfolio-images-work/medhasya/academy_home page.png"
            alt="Medhasya Website"
            fill
            className="object-contain p-4 drop-shadow-2xl mix-blend-luminosity opacity-90 hover:opacity-100 hover:mix-blend-normal transition-all"
          />
        </div>
      </motion.div>

      {/* Strategy Section */}
      <section ref={strategyRef} className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={strategyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-accent font-black mb-16" style={{ color: 'var(--text-primary)' }}
          >
            Marketing <span style={{ color: 'var(--text-subtle)' }}>Strategy</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Educational Excellence',
                description: 'Highlighting courses, faculty, and student success to build trust and authority in the local education sector.',
                icon: <BookOpen className="w-10 h-10" />,
              },
              {
                title: 'SEO & Lead Generation',
                description: 'Strategic local SEO tags and outreach programs designed to rank high for tuition searches in Bangalore.',
                icon: <LineChart className="w-10 h-10" />,
              },
              {
                title: 'Student Success Stories',
                description: 'Features for student video testimonials and reviews that increased site relevance and trust significantly.',
                icon: <GraduationCap className="w-10 h-10" />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={strategyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-none border transition-all" style={{ borderColor: 'var(--border-faint)', backgroundColor: 'var(--bg-elevated)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-card)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'}
              >
                <div className="mb-4" style={{ color: 'var(--text-primary)' }}>{item.icon}</div>
                <h3 className="text-2xl font-accent font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Project Timeline */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={strategyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl font-accent font-bold mb-8" style={{ color: 'var(--text-primary)' }}
          >
            Campaign <span style={{ color: 'var(--text-subtle)' }}>Timeline</span>
          </motion.h3>

          <div className="space-y-6">
            {[
              { phase: 'Week 1-2', title: 'Strategy & Planning', details: 'Target audience profiling, competitive analysis, messaging framework, visual direction' },
              { phase: 'Week 3-4', title: 'Design & Content', details: 'Homepage design, product pages, blog integration, email templates, social assets' },
              { phase: 'Week 5-7', title: 'Development & Launch', details: 'Frontend build, CMS integration, SEO optimization, analytics setup, testing' },
              { phase: 'Week 8+', title: 'Growth & Optimization', details: 'Ad campaigns, email marketing, content strategy, conversion optimization, analytics' },
            ].map((timeline, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={strategyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                className="p-6 sm:p-8 rounded-none border transition-all"
                style={{ borderColor: 'var(--border-faint)', backgroundColor: 'var(--bg-elevated)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-card)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'}
              >
                <div className="flex gap-6 items-start">
                  <span className="inline-block px-4 py-2 rounded-none font-accent font-bold text-sm flex-shrink-0" style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-primary)' }}>{timeline.phase}</span>
                  <div className="flex-1">
                    <h4 className="text-xl font-accent font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{timeline.title}</h4>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{timeline.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={strategyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 p-8 sm:p-12 rounded-none border text-center" style={{ borderColor: 'var(--border-faint)' }}
          >
            <h3 className="text-2xl sm:text-3xl font-accent font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Ready to Launch an Educational Platform?
            </h3>
            <p className="mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Our educational websites have driven thousands of new student enrollments for academies. Let's build your lead generation machine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-3 rounded-full font-accent font-bold transition-all" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}>
                  Start Website Project
                </button>
              </Link>
              <button className="px-8 py-3 border rounded-full font-accent font-bold transition-all" style={{ borderColor: 'var(--border-light)', color: 'var(--text-primary)' }}>
                View Conversion Playbook
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Showcase Grid */}
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-accent font-black mb-16" style={{ color: 'var(--text-primary)' }}
          >
            Website <span style={{ color: 'var(--text-subtle)' }}>Showcase</span>
          </motion.h2>

          {/* Masonry-like Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Large featured */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-2 relative h-[400px] sm:h-[500px] rounded-none overflow-hidden border" style={{ borderColor: 'var(--border-faint)' }}
            >
              <Image
                src="/portfolio-images-work/medhasya/ranked second in google map for searching for tution in bengalore using google tags and organic review outreach.png"
                alt="Medhasya Showcase 1"
                fill
                className="object-contain p-4 drop-shadow-2xl mix-blend-luminosity opacity-90 hover:opacity-100 hover:mix-blend-normal transition-all"
              />
            </motion.div>

            {/* Two columns */}
            {['/portfolio-images-work/medhasya/adding video testimony increased the site relevance compare to other website.png', '/portfolio-images-work/medhasya/increased the website seo to show in first page.png'].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (idx + 1) * 0.1 }}
                className="relative h-[350px] sm:h-[400px] rounded-none overflow-hidden border" style={{ borderColor: 'var(--border-faint)' }}
              >
                <Image
                  src={img}
                  alt={`Medhasya ${idx + 2}`}
                  fill
                  className="object-contain p-4 drop-shadow-2xl mix-blend-luminosity opacity-90 hover:opacity-100 hover:mix-blend-normal transition-all"
                />
              </motion.div>
            ))}

            {/* Single full width */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="md:col-span-2 relative h-[300px] sm:h-[400px] rounded-none overflow-hidden border" style={{ borderColor: 'var(--border-faint)' }}
            >
              <Image
                src="/portfolio-images-work/medhasya/courses.png"
                alt="Medhasya Showcase 4"
                fill
                className="object-contain p-4 drop-shadow-2xl mix-blend-luminosity opacity-90 hover:opacity-100 hover:mix-blend-normal transition-all"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section ref={resultsRef} className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <div className="w-full max-w-[1920px] mx-auto">
          {/* CTA Before Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={resultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16 p-8 sm:p-12 rounded-none border text-center" style={{ borderColor: 'var(--border-faint)' }}
          >
            <h3 className="text-2xl sm:text-3xl font-accent font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Need an Educational Platform?
            </h3>
            <p className="mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              We specialize in building authentic digital experiences for educational institutions. Get results with local SEO and strategy.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 rounded-full font-accent font-bold transition-all" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}>
                Schedule Brand Strategy Session
              </button>
            </Link>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={resultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl font-accent font-black mb-16 text-center" style={{ color: 'var(--text-primary)' }}
          >
            Campaign <span style={{ color: 'var(--text-subtle)' }}>Results</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { metric: '#2', label: 'Local Search Rank', desc: 'For competitive tuition keywords in Bangalore' },
              { metric: '245%', label: 'Traffic Increase', desc: 'Year-over-year organic growth' },
              { metric: '45%', label: 'Enrollment Growth', desc: 'Increase in new student admissions' },
              { metric: '10x', label: 'Engagement', desc: 'Through video testimonials' },
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
                <div className="text-lg font-medium mb-2" style={{ color: 'var(--text-primary)' }}>{result.label}</div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{result.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={resultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t" style={{ borderColor: 'var(--border-faint)' }}
          >
            {[
              {
                title: 'Paid Advertising',
                value: '45%',
                description: 'High-converting ad copy and landing pages',
                icon: <TrendingUp className="w-6 h-6" />,
              },
              {
                title: 'Organic Search',
                value: '35%',
                description: 'SEO optimization and content marketing',
                icon: <Eye className="w-6 h-6" />,
              },
              {
                title: 'Social & Referral',
                value: '20%',
                description: 'Community engagement and word-of-mouth',
                icon: <Zap className="w-6 h-6" />,
              },
            ].map((channel, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={resultsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div style={{ color: 'var(--text-muted)' }}>{channel.icon}</div>
                  <h4 className="text-xl font-accent font-bold" style={{ color: 'var(--text-primary)' }}>{channel.title}</h4>
                </div>
                <p className="text-3xl font-accent font-black mb-2" style={{ color: 'var(--text-primary)' }}>{channel.value}</p>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{channel.description}</p>
              </motion.div>
            ))}
          </motion.div>
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
              "The website isn't just beautiful—it's an enrollment machine. We've never seen local SEO rankings this high. The student video testimonials approach really resonates with parents."
            </p>
            <div>
              <p className="text-lg font-accent font-bold" style={{ color: 'var(--text-primary)' }}>Academy Director</p>
              <p style={{ color: 'var(--text-muted)' }}>Medhasya Academy</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <div className="w-full max-w-[1920px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-6xl font-accent font-black mb-8" style={{ color: 'var(--text-primary)' }}>
              Build a High-Converting <span style={{ color: 'var(--text-subtle)' }}>Website</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 sm:px-12 py-4 rounded-full font-accent font-bold transition-all" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}>
                  Let's Build
                </button>
              </Link>
              <Link href="/work">
                <button className="px-8 sm:px-12 py-4 border rounded-full font-accent font-bold transition-all" style={{ borderColor: 'var(--border-light)', color: 'var(--text-primary)' }}>
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

