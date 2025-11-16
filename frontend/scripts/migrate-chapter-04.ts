// FILE: scripts/migrate-chapter-04.ts
// Chapter 4 Migration Script - Handling Recommendations
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

// COMPLETE CHAPTER 04 DATA
const chapter04Data = {
  id: 'chapter-04',
  title: 'Chapter 04: Handling Recommendations',
  icon: '📋',
  description: 'Best practices for receiving, preparing, administering, and disposing hazardous drugs',
  sections: {
    intro: {
      id: 'intro',
      title: 'Introduction',
      order: 0,
      data: {
        chapterNumber: '04',
        description: 'The fourth chapter of this content describes detailed recommendations for safe handling of chemotherapy and other hazardous drugs.',
        note: 'Oncology nurses are expected to reach learning outcomes and practical competencies at the end of the study of the learning content of Chapter 04.',
        tableTitle: 'Learning Outcomes & Practice Competencies & Learning Content',
        tableRows: {
          _order: 1,
          headers: {
            col0: "Topic",
            col1: "Key Areas Covered"
          },
          rows: {
            row0: { col0: "Receiving, distribution, and storage of HDs", col1: "Safety precautions and storage requirements" },
            row1: { col0: "Compounding HDs", col1: "Work practices and technical requirements" },
            row2: { col0: "Transport compounded HDs", col1: "Safe transportation methods" },
            row3: { col0: "Administration of chemotherapy", col1: "Parenteral, oral, and topical administration" },
            row4: { col0: "Disposal of waste", col1: "Waste types and disposal procedures" },
            row5: { col0: "Cleaning and decontamination of HD equipment and work surfaces", col1: "Deactivation and cleaning procedures" },
            row6: { col0: "Deactivation renders a compound inert or inactive", col1: "Chemical deactivation methods" },
            row7: { col0: "Cleaning HD Spills", col1: "Spill management procedures" },
            row8: { col0: "Handling of contaminated bed linen", col1: "Safe handling practices" },
            row9: { col0: "Recommendations to avoid exposure during pregnancy", col1: "Protective reassignment" },
            row10: { col0: "Emergency procedures for personnel contamination", col1: "Response protocols" },
            row11: { col0: "Training personnel in handling HDs", col1: "Education requirements" },
            row12: { col0: "Medical Surveillance", col1: "Health monitoring programs" }
          }
        }
      }
    },

    receiving: {
      id: 'receiving',
      title: 'Receiving, Distribution, and Storage of HDs',
      order: 1,
      data: {
        mainIntro: 'A trace amount of drugs may contaminate the outside of the containers during the manufacturing process. Drug transportation, distribution and storage may cause drug spills, damage, or leaking from containers. Therefore, all personnel involved in receiving, distribution, and storage should wear appropriate PPE and follow the safety precautions mentioned below.',
        
        criticalPractice: 'All personnel who receive HDs from manufacturers or distributors, and store them, must be trained to wear full PPE, use a respirator and perform spill cleanup.',
        
        safetyPrecautions: [
          'All personnel who receive HDs from manufacturers or distributors, and store them, must be trained to wear full PPE, use a respirator and perform spill cleanup.',
          'HD spill kits must be readily available in the receiving area.',
          'Transportation and storage of HDs should be done in closed containers that minimize the risk of breakage.',
          'Each HD vial should be wiped using a wiper wetted with alcohol or another appropriate solution. Never use sprays to minimize the generation of airborne particles and contamination. The wiper should be contained and disposed of after use.',
          'When assessing a potentially damaged container, personnel should wear one or two pairs of gloves that have been tested and approved for use in handling HDs.',
          'If there is apparent damage to the packaging, full PPE consisting of double gloves, gown, eye protection, and respirator should be used. Additionally, the operator should use the spill kit to clean up and remove the damaged drug containers and packaging.',
          'The chemotherapy drug storage area must have appropriate ventilation. Ideally, negative air pressure with at least air changes per hour needs to be maintained to reduce drug residue (sufficient general exhaust ventilation dilutes and removes any airborne contaminants).',
          'Storage areas/ bins must be cleaned at least every 30 days with detergent solutions. A diluted bleach solution may also be used if the container is resistant to damage from bleach. Avoid using sprays to minimize aerosol/particle generation.',
          'Store HDs separately from other drugs to prevent possible contamination.',
          'Depending on the physical nature and quantity of the stored drugs, consider installing a dedicated emergency exhaust fan that is large enough to quickly purge airborne contaminants from the storage room in the event of a spill and prevent contamination in adjacent areas.'
        ],
        
        warningNote: 'Never use sprays when cleaning HD vials or storage areas to minimize the generation of airborne particles and contamination.'
      }
    },

    compounding: {
      id: 'compounding',
      title: 'Compounding Hazardous Drugs',
      order: 2,
      data: {
        workPracticesIntro: 'Work practices used in compounding the HDs are mentioned below.',
        
        essentialRequirement: 'Only trained individuals need to compound the HDs. (All staff who use BSC/isolators should train to use related equipment and maintain proper techniques).',
        
        compoundingPractices: [
          'Reconstitution and preparation must be performed in a controlled area (such as a cleanroom), technically referred to as C-SEC. It should be limited to authorized individuals and should be notified as "Cytotoxic Preparation Area. Access Restricted to Authorized Personnel Only".',
          "Strict aseptic techniques should be used in the compounding of all sterile doses, whether the drug is hazardous or not. (Sterility must be preserved within the HD container, syringe, IV bag and work area or surface).",
          "The compounding process and all related activities (unpacking containers, handling vials, manipulation, reconstitution, handling finished products, labelling final doses, and disposing of waste) need to be conducted in a C-PEC (BSC/isolator). If no PEC is available, the HD should be prepared in a quiet workspace, away from heating and cooling vents and away from other personnel.",
          "A well-functioning HEPA-filtered air environment needs to be maintained with the C-PEC. Negative air pressure prevents contamination (product, operator and environment contamination). HEPA-filtered air, acronym for High-Efficiency Particulate Air. It can remove at least 99.97% of particles [e.g., dust, pollen, mould, bacteria, any airborne particles] with a size of 0.3 microns.",
          "The air floor should be vertical, and a horizontal laminar floor hood is never recommended for cytotoxic preparations due to the high risk of worker contamination.",
          "Centralized preparation needs to be done.",
          "Good preparation techniques are critical.",
          "Wash your hands before putting on PPE.",
          "Full PPE (HD-tested double gloves, gown, respirator, and eye protection) should be used for compounding and all related activities. Safe work practices about the use of PPE are mandatory (as described in Chapter 03).",
          "Remove the outer packaging and wipe off all vials with a moist alcohol wipe to remove HD residue that may contaminate the outer surfaces. (Avoid sprays to minimize particle/ aerosol generation and surface contamination). Discard the used alcohol wipe in a containment bag for appropriate disposal.",
          "Sanitize the fresh outer glove with isopropyl alcohol gel before compounding.",
          "Work should be done on a disposable plastic-backed paper liner. The liner should be changed after the preparation is completed. Used liners should be disposed of as contaminated waste.",
          "Prime the IV tubing and syringes inside the C-PEC (BSC/isolators), and avoid priming in other areas. Additionally, IV tube priming must be performed before adding the HD.",
          "Use supplementary engineering controls (e.g., CSDTs, needleless systems) when transferring HDs from primary packaging (e.g.: vials) to dosing equipment (e.g.: infusion bags, bottles, or pumps). It reduces the generation of aerosols and exposure risk. However, supplementary engineering controls should not be used as an alternative to PEC (BSCs, or isolators).",
          "When drug preparation is complete, seal the final dose in a plastic bag or other sealable container for transport, then remove it from the ventilated cabinet. Seal and wipe all waste containers inside the ventilated cabinet before removing them from the cabinet.",
          "Remove all outer gloves, sleeve covers and bag them for disposal within the inside of the BSC/ isolator.",
          "Immediately after removing gloves, hands must be washed with soap and water.",
          "Manufacturer's guidelines are preferred in cleaning PEC. Disinfect with 70% isopropyl alcohol before sterile compounding. Additionally, it has been found that using a detergent and bleach solution followed by thorough rinsing with sterile water after compounding HDs is also effective."
        ],
        
        ssecRequirements: [
          "A minimum Air Change Per Hour (ACH) of 20 room volumes is required.",
          "The air from the workplace must be exhausted into the atmosphere to prevent personnel exposure. According to USP 800, primary and secondary engineering controls (preparation room, buffer room, anteroom) used to compound sterile doses of chemotherapy/ HDs must be externally vented.",
          "To reduce contamination, a HEPA exhaust filter should be used.",
          "A temperature range of 18°C to 22°C is acceptable.",
          "Isolators (CACIs) require sterilization with hydrogen peroxide. A relative humidity level of 50% must be maintained between 40% and 60%.",
          "Refrigerated HDs must be stored in a dedicated refrigerator in a negative-pressure area.",
          "Parameters to be monitored for microbiological and particulate contamination, HEPA filtration, air velocity, and pressure differentials."
        ],
        
        criticalNote: 'If no PEC is available, prepare HD in a quiet workspace away from heating/cooling vents and other personnel. However, this is NOT recommended practice.'
      }
    },

    transport: {
      id: 'transport',
      title: 'Transport Compounded HDs',
      order: 3,
      data: {
        transportIntro: 'Final, ready-to-administer dosage forms should be safely transported to the administration area or the patient\'s unit from the preparation site (pharmacy). Related recommendations are as outlined below. Trained personnel must handle transportation with proper precautions.',
        
        transportRequirements: [
          "Trained persons need to transport drugs, and precautions must be taken to avoid dropping and contamination.",
          'IV bags must be connected to primed IV lines (Priming should be done before adding HDs). All final doses should be double-bagged and placed in thick, sealed containers until they are sent to patient areas. In addition to patient-specific labelling, auxiliary labels indicating "Hazardous Drug" should be affixed to the dose and the transport bag.',
          "Doses in syringes must be precise and require no further manipulation.",
          "Affix 'Hazardous Drug' auxiliary labels to dose and transport bag",
          "Doses in syringes must be precise and require no further manipulation",
          "Most organizations use manual transportation rather than mechanical transportation, such as pneumatic tubes, to minimize the risk of breakage and leakage. The use of transport bags prevents spills and protects the handler from being exposed. If pneumatic tubes are used, standard pneumatic tubes designed to transport investigation samples or other items should not be used to transport the HDs due to the risk of possible contamination. However, pressure within pneumatic tubes may cause leakage.",
          "Also, a spill kit should be available during the transportation of HDs, and only trained personnel need to be involved in any case of cleaning up any spill if it happens during the transportation."
        ],
        
        transportRisk: 'Pressure within pneumatic tubes may cause leakage. Use transport bags to prevent spills and protect handlers from exposure.'
      }
    },

    administration: {
      id: 'administration',
      title: 'Administration of Chemotherapy',
      order: 4,
      data: {
        administrationIntro: 'Chemotherapy and other HDs should only be administered by nursing, medical, and pharmacy staff with adequate training, competency, and credentialing. Exposure may occur through all possible routes. Despite best practices, the external surfaces of a manufactured product can still be contaminated with drugs. Thus, nurses are at greater risk of getting exposure to HDs during the drug administration process. Therefore, nurses should use appropriate PPE and follow proper techniques throughout the whole procedure.',
        
        exposureRisk: 'Connection and disconnection of HD containing IV bags or syringes pose a risk of generating aerosols, particulates, possible spills or splashes, inhalation, dermal contact, and needle prick injuries.',
        
        parenteralPrecautions: [
          "Have access to a spill kit. In the event of a spill, cytotoxic spill procedures should be followed.",
          "Follow hand washing before handling HDs. Put on PPE before removing HD from the delivery container. Inspect the delivery container and its contents before handling.",
          "Wear appropriate PPE (chemotherapy-tested double gloves, gown, respirator, face shield, goggles) for all activities associated with drug administration (e.g., opening the outer bag, assembling the delivery system, delivering the drug to the patient, and disposing of all equipment used to administer drugs).",
          "Use CDTDs/ locking connections (e.g.: Luer-Lok, needleless) whenever possible to securely attach IV tubing, syringes, and needles. CSTDs reduce the risk of contamination (HCW and environment) during the compounding process and administration.",
          "Priming of IV tubing needs to be done within the ventilated cabinet (or isolator) before adding the HDs drug, and avoid priming the HDs into another place (gauze pads, sinks, waste containers or any space in the patient or administration unit).",
          "Administration lines should only be disconnected after the IV drug has been thoroughly flushed with a compatible non-cytotoxic solution.",
          "Limit equipment and materials in a BSC to those required to prepare one dose for one patient to avoid overcrowding and medication errors.",
          "Perform all manipulations below eye level.",
          "Check syringes and IV tubes for leakage.",
          "Manage extravasations promptly.",
          "Maintain close supervision",
          "Avoid contact with fluids from body cavities after administration of the drugs (e.g.: after intraperitoneal, intrapleural administration and bladder irrigation).",
          "Dispose of equipment used in HD administration (IV sets/ syringes, and other used items) into designated waste containers. Double-bag the chemotherapy waste before removing the inner gloves. Consider double-bagging all contaminated equipment.",
          "Dispose of used PPE appropriately to prevent contamination of hands and clothing. Gowns should not be reused.",
          "Wash hands with soap and water immediately after removing PPE, and before leaving the drug administration site.",
          "Approximately seal and return unused HDs (e.g., un-spiked/ unopened IV bags) to the drug preparation unit (Pharmacy)."
        ],
        
        oralPractices: [
          "Store oral preparations as directed by the manufacturer/ pharmacy.",
          "Pack in individual packages (unit-dose). Patients should self-administer where possible. Use non-touch techniques when transferring medicines and avoid direct contact with oral forms.",
          "Manipulation of HD tablets or capsules (cutting, crushing, splitting) to prepare unit doses, liquid preparations or mixtures requires BSC and strictly avoid using other locations to prevent airborne particles.",
          "Isolate and discard damaged/ expired drugs as instructed by the manufacturer or pharmacy.",
          "Any equipment used for the parenteral, oral, or topical administration of cytotoxic drugs should be immediately disposed of in a designated cytotoxic bin.",
          "Instructions (exposure methods, safe handling techniques) need to be provided to the patient/caregiver to minimize contamination (HCW/ caregiver/environment)."
        ],
        
        topicalPractices: [
          "Use appropriate PPE",
          "Avoid contact with patient's clothing",
          "Avoid unnecessary contact with the topical cytotoxic drug",
          "Use the disposable spatula to apply ointment-like preparations",
          "Disposal of all contaminants to cytotoxic waste bins",
          "Educate patients on topical applications to minimize environmental exposure"
        ],
        
        criticalPractice: 'Priming of IV tubing must be done within the ventilated cabinet before adding HDs. Never prime HDs at patient bedside, into gauze pads, sinks, or waste containers.',
        
        patientEducation: 'Provide clear instructions on exposure methods and safe handling techniques to minimize contamination of healthcare workers, caregivers, and environment.'
      }
    },

    waste: {
      id: 'waste',
      title: 'Disposal of Waste',
      order: 5,
      data: {
        wasteIntro: 'HD waste is a potential source of occupational exposure to HDs. Waste contaminated with cytotoxic/ HDs, their metabolites, and any residual cytotoxic drugs produced during the handling process (reconstitution, preparation, administration) is generally considered drug waste. Therefore, safe work procedures for handling and disposing of HD waste ensure occupational health and environmental safety.',
        
        criticalRequirement: 'All personnel performing routine custodial waste removal and cleaning activities in HD handling areas must be trained in appropriate procedures to protect themselves and the environment.',
        
        wasteTypes: [
          'Unused cytotoxic / HD pharmaceuticals',
          'Any material contact with HD (contaminated waste) preparation procedures',
          'HDs that are to be disposed of (Eg, Empty containers used to prepare drugs)/ used and contaminated sharps/ syringes, ampoules, and vials',
          'Packages contact/ contaminated with the HDs',
          'Disposable equipment used to handle HDs (Eg, syringes, needles, IV set, medicine cups)',
          'Disposable PPE (gloves, gowns, respirators, shoe covers)',
          'Materials used to clean contaminated surfaces, equipment, or spills.',
          'Contaminated body substances, excreta (vomit, or bodily fluids), dressings, and bandages of patients who are treated with HDs. The majority of drugs are excreted within the first seven days after administration, and some drugs may exist longer',
          'Contaminated linen',
          'Disposable materials contaminated with excreta of patients who are treated with HDs',
          'Specimens of patients receiving HDs for investigations'
        ],
        
        handlingPractices: [
          "All personnel who perform routine custodial waste removal and cleaning activities in HD handling areas must be trained in the appropriate procedures to protect themselves and the environment, preventing HD contamination.",
          "Consider all HD waste, unused HDs, trace-contaminated PPE, and other materials used in handling HDs to be contaminated with, at a minimum, trace quantities of HDs. Therefore, waste must be placed in an appropriate waste container and disposed of in accordance with local, State, and federal regulations.",
          "PPE, such as gloves and sleeve covers (if used), worn during compounding should be disposed of in the proper waste container before leaving the C-PEC (BSC/ isolator).",
          "Waste handling efforts should minimize the risk of contaminating the local water supply and/or soil with HDs, and HD waste should never be discarded into wastewater (such as sinks or toilets) or a landfill.",
          "Incineration (burning at 1100°C) is the preferred disposal method for most HD waste. However, only special incinerators are effective in removing some of the HD residues. Therefore, terminal disposal must be performed by a certified hazardous waste organization in accordance with local regulations.",
          "Transport to terminal discarding/ incineration locations needs to be done using appropriate PPE after sealing them.",
          "HD waste must always be separated from other waste at the first disposal."
        ],
        
        containerRequirements: [
          'Leak-proof and sealable',
          'Puncture and fluid-resistant',
          'Designated for use with HDs (e.g.: Double-bagging and foot-paddling waste bins)',
          'Clearly labelled as designated for HDs'
        ],
        
        storageRequirements: [
          'Store HD waste in a cool, locked, ventilated area.',
          'Isolate the storage area for HD waste from other workplace areas as much as possible.',
          'Store HD waste in a manner that reduces the risk of leaks and spills, such as by having shelves with lipped edges.',
          'Use materials that are easy to clean, such as stainless steel'
        ],
        
        excretaHandling: [
          'Avoid direct contact with body waste and use appropriate PPE',
          'Prevent the generation of inhalable drug particles or aerosols',
          'Cleaning body waste spills immediately',
          'Use urine hats where possible to minimize the generation of aerosols',
          'Excreta (urine, faeces, colostomy bags, urostomy bags, vomit) may be disposed of in the normal sewage system. However, those waste (nappies, colostomy, urostomy bags) need to be placed in cytotoxic waste bags',
          'Consider the use of indwelling catheters for incontinent patients',
          'Laboratory specimens need to be labelled with cytotoxic warnings',
          'Solid linen and clothing are potentially contaminated'
        ],
        
        excretaNote: 'Most drugs are excreted within 7 days. Avoid direct contact using PPE. May dispose in normal sewage system, but place solid waste in cytotoxic waste bags.'
      }
    },

    cleaning: {
      id: 'cleaning',
      title: 'Deactivation, Decontamination, Cleaning and Disinfection',
      order: 6,
      data: {
        cleaningIntro: 'All areas where HDs are handled, as well as all reusable equipment and devices, must be suitably deactivated, decontaminated, and cleaned. Additionally, sterile compounding areas and devices must be subsequently disinfected. All personnel performing these steps must be trained in the appropriate procedures to protect themselves and the environment from contamination.',
        
        proceduresIntro: 'Written procedures should be available for all steps, including the agents used, dilutions (if applicable), and the frequency of use. Those procedures could be adopted from the standards (e.g., USP Chapter 795- Nonsterile compounding areas, USP Chapter 797 - Sterile compounding areas). Adhering to recommended standards, all personnel performing these activities must wear appropriate PPE resistant to the cleaning agents used, including two pairs of chemotherapy gloves, impermeable disposable gowns, eye protection and face shields (if there is a risk of splashing) and respiratory protection.',
        
        agentSelection: 'The deactivating, decontaminating, cleaning, and disinfecting agents selected must be appropriate for the type of HD contaminant(s), location, and surface materials. The products used must be compatible with the surface material. Manufacturer or supplier information is always needed. Wipes wetted with the appropriate solution (s) need to be used; sprays should not be used to avoid spreading HD residue. All disposable materials must be disposed of in accordance with Environmental Protection Agency (EPA) regulations and the entity\'s policies. Table shows the cleaning steps, purpose and cleaning agents.',
        
        ppeRequirement: 'All personnel must wear appropriate PPE resistant to cleaning agents: two pairs of chemotherapy gloves, impermeable disposable gowns, eye protection, face shields (if splash risk), and respiratory protection.',
        
        deactivation: {
          purpose: 'Render compound inert or inactive HDs',
          requirements: [
            "A single process has not been found to deactivate all currently available HDs.",
            "Applying alcohol to PEC (BSCs or isolators), or other contaminated surfaces, will not deactivate any HDs and may result in the spread of residue and further contamination. Therefore, PECs should be decontaminated according to the manufacturer's recommendations.",
            "A, deactivating materials need to be selected carefully, because they may produce hazardous byproducts, respiratory effects, and caustic damage to surfaces.",
            "Surface damage /corrosion of stainless-steel surfaces caused by sodium hypochlorite, if left untreated. Therefore, sodium hypochlorite must be neutralized with sodium thiosulfate or a suitable agent (e.g.: sterile alcohol, sterile water, germicidal detergent, or sporicidal agent)."
          ],
          exampleAgents: 'Agents listed in HD labelling, EPA-registered oxidizers (peroxide formulations, sodium hypochlorite, etc.).',
          warning: 'Sodium hypochlorite must be neutralized with sodium thiosulfate or suitable agent (sterile alcohol, sterile water, germicidal detergent) to prevent stainless-steel corrosion.'
        },
        
        decontamination: {
          purpose: 'Remove HD residue by inactivating, neutralizing, or physically removing it from various places (non-disposable surfaces, disposable materials (e.g.: wipes, pads, towels), and areas to be cleaned)',
          requirements: [
            "When selecting suitable agents, surface compatibility and facility requirements need to be considered.",
            "Surface wipe sampling should be used in accordance with the manufacturer's guidelines for appropriate decontamination and to prevent the spread of particles/ aerosols.",
            "The C-PEC (BSc/ isolators) must be decontaminated at least daily (when used), anytime a spill occurs, before and after certification, any time voluntary interruption occurs, if the ventilation tool is moved, and when compounding different HDs.",
            "The decontamination solution should not alter the HD packaging/ product label (due to the possibility of missing information).",
            "Also, respiratory protection is required during the procedure to protect the worker."
          ],
          exampleAgents: 'Validated materials for HD decontamination, as well as other materials, have proven effective (e.g.: alcohol, water, peroxide, or sodium hypochlorite).'
        },
        
        cleaningStep: {
          purpose: 'Remove organic and inorganic materials (e.g., soil, microbial contamination, HD residue) from objects and surfaces using water, detergents, surfactants, solvents, and/or other chemicals',
          requirements: [
            "Cleaning agents used on compounding equipment should not introduce microbial contamination.",
            "Cleaning steps are not performed when compounding activities are occurring.",
            "Also, cleaning agents do not act directly on the HDs."
          ],
          exampleAgents: 'Germicidal detergent (e.g., Chlorhexidine)'
        },
        
        disinfection: {
          purpose: 'Destroy microorganisms',
          requirements: [
            "Before disinfection, surfaces must be adequately cleaned."
          ],
          exampleAgents: 'EPA-registered disinfectant and/or sterile alcohol',
          note: 'Disinfection is only effective after proper cleaning. Always clean first, then disinfect.'
        }
      }
    },

    spill: {
      id: 'spill',
      title: 'Cleaning HD Spills',
      order: 7,
      data: {
        spillIntro: 'It is essential to have a clearly labelled and complete spill kit immediately available in all areas where HDs are handled (areas where HDs are received, stored, transported, compounded, administered, and waste is dealt with). HD spill kits must include all PPE (approved gloves, respirator, goggles and/or face shield and gowns) and all other content/equipment for an effective cleaning process. The contents of the spill kit need to be regularly reviewed. All PPE must protect the HDs and well-trained personnel required to handle the drug spills.',
        
        criticalRequirement: 'Only trained individuals should clean spills with adequate PPE. Each employee involved with handling HDs should be familiar with the location and use of spill kits.',
        
        impactIntro: 'Drug spills can cause contamination of the floor, work surface, equipment, bedding, clothing, and personal contamination. It may result in contamination of patients, HCWs, caregivers and environmental contamination.',
        
        spillTypes: [
          'Spills of any dosage form (liquid, powder forms, tablets, capsules, ointment, cream, etc.)',
          'Spilt or leaked during the handling process (preparation, storage, transport, administration and disposal)',
          'Leaking drugs following disposal',
          'Spill or leakage during transport of the final drug dose',
          'Drug-contaminated waste',
          'Contaminated body waste/substances'
        ],
        
        responseProtocol: 'The spill area should be restricted to authorized participants, identified by a warning sign, and must be cleaned up using a spill kit. Incident reports on HD spills, including types of spills, exposed persons and procedures, need to be well-documented. The contaminated waste generated by HD spills must be disposed of in cytotoxic waste bin.',
        
        keyRequirements: [
          'Restrict access to authorized personnel only',
          'Post warning signs immediately',
          'Use appropriate spill kit',
          'Document all incidents thoroughly',
          'Only trained personnel clean spills'
        ],
        
        spillKitDocumentation: [
          'Instructions/safe work procedures for using a spill kit',
          'Caution sign to quarantine spill-out area (Sign saying "Caution Hazardous Drug Spill")'
        ],
        
        spillKitPPE: [
          'Two pairs of disposable chemical-protective gloves',
          'Low permeability, disposable protective garment (gown or coverall, shoe covers)',
          'Face shield (full-face chemical splash shield or safety glasses)',
          'Respirator (N95 or better)',
          'Head cover',
          'Overshoe'
        ],
        
        spillKitAbsorbents: [
          'Adequate number of absorbent materials – swabs, pillows, chemical absorbent mats or granules, spill pads, disposable towels'
        ],
        
        spillKitEquipment: [
          'A disposable scoop for collecting glass fragments',
          'A puncture-resistant container or sealable, thick plastic waste disposal bags and ties',
          'Water for powder spills',
          'Suitable decontaminants/cleaning agents'
        ],
        
        linenIntro: 'HDs or their metabolites may be present in urine, blood, faeces, sweat, and vomit, bed linen such as sheets, blankets, and pillowcases, which are contaminated with drugs or drug products. Therefore, care should be taken when handling these materials, as with other waste products.',
        
        linenHandling: 'A typical recommendation is to wear protective gloves when handling contaminated linen and to place it in a labelled bag so that it can be prewashed separately and then washed with the regular laundry. The washing procedure must be followed twice for contaminated linen using the washing machine and appropriate detergent/ washing powder. Contaminated items need to be washed separately with warm water and laundry detergent.',
        
        emergencyFacilities: [
          'Emergency kits with PPE and supplies',
          'Eyewash fountains',
          'Emergency shower',
          'Running water access',
          'Sterile saline for irrigation',
          'Posted emergency procedures'
        ],
        
        handlingProtocol: [
          'Wear protective gloves when handling contaminated linen',
          'Place contaminated linen in a clearly labelled bag',
          'Prewash separately from regular laundry',
          'Wash twice using washing machine and appropriate detergent/washing powder',
          'Wash contaminated items separately with warm water and laundry detergent'
        ]
      }
    },

    reassignment: {
      id: 'reassignment',
      title: 'Protective Reassignment',
      order: 8,
      data: {
        whyReassignment: 'Teratogenicity and reproductive effects are characteristics of HDs, and a vast literature reports miscarriage or spontaneous abortions, infertility, preterm births and learning disabilities in offspring with exposure to chemotherapy during pregnancy. Protective reassignment is required for risk categories (e.g., parenthood consideration such as pregnancy, intent to conceive, lactation, and having an illness or abnormal pathological results). Assigning a worker to alternative tasks that reduce the risk of exposure to HDs. Recommendations outlined below are made to avoid exposure and related risks during pregnancy or the risk period, and to minimize the potential AEs.',
        
        employerIntro: 'Employers have a responsibility to ensure workers understand the risks of exposure to HDs.',
        
        employerResponsibilities: [
          'The employer must develop a written policy about the availability of protective reassignment for appropriate workers (pregnant, intend to conceive, lactation, and medical reasons to avoid exposure).',
          "For employees trying to conceive or who are pregnant, collaboration with the employee's primary care physician and obstetrician/gynaecologist should be part of the decision-making process.",
          'Upon notification that a staff member has a medical reason to avoid exposure to HDs, employers should offer those staff members the option of alternative duties, if available.',
          'Each healthcare setting should identify available options for alternative duties and educate staff on these options.',
          'All staff involved in the handling and administration of HDs should be familiar with and adhere to local and national policies, as well as follow safe practices with HDs using standard operating procedures.'
        ],
        
        reassignmentExamples: [
          'Transfer workers to a different area that does not involve exposure to HDs',
          'Assigning the workers to tasks where they will not be exposed to HDs',
          'Reducing hours worked in areas where HDs are handled'
        ],
        
        atRiskCategories: [
          'Pregnant workers',
          'Workers trying to conceive',
          'Lactating workers',
          'Workers with medical conditions'
        ],
        
        alternativeOptions: [
          'Transfer to non-HD areas',
          'Assign non-HD tasks',
          'Reduce HD exposure hours',
          'Temporary role modification'
        ]
      }
    },

    emergency: {
      id: 'emergency',
      title: 'Emergency Procedures',
      order: 9,
      data: {
        emergencyIntro: 'Dermal contamination and inhalation of HDs are considered the primary sources of occupational exposure to them. Many HDs are absorbed through the skin, mucous membrane and respiratory system. Therefore, procedures must be in place to address personnel contamination and protocols for medical attention must be developed before any direct contact occurs.',
        
        criticalRequirement: 'All HCWs and personnel handling HD must be aware of emergency procedures for direct contact with HDs and receiving medical attention. All HDs handling areas must consist of essential facilities such as emergency kits/suppliers for emergency treatment (e.g., PPE, soap, eyewash, sterile saline for irrigation), as well as access to running water.',
        
        responseIntro: 'Direct skin or eye contact, or contamination of protective equipment or clothing, should be treated according to the following steps:',
        
        emergencySteps: [
          'Immediately remove the contaminated gloves or gown and clothes',
          'Immediately cleanse the affected skin with soap and water',
          'Perform decontamination based on the safety data sheet for the agent of exposure',
          'In the case of eye exposure, flood the affected eye at an eyewash fountain or with water or isotonic eyewash (e.g., Normal saline) designated for that purpose for at least 15 minutes',
          'Protocols for emergency procedures should be maintained at the designated sites (e.g., places to eye irrigation [eyewash fountain], shower for accidental spills)',
          'Medical personnel should perform a physical examination for acute findings at the site of exposure (e.g., skin or inhalation), focusing on the target organs of the drug or drugs involved',
          'Obtaining blood for baseline investigations (e.g., complete blood counts, liver function tests) among exposed HCWs helps determine future changes. In terms of laboratory results, a specimen collected immediately after exposure is almost as good as a pre-exposure specimen',
          'Appropriate follow-up times can be determined based on the drug\'s half-life and, for example, the expected nadir of blood counts',
          'Exposure-related incidence needs to be immediately informed and needs to seek medical advice as soon as possible, and before the end of the duty shift',
          'Document the exposure in the employee\'s medical record'
        ]
      }
    },

    training: {
      id: 'training',
      title: 'Training Personnel',
      order: 10,
      data: {
        trainingIntro: 'All staff who handle cytotoxic drugs must be provided with sufficient education and training applicable to their role, regarding the risks and safe handling of these drugs. Training should begin when the worker is first assigned to an area where chemotherapy agents are present and should be repeated annually. The educational content should be specific to the activities for which the worker is responsible. All HCWs handling chemotherapy/HDs should be supplied with up-to-date information on all aspects of the safe handling process related to their job role. (This content also acts as educational material for a tailored education intervention planned for oncology nurses in Sri Lanka).',
        
        coreKnowledge: [
          'Adverse health effects of exposure to HDs',
          'Routes of occupational chemotherapy/HDs exposure',
          'Selection and use of PPE',
          'Selection and use of engineering controls as applicable'
        ],
        
        practicalSkills: [
          'Work practices in each step of handling (preparation, transport, administration, handling of waste, deactivation, cleaning, managing spills and emergency exposure)',
          'Patient care issues',
          'Role of the medical surveillance program'
        ],
        
        isoppGuidelines: [
          'Recognition of cytotoxic drugs',
          'Location and use of safety stations (e.g., eyewash stations and showers)',
          'Receipt, unpacking, transport and storage of cytotoxic drugs',
          'Cytotoxic spills and accidental exposure (Workers who are responsible for responding to spills of HDs should have additional training about spill cleanup and respirator usage)',
          'Hospital policies and procedures on cytotoxic management'
        ],
        
        evaluationIntro: 'Following the training, the knowledge and performance of specific skills should be evaluated. Questionnaires and observation checklists on safe handling practices, as well as organizational policies, are typically used for this purpose.',
        
        requiredRecords: [
          'Training date',
          'Topics covered',
          'Names of resource persons for the session',
          'List of participants attending the training',
          'Course evaluations',
          'Competencies and proficiencies'
        ],
        
        trainingScheduleNote: 'Initial training when first assigned to HD handling areas, with annual refresher training to maintain competency and stay current with best practices.'
      }
    },

    medical: {
      id: 'medical',
      title: 'Medical Surveillance',
      order: 11,
      data: {
        surveillanceIntro: 'Medical surveillance is a vital program in detecting health risks. It involves assessing and documenting symptom complaints, physical findings, and laboratory tests (e.g., FBC, LFT) to determine whether there is a deviation from the expected normal parameters. Medical surveillance programs act as a secondary prevention tool while taking appropriate measures (use of engineering controls, other administrative controls, safe work processes, PPE, and worker education). However, the insufficiency and unavailability of such programs are widely reported, especially in limited-resource settings.',
        
        programElements: [
          {
            number: 1,
            title: 'Worker Registry',
            description: 'Maintain a list of all workers who are exposed to HDs as a part of their job assignment.'
          },
          {
            number: 2,
            title: 'Health Services Coordination',
            description: 'Conduct health services to perform medical surveillance according to OSHA regulations and preserve the confidentiality of personal medical information.'
          },
          {
            number: 3,
            title: 'Initial Baseline Assessment',
            description: 'Initial baseline assessment includes:',
            items: [
              'Assessment of the worker\'s health status',
              'Medical history (including reproductive history)',
              'HD exposure history (records of HDs handled, with quantities and dosage forms, estimated number of HDs handled per week, estimates of hours spent handling HDs per week and/or per month)',
              'Physical examination',
              'Laboratory testing (Physical assessment and laboratory studies are used to assess changes in target organs due to handling HDs - e.g., FBC, LFT)'
            ],
            note: 'Biological monitoring, which involves determining the presence of drugs or their metabolites in biological samples (such as blood or urine), is also effective in assessing risk. However, it is not currently recommended in routine surveillance protocols. However, it may have a role in the follow-up of acute spills involving a specific agent.'
          },
          {
            number: 4,
            title: 'Periodic Evaluation',
            description: 'Periodic evaluation of the elements of the medical surveillance described above (updated health and exposure history, physical assessment, and laboratory measures, as appropriate) should continue.'
          },
          {
            number: 5,
            title: 'Follow-up Plan Development',
            description: 'Development of a follow-up plan for workers who have shown health changes suggesting toxicity or who have experienced acute exposure. This follow-up should include:',
            items: [
              'An evaluation of current engineering and administrative controls and equipment to ensure that all systems are appropriately and accurately implemented',
              'Health issues identified',
              'Medical review after injury/spill/splash',
              'Name of exposed HDs/carcinogens',
              'Period/amount of exposure',
              'Recommendations and medical implementations'
            ]
          },
          {
            number: 6,
            title: 'Documentation',
            description: 'Carefully document spills, spill cleanup activities, and accidental exposure.'
          },
          {
            number: 7,
            title: 'Policy Development',
            description: 'Develop policies that guide employees in how to pursue surveillance through their primary care providers in settings without employee health services.'
          }
        ],
        
        keyBenefits: [
          {
            icon: '🛡️',
            title: 'Early Detection',
            description: 'Identifies health changes before they become serious, allowing for timely intervention.'
          },
          {
            icon: '📊',
            title: 'Trend Monitoring',
            description: 'Tracks patterns of exposure and health effects across the workforce.'
          },
          {
            icon: '🔍',
            title: 'System Evaluation',
            description: 'Assesses effectiveness of engineering and administrative controls.'
          },
          {
            icon: '📝',
            title: 'Documentation',
            description: 'Maintains comprehensive records for regulatory compliance and worker protection.'
          }
        ],
        
        importantNote: 'Medical surveillance acts as a secondary prevention tool and works best when combined with proper engineering controls, administrative controls, safe work processes, appropriate PPE, and comprehensive worker education.'
      }
    },

    summary: {
      id: 'summary',
      title: 'Summary',
      order: 12,
      data: {
        title: 'Chapter 04 Summary',
        description: [
          'Recommendations for handling chemotherapy are established in the guidelines considering the role or activity of handling. Education, training, appropriate facilities and PPE and skills are vital to perform activities related to handling chemotherapy. Chapter 04 discusses the recommendations that are most important to local setting nurses since the present e-module is used as educational material.  Therefore, chapter 04 included the work practices related to receiving, distribution, and storage of HDs, compounding HDs, transport of compounded HDs, administration of chemotherapy, disposal of waste, cleaning and decontamination of HD equipment and work surfaces, deactivation, decontamination, handling spills, contaminated bed linen, recommendations are made to avoid exposure, emergency procedures for personnel contamination with HDs,  training personnel in handling HDs and Medical Surveillance.'
        ],
        keyPoints: [
          '📦 Receiving & Storage: All personnel must be trained in PPE use and spill cleanup. Store HDs separately with negative air pressure (minimum 20 ACH), wipe vials with alcohol, and maintain spill kits in receiving areas.',
          '🧪 Compounding: Only trained personnel compound HDs inside C-PEC (BSC/isolator) using strict aseptic techniques. Prime IV tubing before adding HDs, use CSTDs, and maintain HEPA-filtered environment with negative pressure.',
          '🚚 Transport: Double-bag all doses in sealed containers with "Hazardous Drug" labels. Manual transportation preferred over pneumatic tubes. Trained personnel only, with spill kits available during transport.',
          '💉 Administration: Wear full PPE (double gloves, gown, respirator, face shield) throughout procedure. Never prime HDs at bedside. Use locking connections, perform manipulations below eye level, and dispose waste in designated containers.',
          '🗑️ Waste Disposal: Incineration at 1100°C is preferred. Never discard into wastewater or landfill. Use leak-proof, puncture-resistant containers clearly labeled for HDs. Separate HD waste at first disposal point.',
          '🧹 Cleaning Steps (4-Step Process): (1) Deactivation - render HDs inert using EPA-registered oxidizers, (2) Decontamination - remove HD residue daily when used, (3) Cleaning - remove organic/inorganic materials, (4) Disinfection - destroy microorganisms after cleaning.',
          '⚠️ Spill Management: Restrict area with warning signs, use complete spill kit with full PPE. Only trained personnel clean spills. Document all incidents and dispose contaminated waste in cytotoxic bins.',
          '🛏️ Contaminated Linen: Wear protective gloves, place in labeled bags, wash separately twice with warm water and detergent. Handle with same precautions as other HD waste.',
          '👶 Protective Reassignment: Required for pregnancy, intent to conceive, lactation, or medical reasons. Employers must develop written policies and offer alternative duties to minimize exposure risk.',
          '🚨 Emergency Procedures: Immediate removal of contaminated PPE/clothing, cleanse with soap and water. Eye exposure requires 15-minute eyewash irrigation. Obtain baseline blood tests (FBC, LFT) and document in medical record.',
          '📚 Training Requirements: Initial training when first assigned, annual refresher training. Content includes adverse effects, exposure routes, PPE selection, engineering controls, work practices, spill management, and medical surveillance role.',
          '🏥 Medical Surveillance: Maintain worker registry, conduct baseline assessments (health status, medical/reproductive history, physical exam, lab tests), perform periodic evaluations, develop follow-up plans, and document all exposures carefully.'
        ],
        variant: 'gradient',
        hasImage: true,
        imagePath: 'summary04.webp'
      }
    }
  }
};

async function migrateChapter04() {
  console.log('🚀 Migrating Chapter 04...\n');

  const processedSections: Record<string, any> = {};
  
  for (const [sectionId, sectionData] of Object.entries(chapter04Data.sections)) {
    processedSections[sectionId] = {
      ...sectionData,
      lastModified: serverTimestamp(),
      modifiedBy: ADMIN_EMAIL
    };
    console.log(`  ✓ Section: ${sectionData.title}`);
  }

  await setDoc(doc(db, 'content', 'chapter-04'), {
    ...chapter04Data,
    sections: processedSections,
    published: true,
    lastModified: serverTimestamp()
  });
  
  console.log('✅ Chapter 04 migrated successfully!\n');
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
    console.log('   CHAPTER 04 MIGRATION');
    console.log('   Handling Recommendations');
    console.log('========================================\n');
    
    await createAdmin();
    await migrateChapter04();
    
    console.log('\n✅ Migration complete!');
    console.log('\nWhat was migrated:');
    console.log('1. Introduction (1 table with 13 rows)');
    console.log('2. Receiving, Distribution & Storage:');
    console.log('   - Main intro text');
    console.log('   - 10 safety precautions (list)');
    console.log('   - Critical practice note');
    console.log('   - Warning note');
    console.log('3. Compounding Hazardous Drugs:');
    console.log('   - Work practices intro');
    console.log('   - 17 compounding practices (list)');
    console.log('   - 7 S-SEC requirements (list)');
    console.log('   - Critical note');
    console.log('4. Transport Compounded HDs:');
    console.log('   - Transport intro');
    console.log('   - 7 transport requirements (list)');
    console.log('   - Transport risk note');
    console.log('5. Administration of Chemotherapy:');
    console.log('   - Administration intro');
    console.log('   - 16 parenteral precautions (list)');
    console.log('   - 6 oral practices (list)');
    console.log('   - 6 topical practices (list)');
    console.log('   - Critical practice note');
    console.log('   - Patient education note');
    console.log('6. Disposal of Waste:');
    console.log('   - Waste intro');
    console.log('   - 11 waste types (list)');
    console.log('   - 7 handling practices (list)');
    console.log('   - 4 container requirements (list)');
    console.log('   - 4 storage requirements (list)');
    console.log('   - 8 excreta handling practices (list)');
    console.log('   - Notes and requirements');
    console.log('7. Cleaning & Decontamination:');
    console.log('   - Intro texts');
    console.log('   - Deactivation (purpose + 4 requirements + agents + warning)');
    console.log('   - Decontamination (purpose + 5 requirements + agents)');
    console.log('   - Cleaning (purpose + 3 requirements + agents)');
    console.log('   - Disinfection (purpose + 1 requirement + agents + note)');
    console.log('8. Summary (text + 12 key points)');
    console.log('\nAll content is now editable through admin dashboard!');
    console.log('Images and complex layouts remain in React components.');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  }
}

run();