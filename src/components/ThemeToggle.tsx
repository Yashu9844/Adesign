'use client';

import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 md:top-8 right-6 md:right-8 z-50 group cursor-pointer transition-all duration-300"
      aria-label="Toggle theme"
    >
      <div className="w-12 h-12 md:w-14 md:h-14 bg-black/30 dark:bg-black/30 backdrop-blur-md border border-white/10 dark:border-white/10 rounded-lg md:rounded-[0.5vw] flex items-center justify-center transition-all duration-300 hover:bg-black/40 hover:border-white/20 dark:hover:bg-black/40 dark:hover:border-white/20">
        {theme === 'dark' ? (
          <Sun className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
        ) : (
          <Moon className="w-6 h-6 md:w-7 md:h-7 text-black group-hover:scale-110 transition-transform duration-300" />
        )}
      </div>
    </button>
  );
}
