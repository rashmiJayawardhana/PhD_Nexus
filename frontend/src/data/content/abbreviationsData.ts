// FILE: src/data/emoduleContent/abbreviationsData.ts
// Complete list of abbreviations used in the e-module
// ============================================

export interface AbbreviationItem {
  abbreviation: string;
  fullForm: string;
  category?: string;
}

export const abbreviationsData: AbbreviationItem[] = [
  // Air & Environment
  {
    abbreviation: 'ACPH',
    fullForm: 'Air Change Per Hour',
    category: 'Safety & Equipment'
  },
  
  // Drugs & Therapy
  {
    abbreviation: 'AD',
    fullForm: 'Antineoplastic Drugs',
    category: 'Medical & Clinical'
  },
  {
    abbreviation: 'ADR',
    fullForm: 'Adverse Drug Reactions',
    category: 'Medical & Clinical'
  },
  {
    abbreviation: 'HDs',
    fullForm: 'Hazardous Drugs',
    category: 'Medical & Clinical'
  },
  {
    abbreviation: 'SACT',
    fullForm: 'Systemic Anti-Cancer Therapy',
    category: 'Medical & Clinical'
  },
  
  // Organizations & Standards
  {
    abbreviation: 'ASHP',
    fullForm: 'American Society of Health-System Pharmacists',
    category: 'Organizations'
  },
  {
    abbreviation: 'ASTM',
    fullForm: 'American Society for Testing and Materials',
    category: 'Organizations'
  },
  {
    abbreviation: 'EPA',
    fullForm: 'Environmental Protection Agency',
    category: 'Organizations'
  },
  {
    abbreviation: 'IARC',
    fullForm: 'International Agency for Research on Cancer',
    category: 'Organizations'
  },
  {
    abbreviation: 'ISOPP',
    fullForm: 'International Society of Oncology Pharmacy Practitioners',
    category: 'Organizations'
  },
  {
    abbreviation: 'NIOSH',
    fullForm: 'National Institute for Occupational Safety and Health',
    category: 'Organizations'
  },
  {
    abbreviation: 'OSHA',
    fullForm: 'Occupational Safety and Health Administration',
    category: 'Organizations'
  },
  {
    abbreviation: 'ONS',
    fullForm: 'Oncology Nurses Society',
    category: 'Organizations'
  },
  {
    abbreviation: 'UN',
    fullForm: 'United Nations',
    category: 'Organizations'
  },
  {
    abbreviation: 'USP',
    fullForm: 'United States Pharmacopoeia',
    category: 'Organizations'
  },
  
  // Laboratory & Testing
  {
    abbreviation: 'AST',
    fullForm: 'Aspartate Aminotransferase',
    category: 'Laboratory'
  },
  {
    abbreviation: 'CAs',
    fullForm: 'Chromosomal Aberrations',
    category: 'Laboratory'
  },
  {
    abbreviation: 'DNA',
    fullForm: 'Deoxyribonucleic acid',
    category: 'Laboratory'
  },
  {
    abbreviation: 'FBC',
    fullForm: 'Full Blood Count',
    category: 'Laboratory'
  },
  {
    abbreviation: 'GC-MS',
    fullForm: 'Gas Chromatography Coupled with Mass Spectrometry',
    category: 'Laboratory'
  },
  {
    abbreviation: 'GC-MS-MS',
    fullForm: 'Gas Chromatography-Tandem Mass Spectrometry',
    category: 'Laboratory'
  },
  {
    abbreviation: 'HPLC-UV',
    fullForm: 'High-Performance Liquid Chromatography with Ultraviolet Detection',
    category: 'Laboratory'
  },
  {
    abbreviation: 'LFT',
    fullForm: 'Liver Function Test',
    category: 'Laboratory'
  },
  {
    abbreviation: 'SCEs',
    fullForm: 'Sister Chromatid Exchanges',
    category: 'Laboratory'
  },
  
  // Safety Equipment & Engineering Controls
  {
    abbreviation: 'BSC',
    fullForm: 'Biological Safety Cabinets',
    category: 'Safety & Equipment'
  },
  {
    abbreviation: 'CACIs',
    fullForm: 'Compounding Aseptic Containment Isolators',
    category: 'Safety & Equipment'
  },
  {
    abbreviation: 'C-PEC',
    fullForm: 'Containment Primary Engineering Control',
    category: 'Safety & Equipment'
  },
  {
    abbreviation: 'C-SEC',
    fullForm: 'Containment Secondary Engineering Control',
    category: 'Safety & Equipment'
  },
  {
    abbreviation: 'CDSC',
    fullForm: 'Cytotoxic Drug Safety Cabinets',
    category: 'Safety & Equipment'
  },
  {
    abbreviation: 'CDTDs',
    fullForm: 'Closed System Drug-Transfer Devices',
    category: 'Safety & Equipment'
  },
  {
    abbreviation: 'HEPA',
    fullForm: 'High-Efficiency Particulate Air',
    category: 'Safety & Equipment'
  },
  {
    abbreviation: 'OELs',
    fullForm: 'Occupational Exposure Limits',
    category: 'Safety & Equipment'
  },
  {
    abbreviation: 'PAPR',
    fullForm: 'Powered Air-Purifying Respirator',
    category: 'Safety & Equipment'
  },
  {
    abbreviation: 'PEC',
    fullForm: 'Primary Engineering Controls',
    category: 'Safety & Equipment'
  },
  {
    abbreviation: 'PPE',
    fullForm: 'Personal Protective Equipment',
    category: 'Safety & Equipment'
  },
  {
    abbreviation: 'SDS',
    fullForm: 'Safety Data Sheets',
    category: 'Safety & Equipment'
  },
  {
    abbreviation: 'SOP',
    fullForm: 'Standard Operating Procedures',
    category: 'Safety & Equipment'
  },
  
  // Healthcare Workers & Professional Development
  {
    abbreviation: 'HCWs',
    fullForm: 'Healthcare Workers',
    category: 'Professional'
  },
  {
    abbreviation: 'CPD',
    fullForm: 'Continuous Professional Development',
    category: 'Professional'
  },
  
  // Administration Routes
  {
    abbreviation: 'IM',
    fullForm: 'Intramuscular',
    category: 'Medical & Clinical'
  },
  {
    abbreviation: 'IT',
    fullForm: 'Intrathecal',
    category: 'Medical & Clinical'
  },
  {
    abbreviation: 'IV',
    fullForm: 'Intravenous',
    category: 'Medical & Clinical'
  },
  {
    abbreviation: 'SC',
    fullForm: 'Subcutaneous',
    category: 'Medical & Clinical'
  },
  
  // Geographic & Economic
  {
    abbreviation: 'LMIC',
    fullForm: 'Lower- and Middle-Income Countries',
    category: 'General'
  },
  
  // Goals & Development
  {
    abbreviation: 'SDG',
    fullForm: 'Sustainable Development Goal',
    category: 'General'
  }
];

// Sort alphabetically by abbreviation
abbreviationsData.sort((a, b) => a.abbreviation.localeCompare(b.abbreviation));