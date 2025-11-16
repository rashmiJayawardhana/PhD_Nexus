// FILE: src/components/content/chapter03/03HierarchicalControlsOverviewSection.tsx
import { Shield, Layers, TrendingDown } from 'lucide-react';
import { ContentCard } from "../ContentCard";
import { DataTable } from "../DataTable";
import { InfoBox } from "../InfoBox";
import { DataSourceIndicator, useHybridContent } from '@/hooks/useHybridContent';
import hierarchyImage from '../../../assets/hierarchy.png';

const HIERARCHY_FALLBACK = {
  mainIntro: 'Hierarchical controls included five levels of precautions in handling chemotherapy and other hazardous drugs, including (1) elimination, (2) substitution, (3) engineering controls, (4) administrative controls, and (5) PPE[19,25,32].',
  
  criticalPrinciple: 'Applying all levels of precautions, from the most effective to the least adequate, in hierarchical control is vital. However, when it is not possible to apply an upper level of protection, the immediate next level of precautions should be used to ensure occupational and environmental health safety (Table 12).',
  
  level1And2Context: 'Levels 1 and 2 precautions included elimination (removing HDs) and substitution (considering a less toxic drug). Both levels of measures are rarely possible in the clinical setting since the treatment / anti-cancer drug depends on the cancer diagnosis[19,32]. Therefore, next-level measures (engineering controls, administrative controls, and PPE) need to be appropriately applied in the healthcare settings[19].',
  
  eliminationSubstitutionNote: 'Elimination (removing HDs) and substitution (considering a less toxic drug) are rarely possible in clinical settings since treatment / anti-cancer drug depends on cancer diagnosis. Therefore, next-level measures (engineering controls, administrative controls, and PPE) must be applied.',
  
  applicableControls: 'Engineering controls, administrative controls, and PPE are the primary protective measures used in healthcare settings to minimize exposure to hazardous drugs.',
  
  tableIntro: 'Table 12: Hierarchical controls for handling chemotherapy',
  
  controlsTable: {
    headers: { col0: "Level and Type of Control", col1: "Main Mechanism", col2: "Examples" },
    rows: {
      row0: { col0: "Level 1 - Elimination", col1: "Elimination of HDs from the workplace", col2: "Remove HDs from the workplace" },
      row1: { col0: "Level 2 - Substitution", col1: "Substitution of HD with a less HD", col2: "Use a low-risk HD or low-risk dosage form to reduce exposure-related risk (e.g., tablets instead of IV infusions if it is clinically appropriate)" },
      row2: { col0: "Level 3 - Engineering Controls", col1: "Engineering controls protect workers by physically changing the work environment to minimize exposure to HDs", col2: "<ul><li>Containment Primary Engineering Controls (C-PEC) (e.g., BSC/isolators)</li><li>Containment Secondary Engineering Controls (C-SEC) (e.g., designed room and parameters for compounding drugs)</li><li>Supplementary engineering controls (e.g., Closed-System Drug-Transfer Devices [CSTDs])</li></ul>" },
      row3: { col0: "Level 4 - Administrative Controls", col1: "Reduce exposure to the work environment by maintaining appropriate work practices", col2: "<ul><li>Reduce the frequency of handling HDs</li><li>Limit access in handling HDs</li><li>Restrict participants in the HD handling areas</li><li>Practice proper handwashing</li><li>Develop and implement safe work procedures for each step of handling</li><li>Implement an effective cleaning routine</li><li>Implement protective reassignment</li><li>Design and implement training opportunities for HCWs based on their roles in handling</li><li>Medical surveillance</li></ul>" },
      row4: { col0: "Level 5 - PPE", col1: "Limit exposure to HDs", col2: "PPE included:\n<ul><li>Gloves and gowns designed to protect from HDs</li><li>Respirators</li><li>Eye and face protection</li><li>Appropriate footwear</li></ul>" }
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

export const HierarchicalControlsOverviewSection: React.FC = () => {
  const { data, source } = useHybridContent({
    chapterId: 'chapter-03',
    sectionId: 'hierarchy',
    fallbackData: HIERARCHY_FALLBACK
  });

  const controlsTable = tableToArray(data.controlsTable);

  return (
    <>
      <DataSourceIndicator source={source} />
      
      {/* Main Overview Card */}
      <ContentCard 
        title="Hierarchical Controls for Handling Chemotherapy" 
        icon={<Shield className="w-6 h-6 text-purple-600" />}
        variant="highlight"
      >
        <div className="space-y-5">
          <div className="bg-white rounded-xl p-5 shadow-inner border-2 border-purple-100">
            <p className="text-slate-700 leading-relaxed text-base">
              {data.mainIntro}
            </p>
          </div>

          {/* Hierarchy Pyramid Visual */}
          <div className="bg-linear-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-purple-200 shadow-lg">
            <h5 className="font-bold text-purple-900 mb-4 text-center text-xl flex items-center justify-center gap-2">
              <TrendingDown className="w-6 h-6" />
              Hierarchy of Controls Pyramid
            </h5>
            <div className="flex justify-center mb-4">
              <img
                src={hierarchyImage}
                alt="Hierarchical controls pyramid showing five levels from most to least effective"
                className="rounded-lg shadow-2xl max-w-full w-auto border-4 border-white"
                style={{ maxHeight: '500px' }}
              />
            </div>
            <p className="text-xs text-slate-600 mt-4 text-center italic bg-white rounded-lg py-2 px-4 inline-block w-full">
              ⬇️ Five levels of precautionary measures (from most to least effective) ⬇️
            </p>
          </div>

          {/* Quick Reference Cards */}
          <div className="grid md:grid-cols-5 gap-3 mt-6">
            <div className="bg-linear-to-br from-red-100 to-red-50 rounded-lg p-3 border-2 border-red-300 text-center">
              <div className="text-2xl mb-1">1️⃣</div>
              <h6 className="font-bold text-red-900 text-xs">Elimination</h6>
              <p className="text-[10px] text-slate-600 mt-1">Remove HDs</p>
            </div>
            <div className="bg-linear-to-br from-orange-100 to-orange-50 rounded-lg p-3 border-2 border-orange-300 text-center">
              <div className="text-2xl mb-1">2️⃣</div>
              <h6 className="font-bold text-orange-900 text-xs">Substitution</h6>
              <p className="text-[10px] text-slate-600 mt-1">Less toxic options</p>
            </div>
            <div className="bg-linear-to-br from-yellow-100 to-yellow-50 rounded-lg p-3 border-2 border-yellow-300 text-center">
              <div className="text-2xl mb-1">3️⃣</div>
              <h6 className="font-bold text-yellow-900 text-xs">Engineering</h6>
              <p className="text-[10px] text-slate-600 mt-1">BSC, isolators</p>
            </div>
            <div className="bg-linear-to-br from-green-100 to-green-50 rounded-lg p-3 border-2 border-green-300 text-center">
              <div className="text-2xl mb-1">4️⃣</div>
              <h6 className="font-bold text-green-900 text-xs">Administrative</h6>
              <p className="text-[10px] text-slate-600 mt-1">Work practices</p>
            </div>
            <div className="bg-linear-to-br from-blue-100 to-blue-50 rounded-lg p-3 border-2 border-blue-300 text-center">
              <div className="text-2xl mb-1">5️⃣</div>
              <h6 className="font-bold text-blue-900 text-xs">PPE</h6>
              <p className="text-[10px] text-slate-600 mt-1">Gloves, gowns</p>
            </div>
          </div>

          <InfoBox type="note">
            <strong>Critical Principle:</strong> {data.criticalPrinciple}
          </InfoBox>
        </div>
      </ContentCard>

      {/* Detailed Table Card */}
      <ContentCard 
        title="Detailed Overview of Each Control Level" 
        icon={<Layers className="w-6 h-6 text-teal-600" />}
      >
        <div className="bg-linear-to-br from-indigo-50 to-purple-50 rounded-lg p-4 mb-4 border-l-4 border-indigo-500">
          <p className="text-slate-700 text-sm italic font-medium">
            {data.tableIntro}
          </p>
        </div>

        <DataTable 
          headers={controlsTable.headers}
          rows={controlsTable.rows}
        />

        {/* Application Context */}
        <div className="mt-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-linear-to-br from-red-50 to-orange-50 rounded-xl p-5 border-2 border-red-200 shadow-md">
              <div className="flex items-start gap-3">
                <span className="text-3xl">❌</span>
                <div>
                  <h5 className="font-bold text-red-900 mb-3">Levels 1 & 2: Limited Application</h5>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {data.eliminationSubstitutionNote}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-green-50 to-teal-50 rounded-xl p-5 border-2 border-green-200 shadow-md">
              <div className="flex items-start gap-3">
                <span className="text-3xl">✓</span>
                <div>
                  <h5 className="font-bold text-green-900 mb-3">Levels 3-5: Widely Applied</h5>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {data.applicableControls}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Context Box */}
        <div className="mt-6 bg-linear-to-r from-amber-50 to-yellow-50 rounded-xl p-6 border-2 border-amber-300">
          <h5 className="font-bold text-amber-900 mb-3 text-lg">🔍 Levels 1 and 2: Elimination and Substitution</h5>
          <p className="text-slate-700 leading-relaxed">
            {data.level1And2Context}
          </p>
        </div>
      </ContentCard>
    </>
  );
};

export default HierarchicalControlsOverviewSection;