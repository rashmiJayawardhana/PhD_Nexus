// FILE: src/components/content/resources/GlossaryTerm.tsx
// Reusable component for displaying glossary terms and definitions
// ============================================
import { BookmarkIcon, Info } from 'lucide-react';
import { useState } from 'react';

interface GlossaryTermProps {
  term: string;
  definition: string;
  synonyms?: string[];
  category?: string;
  variant?: 'default' | 'expanded';
}

export const GlossaryTerm: React.FC<GlossaryTermProps> = ({
  term,
  definition,
  synonyms,
  category,
  variant = 'default'
}) => {
  const [isExpanded, setIsExpanded] = useState(variant === 'expanded');

  return (
    <div className="bg-white border-2 border-slate-200 rounded-lg hover:border-teal-300 hover:shadow-lg transition-all duration-300">
      {/* Term Header - Always Visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors rounded-t-lg"
      >
        <div className="flex items-center gap-3 flex-1">
          <BookmarkIcon className="w-5 h-5 text-teal-600 flex-shrink-0" />
          <div className="flex-1">
            <h4 className="font-bold text-slate-900 text-base">
              {term}
            </h4>
            {category && (
              <span className="inline-block mt-1 text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full font-medium">
                {category}
              </span>
            )}
          </div>
        </div>
        <div className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Definition Content - Expandable */}
      {isExpanded && (
        <div className="px-5 pb-4 pt-2 border-t border-slate-100">
          <div className="flex items-start gap-2 mb-3">
            <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-slate-700 leading-relaxed">
              {definition}
            </p>
          </div>

          {/* Synonyms */}
          {synonyms && synonyms.length > 0 && (
            <div className="mt-3 pt-3 border-t border-slate-100">
              <p className="text-xs font-semibold text-slate-500 mb-1">
                Also known as:
              </p>
              <div className="flex flex-wrap gap-2">
                {synonyms.map((synonym, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded font-medium"
                  >
                    {synonym}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};