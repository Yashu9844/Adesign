'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import { ArrowUpRight, TrendingUp, Users, Zap } from 'lucide-react';

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
    tags: ['React', 'Next.js', 'Stripe', 'Tailwind CSS'],
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
    tags: ['React', 'TypeScript', 'D3.js', 'PostgreSQL'],
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
    tags: ['Branding', 'Design System', 'Motion Design', 'Marketing'],
  },
  {
    id: 4,
    title: 'Nexus',
    subtitle: 'Mobile App',
    description: 'Cross-platform mobile application for real-time collaboration and project management.',
    image: '/images/pimg1.webp',
    category: 'Mobile Development',
    year: '2024',
    results: '200K+ Downloads',
    tags: ['React Native', 'Firebase', 'Redux', 'iOS/Android'],
  },
  {
    id: 5,
    title: 'Aurora',
    subtitle: 'Marketing Website',
    description: 'High-converting marketing site for a sustainable fashion brand with engaging storytelling.',
    image: '/images/pimg2.webp',
    category: 'Web Design',
    year: '2023',
    results: '340% ROI',
    tags: ['Next.js', 'Animation', 'CMS', 'SEO Optimized'],
  },
  {
    id: 6,
    title: 'Stellar',
    subtitle: 'AI Integration',
    description: 'Enterprise AI solution integrating GPT-4 for intelligent document processing.',
    image: '/images/pimg3.webp',
    category: 'AI Solutions',
    year: '2024',
    results: '95% Accuracy',
    tags: ['AI/ML', 'OpenAI', 'Python', 'Cloud Infrastructure'],
  },
];

export default function WorkPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const categories = ['All', 'Web Development', 'Product Design', 'Branding', 'Mobile Development', 'AI Solutions'];
  const filteredProjects = selectedCategory === 'All' ? projects : projects.filter(p => p.category === selectedCategory);

  const stats = [
    { icon: TrendingUp, value: '150%', label: 'Avg. Growth' },
    { icon: Users, value: '50+', label: 'Clients Served' },
    { icon: Zap, value: '98%', label: 'Satisfaction' },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <SmoothScroll />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-32">
        <div className="text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] mb-4 block" style={{ color: 'var(--text-subtle)' }}>Our Portfolio</span>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-accent font-black leading-[0.95] mb-6" style={{ color: 'var(--text-primary)' }}>
              Selected
              <br />
              <span style={{ color: 'var(--text-subtle)' }}>Work</span>
            </h1>
            <p className="text-lg sm:text-xl font-light max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              A collection of projects we're proud of. Each one crafted with attention to detail and strategic thinking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="w-full h-px" style={{ backgroundImage: 'var(--gradient-divider)' }} />

      {/* Stats Section */}
      <section className="relative py-16 sm:py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-8 rounded-none border transition-all"
                  style={{ 
                    borderColor: 'var(--border-faint)',
                    backgroundColor: 'var(--bg-elevated)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-card)';
                    e.currentTarget.style.borderColor = 'var(--border-medium)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-elevated)';
                    e.currentTarget.style.borderColor = 'var(--border-faint)';
                  }}
                >
                  <Icon className="w-8 h-8 mx-auto mb-4" style={{ color: 'var(--text-muted)' }} />
                  <div className="text-4xl sm:text-5xl font-accent font-black mb-2" style={{ color: 'var(--text-primary)' }}>{stat.value}</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="w-full h-px" style={{ backgroundImage: 'var(--gradient-divider)' }} />

      {/* Projects Filter */}
      <section className="relative py-2 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-[1920px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="px-5 sm:px-6 py-2.5 rounded-none text-xs sm:text-sm font-medium transition-all duration-300 border"
                style={{
                  backgroundColor: selectedCategory === category ? 'var(--cta-primary)' : 'transparent',
                  color: selectedCategory === category ? 'var(--cta-primary-text)' : 'var(--text-primary)',
                  borderColor: selectedCategory === category ? 'var(--cta-primary)' : 'var(--border-medium)'
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.borderColor = 'var(--border-light)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-elevated)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.borderColor = 'var(--border-medium)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="w-full h-px" style={{ backgroundImage: 'var(--gradient-divider)' }} />

      {/* Projects Grid */}
      <section
        ref={sectionRef}
        className="relative w-full py-8 sm:py-12 lg:py-16 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20"
      >
        <div className="w-full max-w-[1920px] mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => {
              const caseStudyMap: { [key: number]: string } = {
                1: '/work/lumina',
                2: '/work/horizon',
                3: '/work/vertex',
                4: '/work/nexus',
                5: '/work/aurora',
                6: '/work/stellar',
              };
              const caseStudyPath = caseStudyMap[project.id] || '#';
              
              return (
              <Link href={caseStudyPath} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative h-full cursor-pointer"
              >
                {/* Project Card */}
                <div className="h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-none mb-6 h-64 sm:h-72 md:h-80 group/image">
                    <motion.div
                      animate={{ scale: hoveredProject === project.id ? 1.05 : 1 }}
                      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="w-full h-full"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    
                    {/* Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                      style={{ backgroundColor: 'var(--bg-overlay)' }}
                    />

                    {/* CTA - Appears on image hover */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0, y: hoveredProject === project.id ? 0 : -10 }}
                      transition={{ duration: 0.1 }}
                      className="absolute inset-0 flex items-center justify-center z-10"
                    >
                      <div className="inline-flex items-center gap-2 px-6 py-3 backdrop-blur-sm border rounded-full font-medium transition-all" style={{
                        backgroundColor: 'var(--bg-glass)',
                        borderColor: 'var(--text-primary)',
                        color: 'var(--text-primary)'
                      }}>
                        <span className="text-sm font-medium">View Case Study</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    {/* Category & Year */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-subtle)' }}>{project.category}</span>
                      <span className="text-xs" style={{ color: 'var(--text-subtle)' }}>{project.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-accent font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                      {project.title}
                    </h3>
                    <p className="text-sm font-light mb-4" style={{ color: 'var(--text-muted)' }}>{project.subtitle}</p>

                    {/* Description */}
                    <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--text-disabled)' }}>
                      {project.description}
                    </p>

                    {/* Results Badge */}
                    <div className="mb-6 inline-flex">
                      <span className="text-sm font-medium px-4 py-2 rounded-none border" style={{ 
                        color: 'var(--text-primary)',
                        backgroundColor: 'var(--bg-elevated)',
                        borderColor: 'var(--border-medium)'
                      }}>
                        {project.results}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-none border" style={{
                            color: 'var(--text-subtle)',
                            backgroundColor: 'var(--bg-elevated)',
                            borderColor: 'var(--border-faint)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="w-full h-px" style={{ backgroundImage: 'var(--gradient-divider)' }} />

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 lg:py-40 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-accent font-black mb-6" style={{ color: 'var(--text-primary)' }}>
              Ready to Build
              <br />
              <span style={{ color: 'var(--text-subtle)' }}>Something Great?</span>
            </h2>
            <p className="text-lg font-light mb-12 max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Let's collaborate on your next project. Whether you're looking to redesign your brand, build a new product, or scale your digital presence—we're here to help.
            </p>
            
            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-medium transition-all group"
                style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--cta-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--cta-primary)'}
              >
                Start a Project
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 border rounded-full font-medium transition-all group"
                style={{ borderColor: 'var(--text-primary)', color: 'var(--text-primary)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Schedule a Consultation
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Subtext */}
            <p className="text-sm" style={{ color: 'var(--text-subtle)' }}>No long-term contracts. Let's see if we're a good fit first.</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
