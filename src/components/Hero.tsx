'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import ClientMarquee from './ClientMarquee';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>

      {/* Bottom Gradient Fade to blend into next section */}
      <div className="absolute inset-x-0 bottom-0 h-20 sm:h-32 md:h-48 lg:h-64 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-start justify-center md:items-center">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-16 md:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-center">
            
            {/* Main Content - Left Side */}
            <div className="lg:col-span-8 space-y-3 sm:space-y-6 md:space-y-10">
              
              {/* Small Label */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 sm:w-12 h-[1px] bg-white/60"></div>
                <span className="text-[10px] sm:text-sm text-white/70 tracking-[0.25em] uppercase font-light">Design-Led Agency</span>
              </div>
              
              {/* Massive Name */}
              <div>
                <h1 className="text-[2.75rem] leading-[0.85] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-accent text-white font-black sm:leading-[0.9] tracking-[-0.02em]">
                  WE DESIGN
                </h1>
                <h1 className="text-[2.75rem] leading-[0.85] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-accent text-white/40 font-black sm:leading-[0.9] tracking-[-0.02em] mt-1 sm:mt-2">
                  WEB EXPERIENCES
                </h1>
              </div>
              
              {/* Tagline */}
              <div className="max-w-2xl">
                <p className="text-sm leading-[1.4] sm:text-xl md:text-2xl lg:text-3xl text-white/80 font-light sm:leading-relaxed">
                  Transforming ideas into powerful digital solutions through
                  <span className="text-white font-normal"> innovative design</span> and
                  <span className="text-white font-normal"> clean code</span>
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="mt-1 sm:mt-3 md:mt-4">
                <Link href="/contact">
                  <button className="group relative bg-transparent text-white px-6 sm:px-10 py-3 sm:py-5 border-2 border-white transition-all duration-500 hover:bg-white hover:text-black hover:cursor-pointer overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                      <span className="text-[11px] sm:text-base font-medium tracking-[0.2em] uppercase">Book a Call</span>
                      <svg className="w-4 sm:w-5 h-4 sm:h-5 transform group-hover:rotate-45 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Right Column - Stats/Info */}
            <div className="lg:col-span-4 space-y-5 sm:space-y-8 lg:space-y-10">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-white">50+</div>
                  <div className="text-[10px] sm:text-sm text-white/60 tracking-wider uppercase">Projects</div>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-white">100%</div>
                  <div className="text-[10px] sm:text-sm text-white/60 tracking-wider uppercase">On Time</div>
                </div>
              </div>
              
              {/* Social Icons & Specialization */}
              <div className="space-y-4 sm:space-y-6 md:space-y-7 lg:space-y-8">
                <div className="flex items-center gap-2 sm:gap-4 md:gap-5">
                  <a
                    href="https://github.com/Yashu9844"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl border border-white/10 bg-black/60 text-white/80 hover:text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:ring-1 ring-white/20"
                  >
                    <Github className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl border border-white/10 bg-black/60 text-white/80 hover:text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:ring-1 ring-white/20"
                  >
                    <Linkedin className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href="mailto:hello@agency.com"
                    aria-label="Email"
                    className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl border border-white/10 bg-black/60 text-white/80 hover:text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:ring-1 ring-white/20"
                  >
                    <Mail className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  </a>
                  <div className="h-px flex-1 bg-white/20"></div>
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <p className="text-[10px] sm:text-xs text-white/50 tracking-widest uppercase">What We Do</p>
                  <div className="grid grid-cols-2 gap-x-3 sm:gap-x-4 gap-y-1 sm:gap-y-2">
                    <p className="text-xs sm:text-base text-white/90 leading-relaxed">Web Design</p>
                    <p className="text-xs sm:text-base text-white/90 leading-relaxed">Development</p>
                    <p className="text-xs sm:text-base text-white/90 leading-relaxed">UX Strategy</p>
                    <p className="text-xs sm:text-base text-white/90 leading-relaxed">Brand Systems</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Client marquee at bottom of hero */}
      <div className="absolute left-0 right-0 z-20" style={{ bottom: '-20px' }}>
        <ClientMarquee />
      </div>
    </section>
  );
}
