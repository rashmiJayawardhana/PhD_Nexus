// FILE: src/components/content/layout/ContentSidebar.tsx
// Sidebar navigation component
// ============================================
import { BookOpen } from 'lucide-react';
import type { Chapter } from '@/types/content';
import { ChapterAccordion } from '../navigation/ChapterAccordion';

interface ContentSidebarProps {
  chapters: Chapter[];
  selectedChapter: string | null;
  selectedSubTopic: string | null;
  expandedChapters: Set<string>;
  isSidebarOpen: boolean;
  onToggleChapter: (chapterId: string) => void;
  onSelectSubTopic: (chapterId: string, subTopicId: string) => void;
}

export const ContentSidebar: React.FC<ContentSidebarProps> = ({
  chapters,
  selectedChapter,
  selectedSubTopic,
  expandedChapters,
  isSidebarOpen,
  onToggleChapter,
  onSelectSubTopic
}) => (
  <aside
    className={`${
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
    } fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-80 bg-white border-r border-slate-200 overflow-y-auto transition-transform duration-300 ease-in-out z-40 lg:translate-x-0`}
  >
    <div className="p-4">
      <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-teal-600" />
        Table of Contents
      </h2>

      <nav className="space-y-2">
        {chapters.map((chapter) => (
          <ChapterAccordion
            key={chapter.id}
            chapter={chapter}
            isExpanded={expandedChapters.has(chapter.id)}
            selectedChapter={selectedChapter}
            selectedSubTopic={selectedSubTopic}
            onToggle={() => onToggleChapter(chapter.id)}
            onSelectSubTopic={onSelectSubTopic}
          />
        ))}
      </nav>
    </div>
  </aside>
);