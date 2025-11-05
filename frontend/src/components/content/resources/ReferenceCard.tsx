// FILE: src/components/content/resources/ReferenceCard.tsx
// Reusable component for displaying individual references
// ============================================
import { ExternalLink } from 'lucide-react';

interface ReferenceCardProps {
  number: number;
  authors: string;
  title: string;
  publication: string;
  year: string;
  doi?: string;
  url?: string;
  variant?: 'default' | 'highlight';
}

export const ReferenceCard: React.FC<ReferenceCardProps> = ({
  number,
  authors,
  title,
  publication,
  year,
  doi,
  url,
  variant = 'default'
}) => {
  const variants = {
    default: 'bg-white border-slate-200 hover:border-teal-300',
    highlight: 'bg-gradient-to-br from-teal-50 to-blue-50 border-teal-200'
  };

  return (
    <div className={`${variants[variant]} border-2 rounded-lg p-5 hover:shadow-lg transition-all duration-300 group`}>
      <div className="flex gap-4">
        {/* Reference Number */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
            {number}
          </div>
        </div>

        {/* Reference Content */}
        <div className="flex-1 space-y-2">
          {/* Authors */}
          <p className="text-sm font-semibold text-slate-700">
            {authors}
          </p>

          {/* Title */}
          <h4 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
            {title}
          </h4>

          {/* Publication Info */}
          <p className="text-sm text-slate-600">
            <span className="italic">{publication}</span>
            {year && <span className="ml-2">({year})</span>}
          </p>

          {/* DOI/URL Links */}
          {(doi || url) && (
            <div className="flex flex-wrap gap-3 pt-2">
              {doi && (
                <a
                  href={`https://doi.org/${doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-teal-600 hover:text-teal-700 font-medium"
                >
                  <ExternalLink className="w-3 h-3" />
                  DOI: {doi}
                </a>
              )}
              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 font-medium"
                >
                  <ExternalLink className="w-3 h-3" />
                  View Source
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};