'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const footerLinks = {
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Web Design', href: '/services#design' },
    { label: 'Development', href: '/services#development' },
    { label: 'Brand Strategy', href: '/services#strategy' },
    { label: 'UX Design', href: '/services#ux' },
  ],
  social: [
    { label: 'GitHub', href: 'https://github.com', icon: Github },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { label: 'Twitter', href: 'https://twitter.com', icon: Twitter },
    { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  ],
};

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMarqueeHovered, setIsMarqueeHovered] = useState(false);
  const currentYear = new Date().getFullYear();

  useGSAP(() => {
    if (!marqueeRef.current) return;

    const marqueeInner = marqueeRef.current.querySelector('.marquee-inner');
    if (!marqueeInner) return;

    gsap.to(marqueeInner, {
      xPercent: -50,
      duration: 30,
      ease: 'none',
      repeat: -1,
    });
  });

  return (
    <footer ref={footerRef} className="relative w-full overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Large Marquee Text */}
      <div
        ref={marqueeRef}
        className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
        style={{ borderTopColor: 'var(--border-medium)', borderBottomColor: 'var(--border-medium)' }}
        onMouseEnter={() => setIsMarqueeHovered(true)}
        onMouseLeave={() => setIsMarqueeHovered(false)}
        onMouseMove={(e) => {
          const rect = marqueeRef.current?.getBoundingClientRect();
          if (rect) {
            setMousePos({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            });
          }
        }}
      >
        {/* Glow effect on hover */}
        {isMarqueeHovered && (
          <div
            className="absolute w-96 h-96 rounded-full blur-3xl pointer-events-none z-0 transition-opacity duration-300"
            style={{
              left: mousePos.x - 192,
              top: mousePos.y - 192,
              backgroundColor: 'var(--bg-card)',
            }}
          />
        )}
        {/* Subtle fade overlay on edges */}
        <div className="absolute inset-y-0 left-0 w-32 sm:w-48 pointer-events-none z-10" style={{ backgroundImage: 'linear-gradient(to right, var(--bg-primary), transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-32 sm:w-48 pointer-events-none z-10" style={{ backgroundImage: 'linear-gradient(to left, var(--bg-primary), transparent)' }} />
        <div className="marquee-inner flex whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-[15vw] sm:text-[12vw] md:text-[10vw] font-accent font-black text-transparent stroke-text mx-8 select-none"
              style={{
                WebkitTextStroke: '2px rgba(255,255,255,0.25)',
              }}
            >
              LET'S WORK TOGETHER
            </span>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 w-full max-w-480 mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-8 lg:gap-8">
          {/* Left Column - Brand & Contact */}
          <div className="lg:col-span-5 md:col-span-2 space-y-6 md:space-y-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="inline-block group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transition-all duration-300" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-medium)' }} onMouseEnter={(e) => { e.style.backgroundColor = 'var(--bg-card-hover)'; e.style.borderColor = 'var(--border-light)'; }} onMouseLeave={(e) => { e.style.backgroundColor = 'var(--bg-card)'; e.style.borderColor = 'var(--border-medium)'; }}>
                  <span className="text-2xl sm:text-3xl font-bold font-accent group-hover:scale-110 transition-transform duration-300" style={{ color: 'var(--text-primary)' }}>
                    A
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-xl md:text-2xl font-light leading-relaxed max-w-md"
              style={{ color: 'var(--text-secondary)' }}
            >
              We design and build premium web experiences for founders & modern brands.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 pt-4"
            >
              <a
                href="mailto:hello@agency.com"
                className="group flex items-center gap-3 transition-colors duration-300"
                style={{ color: 'var(--text-subtle)' }}
                onMouseEnter={(e) => { e.style.color = 'var(--text-primary)'; }}
                onMouseLeave={(e) => { e.style.color = 'var(--text-subtle)'; }}
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm md:text-base">hello@agency.com</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
              <a
                href="tel:+15551234567"
                className="group flex items-center gap-3 transition-colors duration-300"
                style={{ color: 'var(--text-subtle)' }}
                onMouseEnter={(e) => { e.style.color = 'var(--text-primary)'; }}
                onMouseLeave={(e) => { e.style.color = 'var(--text-subtle)'; }}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm md:text-base">+1 (555) 123-4567</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
              <div className="flex items-center gap-3" style={{ color: 'var(--text-subtle)' }}>
                <MapPin className="w-4 h-4" />
                <span className="text-sm md:text-base">Bengaluru, India</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 pt-4"
            >
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-300"
                  style={{ borderColor: 'var(--border-medium)', color: 'var(--text-subtle)' }}
                  onMouseEnter={(e) => { e.style.color = 'var(--text-primary)'; e.style.borderColor = 'var(--border-light)'; e.style.backgroundColor = 'var(--bg-card)'; }}
                  onMouseLeave={(e) => { e.style.color = 'var(--text-subtle)'; e.style.borderColor = 'var(--border-medium)'; e.style.backgroundColor = 'transparent'; }}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Navigation Links */}
          <div className="lg:col-span-7 md:col-span-2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-12 md:pt-8 lg:pt-0 lg:pl-12">
            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4 md:mb-6" style={{ color: 'var(--text-30)' }}>
                Navigation
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.navigation.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 transition-colors duration-300"
                      style={{ color: 'var(--text-muted)' }}
                      onMouseEnter={(e) => { e.style.color = 'var(--text-primary)'; }}
                      onMouseLeave={(e) => { e.style.color = 'var(--text-muted)'; }}
                      onMouseEnter={() => setHoveredLink(link.label)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className="text-xs md:text-sm lg:text-base">{link.label}</span>
                      <ArrowUpRight
                        className={`w-3 h-3 transition-all duration-300 ${
                          hoveredLink === link.label
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 -translate-x-2'
                        }`}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4 md:mb-6" style={{ color: 'var(--text-30)' }}>
                Services
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 transition-colors duration-300"
                      style={{ color: 'var(--text-muted)' }}
                      onMouseEnter={(e) => { e.style.color = 'var(--text-primary)'; }}
                      onMouseLeave={(e) => { e.style.color = 'var(--text-muted)'; }}
                      onMouseEnter={() => setHoveredLink(link.label)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className="text-xs md:text-sm lg:text-base">{link.label}</span>
                      <ArrowUpRight
                        className={`w-3 h-3 transition-all duration-300 ${
                          hoveredLink === link.label
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 -translate-x-2'
                        }`}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter / CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="col-span-2 sm:col-span-1"
            >
              <h4 className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--text-30)' }}>
                Start a Project
              </h4>
              <p className="text-xs md:text-sm mb-6 leading-relaxed" style={{ color: 'var(--text-subtle)' }}>
                Have an idea? Let's bring it to life together.
              </p>
              <Link href="/contact">
                <button className="group w-full px-6 py-4 transition-all duration-300" style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-medium)', color: 'var(--text-secondary)' }} onMouseEnter={(e) => { e.style.backgroundColor = 'var(--bg-card-hover)'; e.style.borderColor = 'var(--border-light)'; e.style.color = 'var(--text-primary)'; }} onMouseLeave={(e) => { e.style.backgroundColor = 'var(--bg-card)'; e.style.borderColor = 'var(--border-medium)'; e.style.color = 'var(--text-secondary)'; }}>
                  <span className="flex items-center justify-between">
                    <span className="text-sm font-medium tracking-wider uppercase">
                      Book a Call
                    </span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </span>
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10" style={{ borderTopColor: 'var(--border-medium)' }}>
        <div className="w-full max-w-480 mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xs sm:text-sm"
              style={{ color: 'var(--text-30)' }}
            >
              © {currentYear} Agency. All rights reserved.
            </motion.p>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-6"
            >
              <Link
                href="/privacy"
                className="text-xs sm:text-sm transition-colors duration-300"
                style={{ color: 'var(--text-30)' }}
                onMouseEnter={(e) => { e.style.color = 'var(--text-muted)'; }}
                onMouseLeave={(e) => { e.style.color = 'var(--text-30)'; }}
              >
                Privacy Policy
              </Link>
              <span style={{ color: 'var(--text-very-subtle)' }}>|</span>
              <Link
                href="/terms"
                className="text-xs sm:text-sm transition-colors duration-300"
                style={{ color: 'var(--text-30)' }}
                onMouseEnter={(e) => { e.style.color = 'var(--text-muted)'; }}
                onMouseLeave={(e) => { e.style.color = 'var(--text-30)'; }}
              >
                Terms of Service
              </Link>
            </motion.div>

            {/* Back to Top */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2 text-xs sm:text-sm transition-colors duration-300"
              style={{ color: 'var(--text-30)' }}
              onMouseEnter={(e) => { e.style.color = 'var(--text-muted)'; }}
              onMouseLeave={(e) => { e.style.color = 'var(--text-30)'; }}
            >
              <span>Back to top</span>
              <svg
                className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Large decorative text at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <div className="text-[20vw] font-accent font-black leading-none text-center select-none translate-y-1/3" style={{ color: 'var(--text-25)' }}>
          AGENCY
        </div>
      </div>
    </footer>
  );
}
