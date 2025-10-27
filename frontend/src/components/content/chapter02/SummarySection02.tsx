// FILE: src/components/content/chapter02/SummarySection02.tsx
// Chapter 2 specific summary implementation
// ============================================
import { SummarySection } from '../SummarySection';
import type { SummaryData } from '@/types/content';
import summaryImage from '../../../assets/summary02.png';

export const SummarySection02: React.FC = () => {
  const summaryData: SummaryData = {
    title: 'Chapter 02 Summary',
    description: [
      'Occupational exposure to anti-cancer agents is a health concern. Anti-cancer drugs and their metabolites are detected on drug-handling surfaces and biological samples. However, OELs are not established for chemotherapy due to their toxic properties and zero contamination is accepted. Inhalation, dermal contact, ingestion, and needle stick injuries are found as exposure routes. Inhalation and dermal contamination are common, and a range of risk activities are found. Occupational exposure related to adverse health effects is widely reported among HCWs. Headache, dizziness, nausea, vomiting, hypersensitivity reactions, reproductive issues such as miscarriages, fetal death, and fertility-related issues are widely reported.'
    ],
    keyPoints: [
      ''
    ],
    images: [
      {
        src: summaryImage,
        alt: 'Occupational exposure to chemotherapy and potential risks',
        caption: 'Occupational exposure to chemotherapy and potential risks',
        size: 'full', // Use preset: small, medium, large, full, auto
        objectFit: 'contain' // How image should fit: contain, cover, fill, none, scale-down
      }
    ],
    variant: 'gradient'
  };

  return <SummarySection data={summaryData} />;
};