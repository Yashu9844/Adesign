'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Lumina',
    subtitle: 'E-Commerce Platform',
    description: 'A premium shopping experience with seamless checkout and personalized recommendations.',
    image: '/images/pimg1.webp',
    category: 'Web Development',
    year: '2024',
    results: '+156% Conversion Rate',
    href: '/work/lumina',
  },
  {
    id: 2,
    title: 'Horizon',
    subtitle: 'SaaS Dashboard',
    description: 'Analytics platform that transforms complex data into actionable insights.',
    image: '/images/pimg2.webp',
    category: 'Product Design',
    year: '2024',
    results: '50K+ Active Users',
    href: '/work/horizon',
  },
  {
    id: 3,
    title: 'Vertex',
    subtitle: 'Brand Identity',
    description: 'Complete brand overhaul for a fintech startup disrupting traditional banking.',
    image: '/images/pimg3.webp',
    category: 'Branding',
    year: '2024',
    results: '$2.5M Seed Raised',
    href: '/work/vertex',
  },
];

export default function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  useGSAP(() => {
    if (!headingRef.current) return;

    // Animate heading words
    const words = headingRef.current.querySelectorAll('.work-word');
    gsap.fromTo(
      words,
      { opacity: 0.3, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
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
      id="work"
      className="relative w-full py-24 sm:py-32 lg:py-40 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 w-full max-w-480 mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div ref={headingRef} className="mb-16 sm:mb-20 md:mb-24 lg:mb-36">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6 sm:mb-8"
          >
            <div className="w-12 sm:w-16 h-px" style={{ backgroundColor: 'var(--line-secondary)' }} />
            <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase font-light" style={{ color: 'var(--text-subtle)' }}>
              Featured Projects
            </span>
          </motion.div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-accent font-black leading-[0.95] tracking-[-0.02em]" style={{ color: 'var(--text-primary)' }}>
            <span className="work-word inline-block mr-4 sm:mr-6">Selected</span>
            <span className="work-word inline-block" style={{ color: 'var(--text-subtle)' }}>Work</span>
          </h2>

          {/* Subtext */}
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl"
            style={{ color: 'var(--text-light)' }}
          >
            A collection of projects where design meets purpose. Each one crafted to solve real problems and drive measurable results.
          </motion.p>
        </div>

        {/* Projects Grid - Asymmetric Layout */}
        <div className="space-y-6 sm:space-y-8 md:space-y-8 lg:space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group relative flex flex-col ${
                index % 2 === 0
                  ? 'lg:flex-row'
                  : 'lg:flex-row-reverse'
              } gap-6 md:gap-8 lg:gap-12`}
            >
              {/* Image Container */}
              <Link
                href={project.href}
                className="relative block w-full md:w-full lg:w-[65%] aspect-16/10 overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: hoveredProject === project.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 transition-all duration-500" style={{ backgroundColor: 'var(--bg-overlay)' }} onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.5'; }} onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }} />

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 left-4 w-8 h-px" style={{ backgroundColor: 'var(--line-primary)' }} />
                  <div className="absolute top-4 left-4 w-px h-8" style={{ backgroundColor: 'var(--line-primary)' }} />
                </div>
                <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 right-4 w-8 h-px" style={{ backgroundColor: 'var(--line-primary)' }} />
                  <div className="absolute bottom-4 right-4 w-px h-8" style={{ backgroundColor: 'var(--line-primary)' }} />
                </div>

                {/* View Project Indicator */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                >
                  <div className="flex items-center gap-3 text-sm tracking-widest uppercase" style={{ color: 'var(--text-primary)' }}>
                    <span>View Project</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
                </motion.div>
              </Link>

              {/* Content */}
              <div
                className={`w-full md:w-full lg:w-[35%] flex flex-col justify-center py-4 md:py-6 lg:py-0 ${
                  index % 2 === 0 ? 'lg:pl-4' : 'lg:pr-4'
                }`}
              >
                {/* Category & Year */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[11px] sm:text-xs tracking-widest uppercase" style={{ color: 'var(--text-subtle)' }}>
                    {project.category}
                  </span>
                  <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--border-medium)' }} />
                  <span className="text-[11px] sm:text-xs tracking-widest" style={{ color: 'var(--text-subtle)' }}>
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-accent font-bold leading-tight mb-2" style={{ color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl font-light mb-4" style={{ color: 'var(--text-muted)' }}>
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base font-light leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                  {project.description}
                </p>

                {/* Results Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 w-fit" style={{ backgroundColor: 'var(--bg-elevated)', borderWidth: '1px', borderColor: 'var(--border-medium)' }}>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#10B981', opacity: 0.8 }} />
                  <span className="text-xs sm:text-sm tracking-wide" style={{ color: 'var(--text-muted)' }}>
                    {project.results}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Work CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-16 sm:mt-20 md:mt-28"
        >
          <Link href="/work">
          <button className="group relative px-8 sm:px-12 py-4 sm:py-5 transition-all duration-500 overflow-hidden" style={{ backgroundColor: 'transparent', color: 'var(--text-primary)', borderWidth: '1px', borderColor: 'var(--border-medium)' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--text-primary)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-medium)'; }}>
            <span className="relative z-10 flex items-center gap-3">
                <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase">
                  View All Projects
                </span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" style={{ backgroundColor: 'var(--text-primary)' }} />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
