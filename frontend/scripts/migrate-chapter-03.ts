// FILE: scripts/migrate-chapter-03.ts
// Complete Chapter 03 migration - Hierarchical Controls
// ================================================================

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY || 'AIzaSyCJpRuJQbhugO6ivp4gIgM2GeQFewVwOvI',
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || 'chemosafe-samanthisenarath38.firebaseapp.com',
  projectId: process.env.VITE_FIREBASE_PROJECT_ID || 'chemosafe-samanthisenarath38',
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || 'chemosafe-samanthisenarath38.firebasestorage.app',
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '133808438232',
  appId: process.env.VITE_FIREBASE_APP_ID || '1:133808438232:web:ddacc8778bd2babc9f10ad'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ADMIN_UID = 'Oy4i5QwrT0RiJmt0Utae2MNXzCF2';
const ADMIN_EMAIL = 'samanthisenarath38@gmail.com';

// COMPLETE CHAPTER 03 DATA
const chapter03Data = {
  id: 'chapter-03',
  title: 'Chapter 03: Hierarchical Controls',
  icon: '🛡️',
  description: 'Engineering controls, administrative measures, and PPE for safe handling',
  sections: {
    intro: {
      id: 'intro',
      title: 'Introduction',
      order: 0,
      data: {
        chapterNumber: '03',
        description: 'The third chapter describes hierarchical controls for handling chemotherapy/ HDs. Learning outcomes and practical competencies related to respective content are outlined in Table.',
        note: 'Oncology nurses are expected to reach learning outcomes and practical competencies at the end of the study of the learning content of Chapter 03.',
        tableTitle: 'Learning Outcomes & Practice Competencies & Learning Content',
        tableRows: {
          headers: {
            col0: "Learning Outcomes",
            col1: "Practice Competencies",
            col2: "Learning Content"
          },
          rows: {
            row0: {
              col0: "Identify professional organizations and guidelines for handling chemotherapy\n\nOutline standards and Critically evaluate hierarchical controls for handling chemotherapy",
              col1: "Increase awareness of professional organizations and standards in handling chemotherapy.\n\nRecognize hierarchical controls\n\nComply with safety regulations, legislation and guidelines in handling chemotherapy.\n\nProvide information and support, and act as a role model for others (peers and other HCWs) in safe handling of HDs",
              col2: "Professional organizations and standard guidelines for handling chemotherapy\n\nStandards/ Hierarchical controls in handling HDs\n<ul><li>Eliminate/Substitute HDs</li>\n<li>Engineering controls</li>\n<li>Administrative controls</li>\n<li>PPE</li></ul>\nWork practices on the use of PPE appropriately"
            }
          }
        }
      }
    },

    guidelines: {
      id: 'guidelines',
      title: 'Standard Guidelines',
      order: 1,
      data: {
        mainIntro: 'Although the anti-cancer agents/chemotherapy-related risk is balanced for patients, occupational exposure harms healthcare workers. Therefore, government and regulatory agencies issue safety precautions[10,25] to protect healthcare workers from unnecessary exposure.',
        
        importantNote: 'Multiple international organizations have developed comprehensive guidelines for safe handling of hazardous drugs. Healthcare facilities should adopt and implement these evidence-based recommendations.',
        
        whyMatters: 'These standardized guidelines ensure consistent, evidence-based practices across healthcare settings, protecting workers from hazardous drug exposure while maintaining patient care quality.',
        
        tableIntro: 'Table 10: Standard guidelines in handling chemotherapy',
        
        guidelineApplication: 'Each guideline describes recommendations and mandates of handling chemotherapy and other hazardous drugs at each step of handling. Practices related to oncology nursing can be adopted from those guidelines. As an example, standards related to oncology nursing practice, which are derived from the USP general chapter 800, are outlined in table[24,25].',
        
        uspIntro: 'USP General Chapter 800 provides specific standards that directly impact oncology nursing practice. The following sections outline key requirements nurses must follow:',
        
        uspTableIntro: 'Table 11: USP <800> standards in oncology nursing practice',
        
        complianceNote: 'All oncology nurses handling hazardous drugs must be familiar with USP 800 requirements and ensure their practice aligns with these standards. Regular training and competency assessments are mandatory.',
        
        // Guidelines Organizations Table
        guidelinesTable: {
          _order: 1,
          headers: {
            col0: "Organization/Regulatory Agency",
            col1: "Safe Handling Guidelines"
          },
          rows: {
            row0: {
              col0: "National Institute for Occupational Safety and Health (NIOSH)",
              col1: "Alert Preventing Occupational Exposures to Antineoplastic and Other Hazardous Drugs in Health Care Settings (2004)[10]\n\nNIOSH List of Antineoplastic and Other Hazardous Drugs in Healthcare Settings (2016)[10]"
            },
            row1: {
              col0: "Occupational Safety and Health Administration (OSHA)",
              col1: "Controlling Occupational Exposure to Hazardous Drugs (2016)[10]"
            },
            row2: {
              col0: "American Society of Health-System Pharmacists (ASHP)",
              col1: "Guidelines on Handling Hazardous Drugs, American Journal of Hospital Pharmacy (2006)[10]"
            },
            row3: {
              col0: "United States Pharmacopeia (USP)",
              col1: "Hazardous Drugs-Handling in Healthcare Settings (2016)\n\nUSP chapter 800 (2019)[10]"
            },
            row4: {
              col0: "Oncology Nurses Society (ONS)",
              col1: "Safe Handling of Hazardous Drugs, 3rd Edition (2017)[10]"
            },
            row5: {
              col0: "International Society of Oncology Pharmacy Practitioners (ISOPP)",
              col1: "ISOPP Standards for the Safe Handling of Cytotoxic (2007)[10]"
            },
            row6: {
              col0: "Oncology Nursing Society (ONS)/American Society of Clinical Oncology (ASCO) /Hematology Oncology Pharmacy Association (HOPA)",
              col1: "The joint position statement on Ensuring Healthcare Worker Safety When Handling Hazardous Drugs (2016)[1031]"
            }
          }
        },
        
        // USP 800 Standards Table
        usp800Table: {
          _order: 2,
          headers: {
            col0: "Section/Standard",
            col1: "Overview of Requirements"
          },
          rows: {
            row0: {
              col0: "8 - Hazard Communication",
              col1: "Written plan:\n<ul><li>Labeling of HD containers</li><li>Safety Data Sheets (SDS) for all HDs</li><li>Information before initial handling</li><li>Personnel of reproductive capability acknowledge the risks of HDs</li></ul>"
            },
            row1: {
              col0: "9 - Personal Training",
              col1: "Minimum training (initial and every 12 months):\n<ul><li>List of HDs and their risks</li><li>Review of HD handling policies</li><li>How to use PPE</li><li>How to use protective equipment</li><li>How to respond to HD exposure</li><li>How to manage HD spills</li><li>How to dispose of HDs & contaminated items</li></ul>"
            },
            row2: {
              col0: "14 - Safe Administration",
              col1: "Protective devices and techniques:\n<ul><li>Wear PPE</li><li>Use closed system transfer devices for antineoplastic HDs</li><li>Discard HDs & contaminated equipment in approved containers</li><li>Avoid manipulating HDs outside of the containment device</li></ul>"
            },
            row3: {
              col0: "15 - Decontamination",
              col1: "Written procedures for decontamination of equipment and surfaces:\n<ul><li>Training for personnel who perform decontamination</li><li>Specify agents for decontamination</li><li>Specify the frequency of decontamination</li><li>Specify PPE for decontamination</li></ul>"
            },
            row4: {
              col0: "16 - Spill Control",
              col1: "Written procedures for HD spill management:\n<ul><li>Training for personnel who clean up spills</li><li>Qualified personnel available</li><li>Spill kits available</li><li>Specify PPE for spill cleanup</li><li>Specify documentation requirements</li></ul>"
            }
          }
        }
      }
    },

    hierarchy: {
      id: 'hierarchy',
      title: 'Hierarchical Controls Overview',
      order: 2,
      data: {
        mainIntro: 'Hierarchical controls included five levels of precautions in handling chemotherapy and other hazardous drugs, including (1) elimination, (2) substitution, (3) engineering controls, (4) administrative controls, and (5) PPE[19,25,32].',
        
        criticalPrinciple: 'Applying all levels of precautions, from the most effective to the least adequate, in hierarchical control is vital. However, when it is not possible to apply an upper level of protection, the immediate next level of precautions should be used to ensure occupational and environmental health safety (Table 12).',
        
        level1And2Context: 'Levels 1 and 2 precautions included elimination (removing HDs) and substitution (considering a less toxic drug). Both levels of measures are rarely possible in the clinical setting since the treatment / anti-cancer drug depends on the cancer diagnosis[19,32]. Therefore, next-level measures (engineering controls, administrative controls, and PPE) need to be appropriately applied in the healthcare settings[19].',
        
        eliminationSubstitutionNote: 'Elimination (removing HDs) and substitution (considering a less toxic drug) are rarely possible in clinical settings since treatment / anti-cancer drug depends on cancer diagnosis. Therefore, next-level measures (engineering controls, administrative controls, and PPE) must be applied.',
        
        applicableControls: 'Engineering controls, administrative controls, and PPE are the primary protective measures used in healthcare settings to minimize exposure to hazardous drugs.',
        
        tableIntro: 'Table 12: Hierarchical controls for handling chemotherapy',
        
        // Hierarchical Controls Table
        controlsTable: {
          _order: 1,
          headers: {
            col0: "Level and Type of Control",
            col1: "Main Mechanism",
            col2: "Examples"
          },
          rows: {
            row0: {
              col0: "Level 1 - Elimination",
              col1: "Elimination of HDs from the workplace",
              col2: "Remove HDs from the workplace"
            },
            row1: {
              col0: "Level 2 - Substitution",
              col1: "Substitution of HD with a less HD",
              col2: "Use a low-risk HD or low-risk dosage form to reduce exposure-related risk (e.g., tablets instead of IV infusions if it is clinically appropriate)"
            },
            row2: {
              col0: "Level 3 - Engineering Controls",
              col1: "Engineering controls protect workers by physically changing the work environment to minimize exposure to HDs",
              col2: "<ul><li>Containment Primary Engineering Controls (C-PEC) (e.g., BSC/isolators)</li><li>Containment Secondary Engineering Controls (C-SEC) (e.g., designed room and parameters for compounding drugs)</li><li>Supplementary engineering controls (e.g., Closed-System Drug-Transfer Devices [CSTDs])</li></ul>"
            },
            row3: {
              col0: "Level 4 - Administrative Controls",
              col1: "Reduce exposure to the work environment by maintaining appropriate work practices",
              col2: "<ul><li>Reduce the frequency of handling HDs</li><li>Limit access in handling HDs</li><li>Restrict participants in the HD handling areas</li><li>Practice proper handwashing</li><li>Develop and implement safe work procedures for each step of handling</li><li>Implement an effective cleaning routine</li><li>Implement protective reassignment</li><li>Design and implement training opportunities for HCWs based on their roles in handling</li><li>Medical surveillance</li></ul>"
            },
            row4: {
              col0: "Level 5 - PPE",
              col1: "Limit exposure to HDs",
              col2: "PPE included:\n<ul><li>Gloves and gowns designed to protect from HDs</li><li>Respirators</li><li>Eye and face protection</li><li>Appropriate footwear</li></ul>"
            }
          }
        }
      }
    },

    engineering: {
      id: 'engineering',
      title: 'Engineering Controls',
      order: 3,
      data: {
        levelIntro: 'Engineering controls protect workers by physically changing the work environment. USP chapter 800 describes three types of engineering controls[24] that are essential for safe handling of hazardous drugs.',
        
        cpecWhen: 'Use of C-PEC is recommended when handling antineoplastic drugs categorized as group 1 or 2A carcinogens (according to IARC classification), and when manufacturer\'s instructions recommend ventilated engineering controls.',
        
        // C-PEC Section
        cpecIntro: 'A ventilated device designed and operated to prepare HDs. It provides a containment ventilated enclosure (CVE) to reduce workers\' and environmental exposures to HDs. Examples include Biological Safety Cabinets (BSC), also known as Cytotoxic Drug Safety Cabinets (CDSC), and Compounding Aseptic Containment Isolator (CACI)[11,19,24,32].',
        
        cpecUseRecommendation: 'Use of C-PEC is recommended when handling antineoplastic drugs categorized as group 1 or 2A carcinogens (according to IARC classification), and recommended to use ventilated engineering controls (according to manufacturer\'s instructions)[32]. All processes related to drug preparation, mixing, manipulation, counting, crushing, compounding powders, or pouring liquid HDs need to be conducted inside a BSC or isolator to prevent exposure to HDs[12].',
        
        bscIntro: 'BSC/ CDSCs provide controlled airflow, protection shields, and HEPA filters. Regular monitoring of device readings, maintenance according to the manufacturer\'s recommendations and following appropriate techniques are vital for achieving better user outcomes[32].',
        
        bscClassification: 'BSCs are designed to meet various needs and intended uses. BSCs are classified into three classes (I to III). Class II Type B2 BSCs are recommended for handling HDs as they provide 100% discharge of contaminated air to the outdoors and meet the regular requirements for handling HDs[32].',
        
        bscAlternative: 'Some literature also recommends using the Class III BSC or isolators, if the drug is stable enough to prepare[9].',
        
        bscFeatures: [
          'Controlled airflow with protection shields',
          'HEPA filters (remove 99.97% of 0.3-micron particles)',
          'Regular monitoring and maintenance required',
          'Class II Type B2 recommended for HDs'
        ],
        
        caciDefinition: 'CACI is a specific type of compounding aseptic isolator that is designed for the compounding of sterile HDs. It provides hatches, glove ports, HEPA filters, and a physical barrier between the product and the operator[11,19,32].',
        
        caciFeatures: [
          'Physical barrier between product and operator',
          'Glove ports for manipulation',
          'HEPA filtration system',
          'Suitable for sterile compounding'
        ],
        
        cpecEssentialPractice: 'All processes related to drug preparation, mixing, manipulation, counting, crushing, compounding powders, or pouring liquid HDs must be conducted inside a BSC or isolator to prevent exposure to HDs.',
        
        // C-SEC Section
        csecIntro: 'The room with fixed walls in which the C-PEC is placed is called C-SEC. It incorporates specific design and operational parameters to minimize potential risk within the compounding room[24].',
        
        csecRequirements: [
          'Minimum 20 Air Changes Per Hour (ACPH)',
          'Externally vented',
          'HEPA exhaust filtration',
          'Temperature 18-22°C',
          'Humidity 40-60%',
          'Access restricted to authorized personnel only'
        ],
        
        // Supplemental Controls
        supplementalIntro: 'Traditional needles and syringes are known to cause contamination (healthcare worker, surface, and environment)[9]. Supplemental engineering controls minimize potential exposure to HDs by providing an extra level of protection against contamination when transferring drugs between containers during preparation and administration.',
        
        cstdTypes: 'These are included in CSTDs[11,12,19,24,32], Lure lock fittings (fittings that prevent accidental disconnection), needleless systems or safety-engineered needles (which lower the risk of workers receiving percutaneous exposure), and filtered venting devices (such as chemotherapy-dispensing pins and chemotherapy vents)[31].',
        
        cstdBenefits: [
          'Prevent leaks and generation of aerosols',
          'Reduce environmental contamination',
          'Lower risk of percutaneous exposure',
          'Provide additional protection during drug transfer'
        ],
        
        cstdTypesList: [
          'Closed-System Drug-Transfer Devices (CSTDs)',
          'Luer-lock fittings (prevent accidental disconnection)',
          'Needleless systems',
          'Safety-engineered needles',
          'Filtered venting devices'
        ],
        
        criticalWarning: 'Although supplemental engineering controls are protective, they should never substitute for C-PEC (for BSCs or isolators). Drug preparation must always be conducted under C-PEC[12,24,32].'
      }
    },

    administrative: {
      id: 'administrative',
      title: 'Administrative Controls',
      order: 4,
      data: {
        levelIntro: 'Level 04 administrative controls include safe work practices, and their content is outlined below[1119329]. Further, Chapter 04 describes the administrative controls that apply to nursing practice.',
        
        chapterReference: 'Chapter 04 provides detailed descriptions of administrative controls specifically applicable to nursing practice when handling hazardous drugs.',
        
        measures: [
          'Safe work procedures/ SOPs for all tasks and activities involving HDs[32].',
          'Procedures for the use of BSC/ isolators',
          'Requirements for providing, selecting, using, maintaining, and disposing of PPE',
          'Appropriate personal hygiene-related activities (e.g., proper handwashing), prohibiting risk behaviours (e.g., eating, drinking, smoking, applying personal care products, and storing food in HD handling areas or during handling HDs)',
          'Reporting and response procedures for accidental exposure, a spill, or the uncontrolled release of HDs',
          'Procedures for identification, removal, cleanup, and disposal of HD waste, including any materials that contact/ contaminated with HD, or anything contaminated by excreta from a patient treated with HDs',
          'Reduce the number of times HDs are handled',
          'Limit access and restrict participants to the areas where HDs are present',
          'Implement protective reassignment',
          'Training personnel in handling HDs',
          'Medical Surveillance'
        ]
      }
    },

    ppe: {
      id: 'ppe',
      title: 'Personal Protective Equipment',
      order: 5,
      data: {
        // Main PPE Overview
        mainIntro: 'PPE includes gloves, masks, gowns, goggles or face shields, and other equipment to create a temporary barrier between the contamination and the operator[11,19]. PPE must be tested to handle HDs (e.g., ASTM standards for gloves and gowns[32], NIOSH-approved respirators[9]). PPE must not be worn outside of the work environment. Contaminated disposable PPE should be considered cytotoxic waste, and non-disposable PPE must be cleaned and decontaminated after use[32].',
        
        criticalRequirements: [
          'PPE must be HD-tested (ASTM standards for gloves/gowns, NIOSH-approved respirators)',
          'Never wear PPE outside work environment',
          'Dispose contaminated PPE as cytotoxic waste',
          'Clean and decontaminate non-disposable PPE after use'
        ],
        
        // GLOVES SECTION - Most detailed
        glovesIntro: 'Gloves prevent dermal contamination in handling HDs. However, not all types of gloves protect against exposure. Therefore, guidelines report that gloves must be proven resistant to chemotherapy and labelled "chemotherapy gloves" and need to fulfil the following characteristics[119]:',
        
        glovesCharacteristics: [
          '(a) Sterile, non-powdered',
          '(b) Latex (consider latex-sensitive workers), nitrile, or neoprene gloves may be used if they have been validated for cytotoxic reconstitution'
        ],
        
        glovesWorkPractices: [
          'Use a double pair of gloves when compounding, administering, and disposing of HDs[9,11]',
          'Wear the inner glove under the gown cuff and the outer glove over the cuff. Place gloves with long cuffs over the cuff of the gown to protect the wrist and forearm[9,11]',
          'Gloves should be changed at least every 30 minutes or whenever damage or obvious contamination occurs[9,11]',
          'Use powder-free gloves. Glove powder can contaminate the work area and can absorb and retain HDs. Skin contact with contaminated glove powder may increase the risk of drug absorption[9,11]',
          'When compounding sterile preparations, sanitize gloves with sterile 70% alcohol spray or gel and allow them to dry before handling chemotherapy (HDs). Avoid sprays during compounding to minimize the generation of airborne particles. . Contain and discard any contaminated towels into the cytotoxic waste bin[11].',
          'Proper work practices should continue for donning and doffing gloves to prevent contamination'
        ],
        
        donningStep1: 'Carefully open the glove package and remove one glove by touching only the inner cuff area. Insert one hand into the glove without touching the external surface and repeat for the second glove using only the cuff area.',
        
        donningStep2: 'Open the second pair of gloves and hold the outer glove at the cuff (touch only the cuff area). Insert the other gloved hand into it and repeat the same step for the other hand. Adjust the outer gloves so they fit snugly over the inner gloves.',
        
        doffingSteps: [
          'When removing double gloves, remove the outer gloves first',
          'Touch dirty surfaces to other dirty surfaces; never touch the skin with contaminated gloves',
          'Remove one outer glove by pinching the wrist of the glove with the gloved fingers of the other hand',
          'Roll the glove down the hand to the fingers so that the inside of the glove is outside',
          'Make a ball of that glove in the gloved hand',
          'Using the hand wearing the inner glove, place two fingers under the wrist of the second outer glove (the inner glove is less contaminated and should not touch the surface of the outer glove)',
          'Roll that glove off the hand and over the balled glove',
          'The outer pair of gloves is now inside out, and the first glove is inside the second',
          'Use the inner gloves to remove and contain the gown, then remove the inner gloves by touching glove to glove and skin to skin so that contaminated surfaces do not touch uncontaminated surfaces[11]',
          'Contain contaminated gloves in disposable bags and dispose of them appropriately as waste. Wash hands thoroughly with soap and water both before donning and after removing gloves[11]'
        ],
        
        videoResource: 'For a visual demonstration of double glove technique visit: https://www.youtube.com/watch?v=UIHmtr-_ik4',
        
        // RESPIRATORS SECTION
        respiratorsWhenEssential: 'Activities such as manipulation, administration, handling spills, and decontamination are at risk of generating drug aerosols/inhalable particles[11,12,24]. Surface contamination also generates airborne particles after drying them[11]. Some drugs are vaporized at room temperature (e.g., Carmustine, Cisplatin, Cyclophosphamide, Etoposide, 5-fluorouracil, Ifosfamide, Nitrogen mustard, Thiotepa)[10]. Therefore, appropriate respirators should be used in all risk activities.',
        
        respiratorRequirements: 'A type P2 or P3 mask for solids or liquids should be used when changing a pre-filter, in the event of any accidental contamination, and for oral preparations[11].',
        
        respiratorUsp: 'USP 800 specifies that an appropriate full-facepiece, Chemical Cartridge-Type Respirator (CCAPR), or Powered Air-Purifying Respirator (PAPR) should be worn when there is a risk of respiratory exposure to HDs.',
        
        respiratorRecommended: [
          '(a) Attending to handling HD spills larger than what can be contained with a spill kit',
          '(b) Deactivating, decontaminating, and cleaning underneath the work surface of a CDSC',
          '(c) When there is a known or suspected airborne exposure to powders or vapours[11]'
        ],
        
        // GOWN SECTION
        gownIntro: 'Gowns made of appropriate material protect the worker from spills and splashes of HDs, drug waste, and excreta. Cloth laboratory coats, surgical scrubs, or other absorbent materials permit the permeation of HDs and drug contaminants, which can retain and re-expose[11].',
        
        gownCharacteristics: [
          '(a) Shown to resist permeability by HDs',
          '(b) Made of polyethene-coated polypropylene or other laminate materials, as these offer better protection from HDs',
          '(c) Closure in the back (no open front)',
          '(d) Closed cuffs that are elastic or knit',
          '(e) No seams or closures that could allow HDs to pass through'
        ],
        
        gownWorkPractices: [
          'Wear gowns when there is a possibility of splash or spill (e.g., during compounding, administration) and in cleaning drug spills[11]',
          'Gowns worn in HD handling areas must not be worn in other areas to prevent cross-contamination and exposure[11]',
          'According to USP chapter 800, gowns must be changed according to the manufacturer\'s guide (data on permeation). If there is no permeation information, gowns must be changed every 2 to 3 hours or immediately after a spill or splash[11]',
          'Dispose of gowns after each use. Gowns become contaminated during use. Reusing gowns increases the likelihood of exposure to HDs by transferring contamination from the gown surface to other surfaces, including skin[11]',
          'The gown should not be shared, and the gown needs to be safely removed to prevent personal contamination[9]'
        ],
        
        gownPracticesIntro: 'In addition to using appropriate gowns when handling chemotherapy, proper work practices, as outlined below, are required to minimize occupational exposure to chemotherapy[11]:',
        
        // EYE AND FACE PROTECTION
        eyeFaceIntro: 'Proper eye and face protection is needed whenever HDs may splash and absorb through the eyes and mucous membranes. USP general chapter 800 states that eyeglasses alone or safety glasses with side shields do not provide adequate eye protection against splashes[11].',
        
        eyeFaceProtection: 'Face shields in combination with goggles offer a full range of protection against splashes to the face and eyes[11].',
        
        eyeFacePracticesIntro: 'The appropriate use of eye and face protection included the following practices[11].',
        
        eyeFacePractices: [
          'Use eye and face protection when compounding a drug outside a C-PEC (BSC/isolator) (e.g., in the operating room), or when working at or above eye level, cleaning a PEC, or cleaning a spill',
          'Use face shields in combination with goggles to provide a full range of protection against splashes to the face and eyes',
          'Do not use eyeglasses or safety glasses with side shields, as they do not provide adequate eye protection',
          'Contaminated eye/face protections need to be discarded into the cytotoxic waste bin[9]'
        ],
        
        // HAIR, SLEEVE, SHOE COVERS
        hairSleeveShoeIntro: 'According to USP 800, hair (including beards and moustaches), sleeves, and shoe covers protect from contact with HD residuals[9,11].',
        
        hairCoverIntro: 'Hair/head covers should cover beards and moustaches, and their characteristics include[9]:',
        
        hairCoverCharacteristics: [
          'Hoods fit snugly around the face',
          'Caps fit snugly around the head',
          'Removable and separate facial covers',
          'Hoods/caps should not interfere with respiratory protection'
        ],
        
        sleeveIntro: 'Disposable sleeve covers may be used to protect areas of the arm that may come into contact with HDs[9].',
        
        sleeveMaterials: 'Polyethene-coated polypropylene or other laminate materials offer better protection than those made of uncoated materials[11].',
        
        shoeRequirements: [
          'Impervious materials (e.g., Bonded polyethene fiber) are suitable',
          'Paper disposable shoe covers do not provide adequate protection[9]',
          'The soles of shoes should be made of skid-resistant plastic or other suitable non-shedding materials and should not slip down',
          'Overshoes should cover the cuffs of trousers[9]'
        ],
        
        completeProtectionNote: 'Hair, sleeve, and shoe covers provide additional protection beyond primary PPE. All protective equipment must be removed carefully to prevent contamination, and disposable items must be discarded into cytotoxic waste bins.'
      }
    },

    summary: {
      id: 'summary',
      title: 'Summary',
      order: 6,
      data: {
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
        variant: 'gradient',
        hasImage: true,
        imagePath: 'summary03.png',
        imageLayout: 'stack'
      }
    }
  }
};

async function migrateChapter03() {
  console.log('🚀 Migrating Chapter 03...\n');

  const processedSections: Record<string, any> = {};
  
  for (const [sectionId, sectionData] of Object.entries(chapter03Data.sections)) {
    processedSections[sectionId] = {
      ...sectionData,
      lastModified: serverTimestamp(),
      modifiedBy: ADMIN_EMAIL
    };
    console.log(`  ✓ Section: ${sectionData.title}`);
  }

  await setDoc(doc(db, 'content', 'chapter-03'), {
    ...chapter03Data,
    sections: processedSections,
    published: true,
    lastModified: serverTimestamp()
  });
  
  console.log('✅ Chapter 03 migrated successfully!\n');
}

async function createAdmin() {
  await setDoc(doc(db, 'admins', ADMIN_UID), {
    uid: ADMIN_UID,
    email: ADMIN_EMAIL,
    role: 'admin',
    createdAt: serverTimestamp(),
    lastLogin: serverTimestamp()
  });
  console.log('✅ Admin created\n');
}

async function run() {
  try {
    console.log('========================================');
    console.log('   CHAPTER 03 MIGRATION');
    console.log('   Hierarchical Controls');
    console.log('========================================\n');
    
    await createAdmin();
    await migrateChapter03();
    
    console.log('\n✅ Migration complete!');
    console.log('\nWhat was migrated:');
    console.log('1. Introduction (1 table + text)');
    console.log('2. Guidelines (2 tables: Organizations + USP 800)');
    console.log('3. Hierarchy Overview (1 table with 5 levels)');
    console.log('4. Engineering Controls (detailed text + lists)');
    console.log('5. Administrative Controls (11 measures)');
    console.log('6. PPE (extensive lists for all equipment)');
    console.log('7. Summary (2 paragraphs + 16 key points)');
    console.log('\nAll content is now editable through admin dashboard!');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  }
}

run();
