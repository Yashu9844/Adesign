'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';

const packages = [
  { name: 'Portfolio Website', price: '12,000' },
  { name: 'Business Website', price: '25,000', popular: true },
  { name: 'E-commerce Store', price: '45,000' },
  { name: 'SaaS / Web App', price: '75,000' },
  { name: 'Mobile App', price: '60,000' },
  { name: 'AI Automation', price: '35,000' },
];

export default function PricingPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span
              className="text-xs tracking-[0.3em] uppercase mb-4 block"
              style={{ color: 'var(--text-subtle)' }}
            >
              Pricing
            </span>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-accent font-bold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Simple
              <span style={{ color: 'var(--text-subtle)' }}> Pricing</span>
            </h2>
            <p
              className="text-lg mb-8 max-w-md"
              style={{ color: 'var(--text-muted)' }}
            >
              Transparent pricing for every project. No hidden fees, no surprises.
            </p>

            {/* Guarantee */}
            <div className="flex items-center gap-3 mb-8">
              <Check className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--text-primary)' }}>Deadline Guarantee</span> — Miss the deadline, you don't pay
              </p>
            </div>

            {/* CTA Links */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pricing">
                <button
                  className="px-6 py-3 text-sm font-medium tracking-wider flex items-center gap-2 transition-all"
                  style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}
                >
                  View Detailed Pricing
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/contact">
                <button
                  className="px-6 py-3 text-sm font-medium tracking-wider flex items-center gap-2 border transition-all"
                  style={{ borderColor: 'var(--border-medium)', color: 'var(--text-primary)' }}
                >
                  Get Custom Quote
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right: Package List */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-0">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                  className="border-b py-5 flex items-center justify-between"
                  style={{ borderColor: 'var(--border-faint)' }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="text-lg font-accent font-semibold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {pkg.name}
                    </span>
                    {pkg.popular && (
                      <span
                        className="text-[9px] px-1.5 py-0.5 font-bold tracking-wider"
                        style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}
                      >
                        POPULAR
                      </span>
                    )}
                  </div>
                  <span
                    className="text-lg font-accent font-bold"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    ₹{pkg.price}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Starting at note */}
            <p className="mt-4 text-xs" style={{ color: 'var(--text-subtle)' }}>
              * Starting prices · 6 months free maintenance included
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
