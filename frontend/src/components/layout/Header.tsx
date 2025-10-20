// components/layout/Header.tsx
import AdminToggle from '../admin/AdminToggle';
import type { FC } from 'react';
import Navigation from './Navigation';
import { useTheme } from '@/context/ThemeContext';

interface HeaderProps {
  showAbout: boolean;
  onNavigate: (section: string) => void;
  onAboutClick?: () => void;
}

const Header: FC<HeaderProps> = ({ showAbout, onNavigate, onAboutClick }) => {
  const { isDark, toggleTheme } = useTheme(); // New

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Navigation showAbout={showAbout} onNavigate={onNavigate} onAboutClick={onAboutClick} />
        <div className="flex items-center gap-2"> {/* Group toggles */}
          <AdminToggle />
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;