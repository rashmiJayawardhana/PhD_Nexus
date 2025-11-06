// FILE: src/components/content/chapter03/StandardGuidelinesSection.tsx
import { FileText, Building2, BookOpen } from 'lucide-react';
import { ContentCard } from "../ContentCard";
import { DataTable } from "../DataTable";
import { InfoBox } from "../InfoBox";

export const StandardGuidelinesSection: React.FC = () => (
  <>
    {/* Main Introduction Card */}
    <ContentCard 
      title="Standard Guidelines for Handling Chemotherapy" 
      icon={<FileText className="w-6 h-6 text-blue-600" />}
      variant="info"
    >
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-5 shadow-inner">
          <p className="text-slate-700 leading-relaxed text-base">
            Although the anti-cancer agents/chemotherapy-related risk is balanced for patients, occupational 
            exposure harms healthcare workers. Therefore, government and regulatory agencies issue safety 
            precautions to protect healthcare workers from unnecessary exposure.
          </p>
        </div>

        <InfoBox type="note">
          <strong>Important:</strong> Multiple international organizations have developed comprehensive 
          guidelines for safe handling of hazardous drugs. Healthcare facilities should adopt and implement 
          these evidence-based recommendations.
        </InfoBox>

        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-6 border-2 border-blue-300 mt-4">
          <div className="flex items-start gap-4">
            <div className="bg-white rounded-full p-3 shadow-md">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h4 className="font-bold text-blue-900 text-lg mb-2">Why Guidelines Matter</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                These standardized guidelines ensure consistent, evidence-based practices across healthcare 
                settings, protecting workers from hazardous drug exposure while maintaining patient care quality.
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
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-4 mb-4 border-l-4 border-teal-500">
        <p className="text-slate-700 text-sm italic font-medium">
          📋 Table 10: Standard guidelines in handling chemotherapy
        </p>
      </div>

      <DataTable 
        headers={["Organization/Regulatory Agency", "Safe Handling Guidelines"]}
        rows={[
          [
            "National Institute for Occupational Safety and Health (NIOSH)",
            "Alert Preventing Occupational Exposures to Antineoplastic and Other Hazardous Drugs in Health Care Settings (2004)\n\nNIOSH List of Antineoplastic and Other Hazardous Drugs in Healthcare Settings (2016)"
          ],
          [
            "Occupational Safety and Health Administration (OSHA)",
            "Controlling Occupational Exposure to Hazardous Drugs (2016)"
          ],
          [
            "American Society of Health-System Pharmacists (ASHP)",
            "Guidelines on Handling Hazardous Drugs, American Journal of Hospital Pharmacy (2006)"
          ],
          [
            "United States Pharmacopeia (USP)",
            "Hazardous Drugs-Handling in Healthcare Settings (2016)\n\nUSP chapter 800 (2019)"
          ],
          [
            "Oncology Nurses Society (ONS)",
            "Safe Handling of Hazardous Drugs, 3rd Edition (2017)"
          ],
          [
            "International Society of Oncology Pharmacy Practitioners (ISOPP)",
            "ISOPP Standards for the Safe Handling of Cytotoxic (2007)"
          ],
          [
            "Oncology Nursing Society (ONS)/American Society of Clinical Oncology (ASCO) /Hematology Oncology Pharmacy Association (HOPA)",
            "The joint position statement on Ensuring Healthcare Worker Safety When Handling Hazardous Drugs (2016)"
          ]
        ]}
      />

      <div className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-300 shadow-md">
        <div className="flex items-start gap-3">
          <span className="text-3xl">📋</span>
          <div>
            <h5 className="font-bold text-blue-900 mb-3 text-lg">Guideline Application</h5>
            <p className="text-sm text-slate-700 leading-relaxed">
              Each guideline describes recommendations and mandates of handling chemotherapy and other 
              hazardous drugs at each step of handling. Practices related to oncology nursing can be 
              adopted from those guidelines. As an example, standards related to oncology nursing practice, 
              which are derived from the USP general chapter 800, are outlined in table.
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
          USP General Chapter 800 provides specific standards that directly impact oncology nursing practice. 
          The following sections outline key requirements nurses must follow:
        </p>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 mb-4 border-l-4 border-purple-500">
        <p className="text-slate-700 text-sm italic font-medium">
          📊 Table 11: USP &lt;800&gt; standards in oncology nursing practice
        </p>
      </div>

      <DataTable 
        headers={["Section/Standard", "Overview of Requirements"]}
        rows={[
          [
            "8 - Hazard Communication",
            "Written plan:\n<ul><li>Labeling of HD containers</li><li>Safety Data Sheets (SDS) for all HDs</li><li>Information before initial handling</li><li>Personnel of reproductive capability acknowledge the risks of HDs</li></ul>"
          ],
          [
            "9 - Personal Training",
            "Minimum training (initial and every 12 months):\n<ul><li>List of HDs and their risks</li><li>Review of HD handling policies</li><li>How to use PPE</li><li>How to use protective equipment</li><li>How to respond to HD exposure</li><li>How to manage HD spills</li><li>How to dispose of HDs & contaminated items</li></ul>"
          ],
          [
            "14 - Safe Administration",
            "Protective devices and techniques:\n<ul><li>Wear PPE</li><li>Use closed system transfer devices for antineoplastic HDs</li><li>Discard HDs & contaminated equipment in approved containers</li><li>Avoid manipulating HDs outside of the containment device</li></ul>"
          ],
          [
            "15 - Decontamination",
            "Written procedures for decontamination of equipment and surfaces:\n<ul><li>Training for personnel who perform decontamination</li><li>Specify agents for decontamination</li><li>Specify the frequency of decontamination</li><li>Specify PPE for decontamination</li></ul>"
          ],
          [
            "16 - Spill Control",
            "Written procedures for HD spill management:\n<ul><li>Training for personnel who clean up spills</li><li>Qualified personnel available</li><li>Spill kits available</li><li>Specify PPE for spill cleanup</li><li>Specify documentation requirements</li></ul>"
          ]
        ]}
      />

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-teal-100 to-teal-50 rounded-lg p-4 border-2 border-teal-300 text-center">
          <div className="text-3xl mb-2">🎓</div>
          <h6 className="font-bold text-teal-900 text-sm mb-1">Training</h6>
          <p className="text-xs text-slate-600">Annual competency assessments</p>
        </div>
        <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-4 border-2 border-blue-300 text-center">
          <div className="text-3xl mb-2">🛡️</div>
          <h6 className="font-bold text-blue-900 text-sm mb-1">Protection</h6>
          <p className="text-xs text-slate-600">Proper PPE & equipment use</p>
        </div>
        <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg p-4 border-2 border-purple-300 text-center">
          <div className="text-3xl mb-2">📝</div>
          <h6 className="font-bold text-purple-900 text-sm mb-1">Documentation</h6>
          <p className="text-xs text-slate-600">Written procedures & records</p>
        </div>
      </div>

      <InfoBox type="tip">
        <strong>Compliance Note:</strong> All oncology nurses handling hazardous drugs must be familiar 
        with USP 800 requirements and ensure their practice aligns with these standards. Regular training 
        and competency assessments are mandatory.
      </InfoBox>
    </ContentCard>
  </>
);

export default StandardGuidelinesSection;