// FILE: src/components/content/renderers/ChapterRenderer.tsx
// Smart renderer that delegates to chapter-specific components
// ============================================
import type { Chapter } from '@/types/content';
import { EnhancedChapterRenderer } from './EnhancedChapterRenderer';
import { DefaultChapterRenderer } from './DefaultChapterRenderer';

interface ChapterRendererProps {
  chapterId: string | null;
  subTopicId: string | null;
  activeSection: string;
  setActiveSection: (section: string) => void;
  chapters: Chapter[];
}

export const ChapterRenderer: React.FC<ChapterRendererProps> = ({
  chapterId,
  subTopicId,
  activeSection,
  setActiveSection,
  chapters
}) => {
  // List of chapters with enhanced rendering
  const enhancedChapters = ['chapter-01', 'chapter-02', 'chapter-03', 'chapter-04', 'chapter-05', 'resources'];

  if (enhancedChapters.includes(chapterId || '')) {
    return (
      <EnhancedChapterRenderer
        chapterId={chapterId!}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    );
  }

  return (
    <DefaultChapterRenderer
      chapterId={chapterId}
      subTopicId={subTopicId}
      chapters={chapters}
    />
  );
};