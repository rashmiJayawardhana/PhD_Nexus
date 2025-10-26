// FILE: src/components/content/enhanced/NavigationButtons.tsx
// Previous/Next navigation buttons
// ============================================
import { ArrowLeft, ChevronRight } from 'lucide-react';
import type { ContentSection } from '@/types/content';

interface NavigationButtonsProps {
  sections: ContentSection[];
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  sections,
  activeSection,
  onNavigate
}) => {
  const currentIdx = sections.findIndex(s => s.id === activeSection);
  const isFirst = currentIdx === 0;
  const isLast = currentIdx === sections.length - 1;

  return (
    <div className="flex justify-between mt-6">
      <button 
        onClick={() => {
          if (currentIdx > 0) onNavigate(sections[currentIdx - 1].id);
        }}
        disabled={isFirst}
        className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg font-medium transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Previous
      </button>
      <button 
        onClick={() => {
          if (currentIdx < sections.length - 1) onNavigate(sections[currentIdx + 1].id);
        }}
        disabled={isLast}
        className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-slate-700 rounded-lg font-medium transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
      >
        Next
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};