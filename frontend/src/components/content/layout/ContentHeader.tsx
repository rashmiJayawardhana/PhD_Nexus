// FILE: src/components/content/layout/ContentHeader.tsx
// Header component with back button and mobile menu
// ============================================
import { ArrowLeft, BookOpen, Menu, X } from 'lucide-react';

interface ContentHeaderProps {
  onBack: () => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

export const ContentHeader: React.FC<ContentHeaderProps> = ({
  onBack,
  isSidebarOpen,
  setIsSidebarOpen
}) => (
  <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <button
        onClick={onBack}
        className="flex items-center gap-2 px-4 py-2 hover:text-teal-600 font-medium transition rounded-lg hover:bg-teal-50"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="hidden sm:inline">Back to Home</span>
      </button>
      
      <div className="flex items-center gap-3">
        <BookOpen className="w-6 h-6 text-teal-600" />
        <h1 className="text-xl font-bold text-slate-900">E-Module Content</h1>
      </div>

      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden text-slate-700 p-2"
      >
        {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </div>
  </header>
);