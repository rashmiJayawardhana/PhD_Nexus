// FILE: scripts/migrate-chapter-05.ts
// ================================================================
// Complete Chapter 5 Migration with ALL Content
// Run: npx tsx scripts/migrate-chapter-05.ts
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

// COMPLETE CHAPTER 05 DATA - ALL CONTENT PRESERVED
const chapter05Data = {
  id: 'chapter-05',
  title: 'Chapter 05: Safety Precautions',
  icon: '🎓',
  description: 'Factors affecting compliance and effectiveness of education programs',
  sections: {
    intro: {
      id: 'intro',
      title: 'Introduction',
      order: 0,
      data: {
        chapterNumber: '05',
        description: 'The fifth chapter of this content describes barriers that contribute to safety precautions and occupational exposure and the impact of education towards safe practices.',
        note: 'Oncology nurses are expected to reach learning outcomes and practical competencies at the end of the study of the learning content of Chapter 05.',
        tableTitle: 'Learning Outcomes & Practice Competencies & Learning Content',
        tableRows: {
          _order: 1,
          headers: {
            col0: "Learning Outcomes",
            col1: "Practice Competencies",
            col2: "Learning Content"
          },
          rows: {
            row0: {
              col0: "Identify factors contributing to safety precautions and occupational exposure to chemotherapy and overcome those barriers.",
              col1: "Discuss contributing factors to safety precautions and occupational exposure to chemotherapy.\n\nTaking measures to mitigate the barriers contributing to safety precautions and occupational exposure to chemotherapy, and acting as a role model in ensuring occupational health",
              col2: "Factors contributing to safety precautions and occupational exposure to chemotherapy (workload, staff shortage, insufficient knowledge and training, practice, PPE, etc.)"
            },
            row1: {
              col0: "Discuss how education influences the safe handling of chemotherapy.",
              col1: "Increase desire to participate in related education interventions\n\nTake safety precautions to minimize occupational exposure to chemotherapy",
              col2: "Empirical studies on the impact of education programs on handling chemotherapy.\n\nContent of the current education intervention"
            }
          }
        }
      }
    },

    barriers: {
      id: 'barriers',
      title: 'Barriers to Following Safety Precautions',
      order: 1,
      data: {
        // Text content
        introduction: 'The literature reported multifactorial causes of ineffective compliance with safety guidelines. The common contributing factors include frequency of utilization, handling large quantities of doses and complex drug regimens, inadequate knowledge and training, poor attitudes toward safety precautions, insufficient supervision on handling, multitasking and work pressure, staff shortage, interpersonal influences, personal factors, unsafe working environment (e.g., unavailable/limited PPE, CSTD and other facilities and budgeting constraints)[36].',
        
        criticalFinding: 'Statistically significant correlations have been observed between the prevalence of adverse effects and heavy workload, staff shortage, poor knowledge and practice, drug handling characteristics, and poor attitude towards safety measures. Among these factors, insufficient knowledge and training are the most frequently associated with occupational exposure and related adverse effects[36-38].',
        
        // Barrier Categories
        barrierCategories: {
          organizational: {
            title: 'Organizational Factors',
            color: 'red',
            items: [
              'Increased workload and patient count',
              'Staff shortage',
              'Insufficient supervision',
              'Limited PPE availability',
              'Lack of engineering controls (BSC, CSTD)',
              'Budget constraints',
              'Poor workplace safety climate'
            ]
          },
          knowledge: {
            title: 'Knowledge and Training Factors',
            color: 'orange',
            items: [
              'Inadequate knowledge of safe handling',
              'Insufficient training opportunities',
              'Lack of ongoing education',
              'Unavailability of routine training programs',
              'Poor understanding of exposure risks'
            ]
          },
          practice: {
            title: 'Practice and Behavioral Factors',
            color: 'amber',
            items: [
              'Poor attitudes toward safety measures',
              'Low self-efficacy in handling HDs',
              'Conflict between professional image and safety',
              'Prioritizing social roles over professional safety',
              'Reliance on clinical wisdom instead of guidelines',
              'Non-compliance with PPE use',
              'Unsafe practices (e.g., priming with chemotherapy)'
            ]
          },
          environmental: {
            title: 'Environmental Factors',
            color: 'yellow',
            items: [
              'Technical issues with devices',
              'Drug spills during handling',
              'Complex drug regimens',
              'High-dose drug handling',
              'Interpersonal influences'
            ]
          }
        },
        
        // Empirical Studies Table
        empiricalStudiesIntro: 'Table 15: Empirical studies on barriers to safe handling of chemotherapy',
        empiricalStudies: {
          _order: 2,
          study1: {
            title: 'Integrative Review[39]',
            variant: 'blue',
            keyFinding: 'Nurses\' adherence to the guidelines on handling chemotherapy is lower than the recommended level.',
            contributingFactors: [
              'Insufficient PPE and knowledge in handling',
              'Poor practice (priming syringes/IV lines with chemotherapy solutions)',
              'Ineffective use of PPE',
              'Lack of monitoring and low self-efficacy',
              'Increased patient count and poor workplace safety climate',
              'Drug spills, not using CSTDs, technical issues with devices'
            ],
            impact: 'Education interventions statistically significantly increased knowledge and compliance with safety measures, and decreased the frequency of spills.'
          },
          study2: {
            title: 'Descriptive Cross-sectional Study[40]',
            variant: 'purple',
            findings: 'Nurses reported high exposure knowledge, self-efficacy, perceived risk, interpersonal influences, and workplace safety climate. They also reported moderate barriers to the use of PPE and conflict of interest.',
            significantFinding: 'The number of patients per day is significantly associated with the use of HD precautions.'
          },
          study3: {
            title: 'Cross-sectional Study[41]',
            variant: 'teal',
            associatedFactors: [
              'Age and working experience',
              'Having heard about cytotoxic drugs',
              'Training on handling cytotoxic drugs',
              'Practice of handling chemotherapy among HCWs'
            ]
          },
          study4: {
            title: 'Qualitative Study[42]',
            variant: 'indigo',
            culturalFactors: [
              'Nurses report that the use of PPE is an obstacle to professional image and performance',
              'Nurses prioritized social roles over professional roles',
              'Belief that clinical wisdom was necessary to prevent occupational exposure to chemotherapy toxicity'
            ]
          }
        },
        
        mostSignificantBarrier: 'Research consistently shows that insufficient knowledge and training are the most frequently associated factors with occupational exposure and related adverse effects. This finding emphasizes the critical importance of comprehensive education programs in improving safety compliance.',
        
        criticalImplications: 'Addressing barriers to safe handling requires a multifaceted approach that includes organizational support, adequate resources, comprehensive training programs, and fostering a culture of safety. Education interventions have proven effective in improving compliance and reducing adverse effects, making them a priority intervention.'
      }
    },

    education: {
      id: 'education',
      title: 'Impact of Education Programs',
      order: 2,
      data: {
        // Hero Introduction
        powerOfEducation: 'Many empirical studies and theories have emphasized that continuous educational training programs are the most suitable sources for improving knowledge and practice[36-38]. However, the unavailability or limited availability of routine educational or training programs has been reported[12].',
        
        evidenceIntro: 'After identifying insufficient knowledge and training, as well as other contributing factors, remedial measures, including education and training programs, were implemented to address occupational exposure to HDs among HCWs. The findings reported[36,43,44]:',
        
        evidenceBenefits: [
          'Better Compliance: Improved adherence to safety guidelines',
          'Fewer Adverse Effects: Reduced number of safety incidents'
        ],
        
        impactAreas: [
          'Knowledge of safe handling practices',
          'Compliance with safety guidelines',
          'Proper use of PPE',
          'Self-efficacy in HD handling',
          'Nursing performance',
          'Attitudes toward safety',
          'Confidence levels',
          'Reduction in drug spills',
          'Sustained behavior change'
        ],
        
        // Educational Methods
        effectiveMethodsIntro: 'Several studies used web-based online courses, educational modules, applied safety protocols, demonstration, and re-demonstration, videos, PowerPoint presentations, seminars, and workshops to improve self-efficacy, nursing performance, attitude, knowledge, and practice of cytotoxic drug handling among nurses[45] and reported statistically significant improvement in knowledge and practice in handling Chemotherapy[46].',
        
        effectiveMethodsExtended: 'Further, it is reported that educational interventions can significantly improve nurses\' attitudes towards specific issues related to safety, as well as confidence levels when handling HDs after introducing the education interventions[45]. The self-directed module was considered an alternative to face-to-face teaching sessions among nurses to achieve better practice in handling Chemotherapy[46].',
        
        elearningIntro: 'The paper by Grunigen et al. (2021) demonstrates significant improvements in theoretical knowledge and high participant satisfaction in handling chemotherapy through devolved e-modules. Those e-modules were highly recommended for the HCWs in Lower-Middle-Income Countries (LMIC) in handling HDs/Chemotherapy due to a lack of educational opportunities with cost constraints[47].',
        
        elearningExtended: 'Although developing mobile applications is not cost-effective for LMICs, one study has focused on this area and reported a significant improvement in knowledge and practice[48]. Similarly, a wide variety of literature has reported the effectiveness of educational interventions in promoting safety precautions among nurses when handling chemotherapy. Cost-effective e-learning modules are highly recommended to nurses and other HCWs in the LMIC[45,48,49]. Also, blended learning is considered the most suitable method for nurses[47]. E-learning modules are cost-effective learning strategies, particularly for LMICs[47-50].',
        
        // Educational Methods Details
        educationalMethods: {
          webBased: {
            title: 'Web-based Online Courses',
            description: 'Interactive digital learning platforms',
            color: 'teal',
            benefits: [
              'Flexible, accessible anytime, anywhere',
              'Self-paced learning',
              'Cost-effective for large groups',
              'Easy to update content'
            ]
          },
          elearning: {
            title: 'E-learning Modules',
            description: 'Structured digital content modules',
            color: 'blue',
            benefits: [
              'Highly recommended for LMICs',
              'Cost-effective alternative',
              'Addresses lack of opportunities',
              'Supports lifelong learning'
            ]
          },
          blended: {
            title: 'Blended Learning',
            description: 'Combines face-to-face and online methods',
            color: 'purple',
            benefits: [
              'Most suitable for nurses',
              'Combines best of both approaches',
              'Refreshes knowledge',
              'Preserves time'
            ]
          },
          modules: {
            title: 'Educational Modules',
            description: 'Self-directed learning materials',
            color: 'green',
            benefits: [
              'Alternative to face-to-face sessions',
              'Self-paced progress',
              'Comprehensive content',
              'Better practice outcomes'
            ]
          }
        },
        
        additionalMethods: [
          'Safety Protocols',
          'Demonstrations',
          'Videos & Presentations',
          'Workshops & Seminars',
          'Mobile Applications',
          'PowerPoint Presentations'
        ],
        
        // LMIC Recommendations
        lmicRecommendations: {
          elearning: 'E-learning modules are highly recommended as a cost-effective alternative to traditional training',
          educationGap: 'Addresses the lack of educational opportunities with budget constraints',
          blendedApproach: 'Blended learning approach is considered the most suitable method for nurses',
          continuousDevelopment: 'Refreshes knowledge, preserves time, and supports lifelong learning and continuous professional development (CPD)'
        },
        
        // Research Findings Table
        researchTableIntro: 'Table 16: Empirical studies on education programs for safe handling of chemotherapy',
        
        researchFindings: {
          _order: 3,
          study1: {
            title: 'Systematic Review[51]',
            methodology: 'Meta-analysis',
            variant: 'blue',
            summary: 'Summarized findings from nine research publications:',
            findings: [
              'Most studies (88.9%) reported a strong association between educational interventions and the safe handling of HDs.',
              'One web-based study (11.1%) reported that educational interventional courses did not improve participants\' performance.'
            ],
            impact: 'Researchers suggested that little interaction with participants and structural barriers to achieving desired behaviors may be the most probable reason for ineffectiveness in the one study.'
          },
          study2: {
            title: 'Qualitative Study[52]',
            methodology: 'Interview-based',
            variant: 'green',
            mainFinding: 'Most nurses (54%) reported a positive perception of the blended learning method for nurses\' continuous professional development (CPD).',
            details: [
              '54% - E-learning aids are effective',
              '74% - Easy to follow',
              'Have a favourable perception as e-learning refreshes knowledge',
              'Preserves time',
              'Positively impacts better practice',
              'Supports lifelong learning and CPD'
            ],
            challenges: 'However, some preferred workshops/traditional teacher-centred learning methods, considering the interactions and ability to clarify doubts. Less motivation and issues with technology (logging issues/connection issues/insufficient knowledge of technology) negatively impacted e-learning among participants',
            impact: 'Overall findings reported that e-learning supports nurses in engaging in lifelong learning and CPD and facilitates discussions alongside face-to-face training as part of a blended learning approach.'
          },
          study3: {
            title: 'Randomized Controlled Trials[53]',
            methodology: 'Experimental',
            variant: 'purple',
            findings: 'Web-based intervention was ineffective in increasing compliance with using PPE in chemotherapy.'
          },
          study4: {
            title: 'Randomized Controlled Trials[54]',
            methodology: 'Experimental',
            variant: 'orange',
            findings: 'Statistically significant improvements among nurses compared to controls:',
            improvements: [
              'Job-related knowledge',
              'Self-efficacy',
              'Nursing performance'
            ],
            detail: 'The increase in job-related knowledge, self-efficacy, and nursing performance in handling chemotherapy was statistically significant among nurses compared to controls.'
          },
          study5: {
            title: 'Pre and Post Study[47]',
            methodology: 'Quasi-experimental',
            variant: 'teal',
            mainFinding: 'High degree of participant satisfaction for e-modules on safe handling',
            findings: [
              'Theoretical knowledge statistically significant (except one lesson)',
              'E-modules recommended for nurses/HCWs in LMICs',
              'Addresses lack of educational opportunities'
            ],
            detail: 'The theoretical knowledge of handling chemotherapy was statistically significant, except for one lesson. A high degree of participant satisfaction was reported for e-modules on safe handling of chemotherapy. E-modules are recommended for nurses/HCWs, especially those who handle HDs/Chemotherapy in LMICs, due to the lack of educational opportunities.'
          },
          study6: {
            title: 'One-group posttest-pretest[48]',
            methodology: 'Experimental',
            variant: 'green',
            mainFinding: 'Designed mobile app demonstrated statistical improvement in:',
            areas: [
              'Knowledge of safe handling',
              'Attitude toward safety',
              'Practice in handling chemotherapy'
            ],
            content: 'introduction, PPE, storage, administration, managing spills and disposal',
            detail: 'A designed mobile app demonstrated a statistical improvement in knowledge, attitude, and practice regarding the safe handling of chemotherapy. (Content: introduction, PPE, storage, administration, managing spills and disposal)'
          },
          study7: {
            title: 'Pre and Post Test[49]',
            methodology: 'Comparative',
            variant: 'blue',
            findings: 'Nurses\' knowledge and performance in handling chemotherapy are statistically significant across both teaching methods (online vs traditional programs).'
          }
        },
        
        // Key Success Factors
        successFactorsProven: [
          'High participant satisfaction',
          'Significant improvement in theoretical knowledge',
          'Enhanced practical skills',
          'Better attitude toward safety',
          'Increased confidence in handling HDs',
          'Sustained behavior change'
        ],
        
        successFactorsChallenges: [
          'Technology access and connectivity issues',
          'Limited interaction in some online formats',
          'Structural barriers to implementing learned behaviors',
          'Need for motivation and engagement',
          'Preference for traditional methods by some learners'
        ],
        
        // Best Practices
        bestPractices: [
          {
            num: 1,
            title: 'Combine Methods',
            description: 'Integrate e-learning with face-to-face training for optimal results',
            color: 'teal'
          },
          {
            num: 2,
            title: 'Include Interactive Elements',
            description: 'Ensure engagement through demonstrations, discussions, and hands-on practice',
            color: 'blue'
          },
          {
            num: 3,
            title: 'Provide Ongoing Support',
            description: 'Offer continuous resources and follow-up training opportunities',
            color: 'purple'
          },
          {
            num: 4,
            title: 'Regular Assessments',
            description: 'Conduct competency evaluations to ensure knowledge retention',
            color: 'green'
          },
          {
            num: 5,
            title: 'Continuous Professional Development',
            description: 'Support lifelong learning through regular updates and refresher courses',
            color: 'orange'
          },
          {
            num: 6,
            title: 'Organizational Support',
            description: 'Ensure institutional backing for implementing learned behaviors',
            color: 'pink'
          }
        ],
        
        finalConclusion: 'Education interventions have consistently demonstrated effectiveness in improving knowledge, compliance, and safety practices in handling chemotherapy. E-learning modules and blended learning approaches are particularly recommended for LMICs as cost-effective solutions that address gaps in educational opportunities while supporting continuous professional development. The key to success lies in combining multiple educational methods with organizational support and regular competency assessments.'
      }
    },

    summary: {
      id: 'summary',
      title: 'Summary',
      order: 3,
      data: {
        title: 'Chapter 05 Summary',
        description: [
          'A wide variety of practices affect occupational exposure and the safe handling of chemotherapy. Those include increased patient count, frequent drug utilization, handling an increased amount and quantity of doses, complex drug regimens, inadequate knowledge and training, poor attitudes toward safety measures, insufficient supervision on handling, multitasking and work pressure, staff shortage, interpersonal influences, personal factors, unsafe working environment and limited facilities. Adequate knowledge and training are frequently associated with occupational exposure and related adverse effects.',
          'Literature reports that education and training programs enhance compliance with safety guidelines and reduce occupational exposure and related AEs. Web-based online courses, educational modules, safety guidelines, demonstrations, re-demonstrations, videos, PowerPoint presentations, seminars, and workshops were common tools used in education programs to improve knowledge, attitude and performance in handling cytotoxic drugs among nurses.'
        ],
        keyPoints: [
          '🚧 Barrier Categories: Four main groups - Organizational (workload, staff shortage, budget), Knowledge/Training (inadequate education, lack of programs), Practice/Behavioral (poor attitudes, low self-efficacy), and Environmental (technical issues, complex regimens)',
          '📚 Most Critical Barrier: Insufficient knowledge and training are THE most frequently associated factors with occupational exposure and adverse effects - making education the #1 priority intervention',
          '🔍 Multifactorial Causes: Barriers include increased patient count, frequent drug utilization, handling large doses, complex regimens, inadequate knowledge, poor attitudes, insufficient supervision, multitasking, work pressure, staff shortage, interpersonal influences, unsafe environment, and limited facilities',
          '✅ Education Effectiveness: 88.9% of studies show strong association between educational interventions and safe handling improvements - Better compliance + Lower adverse effects',
          '💻 Top Educational Methods: Web-based courses, e-learning modules, blended learning (most suitable for nurses), educational modules, safety protocols, demonstrations, videos, workshops, mobile apps - ALL show statistically significant improvements',
          '🌍 LMIC Recommendations: E-learning modules HIGHLY recommended - Cost-effective, addresses lack of opportunities, supports lifelong learning and CPD. Blended learning is MOST suitable method for nurses',
          '📈 Proven Improvements: Education interventions significantly improve: (1) Knowledge of safe handling, (2) Compliance with guidelines, (3) Proper PPE use, (4) Self-efficacy, (5) Nursing performance, (6) Attitudes toward safety, (7) Confidence levels, (8) Reduction in drug spills',
          '🎯 Success Factors: High participant satisfaction (54-74%), significant theoretical knowledge improvement, enhanced practical skills, better safety attitudes, increased confidence, sustained behavior change',
          '⚠️ Key Challenges: Technology access/connectivity issues, limited interaction in online formats, structural barriers to implementation, need for motivation, some prefer traditional methods',
          '⭐ Best Practice Formula: Combine multiple methods (e-learning + face-to-face) + Interactive elements + Ongoing support + Regular assessments + CPD + Organizational backing = SUCCESS',
          '📊 Research Evidence: Multiple study types confirm effectiveness - Systematic reviews (88.9% positive), RCTs (statistically significant improvements), qualitative studies (54% positive perception), pre-post studies (high satisfaction)',
          '🎓 Blended Learning: 54% of nurses prefer blended approach - Combines teacher-centered and student-centered methods, refreshes knowledge, preserves time, facilitates discussions, supports lifelong learning',
          '💡 Key Finding: Self-directed modules considered alternative to face-to-face sessions for achieving better practice in handling chemotherapy',
          '🔑 The 4 Pillars: (1) Organizational support + (2) Adequate resources + (3) Comprehensive training + (4) Culture of safety = Effective barrier management',
          '🌟 Bottom Line: Education interventions are PRIORITY intervention - Consistently demonstrate effectiveness in improving knowledge, compliance, and safety practices. E-learning + blended learning = Most cost-effective solutions for LMICs'
        ],
        variant: 'gradient',
        hasImage: true,
        imagePath1: 'summary05.png',
        imagePath2: 'home.png'
      }
    }
  }
};

async function migrateChapter05() {
  console.log('🚀 Migrating Chapter 05...\n');

  const processedSections: Record<string, any> = {};
  
  for (const [sectionId, sectionData] of Object.entries(chapter05Data.sections)) {
    processedSections[sectionId] = {
      ...sectionData,
      lastModified: serverTimestamp(),
      modifiedBy: ADMIN_EMAIL
    };
    console.log(`  ✓ Section: ${sectionData.title}`);
  }

  await setDoc(doc(db, 'content', 'chapter-05'), {
    ...chapter05Data,
    sections: processedSections,
    published: true,
    lastModified: serverTimestamp()
  });
  
  console.log('✅ Chapter 05 migrated successfully!\n');
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
    console.log('   CHAPTER 05 MIGRATION');
    console.log('   Safety Precautions & Education');
    console.log('========================================\n');
    
    await createAdmin();
    await migrateChapter05();
    
    console.log('\n✅ Migration complete!');
    console.log('\nWhat was migrated:');
    console.log('1. Introduction (1 table + text)');
    console.log('2. Barriers section:');
    console.log('   - Introduction text');
    console.log('   - 4 barrier categories with lists');
    console.log('   - 4 empirical studies');
    console.log('   - Key findings');
    console.log('3. Education section:');
    console.log('   - Introduction and impact areas');
    console.log('   - 4 educational methods');
    console.log('   - 7 research findings');
    console.log('   - 6 best practices');
    console.log('   - LMIC recommendations');
    console.log('4. Summary (text + key points + images)');
    console.log('\nAll content is now editable through admin dashboard!');
    console.log('Run with: npx tsx scripts/migrate-chapter-05.ts');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  }
}

run();