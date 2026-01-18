'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  // Initialize theme from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('pincher_theme') as Theme | null;
    if (stored) {
      setThemeState(stored);
    }
  }, []);

  // Resolve system preference and apply theme
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const updateResolvedTheme = () => {
      let resolved: 'light' | 'dark';
      if (theme === 'system') {
        resolved = mediaQuery.matches ? 'dark' : 'light';
      } else {
        resolved = theme;
      }
      setResolvedTheme(resolved);
      
      // Apply to document
      if (resolved === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    updateResolvedTheme();
    mediaQuery.addEventListener('change', updateResolvedTheme);
    
    return () => mediaQuery.removeEventListener('change', updateResolvedTheme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('pincher_theme', newTheme);
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Theme toggle button component
export function ThemeToggle({ className = '' }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, toggleTheme } = useTheme();
  
  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Show placeholder during SSR/initial render
  if (!mounted) {
    return (
      <div className={`w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800 backdrop-blur shadow-md flex items-center justify-center border border-gray-100 dark:border-gray-700 ${className}`}>
        <span className="text-lg">☀️</span>
      </div>
    );
  }
  
  return (
    <button
      onClick={() => {
        console.log('Theme toggle clicked, current:', resolvedTheme);
        toggleTheme();
      }}
      className={`w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800 backdrop-blur shadow-md flex items-center justify-center hover:scale-105 active:scale-95 transition-all border border-gray-100 dark:border-gray-700 ${className}`}
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? (
        <span className="text-lg">🌙</span>
      ) : (
        <span className="text-lg">☀️</span>
      )}
    </button>
  );
}
