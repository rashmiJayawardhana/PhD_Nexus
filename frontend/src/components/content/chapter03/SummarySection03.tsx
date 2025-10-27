// FILE: src/components/content/chapter03/SummarySection03.tsx
// Chapter 3 specific summary implementation
// ============================================
import { SummarySection } from '../SummarySection';
import type { SummaryData } from '@/types/content';
import summaryImage from '../../../assets/summary03.png';

export const SummarySection03: React.FC = () => {
  const summaryData: SummaryData = {
    title: 'Chapter 03 Summary',
    description: [
      'Chemotherapy is categorized as a hazardous drug due to its inherent toxic properties. The safe handling practices are vital to ensure occupational and environmental health safety. Professional organizations have established the recommendations and best practices to handle chemotherapy and other hazardous drugs. The National Institute for Occupational Safety and Health (NIOSH), Occupational Safety and Health Administration (OSHA), American Society of Health-System Pharmacists (ASHP), United States Pharmacopeia (USP) and Oncology Nurses Society (ONS) well popular organizations established safety guidelines on different aspects of handling.',
      'Mainly five levels of precautions are used and when the most protective level of protection is impossible or less feasible, the next immediate step is applied. Those precautionary levels include eliminating (eliminating the drug), substituting (substituting the drug), engineering controls (separating workers from hazardous drugs), administrative controls (work practices and recommendations) and PPE (using PPE to reduce contamination). Generally, elimination and substitution are impossible in the healthcare setting since drug choice depends on the cancer diagnosis. The cost for engineering controls such as BSC, isolators and CDTDs is high. Administrative controls and PPE are widely used at precautionary levels.'
    ],
    keyPoints: [
      ''
    ],
    images: [
      {
        src: summaryImage,
        alt: '',
        caption: '',
        size: 'full', // Use preset: small, medium, large, full, auto
        objectFit: 'contain' // How image should fit: contain, cover, fill, none, scale-down
      }
    ],
    variant: 'gradient'
  };

  return <SummarySection data={summaryData} />;
};