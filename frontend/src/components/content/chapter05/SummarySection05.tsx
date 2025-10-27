// FILE: src/components/content/chapter05/SummarySection05.tsx
// Chapter 5 specific summary implementation
// ============================================
import { SummarySection } from '../SummarySection';
import type { SummaryData } from '@/types/content';
import summaryImage from '../../../assets/summary05.png';
import summaryImage2 from '../../../assets/home.png';

export const SummarySection05: React.FC = () => {
  const summaryData: SummaryData = {
    title: 'Chapter 05 Summary',
    description: [
      'A wide variety of practices affect occupational exposure and the safe handling of chemotherapy. Those include increased patient count, frequent drug utilization, handling high doses and complex drug regimens, inadequate knowledge and training, poor attitudes toward safety measures, insufficient supervision on handling, multitasking and work pressure, staff shortage, interpersonal influences, personal factors, unsafe working environment and limited facilities. Insufficient knowledge and training frequently associated factors with occupational exposure and related adverse effects.',
      'Literature reports that education and training programs enhance compliance with safety guidelines and reduce occupational exposure and related adverse effects. Web-based online courses, educational modules, safety guidelines, demonstrations, re-demonstrations, videos, PowerPoint presentations, seminars, and workshops were common tools used in education programs to improve knowledge, attitude and performance in handling cytotoxic drugs among nurses.'
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
      },
      {
        src: summaryImage2,
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