'use client';

import { ThemeProvider } from '@/context/ThemeContext';

export function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
