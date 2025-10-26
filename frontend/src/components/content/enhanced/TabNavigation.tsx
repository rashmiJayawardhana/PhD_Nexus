// FILE: src/components/content/enhanced/TabNavigation.tsx
// Tab navigation for enhanced chapters
// ============================================
import type { ContentSection } from '@/types/content';

interface TabNavigationProps {
  sections: ContentSection[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  sections,
  activeSection,
  onSectionChange
}) => (
  <div className="bg-white rounded-xl shadow-lg p-4 overflow-x-auto">
    <div className="flex gap-2">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSectionChange(section.id)}
          className={`px-4 py-2 rounded-lg font-medium transition whitespace-nowrap ${
            activeSection === section.id
              ? 'bg-teal-600 text-red-600 shadow-lg'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          {section.title}
        </button>
      ))}
    </div>
  </div>
);