// FILE: src/components/content/resources/GlossarySection.tsx
// Main Glossary section with search and alphabetical navigation
// ============================================
import { useState, useMemo } from 'react';
import { Search, BookMarked } from 'lucide-react';
import { ContentCard } from '../ContentCard';
import { GlossaryTerm } from './GlossaryTerm';
import { glossaryData } from '@/data/content/glossaryData';

export const GlossarySection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string>('all');

  // Get unique first letters for navigation
  const letters = useMemo(() => {
    const uniqueLetters = Array.from(new Set(glossaryData.map(term => term.term[0].toUpperCase()))).sort();
    return ['all', ...uniqueLetters];
  }, []);

  // Filter glossary terms
  const filteredTerms = useMemo(() => {
    return glossaryData.filter(term => {
      const matchesSearch = searchTerm === '' || 
        term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLetter = selectedLetter === 'all' || 
        term.term[0].toUpperCase() === selectedLetter;

      return matchesSearch && matchesLetter;
    });
  }, [searchTerm, selectedLetter]);

  // Group terms by first letter for display
  const groupedTerms = useMemo(() => {
    const groups: Record<string, typeof glossaryData> = {};
    filteredTerms.forEach(term => {
      const letter = term.term[0].toUpperCase();
      if (!groups[letter]) {
        groups[letter] = [];
      }
      groups[letter].push(term);
    });
    return groups;
  }, [filteredTerms]);

  return (
    <>
      <ContentCard 
        title="Glossary of Key Terms" 
        icon={<BookMarked className="w-6 h-6 text-purple-600" />}
        variant="highlight"
      >
        <p className="text-slate-700 leading-relaxed mb-6">
          A comprehensive glossary of technical terms, abbreviations, and concepts used throughout the e-module. 
          Click on any term to expand its full definition and related information.
        </p>

        {/* Search Box */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search for terms or definitions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition"
          />
        </div>

        {/* Alphabetical Navigation */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-slate-700 mb-3">Browse by letter:</p>
          <div className="flex flex-wrap gap-2">
            {letters.map(letter => (
              <button
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                className={`px-3 py-1.5 rounded-lg font-semibold text-sm transition ${
                  selectedLetter === letter
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {letter === 'all' ? 'All' : letter}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-sm text-slate-600">
          Showing <span className="font-semibold text-purple-700">{filteredTerms.length}</span> of {glossaryData.length} terms
        </div>
      </ContentCard>

      {/* Glossary Terms - Grouped by Letter */}
      {filteredTerms.length > 0 ? (
        <div className="space-y-8">
          {Object.keys(groupedTerms).sort().map(letter => (
            <div key={letter} className="space-y-3">
              {/* Letter Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 text-white rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg">
                  {letter}
                </div>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-300 to-transparent"></div>
              </div>

              {/* Terms in this letter group */}
              <div className="space-y-3">
                {groupedTerms[letter].map((term, idx) => (
                  <GlossaryTerm
                    key={idx}
                    term={term.term}
                    definition={term.definition}
                    synonyms={term.synonyms}
                    category={term.category}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-slate-50 rounded-lg p-8 text-center">
          <p className="text-slate-600">No terms found matching your search criteria.</p>
        </div>
      )}
    </>
  );
};