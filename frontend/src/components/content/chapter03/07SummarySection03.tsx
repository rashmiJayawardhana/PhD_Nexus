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
      '🏢 Major Organizations: NIOSH, OSHA, ASHP, USP, ONS, and ISOPP provide comprehensive guidelines for safe HD handling',
      '🎯 USP Chapter 800: Mandates specific requirements for hazard communication, training, safe administration, decontamination, and spill control',
      '🔺 Hierarchy of Controls: 5 levels from most to least effective - (1) Elimination, (2) Substitution, (3) Engineering Controls, (4) Administrative Controls, (5) PPE',
      '❌ Levels 1 & 2 Rarely Feasible: Elimination and substitution are seldom possible since treatment depends on cancer diagnosis',
      '🔧 Engineering Controls (Level 3): Include C-PEC (BSC/CACI), C-SEC (compounding room), and supplemental controls (CSTDs)',
      '📋 BSC Class II Type B2: Recommended for HDs - provides 100% discharge of contaminated air outdoors with HEPA filtration',
      '🏗️ C-SEC Requirements: Minimum 20 ACPH, externally vented, HEPA exhaust, temperature 18-22°C, humidity 40-60%',
      '⚠️ CSTDs Are Supplemental: Never substitute for C-PEC; always prepare drugs inside BSC/isolator',
      '📝 Administrative Controls (Level 4): SOPs, safe work procedures, handwashing, limiting access, protective reassignment, training, medical surveillance',
      '🧤 Double Gloves Required: Change every 30 minutes or when damaged; sterile, powder-free, chemotherapy-tested (ASTM standards)',
      '😷 Respirators for Risk Activities: P2/P3 masks, CCAPR, or PAPR for spills, decontamination, and airborne exposure (NIOSH-approved)',
      '🥼 Gown Specifications: Polyethene-coated polypropylene, back closure, closed cuffs, no seams; change every 2-3 hours or after spills',
      '🥽 Eye/Face Protection: Face shields combined with goggles required; regular eyeglasses inadequate',
      '👟 Additional Covers: Hair/head covers (including beards), sleeve covers, and impervious shoe covers protect from residual contact',
      '🗑️ Proper Disposal: All contaminated PPE discarded as cytotoxic waste; never reuse disposable items',
      '🚫 Critical Don\'t: Never wear PPE outside work environment; never spray alcohol (wipe only); never prime outside BSC'
    ],
    images: [
      {
        src: summaryImage,
        alt: 'Hierarchical controls pyramid and PPE guidelines',
        caption: 'Five levels of hierarchical controls for safe handling of hazardous drugs',
        size: 'full', // Use preset: small, medium, large, full, auto
        objectFit: 'contain' // How image should fit: contain, cover, fill, none, scale-down
      }
    ],
    variant: 'gradient',
    imageLayout: 'stack'
  };

  return <SummarySection data={summaryData} />;
};