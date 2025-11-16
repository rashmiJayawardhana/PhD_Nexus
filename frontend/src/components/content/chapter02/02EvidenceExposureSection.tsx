// src/components/content/chapter02/EvidenceExposureSection.tsx
import { AlertTriangle, Activity, FileText, TrendingUp } from 'lucide-react';
import { ContentCard } from "../ContentCard";
import { DataTable } from "../DataTable";
import { InfoBox } from "../InfoBox";
import { StatCard } from "../StatCard";
import evidence from '../../../assets/evidence.png';

export const EvidenceExposureSection: React.FC = () => (
  <>
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
            First concerns about the occupational exposure to anti-cancer agents were raised in the 1970s[12]. 
            First detected increased urinary mutagenic substances among nurses who prepared and administered 
            antineoplastic drugs compared to unexposed HCWs[11].
          </p>
          <p className="text-slate-700 leading-relaxed">
            Therefore, safety precautions and guidelines are established to minimize occupational exposure 
            and related adverse effects.
          </p>
        </div>

        <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200">
          <p className="text-slate-700 text-sm">
            <strong>🎯 Key Finding:</strong> Each person and every step of handling chemotherapy (manufacturing, 
            transportation, preparation, distribution, administration of drugs to patients, and waste disposal) 
            is at risk of exposure[11]. <strong>Nurses and pharmacists are at greater risk in their roles in handling[12].</strong>
          </p>
        </div>

        <div className="bg-white rounded-lg p-5 border-2 border-slate-200 shadow-md">
          <h6 className="font-bold text-slate-900 mb-3">⚖️ Occupational Exposure Limits (OELs)</h6>
          <p className="text-slate-700 text-sm mb-2">
            Some pharmaceutical manufacturers have developed occupational exposure limits (OELs) to apply in 
            automated production lines in the manufacturing process.
          </p>
          <div className="bg-amber-50 rounded p-3 border-l-4 border-amber-500 mt-3">
            <p className="text-sm text-slate-700">
              <strong>Important:</strong> When considering the toxic properties of chemotherapy, OELs are not 
              accepted for hospital settings, and <strong className="text-red-700">zero contamination should be the target.</strong>
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
          The detection of drugs and/or their metabolites in <strong>work surfaces</strong> and/or 
          <strong> biological samples</strong> is widely used to identify occupational exposure and related risks.
        </p>

        <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-xl p-5 border-2 border-purple-200">
          <h5 className="font-bold text-purple-900 mb-3">🔬 Why Detection Matters</h5>
          <p className="text-slate-700 text-sm mb-3">
            However, sampling data on exposure or analytical methodologies could not precisely determine 
            the health risks or adverse effects among HCWs. However, the prevalence of adverse effects is 
            statistically significant in relation to:
          </p>
          <ul className="space-y-2 text-sm text-slate-700 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">✓</span>
              <span>Workplace exposure (primarily among nurses)[11]</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">✓</span>
              <span>The presence of drugs or metabolites in biological samples[22,23]</span>
            </li>
          </ul>
          <p className="text-slate-700 text-sm mt-3">
            Therefore, <strong>detecting workplace/biological exposure helps to implement related 
            policies/work practices to ensure occupational health safety.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-purple-50 rounded-lg p-5 border-2 border-purple-200 hover:shadow-lg transition-shadow">
            <h5 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
              🏥 Workplace Contamination
            </h5>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600">●</span>
                <span>Detection on work surfaces</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">●</span>
                <span>BSCs and countertops</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">●</span>
                <span>Equipment and floors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">●</span>
                <span>Outer surfaces of drug vials</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-200 hover:shadow-lg transition-shadow">
            <h5 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
              🧬 Biological Monitoring
            </h5>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">●</span>
                <span>Urine mutagenicity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">●</span>
                <span>Chromosomal aberrations (CAs)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">●</span>
                <span>Sister chromatid exchanges (SCEs)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">●</span>
                <span>Drug metabolites in blood/urine</span>
              </li>
            </ul>
          </div>
        </div>

        <InfoBox type="note">
          <strong>Universal Finding:</strong> All studies conducted to detect workplace contamination reported 
          detectable concentrations of at least one or more HDs in various healthcare settings[22]. Contamination 
          of the outer surfaces of cytotoxic drug vials is also reported[11,12,24]. Indicating occupational exposure, 
          recent literature reports urine mutagenicity, chromosomal aberrations (CAs), sister chromatid 
          exchanges (SCEs), and other endpoints in pharmacists and nurses who handle chemotherapy[11,25].
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
          Detection of specific chemotherapy drugs is commonly performed using advanced analytical methods. 
          Detection of cyclophosphamide, ifosfamide, fluorouracil, methotrexate, paclitaxel, doxorubicin, 
          and platinum-containing drugs such as Cisplatin and carboplatin is more common with the following 
          analytical methods:
        </p>

        <div className="bg-linear-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-2 border-teal-200 mb-6">
          <h5 className="font-bold text-teal-900 mb-4 text-center">
            🔬 Commonly Detected Chemotherapy Drugs
          </h5>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold text-lg">✓</span>
                  <span><strong>Cyclophosphamide</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold text-lg">✓</span>
                  <span><strong>Ifosfamide</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold text-lg">✓</span>
                  <span><strong>Fluorouracil</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold text-lg">✓</span>
                  <span><strong>Methotrexate</strong></span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold text-lg">✓</span>
                  <span><strong>Paclitaxel</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold text-lg">✓</span>
                  <span><strong>Doxorubicin</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold text-lg">✓</span>
                  <span><strong>Cisplatin</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold text-lg">✓</span>
                  <span><strong>Carboplatin</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 rounded-lg p-5 border-2 border-slate-300">
          <h6 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Activity className="w-5 h-5 text-slate-700" />
            Analytical Methods Used
          </h6>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-3 bg-white p-3 rounded">
              <span className="text-teal-600 font-bold">1.</span>
              <div>
                <strong>HPLC-UV</strong>
                <br />
                <span className="text-xs text-slate-600">High-Performance Liquid Chromatography with Ultraviolet Detection</span>
              </div>
            </li>
            <li className="flex items-start gap-3 bg-white p-3 rounded">
              <span className="text-teal-600 font-bold">2.</span>
              <div>
                <strong>GC-MS / GC-MS-MS</strong>
                <br />
                <span className="text-xs text-slate-600">Gas Chromatography coupled with Mass Spectrometry or Tandem Mass Spectrometry</span>
              </div>
            </li>
            <li className="flex items-start gap-3 bg-white p-3 rounded">
              <span className="text-teal-600 font-bold">3.</span>
              <div>
                <strong>LC-MS-MS</strong>
                <br />
                <span className="text-xs text-slate-600">High-Performance Liquid Chromatography-Tandem Mass Spectroscopy[22]</span>
              </div>
            </li>
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
          <strong>Adverse effects and black box warnings</strong> of anti-cancer drugs are well-documented[2,8,21]. 
          Occupational exposure to chemotherapy also brings similar adverse effects among HCWs.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-orange-50 rounded-lg p-5 border-2 border-orange-200 hover:shadow-xl transition-shadow">
            <h5 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
              ⚡ Common Acute Effects
            </h5>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2 bg-white p-2 rounded">
                <span className="text-orange-600">🤕</span>
                <span>Headaches</span>
              </li>
              <li className="flex items-center gap-2 bg-white p-2 rounded">
                <span className="text-orange-600">🤢</span>
                <span>Nausea and vomiting</span>
              </li>
              <li className="flex items-center gap-2 bg-white p-2 rounded">
                <span className="text-orange-600">💇</span>
                <span>Hair loss</span>
              </li>
              <li className="flex items-center gap-2 bg-white p-2 rounded">
                <span className="text-orange-600">🩹</span>
                <span>Skin irritation</span>
              </li>
              <li className="flex items-center gap-2 bg-white p-2 rounded">
                <span className="text-orange-600">👁️</span>
                <span>Ocular irritation</span>
              </li>
              <li className="flex items-center gap-2 bg-white p-2 rounded">
                <span className="text-orange-600">😵</span>
                <span>Dizziness</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-lg p-5 border-2 border-red-200 hover:shadow-xl transition-shadow">
            <h5 className="font-bold text-red-900 mb-3 flex items-center gap-2">
              🔴 Reproductive Effects
            </h5>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2 bg-white p-2 rounded">
                <span className="text-red-600 font-bold">×</span>
                <span>Miscarriage <span className="text-xs text-red-700">(especially first trimester)</span></span>
              </li>
              <li className="flex items-start gap-2 bg-white p-2 rounded">
                <span className="text-red-600 font-bold">×</span>
                <span>Infertility</span>
              </li>
              <li className="flex items-start gap-2 bg-white p-2 rounded">
                <span className="text-red-600 font-bold">×</span>
                <span>Preterm births</span>
              </li>
              <li className="flex items-start gap-2 bg-white p-2 rounded">
                <span className="text-red-600 font-bold">×</span>
                <span>Learning disabilities in offspring</span>
              </li>
              <li className="flex items-start gap-2 bg-white p-2 rounded">
                <span className="text-red-600 font-bold">×</span>
                <span>Spontaneous abortions</span>
              </li>
              <li className="flex items-start gap-2 bg-white p-2 rounded">
                <span className="text-red-600 font-bold">×</span>
                <span>Stillbirths</span>
              </li>
              <li className="flex items-start gap-2 bg-white p-2 rounded">
                <span className="text-red-600 font-bold">×</span>
                <span>Congenital abnormalities</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border-2 border-slate-200 shadow-lg">
          <p className="text-slate-700 leading-relaxed text-center mb-4">
            The common AEs include headaches, nausea, vomiting, hair loss, skin/ocular irritation[11], 
            teratogenic and reproductive AEs (miscarriage [especially when handling chemotherapy during 
            the first trimester] [11], infertility, preterm births, and learning disabilities in offspring) [1025].
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
          <strong>⚠️ Critical Note:</strong> A wide range of empirical studies reported occupational 
          exposure-related adverse effects. The evidence is particularly strong for reproductive effects 
          when handling chemotherapy during pregnancy, <strong className="text-red-700">especially in the first trimester.</strong>
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
        headers={["Research Methods", "Main Findings on Occupational Exposure and Adverse Effects"]}
        rows={[
          [
            "Meta-analysis",
            "Antineoplastic agents increase nurses' risk of spontaneous abortions, stillbirths, and congenital abnormalities."
          ],
          [
            "Review",
            "Several studies reported remarkable portions of ADs or their metabolites in biological samples of HCWs. Nurses who directly handle ADs identified the greater risk category of contamination."
          ],
          [
            "Mixed Study among HCWs in southern Brazil",
            "Drug exposure methods are dermal contact, aerosols/inhalation, and ingestion.\n\nLack of knowledge and weaknesses in handling drugs are reported."
          ],
          [
            "Case-Control Study among nurses in Cairo University, Egypt",
            "<ul><li>Prevalence of menstrual disorders and abortions among exposed HCWs was significantly associated with drug handling (compared to controls).</li><li>Adverse effects: Frequent infections (37.5%), hair loss (68.8%) (only among exposure groups).</li><li>Other adverse effects: Allergic symptoms (59.4%)</li><li>Exposure to Cisplatin was statistically significant with kidney and liver function tests and DNA damage.</li></ul>"
          ],
          [
            "Cross-sectional, comparative study among nurses, Turkey",
            "Prevalence of fatigue - 67.1%, weakness - 50.7%, hair loss - 41.1%\n\nThe prevalence of hair loss and dizziness was significant with the administration of antineoplastic drugs."
          ],
          [
            "Descriptive cross-sectional study among nurses, nursing assistants, Latvia",
            "Prevalence of at least one adverse effect - 56.86%\n\nCommon acute adverse effect: headache (37.25%)\n\nEye irritation - 25.49%, skin irritation - 19.60%\n\nWorking years are significantly and positively associated with headache, dizziness, irritation of the mouth and throat, and irritation of the eyes"
          ]
        ]}
      />

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <StatCard number="68.8%" label="Hair Loss (Egypt)" color="bg-purple-100" />
        <StatCard number="67.1%" label="Fatigue (Turkey)" color="bg-blue-100" />
        <StatCard number="59.4%" label="Allergic Symptoms (Egypt)" color="bg-pink-100" />
      </div>

      <div className="mt-6 bg-amber-50 rounded-lg p-5 border-2 border-amber-200">
        <h5 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Key Research Implications
        </h5>
        <p className="text-sm text-slate-700">
          The consistent findings across multiple research methods and geographic locations strongly 
          support the need for rigorous safety precautions when handling chemotherapy. The correlation 
          between years of exposure and adverse effects highlights the cumulative nature of occupational risk.
        </p>
      </div>
    </ContentCard>
  </>
);

export default EvidenceExposureSection;