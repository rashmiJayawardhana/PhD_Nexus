// FILE: src/utils/chapterSections.tsx
// Utility to get sections for each chapter
// ============================================
import type { ContentSection } from '@/types/content';
import { IntroductionSection01 } from '@/components/content/chapter01/IntroductionSection01';
import { CancerOverviewSection } from '@/components/content/chapter01/CancerOverviewSection';
import { EpidemiologySection } from '@/components/content/chapter01/EpidemiologySection';
import { TreatmentSection } from '@/components/content/chapter01/TreatmentSection';
import { HazardousSection } from '@/components/content/chapter01/HazardousSection';
// TODO: Add import for missing Chapter 01 component
// import { ChemotherapyAdverseSection } from '@/components/content/chapter01/ChemotherapyAdverseSection';
import { SummarySection01 } from '@/components/content/chapter01/SummarySection01';
import { SummarySection02 } from '@/components/content/chapter02/SummarySection02';
import { SummarySection03 } from '@/components/content/chapter03/SummarySection03';
import { SummarySection04 } from '@/components/content/chapter04/SummarySection04';
import { SummarySection05 } from '@/components/content/chapter05/SummarySection05';
import ChemotherapySection from '@/components/content/chapter01/ChemotherapySection';
import { IntroductionSection02 } from '@/components/content/chapter02/IntroductionSection02';
import { IntroductionSection03 } from '@/components/content/chapter03/IntroductionSection03';
import { IntroductionSection04 } from '@/components/content/chapter04/IntroductionSection04';
import { IntroductionSection05 } from '@/components/content/chapter05/IntroductionSection05';
// TODO: Add imports for other chapter components when implemented
// e.g., import { EvidenceExposureSection } from '@/components/content/chapter02/EvidenceExposureSection';

export const getChapterSections = (chapterId: string): ContentSection[] => {
  const sectionMap: Record<string, ContentSection[]> = {
    'chapter-01': [
      { 
        id: 'intro', 
        title: 'Introduction', 
        content: <IntroductionSection01 />,
        chapterTitle: 'Introduction',
        chapterDescription: 'Overview of cancer, epidemiology, treatment methods, and adverse effects'
      },
      { id: 'overview', title: 'Overview of Cancer', content: <CancerOverviewSection /> },
      { id: 'epidemiology', title: 'Cancer Epidemiology', content: <EpidemiologySection /> },
      { id: 'treatment', title: 'Cancer Management', content: <TreatmentSection /> },
      { id: 'hazardous', title: 'Properties of Hazardous Drugs', content: <HazardousSection /> },
      { id: 'chemotherapy', title: 'Chemotherapy & Adverse Effects', content: <ChemotherapySection /> },
      { id: 'summary', title: 'Summary', content: <SummarySection01 /> }
    ],
    'chapter-02': [
      { 
        id: 'intro', 
        title: 'Introduction', 
        content: <IntroductionSection02 />,
        chapterTitle: 'Occupational Exposure to Chemotherapy',
        chapterDescription: 'Overview of cancer definition, epidemiology, treatment methods, adverse drug effects'
      },
      { 
        id: 'evidence', 
        title: 'Evidence of Occupational Exposure', 
        content: <div className="p-8 bg-gray-100 rounded-lg">Placeholder content for Chemotherapy Exposure Routes (implement ExposureRoutesSection)</div> 
      },
      { id: 'routes', title: 'Chemotherapy Exposure Routes', content: <div className="p-8 bg-gray-100 rounded-lg">Placeholder content for Chemotherapy Exposure Routes (implement ExposureRoutesSection)</div> },
      { id: 'adverse', title: 'Adverse Effects Among Healthcare Workers', content: <div className="p-8 bg-gray-100 rounded-lg">Placeholder content for Adverse Effects Among Healthcare Workers (implement AdverseEffectsHcwsSection)</div> },
      { id: 'summary', title: 'Summary', content: <SummarySection02 /> }
    ],
    'chapter-03': [
      { 
        id: 'intro', 
        title: 'Introduction', 
        content: <IntroductionSection03 />,
        chapterTitle: 'Hierarchical Controls in Handling Chemotherapy',
        chapterDescription: 'Overview of hierarchical controls for handling chemotherapy/ HDs'
      },
      { 
        id: 'standard', 
        title: 'Standard Guidelines', 
        content: <div className="p-8 bg-gray-100 rounded-lg">Placeholder content for Standard Guidelines (implement StandardGuidelinesSection)</div>,
        chapterTitle: 'Chapter 03: Hierarchical Controls',
        chapterDescription: 'Engineering controls, administrative measures, and PPE for safe handling'
      },
      { id: 'hierarchical', title: 'Hierarchical Controls Overview', content: <div className="p-8 bg-gray-100 rounded-lg">Placeholder content for Hierarchical Controls Overview (implement HierarchicalControlsOverviewSection)</div> },
      { id: 'engineering', title: 'Engineering Controls', content: <div className="p-8 bg-gray-100 rounded-lg">Placeholder content for Engineering Controls (implement EngineeringControlsSection)</div> },
      { id: 'ppe', title: 'Personal Protective Equipment', content: <div className="p-8 bg-gray-100 rounded-lg">Placeholder content for Personal Protective Equipment (implement PreRequirementsSection)</div> },
      { id: 'summary', title: 'Summary', content: <SummarySection03 /> }
    ],
    'chapter-04': [
      { 
        id: 'intro', 
        title: 'Introduction', 
        content: <IntroductionSection04 />,
        chapterTitle: 'Recommendations for Handling Chemotherapy',
        chapterDescription: 'Overview of recommendations and best practices in handling chemotherapy'
      },
      { 
        id: 'receiving', 
        title: 'Receiving, Distribution, and Storage', 
        content: <div className="p-8 bg-gray-100 rounded-lg">Placeholder content for Receiving, Distribution, and Storage (implement ReceivingStorageSection)</div>,
        chapterTitle: 'Chapter 04: Handling Recommendations',
        chapterDescription: 'Best practices for receiving, preparing, administering, and disposing'
      },
      { id: 'compounding', title: 'Compounding Hazardous Drugs', content: <div className="p-8 bg-gray-100 rounded-lg">Placeholder content for Compounding Hazardous Drugs (implement CompoundingHdsSection)</div> },
      { id: 'administration', title: 'Administration of Chemotherapy', content: <div className="p-8 bg-gray-100 rounded-lg">Placeholder content for Administration of Chemotherapy (implement AdministrationSection)</div> },
      { id: 'waste', title: 'Disposal of Waste', content: <div className="p-8 bg-gray-100 rounded-lg">Placeholder content for Disposal of Waste (implement WasteDisposalSection)</div> },
      { id: 'cleaning', title: 'Cleaning and Decontamination', content: <div className="p-8 bg-gray-100 rounded-lg">Placeholder content for Cleaning and Decontamination (implement CleaningDecontaminationSection)</div> },
      { id: 'spill', title: 'Cleaning HD Spills', content: <div className="p-8 bg-gray-100 rounded-lg">Placeholder content for Cleaning HD Spills (implement SpillManagementSection)</div> },
      { id: 'reassignment', title: 'Protective Reassignment', content: <div className="p-8 bg-gray-100 rounded-lg">Placeholder content for Protective Reassignment (implement ProtectiveReassignmentSection)</div> },
      { id: 'emergency', title: 'Emergency Procedures', content: <div className="p-8 bg-gray-100 rounded-lg">Placeholder content for Emergency Procedures (implement EmergencyProceduresSection)</div> },
      { id: 'training', title: 'Training and Medical Surveillance', content: <div className="p-8 bg-gray-100 rounded-lg">Placeholder content for Training and Medical Surveillance (implement TrainingSurveillanceSection)</div> },
      { id: 'summary', title: 'Summary', content: <SummarySection04 /> }
    ],
    'chapter-05': [
      { 
        id: 'intro', 
        title: 'Introduction', 
        content: <IntroductionSection05 />,
        chapterTitle: 'Safety Precautions',
        chapterDescription: 'Overview of barriers that contribute to safety precautions and occupational exposure and the impact of education towards safe practices'
      },
      { 
        id: 'barriers', 
        title: 'Barriers to Following Safety Precautions', 
        content: <div className="p-8 bg-gray-100 rounded-lg">Placeholder content for Barriers to Following Safety Precautions (implement BarriersSafetySection)</div>,
        chapterTitle: 'Chapter 05: Barriers and Education Impact',
        chapterDescription: 'Factors affecting compliance and effectiveness of education programs'
      },
      { id: 'education', title: 'Impact of Education Programs', content: <div className="p-8 bg-gray-100 rounded-lg">Placeholder content for Impact of Education Programs (implement EducationImpactSection)</div> },
      { id: 'summary', title: 'Summary', content: <SummarySection05 /> }
    ]
    // Add more chapters here as you implement them
  };

  return sectionMap[chapterId] || [];
};