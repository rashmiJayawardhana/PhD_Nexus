// components/layout/Navigation.tsx
import { type FC, useState } from 'react';
import { Menu, X, Home, BookOpen, Users, Book, User } from 'lucide-react';
import type { NavigationProps } from '@/types/layout';

const Navigation: FC<NavigationProps> = ({ showAbout, onNavigate }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: BookOpen },
    { id: 'testimonials', label: 'Testimonials', icon: Users },
    { id: 'books', label: 'Books', icon: Book },
    { id: 'about', label: 'About', icon: User },
  ];

  const handleNavigate = (section: string) => {
    setIsMobileOpen(false); // Close mobile menu
    if (section === 'about') {
      // Assuming onNavigate can handle 'about' for toggle; adjust in App.tsx if needed
      onNavigate(section);
      return;
    }
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    onNavigate(section);
  };

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  if (showAbout) {
    // Minimal nav or hidden when in About page
    return null;
  }

  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.slice(0, -1).map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => handleNavigate(id)}
            className="flex items-center gap-2 text-slate-700 hover:text-indigo-600 font-medium transition-colors px-2 py-1 rounded-md hover:bg-indigo-50"
            aria-label={`Navigate to ${label}`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
        {/* About as special link */}
        <button
          onClick={() => handleNavigate('about')}
          className="flex items-center gap-2 text-slate-700 hover:text-indigo-600 font-medium transition-colors px-2 py-1 rounded-md hover:bg-indigo-50"
        >
          <User className="w-4 h-4" />
          About
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-slate-700 hover:text-indigo-600 transition-colors p-2"
        aria-label="Toggle navigation menu"
      >
        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-xl mt-2 py-4 px-6 space-y-4 z-30">
          {navLinks.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => handleNavigate(id)}
              className="w-full flex items-center gap-3 text-left text-slate-700 hover:text-indigo-600 font-medium transition-colors py-2 px-4 rounded-lg hover:bg-indigo-50"
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Navigation;