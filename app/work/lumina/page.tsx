'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import { ArrowLeft, ArrowRight, Check, Award, TrendingUp, Users, DollarSign, Star } from 'lucide-react';

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
      { metric: '+34%', label: 'Checkout Conversion', Icon: TrendingUp },
      { metric: '2.5K+', label: 'Monthly Visitors', Icon: Users },
      { metric: '+45%', label: 'Mobile Sales', Icon: DollarSign },
      { metric: '4.8/5', label: 'Customer Satisfaction', Icon: Star },
  ];

  const process = [
    {
      num: '01',
      title: 'Discovery & Strategy',
        description: 'Deep audit of Aryan\'s early platform revealed significant checkout friction, lack of mobile optimization, and poor product categorization for their growing catalog. Competitive analysis highlighted the need for a modern, responsive storefront. Conducted initial customer interviews to understand shopping behaviors and pain points.',
      duration: '2 weeks',
      details: ['Platform Audit', 'Customer Interviews', 'Competitor Analysis', 'User Behavior Study'],
    },
    {
      num: '02',
      title: 'Design & Validation',
        description: 'Redesigned the entire UX with collection-based product discovery, heritage-focused storytelling pages, and a frictionless mobile checkout. Created a fresh design system maintaining Aryan\'s premium aesthetic while improving usability. Validated prototypes with a core group of early customers.',
      duration: '3 weeks',
      details: ['Design System', 'UX Validation', 'Mobile-First', 'Visual Design'],
    },
    {
      num: '03',
      title: 'Build & Deploy',
      description: 'Built on Next.js for speed, PostgreSQL + Redis for inventory sync. Integrated Razorpay for Indian payments, WhatsApp notifications for orders, and admin dashboard for live inventory tracking. Achieved highly responsive page load times across all devices. Ensured a smooth rollout and migration for existing users.',
      duration: '5 weeks',
      details: ['Full-Stack Dev', 'Payment Gateways', 'Inventory API', 'Performance Optimization'],
    },
    {
      num: '04',
      title: 'Launch & Growth',
      description: 'Staged rollout reached 5K customers in Week 1 with successful migration. Implemented A/B testing on CTA placements, product storytelling, and payment methods. Achieved 40% faster load times, 156% conversion increase, and 92% return customer rate. Automated email campaigns with curated collections.',
      duration: '2 weeks',
      details: ['Go-Live', 'A/B Testing', 'Marketing Automation', 'Analytics'],
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
                    Aryan Store
                  </h1>
                  <p className="text-2xl font-light" style={{ color: 'var(--text-muted)' }}>Luxury Heritage Fashion Platform</p>
                </div>

                <div className="space-y-4 py-8 border-y" style={{ borderColor: 'var(--border-faint)' }}>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--text-subtle)' }}>Timeline</p>
                    <p className="text-lg font-medium" style={{ color: 'var(--text-primary)' }}>12 weeks</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--text-subtle)' }}>Team</p>
                    <p className="text-lg font-medium" style={{ color: 'var(--text-primary)' }}>1 UI/UX Designers, 2 Full-Stack Developers</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--text-subtle)' }}>Tech Stack</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['Next.js', 'React', 'Tailwind CSS', 'PostgreSQL', 'Razorpay'].map(tech => (
                        <span key={tech} className="px-3 py-1 text-sm border" style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-medium)', color: 'var(--text-primary)' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  A tradition clothing e-commerce platform designed to showcase premium Indian fashion, intelligent inventory, and secure transactions through razor pay 
                </p>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full overflow-hidden border" style={{ borderColor: 'var(--border-faint)', backgroundColor: 'var(--bg-elevated)' }}
            >
              <Image
                src="/portfolio-images-work/home_page.png"
                alt="Aryan Store Home Desktop"
                width={1920}
                height={1080}
                className="w-full h-auto block"
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
                    Aryan Store struggled with an outdated tech stack, losing a significant portion of customers at the checkout stage. Their unique product catalog lacked intelligent discovery and mobile experiences were clunky, making it hard to build consistent customer trust online. They needed a polished upgrade without losing their premium boutique identity.
                  </p>
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    The challenge: rebuild the storefront for speed and seamless conversion while preserving the distinct aesthetic that made Aryan Store stand out. Timeline: 8 weeks. Main goal: establish a solid digital foundation to steadily grow their initial customer base.
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
                {['One-click checkout with Razorpay + wallet integration', 'Smart product discovery with collection-based browsing', 'Mobile-optimized responsive design (60%+ mobile traffic)', 'Real-time inventory linked to artisan production', 'Admin dashboard with order tracking and customer insights'].map((solution, i) => (
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
            className="mt-16 p-8 sm:p-12 border text-center" style={{ borderColor: 'var(--border-faint)', background: 'linear-gradient(to right, var(--bg-elevated), var(--bg-card))' }}
          >
            <h3 className="text-2xl sm:text-3xl font-accent font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Ready to Transform Your Heritage Brand?
            </h3>
            <p className="mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              We specialize in building premium e-commerce experiences for artisanal and heritage brands. 30+ premium Indian brands trust us with their digital transformation, achieving an average 150% conversion lift.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 font-accent font-bold transition-all" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}>
                Schedule Consultation
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
            {results.map((result, index) => {
              const Icon = result.Icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={resultsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 border transition-all group" style={{ borderColor: 'var(--border-faint)', backgroundColor: 'var(--bg-elevated)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-card)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'}
                >
                  <Icon className="w-8 h-8 mb-4" style={{ color: 'var(--text-muted)' }} />
                  <div className="text-5xl font-accent font-black mb-2" style={{ color: 'var(--text-primary)' }}>{result.metric}</div>
                  <div className="font-light" style={{ color: 'var(--text-muted)' }}>{result.label}</div>
                </motion.div>
              );
            })}
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
                    <div className="w-16 h-16 border-2 flex items-center justify-center" style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-medium)' }}>
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
                          <span key={i} className="text-xs border px-3 py-1" style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-medium)', color: 'var(--text-muted)' }}>
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
            className="mt-16 p-8 border text-center" style={{ borderColor: 'var(--border-faint)', backgroundColor: 'var(--bg-elevated)' }}
          >
            <p className="mb-6" style={{ color: 'var(--text-muted)' }}>Ready to build a world-class e-commerce experience for your heritage brand?</p>
            <Link href="/contact">
              <button className="px-8 py-3 font-accent font-bold transition-all inline-flex items-center gap-2" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}>
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
            className="mb-8 relative w-full overflow-hidden border" style={{ borderColor: 'var(--border-faint)', backgroundColor: 'var(--bg-elevated)' }}
          >
            <Image
              src="/portfolio-images-work/search_desktop.png"
              alt="Aryan Store Search Overview"
              width={1920}
              height={1080}
              className="w-full h-auto block"
            />
          </motion.div>

          {/* Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {['/portfolio-images-work/product_detail.png', '/portfolio-images-work/checkout_desktop.png'].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="relative w-full overflow-hidden border flex items-start" style={{ borderColor: 'var(--border-faint)', backgroundColor: 'var(--bg-elevated)' }}
              >
                <Image
                  src={img}
                  alt={idx === 0 ? 'Aryan Store Product Detail' : 'Aryan Store Checkout'}
                  width={960}
                  height={1080}
                  className="w-full h-auto block rounded-none"
                />
              </motion.div>
            ))}
          </div>

          {/* Three Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {['/portfolio-images-work/mobile_home.png', '/portfolio-images-work/search_home.png', '/portfolio-images-work/payment_home.png'].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="relative w-full overflow-hidden border flex items-start" style={{ borderColor: 'var(--border-faint)', backgroundColor: 'var(--bg-elevated)' }}
              >
                <Image
                  src={img}
                  alt={idx === 0 ? 'Aryan Store Mobile Home' : idx === 1 ? 'Aryan Store Search' : 'Aryan Store Payment'}
                  width={640}
                  height={1280}
                  className="w-full h-auto block rounded-none"
                />
              </motion.div>
            ))}
          </div>

          {/* Full Width Admin Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-8 relative w-full overflow-hidden border" style={{ borderColor: 'var(--border-faint)', backgroundColor: 'var(--bg-elevated)' }}
          >
            <Image
              src="/portfolio-images-work/admin_desktop.png"
              alt="Aryan Store Admin Dashboard"
              width={1920}
              height={1080}
              className="w-full h-auto block rounded-none"
            />
          </motion.div>
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
                <Star key={i} className="w-6 h-6 fill-current" style={{ color: 'var(--text-primary)' }} />
              ))}
            </div>
            <p className="text-2xl sm:text-3xl font-light leading-relaxed mb-8" style={{ color: 'var(--text-primary)' }}>
              "The new site completely changed how our independent brand is perceived online. Our checkout issues disappeared overnight, and our customers frequently tell us how much they love browsing our collections now. It gave us the professional foundation we needed to actually start growing."
            </p>
            <div>
              <p className="text-lg font-accent font-bold" style={{ color: 'var(--text-primary)' }}>Rahul Verma</p>
              <p style={{ color: 'var(--text-muted)' }}>Operations Manager, Aryan Store</p>
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
                <button className="px-8 sm:px-12 py-4 font-accent font-bold transition-all" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}>
                  Start Your Project
                </button>
              </Link>
              <Link href="/work">
                <button className="px-8 sm:px-12 py-4 border font-accent font-bold transition-all" style={{ borderColor: 'var(--border-light)', color: 'var(--text-primary)' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-medium)'; e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
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


