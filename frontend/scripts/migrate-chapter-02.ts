// FILE: scripts/migrate-chapter-02.ts
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

// COMPLETE CHAPTER 02 DATA
const chapter02Data = {
  id: 'chapter-02',
  title: 'Chapter 02: Occupational Exposure',
  icon: '⚠️',
  description: 'Evidence of exposure, routes, and risk activities among healthcare workers',
  sections: {
    intro: {
      id: 'intro',
      title: 'Introduction',
      order: 0,
      data: {
        chapterNumber: '02',
        description: 'The second chapter of this content describes evidence of occupational exposure to chemotherapy, exposure routes, risk activities, and occupational exposure-related adverse effects present among HCWs.',
        note: 'Oncology nurses are expected to reach learning outcomes and practical competencies at the end of the study of the learning content of Chapter 02.',
        tableTitle: 'Learning Outcomes & Practice Competencies & Learning Content',
        tableRows: {
          headers: {
            col0: "Learning Outcomes",
            col1: "Practice Competencies",
            col2: "Learning Content"
          },
          rows: {
            row0: {
              col0: "Increase awareness of adverse effects of occupational exposure to chemotherapy\n\nIdentify the risk activities related to occupational exposure\n\nDescribe the adverse effects of chemotherapy present among HCWs\n\nDiscuss the factors that contribute to occupational exposure to chemotherapy",
              col1: "Increase awareness of occupational risk activities and possible adverse effects\n\nSelf-evaluation of the adverse effects of chemotherapy\n\nEnhance health-seeking behavior and medical surveillance on handling chemotherapy and other HDs\n\nIncrease awareness of the factors that contribute to occupational exposure and increase adherence to safety precautions.",
              col2: "Evidence of occupational exposure and adverse effects among HCWs\n\nAcute adverse effects - headache, nausea, vomiting, hypersensitivity, diarrhea, mucositis\n\nChronic adverse effects – Bone marrow suppression, organ toxicities, reproductive adverse effects\n\nChemotherapy exposure routes and risk activities\n\nFactors contributing to occupational exposure"
            }
          }
        }
      }
    },

    evidence: {
      id: 'evidence',
      title: 'Evidence of Occupational Exposure and AEs among HCWs',
      order: 1,
      data: {
        // Text content - all editable
        historicalIntro: 'First concerns about the occupational exposure to anti-cancer agents were raised in the 1970s[12]. First detected increased urinary mutagenic substances among nurses who prepared and administered antineoplastic drugs compared to unexposed HCWs[11].',
        historicalConclusion: 'Therefore, safety precautions and guidelines are established to minimize occupational exposure and related adverse effects.',
        keyFinding: 'Each person and every step of handling chemotherapy (manufacturing, transportation, preparation, distribution, administration of drugs to patients, and waste disposal) is at risk of exposure[11]. Nurses and pharmacists are at greater risk in their roles in handling[12].',
        oelIntro: 'Some pharmaceutical manufacturers have developed occupational exposure limits (OELs) to apply in automated production lines in the manufacturing process.',
        oelImportant: 'When considering the toxic properties of chemotherapy, OELs are not accepted for hospital settings, and zero contamination should be the target.',
        
        detectionIntro: 'The detection of drugs and/or their metabolites in work surfaces and/or biological samples is widely used to identify occupational exposure and related risks.',
        detectionWhy: 'However, sampling data on exposure or analytical methodologies could not precisely determine the health risks or adverse effects among HCWs. However, the prevalence of adverse effects is statistically significant in relation to:',
        detectionSignificance1: 'Workplace exposure (primarily among nurses)[11]',
        detectionSignificance2: 'The presence of drugs or metabolites in biological samples[22,23]',
        detectionConclusion: 'Therefore, detecting workplace/biological exposure helps to implement related policies/work practices to ensure occupational health safety.',
        
        universalFinding: 'All studies conducted to detect workplace contamination reported detectable concentrations of at least one or more HDs in various healthcare settings[22]. Contamination of the outer surfaces of cytotoxic drug vials is also reported[11,12,24]. Indicating occupational exposure, recent literature reports urine mutagenicity, chromosomal aberrations (CAs), sister chromatid exchanges (SCEs), and other endpoints in pharmacists and nurses who handle chemotherapy[11,25].',
        
        analyticalIntro: 'Detection of specific chemotherapy drugs is commonly performed using advanced analytical methods. Detection of cyclophosphamide, ifosfamide, fluorouracil, methotrexate, paclitaxel, doxorubicin, and platinum-containing drugs such as Cisplatin and carboplatin is more common with the following analytical methods:',
        
        adverseIntro: 'Adverse effects and black box warnings of anti-cancer drugs are well-documented[2,8,21]. Occupational exposure to chemotherapy also brings similar adverse effects among HCWs.',
        
        // Lists - editable
        workplaceContamination: [
          'Detection on work surfaces',
          'BSCs and countertops',
          'Equipment and floors',
          'Outer surfaces of drug vials'
        ],
        
        biologicalMonitoring: [
          'Urine mutagenicity',
          'Chromosomal aberrations (CAs)',
          'Sister chromatid exchanges (SCEs)',
          'Drug metabolites in blood/urine'
        ],
        
        commonlyDetectedDrugs: [
          'Cyclophosphamide',
          'Ifosfamide',
          'Fluorouracil',
          'Methotrexate',
          'Paclitaxel',
          'Doxorubicin',
          'Cisplatin',
          'Carboplatin'
        ],
        
        analyticalMethods: [
          'HPLC-UV: High-Performance Liquid Chromatography with Ultraviolet Detection',
          'GC-MS / GC-MS-MS: Gas Chromatography coupled with Mass Spectrometry or Tandem Mass Spectrometry',
          'LC-MS-MS: High-Performance Liquid Chromatography-Tandem Mass Spectroscopy[22]'
        ],
        
        acuteEffects: [
          'Headaches',
          'Nausea and vomiting',
          'Hair loss',
          'Skin irritation',
          'Ocular irritation',
          'Dizziness'
        ],
        
        reproductiveEffects: [
          'Miscarriage (especially first trimester)',
          'Infertility',
          'Preterm births',
          'Learning disabilities in offspring',
          'Spontaneous abortions',
          'Stillbirths',
          'Congenital abnormalities'
        ],
        
        commonAEsDetail: 'The common AEs include headaches, nausea, vomiting, hair loss, skin/ocular irritation[11], teratogenic and reproductive AEs (miscarriage [especially when handling chemotherapy during the first trimester] [11], infertility, preterm births, and learning disabilities in offspring) [1025].',
        criticalNote: 'A wide range of empirical studies reported occupational exposure-related adverse effects. The evidence is particularly strong for reproductive effects when handling chemotherapy during pregnancy, especially in the first trimester.',
        
        // Table - editable with _order
        researchTable: {
          _order: 1,
          headers: {
            col0: "Research Methods",
            col1: "Main Findings on Occupational Exposure and Adverse Effects"
          },
          rows: {
            row0: {
              col0: "Meta-analysis",
              col1: "Antineoplastic agents increase nurses' risk of spontaneous abortions, stillbirths, and congenital abnormalities."
            },
            row1: {
              col0: "Review",
              col1: "Several studies reported remarkable portions of ADs or their metabolites in biological samples of HCWs. Nurses who directly handle ADs identified the greater risk category of contamination."
            },
            row2: {
              col0: "Mixed Study among HCWs in southern Brazil",
              col1: "Drug exposure methods are dermal contact, aerosols/inhalation, and ingestion.\n\nLack of knowledge and weaknesses in handling drugs are reported."
            },
            row3: {
              col0: "Case-Control Study among nurses in Cairo University, Egypt",
              col1: "<ul><li>Prevalence of menstrual disorders and abortions among exposed HCWs was significantly associated with drug handling (compared to controls).</li><li>Adverse effects: Frequent infections (37.5%), hair loss (68.8%) (only among exposure groups).</li><li>Other adverse effects: Allergic symptoms (59.4%)</li><li>Exposure to Cisplatin was statistically significant with kidney and liver function tests and DNA damage.</li></ul>"
            },
            row4: {
              col0: "Cross-sectional, comparative study among nurses, Turkey",
              col1: "Prevalence of fatigue - 67.1%, weakness - 50.7%, hair loss - 41.1%\n\nThe prevalence of hair loss and dizziness was significant with the administration of antineoplastic drugs."
            },
            row5: {
              col0: "Descriptive cross-sectional study among nurses, nursing assistants, Latvia",
              col1: "Prevalence of at least one adverse effect - 56.86%\n\nCommon acute adverse effect: headache (37.25%)\n\nEye irritation - 25.49%, skin irritation - 19.60%\n\nWorking years are significantly and positively associated with headache, dizziness, irritation of the mouth and throat, and irritation of the eyes"
            }
          }
        },
        
        // Statistics - editable
        stats: {
          hairLoss: { number: '68.8%', label: 'Hair Loss (Egypt)', color: 'bg-purple-100' },
          fatigue: { number: '67.1%', label: 'Fatigue (Turkey)', color: 'bg-blue-100' },
          allergic: { number: '59.4%', label: 'Allergic Symptoms (Egypt)', color: 'bg-pink-100' }
        },
        
        researchImplications: 'The consistent findings across multiple research methods and geographic locations strongly support the need for rigorous safety precautions when handling chemotherapy. The correlation between years of exposure and adverse effects highlights the cumulative nature of occupational risk.'
      }
    },

    routes: {
      id: 'routes',
      title: 'Chemotherapy Exposure Routes and Risk Activities',
      order: 2,
      data: {
        // Text content
        mainIntro: 'Chemotherapy exposure routes typically include inhalation, dermal, ingestion, and needle prick injuries[9,11,12,27] (Figure 03). Inhalation via droplets, particulates, vapors, and dermal contamination are more common[12,30].',
        
        surfaceContamination: 'Most work surfaces are contaminated with HDs[11]. Biological Safety Cabinets (BSCs), countertops, equipment, floors, and other surfaces were identified as highly contaminated areas[22]. Inappropriate handling predominantly causes surface and dermal contamination.',
        
        vialContamination: 'Contamination of the outside of the vials/drug containers, also reported during the filling process, can cause damage or leaking during the transportation of drugs[11].',
        
        aerosolRisk: 'Manipulation, administration, and spill management are the primary risk activities in the generation of aerosols or inhalable particles[11,12,24]. Drug particles on contaminated surfaces may also become airborne particles after drying. Thus, surface contamination is a risk of inhalation[11].',
        
        ingestionRisk: 'Inadvertent ingestion is possible with contamination of food and beverages with cytotoxic drugs. Therefore, preparing, storing, or consuming food and drink at work should be avoided.',
        
        needleStickRisk: 'Also, needlestick injuries are another potential route of exposure, and sufficient care must be taken in drug preparation and administration.',
        
        activitiesIntro: 'Possible opportunities for exposure based on activity are outlined below (Table 8) [9,11,12,24]:',
        
        // Routes details - editable lists
        inhalationRoute: [
          'Droplets',
          'Particulates',
          'Vapors',
          'Aerosols from manipulation',
          'Dried surface particles becoming airborne'
        ],
        
        dermalRoute: [
          'Contaminated work surfaces',
          'Drug vial exteriors',
          'Spills and splashes',
          'Contaminated PPE',
          'Patient excreta handling'
        ],
        
        ingestionRoute: [
          'Contaminated food/beverages',
          'Hand-to-mouth transfer',
          'Eating in work areas',
          'Improper hand hygiene'
        ],
        
        needleStickRoute: [
          'Drug preparation',
          'Administration',
          'Disposal activities',
          'Improper handling techniques'
        ],
        
        // Table - editable with _order
        exposureActivitiesTable: {
          _order: 1,
          headers: {
            col0: "Activity",
            col1: "The potential source of exposure"
          },
          rows: {
            row0: {
              col0: "Receipt",
              col1: "Contact drug residuals present on drug containers, individual dosage units, outer containers, work surfaces, or floors"
            },
            row1: {
              col0: "Dispensing",
              col1: "Counting or repackaging tablets and capsules"
            },
            row2: {
              col0: "Compounding and other manipulations",
              col1: "<ul><li>Counting out individual, uncoated oral doses and tablets from multidose bottles</li><li>Unit-dosing uncoated tablets in a unit-dose machine</li><li>Crushing or splitting tablets or opening capsules to make unit doses or oral liquid doses</li><li>Compounding potent powders into custom-dosage capsules</li><li>Pouring oral or topical liquids from one container to another</li><li>Weighing or mixing components</li><li>Reconstitute powdered or lyophilized HDs and further dilute either the reconstituted powder or concentrated liquid forms of HDs</li><li>Withdrawing or diluting injectable HDs from parenteral containers</li><li>Priming HDs from syringes or IV tubes</li><li>Contact HD residue is present on Personal Protective Equipment (PPE) or other garments</li><li>Deactivating, decontaminating, cleaning, and disinfecting areas contaminated with or suspected to be contaminated with HDs</li><li>Maintenance activities for potentially contaminated equipment and devices</li></ul>"
            },
            row3: {
              col0: "Administration",
              col1: "<ul><li>Generating aerosols during administration of HDs by various routes (e.g., injection, irrigation, oral, inhalation, or topical application)</li><li>Performing specific specialized procedures (e.g., intraperitoneal injection or bladder installation)</li><li>Priming the IV set with a drug-containing solution in inappropriate places (e.g., patient bedside) (Priming should be done in the pharmacy)</li><li>Contact measurable concentrations of drugs present on drug vial exteriors, work surfaces, floors, and final drug products (bottles, bags, cassettes, and syringes)</li><li>Leakage of tubing, IV bags, or syringes</li><li>Spiking IV bags and changing IV tubing</li></ul>"
            },
            row4: {
              col0: "Patient-care activities",
              col1: "Handling excreta (e.g., urine, faeces, sweat, or vomit) or excreta materials (e.g., clothing, dressings, linens, materials)"
            },
            row5: {
              col0: "Spills",
              col1: "Spill generation, management, and disposal (cleaning up spills)"
            },
            row6: {
              col0: "Transport",
              col1: "Moving HDs within a healthcare setting"
            },
            row7: {
              col0: "Cleaning",
              col1: "Decontaminating and cleaning drug preparation or clinical areas"
            },
            row8: {
              col0: "Waste",
              col1: "Handling contaminated waste generated at any step of the preparation or administration process\n\nCollection and disposal of HD/trace contaminated waste"
            }
          }
        },
        
        importantReminder: 'ALL activities involving hazardous drugs require appropriate PPE and adherence to safety guidelines. The risk level indicates relative exposure potential, not permission to reduce precautions. Every step requires vigilance and proper safety measures.'
      }
    },

    summary: {
      id: 'summary',
      title: 'Summary',
      order: 3,
      data: {
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
        variant: 'gradient',
        hasImage: true,
        imagePath: 'summary02.png'
      }
    }
  }
};

async function migrateChapter02() {
  console.log('🚀 Migrating Chapter 02...\n');

  const processedSections: Record<string, any> = {};
  
  for (const [sectionId, sectionData] of Object.entries(chapter02Data.sections)) {
    processedSections[sectionId] = {
      ...sectionData,
      lastModified: serverTimestamp(),
      modifiedBy: ADMIN_EMAIL
    };
    console.log(`  ✓ Section: ${sectionData.title}`);
  }

  await setDoc(doc(db, 'content', 'chapter-02'), {
    ...chapter02Data,
    sections: processedSections,
    published: true,
    lastModified: serverTimestamp()
  });
  
  console.log('✅ Chapter 02 migrated successfully!\n');
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
    console.log('   CHAPTER 02 MIGRATION');
    console.log('   Occupational Exposure');
    console.log('========================================\n');
    
    await createAdmin();
    await migrateChapter02();
    
    console.log('\n✅ Migration complete!');
    console.log('\nWhat was migrated:');
    console.log('1. Introduction (1 table + text)');
    console.log('2. Evidence section:');
    console.log('   - Historical context (text)');
    console.log('   - Detection methods (lists)');
    console.log('   - Adverse effects (lists)');
    console.log('   - Research findings (1 table with 6 rows)');
    console.log('   - Statistics (3 stat cards)');
    console.log('3. Routes section:');
    console.log('   - 4 exposure routes (lists)');
    console.log('   - Exposure activities (1 table with 9 rows)');
    console.log('4. Summary (text + key points)');
    console.log('\nAll content is now editable through admin dashboard!');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  }
}

run();