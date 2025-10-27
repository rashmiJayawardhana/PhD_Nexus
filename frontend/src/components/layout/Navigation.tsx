// src/components/layout/Navigation.tsx
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onAboutClick: () => void;
  onContentClick: () => void;
  onContactClick: () => void;
  onMoreClick: () => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onAboutClick,
  onContentClick,
  onContactClick,
  onMoreClick, 
  isMobileMenuOpen,
  setIsMobileMenuOpen
}) => (
  <>
    {/* Desktop Navigation */}
    <nav className="hidden md:flex items-center gap-8">
      <a href="#home" className="text-slate-700 hover:text-teal-600 font-medium transition">
        Home
      </a>
      <button onClick={onAboutClick} className="text-slate-700 hover:text-teal-600 font-medium transition">
        About
      </button>
      <button onClick={onContentClick} className="text-slate-700 hover:text-teal-600 font-medium transition">
        Content
      </button>
      <button onClick={onContactClick} className="text-slate-700 hover:text-teal-600 font-medium transition">
        Contact
      </button>
      <button onClick={onMoreClick} className="text-slate-700 hover:text-teal-600 font-medium transition">
        More
      </button>
    </nav>

    {/* User Actions */}
    <div className="hidden md:flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
        <span className="text-white text-sm font-semibold">SC</span>
      </div>
      <button onClick={onContentClick} className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-6 py-2 rounded-full font-semibold transition shadow-lg hover:shadow-xl">
        Get Started
      </button>
    </div>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="md:hidden text-slate-700 p-2"
    >
      {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>

    {/* Mobile Menu */}
    {isMobileMenuOpen && (
      <div className="md:hidden mt-4 pb-4 space-y-3">
        <a href="#home" className="block text-slate-700 hover:text-teal-600 py-2">Home</a>
        <button 
          onClick={() => { onAboutClick(); setIsMobileMenuOpen(false); }}
          className="block w-full text-left text-slate-700 hover:text-teal-600 py-2"
        >
          About
        </button>
        <button 
          onClick={() => { onContentClick(); setIsMobileMenuOpen(false); }}
          className="block w-full text-left text-slate-700 hover:text-teal-600 py-2"
        >
          Content
        </button>
        <button 
          onClick={() => { onContactClick(); setIsMobileMenuOpen(false); }}
          className="block w-full text-left text-slate-700 hover:text-teal-600 py-2"
        >
          Contact
        </button>
        <button 
          onClick={() => { onMoreClick(); setIsMobileMenuOpen(false); }}
          className="block w-full text-left text-slate-700 hover:text-teal-600 py-2"
        >
          More
        </button>
        <button className="w-full bg-amber-400 hover:bg-amber-500 text-slate-900 px-6 py-2 rounded-full font-semibold transition">
          Get Started
        </button>
      </div>
    )}
  </>
);