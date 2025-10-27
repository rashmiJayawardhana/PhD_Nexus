// FILE: src/components/content/chapter01/SummarySection01.tsx
// Chapter 1 specific summary implementation
// ============================================

import { SummarySection } from '../SummarySection';
import type { SummaryData } from '@/types/content';
import summaryImage from '../../../assets/summary01.png';

export const SummarySection01: React.FC = () => {
  const summaryData: SummaryData = {
    title: 'Chapter 01 Summary',
    description: [
      'Cancer refers to abnormal cell growth, categorized as benign (non-cancerous) or malignant (cancerous). Malignant tumors invade surrounding tissues and show metastasis properties by spreading to new sites through blood or lymph. Cancer is a leading cause of global deaths, and it is expected to rise by 77% by 2050. Lung, breast, colorectal, prostate, and stomach cancers are globally common.',
      'Anti-cancer treatment modalities include surgery, radiotherapy, and SACT (chemotherapy, hormone therapy, targeted therapy, and immunotherapy). The non-selective mechanism and narrow therapeutic index of anti-cancer chemotherapy cause a wide variety of adverse effects. Due to the inherent toxic properties of chemotherapy, it is categorized as a hazardous drug.',
      'Adverse effects are mainly classified according to the drug groups and their presenting time. The common adverse effects include nausea, vomiting, headache, hypersensitivity reactions, alopecia, GI disturbance, tumor lysis syndrome, bone marrow suppression, secondary malignancies, and reproductive adverse effects.'
    ],
    keyPoints: [
      'Cancer incidence projected to increase by 77% by 2050',
      'Malignant tumors demonstrate uncontrolled division and metastasis',
      'SACT includes multiple treatment modalities beyond chemotherapy',
      'Chemotherapy classified as hazardous drug due to toxic properties',
      'Adverse effects vary by drug group and timing of presentation'
    ],
    images: [
      {
        src: summaryImage,
        alt: 'Adverse Effects Classification',
        caption: 'Cancer Treatment Options',
        size: 'full', // Use preset: small, medium, large, full, auto
        objectFit: 'contain' // How image should fit: contain, cover, fill, none, scale-down
      }
    ],
    variant: 'gradient'
  };

  return <SummarySection data={summaryData} />;
};