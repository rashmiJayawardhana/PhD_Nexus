// FILE: src/utils/chapterSections.ts
// Utility to get sections for each chapter
// ============================================
import type { ContentSection } from '@/types/content';
import { IntroductionSection } from '@/components/content/chapter01/IntroductionSection';
import { CancerOverviewSection } from '@/components/content/chapter01/CancerOverviewSection';
import { EpidemiologySection } from '@/components/content/chapter01/EpidemiologySection';
import { TreatmentSection } from '@/components/content/chapter01/TreatmentSection';
import { HazardousSection } from '@/components/content/chapter01/HazardousSection';

export const getChapterSections = (chapterId: string): ContentSection[] => {
  const sectionMap: Record<string, ContentSection[]> = {
    'chapter-01': [
      { 
        id: 'intro', 
        title: 'Introduction', 
        content: <IntroductionSection />,
        chapterTitle: 'Chapter 01: Introduction',
        chapterDescription: 'Overview of cancer, epidemiology, treatment methods, and adverse effects'
      },
      { id: 'overview', title: 'Overview of Cancer', content: <CancerOverviewSection /> },
      { id: 'epidemiology', title: 'Cancer Epidemiology', content: <EpidemiologySection /> },
      { id: 'treatment', title: 'Cancer Management', content: <TreatmentSection /> },
      { id: 'hazardous', title: 'Properties of Hazardous Drugs', content: <HazardousSection /> }
    ]
    // Add more chapters here as you implement them
  };

  return sectionMap[chapterId] || [];
};