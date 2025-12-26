/**
 * Theme style utilities
 * Use CSS variables instead of hardcoded colors
 */

export const themeStyles = {
  // Text colors - can be used with style={{ color: 'var(--text-primary)' }}
  text: {
    primary: 'text-[color:var(--text-primary)]',
    secondary: 'text-[color:var(--text-secondary)]',
    muted: 'text-[color:var(--text-muted)]',
    light: 'text-[color:var(--text-light)]',
    subtle: 'text-[color:var(--text-subtle)]',
    verySubtle: 'text-[color:var(--text-very-subtle)]',
    faint: 'text-[color:var(--text-faint)]',
  },
  
  // Background colors
  bg: {
    primary: 'bg-[color:var(--bg-primary)]',
    secondary: 'bg-[color:var(--bg-secondary)]',
    overlay: 'bg-[color:var(--bg-overlay)]',
    card: 'bg-[color:var(--bg-card)]',
    glass: 'bg-[color:var(--bg-glass)]',
  },
  
  // Border colors
  border: {
    light: 'border-[color:var(--border-light)]',
    medium: 'border-[color:var(--border-medium)]',
  },
  
  // Line colors
  line: {
    primary: 'bg-[color:var(--line-primary)]',
    secondary: 'bg-[color:var(--line-secondary)]',
    light: 'bg-[color:var(--line-light)]',
  },
};

// For inline styles when needed
export const getThemeVars = () => ({
  textPrimary: 'var(--text-primary)',
  textSecondary: 'var(--text-secondary)',
  textMuted: 'var(--text-muted)',
  textLight: 'var(--text-light)',
  textSubtle: 'var(--text-subtle)',
  textVerySubtle: 'var(--text-very-subtle)',
  textFaint: 'var(--text-faint)',
  bgPrimary: 'var(--bg-primary)',
  bgSecondary: 'var(--bg-secondary)',
  bgOverlay: 'var(--bg-overlay)',
  bgCard: 'var(--bg-card)',
  borderLight: 'var(--border-light)',
  borderMedium: 'var(--border-medium)',
  linePrimary: 'var(--line-primary)',
  lineSecondary: 'var(--line-secondary)',
  lineLight: 'var(--line-light)',
  ctaPrimary: 'var(--cta-primary)',
  ctaPrimaryText: 'var(--cta-primary-text)',
  ctaBorder: 'var(--cta-border)',
});
