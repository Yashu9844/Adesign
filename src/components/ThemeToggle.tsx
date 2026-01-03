'use client';

import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="w-8 h-8 sm:w-9 sm:h-9 bg-black/30 dark:bg-black/30 backdrop-blur-md border border-white/10 dark:border-white/10" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="group cursor-pointer transition-all duration-300"
      aria-label="Toggle theme"
    >
      <div className="w-8 h-8 sm:w-9 sm:h-9 bg-black/30 dark:bg-black/30 backdrop-blur-md border border-white/10 dark:border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-black/40 hover:border-white/20 dark:hover:bg-black/40 dark:hover:border-white/20">
        {theme === 'dark' ? (
          <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform duration-300" />
        ) : (
          <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:scale-110 transition-transform duration-300" />
        )}
      </div>
    </button>
  );
}
