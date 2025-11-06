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
      'Occupational exposure to anti-cancer agents is a health concern. Anti-cancer drugs and their metabolites are detected on drug-handling surfaces and biological samples. However, OELs are not established for chemotherapy due to their toxic properties, and zero contamination is accepted. Inhalation, dermal contact, ingestion, and needle stick injuries are found as exposure routes. Inhalation and dermal contamination are common, and a range of risk activities are found. Occupational exposure and related AEs are widely reported among HCWs. Headache, dizziness, nausea, vomiting, hypersensitivity reactions, and reproductive AEs (miscarriages, fetal death, and fertility-related issues) are associated with exposure to anti-cancer chemotherapy.'
    ],
    keyPoints: [
      '🔬 DETECTION: First concerns raised in 1970s - Zero contamination is the target (no safe OELs for hospital settings)',
      '🎯 FOUR ROUTES: Remember "I.D.I.N" - Inhalation (most common), Dermal contact, Ingestion, Needle stick injuries',
      '⚠️ HIGH-RISK TRIO: Compounding, Administration, and Spill management generate the most aerosols and exposure',
      "📊 ACUTE EFFECTS: 6 H's - Headache (37.25%), Hair loss (68.8%), Hypersensitivity, Hand/skin irritation, Heaving (nausea), Haziness (dizziness)",
      '🔴 REPRODUCTIVE RISKS: First trimester exposure = highest risk for miscarriage, stillbirths, and congenital abnormalities',
      '🧪 BIOLOGICAL MARKERS: Three key indicators - Urine mutagenicity, Chromosomal aberrations (CAs), Sister chromatid exchanges (SCEs)',
      '🏥 CONTAMINATION SITES: BSCs, countertops, equipment, floors, and drug vial exteriors all show detectable HD residue',
      '📈 CUMULATIVE RISK: Years of exposure positively correlate with adverse effects - long-term exposure increases risk',
      '🚫 CRITICAL RULE: Never eat, drink, or store food in HD handling areas - ingestion risk is preventable',
      '👥 HIGHEST RISK WORKERS: Nurses and pharmacists directly handling chemotherapy are at greatest risk of contamination'
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