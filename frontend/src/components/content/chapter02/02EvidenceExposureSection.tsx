// src/components/content/chapter02/02EvidenceExposureSection.tsx
import { AlertTriangle, Activity, FileText, TrendingUp } from 'lucide-react';
import { ContentCard } from "../ContentCard";
import { DataTable } from "../DataTable";
import { InfoBox } from "../InfoBox";
import { StatCard } from "../StatCard";
import { DataSourceIndicator, useHybridContent } from '@/hooks/useHybridContent';
import evidence from '../../../assets/evidence.png';

// Fallback data - matches migration structure
const EVIDENCE_FALLBACK = {
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
  
  researchTable: {
    headers: {
      col0: "Research Methods",
      col1: "Main Findings on Occupational Exposure and Adverse Effects"
    },
    rows: {
      row0: { col0: "Meta-analysis", col1: "Antineoplastic agents increase nurses' risk of spontaneous abortions, stillbirths, and congenital abnormalities." },
      row1: { col0: "Review", col1: "Several studies reported remarkable portions of ADs or their metabolites in biological samples of HCWs. Nurses who directly handle ADs identified the greater risk category of contamination." },
      row2: { col0: "Mixed Study among HCWs in southern Brazil", col1: "Drug exposure methods are dermal contact, aerosols/inhalation, and ingestion.\n\nLack of knowledge and weaknesses in handling drugs are reported." },
      row3: { col0: "Case-Control Study among nurses in Cairo University, Egypt", col1: "<ul><li>Prevalence of menstrual disorders and abortions among exposed HCWs was significantly associated with drug handling (compared to controls).</li><li>Adverse effects: Frequent infections (37.5%), hair loss (68.8%) (only among exposure groups).</li><li>Other adverse effects: Allergic symptoms (59.4%)</li><li>Exposure to Cisplatin was statistically significant with kidney and liver function tests and DNA damage.</li></ul>" },
      row4: { col0: "Cross-sectional, comparative study among nurses, Turkey", col1: "Prevalence of fatigue - 67.1%, weakness - 50.7%, hair loss - 41.1%\n\nThe prevalence of hair loss and dizziness was significant with the administration of antineoplastic drugs." },
      row5: { col0: "Descriptive cross-sectional study among nurses, nursing assistants, Latvia", col1: "Prevalence of at least one adverse effect - 56.86%\n\nCommon acute adverse effect: headache (37.25%)\n\nEye irritation - 25.49%, skin irritation - 19.60%\n\nWorking years are significantly and positively associated with headache, dizziness, irritation of the mouth and throat, and irritation of the eyes" }
    }
  },
  
  stats: {
    hairLoss: { number: '68.8%', label: 'Hair Loss (Egypt)', color: 'bg-purple-100' },
    fatigue: { number: '67.1%', label: 'Fatigue (Turkey)', color: 'bg-blue-100' },
    allergic: { number: '59.4%', label: 'Allergic Symptoms (Egypt)', color: 'bg-pink-100' }
  },
  
  researchImplications: 'The consistent findings across multiple research methods and geographic locations strongly support the need for rigorous safety precautions when handling chemotherapy. The correlation between years of exposure and adverse effects highlights the cumulative nature of occupational risk.'
};

// Helper to convert table
function tableToArray(table: { headers: Record<string, string>, rows: Record<string, Record<string, string>> }): { headers: string[], rows: string[][] } {
  const headers = Object.keys(table.headers).sort().map(k => table.headers[k]);
  const rows = Object.keys(table.rows).sort().map(rowKey => {
    const row = table.rows[rowKey];
    return Object.keys(row).sort().map(k => row[k]);
  });
  return { headers, rows };
}

export const EvidenceExposureSection: React.FC = () => {
  const { data, source } = useHybridContent({
    chapterId: 'chapter-02',
    sectionId: 'evidence',
    fallbackData: EVIDENCE_FALLBACK
  });

  const researchTable = tableToArray(data.researchTable);

  return (
    <>
      <DataSourceIndicator source={source} />
      
      {/* Historical Context Card */}
      <ContentCard 
        title="Evidence of Occupational Exposure and Adverse Effects Among HCWs" 
        icon={<AlertTriangle className="w-6 h-6 text-red-600" />}
        variant="warning"
      >
        <div className="space-y-4">
          <div className="bg-linear-to-r from-red-50 to-orange-50 rounded-xl p-5 border-2 border-red-200">
            <h5 className="font-bold text-red-900 mb-3 flex items-center gap-2">
              📅 Historical Context (1970s)
            </h5>
            <p className="text-slate-700 leading-relaxed mb-3">
              {data.historicalIntro}
            </p>
            <p className="text-slate-700 leading-relaxed">
              {data.historicalConclusion}
            </p>
          </div>

          <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200">
            <p className="text-slate-700 text-sm">
              <strong>🎯 Key Finding:</strong> {data.keyFinding}
            </p>
          </div>

          <div className="bg-white rounded-lg p-5 border-2 border-slate-200 shadow-md">
            <h6 className="font-bold text-slate-900 mb-3">⚖️ Occupational Exposure Limits (OELs)</h6>
            <p className="text-slate-700 text-sm mb-2">
              {data.oelIntro}
            </p>
            <div className="bg-amber-50 rounded p-3 border-l-4 border-amber-500 mt-3">
              <p className="text-sm text-slate-700">
                <strong>Important:</strong> {data.oelImportant}
              </p>
            </div>
          </div>
        </div>
      </ContentCard>

      {/* Detection Methods Card */}
      <ContentCard 
        title="Detection of Occupational Exposure" 
        icon={<Activity className="w-6 h-6 text-purple-600" />}
        variant="info"
      >
        <div className="space-y-4">
          <p className="text-slate-700 leading-relaxed bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
            {data.detectionIntro}
          </p>

          <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-xl p-5 border-2 border-purple-200">
            <h5 className="font-bold text-purple-900 mb-3">🔬 Why Detection Matters</h5>
            <p className="text-slate-700 text-sm mb-3">
              {data.detectionWhy}
            </p>
            <ul className="space-y-2 text-sm text-slate-700 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span>{data.detectionSignificance1}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span>{data.detectionSignificance2}</span>
              </li>
            </ul>
            <p className="text-slate-700 text-sm mt-3">
              <strong>{data.detectionConclusion}</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 rounded-lg p-5 border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <h5 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                🏥 Workplace Contamination
              </h5>
              <ul className="space-y-2 text-sm text-slate-700">
                {data.workplaceContamination.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-purple-600">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <h5 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                🧬 Biological Monitoring
              </h5>
              <ul className="space-y-2 text-sm text-slate-700">
                {data.biologicalMonitoring.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <InfoBox type="note">
            <strong>Universal Finding:</strong> {data.universalFinding}
          </InfoBox>
        </div>
      </ContentCard>

      {/* Analytical Methods Card */}
      <ContentCard 
        title="Analytical Detection Methods" 
        icon={<FileText className="w-6 h-6 text-teal-600" />}
      >
        <div className="space-y-4">
          <p className="text-slate-700 leading-relaxed">
            {data.analyticalIntro}
          </p>

          <div className="bg-linear-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-2 border-teal-200 mb-6">
            <h5 className="font-bold text-teal-900 mb-4 text-center">
              🔬 Commonly Detected Chemotherapy Drugs
            </h5>
            <div className="grid md:grid-cols-2 gap-4">
              {[data.commonlyDetectedDrugs.slice(0, 4), data.commonlyDetectedDrugs.slice(4)].map((column, colIdx) => (
                <div key={colIdx} className="bg-white rounded-lg p-4 shadow-md">
                  <ul className="space-y-2 text-sm text-slate-700">
                    {column.map((drug: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold text-lg">✓</span>
                        <span><strong>{drug}</strong></span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-100 rounded-lg p-5 border-2 border-slate-300">
            <h6 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Activity className="w-5 h-5 text-slate-700" />
              Analytical Methods Used
            </h6>
            <ul className="space-y-2 text-sm text-slate-700">
              {data.analyticalMethods.map((method: string, idx: number) => {
                const [title, ...descParts] = method.split(':');
                const description = descParts.join(':');
                return (
                  <li key={idx} className="flex items-start gap-3 bg-white p-3 rounded">
                    <span className="text-teal-600 font-bold">{idx + 1}.</span>
                    <div>
                      <strong>{title}</strong>
                      {description && (
                        <>
                          <br />
                          <span className="text-xs text-slate-600">{description}</span>
                        </>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </ContentCard>

      {/* Adverse Effects Overview Card */}
      <ContentCard 
        title="Adverse Effects Among Healthcare Workers" 
        icon={<TrendingUp className="w-6 h-6 text-pink-600" />}
        variant="warning"
      >
        <div className="space-y-4">
          <p className="text-slate-700 leading-relaxed bg-amber-50 p-4 rounded-lg border-2 border-amber-200">
            {data.adverseIntro}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 rounded-lg p-5 border-2 border-orange-200 hover:shadow-xl transition-shadow">
              <h5 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                ⚡ Common Acute Effects
              </h5>
              <ul className="space-y-2 text-sm text-slate-700">
                {data.acuteEffects.map((effect: string, idx: number) => {
                  const emojis = ['🤕', '🤢', '💇', '🩹', '👁️', '😵'];
                  return (
                    <li key={idx} className="flex items-center gap-2 bg-white p-2 rounded">
                      <span className="text-orange-600">{emojis[idx] || '•'}</span>
                      <span>{effect}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-5 border-2 border-red-200 hover:shadow-xl transition-shadow">
              <h5 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                🔴 Reproductive Effects
              </h5>
              <ul className="space-y-2 text-sm text-slate-700">
                {data.reproductiveEffects.map((effect: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 bg-white p-2 rounded">
                    <span className="text-red-600 font-bold">×</span>
                    <span>{effect}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border-2 border-slate-200 shadow-lg">
            <p className="text-slate-700 leading-relaxed text-center mb-4">
              {data.commonAEsDetail}
            </p>
            <div className="flex justify-center">
              <img
                src={evidence}
                alt="Common Adverse Effects visualization"
                className="rounded-xl shadow-2xl max-w-md w-auto border-2 border-slate-200"
              />
            </div>
          </div>

          <InfoBox type="tip">
            <strong>⚠️ Critical Note:</strong> {data.criticalNote}
          </InfoBox>
        </div>
      </ContentCard>

      {/* Historical Evidence Table */}
      <ContentCard 
        title="Historical Evidence: Research Findings" 
        icon={<span className="text-2xl">📊</span>}
      >
        <p className="text-slate-700 mb-4 text-sm italic">
          Table 7: Evidence on exposure to chemotherapy and adverse effects
        </p>

        <DataTable 
          headers={researchTable.headers}
          rows={researchTable.rows}
        />

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <StatCard 
            number={data.stats.hairLoss.number} 
            label={data.stats.hairLoss.label} 
            color={data.stats.hairLoss.color} 
          />
          <StatCard 
            number={data.stats.fatigue.number} 
            label={data.stats.fatigue.label} 
            color={data.stats.fatigue.color} 
          />
          <StatCard 
            number={data.stats.allergic.number} 
            label={data.stats.allergic.label} 
            color={data.stats.allergic.color} 
          />
        </div>

        <div className="mt-6 bg-amber-50 rounded-lg p-5 border-2 border-amber-200">
          <h5 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Key Research Implications
          </h5>
          <p className="text-sm text-slate-700">
            {data.researchImplications}
          </p>
        </div>
      </ContentCard>
    </>
  );
};

export default EvidenceExposureSection;