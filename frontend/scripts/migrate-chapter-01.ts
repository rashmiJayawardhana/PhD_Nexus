// FILE: scripts/migrate-chapter-01.ts
// Complete Chapter 01 migration with real content from components
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

// COMPLETE CHAPTER 01 DATA - Fixed for Firestore (no nested arrays)
const chapter01Data = {
  id: 'chapter-01',
  title: 'Chapter 01: Introduction',
  icon: '📖',
  description: 'Overview of cancer, epidemiology, treatment methods, and adverse effects',
  sections: {
    intro: {
      id: 'intro',
      title: 'Introduction',
      order: 0,
      data: {
        chapterNumber: '01',
        description: 'The first chapter of this e-module provides an overview towards cancer by providing cancer definition, epidemiology, treatment methods, adverse drug effects, and related terminologies. It is useful in better understanding occupational exposure and best practices and recommendations for handling chemotherapy which are discussed in upcoming chapters of this e-module.',
        note: 'Oncology nurses are expected to reach learning outcomes and practical competencies at the end of the study of the learning content of Chapter 01.',
        tableTitle: 'Learning Outcomes & Practice Competencies & Learning Content',
        // FIXED: Store as object with indices instead of nested array
        tableRows: {
          row0: {
            col0: "Define the term cancer\nDescribe cancer-related terminologies",
            col1: "Define the term cancer\nExplain cancer-related terminologies",
            col2: "Cancer definition and related terminologies"
          },
          row1: {
            col0: "Describe the epidemiology of cancer",
            col1: "Explain cancer epidemiology",
            col2: "Prevalence of common cancers and death rates"
          },
          row2: {
            col0: "Define the terminologies related to cancer therapy\n\nCritically evaluate the current cancer treatment methods\n\nDescribe how chemotherapy mainly acts in the human body",
            col1: "Explain different cancer therapies\n\nExplain cancer treatments\n\nExplain the main mechanism of chemotherapy",
            col2: "Cancer treatment methods: Surgery, Radiotherapy, Chemotherapy, other drugs and other treatment methods\n\nCancer therapies: Adjuvant, neoadjuvant, palliative and systemic therapy\n\nSelective and non-selective mechanisms of drugs"
          },
          row3: {
            col0: "Identify adverse effects of anti-cancer drugs\n\nIdentify common classifications of adverse effects",
            col1: "Explain common anti-cancer drugs and their adverse effects\n\nApply adverse effects-related knowledge in oncology nursing care (assess, educate, and support to management of adverse effects)",
            col2: "Common anti-cancer drugs and classification of adverse effects (based on mechanism of drugs/ drug groups/ presenting time)"
          }
        }
      }
    },
    
    overview: {
      id: 'overview',
      title: 'Overview of Cancer',
      order: 1,
      data: {
        definition: 'Cancer is the generic name for neoplasms/tumors. Tumors are of two types, benign and cancerous. Benign tumors grow slowly and usually do not invade other tissues or convert to cancer. Cancerous tumors are referred to as malignant tumors and demonstrate uncontrolled cell division and the potential to invade surrounding tissues by destroying normal cells. Cancers may be developed in solid or liquid tissues.',
        // FIXED: Array of objects is OK (not nested arrays)
        types: [
          { name: "Solid Cancers", description: "Abnormal cells create a mass or lump (e.g., breast and prostate cancers). Many types of cancers belong to solid cancers." },
          { name: "Liquid Cancers", description: "Abnormal cell buildup in blood, bone marrow, and lymphatic system (e.g., leukemia, myeloma)" },
          { name: "Primary Cancer", description: "First-developed cancer, localized, not tend to spread to other organs" },
          { name: "Secondary Cancer/Metastasis", description: "Growth of primary cancer at a new site with the distribution of cancer cells through blood and lymph" }
        ],
        infoBoxContent: 'Primary cancer is localized and does not spread, while secondary cancer (metastasis) refers to cancer cells spreading to new sites through blood and lymph systems.'
      }
    },
    
    epidemiology: {
      id: 'epidemiology',
      title: 'Cancer Epidemiology',
      order: 2,
      data: {
        intro: 'Cancer is a global health concern. It causes one in six deaths (16.8%) globally. GLOBACAN cancer statistics reported 20 million new cases and 9.7 million deaths in 2022. Over 35 million new cancer cases and a 77% increment in incidence is predicted by 2050 compared to the year 2022.',
        stats: {
          lung: { number: '2.5M', label: 'Lung Cancer Cases (12.4%)', color: 'bg-red-100' },
          breast: { number: '2.3M', label: 'Breast Cancer Cases (11.6%)', color: 'bg-pink-100' },
          colorectal: { number: '1.9M', label: 'Colorectal Cancer (9.6%)', color: 'bg-blue-100' }
        },
        details: 'Lung cancer is the most widely prevalent cancer globally (2.5 million cases; 12.4% new cases) and female breast cancer ranked second (2.3 million cases, 11.6%), followed by colorectal cancer (1.9 million cases, 9.6%), prostate cancer (1.5 million cases, 7.3%), and stomach cancer (970 000 cases, 4.9%). The incidence and deaths are increasing in Asia.',
        sriLanka: {
          males: 'Oral (lip, tongue, mouth), trachea, bronchus and lung, colorectal (colon and rectum), esophagus, and prostate cancers were common. Lip, tongue, and mouth cancers represented 15% of all male cancers.',
          females: 'Breast, thyroid, colon, ovarian, and cervical cancers were commonly prevalent. Breast cancers were prominent at 27% of all female cancers.'
        }
      }
    },
    
    treatment: {
      id: 'treatment',
      title: 'Cancer Management',
      order: 3,
      data: {
        intro: 'The well-known treatment modalities of cancer include surgery, radiotherapy, and drug therapies (chemotherapy, hormone therapy, targeted therapy, immunotherapy). The type of treatment depends on the cancer diagnosis (type and stage of cancer, organ type, condition of the cells). The principal goal of the treatment is improving the quality of life and/or overall survival.',
        // FIXED: Convert table rows to object format
        treatmentTypesTable: {
          headers: { col0: "Treatment Type", col1: "Description" },
          rows: {
            row0: { col0: "Surgery", col1: "A surgical operation to remove cancer/body parts affected by cancer" },
            row1: { col0: "Radiotherapy", col1: "The use of controlled doses of radiation to destroy or damage cancer cells does not allow them to grow, multiply, or spread." },
            row2: { col0: "Drug Therapies", col1: "Chemotherapy - Kill cancer cells or slow their growth\nHormone therapy - Replace natural hormones in some types of cancer\nImmunotherapy - Affects the immune system (Harness power of the immune system to act against cancer)\nTargeted therapy - Target specific features of cancer cells to stop the growth or spread of cancer cells" },
            row3: { col0: "Other", col1: "Chemoradiation - Combined treatment of chemotherapy and radiotherapy\nStem cell transplant - Destroy blood cells by high-dose chemotherapy and replace healthy stem cells with blood cancers such as leukemia, lymphoma and myeloma" }
          }
        },
        therapiesTable: {
          title: 'Purpose-Based Cancer Therapies',
          headers: { col0: "Cancer Therapy", col1: "Description" },
          rows: {
            row0: { col0: "Adjuvant therapy", col1: "Use of drugs after their primary surgery. Useful to eradicate microscopic cancer cells" },
            row1: { col0: "Neoadjuvant therapy", col1: "Primarily used to shrink locally advanced and large cancers before surgery to facilitate the surgical resection" },
            row2: { col0: "Palliative therapy", col1: "Control of symptoms in advanced and incurable to improve quality of life and survival" },
            row3: { col0: "Systemic therapy", col1: "Kill and modify malignant cells, leaving the unharmed normal cells" }
          }
        }
      }
    },
    
    hazardous: {
      id: 'hazardous',
      title: 'Properties of Hazardous Drugs',
      order: 4,
      data: {
        intro: 'Anti-cancer chemotherapy and a few other drug groups (antiviral drugs, hormones, some bioengineered drugs, and other miscellaneous drugs) are considered hazardous drugs (HDs) due to the below-mentioned characteristics.',
        // Array of strings is OK
        properties: [
          'Carcinogenicity',
          'Teratogenicity or developmental toxicity',
          'Reproductive toxicity',
          'Organ toxicity at low doses',
          'Genotoxicity',
          'Structure and toxicity profiles of new drugs that mimic existing drugs determined hazardous by the above criteria'
        ]
      }
    },
    
    chemotherapy: {
      id: 'chemotherapy',
      title: 'Chemotherapy & Adverse Effects',
      order: 5,
      data: {
        // Editable text content
        intro: 'Chemotherapy is a general term to indicate the use of chemicals as a therapy. However, the term is commonly used for cytotoxic chemotherapy in cancer management and is considered as hazardous drugs. Systemic Anti-Cancer Therapy (SACT) refers to drug-based cancer treatments introduced as systemic therapy and it includes chemotherapy, hormone drugs, immunotherapy, targeted therapy, and antibody-drug conjugates.',
        sactNote: 'Can be used either alone or in combination with other types of treatments such as surgery or radiation therapy. Combination treatments are effective and common in the eradication or mitigation of cancer.',
        administration: 'Chemotherapy is administered through oral, intravenous (IV), subcutaneous (SC), intramuscular (IM), or intrathecal routes (IT). IV route administration is common due to increased bioavailability, versatility, and flexibility in treatment dosages when compared to other routes of administration.',
        historical: 'Chemotherapeutic agents were developed in the 1940s and were primarily used to treat cancer and a few other non-oncology indications such as arthritis, and lupus. Chemotherapy shows cytotoxic properties (kills cancer cells) in providing therapeutic efficacy.',
        mechanisms: 'Non-selective mechanisms and narrow therapeutic properties of many agents cause numerous adverse effects. Therefore, target-specific drugs which mainly target cancer cells or specific proteins on cancer cells are introduced. However, those agents are not cost-effective with advanced processing mechanisms.',
        classificationNote: 'Adverse effects of chemotherapy are mainly classified according to: (1) general mechanisms of drugs (non-selective vs target-specific), (2) drug groups, (3) body systems or organs (cardiac, hepatic, renal, hematopoietic, pulmonary, reproductive, dermal etc.), and (4) adverse effects presenting time (acute vs chronic).',
        temporalIntro: 'Adverse effects of chemotherapy can be outlined according to the presenting time. Generally, reversible adverse effects are present after administration of chemotherapy and are considered as acute adverse effects. Late effects are regarded as long-term and non-reversible.',
        acuteEffects: 'Occur shortly after treatment administration. Generally reversible with proper management and supportive care.',
        chronicEffects: 'Long-term or late-onset effects that may persist after treatment completion. Often non-reversible and require ongoing monitoring.',
        clinicalNote: 'Understanding the temporal pattern of adverse effects is crucial for oncology nurses to provide appropriate patient education, implement timely interventions, and plan for long-term follow-up care.'
      }
    },
    
    summary: {
      id: 'summary',
      title: 'Summary',
      order: 6,
      data: {
        title: 'Chapter 01 Summary',
        // Array of strings is OK
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
        variant: 'gradient',
        hasImage: true,
        imagePath: 'summary01.png'
      }
    }
  }
};

async function migrateChapter01() {
  console.log('🚀 Migrating Chapter 01...\n');

  const processedSections: Record<string, any> = {};
  
  for (const [sectionId, sectionData] of Object.entries(chapter01Data.sections)) {
    processedSections[sectionId] = {
      ...sectionData,
      lastModified: serverTimestamp(),
      modifiedBy: ADMIN_EMAIL
    };
    console.log(`  ✓ Section: ${sectionData.title}`);
  }

  await setDoc(doc(db, 'content', 'chapter-01'), {
    ...chapter01Data,
    sections: processedSections,
    published: true,
    lastModified: serverTimestamp()
  });
  
  console.log('✅ Chapter 01 migrated successfully!\n');
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
    console.log('   CHAPTER 01 MIGRATION (FINAL)');
    console.log('========================================\n');
    
    await createAdmin();
    await migrateChapter01();
    
    console.log('\n✅ Migration complete!');
    console.log('\nNext steps:');
    console.log('1. Verify data in Firebase Console');
    console.log('2. Replace ChemotherapySection component');
    console.log('3. Test editing in admin panel');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  }
}

run();
