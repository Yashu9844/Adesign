'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    number: '01',
    title: 'Web Design',
    shortTitle: 'Design',
    description:
      'We craft visually stunning, user-centered designs that capture your brand essence and convert visitors into customers.',
    capabilities: [
      'UI/UX Design',
      'Landing Pages',
      'Design Systems',
      'Responsive Design',
      'Prototyping',
    ],
    accent: 'from-blue-500/20 to-purple-500/20',
    href: '/services/web-design',
  },
  {
    id: 2,
    number: '02',
    title: 'Web Development',
    shortTitle: 'Development',
    description:
      'From custom web applications to e-commerce platforms, we build performant, scalable solutions with cutting-edge technology.',
    capabilities: [
      'React & Next.js',
      'Full-Stack Apps',
      'API Integration',
      'Performance',
      'E-commerce',
    ],
    accent: 'from-emerald-500/20 to-cyan-500/20',
    href: '/services/web-development',
  },
  {
    id: 3,
    number: '03',
    title: 'Brand Strategy',
    shortTitle: 'Strategy',
    description:
      'We help you define your brand identity, positioning, and voice to create meaningful connections with your audience.',
    capabilities: [
      'Brand Identity',
      'Visual Systems',
      'Content Strategy',
      'Market Research',
      'Guidelines',
    ],
    accent: 'from-orange-500/20 to-rose-500/20',
    href: '/services/brand-strategy',
  },
];

export default function WhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  useGSAP(() => {
    if (!headingRef.current) return;

    const words = headingRef.current.querySelectorAll('.service-word');
    gsap.fromTo(
      words,
      { opacity: 0.3, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full bg-black py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full bg-linear-to-br from-white/2 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-480 mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div ref={headingRef} className="mb-16 sm:mb-20 md:mb-28 lg:mb-32">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6 sm:mb-8"
          >
            <div className="w-12 sm:w-16 h-px bg-white/40" />
            <span className="text-[11px] sm:text-xs text-white/50 tracking-[0.3em] uppercase font-light">
              Our Services
            </span>
          </motion.div>

          {/* Main Heading - Split Layout */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-accent text-white font-black leading-[0.95] tracking-[-0.02em]">
              <span className="service-word inline-block mr-4 sm:mr-6">What</span>
              <span className="service-word inline-block mr-4 sm:mr-6">We</span>
              <br className="hidden sm:block" />
              <span className="service-word inline-block text-white/40">Do</span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-white/50 font-light leading-relaxed max-w-md lg:text-right"
            >
              We specialize in creating digital experiences that are both
              beautiful and functional, driving real business results.
            </motion.p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative"
            >
              <Link href={service.href} className="block h-full">
                {/* Card */}
                <div className="relative h-full bg-white/2 border border-white/10 p-6 sm:p-8 lg:p-10 hover:bg-white/4 hover:border-white/20 transition-all duration-500 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Number */}
                    <span className="block text-5xl sm:text-6xl lg:text-7xl font-accent font-black text-white/[0.07] group-hover:text-white/12 transition-colors duration-500 mb-6 sm:mb-8">
                      {service.number}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-accent font-bold text-white mb-4 group-hover:translate-x-1 transition-transform duration-500">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-white/50 font-light leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Capabilities */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="px-3 py-1.5 text-[11px] sm:text-xs text-white/60 bg-white/5 border border-white/10 tracking-wide"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-3 text-white/70 group-hover:text-white transition-colors duration-300">
                      <span className="text-xs sm:text-sm font-medium tracking-widest uppercase">
                        Learn More
                      </span>
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-4 right-4 w-6 h-px bg-white/40" />
                    <div className="absolute top-4 right-4 w-px h-6 bg-white/40" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 sm:mt-20 md:mt-28 pt-12 sm:pt-16 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '50+', label: 'Projects Delivered' },
              { value: '30+', label: 'Happy Clients' },
              { value: '100%', label: 'On-Time Delivery' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center md:text-left"
              >
                <span className="block text-3xl sm:text-4xl md:text-5xl font-accent font-bold text-white mb-2">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-white/40 tracking-wide uppercase">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
