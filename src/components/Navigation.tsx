'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [forceClosed, setForceClosed] = useState(false);
  const [fastOpen, setFastOpen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isOpen = isMenuHovered && !forceClosed;

  // Detect touch device
  useEffect(() => {
    const hasTouchOnly = 'ontouchstart' in window && window.matchMedia('(pointer: coarse)').matches;
    setIsTouchDevice(hasTouchOnly);
  }, []);

  // Close menu when clicking outside on touch devices
  useEffect(() => {
    if (!isTouchDevice || !isOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuHovered(false);
        setForceClosed(false);
        setFastOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isTouchDevice, isOpen]);

  const menuItems = [
    { label: 'HOME', href: '/' },
    { label: 'WORK', href: '/work' },
    { label: 'SERVICES', href: '/services' },
    { label: 'PRICING', href: '/pricing' },
    { label: 'ABOUT', href: '/about' },
    { label: 'CONTACT', href: '/contact' },
  ];

  return (
    <>
      {/* Y Logo - Desktop Only (Left side) */}
      <Link 
        href="/"
        className="hidden lg:block fixed top-6 md:top-8 left-6 md:left-8 z-50 group cursor-pointer"
      >
        <div 
          className="w-12 h-12 md:w-14 md:h-14 backdrop-blur-md rounded-lg md:rounded-[0.5vw] flex items-center justify-center transition-all duration-300"
          style={{ 
            backgroundColor: 'var(--bg-glass)', 
            borderWidth: '1px', 
            borderColor: 'var(--border-faint)' 
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--bg-glass-heavy)';
            e.currentTarget.style.borderColor = 'var(--border-medium)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--bg-glass)';
            e.currentTarget.style.borderColor = 'var(--border-faint)';
          }}
        >
          <span 
            className="text-2xl md:text-3xl font-bold font-kh-teka group-hover:scale-110 transition-transform duration-300"
            style={{ color: 'var(--text-primary)' }}
          >
            A
          </span>
        </div>
      </Link>

      {/* Center Menu Strip */}
      <nav className="fixed top-4 sm:top-6 md:top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div
          ref={menuRef}
          className="relative pb-2 sm:pb-3"
        >
          {/* Main Menu Strip */}
          <div
            className="backdrop-blur-md rounded-lg sm:rounded-[0.5vw] px-3 sm:px-6 md:px-8 py-2 sm:py-2.5 flex items-center justify-between w-[70vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] max-w-xl"
            style={{ backgroundColor: 'var(--bg-glass)', borderWidth: '1px', borderColor: 'var(--border-faint)' }}
            onMouseEnter={() => {
              if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current);
                closeTimeoutRef.current = null;
              }
              if (!forceClosed) {
                setIsMenuHovered(true);
                if (listRef.current && listRef.current.scrollTop > 0) setFastOpen(true);
              }
            }}
            onMouseLeave={() => {
              closeTimeoutRef.current = setTimeout(() => {
                setIsMenuHovered(false);
                setForceClosed(false);
                setFastOpen(false);
              }, 150);
            }}
          >
            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-light tracking-wider" style={{ color: 'var(--text-primary)' }}>MENU</span>
            
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
              {/* Hamburger Icon */}
              <div className={`relative h-3.5 sm:h-4 w-5 sm:w-6 pointer-events-auto flex flex-col justify-center gap-1.5 transition-all duration-300 z-50 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                <span className={`pointer-events-none w-5 sm:w-6 h-0.5 rounded-full transition-all duration-300 ease-out absolute top-0 left-0 ${
                  isOpen ? 'translate-y-[6px] sm:translate-y-[7px] rotate-45' : 'translate-y-0 rotate-0'
                }`} style={{ backgroundColor: 'var(--text-primary)' }}></span>
                <span className={`pointer-events-none w-5 sm:w-6 h-0.5 rounded-full transition-all duration-300 ease-out ${
                  isOpen ? 'opacity-0 scale-x-50' : 'opacity-100 scale-x-100'
                }`} style={{ backgroundColor: 'var(--text-primary)' }}></span>
                <span className={`pointer-events-none w-5 sm:w-6 h-0.5 rounded-full transition-all duration-300 ease-out absolute bottom-0 left-0 ${
                  isOpen ? '-translate-y-[6px] sm:-translate-y-[7px] -rotate-45' : 'translate-y-0 rotate-0'
                }`} style={{ backgroundColor: 'var(--text-primary)' }}></span>
                <button
                  aria-label="toggle menu"
                  className="absolute -inset-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isOpen) {
                      setForceClosed(true);
                      setIsMenuHovered(false);
                      setFastOpen(false);
                    } else {
                      setForceClosed(false);
                      setIsMenuHovered(true);
                      if (listRef.current && listRef.current.scrollTop > 0) setFastOpen(true);
                    }
                  }}
                  style={{ background: 'transparent' }}
                />
              </div>
            </div>
          </div>
          
          {/* Invisible bridge to prevent hover gap - Desktop only */}
          {!isTouchDevice && (
            <div 
              className="absolute left-0 right-0 h-3"
              style={{ top: '100%' }}
              onMouseEnter={() => {
                if (closeTimeoutRef.current) {
                  clearTimeout(closeTimeoutRef.current);
                  closeTimeoutRef.current = null;
                }
                setIsMenuHovered(true);
              }}
            />
          )}
          
          {/* Dropdown Menu */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 ${fastOpen ? 'transition-none' : 'transition-all duration-500 ease-out'} origin-top z-40 ${
            isOpen 
              ? 'visible scale-100 translate-y-0 pointer-events-auto opacity-100' 
              : 'invisible scale-95 -translate-y-6 pointer-events-none opacity-0'
          }`}
          style={{ top: 'calc(100% + 8px)' }}
          >
            <div
              ref={listRef}
              className={`nav-menu-scroll rounded-xl sm:rounded-2xl md:rounded-[0.5vw] shadow-2xl w-[70vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] max-w-xl max-h-[70vh] sm:max-h-[60vh] overflow-y-scroll backdrop-blur-2xl`}
              style={{ 
                overscrollBehavior: 'contain',
                backgroundColor: 'var(--bg-glass-heavy)',
                borderWidth: '1px',
                borderColor: 'var(--border-medium)'
              }}
              onMouseEnter={() => {
                if (closeTimeoutRef.current) {
                  clearTimeout(closeTimeoutRef.current);
                  closeTimeoutRef.current = null;
                }
                setIsMenuHovered(true);
              }}
              onMouseLeave={() => {
                setIsMenuHovered(false);
                setForceClosed(false);
                setFastOpen(false);
              }}
              onWheel={(e) => e.stopPropagation()}
              onScroll={(e) => e.stopPropagation()}
            >
              <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                {/* Sections */}
                <div className="mb-6">
                  <h3 
                    className={`text-sm font-secondary tracking-wider mb-6 ${fastOpen ? 'transition-none' : 'transition-all duration-400'} ${
                      isMenuHovered ? (fastOpen ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0 delay-[100ms]') : 'opacity-0 translate-y-4'
                    }`}
                    style={{ color: 'var(--text-muted)' }}
                  >PAGES</h3>
                  <div className="space-y-3">
                    {menuItems.map((item, i) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block text-lg sm:text-xl md:text-2xl font-light transition-all duration-300 ${fastOpen ? 'transition-none' : 'transition-all duration-400'} ${
                          isMenuHovered 
                            ? `opacity-100 translate-y-0 ${fastOpen ? '' : `delay-[${150 + i * 50}ms]`}` 
                            : 'opacity-0 translate-y-4'
                        }`}
                        style={{ color: 'var(--text-primary)' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                        onClick={() => {
                          setIsMenuHovered(false);
                          setForceClosed(false);
                          setFastOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Book a Call CTA */}
                <Link 
                  href="/contact"
                  className={`w-full py-2 rounded-none text-sm font-medium tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${fastOpen ? 'transition-none' : 'transition-all duration-400'} ${
                    isMenuHovered 
                      ? 'opacity-100 translate-y-0 delay-[400ms]' 
                      : 'opacity-0 translate-y-6'
                  }`}
                  style={{ 
                    backgroundColor: 'var(--cta-primary)', 
                    color: 'var(--cta-primary-text)',
                    borderWidth: '1px',
                    borderColor: 'var(--cta-secondary-border)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--cta-hover)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--cta-primary)'}
                  onClick={() => {
                    setIsMenuHovered(false);
                    setForceClosed(false);
                    setFastOpen(false);
                  }}
                >
                  BOOK A CALL
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Right Controls - Theme Toggle (all screens) & Book a Call (desktop only) */}
      <div className="fixed top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 z-50 flex items-center gap-3">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Book a Call Button - Desktop Only */}
        <Link
          href="/contact"
          className="hidden lg:block group cursor-pointer"
        >
          <div 
            className="backdrop-blur-md rounded-none px-6 py-2 flex items-center gap-2 transition-all duration-300"
            style={{ 
              backgroundColor: 'var(--bg-glass)',
              borderWidth: '1px',
              borderColor: 'var(--border-medium)',
              color: 'var(--text-primary)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--cta-primary)';
              e.currentTarget.style.color = 'var(--cta-primary-text)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--bg-glass)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
          >
            <span className="text-sm font-medium tracking-wider">BOOK A CALL</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </Link>
      </div>
    </>
  );
}
