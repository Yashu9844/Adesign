'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowUpRight, ArrowLeft, Brain, Bot, Sparkles, MessageSquare, Workflow, BarChart3, Cpu, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Intelligent conversational agents powered by GPT-4. 24/7 customer support that actually helps.',
  },
  {
    icon: Sparkles,
    title: 'Generative AI',
    description: 'Custom image, text, and code generation solutions. Transform creative workflows.',
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'RPA and intelligent workflows. Eliminate repetitive tasks and human error.',
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'ML models that forecast trends. Make data-driven decisions with confidence.',
  },
  {
    icon: MessageSquare,
    title: 'NLP Solutions',
    description: 'Sentiment analysis, document processing, and language understanding at scale.',
  },
  {
    icon: Cpu,
    title: 'Custom ML Models',
    description: 'Purpose-built machine learning models trained on your data. Your competitive edge.',
  },
];

const useCases = [
  {
    title: 'Customer Service',
    description: 'AI agents that handle 80% of inquiries automatically',
    stat: '80%',
    statLabel: 'Automation Rate',
  },
  {
    title: 'Content Generation',
    description: 'Automated blog posts, product descriptions, and marketing copy',
    stat: '10x',
    statLabel: 'Content Output',
  },
  {
    title: 'Data Processing',
    description: 'Extract insights from documents, emails, and unstructured data',
    stat: '95%',
    statLabel: 'Accuracy',
  },
  {
    title: 'Personalization',
    description: 'Recommendations and experiences tailored to each user',
    stat: '3x',
    statLabel: 'Engagement',
  },
];

const stats = [
  { value: '40+', label: 'AI Projects' },
  { value: '1M+', label: 'API Calls Daily' },
  { value: '85%', label: 'Cost Reduction' },
  { value: '<200ms', label: 'Response Time' },
];

export default function AISolutionsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useGSAP(() => {
    if (!titleRef.current) return;

    const words = titleRef.current.querySelectorAll('.title-word');
    gsap.fromTo(
      words,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power4.out',
        delay: 0.2,
      }
    );
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
        {/* Background gradient */}
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px]" />
        </motion.div>

        {/* Animated neural network pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{ backgroundColor: 'var(--text-primary)' }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div style={{ opacity }} className="relative z-10 h-screen flex flex-col justify-center">
          <div className="w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 transition-colors group"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span className="text-sm tracking-wide">Back to Services</span>
              </Link>
            </motion.div>

            {/* Service number & icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-6 mb-8"
            >
              <span className="text-8xl sm:text-9xl font-accent font-black" style={{ color: 'var(--text-number)' }}>04</span>
              <div className="w-16 h-16 flex items-center justify-center border" style={{ borderColor: 'var(--border-medium)', backgroundColor: 'var(--bg-elevated)' }}>
                <Brain className="w-7 h-7" style={{ color: 'var(--text-muted)' }} />
              </div>
            </motion.div>

            {/* Title */}
            <div ref={titleRef} className="mb-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-accent font-black leading-[0.9]">
                <span className="title-word inline-block" style={{ color: 'var(--text-primary)' }}>AI</span>{' '}
                <span className="title-word inline-block" style={{ color: 'var(--text-subtle)' }}>&</span>{' '}
                <span className="title-word inline-block" style={{ color: 'var(--text-subtle)' }}>AUTOMATION</span>
              </h1>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl sm:text-2xl max-w-2xl font-light mb-12"
              style={{ color: 'var(--text-muted)' }}
            >
              Intelligent systems that learn, adapt, and scale.
              Transform your business with the power of AI.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12"
            >
              {stats.map((stat, index) => (
                <div key={index} className="border-l pl-4" style={{ borderColor: 'var(--border-medium)' }}>
                  <div className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>{stat.value}</div>
                  <div className="text-sm tracking-wide" style={{ color: 'var(--text-subtle)' }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-subtle)' }}>Scroll</span>
            <div className="w-px h-12" style={{ backgroundImage: 'linear-gradient(to bottom, var(--text-subtle), transparent)' }} />
          </motion.div>
        </motion.div>
      </section>

      {/* Gradient Divider */}
      <div className="w-full h-px" style={{ backgroundImage: 'var(--gradient-divider)' }} />

      {/* Capabilities Section */}
      <CapabilitiesSection />

      {/* Gradient Divider */}
      <div className="w-full h-px" style={{ backgroundImage: 'var(--gradient-divider)' }} />

      {/* Use Cases Section */}
      <UseCasesSection />

      {/* Gradient Divider */}
      <div className="w-full h-px" style={{ backgroundImage: 'var(--gradient-divider)' }} />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

function CapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 lg:py-40 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24"
        >
          <span className="text-xs tracking-[0.3em] uppercase mb-4 block" style={{ color: 'var(--text-subtle)' }}>AI Solutions</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-accent font-bold" style={{ color: 'var(--text-primary)' }}>
            Intelligent
            <span style={{ color: 'var(--text-subtle)' }}> Capabilities</span>
          </h2>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 border transition-all duration-500"
                style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-faint)' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-card)'; e.currentTarget.style.borderColor = 'var(--border-medium)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'; e.currentTarget.style.borderColor = 'var(--border-faint)'; }}
              >
                <div className="w-12 h-12 flex items-center justify-center border mb-6 transition-all duration-300" style={{ borderColor: 'var(--border-faint)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#fb923c'; e.currentTarget.style.backgroundColor = 'rgba(251, 146, 60, 0.1)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-faint)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  <Icon className="w-5 h-5 transition-colors" style={{ color: 'var(--text-muted)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fb923c'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'} />
                </div>

                <h3 className="text-xl font-accent font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{cap.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{cap.description}</p>

                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: 'rgba(251, 146, 60, 0.2)' }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 lg:py-40 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24 text-center"
        >
          <span className="text-xs tracking-[0.3em] uppercase mb-4 block" style={{ color: 'var(--text-subtle)' }}>Applications</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-accent font-bold" style={{ color: 'var(--text-primary)' }}>
            Real-World
            <span style={{ color: 'var(--text-subtle)' }}> Impact</span>
          </h2>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex gap-6 p-8 border transition-all duration-500"
              style={{ backgroundImage: 'linear-gradient(to bottom right, var(--bg-card), transparent)', borderColor: 'var(--border-faint)' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--border-medium)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-faint)'}
            >
              {/* Big stat */}
              <div className="flex-shrink-0">
                <div className="text-5xl sm:text-6xl font-accent font-black transition-colors" style={{ color: 'var(--text-disabled)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-disabled)'}>
                  {useCase.stat}
                </div>
                <div className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-disabled)' }}>{useCase.statLabel}</div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-accent font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{useCase.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Powered by section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm mb-6" style={{ color: 'var(--text-subtle)' }}>Powered by</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['OpenAI', 'Anthropic', 'Langchain', 'Hugging Face', 'TensorFlow'].map((tech) => (
              <span key={tech} className="text-sm font-medium transition-colors" style={{ color: 'var(--text-disabled)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-muted)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-disabled)'}>
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="relative py-32 sm:py-40 lg:py-52 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase mb-6 block" style={{ color: 'var(--text-subtle)' }}>Future Ready</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-accent font-black mb-8" style={{ color: 'var(--text-primary)' }}>
            Ready to Embrace
            <br />
            <span style={{ color: 'var(--text-subtle)' }}>The AI Revolution?</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-12" style={{ color: 'var(--text-muted)' }}>
            Don't get left behind. Let's explore how AI can transform 
            your business operations and unlock new possibilities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="group relative px-10 py-4 font-medium tracking-wide overflow-hidden transition-all duration-300" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--cta-hover)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--cta-primary)'}>
                <span className="relative z-10 flex items-center gap-2">
                  EXPLORE AI SOLUTIONS
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>
            </Link>
            <Link href="/work">
              <button className="group relative px-10 py-4 border font-medium tracking-wide transition-all duration-300" style={{ backgroundColor: 'transparent', color: 'var(--text-primary)', borderColor: 'var(--border-light)' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--text-primary)'; e.currentTarget.style.backgroundColor = 'var(--bg-card)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
                <span className="flex items-center gap-2">
                  VIEW CASE STUDIES
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
