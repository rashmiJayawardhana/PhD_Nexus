// FILE: src/components/content/chapter01/SummarySection01.tsx
// Chapter 1 specific summary implementation
// ============================================

import { SummarySection } from '../SummarySection';
import summaryImage from '../../../assets/summary01.png';
import { DataSourceIndicator, useHybridContent } from '@/hooks/useHybridContent';

const SUMMARY_FALLBACK = {
  title: 'Chapter 01 Summary',
  description: [
    'Cancer refers to abnormal cell growth, categorized as benign (non-cancerous) or malignant (cancerous). Malignant tumors invade surrounding tissues and show metastasis properties by spreading to new sites through blood or lymph. Cancer is a leading cause of global deaths, and it is expected to rise by 77% by 2050. Lung, breast, colorectal, prostate, and stomach cancers are globally common.',
    'Anti-cancer treatment modalities include surgery, radiotherapy, and SACT (chemotherapy, hormone therapy, targeted therapy, and immunotherapy). The non-selective mechanism and narrow therapeutic index of anti-cancer chemotherapy cause a wide variety of adverse effects. Due to the inherent toxic properties of chemotherapy, it is categorized as a hazardous drug.',
    'Adverse effects are mainly classified according to the drug groups and their presenting time. The common adverse effects include nausea, vomiting, headache, hypersensitivity reactions, alopecia, GI disturbance, tumor lysis syndrome, bone marrow suppression, secondary malignancies, and reproductive adverse effects.'
  ],
  keyPoints: [
    '🌍 Global Impact: Cancer causes 1 in 6 deaths worldwide (16.8%), with 77% increase expected by 2050',
    '🔬 Cancer Types: Malignant tumors show uncontrolled division, tissue invasion, and metastasis via blood/lymph',
    '💊 Treatment Options: SACT encompasses chemotherapy, hormone therapy, targeted therapy, and immunotherapy',
    '⚠️ Hazardous Classification: 6 criteria define hazardous drugs - carcinogenicity, teratogenicity, reproductive toxicity, organ toxicity, genotoxicity, and structural similarity',
    '🎯 Drug Mechanisms: Non-selective drugs affect both normal and cancer cells; target-specific drugs act only on malignant cells',
    '📋 Adverse Effect Classification: Organized by drug mechanism, drug groups, affected body systems, and timing (acute vs chronic)',
    '⏱️ Temporal Effects: Acute effects are reversible and occur shortly after treatment; chronic effects are long-term and often irreversible',
    '🌐 Top 5 Cancers: Lung (12.4%), breast (11.6%), colorectal (9.6%), prostate (7.3%), and stomach (4.9%)'
  ],
  images: [
    {
      src: summaryImage,
      alt: 'Adverse Effects Classification',
      caption: 'Cancer Treatment Options',
      size: 'full' as const,
      objectFit: 'contain' as const
    }
  ],
  variant: 'gradient' as const
};

export const SummarySection01: React.FC = () => {
  const { data, source } = useHybridContent({
    chapterId: 'chapter-01',
    sectionId: 'summary',
    fallbackData: SUMMARY_FALLBACK
  });

  return (
    <>
      <DataSourceIndicator source={source} />
      <SummarySection data={data} />
    </>
  );
};