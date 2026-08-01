'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import { Check, TrendingUp, Users, Star, Calendar, MessageSquare } from 'lucide-react';

function IPhoneMockup({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="relative mx-auto select-none" style={{ width: '100%', maxWidth: '280px' }}>
      {/* Outer shell */}
      <div
        className="relative rounded-[2.8rem] p-2"
        style={{
          background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
          boxShadow:
            'inset 0 0 0 1px rgba(255,255,255,0.12), 0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,0,0,0.8)',
        }}
      >
        {/* Left buttons */}
        <div className="absolute rounded-l-sm" style={{ left: '-3px', top: '72px', width: '3px', height: '28px', backgroundColor: '#333' }} />
        <div className="absolute rounded-l-sm" style={{ left: '-3px', top: '112px', width: '3px', height: '50px', backgroundColor: '#333' }} />
        <div className="absolute rounded-l-sm" style={{ left: '-3px', top: '174px', width: '3px', height: '50px', backgroundColor: '#333' }} />
        {/* Right button */}
        <div className="absolute rounded-r-sm" style={{ right: '-3px', top: '110px', width: '3px', height: '72px', backgroundColor: '#333' }} />

        {/* Screen bezel */}
        <div
          className="relative overflow-hidden rounded-[2.2rem]"
          style={{ aspectRatio: '9 / 19.5', backgroundColor: '#000' }}
        >
          {/* Dynamic Island */}
          <div
            className="absolute z-10 rounded-full"
            style={{
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '96px',
              height: '28px',
              backgroundColor: '#000',
            }}
          />

          {/* Screenshot — object-top clips long Figma scrollable screens at the top */}
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="hidden lg:flex items-center justify-center shrink-0" style={{ width: '72px' }}>
      <div className="flex items-center w-full" style={{ color: 'var(--border-light)' }}>
        <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border-medium)' }} />
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="shrink-0 -ml-1">
          <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M10 14h8M15 11l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

const screenFlows = [
  {
    flowLabel: 'Onboarding',
    screens: [
      { src: '/portfolio-images-work/savastha/login.jpg', label: 'Login', description: 'Secure sign-in via phone OTP or email — no passwords to remember.' },
      { src: '/portfolio-images-work/savastha/signup-choice.jpg', label: 'Sign Up', description: 'Choose your role upfront — patient or doctor — to tailor the experience.' },
      { src: '/portfolio-images-work/savastha/patient-account-setup.jpg', label: 'Account Setup', description: 'Build your health profile in under 60 seconds with guided onboarding.' },
    ],
  },
  {
    flowLabel: 'Finding a Doctor',
    screens: [
      { src: '/portfolio-images-work/savastha/doctor-search.jpg', label: 'Doctor Search', description: 'Filter by specialty, location, language, and real-time slot availability.' },
      { src: '/portfolio-images-work/savastha/doctor-profile.jpg', label: 'Doctor Profile', description: 'Full profile with ratings, qualifications, experience, and open appointments.' },
      { src: '/portfolio-images-work/savastha/appointment-date-time.jpg', label: 'Pick a Slot', description: 'Calendar view of available times — pick the one that fits your schedule.' },
    ],
  },
  {
    flowLabel: 'Booking & Payment',
    screens: [
      { src: '/portfolio-images-work/savastha/appointment-confirm-pay.jpg', label: 'Confirm & Pay', description: 'Review appointment details and pay securely via Razorpay in one tap.' },
      { src: '/portfolio-images-work/savastha/booking-confirmation.jpg', label: 'Booking Confirmed', description: 'Instant confirmation with calendar sync and reminder notification.' },
      { src: '/portfolio-images-work/savastha/doctor-dashboard.jpg', label: 'Doctor Dashboard', description: "Doctors see their full schedule, patient queue, and today's consultations." },
    ],
  },
  {
    flowLabel: 'Ongoing Care',
    screens: [
      { src: '/portfolio-images-work/savastha/billing-payments.jpg', label: 'Billing & Payments', description: 'Download GST-ready receipts and track full payment history at a glance.' },
      { src: '/portfolio-images-work/savastha/chat-messaging.jpg', label: 'Chat & Messaging', description: 'Direct secure messaging with your doctor for follow-ups and queries.' },
      { src: '/portfolio-images-work/savastha/settings-profile.jpg', label: 'Settings & Profile', description: 'Manage health records, notification preferences, and linked devices.' },
    ],
  },
];

export default function SavasthaClinicCaseStudy() {
  const heroRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroInView = useInView(heroRef, { once: true });
  const resultsInView = useInView(resultsRef, { once: true });
  const processInView = useInView(processRef, { once: true });

  const results = [
    { metric: '100%', label: 'Digital Booking', Icon: Star },
    { metric: '500+', label: 'Patients', Icon: Users },
  ];

  const process = [
    {
      num: '01',
      title: 'Research & Discovery',
      description: 'Conducted in-depth interviews with patients, doctors, and clinic administrators to map pain points in existing appointment and billing workflows. Benchmarked against leading health-tech apps across India and globally.',
      duration: '2 weeks',
      details: ['User Interviews', 'Competitor Audit', 'Journey Mapping', 'Stakeholder Workshops'],
    },
    {
      num: '02',
      title: 'UX Architecture & Wireframing',
      description: 'Designed two distinct user flows — patient-facing (search, book, pay, chat) and doctor-facing (dashboard, schedule, consultations). Information architecture was simplified to reduce friction at every touchpoint.',
      duration: '3 weeks',
      details: ['IA Design', 'Wireframes', 'Flow Validation', 'Accessibility Review'],
    },
    {
      num: '03',
      title: 'UI Design & Prototype',
      description: 'Built a calm, trust-first visual system: soft whites, a clinical green accent, and high-contrast typography for readability across age groups. All 40+ screens designed in Figma with interactive prototypes for usability testing.',
      duration: '4 weeks',
      details: ['Design System', 'Component Library', '40+ Screens', 'Usability Testing'],
    },
    {
      num: '04',
      title: 'Development & Launch',
      description: 'Developed in React Native with a Node.js backend, Razorpay for payments, and Firebase for real-time chat and notifications. Launched on iOS and Android simultaneously with a phased rollout to partner clinics.',
      duration: '6 weeks',
      details: ['React Native', 'Firebase', 'Razorpay', 'App Store Launch'],
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <SmoothScroll />
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-32 pb-20 overflow-hidden"
      >
        <div className="w-full max-w-480 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em]" style={{ color: 'var(--text-subtle)' }}>Case Study · Mobile App</span>
                  <h1 className="text-6xl sm:text-7xl md:text-8xl font-accent font-black leading-[0.95] mt-4 mb-4" style={{ color: 'var(--text-primary)' }}>
                    Savastha<br />
                    <span style={{ color: 'var(--text-subtle)' }}>Clinic</span>
                  </h1>
                  <p className="text-2xl font-light" style={{ color: 'var(--text-muted)' }}>Healthcare Booking & Consultation App</p>
                </div>

                <div className="space-y-4 py-8 border-y" style={{ borderColor: 'var(--border-faint)' }}>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--text-subtle)' }}>Timeline</p>
                    <p className="text-lg font-medium" style={{ color: 'var(--text-primary)' }}>15 weeks</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--text-subtle)' }}>Team</p>
                    <p className="text-lg font-medium" style={{ color: 'var(--text-primary)' }}>1 UI/UX Designer, 2 Mobile Developers, 1 Backend Engineer</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--text-subtle)' }}>Tech Stack</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['React Native', 'Node.js', 'Firebase', 'Razorpay', 'Figma'].map(tech => (
                        <span key={tech} className="px-3 py-1 text-sm border" style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-medium)', color: 'var(--text-primary)' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  A full-featured healthcare mobile app enabling patients to search doctors, book appointments, pay, and consult via chat — all from one place.
                </p>
              </div>
            </motion.div>

            {/* Right: 3 stacked phone mockups */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center gap-4 lg:gap-6"
            >
              {/* Left phone — slightly lower */}
              <div className="mt-12 opacity-70 scale-90 hidden sm:block">
                <IPhoneMockup src="/portfolio-images-work/savastha/signup-choice.jpg" alt="Signup" />
              </div>
              {/* Center phone — hero */}
              <div>
                <IPhoneMockup src="/portfolio-images-work/savastha/doctor-search.jpg" alt="Doctor Search" priority />
              </div>
              {/* Right phone — slightly lower */}
              <div className="mt-12 opacity-70 scale-90 hidden sm:block">
                <IPhoneMockup src="/portfolio-images-work/savastha/appointment-date-time.jpg" alt="Book Appointment" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <div className="w-full max-w-480 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl font-accent font-black mb-6" style={{ color: 'var(--text-primary)' }}>
                The Challenge
              </h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  Patients in tier-2 and tier-3 cities struggled to find qualified doctors, book appointments, and pay — often relying on phone calls and walk-ins. Clinics had no unified system, leading to double-bookings, missed follow-ups, and poor patient retention.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  The brief: design and build a dual-sided app (patient + doctor) that felt as simple as booking a cab, while meeting the trust and compliance needs of healthcare.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl sm:text-5xl font-accent font-black mb-6" style={{ color: 'var(--text-primary)' }}>
                Our Solution
              </h2>
              <div className="space-y-4">
                {[
                  'Doctor search by specialty, location, and availability',
                  'Real-time appointment booking with calendar sync',
                  'Razorpay-powered payments with insurance-ready receipts',
                  'In-app chat and video consultation support',
                  'Doctor dashboard with schedule, patient records, and billing',
                  'Push notifications for reminders and follow-ups',
                ].map((solution, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <Check className="w-5 h-5 shrink-0 mt-1" style={{ color: 'var(--text-muted)' }} />
                    <span className="text-base" style={{ color: 'var(--text-muted)' }}>{solution}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section ref={resultsRef} className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-480 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={resultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-accent font-black mb-16 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Results That <span style={{ color: 'var(--text-subtle)' }}>Matter</span>
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => {
              const Icon = result.Icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={resultsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 border transition-all"
                  style={{ borderColor: 'var(--border-faint)', backgroundColor: 'var(--bg-elevated)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-card)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-elevated)')}
                >
                  <Icon className="w-7 h-7 mb-4" style={{ color: 'var(--text-muted)' }} />
                  <div className="text-4xl font-accent font-black mb-2" style={{ color: 'var(--text-primary)' }}>{result.metric}</div>
                  <div className="text-sm font-light" style={{ color: 'var(--text-muted)' }}>{result.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* App Flow Gallery */}
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <div className="w-full max-w-480 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px" style={{ backgroundColor: 'var(--line-secondary)' }} />
              <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase font-light" style={{ color: 'var(--text-subtle)' }}>User Flow</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-accent font-black leading-[0.95]" style={{ color: 'var(--text-primary)' }}>
              App <span style={{ color: 'var(--text-subtle)' }}>Showcase</span>
            </h2>
          </motion.div>

          <div className="space-y-28">
            {screenFlows.map((flow, flowIndex) => (
              <motion.div
                key={flow.flowLabel}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {/* Flow label */}
                <div className="flex items-center gap-4 mb-12">
                  <span
                    className="text-[11px] tracking-[0.35em] uppercase font-medium px-3 py-1.5 border"
                    style={{ color: 'var(--text-muted)', borderColor: 'var(--border-medium)', backgroundColor: 'var(--bg-card)' }}
                  >
                    {String(flowIndex + 1).padStart(2, '0')} — {flow.flowLabel}
                  </span>
                  <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border-faint)' }} />
                </div>

                {/* Phone row with arrows through the middle */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-0">
                  {flow.screens.map((screen, screenIndex) => (
                    <div key={screen.src} className="contents">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: screenIndex * 0.15 }}
                        className="flex-1"
                      >
                        <IPhoneMockup src={screen.src} alt={screen.label} />
                      </motion.div>
                      {screenIndex < flow.screens.length - 1 && <FlowArrow />}
                    </div>
                  ))}
                </div>

                {/* Labels & descriptions below phones — aligned in 3 cols */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                  {flow.screens.map((screen, screenIndex) => (
                    <motion.div
                      key={`label-${screen.src}`}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + screenIndex * 0.1 }}
                      className="text-center px-4"
                    >
                      <p className="text-sm font-semibold tracking-wide mb-1.5" style={{ color: 'var(--text-primary)' }}>
                        {screen.label}
                      </p>
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        {screen.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section ref={processRef} className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-480 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-accent font-black mb-16 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            Project <span style={{ color: 'var(--text-subtle)' }}>Timeline</span>
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pb-12 last:pb-0"
              >
                {index !== process.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, var(--border-medium), transparent)' }} />
                )}
                <div className="flex gap-6">
                  <div className="relative z-10 shrink-0">
                    <div className="w-16 h-16 border-2 flex items-center justify-center" style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-medium)' }}>
                      <span className="text-sm font-accent font-bold" style={{ color: 'var(--text-primary)' }}>{step.num}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-accent font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                    <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-muted)' }}>{step.description}</p>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-sm italic" style={{ color: 'var(--text-subtle)' }}>{step.duration}</span>
                      {step.details.map((detail, i) => (
                        <span key={i} className="text-xs border px-3 py-1" style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-medium)', color: 'var(--text-muted)' }}>
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20" style={{ backgroundColor: 'var(--bg-elevated)' }}>
        <div className="w-full max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" style={{ color: 'var(--text-primary)' }} />
              ))}
            </div>
            <p className="text-2xl sm:text-3xl font-light leading-relaxed mb-8" style={{ color: 'var(--text-primary)' }}>
              "Savastha transformed how our clinic operates. Patients love how easy it is to book, and our doctors spend less time on admin and more time on care. The app paid for itself within the first month."
            </p>
            <div>
              <p className="text-lg font-accent font-bold" style={{ color: 'var(--text-primary)' }}>Dr. Arjun Mehta</p>
              <p style={{ color: 'var(--text-muted)' }}>Founder, Savastha Clinic</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-480 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-accent font-black mb-8" style={{ color: 'var(--text-primary)' }}>
              Ready to Build Your <span style={{ color: 'var(--text-subtle)' }}>Mobile App?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 sm:px-12 py-4 font-accent font-bold transition-all" style={{ backgroundColor: 'var(--cta-primary)', color: 'var(--cta-primary-text)' }}>
                  Start Your Project
                </button>
              </Link>
              <Link href="/work">
                <button
                  className="px-8 sm:px-12 py-4 border font-accent font-bold transition-all"
                  style={{ borderColor: 'var(--border-light)', color: 'var(--text-primary)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-medium)'; e.currentTarget.style.backgroundColor = 'var(--bg-elevated)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  View More Projects
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
