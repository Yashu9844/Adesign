'use client';

import { useRef } from 'react';
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
    <div className="min-h-screen bg-black">
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
                  <span className="text-xs text-white/40 uppercase tracking-[0.3em]">Case Study</span>
                  <h1 className="text-6xl sm:text-7xl md:text-8xl font-accent font-black leading-[0.95] mt-4 mb-4 text-white">
                    Lumina
                  </h1>
                  <p className="text-2xl text-white/60 font-light">Premium E-Commerce Platform</p>
                </div>

                <div className="space-y-4 py-8 border-y border-white/10">
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-[0.2em] mb-2">Timeline</p>
                    <p className="text-lg text-white font-medium">12 weeks</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-[0.2em] mb-2">Team</p>
                    <p className="text-lg text-white font-medium">4 Designers, 5 Developers, 2 Product Managers</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-[0.2em] mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['Next.js', 'React', 'Stripe', 'PostgreSQL', 'Tailwind CSS'].map(tech => (
                        <span key={tech} className="px-3 py-1 text-sm rounded-full bg-white/5 text-white border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-lg text-white/80 leading-relaxed">
                  A premium shopping experience designed to eliminate friction, personalize interactions, and drive conversions. Built for luxury brands looking to scale their digital presence without compromising on exclusivity.
                </p>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border border-white/10"
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
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-white/5">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl font-accent font-black mb-6 text-white">
                The Challenge
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-white/80 leading-relaxed">
                  The client was losing 68% of customers at checkout, and their existing platform couldn't handle seasonal traffic spikes. Mobile experience was clunky, personalization was non-existent, and they were hemorrhaging money to cart abandonment.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
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
              <h2 className="text-4xl sm:text-5xl font-accent font-black mb-6 text-white">
                Our Solution
              </h2>
              <div className="space-y-4">
                {['One-click checkout with saved payment methods', 'AI-powered product recommendations', 'Progressive web app for mobile-first experience', 'Real-time inventory synchronization', 'Advanced analytics dashboard'].map((solution, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <Check className="w-6 h-6 text-white/60 flex-shrink-0 mt-1" />
                    <span className="text-lg text-white/80">{solution}</span>
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
            className="mt-16 p-8 sm:p-12 rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-accent font-bold text-white mb-4">
              Facing Similar E-Commerce Challenges?
            </h3>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Our proven methodology has helped 50+ brands increase conversion rates by an average of 150%. Let's discuss how we can do the same for you.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 bg-white text-black rounded-full font-accent font-bold hover:bg-white/90 transition-all">
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
            className="text-4xl sm:text-5xl md:text-6xl font-accent font-black mb-16 text-white text-center"
          >
            Results That <span className="text-white/40">Speak Volumes</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={resultsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all group"
              >
                <div className="text-4xl mb-4">{result.icon}</div>
                <div className="text-5xl font-accent font-black text-white mb-2">{result.metric}</div>
                <div className="text-white/60 font-light">{result.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-white/5">
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-accent font-black mb-16 text-white text-center"
          >
            Project <span className="text-white/40">Timeline</span>
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
                  <div className="absolute left-8 top-20 bottom-0 w-px bg-gradient-to-b from-white/40 to-transparent" />
                )}

                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/40 flex items-center justify-center">
                      <span className="text-sm font-accent font-bold text-white">{step.num}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-accent font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-white/70 mb-4 leading-relaxed">{step.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/50 italic">{step.duration}</span>
                      <div className="flex gap-3">
                        {step.details && step.details.map((detail, i) => (
                          <span key={i} className="text-xs bg-white/10 border border-white/20 px-3 py-1 rounded-full text-white/80">
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
            className="mt-16 p-8 rounded-2xl border border-white/10 bg-white/5 text-center"
          >
            <p className="text-white/70 mb-6">Ready to transform your e-commerce platform?</p>
            <Link href="/contact">
              <button className="px-8 py-3 bg-white text-black rounded-full font-accent font-bold hover:bg-white/90 transition-all inline-flex items-center gap-2">
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
            className="text-4xl sm:text-5xl md:text-6xl font-accent font-black mb-16 text-white"
          >
            Visual <span className="text-white/40">Showcase</span>
          </motion.h2>

          {/* Full Width Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 relative h-[400px] sm:h-[500px] lg:h-[700px] rounded-2xl overflow-hidden border border-white/10"
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
                className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden border border-white/10"
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
                className="relative h-[250px] sm:h-[300px] rounded-2xl overflow-hidden border border-white/10"
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
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-white/5">
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
            <p className="text-2xl sm:text-3xl font-light text-white/90 leading-relaxed mb-8">
              "Working with this team was transformative. They didn't just build a platform—they completely reimagined how our customers experience luxury shopping online."
            </p>
            <div>
              <p className="text-lg font-accent font-bold text-white">Sarah Chen</p>
              <p className="text-white/60">CEO, Lumina</p>
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
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-accent font-black mb-8 text-white">
              Ready to Transform <span className="text-white/40">Your Business?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 sm:px-12 py-4 bg-white text-black rounded-full font-accent font-bold hover:bg-white/90 transition-all">
                  Start Your Project
                </button>
              </Link>
              <Link href="/work">
                <button className="px-8 sm:px-12 py-4 border border-white/30 text-white rounded-full font-accent font-bold hover:border-white/60 hover:bg-white/5 transition-all">
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
