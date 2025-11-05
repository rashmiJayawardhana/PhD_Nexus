// FILE: src/data/content/glossaryData.ts
// Complete glossary data from document
// ============================================

export interface GlossaryItem {
  term: string;
  definition: string;
  synonyms?: string[];
  category?: string;
}

export const glossaryData: GlossaryItem[] = [
  {
    term: "Adverse Drug Reaction (ADR)",
    definition: "An unwanted, undesired effect of a medicine",
    category: "Medical"
  },
  {
    term: "Antineoplastic",
    definition: "A drug that is used to prevent, inhibit, or treat the development of a neoplasm (a tumour). Most often used to treat cancer, and sometimes used to treat autoimmune diseases",
    category: "Drug Classification"
  },
  {
    term: "AST / SGOT",
    definition: "Aspartate aminotransferase (AST) is an enzyme found in the liver, heart, and muscles that helps with amino acid metabolism. Increased AST levels in the blood indicate liver damage or other health issues. Serum glutamic oxaloacetic transaminase (SGOT) is a synonym for AST.",
    synonyms: ["SGOT", "Aspartate aminotransferase"],
    category: "Laboratory"
  },
  {
    term: "ASTM Standards",
    definition: "Abbreviation for American Society for Testing and Materials (ASTM). It provides standards (including delivery standards, test methods, specifications, guides, and practices) for a wide range of materials, products, systems, and services.",
    category: "Standards"
  },
  {
    term: "Bioavailability",
    definition: "Fraction/rate of drug entry to the systemic circulation from its administration site",
    category: "Pharmacology"
  },
  {
    term: "Biological Safety Cabinet (BSC)",
    definition: "An enclosed, ventilated containment device that protects workers, the environment, and the product, depending on the BSC class",
    synonyms: ["Cytotoxic Safety Cabinet", "CSC"],
    category: "Equipment"
  },
  {
    term: "Blended Learning",
    definition: "Learning methods that combine both teacher-centred learning (e.g., lectures) and student-centred learning (e.g., e-modules).",
    category: "Education"
  },
  {
    term: "Carcinogen",
    definition: "A chemical or physical agent that has the potential to develop cancer",
    category: "Toxicology"
  },
  {
    term: "Chemotherapy",
    definition: "Main drug group of anti-cancer drugs. It is generally known as cytotoxic chemotherapy and kills cancer cells by stopping their growth or dividing. Typically, administered into the vein.",
    category: "Treatment"
  },
  {
    term: "Chromosomal Aberrations (CAs)",
    definition: "Structural and numerical changes in chromosomes result from DNA damage",
    category: "Genetics"
  },
  {
    term: "Closed System Drug-Transfer Devices (CSTDs)",
    definition: "A device that completely contains a substance by preventing leaks, airborne particulates, and vapours from escaping",
    category: "Equipment"
  },
  {
    term: "Containment Primary Engineering Control (C-PEC)",
    definition: "A ventilated device that minimizes exposure to hazardous drugs when workers are directly handling them.",
    category: "Equipment"
  },
  {
    term: "Containment Secondary Engineering Control (C-SEC)",
    definition: "The designated room or area where a Containment Primary Engineering Control (C-PEC) is placed, ensuring a controlled and secure environment for compounding hazardous drugs",
    category: "Equipment"
  },
  {
    term: "Cytotoxic Drug",
    definition: "A drug that affects the growth and proliferation of cells. Generally, those agents bind to cellular genetic materials or affect cellular protein synthesis. Those agents typically do not distinguish between cancer cells and normal cells.",
    category: "Drug Classification"
  },
  {
    term: "Cytotoxic Waste",
    definition: "Any waste contaminated with cytotoxic drugs",
    category: "Waste Management"
  },
  {
    term: "DNA",
    definition: "Deoxyribonucleic acid – The molecule that carries genetic information for the development and functioning of an organism",
    category: "Genetics"
  },
  {
    term: "Epidemiology",
    definition: "Study of how often diseases occur in different groups of people and why",
    category: "Medical Research"
  },
  {
    term: "Eyewash Fountain",
    definition: "A unit/station used to wash off hazardous chemicals that might have splashed into an individual's eyes. The procedure continues for at least 15 minutes before seeking medical advice.",
    category: "Safety Equipment"
  },
  {
    term: "Hazardous Drugs",
    definition: "Any drug that has one or more of the following characteristics: (i) Carcinogenicity (ii) Teratogenicity (iii) Genotoxicity (iv) Reproductive toxicity (v) Organ toxicity at low doses; Or is a new drug that mimics an existing hazardous drug; Or is identified in the NIOSH list as a hazardous drug",
    category: "Drug Classification"
  },
  {
    term: "HEPA Filters",
    definition: "High-Efficiency Particulate Air filters - A type of air filter designed to capture a high percentage of airborne particles, including dust, pollen, mold, bacteria, and other allergens, with 99.97% efficiency for particles as small as 0.3 microns.",
    category: "Equipment"
  },
  {
    term: "Hypersensitivity",
    definition: "Overreaction of the immune system, causing undesirable effects like inflammation and tissue damage",
    category: "Medical"
  },
  {
    term: "Luer-Lock",
    definition: "A fitting for medical instruments that is designed to prevent leaking",
    category: "Equipment"
  },
  {
    term: "Meta-analysis",
    definition: "A powerful research method used to synthesize findings from multiple independent studies to arrive at a more precise estimate of an effect or phenomenon",
    category: "Research"
  },
  {
    term: "Narrow Therapeutic Index",
    definition: "Having a slight difference between minimum and maximum doses, and the potential to develop severe adverse drug reactions (ADR) and/or therapeutic failures",
    category: "Pharmacology"
  },
  {
    term: "Neoplasms",
    definition: "An abnormal mass of tissue that forms when cells grow and divide more than they should or don't die when they should. Neoplasms are called tumours as well. The types of neoplasms are benign (non-cancerous) or malignant (cancerous).",
    synonyms: ["Tumours", "Tumors"],
    category: "Medical"
  },
  {
    term: "Occupational Exposure Limits (OELs)",
    definition: "Maximum allowable concentrations of hazardous substances in the workplace air, set by regulatory bodies to protect workers from adverse health effects",
    category: "Safety Standards"
  },
  {
    term: "Oncology",
    definition: "Study of cancer",
    category: "Medical Specialty"
  },
  {
    term: "Personal Protective Equipment (PPE)",
    definition: "Any clothing or equipment used to minimize exposure to hazards, including physical, electrical, chemical, and biological risks. Examples of PPE include gloves, safety glasses, hard hats, and respirators.",
    category: "Safety Equipment"
  },
  {
    term: "P2 or P3 Masks",
    definition: "Types of mask classification. Retain approximately 94% and 99.95% of particles that are smaller than 0.5 micrometres from P2 and P3 masks, respectively.",
    category: "Safety Equipment"
  },
  {
    term: "Pneumatic Tubes",
    definition: "Use compressed air or vacuum to transport objects or documents through a network of tubes. It acts as an efficient transport method in settings such as hospitals, banks, and offices. Additionally, this method is commonly referred to as air tube systems.",
    synonyms: ["Air Tube Systems"],
    category: "Equipment"
  },
  {
    term: "Powered Air-Purifying Respirator (PAPR)",
    definition: "A collection of tight-fitting goggles and an N95 respirator. This respirator should be worn during high-risk aerosol-generating procedures to prevent the worker's exposure to them.",
    category: "Safety Equipment"
  },
  {
    term: "Review",
    definition: "Research method used to summarize findings from multiple independent studies. The review is less powerful compared to the meta-analysis.",
    category: "Research"
  },
  {
    term: "Safety Data Sheets (SDS)",
    definition: "A document that provides crucial information about hazardous chemicals, including their properties, potential hazards, and safety precautions for handling, storage, and transportation. Additionally, this is commonly referred to as a Material Safety Data Sheet (MSDS).",
    synonyms: ["MSDS", "Material Safety Data Sheet"],
    category: "Safety Documentation"
  },
  {
    term: "Sister Chromatid Exchanges (SCEs)",
    definition: "An indicator of DNA damage or genotoxic effects",
    category: "Genetics"
  },
  {
    term: "Analytical Techniques (HPLC-UV, GC-MS, LC-MS-MS)",
    definition: "High-performance liquid chromatography with ultraviolet detection (HPLC-UV) / Gas chromatography coupled with mass spectrometry or tandem mass spectrometry (GC-MS or GC-MS-MS) / high-performance liquid chromatography-tandem mass spectroscopy (LC-MS-MS) – analytical techniques that identify and quantify compounds in a sample.",
    synonyms: ["HPLC-UV", "GC-MS", "GC-MS-MS", "LC-MS-MS"],
    category: "Laboratory"
  },
  {
    term: "Standard Operating Procedures (SOPs)",
    definition: "A set of step-by-step instructions followed to carry out a specific procedure",
    category: "Protocols"
  },
  {
    term: "Stem Cell Transplant",
    definition: "Replace damaged or destroyed blood-forming cells with healthy stem cells. It is also known as bone marrow transplant therapy.",
    synonyms: ["Bone Marrow Transplant"],
    category: "Treatment"
  },
  {
    term: "Systemic Anti-Cancer Therapy (SACT)",
    definition: "Drug-based cancer treatments introduced as systemic therapy rather than localized treatment. SACT includes chemotherapy, hormone drugs, immunotherapy, targeted therapy, and antibody-drug conjugates.",
    category: "Treatment"
  },
  {
    term: "Teratogenicity",
    definition: "Ability of a chemical, substance or agent to cause congenital disabilities or developmental abnormalities in an embryo or a developing fetus",
    category: "Toxicology"
  },
  {
    term: "USP Chapter 800",
    definition: "Standards for safe handling of hazardous drugs to minimize the risk of exposure to healthcare personnel, patients and the environment.",
    category: "Standards"
  }
];