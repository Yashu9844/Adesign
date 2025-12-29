'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Animated divider component
const SectionSeparator = () => (
  <div className="w-full h-px my-16 md:my-24" style={{ background: 'linear-gradient(to right, transparent, var(--border-medium), transparent)' }} />
);

// Media section with hover effect
const MediaSection = ({ imageSrc, alt }: { imageSrc: string; alt: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative w-full overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{ scale: isHovered ? 1.03 : 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Image
          src={imageSrc}
          alt={alt}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </motion.div>
      {/* Subtle overlay on hover */}
      <div 
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{ 
          background: 'linear-gradient(to top, var(--bg-primary), transparent)',
          opacity: isHovered ? 0.3 : 0 
        }}
      />
    </div>
  );
};

// Text section with animated reveal
const TextSection = ({ paragraphs }: { paragraphs: string[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <div ref={ref} className="my-12 md:my-16">
      <div className="space-y-5">
        {paragraphs.map((paragraph, index) => (
          <motion.p 
            key={index} 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className="text-base md:text-lg lg:text-xl leading-relaxed font-kh-teka"
            style={{ color: 'var(--text-secondary)' }}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

// Information section with side label
const InformationSection = ({ title, paragraphs }: { title: string; paragraphs: string[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
      <motion.div 
        className="lg:col-span-3"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-lg font-medium font-kh-teka" style={{ color: 'var(--text-primary)' }}>
          {title}
        </h2>
      </motion.div>
      <div className="lg:col-span-9">
        <div className="space-y-5">
          {paragraphs.map((paragraph, index) => (
            <motion.p 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="text-base md:text-lg leading-relaxed font-kh-teka"
              style={{ color: 'var(--text-secondary)' }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};

// Process/How We Work Section
const ProcessSection = () => {
  const processRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(processRef, { once: true, amount: 0.2 });

  const phases = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Understanding your brand, goals, and audience through deep research and strategic workshops.',
      activities: ['Brand Discovery', 'User Research', 'Competitive Analysis', 'Goal Setting'],
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Defining the roadmap, positioning, and creative direction that will set your brand apart.',
      activities: ['Brand Strategy', 'Content Strategy', 'UX Strategy', 'Technical Planning'],
    },
    {
      number: '03',
      title: 'Design',
      description: 'Crafting stunning visuals and intuitive experiences that captivate and convert.',
      activities: ['Visual Design', 'UI/UX Design', 'Prototyping', 'Design Systems'],
    },
    {
      number: '04',
      title: 'Build & Launch',
      description: 'Bringing designs to life with clean, scalable code and seamless deployment.',
      activities: ['Development', 'Quality Assurance', 'Launch Support', 'Performance Optimization'],
    },
  ];

  useEffect(() => {
    if (typeof window === 'undefined' || !processRef.current) return;

    const ctx = gsap.context(() => {
      // Animate timeline line
      if (timelineRef.current) {
        gsap.fromTo(
          timelineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: processRef.current,
              start: 'top 70%',
              end: 'bottom 30%',
              scrub: 1,
            },
          }
        );
      }

      // Animate each phase card
      gsap.utils.toArray('.process-phase').forEach((phase: any) => {
        gsap.fromTo(
          phase,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: phase,
              start: 'top 85%',
              end: 'top 60%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, processRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={processRef} className="my-20">
      <div className="mb-16">
        <motion.div 
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px w-8" style={{ backgroundColor: 'var(--text-subtle)' }} />
          <p className="text-xs tracking-[0.3em] uppercase font-kh-teka" style={{ color: 'var(--text-subtle)' }}>
            Process
          </p>
        </motion.div>
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl font-accent font-black mb-6"
          style={{ color: 'var(--text-primary)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          How We Work
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl font-light max-w-3xl font-kh-teka"
          style={{ color: 'var(--text-muted)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Every project is unique, but our approach remains consistent—thorough, intentional, and focused on delivering exceptional results.
        </motion.p>
      </div>

      {/* Timeline Line */}
      <div className="relative mb-20 hidden md:block">
        <div className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2" style={{ backgroundColor: 'var(--border-medium)' }} />
        <div
          ref={timelineRef}
          className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 origin-left"
          style={{ background: 'linear-gradient(to right, var(--text-subtle), var(--text-muted), var(--text-subtle))' }}
        />
      </div>

      {/* Process Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {phases.map((phase) => (
          <div key={phase.number} className="process-phase relative group">
            {/* Phase Card */}
            <div 
              className="relative p-8 transition-all duration-500"
              style={{ 
                backgroundColor: 'var(--bg-card)', 
                border: '1px solid var(--border-medium)' 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-card)';
                e.currentTarget.style.borderColor = 'var(--border-medium)';
              }}
            >
              {/* Phase Number */}
              <div 
                className="absolute -top-6 -left-6 w-14 h-14 flex items-center justify-center"
                style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-light)' }}
              >
                <span className="text-xl font-bold font-kh-teka" style={{ color: 'var(--text-muted)' }}>
                  {phase.number}
                </span>
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 
                  className="text-2xl md:text-3xl font-accent font-bold mb-4 group-hover:opacity-90 transition-colors"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {phase.title}
                </h3>
                <p 
                  className="text-base md:text-lg leading-relaxed mb-6 font-kh-teka"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {phase.description}
                </p>

                {/* Activities */}
                <div className="space-y-3">
                  {phase.activities.map((activity, actIndex) => (
                    <div
                      key={actIndex}
                      className="activity-item flex items-center gap-3 text-sm font-kh-teka"
                      style={{ color: 'var(--text-light)' }}
                    >
                      <div 
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: 'var(--text-subtle)' }}
                      />
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect Line */}
              <div 
                className="absolute bottom-0 left-0 w-full h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(to right, transparent, var(--text-subtle), transparent)' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Statement */}
      <div className="mt-16 pt-12" style={{ borderTop: '1px solid var(--border-medium)' }}>
        <p className="text-base md:text-lg leading-relaxed font-kh-teka max-w-4xl" style={{ color: 'var(--text-muted)' }}>
          Our process adapts to each project's unique needs. Whether it's a rapid sprint or an enterprise-scale engagement, we maintain our core principles: 
          <span style={{ color: 'var(--text-primary)' }} className="font-medium"> clarity in vision, precision in execution, and unwavering commitment to excellence</span>.
        </p>
      </div>
    </div>
  );
};

// Values Section
const ValuesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const values = [
    {
      title: 'Craft Over Speed',
      description: 'We believe in taking the time to get things right. Quality is never compromised for deadlines.',
    },
    {
      title: 'Partnership, Not Service',
      description: 'We work alongside you as strategic partners, invested in your success as if it were our own.',
    },
    {
      title: 'Design With Purpose',
      description: 'Every pixel, every interaction, every decision is made with intention and user impact in mind.',
    },
    {
      title: 'Transparent Always',
      description: 'No hidden agendas, no surprises. Clear communication and honest feedback at every step.',
    },
  ];

  return (
    <div ref={ref} className="my-20">
      <motion.div 
        className="flex items-center gap-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="h-px w-8" style={{ backgroundColor: 'var(--text-subtle)' }} />
        <p className="text-xs tracking-[0.3em] uppercase font-kh-teka" style={{ color: 'var(--text-subtle)' }}>
          Values
        </p>
      </motion.div>
      
      <motion.h2 
        className="text-4xl sm:text-5xl md:text-6xl font-accent font-black mb-12"
        style={{ color: 'var(--text-primary)' }}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        What We Stand For
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            className="group relative overflow-hidden rounded-none p-6 md:p-8 transition-all duration-500"
            style={{ 
              backgroundColor: 'var(--bg-card)', 
              border: '1px solid var(--border-medium)' 
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            whileHover={{ 
              borderColor: 'var(--border-light)',
              backgroundColor: 'var(--bg-card-hover)',
              y: -5,
            }}
          >
            {/* Accent bar at top */}
            <div 
              className="absolute top-0 left-0 h-1 w-full origin-left transition-all duration-500 group-hover:w-full"
              style={{ 
                background: 'linear-gradient(90deg, var(--text-primary) 0%, transparent 100%)',
              }}
            />
            
            {/* Number indicator */}
            <div 
              className="absolute top-6 right-6 text-6xl font-accent font-black opacity-5 group-hover:opacity-10 transition-opacity duration-500"
              style={{ color: 'var(--text-primary)' }}
            >
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="relative z-10">
              <h3 
                className="text-xl md:text-2xl font-accent font-bold mb-3 transition-colors duration-300"
                style={{ color: 'var(--text-primary)' }}
              >
                {value.title}
              </h3>
              <p 
                className="text-base leading-relaxed font-kh-teka transition-colors duration-300"
                style={{ color: 'var(--text-muted)' }}
              >
                {value.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Stats Section
const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '4+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 my-20">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div 
            className="text-4xl md:text-5xl lg:text-6xl font-accent font-black mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            {stat.number}
          </div>
          <div 
            className="text-sm md:text-base tracking-wider uppercase font-kh-teka"
            style={{ color: 'var(--text-subtle)' }}
          >
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Manifesto Section - Large animated quote
const ManifestoSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const words = "We don't just build websites. We craft digital experiences that move people, drive results, and stand the test of time.".split(' ');

  return (
    <div ref={ref} className="my-24 md:my-32 py-16 md:py-24 relative overflow-hidden">
      {/* Background accent */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ 
          background: 'radial-gradient(ellipse at center, var(--bg-card-hover) 0%, transparent 70%)' 
        }}
      />
      
      {/* Large quote marks */}
      <motion.div
        className="absolute top-8 left-8 text-[15rem] md:text-[20rem] font-accent font-black leading-none select-none pointer-events-none"
        style={{ color: 'var(--border-medium)' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        "
      </motion.div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-accent font-bold leading-[1.2] tracking-tight">
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-[0.3em]"
              initial={{ opacity: 0.2, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              style={{ 
                color: index < 4 ? 'var(--text-subtle)' : 'var(--text-primary)'
              }}
            >
              {word}
            </motion.span>
          ))}
        </p>
        
        <motion.div 
          className="mt-12 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="w-12 h-px" style={{ backgroundColor: 'var(--border-light)' }} />
          <span className="text-sm tracking-[0.3em] uppercase font-kh-teka" style={{ color: 'var(--text-subtle)' }}>
            Our Manifesto
          </span>
          <div className="w-12 h-px" style={{ backgroundColor: 'var(--border-light)' }} />
        </motion.div>
      </div>
    </div>
  );
};

// DNA/Expertise Section - Interactive skill visualization
const DNASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    { name: 'UI Design', level: 95, description: 'Pixel-perfect interfaces that delight users' },
    { name: 'UX Strategy', level: 90, description: 'User-centered design backed by research' },
    { name: 'Development', level: 92, description: 'Clean, scalable, performant code' },
    { name: 'Branding', level: 88, description: 'Distinctive identities that resonate' },
    { name: 'Animation', level: 85, description: 'Motion that brings designs to life' },
    { name: 'Strategy', level: 87, description: 'Data-driven decisions for growth' },
  ];

  return (
    <div ref={ref} className="my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left side - Title and description */}
        <div>
          <motion.div 
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="h-px w-8" style={{ backgroundColor: 'var(--text-subtle)' }} />
            <p className="text-xs tracking-[0.3em] uppercase font-kh-teka" style={{ color: 'var(--text-subtle)' }}>
              Our DNA
            </p>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-accent font-black mb-6"
            style={{ color: 'var(--text-primary)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            What We're <br />
            <span style={{ color: 'var(--text-subtle)' }}>Made Of</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg font-light font-kh-teka max-w-md"
            style={{ color: 'var(--text-muted)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A blend of creativity and technical excellence. We've honed our skills across hundreds of projects to deliver exceptional results.
          </motion.p>

          {/* Hover description */}
          <div
            className="mt-8 relative min-h-[120px]"
            style={{ 
              backgroundColor: 'var(--bg-card)', 
              border: '1px solid var(--border-medium)'
            }}
          >
            {/* Default text - fades out when skill is hovered */}
            <p 
              className="text-base font-kh-teka italic absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-300 text-center"
              style={{ 
                color: 'var(--text-subtle)',
                opacity: hoveredSkill ? 0 : 1,
                pointerEvents: hoveredSkill ? 'none' : 'auto'
              }}
            >
              Hover over a skill to learn more...
            </p>
            
            {/* Skill descriptions - each positioned absolutely to prevent layout shift */}
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="absolute inset-0 flex flex-col justify-center p-6 transition-opacity duration-300"
                style={{ 
                  opacity: hoveredSkill === skill.name ? 1 : 0,
                  pointerEvents: hoveredSkill === skill.name ? 'auto' : 'none'
                }}
              >
                <h4 className="text-xl font-accent font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {skill.name}
                </h4>
                <p className="text-base font-kh-teka" style={{ color: 'var(--text-muted)' }}>
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Skill bars */}
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex justify-between items-center mb-2">
                <span 
                  className="text-base font-kh-teka font-medium transition-colors duration-300"
                  style={{ color: hoveredSkill === skill.name ? 'var(--text-primary)' : 'var(--text-muted)' }}
                >
                  {skill.name}
                </span>
                <span 
                  className="text-sm font-kh-teka"
                  style={{ color: 'var(--text-subtle)' }}
                >
                  {skill.level}%
                </span>
              </div>
              <div 
                className="h-2 w-full overflow-hidden"
                style={{ backgroundColor: 'var(--bg-card)' }}
              >
                <motion.div
                  className="h-full origin-left"
                  style={{ 
                    backgroundColor: hoveredSkill === skill.name ? 'var(--text-primary)' : 'var(--text-muted)',
                    transition: 'background-color 0.3s ease'
                  }}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: skill.level / 100 } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Featured Testimonial - Large statement
const FeaturedTestimonial = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="my-20 relative">
      <div 
        className="p-8 md:p-12 lg:p-16 relative overflow-hidden"
        style={{ 
          backgroundColor: 'var(--bg-card)', 
          border: '1px solid var(--border-medium)' 
        }}
      >
        {/* Decorative elements */}
        <div 
          className="absolute top-0 right-0 w-64 h-64 opacity-50"
          style={{ 
            background: 'radial-gradient(circle, var(--border-light) 0%, transparent 70%)' 
          }}
        />
        
        <div className="relative z-10">
          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className="w-10 h-10 rounded-full border-2 overflow-hidden"
                  style={{ 
                    borderColor: 'var(--bg-primary)',
                    backgroundColor: 'var(--bg-card-hover)'
                  }}
                >
                  <Image 
                    src={`/images/testimonial${i}.png`} 
                    alt={`Client ${i}`}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="text-sm font-kh-teka" style={{ color: 'var(--text-subtle)' }}>
              Trusted by 50+ clients worldwide
            </span>
          </motion.div>

          <motion.blockquote
            className="text-xl md:text-2xl lg:text-3xl font-accent font-bold leading-relaxed mb-8"
            style={{ color: 'var(--text-primary)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            "Working with Adesign transformed our digital presence completely. They didn't just deliver a website—they delivered a 
            <span style={{ color: 'var(--text-subtle)' }}> growth engine</span> that continues to exceed our expectations."
          </motion.blockquote>

          <motion.div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <p className="text-base font-kh-teka font-medium" style={{ color: 'var(--text-primary)' }}>
                Sarah Chen
              </p>
              <p className="text-sm font-kh-teka" style={{ color: 'var(--text-subtle)' }}>
                CEO, TechVentures Inc.
              </p>
            </div>
            
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.svg
                  key={star}
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{ color: 'var(--text-primary)' }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + star * 0.1 }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Team Section
const TeamSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const founders = [
    {
      name: 'Alex Mitchell',
      role: 'Founder & Creative Director',
      bio: 'With 12 years of experience in digital design and strategy, Alex founded Adesign to bridge the gap between exceptional design and real business results.',
      image: '/images/pimg1.webp',
      specialties: ['Brand Strategy', 'Design Direction', 'User Experience'],
    },
    {
      name: 'Jordan Hayes',
      role: 'Co-Founder & Strategy Lead',
      bio: 'Jordan brings deep expertise in digital strategy and business development, ensuring every design decision drives measurable growth and client success.',
      image: '/images/pimg2.webp',
      specialties: ['Business Strategy', 'Client Relations', 'Growth Marketing'],
    },
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Lead Product Designer',
      bio: 'Sarah brings her expertise in interaction design and design systems to create intuitive, beautiful digital experiences.',
      specialties: ['UI/UX Design', 'Design Systems', 'Prototyping'],
      image: '/images/pimg3.webp',
    },
    {
      name: 'James Rodriguez',
      role: 'Senior Full-Stack Developer',
      bio: 'James specializes in building scalable, high-performance applications with modern technologies and best practices.',
      specialties: ['Next.js', 'Backend Dev', 'DevOps'],
      image: '/images/pimg4.webp',
    },
    {
      name: 'Maya Patel',
      role: 'Brand Strategist & Creative',
      bio: 'Maya crafts compelling brand narratives and visual identities that resonate with audiences and drive growth.',
      specialties: ['Brand Identity', 'Creative Strategy', 'Copywriting'],
      image: '/images/pimg5.webp',
    },
    {
      name: 'David Kim',
      role: 'Lead Motion Designer',
      bio: 'David creates immersive animation experiences that bring digital products to life and engage users at every touchpoint.',
      specialties: ['Animation', 'Motion Design', 'Creative Code'],
      image: '/images/pimg6.webp',
    },
  ];

  return (
    <div ref={ref} className="my-20">
      {/* Founder Section */}
      <motion.div 
        className="flex items-center gap-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="h-px w-8" style={{ backgroundColor: 'var(--text-subtle)' }} />
        <p className="text-xs tracking-[0.3em] uppercase font-kh-teka" style={{ color: 'var(--text-subtle)' }}>
          Leadership
        </p>
      </motion.div>
      
      <motion.h2 
        className="text-4xl sm:text-5xl md:text-6xl font-accent font-black mb-12"
        style={{ color: 'var(--text-primary)' }}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Our <span style={{ color: 'var(--text-subtle)' }}>Founders</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
        {founders.map((founder, index) => (
          <motion.div
            key={founder.name}
            className="overflow-hidden rounded-none transition-all duration-500"
            style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            whileHover={{ borderColor: 'var(--border-light)' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
              {/* Image */}
              <div className="relative h-[300px] sm:h-full overflow-hidden order-2 sm:order-1">
                <motion.div
                  animate={{ scale: 1.05 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-center order-1 sm:order-2">
                <h3 className="text-2xl sm:text-3xl font-accent font-black mb-2" style={{ color: 'var(--text-primary)' }}>
                  {founder.name}
                </h3>
                <p className="text-sm font-kh-teka mb-4" style={{ color: 'var(--text-muted)' }}>
                  {founder.role}
                </p>
                <p className="text-sm leading-relaxed mb-6 font-kh-teka" style={{ color: 'var(--text-secondary)' }}>
                  {founder.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {founder.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-3 py-1 rounded-full text-xs font-kh-teka"
                      style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-light)', color: 'var(--text-muted)' }}
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Team Members Section */}
      <motion.div 
        className="flex items-center gap-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="h-px w-8" style={{ backgroundColor: 'var(--text-subtle)' }} />
        <p className="text-xs tracking-[0.3em] uppercase font-kh-teka" style={{ color: 'var(--text-subtle)' }}>
          Core Team
        </p>
      </motion.div>

      <motion.h2 
        className="text-4xl sm:text-5xl md:text-6xl font-accent font-black mb-12"
        style={{ color: 'var(--text-primary)' }}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        The <span style={{ color: 'var(--text-subtle)' }}>Team</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            className="group overflow-hidden rounded-none transition-all duration-500"
            style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            whileHover={{ borderColor: 'var(--border-light)' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
              {/* Image */}
              <div className="relative h-[300px] sm:h-full overflow-hidden">
                <motion.div
                  animate={{ scale: 1.05 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-accent font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                    {member.name}
                  </h3>
                  <p className="text-sm font-kh-teka mb-4" style={{ color: 'var(--text-muted)' }}>
                    {member.role}
                  </p>
                  <p className="text-sm leading-relaxed mb-6 font-kh-teka" style={{ color: 'var(--text-secondary)' }}>
                    {member.bio}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-3 py-1 rounded-full text-xs font-kh-teka"
                      style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-light)', color: 'var(--text-muted)' }}
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Awards/Recognition Section
const AwardsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const awards = [
    { year: '2024', title: 'Site of the Day', source: 'Awwwards', icon: '🏆' },
    { year: '2024', title: 'Best Agency Portfolio', source: 'CSS Design Awards', icon: '⭐' },
    { year: '2023', title: 'Developer Award', source: 'Awwwards', icon: '💎' },
    { year: '2023', title: 'Excellence in UX', source: 'UX Design Awards', icon: '🎯' },
  ];

  return (
    <div ref={ref} className="my-20">
      <motion.div 
        className="flex items-center gap-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="h-px w-8" style={{ backgroundColor: 'var(--text-subtle)' }} />
        <p className="text-xs tracking-[0.3em] uppercase font-kh-teka" style={{ color: 'var(--text-subtle)' }}>
          Recognition
        </p>
      </motion.div>
      
      <motion.h2 
        className="text-4xl sm:text-5xl md:text-6xl font-accent font-black mb-12"
        style={{ color: 'var(--text-primary)' }}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Awards & <span style={{ color: 'var(--text-subtle)' }}>Honors</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {awards.map((award, index) => (
          <motion.div
            key={`${award.year}-${award.title}`}
            className="group p-6 text-center transition-all duration-500 cursor-pointer"
            style={{ 
              backgroundColor: 'var(--bg-card)', 
              border: '1px solid var(--border-medium)' 
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            whileHover={{ 
              scale: 1.02,
              borderColor: 'var(--border-light)',
            }}
          >
            <motion.div 
              className="text-4xl mb-4"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              {award.icon}
            </motion.div>
            <p className="text-xs tracking-wider uppercase mb-2 font-kh-teka" style={{ color: 'var(--text-subtle)' }}>
              {award.year}
            </p>
            <h3 className="text-lg font-accent font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
              {award.title}
            </h3>
            <p className="text-sm font-kh-teka" style={{ color: 'var(--text-muted)' }}>
              {award.source}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function AboutPage() {
  const [isArrowHovered, setIsArrowHovered] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <SmoothScroll />
      <Navigation />

      {/* Hero Section */}
      <div className="pt-32 md:pt-40 pb-16 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-[1920px] mx-auto">
          {/* Label */}
          <motion.div 
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-8 h-px" style={{ backgroundColor: 'var(--line-secondary)' }} />
            <p className="text-xs tracking-[0.3em] uppercase font-kh-teka" style={{ color: 'var(--text-subtle)' }}>
              About Us
            </p>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-accent font-black mb-6 leading-[0.9] tracking-[-0.02em]"
            style={{ color: 'var(--text-primary)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            We Are{' '}
            <span style={{ color: 'var(--text-subtle)' }}>Adesign</span>
          </motion.h1>

          {/* Subtitle with arrow */}
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p 
              className="text-lg md:text-xl lg:text-2xl font-light font-kh-teka"
              style={{ color: 'var(--text-muted)' }}
            >
              A design-led digital agency crafting premium web experiences
            </p>
            <span
              className="text-2xl md:text-3xl transition-transform duration-300 inline-block"
              style={{ 
                color: 'var(--text-subtle)',
                transform: isArrowHovered ? 'translate(8px, 8px) rotate(45deg)' : 'translate(0, 0) rotate(0deg)'
              }}
              onMouseEnter={() => setIsArrowHovered(true)}
              onMouseLeave={() => setIsArrowHovered(false)}
            >
              ↘
            </span>
          </motion.div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-[1920px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <MediaSection imageSrc="/images/about-hero.png" alt="Adesign Agency" />
          </motion.div>
        </div>
      </div>

      {/* Introduction Text */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-[1920px] mx-auto">
          <TextSection
            paragraphs={[
              "We're Adesign—a boutique digital agency founded by passionate designers and developers who believe the web deserves better. We partner with ambitious brands and forward-thinking founders to create digital experiences that don't just look stunning, but drive real results.",
              "Our approach is simple: understand deeply, design purposefully, build meticulously. We don't do cookie-cutter templates or rushed deliverables. Every project gets our full attention, our best thinking, and our relentless pursuit of excellence.",
            ]}
          />
        </div>
      </div>

      {/* Manifesto Section - Full width quote */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-[1920px] mx-auto">
          <ManifestoSection />
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-[1920px] mx-auto">
          <SectionSeparator />
          <StatsSection />
        </div>
      </div>

      {/* What Makes Us Different */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-[1920px] mx-auto">
          <SectionSeparator />
          <InformationSection
            title="What Sets Us Apart"
            paragraphs={[
              "In a world of agencies churning out generic websites, we chose a different path. We're small by design—a tight-knit team that treats every client like our most important one. No account managers creating distance between you and the people doing the work. When you hire us, you work directly with senior designers and developers who care deeply about the outcome.",
              "We specialize in crafting bespoke digital experiences for brands that refuse to blend in. Our clients aren't looking for the cheapest option—they're looking for a partner who understands that their digital presence is often their first impression, and that first impressions matter.",
              "Every line of code we write, every pixel we place, every interaction we design is considered through the lens of your users and your business goals. We don't just make things pretty—we make things work.",
            ]}
          />
        </div>
      </div>

      {/* Two Image Grid */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 my-16">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MediaSection imageSrc="/images/pimg1.webp" alt="Our Design Process" />
            <MediaSection imageSrc="/images/pimg2.webp" alt="Our Development" />
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-[1920px] mx-auto">
          <InformationSection
            title="Our Story"
            paragraphs={[
              "Adesign was born from a simple frustration: too many agencies prioritize speed over craft, quantity over quality. We saw talented teams stretched thin across dozens of projects, producing work that was 'good enough' but never truly great.",
              "We decided to build something different—an agency where every project gets the attention it deserves, where we say no to projects that don't align with our values, and where the work we produce is something we're genuinely proud of.",
              "Today, we work with clients across the globe, from ambitious startups to established brands looking for a digital refresh. Our portfolio spans industries, but our commitment remains the same: exceptional design, flawless execution, and partnerships built on trust.",
            ]}
          />
        </div>
      </div>

      {/* DNA/Expertise Section */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-[1920px] mx-auto">
          <SectionSeparator />
          <DNASection />
        </div>
      </div>

      {/* Featured Testimonial */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-[1920px] mx-auto">
          <SectionSeparator />
          <FeaturedTestimonial />
        </div>
      </div>

      {/* Values Section */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-[1920px] mx-auto">
          <SectionSeparator />
          <ValuesSection />
        </div>
      </div>

      {/* How We Work Section */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-[1920px] mx-auto">
          <SectionSeparator />
          <ProcessSection />
        </div>
      </div>

      {/* Services Section */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-[1920px] mx-auto">
          <SectionSeparator />
          <InformationSection
            title="What We Do"
            paragraphs={[
              "Web Design & Development — From concept to code, we create responsive, high-performance websites that captivate and convert. Our full-stack capabilities mean seamless integration between design and development.",
              "Brand Identity — We help brands find their voice and visual identity. From logos to comprehensive brand systems, we create cohesive identities that resonate with your audience.",
              "Digital Strategy — We don't just build—we strategize. User research, competitive analysis, and data-driven insights inform every decision we make.",
              "Ongoing Partnership — Launch is just the beginning. We offer retainer relationships for brands that want a dedicated digital partner for continuous optimization and growth.",
            ]}
          />
        </div>
      </div>

      {/* Team Section */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-[1920px] mx-auto">
          <SectionSeparator />
          <TeamSection />
        </div>
      </div>

      {/* Awards Section */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-[1920px] mx-auto">
          <SectionSeparator />
          <AwardsSection />
        </div>
      </div>

      {/* Technologies Section */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-[1920px] mx-auto">
          <SectionSeparator />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-lg font-medium font-kh-teka" style={{ color: 'var(--text-primary)' }}>
                Technologies
              </h2>
            </div>
            <div className="lg:col-span-9">
              <div className="space-y-3">
                <p className="text-base md:text-lg font-kh-teka" style={{ color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--text-subtle)' }}>Design →</span> Figma, Adobe Creative Suite, Framer
                </p>
                <p className="text-base md:text-lg font-kh-teka" style={{ color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--text-subtle)' }}>Frontend →</span> Next.js, React, TailwindCSS, TypeScript
                </p>
                <p className="text-base md:text-lg font-kh-teka" style={{ color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--text-subtle)' }}>Backend →</span> Node.js, Python, PostgreSQL, Supabase
                </p>
                <p className="text-base md:text-lg font-kh-teka" style={{ color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--text-subtle)' }}>Animation →</span> GSAP, Framer Motion, Lenis
                </p>
                <p className="text-base md:text-lg font-kh-teka" style={{ color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--text-subtle)' }}>CMS →</span> Sanity, Contentful, Payload CMS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-16">
        <div className="max-w-[1920px] mx-auto">
          <SectionSeparator />
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-accent font-black mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                Ready to start your project?
              </h2>
              <p 
                className="text-lg font-kh-teka"
                style={{ color: 'var(--text-muted)' }}
              >
                Let's create something extraordinary together.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 transition-all duration-300 font-kh-teka text-sm tracking-wider uppercase"
                style={{ 
                  backgroundColor: 'var(--cta-primary)', 
                  color: 'var(--cta-primary-text)' 
                }}
              >
                Get in Touch
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 border transition-all duration-300 font-kh-teka text-sm tracking-wider"
                style={{ 
                  borderColor: 'var(--border-light)', 
                  color: 'var(--text-primary)' 
                }}
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
