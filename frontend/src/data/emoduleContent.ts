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
        content: `
          <h2>Engineering Controls</h2>
          <h3>Biological Safety Cabinets (BSC)</h3>
          <ul>
            <li>Provide controlled airflow with HEPA filtration</li>
            <li>Class II Type B2 recommended for hazardous drugs</li>
            <li>100% discharge of contaminated air to outdoors</li>
            <li>Regular maintenance and monitoring required</li>
          </ul>
          
          <h3>Compounding Aseptic Containment Isolators (CACI)</h3>
          <ul>
            <li>Physical barrier between product and operator</li>
            <li>Glove ports for manipulation</li>
            <li>HEPA filtration system</li>
            <li>Suitable for sterile compounding</li>
          </ul>
          
          <h3>Closed System Drug-Transfer Devices (CSTD)</h3>
          <ul>
            <li>Prevent leaks and generation of aerosols</li>
            <li>Luer-lock connections</li>
            <li>Reduce environmental contamination</li>
            <li>Supplement, not replace, primary engineering controls</li>
          </ul>
        `
      },
      {
        id: 'pre-requirements',
        title: 'Personal Protective Equipment',
        content: `
          <h2>Personal Protective Equipment (PPE)</h2>
          
          <h3>Gloves</h3>
          <ul>
            <li>Use double gloves (chemotherapy-tested)</li>
            <li>Latex, nitrile, or neoprene materials</li>
            <li>Change every 30 minutes or when contaminated</li>
            <li>Powder-free, sterile</li>
            <li>Long cuffs over gown sleeves</li>
          </ul>
          
          <h3>Gowns</h3>
          <ul>
            <li>Polyethylene-coated polypropylene material</li>
            <li>Back closure, closed cuffs</li>
            <li>No seams or closures allowing drug passage</li>
            <li>Change every 2-3 hours or after spills</li>
            <li>Disposable, not reusable</li>
          </ul>
          
          <h3>Respirators</h3>
          <ul>
            <li>N95 or higher NIOSH-certified</li>
            <li>Required for aerosol-generating activities</li>
            <li>PAPR for high-risk procedures</li>
            <li>Protection against airborne particles</li>
          </ul>
          
          <h3>Eye and Face Protection</h3>
          <ul>
            <li>Face shields plus goggles</li>
            <li>Protect against splashes</li>
            <li>Regular eyeglasses not sufficient</li>
          </ul>
          
          <h3>Additional Protection</h3>
          <ul>
            <li>Hair covers (including beards)</li>
            <li>Shoe covers (impervious material)</li>
            <li>Sleeve covers when needed</li>
          </ul>
        `
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
        content: `
          <h2>Receiving, Distribution, and Storage of Hazardous Drugs</h2>
          <h3>Key Requirements</h3>
          <ul>
            <li>All personnel must be trained in spill cleanup and PPE use</li>
            <li>Spill kits readily available in receiving areas</li>
            <li>Transport in closed, break-resistant containers</li>
            <li>Wipe each vial/ampoule before use (never spray directly)</li>
            <li>Wear appropriate PPE when handling damaged containers</li>
          </ul>
          
          <h3>Storage Requirements</h3>
          <ul>
            <li>Negative air pressure with minimum 20 ACH</li>
            <li>Separate storage from other drugs</li>
            <li>Temperature control (18°C-22°C)</li>
            <li>Clean storage areas monthly with detergent</li>
            <li>Label clearly as hazardous drugs</li>
            <li>Dedicated refrigerator for refrigerated drugs</li>
          </ul>
        `
      },
      {
        id: 'compounding-hds',
        title: 'Compounding Hazardous Drugs',
        content: `
          <h2>Compounding Hazardous Drugs</h2>
          <h3>Essential Requirements</h3>
          <ul>
            <li>Only trained personnel may compound</li>
            <li>Perform in certified C-PEC (BSC or isolator)</li>
            <li>Use strict aseptic technique</li>
            <li>Maintain HEPA-filtered air environment</li>
            <li>Negative air pressure to prevent contamination</li>
          </ul>
          
          <h3>Work Practices</h3>
          <ol>
            <li>Wash hands before donning PPE</li>
            <li>Wear full PPE (double gloves, gown, eye protection, respirator)</li>
            <li>Remove outer packaging and wipe all vials with alcohol</li>
            <li>Work on disposable plastic-backed paper liner</li>
            <li>Prime IV tubing inside ventilated cabinet</li>
            <li>Use CSTDs when transferring drugs</li>
            <li>Seal final dose in plastic bag before transport</li>
            <li>Remove outer gloves inside cabinet</li>
            <li>Wash hands immediately after removing gloves</li>
          </ol>
          
          <h3>C-SEC Requirements (Compounding Room)</h3>
          <ul>
            <li>Minimum 20 ACPH</li>
            <li>Externally vented</li>
            <li>HEPA exhaust filtration</li>
            <li>Temperature 18-22°C</li>
            <li>Humidity 40-60%</li>
            <li>Access restricted to authorized personnel only</li>
          </ul>
        `
      },
      {
        id: 'administration',
        title: 'Administration of Chemotherapy',
        content: `
          <h2>Administration of Chemotherapy</h2>
          
          <h3>Parenteral Administration</h3>
          <ul>
            <li>Wash hands before handling</li>
            <li>Have spill kit accessible</li>
            <li>Wear appropriate PPE throughout procedure</li>
            <li>Use CSTDs and locking connections</li>
            <li>Never prime tubing at patient bedside</li>
            <li>Flush lines before disconnecting</li>
            <li>Perform manipulations below eye level</li>
            <li>Check for leakage</li>
            <li>Manage extravasations promptly</li>
            <li>Dispose of equipment in designated containers</li>
            <li>Remove PPE properly to prevent contamination</li>
            <li>Wash hands immediately after</li>
          </ul>
          
          <h3>Oral Administration</h3>
          <ul>
            <li>Store as directed by manufacturer</li>
            <li>Use unit-dose packaging</li>
            <li>Encourage patient self-administration</li>
            <li>Use non-touch technique</li>
            <li>Never cut, crush, or split tablets outside BSC</li>
            <li>Discard damaged drugs appropriately</li>
            <li>Provide patient/caregiver instructions</li>
          </ul>
          
          <h3>Topical Administration</h3>
          <ul>
            <li>Use appropriate PPE</li>
            <li>Avoid contact with patient clothing</li>
            <li>Use disposable applicators</li>
            <li>Dispose all materials in cytotoxic waste</li>
            <li>Educate patients on proper application</li>
          </ul>
        `
      },
      {
        id: 'waste-disposal',
        title: 'Disposal of Waste',
        content: `
          <h2>Disposal of Waste</h2>
          
          <h3>Types of Hazardous Drug Waste</h3>
          <ul>
            <li>Unused cytotoxic/HD pharmaceuticals</li>
            <li>Empty drug containers</li>
            <li>Used sharps, syringes, ampoules, vials</li>
            <li>Contaminated packaging</li>
            <li>Disposable equipment (IV tubing, medicine cups)</li>
            <li>Disposable PPE</li>
            <li>Materials used for cleaning</li>
            <li>Patient excreta within 7 days of treatment</li>
            <li>Contaminated linen</li>
            <li>Patient specimens</li>
          </ul>
          
          <h3>Waste Handling Practices</h3>
          <ul>
            <li>All personnel must be trained in waste handling</li>
            <li>Never discard into wastewater or landfill</li>
            <li>Incineration at 1100°C is preferred method</li>
            <li>Always separate HD waste at first disposal</li>
            <li>Use leak-proof, sealable, puncture-resistant containers</li>
            <li>Label clearly as hazardous drug waste</li>
            <li>Double-bag soft materials</li>
            <li>Store in cool, locked, ventilated area</li>
          </ul>
          
          <h3>Patient Excreta Handling</h3>
          <ul>
            <li>Most drugs excreted within 7 days</li>
            <li>Avoid direct contact, use PPE</li>
            <li>Prevent aerosol generation</li>
            <li>Clean spills immediately</li>
            <li>May dispose in normal sewage system</li>
            <li>Place solid waste in cytotoxic waste bags</li>
          </ul>
        `
      },
      {
        id: 'cleaning-decontamination',
        title: 'Cleaning and Decontamination',
        content: `
          <h2>Deactivation, Decontamination, Cleaning and Disinfection</h2>
          
          <h3>Deactivation</h3>
          <p><strong>Purpose:</strong> Render compound inert or inactive</p>
          <ul>
            <li>Use EPA-registered oxidizers (peroxide formulations, sodium hypochlorite)</li>
            <li>Follow manufacturer recommendations for BSC/isolators</li>
            <li>Alcohol alone will NOT deactivate hazardous drugs</li>
            <li>Neutralize sodium hypochlorite to prevent corrosion</li>
          </ul>
          
          <h3>Decontamination</h3>
          <p><strong>Purpose:</strong> Remove HD residue</p>
          <ul>
            <li>Use validated decontamination materials</li>
            <li>Wipe surfaces (never spray)</li>
            <li>Decontaminate C-PEC daily when used</li>
            <li>Required after spills and before certification</li>
            <li>Wear respiratory protection during procedure</li>
          </ul>
          
          <h3>Cleaning</h3>
          <p><strong>Purpose:</strong> Remove organic and inorganic material</p>
          <ul>
            <li>Use germicidal detergent</li>
            <li>Do not clean during compounding activities</li>
            <li>Use cleaning agents that don't introduce microbial contamination</li>
          </ul>
          
          <h3>Disinfection</h3>
          <p><strong>Purpose:</strong> Destroy microorganisms</p>
          <ul>
            <li>Use EPA-registered disinfectant</li>
            <li>Surfaces must be cleaned before disinfection</li>
            <li>Required for sterile compounding areas</li>
          </ul>
        `
      },
      {
        id: 'spill-management',
        title: 'Cleaning HD Spills',
        content: `
          <h2>Cleaning HD Spills</h2>
          
          <h3>Spill Kit Contents</h3>
          <ul>
            <li>Instructions/safe work procedures</li>
            <li>Caution sign to quarantine area</li>
            <li>Complete PPE set (double gloves, gown, respirator, face shield, shoe covers, head cover)</li>
            <li>Absorbent materials (pads, towels, granules)</li>
            <li>Disposable scoop for glass</li>
            <li>Puncture-resistant container</li>
            <li>Thick plastic waste bags with ties</li>
            <li>Water for powder spills</li>
            <li>Decontamination agents</li>
          </ul>
          
          <h3>Spill Response Procedures</h3>
          <ol>
            <li>Post warning sign immediately</li>
            <li>Restrict access to area</li>
            <li>Don full PPE before approaching</li>
            <li>Contain spill with absorbent materials</li>
            <li>Clean from outside toward center</li>
            <li>Remove all contaminated materials</li>
            <li>Decontaminate surfaces</li>
            <li>Place all materials in cytotoxic waste</li>
            <li>Document incident with details</li>
            <li>Remove PPE carefully</li>
            <li>Wash hands thoroughly</li>
          </ol>
          
          <h3>Types of Spills</h3>
          <ul>
            <li>Liquid or powder spills</li>
            <li>Leaking during handling/transport</li>
            <li>Spills during administration</li>
            <li>Drug-contaminated waste leakage</li>
            <li>Contaminated body substance spills</li>
          </ul>
        `
      },
      {
        id: 'protective-reassignment',
        title: 'Protective Reassignment',
        content: `
          <h2>Protective Reassignment of Workers</h2>
          
          <h3>At-Risk Workers</h3>
          <ul>
            <li>Pregnancy (especially first trimester)</li>
            <li>Intent to conceive</li>
            <li>Lactation</li>
            <li>Illness or abnormal lab results</li>
            <li>Medical conditions requiring avoidance</li>
          </ul>
          
          <h3>Employer Responsibilities</h3>
          <ul>
            <li>Develop written reassignment policy</li>
            <li>Ensure workers understand HD risks</li>
            <li>Offer alternative duties when notified</li>
            <li>Collaborate with employee's physicians</li>
            <li>Identify available alternative options</li>
            <li>Educate staff on reassignment procedures</li>
          </ul>
          
          <h3>Reassignment Options</h3>
          <ul>
            <li>Transfer to HD-free areas</li>
            <li>Assign tasks without HD exposure</li>
            <li>Reduce hours in HD handling areas</li>
            <li>Temporary role modifications</li>
          </ul>
        `
      },
      {
        id: 'emergency-procedures',
        title: 'Emergency Procedures',
        content: `
          <h2>Emergency Procedures for Personnel Contamination</h2>
          
          <h3>Immediate Actions for Skin Contact</h3>
          <ol>
            <li>Remove contaminated gloves/gown/clothes immediately</li>
            <li>Cleanse affected skin with soap and water</li>
            <li>Follow SDS decontamination procedures</li>
            <li>Seek medical attention promptly</li>
          </ol>
          
          <h3>Eye Exposure Protocol</h3>
          <ol>
            <li>Flood affected eye at eyewash fountain</li>
            <li>Continue for at least 15 minutes</li>
            <li>Use water or isotonic eyewash (normal saline)</li>
            <li>Seek immediate medical evaluation</li>
          </ol>
          
          <h3>Medical Follow-up</h3>
          <ul>
            <li>Physical examination of exposure site</li>
            <li>Baseline blood tests (FBC, LFT)</li>
            <li>Focus on target organs of specific drug</li>
            <li>Schedule appropriate follow-up based on drug half-life</li>
            <li>Document exposure in medical record</li>
            <li>Report incident immediately</li>
          </ul>
          
          <h3>Emergency Facility Requirements</h3>
          <ul>
            <li>Emergency kits with PPE and supplies</li>
            <li>Eyewash fountains</li>
            <li>Emergency shower</li>
            <li>Running water</li>
            <li>Sterile saline for irrigation</li>
            <li>Posted emergency procedures</li>
          </ul>
        `
      },
      {
        id: 'training-surveillance',
        title: 'Training and Medical Surveillance',
        content: `
          <h2>Training Personnel and Medical Surveillance</h2>
          
          <h3>Training Requirements</h3>
          <p>All staff handling HDs must receive training:</p>
          <ul>
            <li><strong>Initial training:</strong> When first assigned</li>
            <li><strong>Annual training:</strong> Refresher every 12 months</li>
            <li><strong>Role-specific content:</strong> Based on job responsibilities</li>
          </ul>
          
          <h3>Training Content</h3>
          <ul>
            <li>Adverse health effects of HD exposure</li>
            <li>Routes of occupational exposure</li>
            <li>Selection and use of PPE</li>
            <li>Selection and use of engineering controls</li>
            <li>Work practices for each handling step</li>
            <li>Patient care considerations</li>
            <li>Spill management and emergency exposure</li>
            <li>Recognition of cytotoxic drugs</li>
            <li>Location and use of safety stations</li>
            <li>Hospital policies and procedures</li>
            <li>Role of medical surveillance program</li>
          </ul>
          
          <h3>Competency Assessment</h3>
          <ul>
            <li>Knowledge questionnaires</li>
            <li>Observation checklists</li>
            <li>Skills demonstration</li>
            <li>Policy compliance evaluation</li>
          </ul>
          
          <h2>Medical Surveillance</h2>
          
          <h3>Program Elements</h3>
          <ol>
            <li><strong>Worker Registry:</strong> Maintain list of all HD-exposed workers</li>
            <li><strong>Baseline Assessment:</strong>
              <ul>
                <li>Health status review</li>
                <li>Medical and reproductive history</li>
                <li>HD exposure history</li>
                <li>Physical examination</li>
                <li>Laboratory testing (FBC, LFT)</li>
              </ul>
            </li>
            <li><strong>Periodic Evaluation:</strong>
              <ul>
                <li>Updated health/exposure history</li>
                <li>Physical assessment</li>
                <li>Laboratory measures as appropriate</li>
              </ul>
            </li>
            <li><strong>Follow-up Plan:</strong>
              <ul>
                <li>Monitor health changes suggesting toxicity</li>
                <li>Evaluate after acute exposure</li>
                <li>Review engineering/administrative controls</li>
                <li>Document spills and cleanup activities</li>
              </ul>
            </li>
          </ol>
          
          <h3>Record Keeping</h3>
          <ul>
            <li>Training dates and topics</li>
            <li>List of participants</li>
            <li>Course evaluations</li>
            <li>Competency assessments</li>
            <li>Exposure incidents</li>
            <li>Medical surveillance results</li>
          </ul>
        `
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
