// FILE: src/components/content/navigation/ChapterAccordion.tsx
// Individual chapter accordion component
// ============================================
import { ChevronDown, ChevronRight } from 'lucide-react';
import type { Chapter } from '@/types/content';

interface ChapterAccordionProps {
  chapter: Chapter;
  isExpanded: boolean;
  selectedChapter: string | null;
  selectedSubTopic: string | null;
  onToggle: () => void;
  onSelectSubTopic: (chapterId: string, subTopicId: string) => void;
}

export const ChapterAccordion: React.FC<ChapterAccordionProps> = ({
  chapter,
  isExpanded,
  selectedChapter,
  selectedSubTopic,
  onToggle,
  onSelectSubTopic
}) => (
  <div className="border border-slate-200 rounded-lg overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full px-4 py-3 flex items-center justify-between hover:bg-slate-50 transition"
    >
      <div className="flex items-center gap-3 text-left">
        <span className="text-2xl">{chapter.icon}</span>
        <div>
          <h3 className="font-semibold text-slate-900 text-sm">
            {chapter.title}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {chapter.description}
          </p>
        </div>
      </div>
      <ChevronDown
        className={`w-5 h-5 text-slate-400 transition-transform ${
          isExpanded ? 'transform rotate-180' : ''
        }`}
      />
    </button>

    {isExpanded && (
      <div className="bg-slate-50 border-t border-slate-200">
        {chapter.subTopics.map((subTopic) => (
          <button
            key={subTopic.id}
            onClick={() => onSelectSubTopic(chapter.id, subTopic.id)}
            className={`w-full px-4 py-3 text-left hover:bg-teal-50 transition flex items-center gap-2 border-b border-slate-100 last:border-b-0 ${
              selectedChapter === chapter.id && selectedSubTopic === subTopic.id
                ? 'bg-teal-100 text-teal-900 font-medium'
                : 'text-slate-700'
            }`}
          >
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm">{subTopic.title}</span>
          </button>
        ))}
      </div>
    )}
  </div>
);