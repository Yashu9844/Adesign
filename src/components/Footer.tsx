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
    <footer ref={footerRef} className="relative w-full bg-black overflow-hidden">
      {/* Large Marquee Text */}
      <div
        ref={marqueeRef}
        className="relative py-12 sm:py-16 md:py-20 border-y border-white/10 overflow-hidden"
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
            className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none z-0 transition-opacity duration-300"
            style={{
              left: mousePos.x - 192,
              top: mousePos.y - 192,
            }}
          />
        )}
        {/* Subtle fade overlay on edges */}
        <div className="absolute inset-y-0 left-0 w-32 sm:w-48 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 sm:w-48 bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none z-10" />
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
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
                  <span className="text-white text-2xl sm:text-3xl font-bold font-accent group-hover:scale-110 transition-transform duration-300">
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
              className="text-base sm:text-xl md:text-2xl text-white/85 font-light leading-relaxed max-w-md"
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
                className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm md:text-base">hello@agency.com</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
              <a
                href="tel:+15551234567"
                className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm md:text-base">+1 (555) 123-4567</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
              <div className="flex items-center gap-3 text-white/50">
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
                  className="group w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center border border-white/10 text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
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
              <h4 className="text-xs md:text-sm text-white/30 tracking-[0.3em] uppercase mb-4 md:mb-6">
                Navigation
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.navigation.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300"
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
              <h4 className="text-xs md:text-sm text-white/30 tracking-[0.3em] uppercase mb-4 md:mb-6">
                Services
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300"
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
              <h4 className="text-xs md:text-sm text-white/30 tracking-[0.3em] uppercase mb-6">
                Start a Project
              </h4>
              <p className="text-xs md:text-sm text-white/50 mb-6 leading-relaxed">
                Have an idea? Let's bring it to life together.
              </p>
              <Link href="/contact">
                <button className="group w-full bg-white/5 border border-white/10 px-6 py-4 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300">
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
      <div className="relative z-10 border-t border-white/10">
        <div className="w-full max-w-480 mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xs sm:text-sm text-white/30"
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
                className="text-xs sm:text-sm text-white/30 hover:text-white/60 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <span className="text-white/10">|</span>
              <Link
                href="/terms"
                className="text-xs sm:text-sm text-white/30 hover:text-white/60 transition-colors duration-300"
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
              className="group flex items-center gap-2 text-xs sm:text-sm text-white/30 hover:text-white/60 transition-colors duration-300"
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
        <div className="text-[20vw] font-accent font-black text-white/2 leading-none text-center select-none translate-y-1/3">
          AGENCY
        </div>
      </div>
    </footer>
  );
}
