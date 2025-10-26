// FILE: src/components/content/renderers/DefaultChapterRenderer.tsx
// Renderer for standard HTML content chapters
// ============================================
import type { Chapter } from '@/types/content';

interface DefaultChapterRendererProps {
  chapterId: string | null;
  subTopicId: string | null;
  chapters: Chapter[];
}

export const DefaultChapterRenderer: React.FC<DefaultChapterRendererProps> = ({
  chapterId,
  subTopicId,
  chapters
}) => {
  const chapter = chapters.find(c => c.id === chapterId);
  const subTopic = chapter?.subTopics.find(st => st.id === subTopicId);

  return (
    <article className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
      <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 pb-4 border-b-2 border-teal-600">
        {subTopic?.title || 'Welcome to E-Module'}
      </h1>
      
      <div
        className="prose prose-slate max-w-none
          prose-headings:text-slate-900 
          prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-teal-700
          prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-slate-800
          prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-4
          prose-ul:my-4 prose-ul:space-y-2
          prose-li:text-slate-700 prose-li:marker:text-teal-600
          prose-ol:my-4 prose-ol:space-y-2"
        dangerouslySetInnerHTML={{ __html: subTopic?.content || '<p>Select a chapter from the sidebar to begin your learning journey.</p>' }}
      />
    </article>
  );
};