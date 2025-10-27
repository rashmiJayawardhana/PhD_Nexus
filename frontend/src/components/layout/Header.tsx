// src/components/layout/Header.tsx
import { Logo } from './Logo';
import { Navigation } from './Navigation';

interface HeaderProps {
  onAboutClick: () => void;
  onContentClick: () => void;
  onContactClick: () => void;
  onMoreClick: () => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = (props) => (
  <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <Logo />
        <Navigation {...props} />
      </div>
    </div>
  </header>
);