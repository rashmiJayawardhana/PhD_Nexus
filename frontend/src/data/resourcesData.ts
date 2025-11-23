// src/data/resourcesData.ts
import type { ResourceDocument, SupportiveMaterial, QuestionSet } from '@/types/resources';

export const regulatoryGuidelines: ResourceDocument[] = [
  {
    id: 'asco-standards',
    title: 'Safe Handling of Hazardous Drugs: ASCO Standards',
    organization: 'ASCO',
    description: 'Comprehensive standards from the American Society of Clinical Oncology for safe handling of hazardous drugs in healthcare settings.',
    driveUrl: 'https://kiuedu-my.sharepoint.com/:b:/r/personal/samanthi_kiu_ac_lk/Documents/Website/For%20more%20page/Guidelines%20introduced%20by%20regulatory%20agencies/ASCO%20-%20Safe%20Handling%20of%20Hazardous%20Drugs%20ASCO%20Standards.pdf?csf=1&web=1&e=0JU9gk',
    fileType: 'pdf',
    icon: '🏥',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'ashp-guidelines',
    title: 'ASHP Guidelines on Handling Hazardous Drugs',
    organization: 'ASHP',
    description: 'Essential guidelines from the American Society of Health-System Pharmacists for healthcare professionals.',
    driveUrl: 'https://kiuedu-my.sharepoint.com/:b:/r/personal/samanthi_kiu_ac_lk/Documents/Website/For%20more%20page/Guidelines%20introduced%20by%20regulatory%20agencies/ASHP%20Guidelines%20on%20Handling%20Hazardous%20Drugs.pdf?csf=1&web=1&e=DZeaKh',
    fileType: 'pdf',
    icon: '💊',
    color: 'from-teal-500 to-teal-600'
  },
  {
    id: 'isopp-standards',
    title: 'ISOPP Standards for Safe Handling of Cytotoxics',
    organization: 'ISOPP',
    description: 'International standards for the safe handling of cytotoxic drugs in oncology practice.',
    driveUrl: 'https://kiuedu-my.sharepoint.com/:b:/r/personal/samanthi_kiu_ac_lk/Documents/Website/For%20more%20page/Guidelines%20introduced%20by%20regulatory%20agencies/ISOPP%20standards%20for%20the%20safe%20handling%20of%20cytotoxics.pdf?csf=1&web=1&e=IsZch1',
    fileType: 'pdf',
    icon: '🌍',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'niosh-alert',
    title: 'Preventing Occupational Exposures to Antineoplastic Drugs',
    organization: 'NIOSH',
    description: 'NIOSH Alert providing critical information on preventing occupational exposures to antineoplastic and other hazardous drugs.',
    driveUrl: 'https://kiuedu-my.sharepoint.com/:b:/r/personal/samanthi_kiu_ac_lk/Documents/Website/For%20more%20page/Guidelines%20introduced%20by%20regulatory%20agencies/NIOSH%20Alert%20-%20Prevention%20occupational%20exposure%20to%20antineoplastic%20and%20other%20HD%20in%20healt%20care%20settings.pdf?csf=1&web=1&e=m9jzPV',
    fileType: 'pdf',
    icon: '⚠️',
    color: 'from-amber-500 to-amber-600'
  },
  {
    id: 'niosh-list',
    title: 'NIOSH List of Hazardous Drugs in Healthcare Settings',
    organization: 'NIOSH',
    description: 'Comprehensive list of hazardous drugs used in healthcare settings with safety recommendations.',
    driveUrl: 'https://kiuedu-my.sharepoint.com/:b:/r/personal/samanthi_kiu_ac_lk/Documents/Website/For%20more%20page/Guidelines%20introduced%20by%20regulatory%20agencies/NIOSH%20List%20of%20Hazardous%20Drugs.pdf?csf=1&web=1&e=4AvKWu',
    fileType: 'pdf',
    icon: '📋',
    color: 'from-red-500 to-red-600'
  },
  {
    id: 'ntp-effects',
    title: 'Developmental Effects and Pregnancy Outcomes',
    organization: 'NTP - US',
    description: 'National Toxicology Program report on developmental effects and pregnancy outcomes related to hazardous drug exposure.',
    driveUrl: 'https://kiuedu-my.sharepoint.com/:b:/r/personal/samanthi_kiu_ac_lk/Documents/Website/For%20more%20page/Guidelines%20introduced%20by%20regulatory%20agencies/NTP%20%E2%80%93%20US%20-%20Developmental%20Effects%20and%20Pregnancy%20Outcomes.pdf?csf=1&web=1&e=GNqZ32',
    fileType: 'pdf',
    icon: '🤰',
    color: 'from-pink-500 to-pink-600'
  },
  {
    id: 'usp-800',
    title: 'USP General Chapter 800',
    organization: 'USP',
    description: 'United States Pharmacopeia Chapter 800 standards for handling hazardous drugs in healthcare settings.',
    driveUrl: 'https://kiuedu-my.sharepoint.com/:b:/r/personal/samanthi_kiu_ac_lk/Documents/Website/For%20more%20page/Guidelines%20introduced%20by%20regulatory%20agencies/USP%20-%20General%20Chapter%20800.pdf?csf=1&web=1&e=3oEVQW',
    fileType: 'pdf',
    icon: '📖',
    color: 'from-green-500 to-green-600'
  }
];

export const supportiveMaterials: SupportiveMaterial[] = [
  {
    id: 'ppt-overview',
    title: 'Safety Precautions for Handling Chemotherapy',
    description: 'Comprehensive presentation covering key concepts in chemotherapy safety. Available in both PDF and PowerPoint formats.',
    type: 'ppt',
    viewUrl: 'https://kiuedu-my.sharepoint.com/:b:/r/personal/samanthi_kiu_ac_lk/Documents/Website/For%20more%20page/Supportive%20PPT.pdf?csf=1&web=1&e=GGdf0h', // PDF version (primary)
    alternateFormats: [
      {
        label: 'PowerPoint',
        url: 'https://kiuedu-my.sharepoint.com/:p:/r/personal/samanthi_kiu_ac_lk/_layouts/15/Doc.aspx?sourcedoc=%7B9EFF7265-FD3D-448E-8A8C-A95430269987%7D&file=Supportive%20PPT.pptx&action=edit&mobileredirect=true',
        format: 'pptx',
        description: 'Editable PowerPoint version'
      },
      {
        label: 'PDF',
        url: 'https://kiuedu-my.sharepoint.com/:b:/r/personal/samanthi_kiu_ac_lk/Documents/Website/For%20more%20page/Supportive%20PPT.pdf?csf=1&web=1&e=GGdf0h',
        format: 'pdf',
        description: 'PDF version for easy viewing'
      }
    ],
    icon: '📊',
    isVideo: false
  },
  {
    id: 'video-ppe',
    title: 'PPE Donning & Doffing Techniques',
    description: 'Step-by-step video demonstration of proper PPE usage in chemotherapy handling.',
    type: 'video',
    viewUrl: 'https://www.youtube.com/watch?v=UIHmtr-_ik4',
    duration: '3:08',
    icon: '🎥',
    isVideo: true
  },
  {
    id: 'video-spill',
    title: 'Safety Precautions Video Guide',
    description: 'Comprehensive video guide on safety precautions when handling chemotherapy.',
    type: 'video',
    viewUrl: 'https://kiuedu-my.sharepoint.com/personal/samanthi_kiu_ac_lk/_layouts/15/stream.aspx?id=%2Fpersonal%2Fsamanthi%5Fkiu%5Fac%5Flk%2FDocuments%2FWebsite%2FFor%20more%20page%2FSupportive%20short%20video%20%2D%20Safety%20precautions%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ef0ab4e02%2Def36%2D4a4a%2Db698%2D1a04f1380a5b',
    duration: '41:31',
    icon: '🎬',
    isVideo: true
  },
  {
    id: 'module-feed',
    title: 'E-Module Content Feed',
    description: 'Access supplementary materials and updates from the e-learning modules. View in Google Drive and download if needed.',
    type: 'document',
    viewUrl: 'https://kiuedu-my.sharepoint.com/:w:/r/personal/samanthi_kiu_ac_lk/_layouts/15/Doc.aspx?sourcedoc=%7B4EE0CBCF-A7AF-44A9-A892-704D64B6175C%7D&file=Content%20to%20be%20fed%20-%202.%20E-module%20-Edited%20-%20reduced%20contnet.docx&action=default&mobileredirect=true',
    icon: '📚',
    isVideo: false
  },
  {
    id: 'glossary',
    title: 'E-Module Glossary',
    description: 'Comprehensive glossary of terms used throughout the educational modules. View and download from Google Drive.',
    type: 'glossary',
    viewUrl: 'YOUR_GLOSSARY_LINK_HERE', // Add your glossary link
    icon: '📖',
    isVideo: false
  }
];

export const selfStudyQuestions: QuestionSet[] = [
  {
    id: 1,
    title: "Anti-cancer Drugs & Chemotherapy",
    description: "Test your understanding of anti-cancer drugs and their classification",
    questions: [
      {
        id: 1,
        text: "Select all TRUE statements regarding anti-cancer drugs/anti-cancer chemotherapy:",
        type: "multiple-choice",
        options: [
          "Mainly used to treat cancer",
          "Anti-cancer drugs are considered hazardous drugs",
          "Many anti-cancer drugs belong to the cytotoxic drug group",
          "Chemotherapy destroys cancer cells",
          "Chemotherapy acts on both cancer cells and healthy cells in the body"
        ],
        correctAnswers: {
          "Mainly used to treat cancer": true,
          "Anti-cancer drugs are considered hazardous drugs": true,
          "Many anti-cancer drugs belong to the cytotoxic drug group": true,
          "Chemotherapy destroys cancer cells": true,
          "Chemotherapy acts on both cancer cells and healthy cells in the body": true
        },
        explanation: "All statements are TRUE. Anti-cancer drugs are hazardous medications primarily used to treat cancer by destroying cancer cells, though they also affect healthy cells."
      }
    ]
  },
  {
    id: 2,
    title: "Routes of Occupational Exposure",
    description: "Understand the pathways of potential exposure to hazardous drugs",
    questions: [
      {
        id: 2,
        text: "Select all TRUE routes of occupational exposure:",
        type: "multiple-choice",
        options: [
          "Dermal contact",
          "Inhalation of vapours/drug particles",
          "Ingestion",
          "Needle prick injuries",
          "Contact with excreta of patients who have undergone chemotherapy"
        ],
        correctAnswers: {
          "Dermal contact": true,
          "Inhalation of vapours/drug particles": true,
          "Ingestion": true,
          "Needle prick injuries": true,
          "Contact with excreta of patients who have undergone chemotherapy": true
        },
        explanation: "All listed routes are valid pathways for occupational exposure to hazardous drugs. Healthcare workers must be aware of all these exposure risks."
      }
    ]
  },
  {
    id: 3,
    title: "Drug Particle Creation",
    description: "Learn about activities that create inhalable drug particles",
    questions: [
      {
        id: 3,
        text: "Select all activities that create inhalable drug particles/droplets:",
        type: "multiple-choice",
        options: [
          "Preparation of parenteral drugs",
          "Priming IV syringes/tubes",
          "Administering drugs into the IV line/administer IV drugs",
          "Leakage of drugs",
          "Cleaning and decontamination of drug spills"
        ],
        correctAnswers: {
          "Preparation of parenteral drugs": true,
          "Priming IV syringes/tubes": true,
          "Administering drugs into the IV line/administer IV drugs": true,
          "Leakage of drugs": true,
          "Cleaning and decontamination of drug spills": true
        },
        explanation: "All these activities can generate inhalable particles. Proper containment and PPE are essential during all these procedures."
      }
    ]
  },
  {
    id: 4,
    title: "Accidental Spills & Contamination",
    description: "Learn proper procedures for handling drug spills and contamination",
    questions: [
      {
        id: 4,
        text: "Select all TRUE statements regarding accidental drug spills/contaminations:",
        type: "multiple-choice",
        options: [
          "Dermal contamination needs to be done with soap and water immediately",
          "Wipe out small spills on the skin with tissue paper immediately",
          "Eye contact/splash needs to be immediately washed with normal saline",
          "Spillage of chemotherapy drugs should be cleaned with a spill kit",
          "The first step of spillage management is to wear PPE"
        ],
        correctAnswers: {
          "Dermal contamination needs to be done with soap and water immediately": true,
          "Wipe out small spills on the skin with tissue paper immediately": false,
          "Eye contact/splash needs to be immediately washed with normal saline": true,
          "Spillage of chemotherapy drugs should be cleaned with a spill kit": true,
          "The first step of spillage management is to wear PPE": true
        },
        explanation: "NEVER wipe spills with tissue paper as this spreads contamination. Always use soap and water for skin contamination, irrigate eyes immediately with normal saline, use proper spill kits, and always don PPE before cleaning."
      }
    ]
  },
  {
    id: 5,
    title: "PPE & Safety Equipment",
    description: "Evaluate your knowledge of protective equipment and safety measures",
    questions: [
      {
        id: 5,
        text: "Select all TRUE statements:",
        type: "multiple-choice",
        options: [
          "Personal Protective Equipment (PPE) reduces possible exposure",
          "Luer-lock connectors/CTDS provide better protection against exposure to chemotherapy",
          "IV lines need to be flushed with normal saline before adding chemotherapy",
          "Chemotherapy-specific PPE (gloves/gown/respiratory mask) will provide the best protection against exposure to chemotherapy",
          "Policies/guidelines need to be followed in handling chemotherapy"
        ],
        correctAnswers: {
          "Personal Protective Equipment (PPE) reduces possible exposure": true,
          "Luer-lock connectors/CTDS provide better protection against exposure to chemotherapy": true,
          "IV lines need to be flushed with normal saline before adding chemotherapy": false,
          "Chemotherapy-specific PPE (gloves/gown/respiratory mask) will provide the best protection against exposure to chemotherapy": true,
          "Policies/guidelines need to be followed in handling chemotherapy": true
        },
        explanation: "IV lines should NOT be flushed with normal saline before adding chemotherapy - this is incorrect practice. All other statements are TRUE. Proper PPE, Luer-lock connectors, chemotherapy-specific equipment, and following guidelines are essential for safety."
      }
    ]
  },
  {
    id: 6,
    title: "Glove Change Duration",
    description: "Understand proper timing for changing protective gloves",
    questions: [
      {
        id: 6,
        text: "Select all CORRECT statements about the duration of changing gloves:",
        type: "multiple-choice",
        options: [
          "15 minutes",
          "20 minutes",
          "30 minutes",
          "Immediately after torn/damaged",
          "No specific time duration can be used until finishing the activities"
        ],
        correctAnswers: {
          "15 minutes": false,
          "20 minutes": false,
          "30 minutes": true,
          "Immediately after torn/damaged": true,
          "No specific time duration can be used until finishing the activities": false
        },
        explanation: "Gloves should be changed every 30 minutes OR immediately if torn/damaged. There IS a specific time duration - gloves must not be used for extended periods as they can permeate over time. The 30-minute rule is critical for safety."
      }
    ]
  },
  {
    id: 7,
    title: "Adverse Effects of Exposure",
    description: "Recognize potential health impacts of chemotherapy exposure",
    questions: [
      {
        id: 7,
        text: "Occupational exposure to chemotherapy may lead to acute/long-term adverse effects:",
        type: "table",
        tableData: {
          headers: ["Adverse Effect", "True", "False", "Do not know"],
          rows: [
            "Headache/Dizziness/Drowsy",
            "Nausea/vomiting",
            "Breathing difficulties",
            "Allergy/skin/eye irritation",
            "Miscarriages/fetal loss",
            "Congenital disabilities/intrauterine growth retardation/low birth weight",
            "Sub-fertility/infertility",
            "Cancer/leukaemia/Genetic/chromosomal changes",
            "Hair loss/speedy grey hair",
            "Anaemia/reduction of blood cell count"
          ]
        },
        correctAnswers: {
          "Headache/Dizziness/Drowsy": "true",
          "Nausea/vomiting": "true",
          "Breathing difficulties": "true",
          "Allergy/skin/eye irritation": "true",
          "Miscarriages/fetal loss": "true",
          "Congenital disabilities/intrauterine growth retardation/low birth weight": "true",
          "Sub-fertility/infertility": "true",
          "Cancer/leukaemia/Genetic/chromosomal changes": "true",
          "Hair loss/speedy grey hair": "true",
          "Anaemia/reduction of blood cell count": "true"
        },
        explanation: "ALL listed effects are TRUE adverse effects that can result from occupational exposure to chemotherapy. This emphasizes the critical importance of proper safety protocols."
      }
    ]
  },
  {
    id: 8,
    title: "Safety Practices & Procedures",
    description: "Evaluate your knowledge of safe handling practices",
    questions: [
      {
        id: 8,
        text: "Identify whether each safety practice/procedure is TRUE or FALSE:",
        type: "table",
        tableData: {
          headers: ["Statement", "True", "False", "Do not know"],
          rows: [
            "All steps related to preparing chemotherapy need to be done within proper functioning BSC or isolator",
            "Priming CD-containing syringes/IV tubes into open areas/dustbins/bedside is not an issue",
            "Chemotherapy drugs need to be handled/stored separately from other drugs",
            "The excreta of patients who take chemotherapy need to be treated as hazardous waste",
            "Sharps and syringes should be disposed of in rigid-walled sharps container and segregated from other wastes",
            "Needles should be recapped before being disposed of to prevent needle stick injury",
            "Persons collecting hazardous wastes must take precautions while collecting/transferring",
            "Excreta-contaminated linen/cloths should be washed in machine, not by hand",
            "Seal contact material in plastic bag for transport to chemotherapeutic waste container",
            "Alcohol 70% is effective in removing all types of chemotherapy residue"
          ]
        },
        correctAnswers: {
          "All steps related to preparing chemotherapy need to be done within proper functioning BSC or isolator": "true",
          "Priming CD-containing syringes/IV tubes into open areas/dustbins/bedside is not an issue": "false",
          "Chemotherapy drugs need to be handled/stored separately from other drugs": "true",
          "The excreta of patients who take chemotherapy need to be treated as hazardous waste": "true",
          "Sharps and syringes should be disposed of in rigid-walled sharps container and segregated from other wastes": "true",
          "Needles should be recapped before being disposed of to prevent needle stick injury": "false",
          "Persons collecting hazardous wastes must take precautions while collecting/transferring": "true",
          "Excreta-contaminated linen/cloths should be washed in machine, not by hand": "true",
          "Seal contact material in plastic bag for transport to chemotherapeutic waste container": "true",
          "Alcohol 70% is effective in removing all types of chemotherapy residue": "false"
        },
        explanation: "Key points: Never prime syringes in open areas, never recap needles (injury risk), and alcohol 70% is NOT effective for all chemotherapy residues - special decontamination agents are needed."
      }
    ]
  },
];