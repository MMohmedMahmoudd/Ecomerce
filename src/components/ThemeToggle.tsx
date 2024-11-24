import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      <Sun className={`w-5 h-5 text-yellow-500 transition-all ${
        theme === 'light' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
      } absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} />
      <Moon className={`w-5 h-5 text-blue-500 transition-all ${
        theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
      } absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} />
    </button>
  );
}