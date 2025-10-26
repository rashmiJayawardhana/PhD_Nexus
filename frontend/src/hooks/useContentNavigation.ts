// FILE: src/hooks/useContentNavigation.ts
// Custom hook for content navigation logic
// ============================================
import { useState } from 'react';

export const useContentNavigation = (
  initialChapter: string,
  initialSubTopic: string
) => {
  const [selectedChapter, setSelectedChapter] = useState<string | null>(initialChapter);
  const [selectedSubTopic, setSelectedSubTopic] = useState<string | null>(initialSubTopic);
  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(new Set([initialChapter]));
  const [activeSection, setActiveSection] = useState('intro');

  const toggleChapter = (chapterId: string) => {
    const newExpanded = new Set(expandedChapters);
    if (newExpanded.has(chapterId)) {
      newExpanded.delete(chapterId);
    } else {
      newExpanded.add(chapterId);
    }
    setExpandedChapters(newExpanded);
  };

  const selectSubTopic = (chapterId: string, subTopicId: string) => {
    setSelectedChapter(chapterId);
    setSelectedSubTopic(subTopicId);
    
    // Map subtopic IDs to section IDs for Chapter 1
    if (chapterId === 'chapter-01') {
      const sectionMap: Record<string, string> = {
        'introduction': 'intro',
        'overview-cancer': 'overview',
        'cancer-epidemiology': 'epidemiology',
        'cancer-management': 'treatment',
        'properties-hazardous-drugs': 'hazardous'
      };
      setActiveSection(sectionMap[subTopicId] || 'intro');
    }
  };

  return {
    selectedChapter,
    selectedSubTopic,
    expandedChapters,
    activeSection,
    setActiveSection,
    toggleChapter,
    selectSubTopic
  };
};