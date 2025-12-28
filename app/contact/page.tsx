'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowUpRight, Send, MapPin, Clock, Phone } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState('');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const isFormInView = useInView(formRef, { once: true, amount: 0.2 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    // Simulate form submission - replace with actual API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatusMessage('✓ Message sent! We\'ll get back to you within 24 hours.');
      setName('');
      setEmail('');
      setCompany('');
      setProjectType('');
      setBudget('');
      setTimeline('');
      setMessage('');
    } catch (error) {
      setStatusMessage('✗ An error occurred. Please try again or email us directly.');
      console.error('Submission error:', error);
    } finally {
      setLoading(false);
      setTimeout(() => setStatusMessage(''), 5000);
    }
  };

  const projectTypes = [
    'Website Design & Development',
    'Brand Identity',
    'E-commerce',
    'Web Application',
    'UI/UX Design',
    'Other',
  ];

  const budgetRanges = [
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k+', label: '$50,000+' },
  ];

  const timelineOptions = [
    { value: '1-2months', label: '1-2 Months' },
    { value: '2-4months', label: '2-4 Months' },
    { value: '4-6months', label: '4-6 Months' },
    { value: 'flexible', label: 'Flexible' },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <SmoothScroll />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-32 md:pt-40 pb-16">
        {/* Grid Background */}
        <div
          className="fixed inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(var(--text-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--text-subtle) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Gradient orbs */}
        <div 
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--text-muted) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--text-subtle) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 w-full max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column - Info */}
            <div className="lg:col-span-5 space-y-8 sm:space-y-12">
              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 sm:w-16 h-[1px]" style={{ backgroundColor: 'var(--line-secondary)' }} />
                  <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase font-light font-kh-teka" style={{ color: 'var(--text-subtle)' }}>
                    Get In Touch
                  </span>
                </div>

                <h1 
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-accent font-black leading-[0.95] tracking-[-0.02em] mb-6"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Let's Create
                  <br />
                  <span style={{ color: 'var(--text-subtle)' }}>Together</span>
                </h1>

                <p 
                  className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-xl font-kh-teka"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Have a project in mind? We're here to transform your vision into exceptional digital experiences. Let's start a conversation.
                </p>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Email */}
                <div className="group">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4" style={{ color: 'var(--text-subtle)' }} />
                    <p className="text-xs tracking-wider uppercase font-kh-teka" style={{ color: 'var(--text-subtle)' }}>Email</p>
                  </div>
                  <a
                    href="mailto:hello@adesign.agency"
                    className="text-lg sm:text-xl font-light font-kh-teka flex items-center gap-2 transition-colors"
                    style={{ color: 'var(--text-primary)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  >
                    hello@adesign.agency
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>

                {/* Phone */}
                <div className="group">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4" style={{ color: 'var(--text-subtle)' }} />
                    <p className="text-xs tracking-wider uppercase font-kh-teka" style={{ color: 'var(--text-subtle)' }}>Phone</p>
                  </div>
                  <a
                    href="tel:+1234567890"
                    className="text-lg sm:text-xl font-light font-kh-teka flex items-center gap-2 transition-colors"
                    style={{ color: 'var(--text-primary)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  >
                    +1 (234) 567-890
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>

                {/* Location */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4" style={{ color: 'var(--text-subtle)' }} />
                    <p className="text-xs tracking-wider uppercase font-kh-teka" style={{ color: 'var(--text-subtle)' }}>Location</p>
                  </div>
                  <p className="text-lg sm:text-xl font-light font-kh-teka" style={{ color: 'var(--text-primary)' }}>
                    San Francisco, CA
                  </p>
                  <p className="text-sm font-kh-teka mt-1" style={{ color: 'var(--text-muted)' }}>
                    Working with clients worldwide
                  </p>
                </div>

                {/* Availability */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4" style={{ color: 'var(--text-subtle)' }} />
                    <p className="text-xs tracking-wider uppercase font-kh-teka" style={{ color: 'var(--text-subtle)' }}>Availability</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: '#22c55e' }}
                    />
                    <p className="text-lg sm:text-xl font-light font-kh-teka" style={{ color: 'var(--text-primary)' }}>
                      Available for new projects
                    </p>
                  </div>
                  <p className="text-sm font-kh-teka mt-1" style={{ color: 'var(--text-muted)' }}>
                    Response within 24 hours
                  </p>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-4"
              >
                <p className="text-xs tracking-wider uppercase font-kh-teka" style={{ color: 'var(--text-subtle)' }}>Connect With Us</p>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: 'https://github.com', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-12 h-12 flex items-center justify-center transition-all duration-300 group"
                      style={{ 
                        backgroundColor: 'var(--bg-card)', 
                        border: '1px solid var(--border-medium)' 
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-light)';
                        e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-medium)';
                        e.currentTarget.style.backgroundColor = 'var(--bg-card)';
                      }}
                    >
                      <Icon 
                        className="w-5 h-5 transition-colors" 
                        style={{ color: 'var(--text-muted)' }}
                      />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Form */}
            <div ref={formRef} className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative"
              >
                {/* Form Container */}
                <div 
                  className="p-8 sm:p-10 md:p-12 backdrop-blur-md rounded-3xl"
                  style={{ 
                    backgroundColor: 'var(--bg-card)', 
                    border: '1px solid var(--border-light)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className="mb-8">
                    <h2 className="text-2xl sm:text-3xl font-accent font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                      Start a Project
                    </h2>
                    <p className="text-base font-kh-teka" style={{ color: 'var(--text-muted)' }}>
                      Tell us about your project and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="relative">
                        <label 
                          className="text-xs mb-3 block tracking-wider uppercase font-kh-teka"
                          style={{ color: 'var(--text-subtle)' }}
                        >
                          Your Name *
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full bg-transparent border-b text-lg font-light py-3 focus:outline-none transition-colors font-kh-teka"
                          style={{ 
                            borderColor: 'var(--border-medium)',
                            color: 'var(--text-primary)'
                          }}
                          placeholder="John Doe"
                        />
                        <div
                          className="absolute bottom-0 left-0 h-[1px] transition-all duration-300"
                          style={{ 
                            backgroundColor: 'var(--text-primary)',
                            width: focusedField === 'name' ? '100%' : '0%'
                          }}
                        />
                      </div>

                      <div className="relative">
                        <label 
                          className="text-xs mb-3 block tracking-wider uppercase font-kh-teka"
                          style={{ color: 'var(--text-subtle)' }}
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full bg-transparent border-b text-lg font-light py-3 focus:outline-none transition-colors font-kh-teka"
                          style={{ 
                            borderColor: 'var(--border-medium)',
                            color: 'var(--text-primary)'
                          }}
                          placeholder="john@example.com"
                        />
                        <div
                          className="absolute bottom-0 left-0 h-[1px] transition-all duration-300"
                          style={{ 
                            backgroundColor: 'var(--text-primary)',
                            width: focusedField === 'email' ? '100%' : '0%'
                          }}
                        />
                      </div>
                    </div>

                    {/* Company & Project Type Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="relative">
                        <label 
                          className="text-xs mb-3 block tracking-wider uppercase font-kh-teka"
                          style={{ color: 'var(--text-subtle)' }}
                        >
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          onFocus={() => setFocusedField('company')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-transparent border-b text-lg font-light py-3 focus:outline-none transition-colors font-kh-teka"
                          style={{ 
                            borderColor: 'var(--border-medium)',
                            color: 'var(--text-primary)'
                          }}
                          placeholder="Your Company"
                        />
                        <div
                          className="absolute bottom-0 left-0 h-[1px] transition-all duration-300"
                          style={{ 
                            backgroundColor: 'var(--text-primary)',
                            width: focusedField === 'company' ? '100%' : '0%'
                          }}
                        />
                      </div>

                      <div className="relative">
                        <label 
                          className="text-xs mb-3 block tracking-wider uppercase font-kh-teka"
                          style={{ color: 'var(--text-subtle)' }}
                        >
                          Project Type
                        </label>
                        <select
                          value={projectType}
                          onChange={(e) => setProjectType(e.target.value)}
                          onFocus={() => setFocusedField('projectType')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-transparent border-b text-lg font-light py-3 focus:outline-none transition-colors appearance-none cursor-pointer font-kh-teka"
                          style={{ 
                            borderColor: 'var(--border-medium)',
                            color: 'var(--text-primary)'
                          }}
                        >
                          <option value="" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>Select project type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type} style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
                              {type}
                            </option>
                          ))}
                        </select>
                        <div
                          className="absolute bottom-0 left-0 h-[1px] transition-all duration-300"
                          style={{ 
                            backgroundColor: 'var(--text-primary)',
                            width: focusedField === 'projectType' ? '100%' : '0%'
                          }}
                        />
                      </div>
                    </div>

                    {/* Budget & Timeline Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="relative">
                        <label 
                          className="text-xs mb-3 block tracking-wider uppercase font-kh-teka"
                          style={{ color: 'var(--text-subtle)' }}
                        >
                          Project Budget
                        </label>
                        <select
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          onFocus={() => setFocusedField('budget')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-transparent border-b text-lg font-light py-3 focus:outline-none transition-colors appearance-none cursor-pointer font-kh-teka"
                          style={{ 
                            borderColor: 'var(--border-medium)',
                            color: 'var(--text-primary)'
                          }}
                        >
                          <option value="" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range.value} value={range.value} style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
                              {range.label}
                            </option>
                          ))}
                        </select>
                        <div
                          className="absolute bottom-0 left-0 h-[1px] transition-all duration-300"
                          style={{ 
                            backgroundColor: 'var(--text-primary)',
                            width: focusedField === 'budget' ? '100%' : '0%'
                          }}
                        />
                      </div>

                      <div className="relative">
                        <label 
                          className="text-xs mb-3 block tracking-wider uppercase font-kh-teka"
                          style={{ color: 'var(--text-subtle)' }}
                        >
                          Timeline
                        </label>
                        <select
                          value={timeline}
                          onChange={(e) => setTimeline(e.target.value)}
                          onFocus={() => setFocusedField('timeline')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-transparent border-b text-lg font-light py-3 focus:outline-none transition-colors appearance-none cursor-pointer font-kh-teka"
                          style={{ 
                            borderColor: 'var(--border-medium)',
                            color: 'var(--text-primary)'
                          }}
                        >
                          <option value="" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>Select timeline</option>
                          {timelineOptions.map((option) => (
                            <option key={option.value} value={option.value} style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <div
                          className="absolute bottom-0 left-0 h-[1px] transition-all duration-300"
                          style={{ 
                            backgroundColor: 'var(--text-primary)',
                            width: focusedField === 'timeline' ? '100%' : '0%'
                          }}
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <label 
                        className="text-xs mb-3 block tracking-wider uppercase font-kh-teka"
                        style={{ color: 'var(--text-subtle)' }}
                      >
                        Project Details *
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={5}
                        className="w-full bg-transparent border-b text-lg font-light py-3 focus:outline-none transition-colors resize-none font-kh-teka"
                        style={{ 
                          borderColor: 'var(--border-medium)',
                          color: 'var(--text-primary)'
                        }}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                      />
                      <div
                        className="absolute bottom-0 left-0 h-[1px] transition-all duration-300"
                        style={{ 
                          backgroundColor: 'var(--text-primary)',
                          width: focusedField === 'message' ? '100%' : '0%'
                        }}
                      />
                    </div>

                    {/* Status Message */}
                    {statusMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm font-light font-kh-teka"
                        style={{ color: statusMessage.startsWith('✓') ? '#22c55e' : '#ef4444' }}
                      >
                        {statusMessage}
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="pt-4"
                    >
                      <button
                        type="submit"
                        disabled={loading}
                        className="group relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed font-kh-teka rounded-full overflow-hidden"
                        style={{ 
                          backgroundColor: '#ffffff', 
                          color: '#000000',
                          boxShadow: '0 10px 40px rgba(255, 255, 255, 0.1)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = '0 15px 50px rgba(255, 255, 255, 0.2)';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = '0 10px 40px rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        {loading ? (
                          <>
                            <div 
                              className="w-5 h-5 border-2 rounded-full animate-spin"
                              style={{ borderColor: 'var(--bg-primary)', borderTopColor: 'transparent' }}
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </>
                        )}
                      </button>
                    </motion.div>
                  </form>
                </div>

                {/* Decorative Corners */}
                <div 
                  className="absolute -top-4 -right-4 w-24 h-24 border-t border-r pointer-events-none"
                  style={{ borderColor: 'var(--border-medium)' }}
                />
                <div 
                  className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l pointer-events-none"
                  style={{ borderColor: 'var(--border-medium)' }}
                />
              </motion.div>
            </div>
          </div>

          {/* Alternative Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 sm:mt-20 pt-12 sm:pt-16"
            style={{ borderTop: '1px solid var(--border-medium)' }}
          >
            <div className="text-center space-y-6">
              <p className="text-sm font-light tracking-wide font-kh-teka" style={{ color: 'var(--text-subtle)' }}>
                Prefer a different method?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                <a
                  href="mailto:hello@adesign.agency"
                  className="group flex items-center gap-2 transition-colors font-kh-teka"
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm sm:text-base font-light">Direct Email</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <div className="hidden sm:block w-[1px] h-4" style={{ backgroundColor: 'var(--border-light)' }} />
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 transition-colors font-kh-teka"
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm sm:text-base font-light">LinkedIn Message</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <div className="hidden sm:block w-[1px] h-4" style={{ backgroundColor: 'var(--border-light)' }} />
                <a
                  href="tel:+1234567890"
                  className="group flex items-center gap-2 transition-colors font-kh-teka"
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm sm:text-base font-light">Schedule a Call</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-24">
        <div className="max-w-[1920px] mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-accent font-black mb-4" style={{ color: 'var(--text-primary)' }}>
                Frequently Asked <span style={{ color: 'var(--text-subtle)' }}>Questions</span>
              </h2>
              <p className="text-lg font-kh-teka" style={{ color: 'var(--text-muted)' }}>
                Have questions? We've got answers.
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  question: 'What is your typical project timeline?',
                  answer: "Most projects take 6-12 weeks depending on complexity. We'll provide a detailed timeline during our initial consultation based on your specific needs.",
                },
                {
                  question: 'How does your pricing work?',
                  answer: "We offer project-based pricing tailored to your needs. After understanding your requirements, we provide a detailed proposal with transparent pricing—no surprises.",
                },
                {
                  question: 'Do you work with clients remotely?',
                  answer: "Absolutely! We work with clients worldwide. We use modern collaboration tools to ensure seamless communication regardless of your location.",
                },
                {
                  question: 'What happens after the project launches?',
                  answer: "We offer ongoing support and maintenance packages. We're here for the long haul—from launch to continuous optimization and growth.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 md:p-8"
                  style={{ 
                    backgroundColor: 'var(--bg-card)', 
                    border: '1px solid var(--border-medium)' 
                  }}
                >
                  <h3 className="text-lg md:text-xl font-accent font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                    {faq.question}
                  </h3>
                  <p className="text-base font-kh-teka leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
