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
      className="relative w-full bg-black py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-linear-to-bl from-white/[0.02] to-transparent pointer-events-none" />

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
            <div className="w-12 sm:w-16 h-px bg-white/40" />
            <span className="text-[11px] sm:text-xs text-white/50 tracking-[0.3em] uppercase font-light">
              The Team
            </span>
            <div className="w-12 sm:w-16 h-px bg-white/40" />
          </motion.div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-accent text-white font-black leading-[0.95] tracking-[-0.02em]">
            <span className="team-word inline-block mr-4 sm:mr-6">Led</span>
            <span className="team-word inline-block mr-4 sm:mr-6">By</span>
            <span className="team-word inline-block mr-4 sm:mr-6">The</span>
            <br className="hidden sm:block" />
            <span className="team-word inline-block text-white/40">Founders</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 sm:mt-8 text-base sm:text-lg text-white/50 font-light leading-relaxed max-w-2xl mx-auto"
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
              <div className="relative bg-white/[0.02] border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500">
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
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

                  {/* Social Links - Appear on Hover */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a
                      href={founder.linkedin}
                      className="w-10 h-10 flex items-center justify-center bg-black/50 backdrop-blur-md border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={founder.twitter}
                      className="w-10 h-10 flex items-center justify-center bg-black/50 backdrop-blur-md border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all duration-300"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  {/* Name & Role */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-accent font-bold text-white mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-sm sm:text-base text-white/50 mb-4">{founder.role}</p>

                  {/* Bio */}
                  <p className="text-sm text-white/40 font-light leading-relaxed mb-6">
                    {founder.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {founder.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-[11px] sm:text-xs text-white/60 bg-white/5 border border-white/10 tracking-wide"
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
            className="text-xl sm:text-2xl font-accent font-bold text-white/60 mb-8 sm:mb-12 text-center"
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
                <div className="relative aspect-square mb-4 overflow-hidden bg-white/5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
                </div>

                {/* Info */}
                <h4 className="text-sm sm:text-base font-medium text-white mb-1">{member.name}</h4>
                <p className="text-xs sm:text-sm text-white/40">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
