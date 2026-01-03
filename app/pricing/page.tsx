'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowUpRight, Check, Plus, Minus, MessageSquare, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const popularPackages = [
  {
    id: 'portfolio',
    name: 'Portfolio Website',
    description: 'Perfect for creatives, freelancers, and professionals who want to showcase their work with a stunning online presence.',
    price: '12,000',
    features: ['Custom design', 'Project gallery', 'About & contact pages', 'Mobile responsive', 'Basic animations', '6 months free maintenance'],
  },
  {
    id: 'business',
    name: 'Business Website',
    description: 'Complete professional website for businesses with content management system for easy updates.',
    price: '25,000',
    popular: true,
    features: ['Custom UI/UX design', 'CMS integration', 'Blog section', 'SEO optimization', 'Analytics setup', '6 months free maintenance'],
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Store',
    description: 'Full-featured online store with product management, shopping cart, and secure payment processing.',
    price: '45,000',
    features: ['Product catalog', 'Shopping cart', 'Razorpay/Stripe payments', 'Order management', 'Inventory tracking', '6 months free maintenance'],
  },
  {
    id: 'saas',
    name: 'SaaS / Web App',
    description: 'Custom web application with user authentication, database, and admin dashboard.',
    price: '75,000',
    features: ['User authentication', 'Custom dashboard', 'Database & API', 'Role-based access', 'Subscription billing', '6 months free maintenance'],
  },
  {
    id: 'mobile',
    name: 'Mobile App',
    description: 'Cross-platform mobile application for iOS and Android built with React Native.',
    price: '60,000',
    features: ['iOS & Android', 'Custom UI design', 'Push notifications', 'Offline support', 'App store submission', '6 months free maintenance'],
  },
  {
    id: 'ai-automation',
    name: 'AI Automation',
    description: 'Custom AI chatbots, virtual assistants, and workflow automation powered by GPT and modern AI.',
    price: '35,000',
    features: ['Custom AI chatbot', 'GPT/LLM integration', 'Workflow automation', 'API integrations', 'Training & setup', '6 months free maintenance'],
  },
];

const addOnServices = [
  {
    id: 'web-design',
    name: 'Web Design',
    description: 'UI/UX design, wireframes, prototyping',
    basePrice: 5000,
    unit: '',
    category: 'design',
  },
  {
    id: 'web-dev',
    name: 'Web Development',
    description: 'Next.js, React, full-stack development',
    basePrice: 8000,
    unit: '',
    category: 'development',
  },
  {
    id: 'mobile-app',
    name: 'Mobile App',
    description: 'React Native cross-platform app',
    basePrice: 40000,
    unit: '',
    category: 'development',
  },
  {
    id: 'brand-identity',
    name: 'Brand Identity',
    description: 'Logo, colors, typography, guidelines',
    basePrice: 8000,
    unit: '',
    category: 'design',
  },
  {
    id: 'ai-solutions',
    name: 'AI & Automation',
    description: 'AI chatbots, GPT integration',
    basePrice: 15000,
    unit: '',
    category: 'ai',
  },
  {
    id: 'performance',
    name: 'Performance & SEO',
    description: 'Speed optimization, Core Web Vitals',
    basePrice: 5000,
    unit: '',
    category: 'development',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Setup',
    description: 'Online store with payment gateway',
    basePrice: 20000,
    unit: '',
    category: 'development',
  },
  {
    id: 'cms',
    name: 'CMS Integration',
    description: 'Content management system setup',
    basePrice: 5000,
    unit: '',
    category: 'development',
  },
  {
    id: 'animations',
    name: 'Custom Animations',
    description: 'Micro-interactions, scroll animations',
    basePrice: 3000,
    unit: '',
    category: 'design',
  },
  {
    id: 'maintenance',
    name: 'Maintenance',
    description: 'Monthly updates and support',
    basePrice: 2000,
    unit: '/month',
    category: 'support',
  },
];

// Contact Modal Component
function ContactModal({ 
  isOpen, 
  onClose, 
  packageName 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  packageName?: string;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message: `Pricing inquiry for: ${packageName || 'Custom Quote'}`,
          projectType: packageName || 'Custom Quote',
          phone,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setPhone('');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-md p-8 border"
        style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-faint)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 transition-colors"
          style={{ color: 'var(--text-muted)' }}
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border" style={{ borderColor: 'var(--border-medium)' }}>
              <Check className="w-8 h-8" style={{ color: 'var(--text-primary)' }} />
            </div>
            <h3 className="text-2xl font-accent font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
              Thank you!
            </h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Our team will contact you within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-3 text-sm font-medium"
              style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-accent font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
              {packageName ? `Get ${packageName}` : 'Get Custom Quote'}
            </h3>
            <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
              Enter your details and we'll contact you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--text-subtle)' }}>
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 text-sm border outline-none transition-colors"
                  style={{ 
                    backgroundColor: 'var(--bg-elevated)', 
                    borderColor: 'var(--border-faint)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--text-subtle)' }}>
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 text-sm border outline-none transition-colors"
                  style={{ 
                    backgroundColor: 'var(--bg-elevated)', 
                    borderColor: 'var(--border-faint)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--text-subtle)' }}>
                  Phone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 text-sm border outline-none transition-colors"
                  style={{ 
                    backgroundColor: 'var(--bg-elevated)', 
                    borderColor: 'var(--border-faint)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="+91 98765 43210"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 font-medium tracking-wider transition-all duration-300 flex items-center justify-center gap-2 mt-6"
                style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}
              >
                {loading ? 'Sending...' : 'Submit'}
                {!loading && <ArrowUpRight className="w-4 h-4" />}
              </button>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function PricingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPackage, setModalPackage] = useState<string | undefined>();

  const openModal = (packageName?: string) => {
    setModalPackage(packageName);
    setModalOpen(true);
  };

  useGSAP(() => {
    if (!titleRef.current) return;

    const chars = titleRef.current.querySelectorAll('.hero-char');
    gsap.fromTo(
      chars,
      { opacity: 0, y: 100, rotateX: -90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.02,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.3,
      }
    );
  });

  const heroText = 'PRICING';

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] w-full overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-center pt-32">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="w-12 h-px" style={{ backgroundColor: 'var(--text-subtle)' }} />
            <span className="text-xs sm:text-sm tracking-[0.3em] uppercase" style={{ color: 'var(--text-muted)' }}>Transparent Pricing</span>
            <div className="w-12 h-px" style={{ backgroundColor: 'var(--text-subtle)' }} />
          </motion.div>

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="text-[15vw] sm:text-[12vw] md:text-[10vw] font-accent font-black leading-[0.85] tracking-[-0.04em] perspective-1000"
            style={{ color: 'var(--text-primary)' }}
          >
            {heroText.split('').map((char, i) => (
              <span
                key={i}
                className="hero-char inline-block"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {char}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto font-light"
            style={{ color: 'var(--text-muted)' }}
          >
            Flexible pricing for projects of any scale. 
            <span style={{ color: 'var(--text-primary)' }}> No hidden fees</span>, 
            <span style={{ color: 'var(--text-primary)' }}> no surprises</span>.
          </motion.p>

        </div>
      </section>

      {/* Gradient Divider */}
      <div className="w-full h-px" style={{ backgroundImage: 'var(--gradient-divider)' }} />

      {/* Pricing Tiers Section */}
      <PricingTiersSection onGetStarted={openModal} />

      {/* Gradient Divider */}
      <div className="w-full h-px" style={{ backgroundImage: 'var(--gradient-divider)' }} />

      {/* Mix & Match Calculator */}
      <CalculatorSection />

      {/* Gradient Divider */}
      <div className="w-full h-px" style={{ backgroundImage: 'var(--gradient-divider)' }} />

      {/* Custom Quote CTA */}
      <CustomQuoteSection />

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        packageName={modalPackage}
      />
    </div>
  );
}

function PricingTiersSection({ onGetStarted }: { onGetStarted: (packageName?: string) => void }) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [selected, setSelected] = useState(popularPackages[0]);

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 lg:py-40 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Header + Package List */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Header */}
            <div className="mb-10">
              <span className="text-xs tracking-[0.3em] uppercase mb-4 block" style={{ color: 'var(--text-subtle)' }}>Popular Packages</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-accent font-bold" style={{ color: 'var(--text-primary)' }}>
                What People
                <span style={{ color: 'var(--text-subtle)' }}> Buy</span>
              </h2>
            </div>

            {/* Package List */}
            <div className="space-y-0">
            {popularPackages.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => setSelected(pkg)}
                className={`w-full text-left border-b py-5 flex items-center justify-between transition-all duration-300 ${
                  selected.id === pkg.id ? 'opacity-100' : 'opacity-50 hover:opacity-80'
                }`}
                style={{ borderColor: 'var(--border-faint)' }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-2 h-2 transition-all duration-300"
                    style={{
                      backgroundColor: selected.id === pkg.id ? 'var(--text-primary)' : 'transparent',
                      border: `1px solid ${selected.id === pkg.id ? 'var(--text-primary)' : 'var(--border-medium)'}`,
                    }}
                  />
                  <span className="text-lg sm:text-xl font-accent font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {pkg.name}
                  </span>
                  {pkg.popular && (
                    <span className="text-[9px] px-1.5 py-0.5 font-bold tracking-wider" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}>
                      POPULAR
                    </span>
                  )}
                </div>
                <span className="text-lg font-accent font-bold" style={{ color: 'var(--text-muted)' }}>
                  ₹{pkg.price}
                </span>
              </button>
            ))}
            </div>

            {/* Custom Quote Link */}
            <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--border-faint)' }}>
              <button onClick={() => onGetStarted()} className="flex items-center gap-2 group">
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Not sure?</span>
                <span className="text-sm font-medium group-hover:underline" style={{ color: 'var(--text-primary)' }}>
                  Get a custom quote
                </span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: 'var(--text-primary)' }} />
              </button>
            </div>
          </motion.div>

          {/* Right: Details Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border p-8 sm:p-10"
            style={{ borderColor: 'var(--border-faint)', backgroundColor: 'var(--bg-elevated)' }}
          >
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Package Name */}
              <h3 className="text-2xl sm:text-3xl font-accent font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                {selected.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl sm:text-5xl font-accent font-black" style={{ color: 'var(--text-primary)' }}>
                  ₹{selected.price}
                </span>
                <span className="text-sm ml-2" style={{ color: 'var(--text-muted)' }}>starting at</span>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                {selected.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-wider mb-4" style={{ color: 'var(--text-subtle)' }}>Includes</p>
                <ul className="space-y-3">
                  {selected.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--text-primary)' }} />
                      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button
                onClick={() => onGetStarted(selected.name)}
                className="w-full py-4 font-medium tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  backgroundColor: 'var(--cta-primary)',
                  color: 'var(--cta-primary-text)',
                }}
              >
                Get Started
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {/* Guarantee */}
              <div className="mt-6 pt-6 border-t flex items-center gap-3" style={{ borderColor: 'var(--border-faint)' }}>
                <Check className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--text-primary)' }} />
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  <span style={{ color: 'var(--text-primary)' }}>Deadline Guarantee</span> — Miss the deadline, you don't pay
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CalculatorSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [selectedServices, setSelectedServices] = useState<Record<string, number>>({});

  const toggleService = (id: string, basePrice: number) => {
    setSelectedServices(prev => {
      if (prev[id]) {
        const { [id]: removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: basePrice };
    });
  };

  const updateQuantity = (id: string, basePrice: number, delta: number) => {
    setSelectedServices(prev => {
      const currentQty = Math.floor((prev[id] || 0) / basePrice) || 1;
      const newQty = Math.max(1, currentQty + delta);
      return { ...prev, [id]: basePrice * newQty };
    });
  };

  const totalPrice = Object.values(selectedServices).reduce((sum, price) => sum + price, 0);
  const selectedCount = Object.keys(selectedServices).length;

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
          <span className="text-xs tracking-[0.3em] uppercase mb-4 block" style={{ color: 'var(--text-subtle)' }}>Build Your Own</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-accent font-bold" style={{ color: 'var(--text-primary)' }}>
            Mix &
            <span style={{ color: 'var(--text-subtle)' }}> Match</span>
          </h2>
          <p className="mt-4 max-w-lg" style={{ color: 'var(--text-muted)' }}>
            Select the services you need and get an instant estimate. Perfect for custom projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Services Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {addOnServices.map((service, index) => {
                const isSelected = !!selectedServices[service.id];
                const quantity = isSelected ? Math.floor(selectedServices[service.id] / service.basePrice) : 1;
                
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    onClick={() => toggleService(service.id, service.basePrice)}
                    className="relative p-6 border cursor-pointer transition-all duration-300"
                    style={{
                      backgroundColor: isSelected ? 'var(--bg-card)' : 'var(--bg-elevated)',
                      borderColor: isSelected ? 'var(--border-medium)' : 'var(--border-faint)',
                    }}
                  >
                    {/* Checkbox indicator */}
                    <div 
                      className="absolute top-4 right-4 w-5 h-5 border flex items-center justify-center transition-all"
                      style={{ 
                        borderColor: isSelected ? 'var(--cta-primary)' : 'var(--border-medium)',
                        backgroundColor: isSelected ? 'var(--cta-primary)' : 'transparent'
                      }}
                    >
                      {isSelected && <Check className="w-3 h-3" style={{ color: 'var(--cta-primary-text)' }} />}
                    </div>

                    <h4 className="font-accent font-bold mb-1 pr-8" style={{ color: 'var(--text-primary)' }}>{service.name}</h4>
                    <p className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>{service.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>₹{service.basePrice.toLocaleString('en-IN')}</span>
                        <span className="text-xs ml-1" style={{ color: 'var(--text-subtle)' }}>{service.unit}</span>
                      </div>
                      
                      {isSelected && service.unit !== 'setup' && service.unit !== 'package' && service.unit !== 'audit' && (
                        <div 
                          className="flex items-center gap-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button
                            onClick={() => updateQuantity(service.id, service.basePrice, -1)}
                            className="w-6 h-6 flex items-center justify-center border transition-colors"
                            style={{ borderColor: 'var(--border-medium)', color: 'var(--text-primary)' }}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-sm" style={{ color: 'var(--text-primary)' }}>{quantity}</span>
                          <button
                            onClick={() => updateQuantity(service.id, service.basePrice, 1)}
                            className="w-6 h-6 flex items-center justify-center border transition-colors"
                            style={{ borderColor: 'var(--border-medium)', color: 'var(--text-primary)' }}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Summary Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:sticky lg:top-32 h-fit"
          >
            <div className="p-8 border" style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-faint)' }}>
              <h3 className="text-xl font-accent font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Your Estimate</h3>
              
              {selectedCount === 0 ? (
                <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
                  Select services to see your estimate
                </p>
              ) : (
                <div className="space-y-3 mb-8">
                  {Object.entries(selectedServices).map(([id, price]) => {
                    const service = addOnServices.find(s => s.id === id);
                    if (!service) return null;
                    const qty = Math.floor(price / service.basePrice);
                    return (
                      <div key={id} className="flex justify-between text-sm">
                        <span style={{ color: 'var(--text-secondary)' }}>
                          {service.name} {qty > 1 && `×${qty}`}
                        </span>
                        <span style={{ color: 'var(--text-primary)' }}>₹{price.toLocaleString('en-IN')}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="pt-6 border-t" style={{ borderColor: 'var(--border-faint)' }}>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Estimated Total</span>
                  <span className="text-3xl font-accent font-black" style={{ color: 'var(--text-primary)' }}>
                    ₹{totalPrice.toLocaleString('en-IN')}
                  </span>
                </div>

                <Link href={`/contact?services=${Object.keys(selectedServices).join(',')}&total=${totalPrice}`}>
                  <button
                    className="w-full py-3 font-medium tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: selectedCount > 0 ? 'var(--cta-primary)' : 'transparent',
                      color: selectedCount > 0 ? 'var(--cta-primary-text)' : 'var(--text-muted)',
                      borderWidth: '1px',
                      borderColor: selectedCount > 0 ? 'var(--cta-primary)' : 'var(--border-faint)',
                    }}
                  >
                    Get Custom Quote
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </Link>

                <p className="text-xs text-center mt-4" style={{ color: 'var(--text-disabled)' }}>
                  *Final pricing may vary based on project scope
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CustomQuoteSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="relative py-32 sm:py-40 lg:py-52 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center border" style={{ borderColor: 'var(--border-medium)' }}>
            <MessageSquare className="w-8 h-8" style={{ color: 'var(--text-muted)' }} />
          </div>

          <span className="text-xs tracking-[0.3em] uppercase mb-6 block" style={{ color: 'var(--text-subtle)' }}>Need Something Custom?</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-accent font-black mb-8" style={{ color: 'var(--text-primary)' }}>
            Let's Talk
            <br />
            <span style={{ color: 'var(--text-subtle)' }}>About Your Project</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-12" style={{ color: 'var(--text-muted)' }}>
            Every project is unique. Schedule a free consultation and we'll create a custom proposal tailored to your specific needs and budget.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button 
                className="group px-10 py-4 font-medium tracking-wide transition-all duration-300 flex items-center gap-2"
                style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}
              >
                SCHEDULE A CALL
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Link>
            <Link href="/work">
              <button 
                className="group px-10 py-4 font-medium tracking-wide transition-all duration-300 flex items-center gap-2"
                style={{ 
                  backgroundColor: 'transparent', 
                  color: 'var(--text-primary)',
                  borderWidth: '1px',
                  borderColor: 'var(--border-medium)'
                }}
              >
                VIEW OUR WORK
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
