'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Twitter } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const founders = [
  {
    id: 1,
    name: 'Alex Chen',
    role: 'Co-Founder & CEO',
    bio: 'Former Design Lead at Google. 10+ years crafting digital experiences for Fortune 500 companies.',
    image: '/images/testimonial1.png',
    linkedin: '#',
    twitter: '#',
    expertise: ['Strategy', 'Product Vision', 'Leadership'],
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    role: 'Co-Founder & Creative Director',
    bio: 'Award-winning designer. Previously led creative teams at Apple and Airbnb.',
    image: '/images/testimonial2.png',
    linkedin: '#',
    twitter: '#',
    expertise: ['Brand Design', 'Art Direction', 'UX Strategy'],
  },
];

const team = [
  {
    id: 3,
    name: 'Marcus Johnson',
    role: 'Lead Developer',
    image: '/images/testimonial3.png',
  },
  {
    id: 4,
    name: 'Emily Park',
    role: 'Senior Designer',
    image: '/images/testimonial4.png',
  },
  {
    id: 5,
    name: 'David Kim',
    role: 'Full-Stack Engineer',
    image: '/images/testimonial5.png',
  },
  {
    id: 6,
    name: 'Lisa Wang',
    role: 'UX Researcher',
    image: '/images/testimonial6.png',
  },
];

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [hoveredFounder, setHoveredFounder] = useState<number | null>(null);

  useGSAP(() => {
    if (!headingRef.current) return;

    const words = headingRef.current.querySelectorAll('.team-word');
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
      id="team"
      className="relative w-full py-24 sm:py-32 lg:py-40 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/[0.02] to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div ref={headingRef} className="mb-16 sm:mb-20 md:mb-24 lg:mb-32 text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6 sm:mb-8"
          >
            <div className="w-12 sm:w-16 h-px" style={{ backgroundColor: 'var(--line-secondary)' }} />
            <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase font-light" style={{ color: 'var(--text-subtle)' }}>
              The Team
            </span>
            <div className="w-12 sm:w-16 h-px" style={{ backgroundColor: 'var(--line-secondary)' }} />
          </motion.div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-accent font-black leading-[0.95] tracking-[-0.02em]" style={{ color: 'var(--text-primary)' }}>
            <span className="team-word inline-block mr-4 sm:mr-6">Led</span>
            <span className="team-word inline-block mr-4 sm:mr-6">By</span>
            <span className="team-word inline-block mr-4 sm:mr-6">The</span>
            <br className="hidden sm:block" />
            <span className="team-word inline-block" style={{ color: 'var(--text-subtle)' }}>Founders</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 sm:mt-8 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'var(--text-subtle)' }}
          >
            A tight-knit team of strategists, designers, and engineers who are passionate about
            creating work that matters.
          </motion.p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-16 md:mb-20 lg:mb-28">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              onMouseEnter={() => setHoveredFounder(founder.id)}
              onMouseLeave={() => setHoveredFounder(null)}
              className="group relative"
            >
              <div className="relative overflow-hidden transition-all duration-500" style={{ backgroundColor: 'var(--bg-elevated)', borderWidth: '1px', borderColor: 'var(--border-medium)' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-medium)'; }}>
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <motion.img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    animate={{
                      scale: hoveredFounder === founder.id ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Social Links - Appear on Hover */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a
                      href={founder.linkedin}
                      className="w-10 h-10 flex items-center justify-center backdrop-blur-md transition-all duration-300"
                      style={{ backgroundColor: 'var(--bg-glass)', borderWidth: '1px', borderColor: 'var(--border-light)', color: 'var(--text-muted)' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--border-light)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border-light)'; }}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={founder.twitter}
                      className="w-10 h-10 flex items-center justify-center backdrop-blur-md transition-all duration-300"
                      style={{ backgroundColor: 'var(--bg-glass)', borderWidth: '1px', borderColor: 'var(--border-light)', color: 'var(--text-muted)' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--border-light)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border-light)'; }}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  {/* Name & Role */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-accent font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                    {founder.name}
                  </h3>
                  <p className="text-sm sm:text-base mb-4" style={{ color: 'var(--text-subtle)' }}>{founder.role}</p>

                  {/* Bio */}
                  <p className="text-sm font-light leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                    {founder.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {founder.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-[11px] sm:text-xs tracking-wide"
                        style={{ color: 'var(--text-muted)', backgroundColor: 'var(--bg-elevated)', borderWidth: '1px', borderColor: 'var(--border-faint)' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Grid */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl font-accent font-bold mb-8 sm:mb-12 text-center"
            style={{ color: 'var(--text-light)' }}
          >
            The Extended Team
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group text-center"
              >
                {/* Image */}
                <div className="relative aspect-square mb-4 overflow-hidden" style={{ backgroundColor: 'var(--bg-elevated)' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 transition-all duration-500" style={{ backgroundColor: 'var(--bg-overlay)' }} />
                </div>

                {/* Info */}
                <h4 className="text-sm sm:text-base font-medium mb-1" style={{ color: 'var(--text-primary)' }}>{member.name}</h4>
                <p className="text-xs sm:text-sm" style={{ color: 'var(--text-subtle)' }}>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
