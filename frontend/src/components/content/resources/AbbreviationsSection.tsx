// FILE: src/components/content/resources/AbbreviationsSection.tsx
// List of abbreviations section with search and categorization
// ============================================
import { useState, useMemo } from 'react';
import { Search, ListOrdered } from 'lucide-react';
import { ContentCard } from '../ContentCard';
import { abbreviationsData } from '@/data/content/abbreviationsData';
import { AbbreviationItem } from '../AbbreviationItem';

export const AbbreviationsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter abbreviations based on search
  const filteredAbbreviations = useMemo(() => {
    return abbreviationsData.filter(item => {
      const matchesSearch = searchTerm === '' || 
        item.abbreviation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.fullForm.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesSearch;
    });
  }, [searchTerm]);

  // Group by category for display
  const groupedByCategory = useMemo(() => {
    const groups: Record<string, typeof abbreviationsData> = {};
    filteredAbbreviations.forEach(item => {
      const category = item.category || 'General';
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(item);
    });
    return groups;
  }, [filteredAbbreviations]);

  return (
    <>
      <ContentCard 
        title="List of Abbreviations" 
        icon={<ListOrdered className="w-6 h-6 text-indigo-600" />}
        variant="highlight"
      >
        <p className="text-slate-700 leading-relaxed mb-6">
          A comprehensive list of abbreviations and acronyms used throughout this e-module. Use the search 
          function to quickly find specific abbreviations.
        </p>

        {/* Search Box */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search abbreviations or full forms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
          />
        </div>

        {/* Results Count */}
        <div className="mb-4 text-sm text-slate-600">
          Showing <span className="font-semibold text-indigo-700">{filteredAbbreviations.length}</span> of {abbreviationsData.length} abbreviations
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-blue-50 rounded-lg p-3 border-2 border-blue-200 text-center">
            <div className="text-2xl font-bold text-blue-900">{abbreviationsData.length}</div>
            <div className="text-xs text-slate-600">Total</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-3 border-2 border-purple-200 text-center">
            <div className="text-2xl font-bold text-purple-900">
              {abbreviationsData.filter(a => a.category === 'Organizations').length}
            </div>
            <div className="text-xs text-slate-600">Organizations</div>
          </div>
          <div className="bg-teal-50 rounded-lg p-3 border-2 border-teal-200 text-center">
            <div className="text-2xl font-bold text-teal-900">
              {abbreviationsData.filter(a => a.category === 'Safety & Equipment').length}
            </div>
            <div className="text-xs text-slate-600">Safety</div>
          </div>
          <div className="bg-pink-50 rounded-lg p-3 border-2 border-pink-200 text-center">
            <div className="text-2xl font-bold text-pink-900">
              {abbreviationsData.filter(a => a.category === 'Medical & Clinical').length}
            </div>
            <div className="text-xs text-slate-600">Medical</div>
          </div>
        </div>
      </ContentCard>

      {/* Abbreviations List - Grouped by Category */}
      {filteredAbbreviations.length > 0 ? (
        <div className="space-y-6">
          {Object.entries(groupedByCategory).sort(([a], [b]) => a.localeCompare(b)).map(([category, items]) => (
            <div key={category} className="space-y-3">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-3 h-12 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{category}</h3>
                  <p className="text-sm text-slate-600">{items.length} abbreviation{items.length !== 1 ? 's' : ''}</p>
                </div>
              </div>

              {/* Abbreviations in this category */}
              <div className="grid gap-3">
                {items.map((item, idx) => (
                  <AbbreviationItem
                    key={idx}
                    abbreviation={item.abbreviation}
                    fullForm={item.fullForm}
                    category={item.category}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-slate-50 rounded-lg p-8 text-center">
          <p className="text-slate-600">No abbreviations found matching your search criteria.</p>
        </div>
      )}
    </>
  );
};