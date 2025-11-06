// FILE: src/components/content/chapter03/HierarchicalControlsOverviewSection.tsx
import { Shield, Layers, TrendingDown } from 'lucide-react';
import { ContentCard } from "../ContentCard";
import { DataTable } from "../DataTable";
import { InfoBox } from "../InfoBox";
import hierarchyImage from '../../../assets/hierarchy.png';

export const HierarchicalControlsOverviewSection: React.FC = () => (
  <>
    {/* Main Overview Card */}
    <ContentCard 
      title="Hierarchical Controls for Handling Chemotherapy" 
      icon={<Shield className="w-6 h-6 text-purple-600" />}
      variant="highlight"
    >
      <div className="space-y-5">
        <div className="bg-white rounded-xl p-5 shadow-inner border-2 border-purple-100">
          <p className="text-slate-700 leading-relaxed text-base">
            Hierarchical controls included five levels of precautions in handling chemotherapy and other 
            hazardous drugs, including (1) elimination, (2) substitution, (3) engineering controls, 
            (4) administrative controls, and (5) PPE.
          </p>
        </div>

        {/* Hierarchy Pyramid Visual */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-purple-200 shadow-lg">
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
          <div className="bg-gradient-to-br from-red-100 to-red-50 rounded-lg p-3 border-2 border-red-300 text-center">
            <div className="text-2xl mb-1">1️⃣</div>
            <h6 className="font-bold text-red-900 text-xs">Elimination</h6>
            <p className="text-[10px] text-slate-600 mt-1">Remove HDs</p>
          </div>
          <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg p-3 border-2 border-orange-300 text-center">
            <div className="text-2xl mb-1">2️⃣</div>
            <h6 className="font-bold text-orange-900 text-xs">Substitution</h6>
            <p className="text-[10px] text-slate-600 mt-1">Less toxic options</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-lg p-3 border-2 border-yellow-300 text-center">
            <div className="text-2xl mb-1">3️⃣</div>
            <h6 className="font-bold text-yellow-900 text-xs">Engineering</h6>
            <p className="text-[10px] text-slate-600 mt-1">BSC, isolators</p>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg p-3 border-2 border-green-300 text-center">
            <div className="text-2xl mb-1">4️⃣</div>
            <h6 className="font-bold text-green-900 text-xs">Administrative</h6>
            <p className="text-[10px] text-slate-600 mt-1">Work practices</p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-3 border-2 border-blue-300 text-center">
            <div className="text-2xl mb-1">5️⃣</div>
            <h6 className="font-bold text-blue-900 text-xs">PPE</h6>
            <p className="text-[10px] text-slate-600 mt-1">Gloves, gowns</p>
          </div>
        </div>

        <InfoBox type="note">
          <strong>Critical Principle:</strong> Applying all levels of precautions, from the most effective to the least adequate, in hierarchical control is vital. However, when it is not possible to apply an upper level of protection, the immediate next level of precautions should be used to ensure occupational and environmental health safety (Table 12).
        </InfoBox>
      </div>
    </ContentCard>

    {/* Detailed Table Card */}
    <ContentCard 
      title="Detailed Overview of Each Control Level" 
      icon={<Layers className="w-6 h-6 text-teal-600" />}
    >
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 mb-4 border-l-4 border-indigo-500">
        <p className="text-slate-700 text-sm italic font-medium">
          📊 Table 12: Hierarchical controls for handling chemotherapy
        </p>
      </div>

      <DataTable 
        headers={["Level and Type of Control", "Main Mechanism", "Examples"]}
        rows={[
          [
            "Level 1 - Elimination",
            "Elimination of HDs from the workplace",
            "Remove HDs from the workplace"
          ],
          [
            "Level 2 - Substitution",
            "Substitution of HD with a less HD",
            "Use a low-risk HD or low-risk dosage form to reduce exposure-related risk (e.g., tablets instead of IV infusions if it is clinically appropriate)"
          ],
          [
            "Level 3 - Engineering Controls",
            "Engineering controls protect workers by physically changing the work environment to minimize exposure to HDs",
            "<ul><li>Containment Primary Engineering Controls (C-PEC) (e.g., BSC/isolators)</li><li>Containment Secondary Engineering Controls (C-SEC) (e.g., designed room and parameters for compounding drugs)</li><li>Supplementary engineering controls (e.g., Closed-System Drug-Transfer Devices [CSTDs])</li></ul>"
          ],
          [
            "Level 4 - Administrative Controls",
            "Reduce exposure to the work environment by maintaining appropriate work practices",
            "<ul><li>Reduce the frequency of handling HDs</li><li>Limit access in handling HDs</li><li>Restrict participants in the HD handling areas</li><li>Practice proper handwashing</li><li>Develop and implement safe work procedures for each step of handling</li><li>Implement an effective cleaning routine</li><li>Implement protective reassignment</li><li>Design and implement training opportunities for HCWs based on their roles in handling</li><li>Medical surveillance</li></ul>"
          ],
          [
            "Level 5 - PPE",
            "Limit exposure to HDs",
            "PPE included:\n<ul><li>Gloves and gowns designed to protect from HDs</li><li>Respirators</li><li>Eye and face protection</li><li>Appropriate footwear</li></ul>"
          ]
        ]}
      />

      {/* Application Context */}
      <div className="mt-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-5 border-2 border-red-200 shadow-md">
            <div className="flex items-start gap-3">
              <span className="text-3xl">❌</span>
              <div>
                <h5 className="font-bold text-red-900 mb-3">Levels 1 & 2: Limited Application</h5>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Elimination (removing HDs) and substitution (considering a less toxic drug) are rarely possible in clinical settings since treatment / anti-cancer drug depends on cancer diagnosis. Therefore, next-level measures (engineering controls, administrative controls, and PPE) must be applied.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-5 border-2 border-green-200 shadow-md">
            <div className="flex items-start gap-3">
              <span className="text-3xl">✓</span>
              <div>
                <h5 className="font-bold text-green-900 mb-3">Levels 3-5: Widely Applied</h5>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Engineering controls, administrative controls, and PPE are the primary protective measures 
                  used in healthcare settings to minimize exposure to hazardous drugs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Context Box */}
      <div className="mt-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 border-2 border-amber-300">
        <h5 className="font-bold text-amber-900 mb-3 text-lg">🔍 Levels 1 and 2: Elimination and Substitution</h5>
        <p className="text-slate-700 leading-relaxed">
          Levels 1 and 2 precautions included elimination (removing HDs) and substitution (considering a less toxic drug). Both levels of measures are rarely possible in the clinical setting since the treatment / anti-cancer drug depends on the cancer diagnosis. Therefore, next-level measures (engineering controls, administrative controls, and PPE) need to be appropriately applied in the healthcare settings.
        </p>
      </div>
    </ContentCard>
  </>
);

export default HierarchicalControlsOverviewSection;