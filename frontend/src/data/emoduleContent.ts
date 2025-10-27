// src/data/emoduleContent.ts
import cells from '../assets/cells.png';
import cell from '../assets/cell.png';
import twoincorrect from '../assets/two-incorrect.png';
import oneincorrect from '../assets/one-incorrect.png'; 
import AdverseEffects from '../assets/AdverseEffects.png';  
import summary01 from '../assets/AdverseEffects.png';
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
        content: `
          <p>The first chapter of this e-module provides an overview towards cancer by providing cancer definition, epidemiology, treatment methods, adverse drug effects, and related terminologies. It is useful in better understanding occupational exposure and best practices and recommendations for handling chemotherapy which are discussed in upcoming chapters of this e-module. Oncology nurses are expected to reach learning outcomes and practical competencies at the end of the study of the learning content of Chapter 01.</p>
          <h3>Learning outcomes, competencies and learning content: Chapter 01</h3>
          <table>
            <tr>
              <th>Learning outcomes</th>
              <th>Practice competencies</th>
              <th>Learning content</th>
            </tr>
            <tr>
              <td>Define the term cancer
                  Describe cancer-related terminologies 
              </td>
              <td>Define the term cancer
Explain cancer-related terminologies
</td>
              <td>Cancer definition and related terminologies 
              </td>
            </tr>

            <tr>
              <td>Describe the epidemiology of cancer</td>
              <td>Explain cancer epidemiology</td>
              <td>Prevalence of common cancers and death rates
              </td>
            </tr>

            <tr>
              <td>Define the terminologies related to cancer therapy

Critically evaluate the current cancer treatment methods

Describe how chemotherapy mainly acts in the human body
</td>
              <td>Explain different cancer therapies

Explain cancer treatments 

Explain the main mechanism of chemotherapy
              </td>
              <td>Cancer treatment methods: Surgery, Radiotherapy, Chemotherapy, other drugs and other treatment methods

Cancer therapies: Adjuvant, neoadjuvant, palliative and systemic therapy

Selective and non-selective mechanisms of drugs 
              </td>
            </tr>

            <tr>
              <td>Identify adverse effects of anti-cancer drugs 

Identify common classifications of adverse effects 
</td>
              <td>Explain common anti-cancer drugs and their adverse effects 
Apply adverse effects-related knowledge in oncology nursing care (assess, educate, and support to management of adverse effects)
              </td>
              <td>Common anti-cancer drugs and classification of adverse effects (based on mechanism of drugs/ drug groups/ presenting time)
              </td>
            </tr>
          </table>
        `
      },
      {
        id: 'overview-cancer',
        title: 'Overview of Cancer',
        content: `
          <p>Cancer is the generic name for neoplasms/tumors. Tumors are of two types, benign and cancerous. Benign tumors grow slowly and usually do not invade other tissues or convert to cancer. Cancerous tumors are referred to as malignant tumors and demonstrate uncontrolled cell division and the potential to invade surrounding tissues by destroying normal cells12. Cancers may be developed in solid or liquid tissues. In solid cancers, abnormal cells create a mass or lump (Eg, breast and prostate cancers). Many types of cancers belong to solid cancers. The abnormal cell buildup in the blood, bone marrow, and lymphatic system is considered liquid cancer (Eg: leukemia, myeloma). The first-developed cancer is known as primary cancer, and it is localized, not tend to spread to other organs1. Secondary cancer or metastasis refers to the growth of primary cancer at a new site with the distribution of cancer cells through blood and lymph.</p>
          <h3>Development of cancer</h3>
          <div className="flex justify-center mb-8">
            <img
              src={cells}
              alt="Healthcare professionals"
              className="rounded-2xl shadow-2xl max-w-md"
            />
            <img
              src={cell}
              alt="Healthcare professionals"
              className="rounded-2xl shadow-2xl max-w-md"
            />
          </div>
          `
      },
      {
        id: 'cancer-epidemiology',
        title: 'Cancer Epidemiology',
        content: `
          <h2>Cancer Epidemiology</h2>
          <p>Cancer is a global health concern. It causes one in six deaths (16.8%) globally. GLOBACAN cancer statistics reported 20 million new cases and 9.7 million deaths in 2022. Over 35 million new cancer cases and a 77% increment in incidence is predicted by 2050 compared to the year 2022. Lung cancer is the most widely prevalent cancer globally (2.5 million; 12.4% new cases) and female breast cancer ranked second (2.3 million cases, 11.6%), followed by colorectal cancer (1.9 million cases, 9.6%), prostate cancer (1.5 million cases, 7.3%), and stomach cancer (970 000 cases, 4.9%). The incidence and deaths are increasing in Asia. According to the latest Sri Lankan statistics, oral (lip, tongue and mouth), trachea, bronchus and lung, colorectal (colon and rectum), esophagus and prostate cancers were common among males. Out of all types of cancers among males in Sri Lanka, 15% represented lip, tongue, and mouth cancers5.  Breast, thyroid, colon, ovarian, and cervical cancers were commonly prevalent cancers among women in Sri Lanka. Out of all types of cancers among women in Sri Lanka, breast cancers were prominent (27%).  </p>
        `
      },
      {
        id: 'cancer-management',
        title: 'Cancer Management',
        content: `
          <p>The well-known treatment modalities of cancer include surgery, radiotherapy, and drug therapies (chemotherapy, hormone therapy, targeted therapy, immunotherapy) (Table 2). The type of treatment depends on the cancer diagnosis (type and stage of cancer, organ type, condition of the cells). The principal goal of the treatment is improving the quality of life and /or overall survival.</p> 
          <h3>Cancer treatment types</h3>
          <table>
            <tr>
              <th>Treatment Type</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>Surgery</td>
              <td>A surgical operation to remove cancer/ body parts affected by cancer</td>
            </tr>
            <tr>
              <td>Radiotherapy</td>
              <td>The use of controlled doses of radiation to destroy or damage cancer cells does not allow them to grow, multiply, or spread.</td>
            </tr>
            <tr>
              <td>Drug therapies</td>
              <td>Chemotherapy - Kill cancer cells or slow their growth
Hormone therapy - Replace natural hormones in some types of cancer
Immunotherapy - Affects the immune system. (Harness power of the immune system to act against cancer). 
Targeted therapy - Target specific features of cancer cells to stop the growth or spread of cancer cells
</td>
            </tr>
            <tr>
              <td>Other</td>
              <td>Chemoradiation - Combined treatment of chemotherapy and radiotherapy 
Stem cell transplant - Destroy blood cells by high-dose chemotherapy and replace healthy stem cells with blood cancers such as leukemia, lymphoma and myeloma
</td>
            </tr>
          </table>

          <p>In addition to the cancer treatment classification mentioned above, purpose-based cancer therapies are established.</p>

          <h3>Purpose-based cancer therapies</h3>
          <table>
            <tr>
              <th>Cancer therapy</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>Adjuvant therapy</td>
              <td>Use of drugs after their primary surgery. Useful to eradicate microscopic cancer cells</td>
            </tr>
            <tr>
              <td>Neoadjuvant therapy </td>
              <td>Primarily used to shrink locally advanced and large cancers before surgery to facilitate the surgical resection</td>
            </tr>
            <tr>
              <td>Palliative therapy</td>
              <td>Control of symptoms in advanced and incurable to improve quality of life and survival</td>
            </tr>
            <tr>
              <td>Systemic therapy</td>
              <td>Kill and modify malignant cells, leaving the unharmed normal cells</td>
            </tr>
          </table>
        `
      },
      {
        id: 'properties-hazardous-drugs',
        title: 'Properties of Hazardous Drugs',
        content: `
          <h2>Properties of Hazardous Drugs</h2>
          <p>Anti-cancer chemotherapy and a few other drug groups (antiviral drugs, hormones, some bioengineered drugs, and other miscellaneous drugs) are considered hazardous drugs (HDs) due to the below-mentioned characteristics.</p>
          <ul>
            <li>Carcinogenicity</li>
            <li>Teratogenicity or developmental toxicity</li>
            <li>Reproductive toxicity</li>
            <li>Organ toxicity at low doses</li>
            <li>Genotoxicity</li>
            <li>Structure and toxicity profiles of new drugs that mimic existing drugs determined hazardous by the above criteria</li>
          </ul>
        `
      },
      {
        id: 'chemotherapy-adverse-effects',
        title: 'Chemotherapy and Adverse Effects',
        content: `
          <h2>Chemotherapy and Adverse Effects</h2>
          <p>Chemotherapy is a general term to indicate the use of chemicals as a therapy. However, the term is commonly used for cytotoxic chemotherapy in cancer management and is considered as hazardous drugs. Systemic Anti-Cancer Therapy (SACT) refers to drug-based cancer treatments introduced as systemic therapy and it includes chemotherapy, hormone drugs, immunotherapy, targeted therapy, and antibody-drug conjugates. SACT can be used either alone or in combination with other types of treatments such as surgery or radiation therapy and combination treatments are effective and common in the eradication or mitigation of cancer. Chemotherapy is administered through oral, intravenous (IV), subcutaneous (SC), intramuscular (IM), or intrathecal routes (IT). IV route administration is common due to increased bioavailability, versatility, and flexibility in treatment dosages when compared to other routes of administration.
Chemotherapeutic agents were developed in the 1940s and were primarily used to treat cancer and a few other non-oncology indications such as arthritis, and lupus. Chemotherapy shows cytotoxic properties (kills cancer cells) in providing therapeutic efficacy. Non-selective mechanisms and narrow therapeutic properties of many agents cause numerous adverse effects. Therefore, target-specific drugs which mainly target cancer cells or specific proteins on cancer cells are introduced. However, those agents are not cost-effective with advanced processing mechanisms. 
Adverse effects of chemotherapy are mainly classified according to the general mechanisms of drugs (non-selective vs target-specific mechanisms; Table 4), drug groups (Table 5), body systems or organs (cardiac, hepatic, renal, hematopoietic, pulmonary, reproductive, dermal etc.), adverse effects presenting time (acute vs chronic; Figure 2). </p>
         <h3>Table 4: Classification of chemotherapy and adverse effects (non-selective vs target-specific drugs) </h3>
          <table>
            <tr>
              <th></th>
              <th>Non-specific anticancer drugs
                </th>
              <th>Target specific anti-cancer drugs </th>
            </tr>

            <tr>
              <td>Mechanism
              </td>
              <td>Act on both malignant and normal cells
              <div className="flex justify-center mb-8">
            <img
              src={twoincorrect}
              alt="Healthcare professionals"
              className="rounded-2xl shadow-2xl max-w-md"
            />
          </div>
</td>
              <td>Act selectively only on malignant cell
              <div className="flex justify-center mb-8">
            <img
              src={oneincorrect}
              alt="Healthcare professionals"
              className="rounded-2xl shadow-2xl max-w-md"
            />
          </div>
              </td>
            </tr>

            <tr>
              <td>Example drugs</td>
              <td>Methotrexate
5-Fluroacil 
Cychphophamids
Cisplatin
Doxorubicin
Irinotecan
Mitoxantrone
Vinblastine
Paclitaxel
Tamoxifen
</td>
              <td>Imatinib
Sorofenib
Palbociclib
Bevacizumub
Bortezomib
Mitoxantrone
Trastzumab
Cetuximab
Brentuximab
Elotuzumub

              </td>
            </tr>

            <tr>
              <td>Adverse effects </td>
              <td>Thrombocytopenia
Neutropenia
GI issues
Neurotoxicity
Myelosuppression
Secondary leukaemia
Peripheral neuropathy

              </td>
              <td>Nausea
Vomiting
Skin toxicities
Dry skin
Congestive heart failure
Hypertension
Proteinuria

              </td>
            </tr>
          </table> 

          <p>Adverse effects are frequently categorized according to drug groups since those correspond with the particular mechanism of action (Table 5).</p>

          <h3>Table 5: Classification of chemotherapy (drug-group wise) and adverse effects</h3>
          <table>
            <tr>
              <th>Main drug group</th>
              <th>Sub-classes</th>
              <th>Example drugs</th>
              <th>Common toxicities</th>
            </tr>

            <tr>
              <td>Alkylating agents</td>
              <tr>
                <td>Nitrogen mustards</td>
                <td>Cyclophosphamide
    Ifosfamide</td>
                <td>Nausea, vomiting, bone marrow depression, cystitis, pulmonary fibrosis, infertility, premature menopause, myelodysplasia, secondary neoplasia</td>
              </tr>
              <tr>
                <td>Platinum agents</td>
                <td>Cisplatin
    Carboplatin
    Oxaliplatin
    </td>
                <td>Bone marrow depression, nausea, vomiting, allergy, nephrotoxicity, hypomagnesaemia, hypocalcemia, hypokalemia, hypophosphatemia, hyperuricemia, Raynaud’s diseases, sterility, teratogenicity, ototoxicity, peripheral neuropathy, cold dysesthesia, laryngopharyngeal dysaesthesia</td>
              </tr>
            </tr>

            <tr>
              <td>Anti-metabolites</td>
              <tr>
                <td>Folic acid analogues</td>
                <td>Methotrexate
Pemetrexed
Pralatrexate 
</td>
                <td>Acute renal failure, neurotoxicity, hepatotoxicity</td>
              </tr>
              <tr>
                <td>Pyrimidine analogues</td>
                <td>5-fluorouracil
Capecitabine
Floxuridine
Gemcitabine</td>
                <td>GI issues, leukopenia, thrombocytopenia, hemorrhage</td>
              </tr>
            </tr>

            <tr>
              <td>Anti-mitotic agents</td>
              <tr>
                <td>Vinca alkaloids</td>
                <td>Vincristine
Vinblastine
Vinorelbine
</td>
                <td>Leukopenia, thrombocytopenia, anaemia, 
peripheral neuropathy, neuronal death</td>
              </tr>
              <tr>
                <td>Taxanes</td>
                <td>Docetaxcel
Carbazitaxel
Paclitaxcel
    </td>
                <td>Nausea, vomiting, hypersensitivity, bone marrow depression, fluid retention, peripheral neuropathy, alopecia, arthralgia, myalgias, cardiac toxicity, mild GI disturbances, mucositis</td>
              </tr>
            </tr>

            <tr>
              <td>Topoisomerase inhibitors</td>
              <tr>
                <td>Topoisomerase 1 inhibitors</td>
                <td>Irinotecan
Topotecan</td>
                <td>Diarrhoea, abdominal cramps, hair loss or thinning, increased sweating and saliva, nausea, vomiting, loss of appetite, tiredness, watery eyes, occasionally cause mouth sores and ulcers, muscle cramps, rashes, myelosuppression</td>
              </tr>
              <tr>
                <td>Topoisomerase 2 inhibitors</td>
                <td>Etoposide
Teniposide
    </td>
                <td>Hair loss, nausea and vomiting, anorexia, stomatitis, bone marrow suppression, leukopenia</td>
              </tr>
            </tr>

            <tr>
              <td>Anti-tumor antibiotics</td>
              <tr>
                <td>Anthracycline</td>
                <td>Doxorubicin
Daunorubicin
Epirubicin
Idarubicin
Valrubicin
</td>
                <td>Nausea, vomiting, bone marrow depression, cardiotoxicity, red-colour urine, severe local tissue damage with extravasation, alopecia, stomatitis, anorexia, conductivities, acral pigmentation, dermatitis, hyperuricemia</td>
              </tr>
              <tr>
                <td>Other</td>
                <td>Mitoxantrone
Bleomycin
    </td>
                <td>Bone marrow suppression, Irreversible cardiomyopathy, anaphylactic reactions</td>
              </tr>
            </tr>

            <tr>
              <td>Immunotherapy</td>
              <tr>
                <td>Monoclonal antibodies</td>
                <td>Rituximab
Ofatumumab
Obinutuzumab
Alemtuzumab
Daratumumab
</td>
                <td>Infusion-related reactions (including fever,
chills, shortness of breath, low blood pressure, and anaphylaxis) myelosuppression, increased risk of opportunistic infections, liver toxicity
</td>
              </tr>
              <tr>
                <td>Small molecules</td>
                <td>Thalidomide
Lenalidomide
Pomalidomide
    </td>
                <td></td>
              </tr>
            </tr>
          </table> 

          <p>Adverse effects of chemotherapy can be outlined according to the presenting time. Generally, reversible adverse effects are present after administration of chemotherapy and are considered as acute adverse effects. Late effects are regarded as long-term and non-reversible.</p>

          <h3>Adverse effects of chemotherapy (Acute vs chronic)</h3>
          <div className="flex justify-center mb-8">
            <img
              src={AdverseEffects}
              alt="Healthcare professionals"
              className="rounded-2xl shadow-2xl max-w-md"
            />
          </div>
        `
      },
      {
        id: 'summary',
        title: 'Summary',
        content: `
          <p>Cancer refers to abnormal cell growth, categorized as benign (non-cancerous) or malignant (cancerous). Malignant tumors invade surrounding tissues and show metastasis properties by spreading to new sites through blood or lymph. Cancer is a leading cause of global deaths, and it is expected to rise by 77% by 2050. Lung, breast, colorectal, prostate, and stomach cancers are globally common. Anti-cancer treatment modalities include surgery, radiotherapy, and SACT (chemotherapy, hormone therapy, targeted therapy, and immunotherapy). 
The non-selective mechanism and narrow therapeutic index of anti-cancer chemotherapy cause a wide variety of adverse effects. Due to the inherent toxic properties of chemotherapy, it is categorized as a hazardous drug. Adverse effects are mainly classified according to the drug groups and their presenting time. The common adverse effects include nausea, vomiting, headache, hypersensitivity reactions, alopecia, GI disturbance, tumor lysis syndrome, bone marrow suppression, secondary malignancies, and reproductive adverse effects. 
</p>
       <div className="flex justify-center mb-8">
            <img
              src={summary01}
              alt="Healthcare professionals"
              className="rounded-2xl shadow-2xl max-w-md"
            />
          </div>
        `
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
        id: 'evidence-exposure',
        title: 'Evidence of Occupational Exposure',
        content: `
          <h2>Evidence of Occupational Exposure and Adverse Effects</h2>
          <p>First concerns about occupational exposure to anti-cancer agents were raised in the 1970s.</p>
          <h3>Detection Methods</h3>
          <ul>
            <li>Workplace contamination on surfaces</li>
            <li>Drug metabolites in biological samples (urine, blood)</li>
            <li>Chromosomal aberrations (CAs)</li>
            <li>Sister chromatid exchanges (SCEs)</li>
          </ul>
          <h3>Common Drugs Detected</h3>
          <ul>
            <li>Cyclophosphamide</li>
            <li>Ifosfamide</li>
            <li>Fluorouracil</li>
            <li>Methotrexate</li>
            <li>Paclitaxel</li>
            <li>Doxorubicin</li>
            <li>Platinum-containing drugs (Cisplatin, Carboplatin)</li>
          </ul>
        `
      },
      {
        id: 'exposure-routes',
        title: 'Chemotherapy Exposure Routes',
        content: `
          <h2>Chemotherapy Exposure Routes and Risk Activities</h2>
          <h3>Main Exposure Routes</h3>
          <ol>
            <li><strong>Inhalation:</strong> Via droplets, particulates, and vapors</li>
            <li><strong>Dermal Contact:</strong> Direct skin contact with contaminated surfaces</li>
            <li><strong>Ingestion:</strong> Inadvertent consumption through contaminated food/beverages</li>
            <li><strong>Needle Stick Injuries:</strong> Accidental injection during handling</li>
          </ol>
          <h3>High-Risk Activities</h3>
          <ul>
            <li>Drug preparation and compounding</li>
            <li>Administration to patients</li>
            <li>Spill management</li>
            <li>Waste disposal</li>
            <li>Cleaning contaminated surfaces</li>
            <li>Handling patient excreta</li>
          </ul>
        `
      },
      {
        id: 'adverse-effects-hcws',
        title: 'Adverse Effects Among Healthcare Workers',
        content: `
          <h2>Adverse Effects Among Healthcare Workers</h2>
          <h3>Acute Effects</h3>
          <ul>
            <li>Headaches</li>
            <li>Nausea and vomiting</li>
            <li>Hair loss</li>
            <li>Skin irritation</li>
            <li>Eye irritation</li>
            <li>Dizziness</li>
          </ul>
          <h3>Reproductive Effects</h3>
          <ul>
            <li>Fetal loss and miscarriage (especially first trimester exposure)</li>
            <li>Infertility</li>
            <li>Preterm births</li>
            <li>Learning disabilities in offspring</li>
            <li>Spontaneous abortions</li>
          </ul>
          <h3>Long-term Effects</h3>
          <ul>
            <li>Organ toxicity (liver, kidney)</li>
            <li>DNA damage</li>
            <li>Increased infection risk</li>
            <li>Blood count abnormalities</li>
          </ul>
        `
      },
      {
        id: 'summary',
        title: 'Summary',
        content: `
          <p>Cancer refers to abnormal cell growth, categorized as benign (non-cancerous) or malignant (cancerous). Malignant tumors invade surrounding tissues and show metastasis properties by spreading to new sites through blood or lymph. Cancer is a leading cause of global deaths, and it is expected to rise by 77% by 2050. Lung, breast, colorectal, prostate, and stomach cancers are globally common. Anti-cancer treatment modalities include surgery, radiotherapy, and SACT (chemotherapy, hormone therapy, targeted therapy, and immunotherapy). 
The non-selective mechanism and narrow therapeutic index of anti-cancer chemotherapy cause a wide variety of adverse effects. Due to the inherent toxic properties of chemotherapy, it is categorized as a hazardous drug. Adverse effects are mainly classified according to the drug groups and their presenting time. The common adverse effects include nausea, vomiting, headache, hypersensitivity reactions, alopecia, GI disturbance, tumor lysis syndrome, bone marrow suppression, secondary malignancies, and reproductive adverse effects. 
</p>
       <div className="flex justify-center mb-8">
            <img
              src={summary01}
              alt="Healthcare professionals"
              className="rounded-2xl shadow-2xl max-w-md"
            />
          </div>
        `
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
        id: 'standard-guidelines',
        title: 'Standard Guidelines',
        content: `
          <h2>Standard Guidelines for Handling Chemotherapy</h2>
          <h3>Key Organizations and Guidelines</h3>
          <table>
            <tr>
              <th>Organization</th>
              <th>Guidelines</th>
            </tr>
            <tr>
              <td>NIOSH</td>
              <td>Alert Preventing Occupational Exposures to Antineoplastic and Other Hazardous Drugs (2004)</td>
            </tr>
            <tr>
              <td>OSHA</td>
              <td>Controlling Occupational Exposure to Hazardous Drugs (2016)</td>
            </tr>
            <tr>
              <td>USP</td>
              <td>Chapter 800 - Hazardous Drugs Handling in Healthcare Settings (2019)</td>
            </tr>
            <tr>
              <td>ONS</td>
              <td>Safe Handling of Hazardous Drugs, 3rd Edition (2017)</td>
            </tr>
            <tr>
              <td>ISOPP</td>
              <td>Standards for Safe Handling of Cytotoxic Drugs (2007)</td>
            </tr>
          </table>
        `
      },
      {
        id: 'hierarchical-controls-overview',
        title: 'Hierarchical Controls Overview',
        content: `
          <h2>Hierarchical Controls for Handling Chemotherapy</h2>
          <p>Five levels of precautionary measures (from most to least effective):</p>
          <h3>Level 1: Elimination</h3>
          <p>Remove hazardous drugs from the workplace (rarely possible in clinical settings)</p>
          
          <h3>Level 2: Substitution</h3>
          <p>Use less hazardous alternatives (e.g., tablets instead of IV when clinically appropriate)</p>
          
          <h3>Level 3: Engineering Controls</h3>
          <p>Physical barriers to separate workers from hazards:</p>
          <ul>
            <li>Biological Safety Cabinets (BSC)</li>
            <li>Compounding Aseptic Containment Isolators (CACI)</li>
            <li>Closed System Drug-Transfer Devices (CSTD)</li>
          </ul>
          
          <h3>Level 4: Administrative Controls</h3>
          <p>Work practices and procedures to reduce exposure</p>
          
          <h3>Level 5: Personal Protective Equipment (PPE)</h3>
          <p>Last line of defense when other controls cannot eliminate risk</p>
        `
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
      }
    ]
  },
  {
    id: 'chapter-05',
    title: 'Chapter 05: Barriers and Education Impact',
    icon: '🎓',
    description: 'Factors affecting compliance and effectiveness of education programs',
    subTopics: [
      {
        id: 'barriers-safety',
        title: 'Barriers to Following Safety Precautions',
        content: `
          <h2>Barriers to Following Safety Precautions</h2>
          
          <h3>Organizational Factors</h3>
          <ul>
            <li>Increased workload and patient count</li>
            <li>Staff shortage</li>
            <li>Insufficient supervision</li>
            <li>Limited PPE availability</li>
            <li>Lack of engineering controls (BSC, CSTD)</li>
            <li>Budget constraints</li>
            <li>Poor workplace safety climate</li>
          </ul>
          
          <h3>Knowledge and Training Factors</h3>
          <ul>
            <li>Inadequate knowledge of safe handling</li>
            <li>Insufficient training opportunities</li>
            <li>Lack of ongoing education</li>
            <li>Unavailability of routine training programs</li>
            <li>Poor understanding of exposure risks</li>
          </ul>
          
          <h3>Practice and Behavioral Factors</h3>
          <ul>
            <li>Poor attitudes toward safety measures</li>
            <li>Low self-efficacy in handling HDs</li>
            <li>Conflict between professional image and safety</li>
            <li>Prioritizing social roles over professional safety</li>
            <li>Reliance on clinical wisdom instead of guidelines</li>
            <li>Non-compliance with PPE use</li>
            <li>Unsafe practices (e.g., priming with chemotherapy)</li>
          </ul>
          
          <h3>Environmental Factors</h3>
          <ul>
            <li>Technical issues with devices</li>
            <li>Drug spills during handling</li>
            <li>Complex drug regimens</li>
            <li>High-dose drug handling</li>
            <li>Interpersonal influences</li>
          </ul>
          
          <h3>Most Significant Barriers</h3>
          <p>Research shows <strong>insufficient knowledge and training</strong> are the most frequently associated factors with occupational exposure and related adverse effects.</p>
        `
      },
      {
        id: 'education-impact',
        title: 'Impact of Education Programs',
        content: `
          <h2>Impact of Education Programs on Safe Handling</h2>
          
          <h3>Evidence of Effectiveness</h3>
          <p>Multiple studies demonstrate that education interventions significantly improve:</p>
          <ul>
            <li>Knowledge of safe handling practices</li>
            <li>Compliance with safety guidelines</li>
            <li>Proper use of PPE</li>
            <li>Self-efficacy in HD handling</li>
            <li>Nursing performance</li>
            <li>Attitudes toward safety</li>
            <li>Confidence levels</li>
            <li>Reduction in drug spills</li>
          </ul>
          
          <h3>Effective Educational Methods</h3>
          <ul>
            <li><strong>Web-based online courses</strong> - Flexible, accessible</li>
            <li><strong>E-learning modules</strong> - Cost-effective for LMIC</li>
            <li><strong>Blended learning</strong> - Combines face-to-face and online</li>
            <li><strong>Educational modules</strong> - Self-paced learning</li>
            <li><strong>Safety protocols</strong> - Clear guidelines and procedures</li>
            <li><strong>Demonstrations</strong> - Hands-on practice</li>
            <li><strong>Videos and presentations</strong> - Visual learning</li>
            <li><strong>Workshops and seminars</strong> - Interactive sessions</li>
            <li><strong>Mobile applications</strong> - On-demand access</li>
          </ul>
          
          <h3>Recommendations for LMICs</h3>
          <p>For Lower and Middle-Income Countries:</p>
          <ul>
            <li>E-learning modules are highly recommended</li>
            <li>Cost-effective alternative to traditional training</li>
            <li>Addresses lack of educational opportunities</li>
            <li>Blended learning approach most suitable</li>
            <li>Refreshes knowledge and preserves time</li>
            <li>Supports lifelong learning and CPD</li>
          </ul>
          
          <h3>Key Success Factors</h3>
          <ul>
            <li>High participant satisfaction</li>
            <li>Significant improvement in theoretical knowledge</li>
            <li>Enhanced practical skills</li>
            <li>Better attitude toward safety</li>
            <li>Increased confidence in handling HDs</li>
            <li>Sustained behavior change</li>
          </ul>
          
          <h3>Challenges</h3>
          <ul>
            <li>Technology access and connectivity issues</li>
            <li>Limited interaction in some online formats</li>
            <li>Structural barriers to implementing learned behaviors</li>
            <li>Need for motivation and engagement</li>
            <li>Preference for traditional methods by some learners</li>
          </ul>
          
          <h3>Best Practices</h3>
          <ul>
            <li>Combine e-learning with face-to-face training</li>
            <li>Include interactive elements</li>
            <li>Provide ongoing support and resources</li>
            <li>Regular competency assessments</li>
            <li>Continuous professional development</li>
            <li>Organizational support for implementing learning</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 'resources',
    title: 'Additional Resources',
    icon: '📚',
    description: 'References, glossary, and supplementary materials',
    subTopics: [
      {
        id: 'key-terms',
        title: 'Glossary of Key Terms',
        content: `
          <h2>Glossary of Key Terms</h2>
          
          <h3>A-C</h3>
          <dl>
            <dt><strong>Adverse Drug Reaction (ADR)</strong></dt>
            <dd>An unwanted, undesired effect of a medicine</dd>
            
            <dt><strong>Antineoplastic</strong></dt>
            <dd>A drug used to prevent, inhibit, or prevent development of neoplasms (tumors)</dd>
            
            <dt><strong>ASTM Standards</strong></dt>
            <dd>American Society for Testing and Materials standards for delivery, testing, specifications</dd>
            
            <dt><strong>Bioavailability</strong></dt>
            <dd>Fraction/amount/rate of drug entry to system circulation from administration site</dd>
            
            <dt><strong>Biological Safety Cabinet (BSC)</strong></dt>
            <dd>Enclosed, ventilated containment device protecting workers, environment, and product</dd>
            
            <dt><strong>Blended Learning</strong></dt>
            <dd>Combines teacher-centered and student-centered learning methods</dd>
            
            <dt><strong>Carcinogen</strong></dt>
            <dd>Chemical or physical agent with potential to develop cancer</dd>
            
            <dt><strong>Chemotherapy</strong></dt>
            <dd>Cytotoxic drugs that kill cancer cells by stopping growth or division</dd>
            
            <dt><strong>Closed System Drug-Transfer Devices (CSTDs)</strong></dt>
            <dd>Device preventing leaks, airborne particulates, and vapor escape</dd>
            
            <dt><strong>Containment Primary Engineering Control (C-PEC)</strong></dt>
            <dd>Ventilated device minimizing exposure when directly handling HDs</dd>
            
            <dt><strong>Containment Secondary Engineering Control (C-SEC)</strong></dt>
            <dd>Designated room where C-PEC is placed for controlled compounding</dd>
            
            <dt><strong>Cytotoxic Drug</strong></dt>
            <dd>Drug affecting cell growth and proliferation, not distinguishing cancer from normal cells</dd>
          </dl>
          
          <h3>D-H</h3>
          <dl>
            <dt><strong>DNA</strong></dt>
            <dd>Deoxyribonucleic acid - molecule carrying genetic information</dd>
            
            <dt><strong>Epidemiology</strong></dt>
            <dd>Study of disease occurrence frequency in populations</dd>
            
            <dt><strong>Eyewash Fountain</strong></dt>
            <dd>Station for washing hazardous chemicals from eyes (minimum 15 minutes)</dd>
            
            <dt><strong>Hazardous Drugs (HDs)</strong></dt>
            <dd>Drugs with carcinogenic, teratogenic, reproductive, or organ toxic properties</dd>
            
            <dt><strong>HEPA Filters</strong></dt>
            <dd>High-Efficiency Particulate Air filters capturing 99.97% of 0.3-micron particles</dd>
            
            <dt><strong>Hypersensitivity</strong></dt>
            <dd>Immune system overreaction causing inflammation and tissue damage</dd>
          </dl>
          
          <h3>L-P</h3>
          <dl>
            <dt><strong>Luer-Lock</strong></dt>
            <dd>Medical instrument fitting designed to prevent leaking</dd>
            
            <dt><strong>Narrow Therapeutic Index</strong></dt>
            <dd>Small difference between minimum effective and maximum safe doses</dd>
            
            <dt><strong>Neoplasms</strong></dt>
            <dd>Abnormal tissue mass from excessive cell growth (benign or malignant tumors)</dd>
            
            <dt><strong>Occupational Exposure Limits (OELs)</strong></dt>
            <dd>Maximum allowable concentrations of hazardous substances in workplace air</dd>
            
            <dt><strong>Oncology</strong></dt>
            <dd>Study of cancer</dd>
            
            <dt><strong>Personal Protective Equipment (PPE)</strong></dt>
            <dd>Clothing/equipment minimizing exposure to hazards (gloves, gowns, masks, etc.)</dd>
            
            <dt><strong>Powered Air-Purifying Respirator (PAPR)</strong></dt>
            <dd>Tight-fitting goggles and N-95 respirator for high-risk aerosol procedures</dd>
          </dl>
          
          <h3>S-Z</h3>
          <dl>
            <dt><strong>Safety Data Sheets (SDS)</strong></dt>
            <dd>Document providing information about hazardous chemical properties and safety precautions</dd>
            
            <dt><strong>Sister Chromatid Exchanges (SCEs)</strong></dt>
            <dd>Indicator of DNA damage or genotoxic effects</dd>
            
            <dt><strong>Standard Operating Procedures (SOPs)</strong></dt>
            <dd>Step-by-step instructions for carrying out specific procedures</dd>
            
            <dt><strong>Stem Cell Transplant</strong></dt>
            <dd>Replacement of damaged blood-forming cells with healthy stem cells</dd>
            
            <dt><strong>Systemic Anti-Cancer Therapy (SACT)</strong></dt>
            <dd>Drug-based cancer treatments including chemotherapy, hormones, immunotherapy, targeted therapy</dd>
            
            <dt><strong>Teratogenicity</strong></dt>
            <dd>Ability to cause birth defects or developmental abnormalities</dd>
            
            <dt><strong>USP Chapter 800</strong></dt>
            <dd>Standards for safe handling of hazardous drugs in healthcare settings</dd>
          </dl>
        `
      },
      {
        id: 'quick-reference',
        title: 'Quick Reference Guide',
        content: `
          <h2>Quick Reference Guide</h2>
          
          <h3>PPE Requirements Quick Check</h3>
          <table>
            <tr>
              <th>Activity</th>
              <th>Required PPE</th>
            </tr>
            <tr>
              <td>Receiving/Unpacking</td>
              <td>Gloves (if damaged containers suspected)</td>
            </tr>
            <tr>
              <td>Compounding</td>
              <td>Double gloves, gown, eye protection, respirator</td>
            </tr>
            <tr>
              <td>Administration</td>
              <td>Double gloves, gown, face shield (if splash risk)</td>
            </tr>
            <tr>
              <td>Spill Cleanup</td>
              <td>Double gloves, gown, respirator, face shield, shoe covers, head cover</td>
            </tr>
            <tr>
              <td>Waste Handling</td>
              <td>Double gloves, gown</td>
            </tr>
          </table>
          
          <h3>When to Change Gloves</h3>
          <ul>
            <li>Every 30 minutes during continuous use</li>
            <li>Immediately if torn, punctured, or contaminated</li>
            <li>Between different tasks</li>
            <li>Before leaving compounding area</li>
          </ul>
          
          <h3>When to Change Gown</h3>
          <ul>
            <li>Every 2-3 hours (if no permeation data)</li>
            <li>Immediately after spill or splash</li>
            <li>Never reuse disposable gowns</li>
            <li>Follow manufacturer guidance if available</li>
          </ul>
          
          <h3>Emergency Contact Numbers</h3>
          <ul>
            <li>Hospital Safety Officer: [INSERT NUMBER]</li>
            <li>Pharmacy Department: [INSERT NUMBER]</li>
            <li>Emergency Services: [INSERT NUMBER]</li>
            <li>Poison Control: [INSERT NUMBER]</li>
          </ul>
          
          <h3>Spill Size Classification</h3>
          <ul>
            <li><strong>Small:</strong> Less than 5ml or 5g - Use spill kit</li>
            <li><strong>Large:</strong> More than 5ml or 5g - Notify supervisor, use full PPE</li>
            <li><strong>Major:</strong> Requires evacuation - Call emergency response team</li>
          </ul>
        `
      },
      {
        id: 'acknowledgments',
        title: 'Acknowledgments',
        content: `
          <h2>Acknowledgments</h2>
          
          <h3>Supporting Institutions</h3>
          <ul>
            <li>Medical Research Institute (MRI), Sri Lanka</li>
            <li>University of Sri Jayewardenepura, Sri Lanka</li>
            <li>National Cancer Institute (NCI); Apeksha Hospital, Maharagama, Sri Lanka</li>
          </ul>
          
          <h3>Expert Panel</h3>
          <ul>
            <li><strong>Prof. M.K.D.L. Meegoda</strong> - Senior Lecturer, Department of Nursing and Midwifery, Faculty of Allied Health Science, University of Sri Jayewardenepura</li>
            
            <li><strong>Prof. S.S. Jayasinghe</strong> - Professor in Pharmacology, Faculty of Medicine, University of Ruhuna, Post-doctoral researcher in South Asian Clinical Toxicology Research Collaboration, University of Peradeniya</li>
            
            <li><strong>Prof. S.S.P. Warnakulasuriya</strong> - Professor in Nursing, Dean, Faculty of Nursing, University of Colombo</li>
            
            <li><strong>Dr. Darshana De Silva</strong> - Consultant Clinical Pharmacologist, Department of Pharmacology, Medical Research Institute, Sri Lanka</li>
            
            <li><strong>Dr. Wasantha Rathna</strong> - Consultant Clinical Pharmacologist, Department of Pharmacology, Medical Research Institute, Sri Lanka</li>
          </ul>
        `
      }
    ]
  }
]