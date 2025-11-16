// FILE: src/components/content/chapter03/02StandardGuidelinesSection.tsx
import { FileText, Building2, BookOpen } from 'lucide-react';
import { ContentCard } from "../ContentCard";
import { DataTable } from "../DataTable";
import { InfoBox } from "../InfoBox";
import { DataSourceIndicator, useHybridContent } from '@/hooks/useHybridContent';

const GUIDELINES_FALLBACK = {
  mainIntro: 'Although the anti-cancer agents/chemotherapy-related risk is balanced for patients, occupational exposure harms healthcare workers. Therefore, government and regulatory agencies issue safety precautions[10,25] to protect healthcare workers from unnecessary exposure.',
  
  importantNote: 'Multiple international organizations have developed comprehensive guidelines for safe handling of hazardous drugs. Healthcare facilities should adopt and implement these evidence-based recommendations.',
  
  whyMatters: 'These standardized guidelines ensure consistent, evidence-based practices across healthcare settings, protecting workers from hazardous drug exposure while maintaining patient care quality.',
  
  tableIntro: 'Table 10: Standard guidelines in handling chemotherapy',
  
  guidelineApplication: 'Each guideline describes recommendations and mandates of handling chemotherapy and other hazardous drugs at each step of handling. Practices related to oncology nursing can be adopted from those guidelines. As an example, standards related to oncology nursing practice, which are derived from the USP general chapter 800, are outlined in table[24,25].',
  
  uspIntro: 'USP General Chapter 800 provides specific standards that directly impact oncology nursing practice. The following sections outline key requirements nurses must follow:',
  
  uspTableIntro: 'Table 11: USP <800> standards in oncology nursing practice',
  
  complianceNote: 'All oncology nurses handling hazardous drugs must be familiar with USP 800 requirements and ensure their practice aligns with these standards. Regular training and competency assessments are mandatory.',
  
  guidelinesTable: {
    headers: { col0: "Organization/Regulatory Agency", col1: "Safe Handling Guidelines" },
    rows: {
      row0: { col0: "National Institute for Occupational Safety and Health (NIOSH)", col1: "Alert Preventing Occupational Exposures to Antineoplastic and Other Hazardous Drugs in Health Care Settings (2004)[10]\n\nNIOSH List of Antineoplastic and Other Hazardous Drugs in Healthcare Settings (2016)[10]" },
      row1: { col0: "Occupational Safety and Health Administration (OSHA)", col1: "Controlling Occupational Exposure to Hazardous Drugs (2016)[10]" },
      row2: { col0: "American Society of Health-System Pharmacists (ASHP)", col1: "Guidelines on Handling Hazardous Drugs, American Journal of Hospital Pharmacy (2006)[10]" },
      row3: { col0: "United States Pharmacopeia (USP)", col1: "Hazardous Drugs-Handling in Healthcare Settings (2016)\n\nUSP chapter 800 (2019)[10]" },
      row4: { col0: "Oncology Nurses Society (ONS)", col1: "Safe Handling of Hazardous Drugs, 3rd Edition (2017)[10]" },
      row5: { col0: "International Society of Oncology Pharmacy Practitioners (ISOPP)", col1: "ISOPP Standards for the Safe Handling of Cytotoxic (2007)[10]" },
      row6: { col0: "Oncology Nursing Society (ONS)/American Society of Clinical Oncology (ASCO) /Hematology Oncology Pharmacy Association (HOPA)", col1: "The joint position statement on Ensuring Healthcare Worker Safety When Handling Hazardous Drugs (2016)[1031]" }
    }
  },
  
  usp800Table: {
    headers: { col0: "Section/Standard", col1: "Overview of Requirements" },
    rows: {
      row0: { col0: "8 - Hazard Communication", col1: "Written plan:\n<ul><li>Labeling of HD containers</li><li>Safety Data Sheets (SDS) for all HDs</li><li>Information before initial handling</li><li>Personnel of reproductive capability acknowledge the risks of HDs</li></ul>" },
      row1: { col0: "9 - Personal Training", col1: "Minimum training (initial and every 12 months):\n<ul><li>List of HDs and their risks</li><li>Review of HD handling policies</li><li>How to use PPE</li><li>How to use protective equipment</li><li>How to respond to HD exposure</li><li>How to manage HD spills</li><li>How to dispose of HDs & contaminated items</li></ul>" },
      row2: { col0: "14 - Safe Administration", col1: "Protective devices and techniques:\n<ul><li>Wear PPE</li><li>Use closed system transfer devices for antineoplastic HDs</li><li>Discard HDs & contaminated equipment in approved containers</li><li>Avoid manipulating HDs outside of the containment device</li></ul>" },
      row3: { col0: "15 - Decontamination", col1: "Written procedures for decontamination of equipment and surfaces:\n<ul><li>Training for personnel who perform decontamination</li><li>Specify agents for decontamination</li><li>Specify the frequency of decontamination</li><li>Specify PPE for decontamination</li></ul>" },
      row4: { col0: "16 - Spill Control", col1: "Written procedures for HD spill management:\n<ul><li>Training for personnel who clean up spills</li><li>Qualified personnel available</li><li>Spill kits available</li><li>Specify PPE for spill cleanup</li><li>Specify documentation requirements</li></ul>" }
    }
  }
};

function tableToArray(table: { headers: Record<string, string>, rows: Record<string, Record<string, string>> }): { headers: string[], rows: string[][] } {
  const headers = Object.keys(table.headers).sort().map(k => table.headers[k]);
  const rows = Object.keys(table.rows).sort().map(rowKey => {
    const row = table.rows[rowKey];
    return Object.keys(row).sort().map(k => row[k]);
  });
  return { headers, rows };
}

export const StandardGuidelinesSection: React.FC = () => {
  const { data, source } = useHybridContent({
    chapterId: 'chapter-03',
    sectionId: 'guidelines',
    fallbackData: GUIDELINES_FALLBACK
  });

  const guidelinesTable = tableToArray(data.guidelinesTable);
  const usp800Table = tableToArray(data.usp800Table);

  return (
    <>
      <DataSourceIndicator source={source} />
      
      {/* Main Introduction Card */}
      <ContentCard 
        title="Standard Guidelines for Handling Chemotherapy" 
        icon={<FileText className="w-6 h-6 text-blue-600" />}
        variant="info"
      >
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-5 shadow-inner">
            <p className="text-slate-700 leading-relaxed text-base">
              {data.mainIntro}
            </p>
          </div>

          <InfoBox type="note">
            <strong>Important:</strong> {data.importantNote}
          </InfoBox>

          <div className="bg-linear-to-r from-blue-100 to-cyan-100 rounded-xl p-6 border-2 border-blue-300 mt-4">
            <div className="flex items-start gap-4">
              <div className="bg-white rounded-full p-3 shadow-md">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-blue-900 text-lg mb-2">Why Guidelines Matter</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {data.whyMatters}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentCard>

      {/* Organizations Table Card */}
      <ContentCard 
        title="Key Organizations and Guidelines" 
        icon={<Building2 className="w-6 h-6 text-teal-600" />}
      >
        <div className="bg-linear-to-br from-teal-50 to-cyan-50 rounded-lg p-4 mb-4 border-l-4 border-teal-500">
          <p className="text-slate-700 text-sm italic font-medium">
            {data.tableIntro}
          </p>
        </div>

        <DataTable 
          headers={guidelinesTable.headers}
          rows={guidelinesTable.rows}
        />

        <div className="mt-6 bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-300 shadow-md">
          <div className="flex items-start gap-3">
            <span className="text-3xl">📋</span>
            <div>
              <h5 className="font-bold text-blue-900 mb-3 text-lg">Guideline Application</h5>
              <p className="text-sm text-slate-700 leading-relaxed">
                {data.guidelineApplication}
              </p>
            </div>
          </div>
        </div>
      </ContentCard>

      {/* USP 800 Standards Card */}
      <ContentCard 
        title="USP Chapter 800: Standards for Oncology Nursing Practice" 
        icon={<span className="text-2xl">📖</span>}
        variant="highlight"
      >
        <div className="bg-white rounded-lg p-5 shadow-inner mb-5">
          <p className="text-slate-700 leading-relaxed text-base">
            {data.uspIntro}
          </p>
        </div>

        <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-lg p-4 mb-4 border-l-4 border-purple-500">
          <p className="text-slate-700 text-sm italic font-medium">
            {data.uspTableIntro}
          </p>
        </div>

        <DataTable 
          headers={usp800Table.headers}
          rows={usp800Table.rows}
        />

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="bg-linear-to-br from-teal-100 to-teal-50 rounded-lg p-4 border-2 border-teal-300 text-center">
            <div className="text-3xl mb-2">🎓</div>
            <h6 className="font-bold text-teal-900 text-sm mb-1">Training</h6>
            <p className="text-xs text-slate-600">Annual competency assessments</p>
          </div>
          <div className="bg-linear-to-br from-blue-100 to-blue-50 rounded-lg p-4 border-2 border-blue-300 text-center">
            <div className="text-3xl mb-2">🛡️</div>
            <h6 className="font-bold text-blue-900 text-sm mb-1">Protection</h6>
            <p className="text-xs text-slate-600">Proper PPE & equipment use</p>
          </div>
          <div className="bg-linear-to-br from-purple-100 to-purple-50 rounded-lg p-4 border-2 border-purple-300 text-center">
            <div className="text-3xl mb-2">📝</div>
            <h6 className="font-bold text-purple-900 text-sm mb-1">Documentation</h6>
            <p className="text-xs text-slate-600">Written procedures & records</p>
          </div>
        </div>

        <InfoBox type="tip">
          <strong>Compliance Note:</strong> {data.complianceNote}
        </InfoBox>
      </ContentCard>
    </>
  );
};

export default StandardGuidelinesSection;