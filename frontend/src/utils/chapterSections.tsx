// FILE: src/utils/chapterSections.tsx
// Utility to get sections for each chapter 
// ============================================
import type { ContentSection } from '@/types/content';
import { IntroductionSection01 } from '@/components/content/chapter01/IntroductionSection01';
import { CancerOverviewSection } from '@/components/content/chapter01/CancerOverviewSection';
import { EpidemiologySection } from '@/components/content/chapter01/EpidemiologySection';
import { TreatmentSection } from '@/components/content/chapter01/TreatmentSection';
import { HazardousSection } from '@/components/content/chapter01/HazardousSection';
import { SummarySection01 } from '@/components/content/chapter01/SummarySection01';
import { SummarySection02 } from '@/components/content/chapter02/SummarySection02';
import ChemotherapyExposureSection from '@/components/content/chapter02/ChemotherapyExposureSection';
import { SummarySection03 } from '@/components/content/chapter03/SummarySection03';
import { SummarySection04 } from '@/components/content/chapter04/SummarySection04';
import { SummarySection05 } from '@/components/content/chapter05/SummarySection05';
import ChemotherapySection from '@/components/content/chapter01/ChemotherapySection';
import { IntroductionSection02 } from '@/components/content/chapter02/IntroductionSection02';
import { IntroductionSection03 } from '@/components/content/chapter03/IntroductionSection03';
import { IntroductionSection04 } from '@/components/content/chapter04/IntroductionSection04';
import { IntroductionSection05 } from '@/components/content/chapter05/IntroductionSection05';
import EvidenceExposureSection from '@/components/content/chapter02/EvidenceExposureSection';
import StandardGuidelinesSection from '@/components/content/chapter03/StandardGuidelinesSection';
import HierarchicalControlsOverviewSection from '@/components/content/chapter03/HierarchicalControlsOverviewSection';
import EngineeringControlsSection from '@/components/content/chapter03/EngineeringControlsSection';
import BarriersToSafetySection from '@/components/content/chapter05/BarriersToSafetySection';
import EducationImpactSection from '@/components/content/chapter05/EducationImpactSection';
import { ReferencesSection } from '@/components/content/resources/ReferencesSection';
import { GlossarySection } from '@/components/content/resources/GlossarySection';
import { AcknowledgementsSection } from '@/components/content/resources/AcknowledgementsSection';
import { AbbreviationsSection } from '@/components/content/resources/AbbreviationsSection';
import ReceivingStorageSection from '@/components/content/chapter04/ReceivingStorageSection';
import CompoundingHdsSection from '@/components/content/chapter04/CompoundingHdsSection';
import AdministrationSection from '@/components/content/chapter04/AdministrationSection';
import WasteDisposalSection from '@/components/content/chapter04/WasteDisposalSection';
import CleaningDecontaminationSection from '@/components/content/chapter04/CleaningDecontaminationSection';

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
        title: 'Evidence of occupational exposure and AEs among HCWs', 
        content: <EvidenceExposureSection/> 
      },
      { id: 'routes', title: 'Chemotherapy exposure routes and risk activities', content: <ChemotherapyExposureSection/>},
      { id: 'summary', title: 'Summary', content: <SummarySection02 /> }
    ],
    'chapter-03': [
      { 
        id: 'intro', 
        title: 'Introduction', 
        content: <IntroductionSection03 />,
        chapterTitle: 'Hierarchical Controls in Handling Chemotherapy',
        chapterDescription: 'Overview of hierarchical controls for handling chemotherapy/HDs'
      },
      { 
        id: 'standard', 
        title: 'Standard Guidelines', 
        content: <StandardGuidelinesSection /> 
      },
      { 
        id: 'hierarchical', 
        title: 'Hierarchical Controls', 
        content: <HierarchicalControlsOverviewSection /> 
      },
      { 
        id: 'engineering', 
        title: 'Engineering Controls', 
        content: <EngineeringControlsSection /> 
      },
      { 
        id: 'ppe', 
        title: 'Personal Protective Equipment', 
        content: <div className="p-8 bg-gray-100 rounded-lg">Placeholder content for PPE (implement PreRequirementsSection)</div>
      },
      { 
        id: 'summary', 
        title: 'Summary', 
        content: <SummarySection03 /> 
      }
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
        content: <ReceivingStorageSection/>
      },
      { id: 'compounding', title: 'Compounding Hazardous Drugs', content: <CompoundingHdsSection/> },
      { id: 'administration', title: 'Administration of Chemotherapy', content: <AdministrationSection/> },
      { id: 'waste', title: 'Disposal of Waste', content: <WasteDisposalSection/> },
      { id: 'cleaning', title: 'Cleaning and Decontamination', content: <CleaningDecontaminationSection/> },
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
      { id: 'barriers', title: 'Barriers to following safety precautions', content: <BarriersToSafetySection /> },
      { id: 'education', title: 'Impact of education programs', content: <EducationImpactSection /> },
      { id: 'summary', title: 'Summary', content: <SummarySection05 /> }
    ],
    'resources': [
      {
        id: 'intro',
        title: 'Overview',
        content: (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Additional Resources</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              This section provides comprehensive supplementary materials to enhance your understanding of safe chemotherapy handling practices.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-5 border-2 border-teal-200">
                <h4 className="font-bold text-teal-900 mb-2">📚 References</h4>
                <p className="text-sm text-slate-700">
                  Complete bibliography of all academic and professional sources cited throughout the content.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-5 border-2 border-purple-200">
                <h4 className="font-bold text-purple-900 mb-2">📖 Glossary</h4>
                <p className="text-sm text-slate-700">
                  Comprehensive definitions of technical terms, abbreviations, and key concepts.
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-lg p-5 border-2 border-pink-200">
                <h4 className="font-bold text-pink-900 mb-2">❤️ Acknowledgements</h4>
                <p className="text-sm text-slate-700">
                  Recognition of institutions and experts who contributed to this educational resource.
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-5 border-2 border-indigo-200">
                <h4 className="font-bold text-indigo-900 mb-2">🔤 Abbreviations</h4>
                <p className="text-sm text-slate-700">
                  Complete list of abbreviations and acronyms used in the content.
                </p>
              </div>
            </div>
          </div>
        ),
        chapterTitle: 'Additional Resources',
        chapterDescription: 'References, glossary, acknowledgements, and supplementary materials'
      },
      {
        id: 'references',
        title: 'References',
        content: <ReferencesSection />
      },
      {
        id: 'glossary',
        title: 'Glossary',
        content: <GlossarySection />
      },
      {
        id: 'acknowledgements',
        title: 'Acknowledgements',
        content: <AcknowledgementsSection />
      },
      {
        id: 'abbreviations',
        title: 'List of Abbreviations',
        content: <AbbreviationsSection />
      }
    ]
  };

  return sectionMap[chapterId] || [];
};