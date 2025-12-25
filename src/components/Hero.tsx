'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import ClientMarquee from './ClientMarquee';
import ScrollIndicator from './ScrollIndicator';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="/images/hero-poster.webp"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundColor: 'var(--bg-overlay)' }}></div>

      {/* Bottom Gradient Fade to blend into next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 sm:h-48 lg:h-64 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to bottom, transparent, var(--bg-primary))' }}></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-start justify-center md:items-center">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-16 md:pb-8 lg:pb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-6 lg:gap-12 items-start lg:items-center">
            
            {/* Main Content - Left Side */}
            <div className="md:col-span-2 lg:col-span-8 space-y-4 sm:space-y-6 md:space-y-6 lg:space-y-8">
              
              {/* Small Label */}
              <div className="flex items-center gap-3">
                <div className="w-8 sm:w-12 h-[1px]" style={{ backgroundColor: 'var(--line-primary)' }}></div>
                <span className="text-xs sm:text-sm tracking-[0.25em] uppercase font-light" style={{ color: 'var(--text-muted)' }}>Design-Led Agency</span>
              </div>
              
              {/* Massive Heading - Fluid Typography with clamp() */}
              <div>
                <h1 
                  className="font-accent font-black leading-[0.85] tracking-[-0.02em]"
                  style={{ fontSize: 'clamp(2.25rem, 6.5vw, 7rem)', color: 'var(--text-primary)' }}
                >
                  WE DESIGN
                </h1>
                <h1 
                  className="font-accent font-black leading-[0.85] tracking-[-0.02em] mt-1 sm:mt-2"
                  style={{ fontSize: 'clamp(2.25rem, 6.5vw, 7rem)', color: 'var(--text-subtle)' }}
                >
                  WEB EXPERIENCES
                </h1>
              </div>
              
              {/* Tagline - Fluid */}
              <div className="max-w-xl">
              <p 
                  className="font-light leading-relaxed"
                  style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.25rem)', color: 'var(--text-secondary)' }}
                >
                  Transforming ideas into powerful digital solutions through
                  <span className="font-normal" style={{ color: 'var(--text-primary)' }}> innovative design</span> and
                  <span className="font-normal" style={{ color: 'var(--text-primary)' }}> clean code</span>
                </p>
              </div>
              
              {/* CTA Button - Accessible sizing (min 44px touch target, min 12px text) */}
              <div className="mt-2 sm:mt-4">
                <Link href="/contact">
                  <button className="group relative px-6 sm:px-8 py-3 sm:py-4 border-2 transition-all duration-500 overflow-hidden min-h-[44px]" style={{ backgroundColor: 'transparent', color: 'var(--text-primary)', borderColor: 'var(--text-primary)' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--cta-primary)'; e.currentTarget.style.color = 'var(--cta-primary-text)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--text-primary)'; }}>
                    <span className="relative z-10 flex items-center gap-2.5">
                      <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase">Book a Call</span>
                      <svg className="w-4 h-4 transform group-hover:rotate-45 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Right Column - Stats/Info */}
            <div className="md:col-span-2 lg:col-span-4 space-y-4 md:space-y-6 lg:space-y-8">
              {/* Stats - Fluid typography */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                <div className="space-y-1 md:space-y-1.5">
                  <div 
                    className="font-bold"
                    style={{ fontSize: 'clamp(1.5rem, 3.5vw, 3rem)', color: 'var(--text-primary)' }}
                  >
                    50+
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-xs tracking-wider uppercase" style={{ color: 'var(--text-60)' }}>Projects</div>
                </div>
                <div className="space-y-1 md:space-y-1.5">
                  <div 
                    className="font-bold"
                    style={{ fontSize: 'clamp(1.5rem, 3.5vw, 3rem)', color: 'var(--text-primary)' }}
                  >
                    100%
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-xs tracking-wider uppercase" style={{ color: 'var(--text-60)' }}>On Time</div>
                </div>
              </div>
              
              {/* Social Icons & Specialization */}
              <div className="space-y-5 sm:space-y-6 lg:space-y-8">
                <div className="flex items-center gap-3 sm:gap-4">
                  <a
                    href="https://github.com/Yashu9844"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="group flex items-center justify-center w-10 h-10 rounded-xl border transition-all duration-300 hover:scale-105 hover:ring-1"
                    style={{ borderColor: 'var(--border-medium)', backgroundColor: 'var(--bg-glass)', color: 'var(--text-light)', ringColor: 'var(--border-light)' }}
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="group flex items-center justify-center w-10 h-10 rounded-xl border transition-all duration-300 hover:scale-105 hover:ring-1"
                    style={{ borderColor: 'var(--border-medium)', backgroundColor: 'var(--bg-glass)', color: 'var(--text-light)', ringColor: 'var(--border-light)' }}
                  >
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href="mailto:hello@agency.com"
                    aria-label="Email"
                    className="group flex items-center justify-center w-10 h-10 rounded-xl border transition-all duration-300 hover:scale-105 hover:ring-1"
                    style={{ borderColor: 'var(--border-medium)', backgroundColor: 'var(--bg-glass)', color: 'var(--text-light)', ringColor: 'var(--border-light)' }}
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <div className="h-px flex-1" style={{ backgroundColor: 'var(--border-medium)' }}></div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-subtle)' }}>What We Do</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                    <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>Web Design</p>
                    <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>Development</p>
                    <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>UX Strategy</p>
                    <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>Brand Systems</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <ScrollIndicator />
      
      {/* Client marquee at bottom of hero */}
      <div className="absolute left-0 right-0 z-20" style={{ bottom: '-20px' }}>
        <ClientMarquee />
      </div>
    </section>
  );
}
