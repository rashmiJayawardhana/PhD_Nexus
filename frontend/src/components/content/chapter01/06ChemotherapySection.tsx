// FILE: src/components/content/chapter01/06ChemotherapySection.tsx
import { AlertTriangle, Pill, Activity } from 'lucide-react';
import { ContentCard } from "../ContentCard";
import { DataTable } from "../DataTable";
import { InfoBox } from "../InfoBox";
import { DataSourceIndicator, useHybridContent } from '@/hooks/useHybridContent';
import twoincorrect from '../../../assets/two-incorrect.png';
import oneincorrect from '../../../assets/one-incorrect.png';
import adverseEffects from '../../../assets/AdverseEffects.png';

// Fallback data structure
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
  clinicalNote: 'Understanding the temporal pattern of adverse effects is crucial for oncology nurses to provide appropriate patient education, implement timely interventions, and plan for long-term follow-up care.'
};

export const ChemotherapySection: React.FC = () => {
  const { data, source } = useHybridContent({
    chapterId: 'chapter-01',
    sectionId: 'chemotherapy',
    fallbackData: CHEMOTHERAPY_FALLBACK
  });

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

      {/* Classification Table 1: Non-selective vs Target-specific */}
      {/* All tables remain hardcoded - too complex for editing */}
      <ContentCard 
        title="Classification by Drug Mechanism" 
        icon={<span className="text-2xl">⚖️</span>}
      >
        <p className="text-slate-700 mb-4 text-sm italic">
          Table 4: Classification of chemotherapy and adverse effects (non-selective vs target-specific drugs)
        </p>
        
        <DataTable 
          headers={["Category", "Non-specific Anticancer Drugs", "Target Specific Anti-cancer Drugs"]}
          rows={[
            [
              "Mechanism",
              "Act on both malignant and normal cells",
              "Act selectively only on malignant cells"
            ]
          ]}
        />

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

        {/* Example Drugs and Adverse Effects */}
        <DataTable 
          headers={["Category", "Non-specific Anticancer Drugs", "Target Specific Anti-cancer Drugs"]}
          rows={[
            [
              "Example Drugs",
              "Methotrexate\n5-Fluorouracil\nCychphophamids\nCisplatin\nDoxorubicin\nIrinotecan\nMitoxantrone\nVinblastine\nPaclitaxel\nTamoxifen",
              "Imatinib\nSorafenib\nPalbociclib\nBevacizumab\nBortezomib\nMitoxantrone\nTrastuzumab\nCetuximab\nBrentuximab\nElotuzumab"
            ],
            [
              "Adverse Effects",
              "Thrombocytopenia\nNeutropenia\nGI issues\nNeurotoxicity\nMyelosuppression\nSecondary leukemia\nPeripheral neuropathy",
              "Nausea\nVomiting\nSkin toxicities\nDry skin\nCongestive heart failure\nHypertension\nProteinuria"
            ]
          ]}
        />
      </ContentCard>

      {/* Classification Table 2: Drug Groups - All hardcoded */}
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

        {/* Alkylating Agents */}
        <div className="mb-6">
          <h5 className="font-bold text-slate-900 mb-3 bg-slate-100 p-2 rounded">1. Alkylating Agents</h5>
          <DataTable 
            headers={["Sub-class", "Example Drugs", "Common Toxicities"]}
            rows={[
              [
                "Nitrogen mustards",
                "Cyclophosphamide\nIfosfamide",
                "Nausea, vomiting, bone marrow depression, cystitis, pulmonary fibrosis, infertility, premature menopause, myelodysplasia, secondary neoplasia"
              ],
              [
                "Platinum agents",
                "Cisplatin\nCarboplatin\nOxaliplatin",
                "Bone marrow depression, nausea, vomiting, allergy, nephrotoxicity, hypomagnesemia, hypocalcemia, hypokalemia, hypophosphatemia, hyperuricemia, Raynaud's disease, sterility, teratogenicity, ototoxicity, peripheral neuropathy, cold dysesthesia, laryngopharyngeal dysesthesia"
              ]
            ]}
          />
        </div>

        {/* Anti-metabolites */}
        <div className="mb-6">
          <h5 className="font-bold text-slate-900 mb-3 bg-slate-100 p-2 rounded">2. Anti-metabolites</h5>
          <DataTable 
            headers={["Sub-class", "Example Drugs", "Common Toxicities"]}
            rows={[
              [
                "Folic acid analogues",
                "Methotrexate\nPemetrexed\nPralatrexate",
                "Acute renal failure, neurotoxicity, hepatotoxicity"
              ],
              [
                "Pyrimidine analogues",
                "5-fluorouracil\nCapecitabine\nFloxuridine\nGemcitabine",
                "GI issues, leukopenia, thrombocytopenia, hemorrhage"
              ]
            ]}
          />
        </div>

        {/* Anti-mitotic Agents */}
        <div className="mb-6">
          <h5 className="font-bold text-slate-900 mb-3 bg-slate-100 p-2 rounded">3. Anti-mitotic Agents</h5>
          <DataTable 
            headers={["Sub-class", "Example Drugs", "Common Toxicities"]}
            rows={[
              [
                "Vinca alkaloids",
                "Vincristine\nVinblastine\nVinorelbine",
                "Leukopenia, thrombocytopenia, anemia, peripheral neuropathy, neuronal death"
              ],
              [
                "Taxanes",
                "Docetaxel\nCabazitaxel\nPaclitaxel",
                "Nausea, vomiting, hypersensitivity, bone marrow depression, fluid retention, peripheral neuropathy, alopecia, arthralgia, myalgias, cardiac toxicity, mild GI disturbances, mucositis"
              ]
            ]}
          />
        </div>

        {/* Topoisomerase Inhibitors */}
        <div className="mb-6">
          <h5 className="font-bold text-slate-900 mb-3 bg-slate-100 p-2 rounded">4. Topoisomerase Inhibitors</h5>
          <DataTable 
            headers={["Sub-class", "Example Drugs", "Common Toxicities"]}
            rows={[
              [
                "Topoisomerase 1 inhibitors",
                "Irinotecan\nTopotecan",
                "Diarrhea, abdominal cramps, hair loss or thinning, increased sweating and saliva, nausea, vomiting, loss of appetite, tiredness, watery eyes, occasionally cause mouth sores and ulcers, muscle cramps, rashes, myelosuppression"
              ],
              [
                "Topoisomerase 2 inhibitors",
                "Etoposide\nTeniposide",
                "Hair loss, nausea and vomiting, anorexia, stomatitis, bone marrow suppression, leukopenia"
              ]
            ]}
          />
        </div>

        {/* Anti-tumor Antibiotics */}
        <div className="mb-6">
          <h5 className="font-bold text-slate-900 mb-3 bg-slate-100 p-2 rounded">5. Anti-tumor Antibiotics</h5>
          <DataTable 
            headers={["Sub-class", "Example Drugs", "Common Toxicities"]}
            rows={[
              [
                "Anthracycline",
                "Doxorubicin\nDaunorubicin\nEpirubicin\nIdarubicin\nValrubicin",
                "Nausea, vomiting, bone marrow depression, cardiotoxicity, red-colored urine, severe local tissue damage with extravasation, alopecia, stomatitis, anorexia, conjunctivitis, acral pigmentation, dermatitis, hyperuricemia"
              ],
              [
                "Other",
                "Mitoxantrone\nBleomycin",
                "Bone marrow suppression, irreversible cardiomyopathy, anaphylactic reactions"
              ]
            ]}
          />
        </div>

        {/* Immunotherapy */}
        <div className="mb-6">
          <h5 className="font-bold text-slate-900 mb-3 bg-slate-100 p-2 rounded">6. Immunotherapy</h5>
          <DataTable 
            headers={["Sub-class", "Example Drugs", "Common Toxicities"]}
            rows={[
              [
                "Monoclonal antibodies",
                "Rituximab\nOfatumumab\nObinutuzumab\nAlemtuzumab\nDaratumumab",
                "Infusion-related reactions (including fever, chills, shortness of breath, low blood pressure, and anaphylaxis), myelosuppression, increased risk of opportunistic infections, liver toxicity"
              ],
              [
                "Small molecules",
                "Thalidomide\nLenalidomide\nPomalidomide",
                "Various toxicities depending on specific agent"
              ]
            ]}
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