// FILE: src/components/content/chapter03/StandardGuidelinesSection.tsx
import { FileText, Building2 } from 'lucide-react';
import { ContentCard } from "../ContentCard";
import { DataTable } from "../DataTable";
import { InfoBox } from "../InfoBox";

export const StandardGuidelinesSection: React.FC = () => (
  <>
    <ContentCard 
      title="Standard Guidelines for Handling Chemotherapy" 
      icon={<FileText className="w-6 h-6 text-blue-600" />}
      variant="info"
    >
      <div className="space-y-4">
        <p className="text-slate-700 leading-relaxed">
          Although the anti-cancer agents/chemotherapy-related risk is balanced for patients, occupational 
          exposure harms healthcare workers. Therefore, government and regulatory agencies issue safety 
          precautions to protect healthcare workers from unnecessary exposure.
        </p>

        <InfoBox type="note">
          <strong>Important:</strong> Multiple international organizations have developed comprehensive 
          guidelines for safe handling of hazardous drugs. Healthcare facilities should adopt and implement 
          these evidence-based recommendations.
        </InfoBox>
      </div>
    </ContentCard>

    <ContentCard 
      title="Key Organizations and Guidelines" 
      icon={<Building2 className="w-6 h-6 text-teal-600" />}
    >
      <p className="text-slate-700 mb-4 text-sm italic">
        Table 10: Standard guidelines in handling chemotherapy
      </p>

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
            "Hazardous Drugs--Handling in Healthcare Settings (2016)\n\nUSP chapter 800 (2019)"
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

      <div className="mt-6 bg-blue-50 rounded-lg p-5 border-2 border-blue-200">
        <h5 className="font-bold text-blue-900 mb-2">📋 Guideline Application</h5>
        <p className="text-sm text-slate-700">
          Each guideline describes recommendations and mandates of handling chemotherapy and other 
          hazardous drugs at each step of handling. Practices related to oncology nursing can be 
          adopted from those guidelines. As an example, standards related to oncology nursing practice, which are derived from the USP general chapter 800, are outlined in table.
        </p>
      </div>
    </ContentCard>

    {/* USP 800 Standards */}
    <ContentCard 
      title="USP Chapter 800: Standards for Oncology Nursing Practice" 
      icon={<span className="text-2xl">📖</span>}
      variant="highlight"
    >
      <p className="text-slate-700 leading-relaxed mb-4">
        USP General Chapter 800 provides specific standards that directly impact oncology nursing practice. 
        The following sections outline key requirements nurses must follow:
      </p>

      <p className="text-slate-700 mb-4 text-sm italic">
        Table 11: USP &lt;800&gt; standards in oncology nursing practice
      </p>

      <DataTable 
        headers={["Section/Standard", "Overview of Requirements"]}
        rows={[
          [
            "8 - Hazard Communication",
            "<ul><li>Written plan:\n</li><li>Labeling of HD containers</li><li>Safety Data Sheets (SDS) for all HDs</li><li>Information before initial handling</li><li>Personnel of reproductive capability acknowledge the risks of HDs</li></ul>"
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

      <InfoBox type="tip">
        <strong>Compliance Note:</strong> All oncology nurses handling hazardous drugs must be familiar 
        with USP 800 requirements and ensure their practice aligns with these standards. Regular training 
        and competency assessments are mandatory.
      </InfoBox>
    </ContentCard>
  </>
);

export default StandardGuidelinesSection;