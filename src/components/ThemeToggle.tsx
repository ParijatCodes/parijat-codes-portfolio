import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-glow"
      aria-label="Toggle theme"
    >
      <Sun className={`h-5 w-5 transition-all duration-300 ${theme === 'dark' ? 'scale-0 rotate-90' : 'scale-100 rotate-0'}`} />
      <Moon className={`absolute h-5 w-5 transition-all duration-300 ${theme === 'dark' ? 'scale-100 rotate-0' : 'scale-0 -rotate-90'}`} />
    </Button>
  );
}