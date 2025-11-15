// FILE: Frontend/scripts/migrate-to-firebase.ts
// Automated content migration script
// Run this once to migrate all existing content to Firebase
// =========================================================

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';

// Firebase configuration - UPDATE THESE VALUES FROM YOUR .env FILE
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ADMIN CONFIGURATION - UPDATE THESE!
const ADMIN_UID = 'Oy4i5QwrT0RiJmt0Utae2MNXzCF2';  // Your admin UID from Firebase Auth
const ADMIN_EMAIL = 'samanthisenarath38@gmail.com';  // Your admin email

// Chapter data structure (simplified, without React components)
const chaptersData = [
  {
    id: 'chapter-01',
    title: 'Chapter 01: Introduction',
    icon: '📖',
    description: 'Overview of cancer, epidemiology, treatment methods, and adverse effects',
    sections: {
      'intro': {
        id: 'intro',
        title: 'Introduction',
        content: '<h2>Introduction</h2><p>Welcome to Chapter 01. This content can be edited in the admin dashboard.</p>',
        order: 0
      },
      'overview': {
        id: 'overview',
        title: 'Overview of Cancer',
        content: '<h2>Overview of Cancer</h2><p>Content about cancer overview. Edit in admin dashboard.</p>',
        order: 1
      },
      'epidemiology': {
        id: 'epidemiology',
        title: 'Cancer Epidemiology',
        content: '<h2>Cancer Epidemiology</h2><p>Content about cancer epidemiology. Edit in admin dashboard.</p>',
        order: 2
      },
      'treatment': {
        id: 'treatment',
        title: 'Cancer Management',
        content: '<h2>Cancer Management</h2><p>Content about cancer treatment. Edit in admin dashboard.</p>',
        order: 3
      },
      'hazardous': {
        id: 'hazardous',
        title: 'Properties of Hazardous Drugs',
        content: '<h2>Properties of Hazardous Drugs</h2><p>Content about hazardous drugs. Edit in admin dashboard.</p>',
        order: 4
      },
      'chemotherapy': {
        id: 'chemotherapy',
        title: 'Chemotherapy & Adverse Effects',
        content: '<h2>Chemotherapy & Adverse Effects</h2><p>Content about chemotherapy. Edit in admin dashboard.</p>',
        order: 5
      },
      'summary': {
        id: 'summary',
        title: 'Summary',
        content: '<h2>Summary</h2><p>Chapter summary. Edit in admin dashboard.</p>',
        order: 6
      }
    }
  },
  {
    id: 'chapter-02',
    title: 'Chapter 02: Occupational Exposure',
    icon: '⚠️',
    description: 'Evidence of exposure, routes, and risk activities among healthcare workers',
    sections: {
      'intro': {
        id: 'intro',
        title: 'Introduction',
        content: '<h2>Introduction</h2><p>Chapter 02 introduction. Edit in admin dashboard.</p>',
        order: 0
      },
      'evidence': {
        id: 'evidence',
        title: 'Evidence of Occupational Exposure and AEs among HCWs',
        content: '<h2>Evidence of Occupational Exposure</h2><p>Content about evidence. Edit in admin dashboard.</p>',
        order: 1
      },
      'routes': {
        id: 'routes',
        title: 'Chemotherapy Exposure Routes and Risk Activities',
        content: '<h2>Exposure Routes</h2><p>Content about exposure routes. Edit in admin dashboard.</p>',
        order: 2
      },
      'summary': {
        id: 'summary',
        title: 'Summary',
        content: '<h2>Summary</h2><p>Chapter summary. Edit in admin dashboard.</p>',
        order: 3
      }
    }
  },
  {
    id: 'chapter-03',
    title: 'Chapter 03: Hierarchical Controls',
    icon: '🛡️',
    description: 'Engineering controls, administrative measures, and PPE for safe handling',
    sections: {
      'intro': {
        id: 'intro',
        title: 'Introduction',
        content: '<h2>Introduction</h2><p>Chapter 03 introduction. Edit in admin dashboard.</p>',
        order: 0
      },
      'standard': {
        id: 'standard',
        title: 'Standard Guidelines',
        content: '<h2>Standard Guidelines</h2><p>Content about guidelines. Edit in admin dashboard.</p>',
        order: 1
      },
      'hierarchical': {
        id: 'hierarchical',
        title: 'Hierarchical Controls',
        content: '<h2>Hierarchical Controls</h2><p>Content about controls. Edit in admin dashboard.</p>',
        order: 2
      },
      'engineering': {
        id: 'engineering',
        title: 'Engineering Controls',
        content: '<h2>Engineering Controls</h2><p>Content about engineering. Edit in admin dashboard.</p>',
        order: 3
      },
      'administrative': {
        id: 'administrative',
        title: 'Administrative Controls',
        content: '<h2>Administrative Controls</h2><p>Content about admin controls. Edit in admin dashboard.</p>',
        order: 4
      },
      'ppe': {
        id: 'ppe',
        title: 'Personal Protective Equipment',
        content: '<h2>PPE</h2><p>Content about PPE. Edit in admin dashboard.</p>',
        order: 5
      },
      'summary': {
        id: 'summary',
        title: 'Summary',
        content: '<h2>Summary</h2><p>Chapter summary. Edit in admin dashboard.</p>',
        order: 6
      }
    }
  },
  {
    id: 'chapter-04',
    title: 'Chapter 04: Handling Recommendations',
    icon: '📋',
    description: 'Best practices for receiving, preparing, administering, and disposing',
    sections: {
      'intro': {
        id: 'intro',
        title: 'Introduction',
        content: '<h2>Introduction</h2><p>Chapter 04 introduction. Edit in admin dashboard.</p>',
        order: 0
      },
      'receiving': {
        id: 'receiving',
        title: 'Receiving, Distribution, and Storage',
        content: '<h2>Receiving & Storage</h2><p>Content about receiving. Edit in admin dashboard.</p>',
        order: 1
      },
      'compounding': {
        id: 'compounding',
        title: 'Compounding Hazardous Drugs',
        content: '<h2>Compounding</h2><p>Content about compounding. Edit in admin dashboard.</p>',
        order: 2
      },
      'administration': {
        id: 'administration',
        title: 'Administration of Chemotherapy',
        content: '<h2>Administration</h2><p>Content about administration. Edit in admin dashboard.</p>',
        order: 3
      },
      'waste': {
        id: 'waste',
        title: 'Disposal of Waste',
        content: '<h2>Waste Disposal</h2><p>Content about waste. Edit in admin dashboard.</p>',
        order: 4
      },
      'cleaning': {
        id: 'cleaning',
        title: 'Cleaning and Decontamination',
        content: '<h2>Cleaning</h2><p>Content about cleaning. Edit in admin dashboard.</p>',
        order: 5
      },
      'spill': {
        id: 'spill',
        title: 'Cleaning HD Spills',
        content: '<h2>Spill Management</h2><p>Content about spills. Edit in admin dashboard.</p>',
        order: 6
      },
      'reassignment': {
        id: 'reassignment',
        title: 'Protective Reassignment',
        content: '<h2>Protective Reassignment</h2><p>Content about reassignment. Edit in admin dashboard.</p>',
        order: 7
      },
      'emergency': {
        id: 'emergency',
        title: 'Emergency Procedures',
        content: '<h2>Emergency Procedures</h2><p>Content about emergencies. Edit in admin dashboard.</p>',
        order: 8
      },
      'training': {
        id: 'training',
        title: 'Training Personnel',
        content: '<h2>Training</h2><p>Content about training. Edit in admin dashboard.</p>',
        order: 9
      },
      'medical': {
        id: 'medical',
        title: 'Medical Surveillance',
        content: '<h2>Medical Surveillance</h2><p>Content about surveillance. Edit in admin dashboard.</p>',
        order: 10
      },
      'summary': {
        id: 'summary',
        title: 'Summary',
        content: '<h2>Summary</h2><p>Chapter summary. Edit in admin dashboard.</p>',
        order: 11
      }
    }
  },
  {
    id: 'chapter-05',
    title: 'Chapter 05: Safety Precautions',
    icon: '🎓',
    description: 'Factors affecting compliance and effectiveness of education programs',
    sections: {
      'intro': {
        id: 'intro',
        title: 'Introduction',
        content: '<h2>Introduction</h2><p>Chapter 05 introduction. Edit in admin dashboard.</p>',
        order: 0
      },
      'barriers': {
        id: 'barriers',
        title: 'Barriers to Following Safety Precautions',
        content: '<h2>Barriers</h2><p>Content about barriers. Edit in admin dashboard.</p>',
        order: 1
      },
      'education': {
        id: 'education',
        title: 'Impact of Education Programs',
        content: '<h2>Education Impact</h2><p>Content about education. Edit in admin dashboard.</p>',
        order: 2
      },
      'summary': {
        id: 'summary',
        title: 'Summary',
        content: '<h2>Summary</h2><p>Chapter summary. Edit in admin dashboard.</p>',
        order: 3
      }
    }
  },
  {
    id: 'resources',
    title: 'Additional Resources',
    icon: '📚',
    description: 'References, glossary, acknowledgements, and supplementary materials',
    sections: {
      'intro': {
        id: 'intro',
        title: 'Overview',
        content: '<h2>Additional Resources</h2><p>Overview of resources. Edit in admin dashboard.</p>',
        order: 0
      },
      'references': {
        id: 'references',
        title: 'References',
        content: '<h2>References</h2><p>Bibliography content. Edit in admin dashboard.</p>',
        order: 1
      },
      'glossary': {
        id: 'glossary',
        title: 'Glossary',
        content: '<h2>Glossary</h2><p>Terms and definitions. Edit in admin dashboard.</p>',
        order: 2
      },
      'acknowledgements': {
        id: 'acknowledgements',
        title: 'Acknowledgements',
        content: '<h2>Acknowledgements</h2><p>Thanks and recognition. Edit in admin dashboard.</p>',
        order: 3
      },
      'abbreviations': {
        id: 'abbreviations',
        title: 'List of Abbreviations',
        content: '<h2>Abbreviations</h2><p>List of abbreviations. Edit in admin dashboard.</p>',
        order: 4
      }
    }
  }
];

/**
 * Create admin document in Firestore
 */
async function createAdminDocument() {
  console.log('👤 Creating admin document...');

  try {
    const adminData = {
      uid: ADMIN_UID,
      email: ADMIN_EMAIL,
      role: 'admin',
      createdAt: serverTimestamp(),
      lastLogin: serverTimestamp()
    };

    await setDoc(doc(db, 'admins', ADMIN_UID), adminData);
    console.log('✅ Admin document created successfully!');
  } catch (error) {
    console.error('❌ Error creating admin document:', error);
    throw error;
  }
}

/**
 * Migrate all chapters to Firestore
 */
async function migrateContent() {
  console.log('\n🚀 Starting content migration...\n');

  for (const chapter of chaptersData) {
    console.log(`📖 Migrating ${chapter.id}: ${chapter.title}`);

    try {
      // Process sections to add metadata
      const processedSections: Record<string, any> = {};
      
      for (const [sectionId, sectionData] of Object.entries(chapter.sections)) {
        processedSections[sectionId] = {
          ...sectionData,
          lastModified: serverTimestamp(),
          modifiedBy: ADMIN_EMAIL
        };
        console.log(`  ✓ Section: ${sectionData.title}`);
      }

      // Create chapter document
      const chapterData = {
        id: chapter.id,
        title: chapter.title,
        icon: chapter.icon,
        description: chapter.description,
        sections: processedSections,
        published: true,
        lastModified: serverTimestamp()
      };

      // Save to Firestore
      await setDoc(doc(db, 'content', chapter.id), chapterData);
      console.log(`✅ ${chapter.id} migrated successfully\n`);
    } catch (error) {
      console.error(`❌ Error migrating ${chapter.id}:`, error);
      throw error;
    }
  }

  console.log('🎉 All content migrated successfully!');
}

/**
 * Main migration function
 */
async function runMigration() {
  try {
    console.log('========================================');
    console.log('   FIREBASE CONTENT MIGRATION TOOL');
    console.log('========================================\n');

    // Validate configuration
    if (firebaseConfig.apiKey === 'YOUR_API_KEY') {
      console.error('❌ ERROR: Firebase configuration not set!');
      console.log('\nPlease update the firebaseConfig in this script with your values from .env file');
      console.log('Or set environment variables before running the script.\n');
      process.exit(1);
    }

    // Step 1: Create admin document
    await createAdminDocument();

    // Step 2: Migrate content
    await migrateContent();

    console.log('\n========================================');
    console.log('   MIGRATION COMPLETED SUCCESSFULLY!');
    console.log('========================================\n');
    console.log('Next steps:');
    console.log('1. Go to Firebase Console > Firestore Database');
    console.log('2. Verify admin document exists in admins/ collection');
    console.log('3. Verify all chapters exist in content/ collection');
    console.log('4. Test login at: http://localhost:5173/admin');
    console.log('5. Edit content in the admin dashboard\n');
    
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    console.log('\nTroubleshooting:');
    console.log('1. Check Firebase configuration is correct');
    console.log('2. Verify security rules are deployed');
    console.log('3. Check internet connection');
    console.log('4. View full error above\n');
    process.exit(1);
  }
}

// Run the migration
runMigration();