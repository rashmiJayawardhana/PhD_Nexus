// FILE: src/components/content/renderers/EnhancedChapterRenderer.tsx
// Renderer for enhanced chapters (Chapter 1 style)
// ============================================
import { getChapterSections } from '@/utils/chapterSections';
import { ChapterHeader } from '../enhanced/ChapterHeader';
import { TabNavigation } from '../enhanced/TabNavigation';
import { NavigationButtons } from '../enhanced/NavigationButtons';

interface EnhancedChapterRendererProps {
  chapterId: string;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const EnhancedChapterRenderer: React.FC<EnhancedChapterRendererProps> = ({
  chapterId,
  activeSection,
  setActiveSection
}) => {
  const sections = getChapterSections(chapterId);

  return (
    <div className="space-y-6">
      <ChapterHeader 
        chapterNumber={chapterId.split('-')[1]}
        title={sections[0]?.chapterTitle || 'Chapter Title'}
        description={sections[0]?.chapterDescription || 'Description'}
      />

      <TabNavigation
        sections={sections}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <div className="bg-white rounded-2xl shadow-xl p-8">
        {sections.find(s => s.id === activeSection)?.content}
      </div>

      <NavigationButtons
        sections={sections}
        activeSection={activeSection}
        onNavigate={setActiveSection}
      />
    </div>
  );
};