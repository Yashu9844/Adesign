'use client';

import { useRef } from 'react';
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
    <div className="min-h-screen bg-black">
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
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <Palette className="w-5 h-5" />
              <span className="text-xs text-white/80 uppercase tracking-[0.2em]">Brand Transformation</span>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl font-accent font-black leading-[0.95] mb-6 text-white">
              Vertex
            </h1>

            <p className="text-xl sm:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
              Complete brand overhaul for a fintech startup that raised $2.5M in seed funding, positioning them as the disruptive leader in financial technology.
            </p>

            <div className="flex flex-wrap gap-4">
              {['Fintech', 'Brand Strategy', 'Design System', 'Motion'].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white">
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
                <p className="text-xs text-white/60 uppercase tracking-[0.2em] mb-2">{stat.label}</p>
                <p className="text-2xl sm:text-3xl font-accent font-black text-white">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand Strategy Deep Dive */}
      <section ref={strategyRef} className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-white/5">
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={strategyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-accent font-black mb-16 text-white"
          >
            Brand <span className="text-white/40">Strategy</span>
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
                    <h3 className="text-2xl font-accent font-bold text-white mb-3">{strategy.title}</h3>
                    <p className="text-lg text-white/70 leading-relaxed">{strategy.desc}</p>
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
              className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border border-white/10"
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
            className="text-5xl sm:text-6xl font-accent font-black mb-16 text-white"
          >
            Visual <span className="text-white/40">Evolution</span>
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
              <p className="text-white/60 text-sm uppercase tracking-[0.2em] mb-4">Before</p>
              <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/pimg4.webp"
                  alt="Before"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-white/60 text-sm uppercase tracking-[0.2em] mb-4">After</p>
              <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10">
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
            className="relative h-[300px] sm:h-[500px] lg:h-[700px] rounded-2xl overflow-hidden border border-white/10 mb-16"
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
      <section ref={deliveriesRef} className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-white/5">
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={deliveriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-accent font-black mb-16 text-white"
          >
            Project <span className="text-white/40">Timeline</span>
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
                className="p-6 sm:p-8 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
              >
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white font-accent font-bold text-sm">{timeline.week}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-accent font-bold text-white mb-2">{timeline.title}</h4>
                    <p className="text-white/70">{timeline.desc}</p>
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
            className="p-8 sm:p-12 rounded-2xl border border-white/10 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-accent font-bold text-white mb-4">
              Ready to Elevate Your Brand?
            </h3>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Our brand transformations have helped 200+ companies raise $2.5B+ in funding. Let's build your iconic brand identity.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 bg-white text-black rounded-full font-accent font-bold hover:bg-white/90 transition-all">
                Start Brand Transformation
              </button>
            </Link>
          </motion.div>

          <div className="mt-16">
            <h2 className="text-4xl sm:text-5xl font-accent font-black mb-8 text-white">What We <span className="text-white/40">Delivered</span></h2>

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
                        className="p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
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
                <div className={`relative h-[350px] sm:h-[450px] rounded-2xl overflow-hidden border border-white/10 ${idx % 2 === 1 ? 'lg:col-start-1' : ''}`}>
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
            className="text-5xl sm:text-6xl font-accent font-black mb-16 text-white text-center"
          >
            Impact & <span className="text-white/40">Recognition</span>
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
                className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <div className="text-4xl font-accent font-black text-white mb-2">{impact.stat}</div>
                <h4 className="text-xl font-accent font-bold text-white mb-3">{impact.title}</h4>
                <p className="text-white/60 text-sm">{impact.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-white/5">
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
              "This wasn't just a rebrand. They completely reimagined how we communicate our value. The design system alone saved us millions in development costs down the line."
            </p>
            <div>
              <p className="text-lg font-accent font-bold text-white">Michael Torres</p>
              <p className="text-white/60">Founder & CEO, Vertex</p>
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
            <h2 className="text-5xl sm:text-6xl font-accent font-black mb-8 text-white">
              Ready to Build Your <span className="text-white/40">Brand Legacy?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 sm:px-12 py-4 bg-white text-black rounded-full font-accent font-bold hover:bg-white/90 transition-all">
                  Let's Talk
                </button>
              </Link>
              <Link href="/work">
                <button className="px-8 sm:px-12 py-4 border border-white/30 text-white rounded-full font-accent font-bold hover:border-white/60 transition-all">
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
