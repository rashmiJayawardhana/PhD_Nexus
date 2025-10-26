// FILE: src/components/content/ContentPage.tsx
// Main orchestrator component
// ============================================
import { useState } from 'react';
import { useContentNavigation } from '@/hooks/useContentNavigation';
import { emoduleContent } from '@/data/emoduleContent';
import { ContentHeader } from './layout/ContentHeader';
import { ContentSidebar } from './layout/ContentSidebar';
import { ContentMain } from './layout/ContentMain';
import { MobileSidebarOverlay } from './layout/MobileSidebarOverlay';

interface ContentPageProps {
  onBack: () => void;
}

export const ContentPage: React.FC<ContentPageProps> = ({ onBack }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const {
    selectedChapter,
    selectedSubTopic,
    expandedChapters,
    activeSection,
    setActiveSection,
    toggleChapter,
    selectSubTopic
  } = useContentNavigation('chapter-01', 'introduction');

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
      <ContentHeader 
        onBack={onBack}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="flex">
        <ContentSidebar
          chapters={emoduleContent}
          selectedChapter={selectedChapter}
          selectedSubTopic={selectedSubTopic}
          expandedChapters={expandedChapters}
          isSidebarOpen={isSidebarOpen}
          onToggleChapter={toggleChapter}
          onSelectSubTopic={(chapterId, subTopicId) => {
            selectSubTopic(chapterId, subTopicId);
            if (window.innerWidth < 1024) setIsSidebarOpen(false);
          }}
        />

        <ContentMain
          selectedChapter={selectedChapter}
          selectedSubTopic={selectedSubTopic}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          chapters={emoduleContent}
        />
      </div>

      <MobileSidebarOverlay
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
};