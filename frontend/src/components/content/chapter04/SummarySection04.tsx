// FILE: src/components/content/chapter04/SummarySection04.tsx
// Chapter 4 specific summary implementation
// ============================================
import { SummarySection } from '../SummarySection';
import type { SummaryData } from '@/types/content';
import summaryImage from '../../../assets/summary04.webp';
import summaryImage2 from '../../../assets/summary04-2.png';

export const SummarySection04: React.FC = () => {
  const summaryData: SummaryData = {
    title: 'Chapter 04 Summary',
    description: [
      'Recommendations for handling chemotherapy are established in the guidelines considering the role or activity of handling. Education, training, appropriate facilities and PPE and skills are vital to perform activities related to handling chemotherapy. Chapter 04 discusses the recommendations that are most important to local setting nurses since the present e-module is used as educational material.  Therefore, chapter 04 included the work practices related to receiving, distribution, and storage of HDs, compounding HDs, transport of compounded HDs, administration of chemotherapy, disposal of waste, cleaning and decontamination of HD equipment and work surfaces, deactivation, decontamination, handling spills, contaminated bed linen, recommendations are made to avoid exposure, emergency procedures for personnel contamination with HDs,  training personnel in handling HDs and Medical Surveillance.'
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