// FILE: src/components/content/enhanced/ChapterHeader.tsx
// Header for enhanced chapters
// ============================================
interface ChapterHeaderProps {
  chapterNumber: string;
  title: string;
  description: string;
}

export const ChapterHeader: React.FC<ChapterHeaderProps> = ({
  chapterNumber,
  title,
  description
}) => (
  <div className="bg-white rounded-2xl shadow-xl p-6">
    <div className="flex items-center gap-4">
      <div className="bg-gradient-to-br from-teal-500 to-blue-600 text-white w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold">
        {chapterNumber}
      </div>
      <div>
        <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  </div>
);
