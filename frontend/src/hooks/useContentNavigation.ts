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
    
    // Map subtopic IDs to section IDs for Chapter 01
    if (chapterId === 'chapter-01') {
      const sectionMap: Record<string, string> = {
        'introduction': 'intro',
        'overview-cancer': 'overview',
        'cancer-epidemiology': 'epidemiology',
        'cancer-management': 'treatment',
        'properties-hazardous-drugs': 'hazardous',
        'chemotherapy-adverse-effects': 'adverse',
        'summary': 'summary' 
      };
      setActiveSection(sectionMap[subTopicId] || 'intro');
    }

    // Map subtopic IDs to section IDs for Chapter 02
    if (chapterId === 'chapter-02') {
      const sectionMap: Record<string, string> = {
        'evidence-exposure': 'evidence',
        'exposure-routes': 'routes',
        'adverse-effects-hcws': 'adverse',
        'summary': 'summary' 
      };
      setActiveSection(sectionMap[subTopicId] || subTopicId);
    }

    // Map subtopic IDs to section IDs for Chapter 03
    if (chapterId === 'chapter-03') {
      const sectionMap: Record<string, string> = {
        'standard-guidelines': 'standard',
        'hierarchical-controls-overview': 'hierarchical',
        'engineering-controls': 'engineering',
        'pre-requirements': 'ppe',
        'summary': 'summary' 
      };
      setActiveSection(sectionMap[subTopicId] || subTopicId);
    }

    // Map subtopic IDs to section IDs for Chapter 04
    if (chapterId === 'chapter-04') {
      const sectionMap: Record<string, string> = {
        'receiving-storage': 'receiving',
        'compounding-hds': 'compounding',
        'administration': 'administration',
        'waste-disposal': 'waste',
        'cleaning-decontamination': 'cleaning',
        'spill-management': 'spill',
        'protective-reassignment': 'reassignment',
        'emergency-procedures': 'emergency',
        'training-surveillance': 'training',
        'summary': 'summary' 
      };
      setActiveSection(sectionMap[subTopicId] || subTopicId);
    }

    // Map subtopic IDs to section IDs for Chapter 05
    if (chapterId === 'chapter-05') {
      const sectionMap: Record<string, string> = {
        'barriers-safety': 'barriers',
        'education-impact': 'education',
        'summary': 'summary' 
      };
      setActiveSection(sectionMap[subTopicId] || subTopicId);
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