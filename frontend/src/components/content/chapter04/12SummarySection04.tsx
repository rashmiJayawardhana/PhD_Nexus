// FILE: src/components/content/chapter04/12SummarySection04.tsx
// Chapter 4 specific summary implementation
// ============================================
import { DataSourceIndicator, useHybridContent } from '@/hooks/useHybridContent';
import { SummarySection } from '../SummarySection';
import type { SummaryData } from '@/types/content';
import summaryImage from '../../../assets/summary04.webp';

// Fallback data matching Firebase structure
const SUMMARY_FALLBACK = {
    title: 'Chapter 04 Summary',
    description: [
      'Recommendations for handling chemotherapy are established in the guidelines considering the role or activity of handling. Education, training, appropriate facilities and PPE and skills are vital to perform activities related to handling chemotherapy. Chapter 04 discusses the recommendations that are most important to local setting nurses since the present e-module is used as educational material.  Therefore, chapter 04 included the work practices related to receiving, distribution, and storage of HDs, compounding HDs, transport of compounded HDs, administration of chemotherapy, disposal of waste, cleaning and decontamination of HD equipment and work surfaces, deactivation, decontamination, handling spills, contaminated bed linen, recommendations are made to avoid exposure, emergency procedures for personnel contamination with HDs,  training personnel in handling HDs and Medical Surveillance.'
    ],
    keyPoints: [
      '📦 Receiving & Storage: All personnel must be trained in PPE use and spill cleanup. Store HDs separately with negative air pressure (minimum 20 ACH), wipe vials with alcohol, and maintain spill kits in receiving areas.',
      '🧪 Compounding: Only trained personnel compound HDs inside C-PEC (BSC/isolator) using strict aseptic techniques. Prime IV tubing before adding HDs, use CSTDs, and maintain HEPA-filtered environment with negative pressure.',
      '🚚 Transport: Double-bag all doses in sealed containers with "Hazardous Drug" labels. Manual transportation preferred over pneumatic tubes. Trained personnel only, with spill kits available during transport.',
      '💉 Administration: Wear full PPE (double gloves, gown, respirator, face shield) throughout procedure. Never prime HDs at bedside. Use locking connections, perform manipulations below eye level, and dispose waste in designated containers.',
      '🗑️ Waste Disposal: Incineration at 1100°C is preferred. Never discard into wastewater or landfill. Use leak-proof, puncture-resistant containers clearly labeled for HDs. Separate HD waste at first disposal point.',
      '🧹 Cleaning Steps (4-Step Process): (1) Deactivation - render HDs inert using EPA-registered oxidizers, (2) Decontamination - remove HD residue daily when used, (3) Cleaning - remove organic/inorganic materials, (4) Disinfection - destroy microorganisms after cleaning.',
      '⚠️ Spill Management: Restrict area with warning signs, use complete spill kit with full PPE. Only trained personnel clean spills. Document all incidents and dispose contaminated waste in cytotoxic bins.',
      '🛏️ Contaminated Linen: Wear protective gloves, place in labeled bags, wash separately twice with warm water and detergent. Handle with same precautions as other HD waste.',
      '👶 Protective Reassignment: Required for pregnancy, intent to conceive, lactation, or medical reasons. Employers must develop written policies and offer alternative duties to minimize exposure risk.',
      '🚨 Emergency Procedures: Immediate removal of contaminated PPE/clothing, cleanse with soap and water. Eye exposure requires 15-minute eyewash irrigation. Obtain baseline blood tests (FBC, LFT) and document in medical record.',
      '📚 Training Requirements: Initial training when first assigned, annual refresher training. Content includes adverse effects, exposure routes, PPE selection, engineering controls, work practices, spill management, and medical surveillance role.',
      '🏥 Medical Surveillance: Maintain worker registry, conduct baseline assessments (health status, medical/reproductive history, physical exam, lab tests), perform periodic evaluations, develop follow-up plans, and document all exposures carefully.'
    ],
  variant: 'gradient',
  hasImage: true,
  imagePath: 'summary04.png'
};

export const SummarySection04: React.FC = () => {
  const { data, source } = useHybridContent({
    chapterId: 'chapter-04',
    sectionId: 'summary',
    fallbackData: SUMMARY_FALLBACK
  });

  // Build SummaryData structure
  const summaryData: SummaryData = {
    title: data.title,
    description: data.description,
    keyPoints: data.keyPoints,
    images: data.hasImage ? [
      {
        src: summaryImage,
        alt: 'Chapter 4 Summary - Handling Recommendations',
        caption: 'Comprehensive safety recommendations for handling hazardous drugs',
        size: 'full',
        objectFit: 'contain'
      }
    ] : undefined,
    variant: data.variant as 'default' | 'gradient' | 'bordered'
  };

  return (
    <>
      <DataSourceIndicator source={source} />
      <SummarySection data={summaryData} />
    </>
  );
};