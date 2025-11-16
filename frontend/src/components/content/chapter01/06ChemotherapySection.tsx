// FILE: src/components/content/chapter01/06ChemotherapySection.tsx
import { AlertTriangle, Pill, Activity } from 'lucide-react';
import { ContentCard } from "../ContentCard";
import { DataTable } from "../DataTable";
import { InfoBox } from "../InfoBox";
import { DataSourceIndicator, useHybridContent } from '@/hooks/useHybridContent';
import twoincorrect from '../../../assets/two-incorrect.png';
import oneincorrect from '../../../assets/one-incorrect.png';
import adverseEffects from '../../../assets/AdverseEffects.png';

// Fallback data structure - NOW INCLUDES ALL TABLES
const CHEMOTHERAPY_FALLBACK = {
  intro: 'Chemotherapy is a general term to indicate the use of chemicals as a therapy. However, the term is commonly used for cytotoxic chemotherapy in cancer management and is considered as hazardous drugs. Systemic Anti-Cancer Therapy (SACT) refers to drug-based cancer treatments introduced as systemic therapy and it includes chemotherapy, hormone drugs, immunotherapy, targeted therapy, and antibody-drug conjugates.',
  sactNote: 'Can be used either alone or in combination with other types of treatments such as surgery or radiation therapy. Combination treatments are effective and common in the eradication or mitigation of cancer.',
  administration: 'Chemotherapy is administered through oral, intravenous (IV), subcutaneous (SC), intramuscular (IM), or intrathecal routes (IT). IV route administration is common due to increased bioavailability, versatility, and flexibility in treatment dosages when compared to other routes of administration.',
  historical: 'Chemotherapeutic agents were developed in the 1940s and were primarily used to treat cancer and a few other non-oncology indications such as arthritis, and lupus. Chemotherapy shows cytotoxic properties (kills cancer cells) in providing therapeutic efficacy.',
  mechanisms: 'Non-selective mechanisms and narrow therapeutic properties of many agents cause numerous adverse effects. Therefore, target-specific drugs which mainly target cancer cells or specific proteins on cancer cells are introduced. However, those agents are not cost-effective with advanced processing mechanisms.',
  classificationNote: 'Adverse effects of chemotherapy are mainly classified according to: (1) general mechanisms of drugs (non-selective vs target-specific), (2) drug groups, (3) body systems or organs (cardiac, hepatic, renal, hematopoietic, pulmonary, reproductive, dermal etc.), and (4) adverse effects presenting time (acute vs chronic).',
  temporalIntro: 'Adverse effects of chemotherapy can be outlined according to the presenting time. Generally, reversible adverse effects are present after administration of chemotherapy and are considered as acute adverse effects. Late effects are regarded as long-term and non-reversible.',
  acuteEffects: 'Occur shortly after treatment administration. Generally reversible with proper management and supportive care.',
  chronicEffects: 'Long-term or late-onset effects that may persist after treatment completion. Often non-reversible and require ongoing monitoring.',
  clinicalNote: 'Understanding the temporal pattern of adverse effects is crucial for oncology nurses to provide appropriate patient education, implement timely interventions, and plan for long-term follow-up care.',
  
  // NEW: All table fallbacks
  mechanismTable: {
    headers: { col0: "Category", col1: "Non-specific Anticancer Drugs", col2: "Target Specific Anti-cancer Drugs" },
    rows: {
      row0: { col0: "Mechanism", col1: "Act on both malignant and normal cells", col2: "Act selectively only on malignant cells" },
      row1: { col0: "Example Drugs", col1: "Methotrexate\n5-Fluorouracil\nCyclophosphamide\nCisplatin\nDoxorubicin\nIrinotecan\nMitoxantrone\nVinblastine\nPaclitaxel\nTamoxifen", col2: "Imatinib\nSorafenib\nPalbociclib\nBevacizumab\nBortezomib\nMitoxantrone\nTrastuzumab\nCetuximab\nBrentuximab\nElotuzumab" },
      row2: { col0: "Adverse Effects", col1: "Thrombocytopenia\nNeutropenia\nGI issues\nNeurotoxicity\nMyelosuppression\nSecondary leukemia\nPeripheral neuropathy", col2: "Nausea\nVomiting\nSkin toxicities\nDry skin\nCongestive heart failure\nHypertension\nProteinuria" }
    }
  },
  
  alkylatingAgentsTable: {
    headers: { col0: "Sub-class", col1: "Example Drugs", col2: "Common Toxicities" },
    rows: {
      row0: { col0: "Nitrogen mustards", col1: "Cyclophosphamide\nIfosfamide", col2: "Nausea, vomiting, bone marrow depression, cystitis, pulmonary fibrosis, infertility, premature menopause, myelodysplasia, secondary neoplasia" },
      row1: { col0: "Platinum agents", col1: "Cisplatin\nCarboplatin\nOxaliplatin", col2: "Bone marrow depression, nausea, vomiting, allergy, nephrotoxicity, hypomagnesemia, hypocalcemia, hypokalemia, hypophosphatemia, hyperuricemia, Raynaud's disease, sterility, teratogenicity, ototoxicity, peripheral neuropathy, cold dysesthesia, laryngopharyngeal dysesthesia" }
    }
  },
  
  antimetabolitesTable: {
    headers: { col0: "Sub-class", col1: "Example Drugs", col2: "Common Toxicities" },
    rows: {
      row0: { col0: "Folic acid analogues", col1: "Methotrexate\nPemetrexed\nPralatrexate", col2: "Acute renal failure, neurotoxicity, hepatotoxicity" },
      row1: { col0: "Pyrimidine analogues", col1: "5-fluorouracil\nCapecitabine\nFloxuridine\nGemcitabine", col2: "GI issues, leukopenia, thrombocytopenia, hemorrhage" }
    }
  },
  
  antimitoticAgentsTable: {
    headers: { col0: "Sub-class", col1: "Example Drugs", col2: "Common Toxicities" },
    rows: {
      row0: { col0: "Vinca alkaloids", col1: "Vincristine\nVinblastine\nVinorelbine", col2: "Leukopenia, thrombocytopenia, anemia, peripheral neuropathy, neuronal death" },
      row1: { col0: "Taxanes", col1: "Docetaxel\nCabazitaxel\nPaclitaxel", col2: "Nausea, vomiting, hypersensitivity, bone marrow depression, fluid retention, peripheral neuropathy, alopecia, arthralgia, myalgias, cardiac toxicity, mild GI disturbances, mucositis" }
    }
  },
  
  topoisomeraseInhibitorsTable: {
    headers: { col0: "Sub-class", col1: "Example Drugs", col2: "Common Toxicities" },
    rows: {
      row0: { col0: "Topoisomerase 1 inhibitors", col1: "Irinotecan\nTopotecan", col2: "Diarrhea, abdominal cramps, hair loss or thinning, increased sweating and saliva, nausea, vomiting, loss of appetite, tiredness, watery eyes, occasionally cause mouth sores and ulcers, muscle cramps, rashes, myelosuppression" },
      row1: { col0: "Topoisomerase 2 inhibitors", col1: "Etoposide\nTeniposide", col2: "Hair loss, nausea and vomiting, anorexia, stomatitis, bone marrow suppression, leukopenia" }
    }
  },
  
  antitumorAntibioticsTable: {
    headers: { col0: "Sub-class", col1: "Example Drugs", col2: "Common Toxicities" },
    rows: {
      row0: { col0: "Anthracycline", col1: "Doxorubicin\nDaunorubicin\nEpirubicin\nIdarubicin\nValrubicin", col2: "Nausea, vomiting, bone marrow depression, cardiotoxicity, red-colored urine, severe local tissue damage with extravasation, alopecia, stomatitis, anorexia, conjunctivitis, acral pigmentation, dermatitis, hyperuricemia" },
      row1: { col0: "Other", col1: "Mitoxantrone\nBleomycin", col2: "Bone marrow suppression, irreversible cardiomyopathy, anaphylactic reactions" }
    }
  },
  
  immunotherapyTable: {
    headers: { col0: "Sub-class", col1: "Example Drugs", col2: "Common Toxicities" },
    rows: {
      row0: { col0: "Monoclonal antibodies", col1: "Rituximab\nOfatumumab\nObinutuzumab\nAlemtuzumab\nDaratumumab", col2: "Infusion-related reactions (including fever, chills, shortness of breath, low blood pressure, and anaphylaxis), myelosuppression, increased risk of opportunistic infections, liver toxicity" },
      row1: { col0: "Small molecules", col1: "Thalidomide\nLenalidomide\nPomalidomide", col2: "Various toxicities depending on specific agent" }
    }
  }
};

// Helper function to convert table format to array format
function tableToArray(table: { headers: Record<string, string>, rows: Record<string, Record<string, string>> }): { headers: string[], rows: string[][] } {
  const headers = Object.keys(table.headers)
    .sort() // col0, col1, col2
    .map(colKey => table.headers[colKey]);
  
  const rows = Object.keys(table.rows)
    .sort() // row0, row1, row2
    .map(rowKey => {
      const row = table.rows[rowKey];
      return Object.keys(row)
        .sort() // col0, col1, col2
        .map(colKey => row[colKey]);
    });
  
  return { headers, rows };
}

export const ChemotherapySection: React.FC = () => {
  const { data, source } = useHybridContent({
    chapterId: 'chapter-01',
    sectionId: 'chemotherapy',
    fallbackData: CHEMOTHERAPY_FALLBACK
  });

  // Convert all tables from object format to array format
  const mechanismTable = tableToArray(data.mechanismTable);
  const alkylatingTable = tableToArray(data.alkylatingAgentsTable);
  const antimetabolitesTable = tableToArray(data.antimetabolitesTable);
  const antimitoticTable = tableToArray(data.antimitoticAgentsTable);
  const topoisomeraseTable = tableToArray(data.topoisomeraseInhibitorsTable);
  const antitumorTable = tableToArray(data.antitumorAntibioticsTable);
  const immunotherapyTable = tableToArray(data.immunotherapyTable);

  return (
    <>
      <DataSourceIndicator source={source} />
      
      {/* Introduction Card */}
      <ContentCard 
        title="Chemotherapy and Adverse Effects" 
        icon={<Pill className="w-6 h-6 text-purple-600" />}
        variant="highlight"
      >
        <div className="space-y-4">
          <p className="text-slate-700 leading-relaxed">
            {data.intro}
          </p>
          
          <div className="bg-teal-50 rounded-lg p-4 border-2 border-teal-200">
            <p className="text-slate-700 text-sm">
              <strong>SACT Applications:</strong> {data.sactNote}
            </p>
          </div>

          <p className="text-slate-700 leading-relaxed">
            {data.administration}
          </p>
        </div>
      </ContentCard>

      {/* Historical Context */}
      <ContentCard 
        title="Historical Development" 
        icon={<Activity className="w-6 h-6 text-blue-600" />}
        variant="info"
      >
        <div className="space-y-4">
          <p className="text-slate-700 leading-relaxed">
            {data.historical}
          </p>

          <p className="text-slate-700 leading-relaxed">
            {data.mechanisms}
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-2 border-blue-200 shadow-sm">
              <h5 className="font-bold text-blue-900 mb-2">Non-Selective Mechanisms</h5>
              <p className="text-sm text-slate-600">
                Narrow therapeutic properties of many agents cause numerous adverse effects
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border-2 border-green-200 shadow-sm">
              <h5 className="font-bold text-green-900 mb-2">Target-Specific Drugs</h5>
              <p className="text-sm text-slate-600">
                Mainly target cancer cells or specific proteins, but less cost-effective with advanced processing
              </p>
            </div>
          </div>

          <InfoBox type="note">
            {data.classificationNote}
          </InfoBox>
        </div>
      </ContentCard>

      {/* Classification Table 1: Non-selective vs Target-specific - NOW EDITABLE! */}
      <ContentCard 
        title="Classification by Drug Mechanism" 
        icon={<span className="text-2xl">⚖️</span>}
      >
        <p className="text-slate-700 mb-4 text-sm italic">
          Table 4: Classification of chemotherapy and adverse effects (non-selective vs target-specific drugs)
        </p>
        
        {/* Mechanism Images - Always hardcoded */}
        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200">
            <h5 className="font-bold text-red-900 mb-3 text-center">Non-Selective Action</h5>
            <div className="flex justify-center">
              <img
                src={twoincorrect}
                alt="Non-selective mechanism affecting both cancer and normal cells"
                className="rounded-lg shadow-lg max-h-64 w-auto"
              />
            </div>
            <p className="text-xs text-slate-600 mt-2 text-center italic">
              Acts on both malignant and normal cells
            </p>
          </div>
          
          <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
            <h5 className="font-bold text-green-900 mb-3 text-center">Target-Specific Action</h5>
            <div className="flex justify-center">
              <img
                src={oneincorrect}
                alt="Target-specific mechanism affecting only cancer cells"
                className="rounded-lg shadow-lg max-h-64 w-auto"
              />
            </div>
            <p className="text-xs text-slate-600 mt-2 text-center italic">
              Acts selectively only on malignant cells
            </p>
          </div>
        </div>

        {/* NOW USING FIREBASE DATA! */}
        <DataTable 
          headers={mechanismTable.headers}
          rows={mechanismTable.rows}
        />
      </ContentCard>

      {/* Classification Table 2: Drug Groups - NOW ALL EDITABLE! */}
      <ContentCard 
        title="Classification by Drug Groups" 
        icon={<AlertTriangle className="w-6 h-6 text-orange-600" />}
        variant="warning"
      >
        <p className="text-slate-700 mb-4">
          Adverse effects are frequently categorized according to drug groups since those correspond with the 
          particular mechanism of action.
        </p>
        
        <p className="text-slate-700 mb-4 text-sm italic">
          Table 5: Classification of chemotherapy (drug-group wise) and adverse effects
        </p>

        {/* 1. Alkylating Agents - NOW EDITABLE */}
        <div className="mb-6">
          <h5 className="font-bold text-slate-900 mb-3 bg-slate-100 p-2 rounded">1. Alkylating Agents</h5>
          <DataTable 
            headers={alkylatingTable.headers}
            rows={alkylatingTable.rows}
          />
        </div>

        {/* 2. Anti-metabolites - NOW EDITABLE */}
        <div className="mb-6">
          <h5 className="font-bold text-slate-900 mb-3 bg-slate-100 p-2 rounded">2. Anti-metabolites</h5>
          <DataTable 
            headers={antimetabolitesTable.headers}
            rows={antimetabolitesTable.rows}
          />
        </div>

        {/* 3. Anti-mitotic Agents - NOW EDITABLE */}
        <div className="mb-6">
          <h5 className="font-bold text-slate-900 mb-3 bg-slate-100 p-2 rounded">3. Anti-mitotic Agents</h5>
          <DataTable 
            headers={antimitoticTable.headers}
            rows={antimitoticTable.rows}
          />
        </div>

        {/* 4. Topoisomerase Inhibitors - NOW EDITABLE */}
        <div className="mb-6">
          <h5 className="font-bold text-slate-900 mb-3 bg-slate-100 p-2 rounded">4. Topoisomerase Inhibitors</h5>
          <DataTable 
            headers={topoisomeraseTable.headers}
            rows={topoisomeraseTable.rows}
          />
        </div>

        {/* 5. Anti-tumor Antibiotics - NOW EDITABLE */}
        <div className="mb-6">
          <h5 className="font-bold text-slate-900 mb-3 bg-slate-100 p-2 rounded">5. Anti-tumor Antibiotics</h5>
          <DataTable 
            headers={antitumorTable.headers}
            rows={antitumorTable.rows}
          />
        </div>

        {/* 6. Immunotherapy - NOW EDITABLE */}
        <div className="mb-6">
          <h5 className="font-bold text-slate-900 mb-3 bg-slate-100 p-2 rounded">6. Immunotherapy</h5>
          <DataTable 
            headers={immunotherapyTable.headers}
            rows={immunotherapyTable.rows}
          />
        </div>
      </ContentCard>

      {/* Temporal Classification */}
      <ContentCard 
        title="Classification by Time of Presentation" 
        icon={<span className="text-2xl">⏱️</span>}
        variant="info"
      >
        <p className="text-slate-700 leading-relaxed mb-6">
          {data.temporalIntro}
        </p>

        {/* Image - Always hardcoded */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
          <h5 className="font-bold text-purple-900 mb-4 text-center">
            Adverse Effects of Chemotherapy (Acute vs Chronic)
          </h5>
          <div className="flex justify-center">
            <img
              src={adverseEffects}
              alt="Classification of adverse effects by timing: acute versus chronic"
              className="rounded-lg shadow-2xl max-w-full w-auto"
              style={{ maxHeight: '700px' }}
            />
          </div>
          <p className="text-xs text-slate-600 mt-4 text-center italic">
            Adverse effects of chemotherapy (Acute vs chronic)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-orange-50 rounded-lg p-5 border-2 border-orange-200">
            <h5 className="font-bold text-orange-900 mb-3">⚡ Acute Effects</h5>
            <p className="text-sm text-slate-700">
              {data.acuteEffects}
            </p>
          </div>

          <div className="bg-red-50 rounded-lg p-5 border-2 border-red-200">
            <h5 className="font-bold text-red-900 mb-3">🔄 Chronic Effects</h5>
            <p className="text-sm text-slate-700">
              {data.chronicEffects}
            </p>
          </div>
        </div>

        <InfoBox type="tip">
          <strong>Clinical Practice Note:</strong> {data.clinicalNote}
        </InfoBox>
      </ContentCard>
    </>
  );
};

export default ChemotherapySection;