// FILE: src/components/content/layout/ContentMain.tsx
// Main content area orchestrator
// ============================================
import type { Chapter } from '@/types/content';
import { ChapterRenderer } from '../renderers/ChapterRenderer';

interface ContentMainProps {
  selectedChapter: string | null;
  selectedSubTopic: string | null;
  activeSection: string;
  setActiveSection: (section: string) => void;
  chapters: Chapter[];
}

export const ContentMain: React.FC<ContentMainProps> = ({
  selectedChapter,
  selectedSubTopic,
  activeSection,
  setActiveSection,
  chapters
}) => (
  <main className="flex-1 p-6 lg:p-10 max-w-6xl mx-auto">
    <ChapterRenderer
      chapterId={selectedChapter}
      subTopicId={selectedSubTopic}
      activeSection={activeSection}
      setActiveSection={setActiveSection}
      chapters={chapters}
    />
  </main>
);