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
    <div className="min-h-screen bg-black">
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
            <span className="text-xs text-white/40 uppercase tracking-[0.3em] mb-4 block">Our Portfolio</span>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-accent font-black leading-[0.95] mb-6 text-white">
              Selected
              <br />
              <span className="text-white/40">Work</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 font-light max-w-2xl mx-auto">
              A collection of projects we're proud of. Each one crafted with attention to detail and strategic thinking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

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
                  className="text-center p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <Icon className="w-8 h-8 mx-auto mb-4" style={{ color: 'var(--text-muted)' }} />
                  <div className="text-4xl sm:text-5xl font-accent font-black text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

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
                className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${
                  selectedCategory === category
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-white border-white/20 hover:border-white/40 hover:bg-white/5'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

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
                  <div className="relative overflow-hidden rounded-2xl mb-6 h-64 sm:h-72 md:h-80 group/image">
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
                      className="absolute inset-0 bg-white"
                    />

                    {/* CTA - Appears on image hover */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0, y: hoveredProject === project.id ? 0 : -10 }}
                      transition={{ duration: 0.1 }}
                      className="absolute inset-0 flex items-center justify-center z-10"
                    >
                      <div className="inline-flex items-center gap-2 px-6 py-3 bg-black/50 backdrop-blur-sm border border-white text-white rounded-full font-medium hover:bg-black/70 transition-all">
                        <span className="text-sm font-medium">View Case Study</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    {/* Category & Year */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-white/40 uppercase tracking-wider">{project.category}</span>
                      <span className="text-xs text-white/40">{project.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-accent font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/60 font-light mb-4">{project.subtitle}</p>

                    {/* Description */}
                    <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>

                    {/* Results Badge */}
                    <div className="mb-6 inline-flex">
                      <span className="text-sm font-medium text-white bg-white/10 border border-white/20 px-4 py-2 rounded-full">
                        {project.results}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-white/40 bg-white/5 px-3 py-1 rounded-full border border-white/10"
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
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 lg:py-40 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-accent font-black mb-6 text-white">
              Ready to Build
              <br />
              <span className="text-white/40">Something Great?</span>
            </h2>
            <p className="text-lg text-white/60 font-light mb-12 max-w-2xl mx-auto">
              Let's collaborate on your next project. Whether you're looking to redesign your brand, build a new product, or scale your digital presence—we're here to help.
            </p>
            
            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all group"
              >
                Start a Project
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 border border-white text-white rounded-full font-medium hover:bg-white/10 transition-all group"
              >
                Schedule a Consultation
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Subtext */}
            <p className="text-sm text-white/40">No long-term contracts. Let's see if we're a good fit first.</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
