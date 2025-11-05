// FILE: src/components/content/resources/ReferencesSection.tsx
// Main References section with search and filtering
// ============================================
import { useState } from 'react';
import { Search, Filter, BookOpen } from 'lucide-react';
import { ContentCard } from '../ContentCard';
import { ReferenceCard } from './ReferenceCard';
import { referencesData } from '@/data/content/referencesData';

export const ReferencesSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('all');

  // Get unique years for filtering
  const years = ['all', ...Array.from(new Set(referencesData.map(ref => ref.year))).sort().reverse()];

  // Filter references based on search and year
  const filteredReferences = referencesData.filter(ref => {
    const matchesSearch = searchTerm === '' || 
      ref.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ref.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesYear = selectedYear === 'all' || ref.year === selectedYear;

    return matchesSearch && matchesYear;
  });

  return (
    <>
      <ContentCard 
        title="References" 
        icon={<BookOpen className="w-6 h-6 text-teal-600" />}
        variant="highlight"
      >
        <p className="text-slate-700 leading-relaxed mb-6">
          This section contains all the academic and professional sources referenced throughout the e-module. 
          Each reference includes complete citation information with links to the original sources where available.
        </p>

        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search Box */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by author or title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-2 border-slate-200 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
            />
          </div>

          {/* Year Filter */}
          <div className="md:w-48 relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-2 border-slate-200 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition appearance-none cursor-pointer"
            >
              {years.map(year => (
                <option key={year} value={year}>
                  {year === 'all' ? 'All Years' : year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 text-sm text-slate-600">
          Showing <span className="font-semibold text-teal-700">{filteredReferences.length}</span> of {referencesData.length} references
        </div>
      </ContentCard>

      {/* References List */}
      <div className="space-y-3">
        {filteredReferences.length > 0 ? (
          filteredReferences.map((ref, idx) => (
            <ReferenceCard
              key={idx}
              number={ref.number}
              authors={ref.authors}
              title={ref.title}
              publication={ref.publication}
              year={ref.year}
              doi={ref.doi}
              url={ref.url}
              variant={idx < 3 ? 'highlight' : 'default'}
            />
          ))
        ) : (
          <div className="bg-slate-50 rounded-lg p-8 text-center">
            <p className="text-slate-600">No references found matching your search criteria.</p>
          </div>
        )}
      </div>
    </>
  );
};