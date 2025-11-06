// src/data/emoduleContent.ts
import type { Chapter } from '@/types/content';

export const emoduleContent: Chapter[] = [
  {
    id: 'chapter-01',
    title: 'Chapter 01: Introduction',
    icon: '📖',
    description: 'Overview of cancer, epidemiology, treatment methods, and adverse effects',
    subTopics: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: '' // Content handled by React component
      },
      {
        id: 'overview-cancer',
        title: 'Overview of Cancer',
        content: '' // Content handled by React component
      },
      {
        id: 'cancer-epidemiology',
        title: 'Cancer Epidemiology',
        content: '' // Content handled by React component
      },
      {
        id: 'cancer-management',
        title: 'Cancer Management',
        content: '' // Content handled by React component
      },
      {
        id: 'properties-hazardous-drugs',
        title: 'Properties of Hazardous Drugs',
        content: '' // Content handled by React component
      },
      {
        id: 'chemotherapy-adverse-effects',
        title: 'Chemotherapy and Adverse Effects',
        content: '' // Content handled by React component
      },
      {
        id: 'summary',
        title: 'Summary',
        content: '' // Content handled by React component
      }
    ]
  },
  {
    id: 'chapter-02',
    title: 'Chapter 02: Occupational Exposure',
    icon: '⚠️',
    description: 'Evidence of exposure, routes, and risk activities among healthcare workers',
    subTopics: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: '' // Content handled by React component
      }, 
      {
        id: 'evidence',
        title: 'Evidence of Occupational Exposure and AEs among HCWs',
        content: '' // Content handled by React component
      },
      {
        id: 'exposure-routes',
        title: 'Chemotherapy Exposure Routes and Risk Activities',
        content: ``
      },
      {
        id: 'summary',
        title: 'Summary',
        content: '' // Content handled by React component
      }
    ]
  },
  {
    id: 'chapter-03',
    title: 'Chapter 03: Hierarchical Controls',
    icon: '🛡️',
    description: 'Engineering controls, administrative measures, and PPE for safe handling',
    subTopics: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: '' // Content handled by React component
      },
      {
        id: 'standard-guidelines',
        title: 'Standard Guidelines',
        content: ''
      },
      {
        id: 'hierarchical-controls-overview',
        title: 'Hierarchical Controls',
        content: ''
      },
      {
        id: 'engineering-controls',
        title: 'Engineering Controls',
        content: ''
      },
      { 
        id: 'administrative-controls', 
        title: 'Administrative Controls', 
        content: ''
      },
      {
        id: 'equipment',
        title: 'Personal Protective Equipment',
        content: ''
      },
      {
        id: 'summary',
        title: 'Summary',
        content: '' // Content handled by React component
      }
    ]
  },
  {
    id: 'chapter-04',
    title: 'Chapter 04: Handling Recommendations',
    icon: '📋',
    description: 'Best practices for receiving, preparing, administering, and disposing',
    subTopics: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: '' // Content handled by React component
      },
      {
        id: 'receiving-storage',
        title: 'Receiving, Distribution, and Storage',
        content: ''
      },
      {
        id: 'compounding-hds',
        title: 'Compounding Hazardous Drugs',
        content: ''
      },
      {
        id: 'administration',
        title: 'Administration of Chemotherapy',
        content: ''
      },
      {
        id: 'waste-disposal',
        title: 'Disposal of Waste',
        content: ''
      },
      {
        id: 'cleaning-decontamination',
        title: 'Cleaning and Decontamination',
        content: ''
      },
      {
        id: 'spill-management',
        title: 'Cleaning HD Spills',
        content: ''
      },
      {
        id: 'protective-reassignment',
        title: 'Protective Reassignment',
        content: ''
      },
      {
        id: 'emergency-procedures',
        title: 'Emergency Procedures',
        content: ''
      },
      {
        id: 'training-personnel',
        title: 'Training Personnel',
        content: ''
      },
      {
        id: 'medical-surveillance',
        title: 'Medical Surveillance',
        content: ''
      },
      {
        id: 'summary',
        title: 'Summary',
        content: '' // Content handled by React component
      }
    ]
  },
  {
    id: 'chapter-05',
    title: 'Chapter 05: Safety Precautions',
    icon: '🎓',
    description: 'Factors affecting compliance and effectiveness of education programs',
    subTopics: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: '' // Content handled by React component
      },
      {
        id: 'barriers-safety',
        title: 'Barriers to Following Safety Precautions',
        content: ''
      },
      {
        id: 'education-impact',
        title: 'Impact of Education Programs',
        content: ''
      },
      {
        id: 'summary',
        title: 'Summary',
        content: '' // Content handled by React component
      }
    ]
  },
  {
  id: 'resources',
  title: 'Additional Resources',
  icon: '📚',
  description: 'References, glossary, acknowledgements, and supplementary materials',
  subTopics: [
    {
      id: 'overview',
      title: 'Overview',
      content: ''
    },
    {
      id: 'references',
      title: 'References',
      content: ''
    },
    {
      id: 'glossary',
      title: 'Glossary',
      content: ''
    },
    {
      id: 'acknowledgements',
      title: 'Acknowledgements',
      content: ''
    },
    {
      id: 'abbreviations',
      title: 'List of Abbreviations',
      content: ''
    }
  ]
}]
