/**
 * Centralized Color Palette
 * Dark mode is the default/current theme
 * Light mode will be the inverse
 */

export const COLORS = {
  DARK: {
    // Backgrounds
    bg: {
      primary: '#000000',        // bg-black
      secondary: '#0a0a0a',      // slightly lighter black
      overlay: 'rgba(0, 0, 0, 0.2)',   // bg-black/20
      overlayLight: 'rgba(0, 0, 0, 0.1)',  // bg-black/10
      card: 'rgba(255, 255, 255, 0.02)', // bg-white/2
      hover: 'rgba(255, 255, 255, 0.04)', // bg-white/4
      glassmorphism: 'rgba(0, 0, 0, 0.3)', // bg-black/30
      glassmorphismHeavy: 'rgba(0, 0, 0, 0.5)', // bg-black/50
      glass60: 'rgba(0, 0, 0, 0.6)', // bg-black/60
    },

    // Text/Foreground Colors
    text: {
      primary: '#ffffff',          // text-white
      secondary: 'rgba(255, 255, 255, 0.9)',  // text-white/90
      tertiary: 'rgba(255, 255, 255, 0.85)', // text-white/85
      muted: 'rgba(255, 255, 255, 0.7)',     // text-white/70
      mutedLight: 'rgba(255, 255, 255, 0.65)', // text-white/65
      disabled: 'rgba(255, 255, 255, 0.5)',  // text-white/50
      placeholder: 'rgba(255, 255, 255, 0.4)', // text-white/40
      subtle: 'rgba(255, 255, 255, 0.3)',    // text-white/30
      verySubtle: 'rgba(255, 255, 255, 0.25)', // text-white/25
      faint: 'rgba(255, 255, 255, 0.2)',     // text-white/20
      superFaint: 'rgba(255, 255, 255, 0.1)', // text-white/10
      veryFaint: 'rgba(255, 255, 255, 0.05)', // text-white/5
    },

    // Borders & Dividers
    border: {
      light: 'rgba(255, 255, 255, 0.2)',   // border-white/20
      medium: 'rgba(255, 255, 255, 0.1)',  // border-white/10
      faint: 'rgba(255, 255, 255, 0.05)',  // border-white/5
    },

    // Lines & Decorative Elements
    line: {
      primary: 'rgba(255, 255, 255, 0.6)',  // h-px bg-white/60
      secondary: 'rgba(255, 255, 255, 0.4)', // h-px bg-white/40
      light: 'rgba(255, 255, 255, 0.3)',    // h-px bg-white/30
      veryLight: 'rgba(255, 255, 255, 0.2)', // h-px bg-white/20
      minimal: 'rgba(255, 255, 255, 0.1)',  // h-px bg-white/10
    },

    // Special Effects
    glow: {
      soft: 'rgba(255, 255, 255, 0.05)',   // for subtle glow
      medium: 'rgba(255, 255, 255, 0.1)',  // medium glow
      bright: 'rgba(255, 255, 255, 0.15)', // bright glow
    },

    // Status Colors
    status: {
      success: '#10B981',    // green badge
      error: '#EF4444',      // red
      warning: '#F59E0B',    // amber
      info: '#3B82F6',       // blue
    },

    // CTA & Interactive
    cta: {
      primary: '#ffffff',         // white button
      primaryText: '#000000',     // black text on white
      secondary: 'transparent',   // transparent button
      secondaryText: '#ffffff',   // white text
      secondaryBorder: 'rgba(255, 255, 255, 0.3)', // border-white/30
      secondaryBorderHover: 'rgba(255, 255, 255, 0.5)', // border-white/50
      hoverOpacity: 'rgba(255, 255, 255, 0.9)', // hover:bg-white/90
    },

    // Gradients
    gradient: {
      fade: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 1))', // fade to black
      fadeRight: 'linear-gradient(to right, rgba(0, 0, 0, 1), transparent)', // fade right
      fadeLeft: 'linear-gradient(to left, rgba(0, 0, 0, 1), transparent)', // fade left
      divider: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent)',
      stroke: '1px rgba(255, 255, 255, 0.15)', // SVG stroke
      strokeThick: '2px rgba(255, 255, 255, 0.25)', // Thick stroke for marquee
    },

    // Specific Component Colors
    hero: {
      label: 'rgba(255, 255, 255, 0.7)', // text-white/70
      headingSecondary: 'rgba(255, 255, 255, 0.4)', // text-white/40 on h1
      stats: 'rgba(255, 255, 255, 0.6)', // Stats label
      specialization: 'rgba(255, 255, 255, 0.9)', // What we do section
    },

    navigation: {
      menuLabel: 'rgba(255, 255, 255, 1)', // text-white
      menuLink: 'rgba(255, 255, 255, 1)', // text-white
      menuLinkHover: 'rgba(255, 255, 255, 0.7)', // text-white/70
      pagesLabel: 'rgba(255, 255, 255, 0.7)', // text-white/70
    },

    work: {
      heading: 'rgba(255, 255, 255, 0.4)', // text-white/40 on "Work"
      description: 'rgba(255, 255, 255, 0.65)', // text-white/65
      subtitle: 'rgba(255, 255, 255, 0.7)', // text-white/70
      projectDesc: 'rgba(255, 255, 255, 0.55)', // text-white/55
      label: 'rgba(255, 255, 255, 0.5)', // text-white/50
      category: 'rgba(255, 255, 255, 0.4)', // text-white/40
    },

    services: {
      heading: 'rgba(255, 255, 255, 0.4)', // text-white/40 on "Do"
      description: 'rgba(255, 255, 255, 0.65)', // text-white/65
      number: 'rgba(255, 255, 255, 0.25)', // text-white/25
      numberHover: 'rgba(255, 255, 255, 0.4)', // text-white/40
      label: 'rgba(255, 255, 255, 0.5)', // text-white/50
      capTag: 'rgba(255, 255, 255, 0.6)', // text-white/60
      cta: 'rgba(255, 255, 255, 0.7)', // text-white/70
      ctaHover: 'rgba(255, 255, 255, 1)', // text-white
    },

    process: {
      heading: 'rgba(255, 255, 255, 0.4)', // text-white/40 on "Work"
      description: 'rgba(255, 255, 255, 0.65)', // text-white/65
      number: 'rgba(255, 255, 255, 0.25)', // text-white/25
      label: 'rgba(255, 255, 255, 0.5)', // text-white/50
      duration: 'rgba(255, 255, 255, 0.5)', // Duration badge
      detail: 'rgba(255, 255, 255, 0.6)', // text-white/60
    },

    team: {
      founder: 'rgba(255, 255, 255, 0.5)', // Role text
      bio: 'rgba(255, 255, 255, 0.55)', // text-white/55
      expertise: 'rgba(255, 255, 255, 0.6)', // text-white/60
      heading: 'rgba(255, 255, 255, 0.4)', // text-white/40 on "Founders"
      subheading: 'rgba(255, 255, 255, 0.6)', // Extended team label
    },

    testimonials: {
      heading: 'rgba(255, 255, 255, 0.4)', // text-white/40 on "Say"
      quote: 'rgba(255, 255, 255, 1)', // text-white
      author: 'rgba(255, 255, 255, 1)', // Author name
      role: 'rgba(255, 255, 255, 0.5)', // Role/company
      metric: 'rgba(255, 255, 255, 1)', // Metric display
    },

    footer: {
      tagline: 'rgba(255, 255, 255, 0.85)', // text-white/85
      contact: 'rgba(255, 255, 255, 0.5)', // text-white/50
      contactHover: 'rgba(255, 255, 255, 1)', // text-white
      link: 'rgba(255, 255, 255, 0.6)', // text-white/60
      linkHover: 'rgba(255, 255, 255, 1)', // text-white
      label: 'rgba(255, 255, 255, 0.3)', // text-white/30
      description: 'rgba(255, 255, 255, 0.5)', // text-white/50
      copyright: 'rgba(255, 255, 255, 0.3)', // text-white/30
    },

    cta: {
      heading: '#ffffff', // text-white
      subtitle: 'rgba(255, 255, 255, 0.65)', // text-white/65
      button: '#ffffff',
      buttonText: '#000000',
      buttonHover: 'rgba(255, 255, 255, 0.9)',
      secondaryText: 'rgba(255, 255, 255, 0.3)', // Label text
    },
  },

  LIGHT: {
    // Backgrounds
    bg: {
      primary: '#ffffff',
      secondary: '#f5f5f5',
      overlay: 'rgba(0, 0, 0, 0.1)',
      overlayLight: 'rgba(0, 0, 0, 0.05)',
      card: 'rgba(0, 0, 0, 0.02)',
      hover: 'rgba(0, 0, 0, 0.04)',
      glassmorphism: 'rgba(255, 255, 255, 0.7)',
      glassmorphismHeavy: 'rgba(255, 255, 255, 0.8)',
      glass60: 'rgba(255, 255, 255, 0.6)',
    },

    // Text/Foreground Colors (inverted from dark)
    text: {
      primary: '#000000',
      secondary: 'rgba(0, 0, 0, 0.9)',
      tertiary: 'rgba(0, 0, 0, 0.85)',
      muted: 'rgba(0, 0, 0, 0.7)',
      mutedLight: 'rgba(0, 0, 0, 0.65)',
      disabled: 'rgba(0, 0, 0, 0.5)',
      placeholder: 'rgba(0, 0, 0, 0.4)',
      subtle: 'rgba(0, 0, 0, 0.3)',
      verySubtle: 'rgba(0, 0, 0, 0.25)',
      faint: 'rgba(0, 0, 0, 0.2)',
      superFaint: 'rgba(0, 0, 0, 0.1)',
      veryFaint: 'rgba(0, 0, 0, 0.05)',
    },

    // Borders & Dividers (light mode inverted)
    border: {
      light: 'rgba(0, 0, 0, 0.2)',
      medium: 'rgba(0, 0, 0, 0.1)',
      faint: 'rgba(0, 0, 0, 0.05)',
    },

    // Lines & Decorative Elements
    line: {
      primary: 'rgba(0, 0, 0, 0.6)',
      secondary: 'rgba(0, 0, 0, 0.4)',
      light: 'rgba(0, 0, 0, 0.3)',
      veryLight: 'rgba(0, 0, 0, 0.2)',
      minimal: 'rgba(0, 0, 0, 0.1)',
    },

    // Special Effects
    glow: {
      soft: 'rgba(0, 0, 0, 0.05)',
      medium: 'rgba(0, 0, 0, 0.1)',
      bright: 'rgba(0, 0, 0, 0.15)',
    },

    // Status Colors (same as dark)
    status: {
      success: '#10B981',
      error: '#EF4444',
      warning: '#F59E0B',
      info: '#3B82F6',
    },

    // CTA & Interactive (inverted)
    cta: {
      primary: '#000000',
      primaryText: '#ffffff',
      secondary: 'transparent',
      secondaryText: '#000000',
      secondaryBorder: 'rgba(0, 0, 0, 0.3)',
      secondaryBorderHover: 'rgba(0, 0, 0, 0.5)',
      hoverOpacity: 'rgba(0, 0, 0, 0.9)',
    },

    // Gradients (light mode)
    gradient: {
      fade: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 1))',
      fadeRight: 'linear-gradient(to right, rgba(255, 255, 255, 1), transparent)',
      fadeLeft: 'linear-gradient(to left, rgba(255, 255, 255, 1), transparent)',
      divider: 'linear-gradient(to right, transparent, rgba(0, 0, 0, 0.1), transparent)',
      stroke: '1px rgba(0, 0, 0, 0.15)',
      strokeThick: '2px rgba(0, 0, 0, 0.25)',
    },

    // Component-specific (same pattern as dark, but inverted values)
    hero: {
      label: 'rgba(0, 0, 0, 0.7)',
      headingSecondary: 'rgba(0, 0, 0, 0.4)',
      stats: 'rgba(0, 0, 0, 0.6)',
      specialization: 'rgba(0, 0, 0, 0.9)',
    },

    navigation: {
      menuLabel: 'rgba(0, 0, 0, 1)',
      menuLink: 'rgba(0, 0, 0, 1)',
      menuLinkHover: 'rgba(0, 0, 0, 0.7)',
      pagesLabel: 'rgba(0, 0, 0, 0.7)',
    },

    work: {
      heading: 'rgba(0, 0, 0, 0.4)',
      description: 'rgba(0, 0, 0, 0.65)',
      subtitle: 'rgba(0, 0, 0, 0.7)',
      projectDesc: 'rgba(0, 0, 0, 0.55)',
      label: 'rgba(0, 0, 0, 0.5)',
      category: 'rgba(0, 0, 0, 0.4)',
    },

    services: {
      heading: 'rgba(0, 0, 0, 0.4)',
      description: 'rgba(0, 0, 0, 0.65)',
      number: 'rgba(0, 0, 0, 0.25)',
      numberHover: 'rgba(0, 0, 0, 0.4)',
      label: 'rgba(0, 0, 0, 0.5)',
      capTag: 'rgba(0, 0, 0, 0.6)',
      cta: 'rgba(0, 0, 0, 0.7)',
      ctaHover: 'rgba(0, 0, 0, 1)',
    },

    process: {
      heading: 'rgba(0, 0, 0, 0.4)',
      description: 'rgba(0, 0, 0, 0.65)',
      number: 'rgba(0, 0, 0, 0.25)',
      label: 'rgba(0, 0, 0, 0.5)',
      duration: 'rgba(0, 0, 0, 0.5)',
      detail: 'rgba(0, 0, 0, 0.6)',
    },

    team: {
      founder: 'rgba(0, 0, 0, 0.5)',
      bio: 'rgba(0, 0, 0, 0.55)',
      expertise: 'rgba(0, 0, 0, 0.6)',
      heading: 'rgba(0, 0, 0, 0.4)',
      subheading: 'rgba(0, 0, 0, 0.6)',
    },

    testimonials: {
      heading: 'rgba(0, 0, 0, 0.4)',
      quote: 'rgba(0, 0, 0, 1)',
      author: 'rgba(0, 0, 0, 1)',
      role: 'rgba(0, 0, 0, 0.5)',
      metric: 'rgba(0, 0, 0, 1)',
    },

    footer: {
      tagline: 'rgba(0, 0, 0, 0.85)',
      contact: 'rgba(0, 0, 0, 0.5)',
      contactHover: 'rgba(0, 0, 0, 1)',
      link: 'rgba(0, 0, 0, 0.6)',
      linkHover: 'rgba(0, 0, 0, 1)',
      label: 'rgba(0, 0, 0, 0.3)',
      description: 'rgba(0, 0, 0, 0.5)',
      copyright: 'rgba(0, 0, 0, 0.3)',
    },

    cta: {
      heading: '#000000',
      subtitle: 'rgba(0, 0, 0, 0.65)',
      button: '#000000',
      buttonText: '#ffffff',
      buttonHover: 'rgba(0, 0, 0, 0.9)',
      secondaryText: 'rgba(0, 0, 0, 0.3)',
    },
  },
};

// Helper function to get theme colors
export const getThemeColors = (isDarkMode: boolean = true) => {
  return isDarkMode ? COLORS.DARK : COLORS.LIGHT;
};
