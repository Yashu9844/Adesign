'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import { Zap, TrendingUp, Eye } from 'lucide-react';

export default function AuroraCaseStudy() {
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
    <div className="min-h-screen bg-black">
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
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20"
            >
              <Eye className="w-5 h-5" />
              <span className="text-xs text-white/80 uppercase tracking-[0.2em]">Marketing Website</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl sm:text-7xl md:text-8xl font-accent font-black leading-[0.95] text-white"
            >
              Aurora
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl sm:text-2xl text-white/80 leading-relaxed max-w-2xl"
            >
              High-converting marketing website for a sustainable fashion brand. Combines compelling storytelling with conversion optimization to drive sales and brand loyalty.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/contact">
                <button className="px-8 py-4 bg-white text-black rounded-full font-accent font-bold hover:bg-white/90 transition-all">
                  Collaborate
                </button>
              </Link>
              <Link href="/work">
                <button className="px-8 py-4 border border-white/30 text-white rounded-full font-accent font-bold hover:border-white/60 transition-all">
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
        <div className="w-full max-w-[1920px] mx-auto relative h-[400px] sm:h-[600px] lg:h-[800px] rounded-none overflow-hidden border border-white/10">
          <Image
            src="/images/pimg2.webp"
            alt="Aurora Website"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Strategy Section */}
      <section ref={strategyRef} className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-white/5">
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={strategyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-accent font-black mb-16 text-white"
          >
            Marketing <span className="text-white/40">Strategy</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Storytelling First',
                description: 'Every page tells a story about sustainability, craftsmanship, and values. Users become emotionally invested in the brand journey.',
                icon: '📖',
              },
              {
                title: 'Conversion Optimized',
                description: 'Strategic CTAs, social proof, urgency elements, and checkout optimization designed to maximize sales at every step.',
                icon: '💸',
              },
              {
                title: 'Community Focused',
                description: 'Features for customer reviews, user-generated content, and community building to create brand advocates.',
                icon: '👥',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={strategyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-none border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-accent font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Project Timeline */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={strategyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl font-accent font-bold mb-8 text-white"
          >
            Campaign <span className="text-white/40">Timeline</span>
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
                className="p-6 sm:p-8 rounded-none border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
              >
                <div className="flex gap-6 items-start">
                  <span className="inline-block px-4 py-2 rounded-none bg-white/20 text-white font-accent font-bold text-sm flex-shrink-0">{timeline.phase}</span>
                  <div className="flex-1">
                    <h4 className="text-xl font-accent font-bold text-white mb-1">{timeline.title}</h4>
                    <p className="text-white/70 text-sm">{timeline.details}</p>
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
            className="mt-16 p-8 sm:p-12 rounded-none border border-white/10 text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-accent font-bold text-white mb-4">
              Ready to Launch a High-Converting Website?
            </h3>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Our marketing websites have generated $200M+ in revenue for sustainable brands. Let's build your conversion machine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-3 bg-white text-black rounded-full font-accent font-bold hover:bg-white/90 transition-all">
                  Start Website Project
                </button>
              </Link>
              <button className="px-8 py-3 border border-white/30 text-white rounded-full font-accent font-bold hover:border-white/60 transition-all">
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
            className="text-5xl sm:text-6xl font-accent font-black mb-16 text-white"
          >
            Website <span className="text-white/40">Showcase</span>
          </motion.h2>

          {/* Masonry-like Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Large featured */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-2 relative h-[400px] sm:h-[500px] rounded-none overflow-hidden border border-white/10"
            >
              <Image
                src="/images/pimg13.webp"
                alt="Aurora Showcase 1"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Two columns */}
            {['/images/pimg14.webp', '/images/pimg15.webp'].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (idx + 1) * 0.1 }}
                className="relative h-[350px] sm:h-[400px] rounded-none overflow-hidden border border-white/10"
              >
                <Image
                  src={img}
                  alt={`Aurora ${idx + 2}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}

            {/* Single full width */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="md:col-span-2 relative h-[300px] sm:h-[400px] rounded-none overflow-hidden border border-white/10"
            >
              <Image
                src="/images/pimg16.webp"
                alt="Aurora Showcase 4"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section ref={resultsRef} className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-white/5">
        <div className="w-full max-w-[1920px] mx-auto">
          {/* CTA Before Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={resultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16 p-8 sm:p-12 rounded-none border border-white/10 text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-accent font-bold text-white mb-4">
              Need a Sustainable Brand Story?
            </h3>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              We specialize in building authentic digital experiences for sustainable brands. Get results with storytelling and strategy.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 bg-white text-black rounded-full font-accent font-bold hover:bg-white/90 transition-all">
                Schedule Brand Strategy Session
              </button>
            </Link>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={resultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl font-accent font-black mb-16 text-white text-center"
          >
            Campaign <span className="text-white/40">Results</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { metric: '340%', label: 'ROI', desc: 'Return on marketing investment' },
              { metric: '245%', label: 'Traffic Increase', desc: 'Year-over-year growth' },
              { metric: '4.2%', label: 'Conversion Rate', desc: 'Industry average: 1.8%' },
              { metric: '$2.3M', label: 'Revenue Generated', desc: 'First year sales' },
            ].map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={resultsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-none border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-center"
              >
                <div className="text-5xl font-accent font-black text-white mb-2">{result.metric}</div>
                <div className="text-lg font-medium text-white mb-2">{result.label}</div>
                <div className="text-sm text-white/60">{result.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={resultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10"
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
                  <div className="text-white/60">{channel.icon}</div>
                  <h4 className="text-xl font-accent font-bold text-white">{channel.title}</h4>
                </div>
                <p className="text-3xl font-accent font-black text-white mb-2">{channel.value}</p>
                <p className="text-white/70 text-sm">{channel.description}</p>
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
            <p className="text-2xl sm:text-3xl font-light text-white/90 leading-relaxed mb-8">
              "The website isn't just beautiful—it's a sales machine. We've never seen conversion rates this high. The storytelling approach really resonates with our community."
            </p>
            <div>
              <p className="text-lg font-accent font-bold text-white">Emma Rodriguez</p>
              <p className="text-white/60">Founder, Aurora Sustainable Fashion</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-white/5">
        <div className="w-full max-w-[1920px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-6xl font-accent font-black mb-8 text-white">
              Build a High-Converting <span className="text-white/40">Website</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 sm:px-12 py-4 bg-white text-black rounded-full font-accent font-bold hover:bg-white/90 transition-all">
                  Let's Build
                </button>
              </Link>
              <Link href="/work">
                <button className="px-8 sm:px-12 py-4 border border-white/30 text-white rounded-full font-accent font-bold hover:border-white/60 transition-all">
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

